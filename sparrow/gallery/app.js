const gallery = document.getElementById("gallery");
const folderTemplate = document.getElementById("folder-template");
const cardTemplate = document.getElementById("card-template");
const summary = document.getElementById("summary");

function normalizeLabel(text) {
  const noExt = text.replace(/\.[^.]+$/, "");
  return noExt.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function titleForImage(path, titleMap) {
  if (titleMap[path]) return titleMap[path];

  const fileName = path.split("/").pop() || path;
  return normalizeLabel(fileName);
}

function folderDisplayName(folderName, folderMap) {
  return folderMap[folderName] || folderName;
}

function groupByFolder(paths) {
  const groups = new Map();

  for (const path of paths) {
    const slash = path.indexOf("/");
    const folder = slash === -1 ? "[root]" : path.slice(0, slash);

    if (!groups.has(folder)) groups.set(folder, []);
    groups.get(folder).push(path);
  }

  return [...groups.entries()].sort((a, b) =>
    a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: "base" })
  );
}

async function loadTitles() {
  try {
    const res = await fetch("titles.json", { cache: "no-store" });
    if (!res.ok) return { folders: {}, images: {} };

    const data = await res.json();
    return {
      folders: data.folders || {},
      images: data.images || {}
    };
  } catch {
    return { folders: {}, images: {} };
  }
}

// --- Lightbox ---
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCaption = document.getElementById("lb-caption");
const lbClose = lightbox.querySelector(".lb-close");
const lbPrev = lightbox.querySelector(".lb-prev");
const lbNext = lightbox.querySelector(".lb-next");

let allImages = [];  // flat ordered list of {src, title}
let lbIndex = 0;

function lbOpen(index) {
  lbIndex = index;
  const item = allImages[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.title;
  lbCaption.textContent = item.title;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lbImg.focus();
}

function lbClose_() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function lbStep(dir) {
  lbIndex = (lbIndex + dir + allImages.length) % allImages.length;
  const item = allImages[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.title;
  lbCaption.textContent = item.title;
}

lbClose.addEventListener("click", lbClose_);
lbPrev.addEventListener("click", () => lbStep(-1));
lbNext.addEventListener("click", () => lbStep(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lbClose_(); });

document.addEventListener("keydown", e => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") lbClose_();
  if (e.key === "ArrowLeft") lbStep(-1);
  if (e.key === "ArrowRight") lbStep(1);
});

// Touch/swipe
let touchStartX = 0;
lightbox.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) lbStep(dx < 0 ? 1 : -1);
}, { passive: true });

// --- Gallery render ---
function renderGallery(paths, titleConfig) {
  gallery.innerHTML = "";
  allImages = [];

  if (!paths.length) {
    gallery.innerHTML = '<p class="empty">No PNG files found in manifest.json.</p>';
    summary.textContent = "No images found.";
    return;
  }

  const grouped = groupByFolder(paths);
  summary.textContent = `${paths.length} images across ${grouped.length} folders.`;

  for (const [folder, items] of grouped) {
    const section = folderTemplate.content.firstElementChild.cloneNode(true);
    const title = section.querySelector(".folder-title");
    const grid = section.querySelector(".folder-grid");

    title.textContent = `${folderDisplayName(folder, titleConfig.folders)} (${items.length})`;

    items.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    for (const path of items) {
      const card = cardTemplate.content.firstElementChild.cloneNode(true);
      const img = card.querySelector("img");
      const caption = card.querySelector("figcaption");
      const imgTitle = titleForImage(path, titleConfig.images);

      img.src = path;
      img.alt = imgTitle;
      caption.textContent = imgTitle;

      const idx = allImages.length;
      allImages.push({ src: path, title: imgTitle });

      card.style.cursor = "zoom-in";
      card.addEventListener("click", () => lbOpen(idx));

      grid.appendChild(card);
    }

    gallery.appendChild(section);
  }
}

async function init() {
  try {
    const paths = window.MANIFEST;
    if (!Array.isArray(paths)) throw new Error("manifest.js not loaded");

    const titleConfig = window.TITLES
      ? { folders: window.TITLES.folders || {}, images: window.TITLES.images || {} }
      : { folders: {}, images: {} };

    renderGallery(paths, titleConfig);
  } catch (err) {
    gallery.innerHTML = `<p class="error">Could not load gallery data: ${err.message}</p>`;
    summary.textContent = "Failed to load.";
  }
}

init();

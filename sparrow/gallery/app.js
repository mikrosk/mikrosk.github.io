const gallery = document.getElementById("gallery");
const folderTemplate = document.getElementById("folder-template");
const cardTemplate = document.getElementById("card-template");
const summary = document.getElementById("summary");

function titleForImage(path, titleMap) {
  return titleMap[path] || "";
}

function folderDisplayName(folderName, folderMap) {
  return folderMap[folderName] || folderName;
}

const imgObserver = new IntersectionObserver((entries, obs) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const img = entry.target;
    const src = img.dataset.src;
    if (src && !img.src) img.src = src;
    obs.unobserve(img);
  }
}, { rootMargin: "400px 0px" });

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
    gallery.innerHTML = '<p class="empty">No PNG files found in manifest.js.</p>';
    summary.textContent = "No images found.";
    return;
  }

  const grouped = groupByFolder(paths);
  summary.textContent = "";

  for (const [folder, items] of grouped) {
    const section = folderTemplate.content.firstElementChild.cloneNode(true);
    const title = section.querySelector(".folder-title");
    const grid = section.querySelector(".folder-grid");

    title.textContent = folderDisplayName(folder, titleConfig.folders);

    items.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    for (const path of items) {
      const card = cardTemplate.content.firstElementChild.cloneNode(true);
      const img = card.querySelector("img");
      const caption = card.querySelector("figcaption");
      const captionText = caption.querySelector(".caption-text");
      const toggle = caption.querySelector(".caption-toggle");
      const imgTitle = titleForImage(path, titleConfig.images);

      img.dataset.src = path;
      img.alt = imgTitle;
      imgObserver.observe(img);
      if (imgTitle) {
        captionText.textContent = imgTitle;
        toggle.addEventListener("click", e => {
          e.stopPropagation();
          const expanded = caption.classList.toggle("expanded");
          toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
          toggle.innerHTML = expanded ? "&#9652;" : "&#9662;";
          toggle.setAttribute("aria-label", expanded ? "Hide full title" : "Show full title");
        });
      } else {
        caption.remove();
      }

      const idx = allImages.length;
      allImages.push({ src: path, title: imgTitle });

      card.style.cursor = "zoom-in";
      card.addEventListener("click", () => lbOpen(idx));

      grid.appendChild(card);
    }

    gallery.appendChild(section);
  }

  refreshCaptionToggles();
}

function refreshCaptionToggles() {
  for (const caption of gallery.querySelectorAll("figcaption")) {
    if (caption.classList.contains("expanded")) continue;
    const text = caption.querySelector(".caption-text");
    const toggle = caption.querySelector(".caption-toggle");
    if (!text || !toggle) continue;
    toggle.hidden = text.scrollWidth <= text.clientWidth;
  }
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(refreshCaptionToggles, 120);
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(refreshCaptionToggles);
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

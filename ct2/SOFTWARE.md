# Software
CENTurbo II can operate in three software modes:

1. **NORMAL mode:** TOS 4.0x accessing original Falcon hardware (with the two exceptions - FPU clock and DSP-INT signal). Enabled using a hardware switch.
2. **TURBO mode (4.0x):** TOS 4.0x with accelerated Falcon hardware but no TT-RAM support. Soft reset doesn't work, you have to push the reset button to reboot the computer. Flash setup is accessible. Blitter can be used as usual although there may be [issues](NOTES.md#blitter-speed-and-errors).
3. **TURBO mode (7.0x):** Patched TOS 4.0x with TT-RAM support. TOS itself is copied into TT-RAM and patched there. Support for booting via an internal hard disk driver called Cecile (part of the flash rom). You have to use NVDI or MagiC to avoid using TOS 4.0x's VDI (which depends on the Blitter).

## First start
1. Start the CT2 in NORMAL mode
2. Launch CBOOT.APP
3. Reset NVRAM.

## TOS 4.01 & 4.02 Blitter issue
There's an interesting warning in French (and early CT2A English) version of `software.txt` about a "big problem" related to TOS 4.01 and 4.02 (even when used as TOS 7.01 and 7.02). Apparently if you change video resolution, the Blitter gets "reactivated". For instance if you open a high colour picture in CENTView started from a 16-colour mode, after going back to TOS you would get corrupted screen. The cure is to open `XCONTROL`'s `FGENERAL.CPX` (supplied by Centek which has re-enabled Blitter/cache control on the Falcon) and disable the Blitter again. The same thing happens during changing resolution from the desktop but the CPX (and its settings) is reloaded automatically.

## AUTO folder
- XBOOT
- MENU
- MAGXBOOT
- SETENV
- METADOS
- EXTENDOS
- DRVIN (replaces Fpatch2)
- SCC
- RSVX
- STING
- FDI_INIT
- JPEGD
- NVDI
- CKBD
- SPEEDOGDOS
- WDIALOG
- CENTSCREEN
- SLECTRIC
- UISIII
- FREEDOM
- LETEMFLY
- DESKPIC
- FALCT2_8 (formerly FALCON8)
- NOSYSTEM
- RDEBUG
- CENTINEL
- MINT
- DSP_IRQ

Note: since graphics output printed during `AUTO` folder's execution is only text copied from ROM to ST-RAM it works with usage of the Blitter as before.

## IDE & SCSI transfers / audio setting
It is essential to verify that IDE and SCSI can transfer data correctly.
- use `CC-TOOLS` to test
- create a big (at least 5 MB) ZIP file and transfer it from IDE to SCSI in 640x480@16-bit (e.g. with `CENTScreen`)
- depack the ZIP file

If there hasn't been an error, SCSI should be fine. If there has been an error, make sure your SCSI chain is properly terminated: the last physical device has to be terminated (while the others must not). Visually inspect all devices from inside to be 100% sure. Even if the chain has worked in NORMAL mode, TURBO mode may be affected by incorrect termination.

Audio quality has to be verified using a good application whether there aren't any audible crackles.

In case of a trouble with SCSI and/or audio locate four small square-shaped solder pads on the CT2 card (below the new CPU, between the small 14-pin ICs). The two leftmost pads are connected together with a solder bridge. Cut this bridge and create another solder bridge on the two rightmost pads. This puts a new SDMA timing in effect. Test everything again.

## Patches

### XBOOT
Set the fast load bit only as it uses the Blitter for drawing.

### [FGENERAL.CPX](files/centek/cpx.zip)
Patched version of Atari's `GENERAL.CPX` (it allows Blitter/cache settings manipulation, similar as when running on a TT machine). Must disable the Blitter & save... *(not sure why - it works fine with NVDI even without using FGENERAL.CPX -mikro)*

### FALCT2_8.PRG
Replaces FALCON8.PRG for Calamus in 256-color mode.

Part of the [CT2 patches](files/centek/patchct2.zip).

### MROS3_45.CTK
Modified MROS3_45 (located in `Cubase`'s MROS folder, rename/delete old MROS3_45 and rename MROS3_45.CTK to MROS3_45) to run under TOS 7.x. It is advised to create two setups, one with the original MROS3_45 and one with this patched one as these not compatible with each other.

Part of the [CT2 patches](files/centek/patchct2.zip).

### MO44.DRV
MO4 driver version 1.0 for Cubase (to be used it if the original driver doesn't work).

Part of the [CT2 patches](files/centek/patchct2.zip).

### MM1_04P.DRV
MO8 driver version 1.03 for Cubase (to be used it if the original driver doesn't work).

Part of the [CT2 patches](files/centek/patchct2.zip).

### REDACT4.PRG
Replacement of RED4_VGA.PRG for the Falcon when using with CENTscreen 3.

Part of the [CT2 patches](files/centek/patchct2.zip).

## Tools
Unfortunately Centek hadn't been releasing tools in both language mutations at the same time so most of the time French versions are more up to date. Also it's worth taking a look into French version of given app anyway as it tends to contain far more detailed description.

Tools which have higher version in French are: **CBOOT**, **Cécile**, **CENTScreen** and **PUTFLASH**.

### CBOOT
Flash setup and NVRAM configuration. It allows you to configure your CT2 without going to the flash setup.

Latest English version: [1.1.4](files/centek/en/cboot.zip)

Latest French version: [1.1.6](files/centek/fr/cboot.zip)

### Cécile
Centek's own hard disk driver. Each flash setup has certain version built in but this software version can not only update it to a later version but also provides more configuration options for the one built in. It provides three speed compatibility levels, the default is 1 (slowest). If that works, gradually try 2 and 3. If no.3 still works well, try to disable IDE wait states to achieve maximum speed transfer. These changes are written to `CECILE.SYS` on your boot partition so don't forget to reboot after that.

Latest English version: [2.18](files/centek/en/cecile.zip) (documentation in French anyway...)

Latest French version: [2.22](files/centek/fr/cecile.zip)

### CENTBench (DeadHeart's Centurbo Benchmark)
Centek's official benchmark app developed by Rodolphe Pineau. It shows the clock frequency of the CPU, FPU and DSP.

Latest (English) version: [24.08.1998](files/centek/centbnch.zip) (it doesn't seem to use version numbering at all...)

### CENTScreen
Centek's screen enhancer similar to `Videlity`. This is just a driver, the data file must be prepared by **CENTVidel**. It also provides an enhanced video selection dialog for TOS.

Latest English version: [3.5.1](files/centek/en/centscrn.zip)

Latest French version: [3.5.2](files/centek/fr/centscrn.zip)

### CENTVidel
`VIDEO.DAT` generator for **CENTScreen**.

Latest English version: [3.2.4](files/centek/en/centvidl.zip)

Latest French version: [3.2.4](files/centek/fr/centvidl.zip)

### CENTView
Picture viewer by Centek. Supports many image formats.

Latest (English) version: [2.9.0](files/centek/centview.zip)

### NVRAM
Simple NVRAM configuration tool. This version actually checks for CT2 presence and if present it forces you to use **CBOOT** instead. :)

Latest (English/German/French) version: [1.2.9](files/centek/nvram.zip)

### PUTFLASH
Software for updating the flash setup.

Latest English version: [1.2.5](files/centek/en/putflash.zip) (with English/French/German firmware 1.3.9)

Latest French version: [1.2.8](files/centek/fr/putflash.zip) (with French firmware 1.4.1)

### VIDEOMOD
Video selection dialog for the operating systems which can't use built-in TOS dialog. Except the resolution selection it offers also a screen saver a few other bits. Requires **CENTScreen** to use.

Latest English version: [1.2.2](files/centek/en/videomod.zip)

Latest French version: [1.2.2](files/centek/fr/videomod.zip)

### BLITSLOW.PRG
Decrease the speed of the Blitter. Use in case of display problems with the Blitter in TOS 4.x TURBO mode (without NVDI). This function is also present in the flash setup.

Part of the [CT2 patches](files/centek/patchct2.zip).

### DSP_IRQ.PRG
Software emulation of the missing DSP interrupt line (using the 'spurious interrupt' 68030 vector). DSP wait states must be disabled in the flash setup when using this tool.

This allows apps like `MP2` <= 0.994, `Aniplayer` (when playing Cinepak \[cvid\], Apple/QuickTime Video \[rpza\], Microsoft Video 1 \[msvc/cram8\] AVI/MOV files in 'Without GEM' mode), `MegaPlayer`, `Quincy` and some demos to work properly.

Integrated into Flash setup 1.4.1. Part of the [CT2 patches](files/centek/patchct2.zip).

### [EXCLKOFF.PRG](files/centek/exclkoff.zip)
Program to disable CT2's external clock on the Videl pin (in NORMAL mode). In TURBO mode you can do this in the flash setup. As using CT2's external clock is [not recommended](NOTES.md#external-video-clock), this should be the default state and this program not needed.

### EXTCLOCK.PRG
Similarly named program with a totally different functionality. When running on a CT2**A** and RGB/SM124 monitor, it set the VID pin to 32 MHz (instead of 36 MHz). The functionality should be present in **CENTScreen**.

Part of the [CT2 patches](files/centek/patchct2.zip).

### MAGIC_P.PRG
Modifies MAGIC.RAM (of `MagiC` 5.xx and 6.xx; 4.xx should work too). Copy the patcher into the same place where MAGIC.RAM is located (usually the boot partition). The patcher will create MAGIC.BAK as a backup. If MAGXBOOT.PRG gets stuck during boot try to warm-reset the machine as a workaround. `MagiC` will still work in NORMAL mode.

Part of the [CT2 patches](files/centek/patchct2.zip).

### SCSITEST.PRG
A tool to test SCSI transfer reliability. Not present in later software packages.

### [SDMATEST.PRG](files/centek/sdmatest.zip)
Audio test for checking quality of the DMA sample playback. Not present in later software packages.

### [WPMMUCT2.PRG](files/didier/wpmmuct2.zip)
Patches the TOS 7.0x so accesing addresses between $0000 and $07ff generate a bus error. Install this program as the first in your AUTO folder. Don't set TT-RAM flags on the .PRG file!

Following memory regions do not generate a bus error when accessing on the CT2:
- $0000 - $07ff (low memory)
- $00exxxxx (ROM)
- $00ffxxxx (I/O)

Integrated into Flash setup 1.4.1. Developed by Didier Méquignon.

***Detailed explanation by Xavier Joubert regarding FreeMiNT compatibility:***

*Basically CT2 boot code (We're talking about CT2 here - CT60 is far better on this topic) always use the PMMU to remap its TT-RAM from $0x04000000 to the 
well known 0x01000000.*

*Didier wrote a small AUTO folder program which adds a supervisor protection on low mem. It's available on his web site. This was later included into the CT2 boot code.*

*Since the PMMU is used, MiNT was unable to run with memory protection. So Didier wrote a specific patch to allow MP with MiNT on CT2. It's commited to CVS in sys/arch/mprot030.c (search for "CT2" there). This code handle the strange TT-RAM base address, but it seems nothing was done to add supervisor protection of low mem.*

*On a standard Atari or clone, the low mem (0x0000-0x07FF) is supervisor only. This check is done by a chip called MMU on the ST family (which is very 
different from the MMU inside an m68k, this is why we use to call this a PMMU - PAGED Memory Management Unit - on Atari.), or COMBEL on the Falcon.*

*Since it's an external chip that generate the bus error (acces fault in the 680[46]0 terminology), we cannot skip it with the PMMU. Even if we say in the PMMU 
tree that this zone is user-readable, any attempt to do so will still generate an exception.*

*A problem of the CT2 is that 0x0000-0x07FF is user readable (and 0x0008-0x07FF user writable) on this board. Didier wrote a patch that protect this using the 
PMMU for TOS, MagiC and MiNT without memory protection*

*But with MP, the problem is different. The MMU configuration that MiNT uses defines a page size of 8 Ko. We cannot change this without rewritting a large 
part of MiNT's protected memory management.*

*So we can only affect memory protection on 0x0000-0x2000 at once. But 0x0800-0x2000 is user readable/writable on standard Atari, so programs are allowed to 
access it in user mode. This would generate a bus error under MiNT MP if we protect the whole memory page. This is a problem since there are some 
interresting datas there (Line-A variables among others, IIRC), that a program may legally try to access in user mode.*

## Other applications
Centek released a couple of not strictly CT2-related applications with their products, mostly demo versions.

### [CENTinel (demo version)](files/centek/non-ct2/centinel.zip)

### [Fashion (demo version)](files/centek/non-ct2/fashion.zip)

### [Sandrine (demo version)](files/centek/non-ct2/sandrine.zip)

### [TixTax](files/centek/non-ct2/tixtax.zip)

## Flash setup

_**IMPORTANT:** Flash 1.3.4 - 1.3.9 forces the user to read through the whole text instruction screen. Scroll down to the last page and press **SHIFT + F9** to exit this screen! -mikro_

The flash setup menu appears when you start your CENTURBO II for the first time in TURBO mode. It provides access to all the useful options during the initialization phase of the Falcon.

It is broken down into 2 parts: the top one dedicated to the choice of the operating system and access to the menu, and the bottom one to the various options grouped into several sub-menus.

Use the function keys to move from one submenu to another. The right (or Tab) and left arrows to move in the options. The up and down arrows to change the options.

*(Please note the following description fits the la(te)st version 1.4.1 so if you're using an older version, you may not see all the options. -mikro)*

**F2** - TURBO mode (7.0x)

**F3** - TURBO mode (4.0x)

**F4** - Enter / pass the menu
You can choose whether to launch the setup after reset

**Shift + F5** - Save & Exit
If you modifies some parameter(s), this will save the changes into the flash rom. It is indicated in the top right corner whenever it is necessary to save because some parameters have been modified.

**ESC** - Exit
Exit the menu and launch the chosen operating system. The selected options are used for this boot only. To keep them you have to save them with Shift + F5.

**HELP** - Help
Open the help screen.

**Shift + UNDO** - Reset settings
Resets all settings to the default values. Sometimes necessary if a program "strongly" changes the contents of the NVRAM where the current settings are saved.

**F6** - Video menu
Choice of resolution used during the boot process.

**F7** - Hardware menu
This menu allows you to know the version and the date of programming of the Flash, as well as the amount of available memory and the presence of the coprocessor.
- *IDE Delay*: Causes slow access to the IDE hard disk, allowing a slow or old hard disk to run.
- *DSP Delay*: As above, this delay allows you to run a program using the DSP that would be disrupted by the speed of the machine.
- *External clock*: connects Videl's external clock to CENTURBO 2. Disabled if you use a Genlock.
- *Blitter*: Adjusts blitter speed between normal and half speed; activate if no text is displayed when leaving the setup.
- *STE compatibility*: some shadow hardware registers appear in this mode as on the STE.
- *COMBEL Compatibility*: triggers a bus error for access between $0 and $800 as with a normal Falcon. Please note it slows down memory access in a pretty noticeable way.

**F8** - Test menu
Independently regulates the RAM test and the pause before starting.

If you have a security code, you are notified here (only for registered developers).

*Boot View*: Allows you to force the boot screen output to the BOOTLOG.TSR file (useful if you can not read the messages during the auto folder ...). If this option is validated, an image can be displayed. It must be in the AUTO folder and be named BOOT.IMG in the following format:
- word: "CT"
- word: width (320 or 640)
- word: height (200/240 or 400/480)
- word: planes (1,4,8,16)
- Palette in RGxB format (long) corresponding to the image, like the usual Falcon palette entries (no palette in True color mode).
- Image data

The adjusted resolution will be applied. Only for XBOOT, the original resolution will be restored during its execution.

**F9** - Boot menu
- *Hard disk driver*: Choose between the CECILE driver in flash memory and a driver installed on your boot partition.
- *SCSI ID*: Allows you to assign an ID number to the Falcon.
- *Floppy drive*: Specify if your machine has a floppy disk drive (normally this is always the case!)
- *Priority*: Choose whether a floppy boot is executed before the hard drive or the reverse. To change the search order, simply select the device to move (arrows up and down), validate it with RETURN (a sign must appear), move it where you want (with the arrows up and down) and leave it there by pressing RETURN again (the sign must disappear).

**F10** - Cecile menu
If you use the internal Cécile, this last menu makes it possible to modify the parameters of the driver (buffer DATA & FAT, max. number of FOLDERS, boot partition, speed of the IDE and the allocations of removable partitions). These settings are the same as those you can find in CC-TOOLS.APP.

An option allows you to allow / prevent the setup from reading the CECILE.SYS settings located at the root of the boot partition for additional information set in CC-TOOLS.APP.

## Source material

[CT2 CPLD files](files/ct2_cpld.7z) is a collection of all ABL/JED files which Rodolphe was able to dig from his harddisk:

- ct2a - 2000-03-21.abl
- ct2a - 2000-03-21.jed ; confirmed to be working by Stephane Barre
- ct2b - 1999-01-11.abl
- ct2b - 1999-01-11 (recompiled 2025).jed ; not confirmed to work yet
- ct2b - 2000-03-23.abl
- ct2b - 2000-03-23 (recompiled 2025).jed ; should be the same as  ct2b - 2000-03-24.jed (different compiler/optimisation flags?)
- ct2b - 2000-03-24.jed ; doesn't seem to work
- ct2b_fr - 1998-12-12.abl ; named fastram.abl
- ct2b_fr - 2000-03-12.abl ; named as ct2_fro.abl
- ct2b_fr - 2000-03-23.abl
- ct2b_fr - 2000-08-28.jed

N revisions (with fast ram being located at $01xxxxxx), never released/tested:

- ct2an - 2000-03-16.abl
- ct2bn - 2000-03-19.abl
- ct2b_frn - 2000-03-23.abl

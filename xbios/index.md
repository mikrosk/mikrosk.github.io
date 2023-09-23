## Extended Atari XBIOS API

When it comes to system-friendly sound playback (or even recording), Atari TOS didn't offer much until the arrival of the Falcon.

ST computers had only the Yamaha YM2149 installed, all the setting had to be done via direct hardware accesses.

STE/TT computers had, along with the Yamaha, also the DMA and LMC1992 (via the so called Microwire, a 3-bit serial interface) chip installed. It offered stereo 8-bit PCM sound at 6.25/12.5/25/50 kHz and separate volume/bass/treble/DMA+YM settings. Still no API provided.

Only with the arrival of the Falcon (and its TOS 4.0x to be precise) there had been numerous XBIOS calls implemented to handle Falcon's complex sound system (which can handle the Yamaha, DMA, CODEC and DSP; Microwire+LMC1992 were dropped).

When TOS clones like Medusa DirecT40/60, Hades, Milan or ARAnyM had become available, with their significantly different sound hardware (DirecT/Hades does have the Yamaha chip but all the clones had been focused to usage of ISA/PCI sound cards from the PC world), it was very convenient just to reimplement the XBIOS API to offer nearly 100% compatible interface. Depending on the machine, following implementations have become available:

### MilanBlaster
- Author: Rainer Mannigel
- Author's website: [http://www.woller.com/milanblaster/milanblaster.html](https://web.archive.org/web/20140510065954/http://www.woller.com:80/milanblaster/milanblaster.html)
- Last known version: 2.1 (11/05/2000)
- Hardware: Milan ISA/PCI cards
- Presence: [\_SND cookie](http://toshyp.atari.org/en/003007.html#Cookie_2C_20_SND) bit 2&5, `nTOS` cookie
- Download: [mb_blast.lzh](files/mb_blast.lzh) (documentation)

Officially bundled with the Milan's sound card (Milan + SoundBlaster = MilanBlaster).

### GSXB
- Author: Odd Skancke
- Author's website: [http://assemsoft.atari.org/gsxb](http://assemsoft.atari.org/gsxb)
- Last known version: 0.16 Beta (08/2000)
- Hardware: Milan and Hades PCI cards
- Presence: [\_SND cookie](http://toshyp.atari.org/en/003007.html#Cookie_2C_20_SND) bit 2&5, `GSXB` cookie
- Download: [gsxb.lzh](files/gsxb/gsxb.lzh) (manager), [gsxbmix.lzh](files/gsxb/gsxbmix.lzh) (mixer app), [es1371.lzh](files/gsxb/es1371.lzh) (Sound Blaster AudioPCI 64V & Sound Blaster AudioPCI 128 driver)

"**G**eneric **S**ound **XB**IOS" was Odd Skancke's answer to Milan's MilanBlaster since the official Hades manufacturer didn't provide any support in this area (Hades was based on TOS 3.06, i.e. without the sound API). Later he made the driver compatible also with Milan, virtually superseeding the original MilanBlaster.

### MagicMac Sound
- Author: Didier Méquignon
- Author's website: [http://didierm.pagesperso-orange.fr/magxsnde.htm](http://didierm.pagesperso-orange.fr/magxsnde.htm)
- Last known version: 0.97 (04/2002)
- Hardware: MagicMac, Hades, ARAnyM
- Presence: [\_SND cookie](http://toshyp.atari.org/en/003007.html#Cookie_2C_20_SND) bit 1&2&5, `MgSn` cookie
- Download: [magxsnd.zip](files/magxsnd.zip) (documentation + driver)

Reiplementation of GSXB for [MagicMac](http://www.application-systems.de/magicmac) by Didier Méquignon. He later hadded support for Hades' Yamaha chip and MV16/PSOUND cards and after that for ARAnyM's SDL backend.

### MacSound
- Author: Richard Kurz, Joachim Fornallaz
- Author's website: [http://jf.omnis.ch](http://jf.omnis.ch) (no direct binary download available)
- Last known version: 1.2.0 (16/12/1999)
- Hardware: MagicMac
- Presence: [\_SND cookie](http://toshyp.atari.org/en/003007.html#Cookie_2C_20_SND) bit 2&4,`McSn` cookie
- Download: [macsound.lzh](files/macsound.lzh) (documentation + driver)

This seems to a driver provided directly by ASH for their commercial product, MagicMac. It doesn't set [\_SND cookie](http://toshyp.atari.org/en/003007.html#Cookie_2C_20_SND) bit 5, perhaps because it predates the Extended XBIOS "standard".

### STFA
- Author: Seb/the Removers
- Author's website: [http://removers.free.fr/softs/stfa.php](http://removers.free.fr/softs/stfa.php)
- Last known version: 2.02 (10/2003)
- Hardware: ST, STE, TT, Falcon, Hades, various amateur sound cards
- Presence: `STFA` cookie
- Download: [stfa_202.zip](files/stfa_202.zip) (documentation + driver)

Unlike previous drivers, this one reimplements all functions little bit differently. The main focus is to emulate the Falcon XBIOS sound on the previous models -- ST, STE, TT (and even Hades, due to its Yamaha). It supports also various exotic hardware like MV16 and STRreplay Pro.

### X-SOUND
- Author: Thomas Huth
- Author's website: [http://www.uni-ulm.de:80/~s_thuth/atari/xsound_en.html](https://web.archive.org/web/20050212191355if_/http://www.uni-ulm.de:80/~s_thuth/atari/xsound_en.html)
- Last known version: 1999
- Hardware: ST, STE, TT
- Presence: `McSn` cookie
- Download: [xsound.zip](files/xsound.zip) (documentation + driver + source)

Perhaps one of the first XBIOS API "emulators". A separate version for the Yamaha (ST) and DMA (STE/TT) sound is provided. It supports the the `McSn` cookie / API for querying available features.

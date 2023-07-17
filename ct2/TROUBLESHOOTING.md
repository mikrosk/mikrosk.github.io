# Troubleshooting

Symptom | Possible cause
------------ | -------------
Falcon doesn't boot in NORMAL mode (black screen) and crashes after leaving TURBO mode's setup. | ROM is badly installed in its socket or CT2 is badly inserted in the expansion connector.
Falcon doesn't boot in TURBO 7.0x mode (blank screen) | Check the SIMM module.
No icons and text in `XBOOT`. | XBOOT has been loaded in TT-RAM. Reset the Falcon, bypass XBOOT and remove its TT-RAM bits in supplied `FILEINFO.CPX`
When using IDE hard disk, Falcon crashes during `AUTO` sequence or before reaching the desktop. | ATA speed set in `Cecile` is not suitable for this hard disk. It's either too slow or too fast (1 = slowest, 3 = fastest). There's also the option to insert a wait state between IDE accesses in the flash setup to make it even slower.
No (or scrambled) icons in the desktop or crashes when opening a menu. | Blitter is active in the desktop (which is located in TT-RAM). Either use `NVDI` or disable the Blitter in supplied `FGENERAL.CPX` ("cache oui").
Blitter is repeatedly reactivated. | Disable `SI.CPX`.
`MagiC` doesn't start. | MagiC hasn't been patched. Apply the supplied patch first.
`MagiC` freezes with a white screen. | This is supposed to be a MagiC bug. Soft reset Falcon with CONTROL+ALTERNATE+DELETE.
`Calamus` crashes when used with `FALCON8.PRG`. | `FALCON8.PRG` hasn't been replaced by supplied `FALCT2_8.PRG`.
`Cubase` crashes with a format error. | Cubase MROS hasn't been replaced by suplied patched version.
`Aniplayer`, `Quincy` and other DSP software randomly freezes. | This is caused by the issue with the [DSP IRQ](NOTES.md#dsp-irq-signal). Put supplied `DSP_IRQ.PRG` into AUTO folder.
Software using the FPU crashes when accessing TT-RAM and/or FPU calculations are incorrect. | No explanation given, you were supposed to contact Centek...
External SCSI disk boots instead of the internal IDE. | The IDE disk doesn't have a bootable partion set.
Quantum Maverick disk is detected during enumeration but TOS crashes shortly afterwards. | The disk is unable to transmit its parameters to `Cecile`. In the flash setup choose `CHS` for master IDE instead of `AUTO`.
Since the removal of the CT1 and installation of CT2 the Falcon crashes randomly in both NORMAL and TURBO modes. | Perhaps the P12 1.2K resistor array is missing (about 1 cm above the old CPU). It's necessary to put it back.
Falcon randomly reboots or shows black screen during the boot when used with a custom keyboard adaptor. | The adaptor's cable is too long, shorten it.
In TURBO mode, IDE disk doesn't boot with external (non-`Cecile`) hard disk driver in TOS 4.0x or MagiC. | IDE disk isn't compatible with CT2. To check whether the external hard disk driver works with this disk, let it boot with Cecile, then start the external driver from desktop and observe whether everything works as it should during usual operations.
Disk doesn't boot with `Cecile` after putting `CECILE.SYS` on the boot partition. | Either disable usage of CECILE.SYS in the flash setup or switch to NORMAL mode. Check whether ATA settings are correct.
When the flash setup has been updated, the next boot crashes and the setup doesn't seem to be updated. | This applies only to older flash setup versions (new versions automatically detect the change). Hard reset the Falcon.
After power up the screen remains black in NORMAL mode or a bus error appears when leaving the flash setup in TURBO mode. | It's possible that the `SDMA` clock is buggy. Check soldering on SDMA pin #12 and the resistor left of the SDMA.
In `MagiC` 5.x `CENTScreen` produces a scrambled screen only. | CENTScreen is not compatible with MagiC 5.x. Upgrade to Magic 6.x.

## "Unofficial" fixes
This is a collection of random hints, notes and fixes by people who had issues with CT2.

**Bad DSP clock at 50 MHz**: while working well on 32 MHz, when switched to 50 MHz the DSP wasn't stable (CENTBNCH frozen for instance). The solution was to replace the 32 MHz oscillator for a 50 MHz one, cut the wire no. 11 from CT2 and restore the track back to the DSP. *(Didier Méquignon)*

**Experiments with SDMA resistor**: Centek consider the DMA connection to be a 'high-risk' factor. It even indicates that they are unsure of whether their current ispLSI logic does the job well enough. The DMA connection involves a 'pulldown' resistor of 68 Ohms, connected directly to ground. Now that is one hell of a big load for any normal logic driver, so I attempted to change it. I used normal methods to raise the DC load resistance without affecting the HF impedance, and this
did work mostly, but then I noted erroneous data for CD-ROM reads, and in the end I had to go back to Centeks solution of a simple 68 Ohm resistor. This means that the signal really needs a very heavy purely resistive load, and any impedance variations (such as caused by cable length) can be expected to cause errors. *(Ronald Andersson)*

I had a problem getting HD Driver and ExtenDos Gold working in the Turbo Modes on my CT2B Falcon. I finally found the problem. The Solution was to change the resistor that came with the CT2B for the SDMA to a 100 Ohm resistor. I used the 100 Ohm resistor from the Nemesis 25/50 Buffer Modification. I had replaced that resistor with the one from Centek. HD Driver and ExtenDos Gold worked the first time I tried them in Turbo Mode. Now all drives including the CDR and CDROM work excellent
in normal and Turbo Mode. *(Phantomm)*

**Random bus errors when booting FreeMiNT**: The solution for my falcon was to replace the cable to the DMA controller with a coax cable and (while hot summer days) to install a cooler on the CT2b itself. Since these modifications are done it works without crashes for days. *(Ralph Lowinski)*

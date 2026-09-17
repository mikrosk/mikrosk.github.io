## Atari Sparrow resource page

This is my collection of Sparrow-related resources. So far it's only the overview of its revisions and serial numbers but I have many photos and most importantly, two working units in my possession so I plan to update it in near future.

### Sparrow revisions

There had been two revisions manufactured: rev.1 (usually on a hand-written label without the actual "rev.1" written) and rev.2 (more or less profesionally looking PCB).

The following list has been compiled from various Internet sources (eBay auctions, forum posts, computer history pages, ...). Sometimes I had to extract the PCB s/n from its case s/n - although I'm fairly sure that the "algorithm" is correct, I do place a note where such s/n is presented.

As far as I know, only rev.2 PCB had its case available. The cases I have been able to find so far:
- A3 25 11 0010 09 (printed as "A3 25 11 00100 9")
- A3 25 11 0010 11
- A3 25 11 0010 13
- A3 25 11 0010 15
- A3 25 12 0010 23
- A3 26 12 0010 33
- A3 26 13 0010 34
- A3 26 13 0010 35
- A3 26 13 0010 45

The fourth number (from the right) serves as an ID for the PCB (x=0) and case (x=1), as does the eighth number (1 = case, 3 = PCB).

#### rev.1:
- A3 22 23 0000 04
- A3 22 23 0200 06
- A3 2? 23 0000 07 (? is missing, perhaps a typo as it's hand written?)
- A3 23 23 0000 13 (hand-written as "A3 23 23 00013")
- A3 24 23 0000 17

#### rev.2:
- A3 24 33 0000 03 (printed as "A3 24 33 00000 3")
- A3 25 31 0000 08
- A3 25 31 0000 09
- A3 25 31 0000 11 ("calculated" from the case s/n A3 25 11 0010 11)
- A3 25 31 0000 13
- A3 25 31 0000 15
- A3 25 32 0000 23
- A3 25 32 0000 25
- A3 26 32 0000 32
- A3 26 32 0000 33 ("calculated" from the case s/n A3 26 12 0010 33)
- A3 26 33 0000 34
- A3 26 33 0000 35
- A3 26 33 0000 37
- A3 26 33 0000 40
- A3 26 33 0000 45 ("calculated" from the case s/n A3 26 13 0010 45)
- A3 26 33 0000 48
- A3 26 33 0000 58
- A3 26 33 0000 59
- A3 26 34 0000 50
- A3 26 34 0000 53

It would seem there were three batches of both rev.1 (02/1992, 03/1992 and 04/1992) and rev.2 (04/1992, 05/1992 and 06/1992). Meaning of the second digit in "3x" is not clear, perhaps NTSC/PAL-I/PAL-B/PERITEL but that's just a guess. For what it's worth, the Falcon030 main board did exist in exactly these four variants: NTSC, PAL-I, PAL-B and Peritel.[^f030serv]

### Number of Sparrows produced

This makes only 17 (rev.1) + 59 (rev.2) = 76 publicly known Sparrows in the world (assuming the numbering had restarted for rev.2). Actually, there were three Sparrow board without any serial number for sale, so that makes it 79.

_Anfang 1992 wurde der Prototyp des Atari Falcon einigen Entwicklern präsentiert. Etwa 150 Vorserienmodelle wurden dann Mitte des selben Jahres an europäische Entwickler ausgeliefert. Einige dieser Rechner trugen das Label FX-1 wärend auf anderen der Name Sparrow prangte. Der Festplattentreiber des Prototyps meldete sich beim Booten mit "Sparrow" und benutzte den Blitterchip für den Datentransfer zur IDE Festplatte. Auf dem Board wurde ein TOS 4.00 in 2 Megabit großen DIL Eproms als Betriebssystem eingesetzt. In einer frühen Entwicklungsstufe war es sogar ein TOS 2.07, welches die VDI Routinen für die Bildschirmausgabe von Platte nachlud._

_The Atari FX-1, or "Sparrow", is also a prototype machine. Actually, it is almost a Falcon030. It has all its features except its true color mode (not fully implemented in the FX-1) and the PCM sound channels (12 bit instead of 16 in the Falcon)._

_These computers used the Atari Mega STe TOS (2.06) slightly modified to cope with the new graphic modes. This TOS version had the number 2.07 and was replaced in the last Sparrow models with the TOS 4.0 (The Falcon used TOS 4.01 in the earlier models, then the 4.04 and finally the 4.92 (never released))._

_Atari produced less than 100 of these machines. They were built with sample spare parts and were used by developpers to write software for the future Atari Falcon._

### Sparrow resources

The first four documents were found & rescued by [Christian Zietz](https://www.chzsoft.de) and first published at [atari-home.de](https://forum.atari-home.de/index.php/topic,13380.msg214172.html#msg214172):

- [Sparrow specification (dated Dec 18 1991)](sparrow_specification_19911218.md) (converted into markdown by me)
- [(Incomplete) Sparrow schematics (dated Mar 12 1991 - Sep 13 1991: Moshe Segal, John Horton)](sparrow_schematics_19910312.pdf) (converted into PDF by Christian)
- [Falcon specification (dated Dec 3 1991)](falcon_specification_19911203.pdf) (converted into PDF by Christian)
- [Falcon specification (dated Aug 26 1992)](falcon_specification_19920826.md) (converted into markdown by me)
- [Sparrow schematics (dated Jan 19 1992](sparrow_schematics_19920119.pdf) (recovered by Wizztronics)
- [(Incomplete) Microbox gerber file](microbox_gerber.pdf)
- [Microbox PCB](microbox-pcb-color.pdf)
- [Falcon040 stencil](falcon040.png)
- [Microbox bill of materials (dated 02-05-1993)](microbox_bom_19930205.txt) (the original file has corrupted item numbers and quantities; quantities recounted from the reference designators)

### Sparrow vs. Falcon030 vs. Falcon vs. Microbox vs. Falcon040

Interestingly, there were *four* 32-bit machines (excluding the TT) developed (at various stage of completion) by Atari Corp. And their stories are much more intertwined than their names would suggest.

See  also the related thread on [atari-forum.com](https://www.atari-forum.com/viewtopic.php?p=310452).

A lot of what follows comes from an archive of the technical publications department of Atari Microsystems in Dallas, Texas: the files of Marty Pennock who wrote the service guides for both the Sparrow and the Falcon between Oct'91 and Oct'92 - weekly status reports, memos, faxes, specifications, diagnostics source code and drawings. Footnotes marked [_TECHPUBS_](techpubs/TECHPUBS.zip) point to the files in [this archive](techpubs/). [I let Claude to summarise](techpubs/claude_harness.tar.gz) *all* of them into a human-readable story, I think it did a pretty good job with a lot of interesting facts.

#### 1991: two teams, two computers

In 1991 Atari worked on two new computers on two different continents.

The **Falcon** was designed by John D. Horton Jr. in Dallas, Texas, as the successor of the TT. Its specification goes back to the definition of its "FBUS" from Oct 22 1990 and a first draft from Jan 4 1991.[^falconspec] It was supposed to have full 32-bit data bus, 8- and 24-bit packed pixel ("chunky") graphics, up to 32 MB TT (Fast) RAM, multi-slot VME bus, video and DMA I/O expansion slots, 68030+68882 and 68040 CPU support. In this [magazine](91_falcon1.jpg) [excerpt](91_falcon2.jpg) dated Jul'91 one can clearly recognise the TT/VME-based Falcon which had been in the works. It was expected to have a developer prototype by the end of 1991 and ship in mid-1992. Questions about its mechanical design were to be directed to Steven Chan and Ira Valenski (the [former ST/FM designer](http://www.computinghistory.org.uk/det/587/Atari-520-STM)).[^falconspec]

The **[Sparrow](https://www.maedicke.de/atari/hardware/sparrow.htm)** (designed by Moshe Segal and Eran Dariel in Israel) began its life in 1991 as a set of daughterboards for the STE to increase its sound and graphics capabilities - with the SDMA, COMBEL and STE Shifter (which would later become the VIDEL) respectively. There were rumours that this had actually been the goal all along - to create a powerful daughterboard for the existing STE line. It is not known if this is true and if it is, when exactly the transition to a real computer happened.

What the chip specifications from late 1991 do show is how much STE is inside the Sparrow. The "Sparrow DMA" (SDMA, dated Nov 4 1991) contains the ST's ACSI DMA channel, modified to drive a 5380 SCSI controller and the 1772 floppy controller, plus a sound DMA for recording and playback which adds 16-bit stereo to the STE's 8-bit modes.[^sdma1991] The new COMBO - already called COMBEL in the page headers - keeps the glue logic, the memory controller and the Blitter of the STE's COMBO chip.[^combo] The video part of that chip (sync generators, light pen) moved together with the STE video shifter into a new video chip, the VIDEL, which in Dec'91 promised 1 to 8 bitplanes with 6 bits per colour component, an "XGA high color mode" with 65,536 colours, a 16- or 32-bit video bus and pixel clocks up to 32 MHz. The STE's Microwire interface for volume and tone control went from the video shifter into the SDMA.[^videl] Eran Dariel's "VTG Cook Book" from Dec 12 1991 explained how to program the new video timing registers, honestly admitting that some of its examples "were not tested yet".[^vtg]

It is clear however that by Oct'91 the Sparrow was meant as a full featured 68000-based computer. The rev A10 of its specification lists how it grew up: the 68000 was changed to a 68030, an FPU and the 56001 DSP were added, ACSI was replaced by SCSI, the external floppy port was omitted, the video outputs were merged into a single VGA type connector, the audio output got "Walkman" jacks and the keyboard interface got hooks for "the new Atari Universal Keyboard Controller". RAM still went into two SIMMs.[^sparrowspec][^combo] The 68030 + 68882 + DSP were first available as a separate card, too - Sparrow's diagnostics speak about an "030+DSP sparrow board" and an "SP030D card" as late as the beginning of Feb'92.[^diag] A (partly damaged) drawing from Feb'92 even shows a DSP board with a "56001 20MHz DSP" and "8k Words SRAM", connected via Microwire and the DMA sound signals - the FX-1 already had its DSP running at 32 MHz with 32K words of SRAM.[^dspboard][^fx1]

Focusing on the Sparrow computer naturally lowered priority to its competing project, the Falcon.

#### Winter 1991/92: the Sparrow arrives in Dallas

Both machines met on the desks of Atari Microsystems in Dallas. In Nov'91 the Dallas office had only "an A8 release of the product spec, but no schematic" of the Sparrow and asked Moshe Segal for more.[^israel] In December it received a Falcon schematic and the Sparrow specification from Israel, in January the Falcon product specification, and by Jan 9 1992 the first chapters of both the Sparrow and the Falcon service guides were written.[^wdec][^wearly92]

The Sparrow proved to be a moving target. Its "schematic changing too much to do a good service guide", the specifications were "not very good. Many holes and information lacking" and the schematic revision A1 "does not match spec".[^wearly92] Dallas had to ask Israel again for the COMBEL and VIDEL specifications and for the pin list of the new 26-pin DSP connector.[^israel] Richard Miller from Atari Sunnyvale came over to Dallas to work on the Sparrow, all Sparrow connectors got their part numbers at the end of January - for the new 19-pin monitor connector "The male connector spec does not exist as yet." - and the mechanical drawings for the case arrived in February.[^miller][^wearly92] The case didn't start from scratch: the drawings of the Sparrow's keyboard top and right side are the ones of the STE+ from Oct'91 (an STE with a "DOS compatible hardware AT emulator using an 80286 microprocessor") and only the left side with the enhanced joystick ports and the rear panel were drawn anew.[^drawings]

In mid-December 1991 Roy Stedman started writing the Sparrow's production diagnostics, based on the STe diagnostics. Their changelog shows the hardware changing under his hands: "NOW ONLY 68030's NEED APPLY" on Jan 31 1992, "TOS 2.06j USA" added to the ROM test on Feb 5, yet "Hacked up for 68000 Sparrow" again on Feb 18, and on Apr 9 simply "NO ACSI ON SPARROW."[^diag]

#### Early 1992: the FX-1

In Feb'92 the machine got its first hardware reference guide - under the name [FX-1](badges.jpg) (versions 0.3 and 0.4 from Feb 16 and Feb 18 1992, written by "RGM").[^fx1] The SIMMs were gone, replaced by a custom memory module with 1 to 14 MB, TOS sat in two 256 KB ROMs and the true colour mode existed only in 320x200, either with 15 bits plus a genlock bit or with 16 bits - which fits the "not fully implemented" true colour mentioned above. Sound mixed old and new: sixteen bit DMA recording and playback of up to ten tracks, but only 8-bit ADCs, 12-bit bitstream DACs and a dedicated DSP (not the 56001) just for volume, bass and treble. Microwire was still there, even on pins 1-3 of the new DB26 DSP connector. The connectors were mostly those every Falcon030 owner knows (MIDI, parallel, SCSI II, DB19 video with genlock support, headphone and microphone jacks, DSP connector, RF modulator, enhanced joystick ports) but the serial port was driven by the MFP just like on the ST, the LAN port was a 9-pin MiniDIN and the DSP's SCI port was "not implemented in FX-1".[^fx1] The memory board plugged into a 50-pin (J17) and a 30-pin (J6) connector and the internal expansion port with its 68000-style bus used a 50-pin (J19) and a 30-pin (J20) connector - exactly the connectors every Falcon030 memory board and expansion card uses.[^connectors][^f030prod]

As the first Sparrow rev.1 motherboard's manufacturing date is Feb'92 it is very likely that this is what Atari showed in Mar'92 at CeBIT in Hannover -- and announced it as the Falcon shortly after. The new name was ready by then: Toomey Freeman's "FALCON 030 DIAGNOSTIC SPECIFICATION" is dated Mar 3 1992 - and the machine it describes is still the FX-1 inside, with the PSG sound going "to the RASCAL device" whose tone and volume are set "via the MicroWire bus" and a serial port driven by the MFP. Its appendix, a test fixture for the expansion port, was designed by Tom Le.[^diagspec]

#### Spring 1992: developer machines

The rev.2 boards followed from Apr'92 on while the COMBEL chip was being revised in the meantime: the "rev. 1 combel" confused the FPU detection, showed "mixed and out of order color bars" and couldn't do the Sparrow's VGA 320x400 XGA mode. The diagnostics were adapted for "Rev 2. Combel's" in June.[^diag]

Developers received the Sparrow in a "developer support package". Its introduction (Apr 23 1992) starts with "Welcome to the first developer support package for Sparrow" and describes a machine with 16 MB of RAM and a 40 MB hard disk which could boot from the hard disk only with a boot floppy in the drive ("this will be changed in the next set of ROMs"). It started into a command shell where one could choose between the STE video modes and "two of the many new Sparrow modes" loaded from disk - 320x200 in true colour or in 256 colours, with NTSC timing and better without the Blitter in true colour. This matches the TOS 2.07 loading its VDI from disk from the German quote above. The package also contained guidelines for MultiTOS applications and for games which were expected to use the enhanced joysticks ("CX-40 style controls should not be supported") and 640x480 in 256 colours.[^devkit] In June Richard Miller got drawings from Dallas "for use at developers meeting in UK" and Bill Rehbock in Sunnyvale got the drawing of the "SYSTEM EXPANSION PCB (SPARROW)", a board of just 109.22 x 50.8 mm.[^wsummer][^sysexpan]

The Sparrow's block diagram from Apr 6 1992 still shows the serial port on the MFP and a "Microwire Interface" going to the DSP connector.[^blockdiag] The accompanying "Developer Hardware Release Notes" from Apr 29 1992 are the best description of what the Sparrow was still missing.[^hardnote] The developer machines had 8-bit ADCs and 13-bit DACs with "VERY poor sound quality" (though "programs like Quartet seem to work OK") while production machines would get a 16-bit codec. Microwire "has gone away on production machines". An old version of the memory controller prevented true colour in 640 pixels on TVs and in 320 pixels on VGA monitors. The serial port was connected to the MFP instead of the SCC, memory access took five 16 MHz clock cycles instead of four, the DSP host port sat at different addresses and there was no connection matrix between the DSP, the sound DMA and the DAC/ADC. Production machines would also add the Acknowledge and Select lines on the parallel port and support 300 DPI mice. Two more differences were left as a puzzle: "I'll buy a beer for the first developer to spot them."

In May'92 the hardware reference guide was renamed to "Falcon030 Hardware Reference Guide" (version 1.0a from May 11 1992) but otherwise it still described the FX-1, including its 9-pin LAN port and memory modules now "1 to 16 MBytes".[^f030hard] The power supply specification from May'92 still carries the Sparrow name ("117 VAC SPARROW PSU SPECIFICATION", 37.4 W) - and its part number C302866-001 is the one of the Falcon030's 117 V power supply later.[^psu][^f030serv]

#### Summer 1992: the Sparrow becomes the [Falcon030](badges2.jpg)

Over the summer the Sparrow was turned into a product, with engineers in Dallas and Sunnyvale deeply involved. In June Dallas had a "rough draft from J. Hoenig that contains many errors" about the SDMA changes with "J. Horton working hard to resolve issues", in July John Hoenig and Tracy Hall (Sunnyvale) faxed the "latest FALCON030 schematic changes", Scott Matson delivered new VIDEL and COMBEL specifications and John Horton the new SDMA specification.[^wsummer] In the diagnostics source code, Roy Stedman commented on the new audio test: "Horton wants to do FFT's on it. I don't."[^diag]

What changed on the way from Sparrow to Falcon030:
- The SDMA grew from 120 to 144 pins and "The MICROWIRE interface has been deleted from the current design" - only its registers were simulated so that older software wouldn't lock up. The sound DMA now fed a codec clocked from 25.175 MHz for 50 kHz, the number of tracks went down from 10 to 8 and a digital PSG was planned but "The prototypes and probably early systems will not have the digital PSG available" so the YM's analogue output went into the codec instead. A new pin told the chip whether a 68030 or a 68000 bus master was active: "Some day (Sparrow++++) this will be an output."[^sdma]
- The 8-bit ADCs and 13-bit DACs gave way to the 16-bit codec. On the first rev 3 boards the "ASCO CODEC shuts up occasionally while playing" and the solution was to "use Crystal part".[^rev3]
- The COMBEL grew from 144 pins to a 208-pin package, all mentions of SIMMs disappeared and it got the same 68030/68000 bus master pin as the SDMA.[^combo][^combel][^mfg][^f030serv]
- The serial port moved from the MFP to the Z8530 SCC (the diagnostics were converted on Jul 7 1992) and the DSP host port moved once more, to the consecutive addresses $FFFFA200-$FFFFA207 of the rev 3 boards - the diagnostics know three different layouts.[^diag]
- RAM ended up on memory boards with 1, 4 or 16 MB of which "only 14 Mbytes of RAM may be accessed" for STE compatibility. The factory tested the boards with a 14 MB card while the systems shipped with a 1 or 4 MB board.[^f030prod][^mfg]
- TOS moved from two ROMs into a single 4 Mbit EPROM in a PLCC socket.[^fx1][^f030serv]
- The expansion port kept its connectors but got new bus grant signals and the BMODE pin; "CPUBGI and CPUBGO must be connected together on production machines in order that they work at all" which the factory did with a jumper from J20 pin 20 to pin 22.[^hardnote][^mfg]
- The product specification still names the HD6301V1 keyboard controller with an "Option for interfacing to the new Atari Universal Keyboard Controller" but the rev 3 boards were tested "with new keyboard", the diagnostics know a keyboard revision called "COPS" and the parts list from Oct'92 has keyboards "W/COP888" - some of them still called "K/B FX-1".[^f030prod][^diag][^f030serv]
- Even the case got a last touch: on Jul 23-24 1992 the floppy side was redrawn with a new drive bezel, first with the old slanted eject button and a day later with a rectangular one.[^bezel][^wsummer]

The diagnostics call the boards "Falcon030, rev 2" and "rev 3". Work on the rev 3 boards started on Jul 9 1992 and Roy Stedman's list of their problems from the very next day reads like a typical first batch: shorted address and size lines, audio capacitors shorting the 9 V or 5 V rails "(no solder mask)", a solder short under the DSP's SRAMs, a missing resistor silencing the speaker and an open trace killing the FPU.[^rev3]

The production was prepared in Taiwan. A preliminary FALCON030 product specification was written "to go with you to Taiwan" on Jul 13 1992 (for Tom Ulaszek of Dallas product engineering), the "FALCON 030 PRODUCTION PROCEDURE" draft by J. Smith is dated Jul 15, all assembly drawings went "to Jerry Smith in Taiwan" on Jul 29 and in August the corrected hardware specification followed "Tom in Taiwan".[^wsummer] The production procedure describes board burn-in, TOS installation, system aging and a safety test, and its incoming inspection lists the chips "COMBEL AT4181" and "SDMA AT4182" and the hard disks CP2044, CP2064, CP2084 and ST9051A with more models still waiting for a part number.[^mfg]

The "FALCON030 Hardware Product Specification" reached rev B on Aug 10 1992.[^f030prod] Even though the offical [Falcon030](https://www.maedicke.de/atari/hardware/falcon.htm) release happened in Aug'92 at Atari Messe in Dusseldorf (with TOS 4.00), Atari magazines got for their September issue only photos of Sparrow's typical dark grey case with white ST/E keyboard and rev.2 motherboard inside. A month later all the Atari press were previewing the real Falcon030. In Dallas, Marty Pennock began printing ten copies of the FALCON030 Service Guide on Sep 24 1992 and under his plans he wrote just "Get a job.".[^pennock] The guide itself is dated Oct 1 1992[^f030serv] and the production diagnostics, "Sparrow Production Diagnostic Rev. 1.12" in July, were archived as version 1.19 in September.[^diag][^wsep]

But it took several months (as late as Mar/Apr'93!) until the Falcon030 hit the stores due to "insurmountable quality control issues". This was also the time when the internal HDD got upgraded from 65 MB to 80 MB and TOS from version 4.00/4.01 via 4.02 to 4.04. Eric Smith's progress reports date the last steps: TOS 4.03 ROMs were burned for production in early March 1993, two weeks later he "Changed version number to 4.04" and by May 1993 he "Built a new version of TOS for Falcon, containing our combined single/multi tasking AES and the new VDI, BIOS, and GEMDOS".[^es]

So basically the Falcon030 is a bugfixed version of the Sparrow with a few removals: the Sparrow still had the Microwire interface, the so called RASCAL sound chip (able to process only 12-bit samples) and an MFP-driven serial port - none of which are present in the Falcon030.

#### 1992: the Falcon becomes the Falcon040

Meanwhile the Dallas Falcon went its own way. The service guide chapter written in Dallas in Jan'92 already describes it as a 68040 machine at 33 MHz with VMEbus and a power supply of "Approx 130 watts."[^falconsg] - although at that time there was "No ASIC documentation for Falcon chips" as "They have not yet been written."[^wearly92] The first chip specifications from Feb'92 still keep both options open: the IO controller has bus modes for the 030 and for the 040, takes "Functions from the TT SCU chip" and creates an 8 MHz 68000-like bus for the ST/TT compatible peripherals. And the sound was still the Sparrow way: the DMA controller feeds "the RASCAL sound chip" with Microwire registers, adding 16-bit stereo at 44 and 48 kHz.[^falconasic] The specification's own history shows a sixth draft on Feb 21 1992, a "Prototype A release" on Apr 8 1992 and a "Prototype B release" on Aug 26 1992[^falconspec] - by then it got the DSP, 16-bit sound DMA and DSP connector and even got rid of the Microwire.

The Falcon borrowed from the Falcon030 here. In July John Horton handed over new specifications for both the Falcon030's SDMA and the Falcon's "Falcon-A DMA" (ADMA).[^wsummer] The ADMA description reuses the SDMA text, keeps the old ST DMA chip "converted to an internal cell" for ACSI, turns Microwire into "dummy registers existing for compatibility only" and adds codec and DSP serial connections with a "sound serial data matrix" - just with 68040 bus signals.[^adma]

And it got a new name. From Jun'92 on, the Dallas reports talk about the **Falcon040**: the Falcon service guide schedule from Feb 3 1992 is filed as the "FALCON040 Document Schedule", the reports mention "IO controller documentation for FALCON040", next to COMBEL, VIDEL and SDMA the list of chips to be archived contains ADMA, BDMA, VIO and MCU, and in September Dallas received a "new FALCON040 Product Specification from John Horton" and the "FALCON040 MCU ASIC Specification from Scott Lewis" and assigned a part number to the Falcon040 system specification.[^falcon040] So John Horton was working on the Falcon030 and the Falcon040 at the same time.

So what became of this Falcon? The last available specification confirms that by Aug'92 the second prototype had been finished - around the same time when the Falcon030 was released at Atari Messe - and under the Falcon040 name it was still very much alive in Sep'92. We can only speculate why Atari didn't show at least a prototype of the Falcon there...

#### 1993: the Microbox and the Falcon040

When we closely look at the [Microbox](https://www.maedicke.de/atari/hardware/microbox.htm)'s description (68030/68040 CPU, 32-bit data bus, 3 expansion slots), its [motherboard](https://www.computerhistory.org/collections/catalog/102672949) (we can see one huge expansion slot and pins of something what resembles VME prety well) and consider the fact that Ira Valenski is directly mentioned in the Falcon specification and as the [design lead for the Microbox](http://www.atarimuseum.com/computers/16bits/falcon030/microbox/index.htm) it is tempting to speculate that the Microbox was the original Falcon project. Also, this prototype looks quite polished, so it could be the one from Aug'92. The last trace of it can be found on the Atari HQ CD ROM: bill of materials, netlist and PCB placement plan, dated January 1993.

The [bill of materials](microbox_bom_19930205.txt) (dated 02-05-1993) tells a different story though. The Microbox is built around the Falcon030 chipset - SDMA rev C, VIDEL rev B, COMBEL rev C and AJAX (the floppy controller which had replaced the WD1772 in the late MEGA STE[^megaste]) - with the Falcon030's 16 MHz CPU, the DSP, three 32Kx8 SRAMs, the codec, the YM3439 sound chip and TOS 4.02 in a single EPROM. The CPU, SDMA, AJAX and video DAC even have the same Atari part numbers as in the Falcon030's parts list.[^bom][^f030serv] What's new is a 72-pin SIMM socket (the Falcon030 used its own memory boards), a socket for the FPU and a 182-pin card edge connector, while there is no SCSI controller, no SCC and no DRAM on the board itself. And since the Falcon lived on as the Falcon040, the Microbox looks more like a Falcon030 derivative than the original Falcon.

January 1993 wasn't its last trace either. In June 1993 Eric Smith of Atari's TOS group "Worked on getting software to boot on the Microbox prototype. Created several RAM tests, an updated TOS, and a TOS+DB combination for testing purposes. Helped to track down hardware bugs in Microbox." and two weeks later he "Made a diagnostic cartridge ROM for Microbox."[^es] According to some sources Atari had several (at least three) prototypes of the MicroBox but the memory controller was buggy; just before the release date its development was abandoned. The same progress reports also mention meetings about an otherwise unknown project called "Painter" (its hardware, software and BIOS) and "TOS 5 Release Notes" in Apr-Jun'93 - whether these have anything to do with the Microbox or the Falcon040 is not known.

Note: there are two versions of the Microbox _case_, one having a [floppy disk drive on the front-right](microbox_floppy.jpg) of the system which was for the machine described above, and a [CD-ROM version](microbox_cd.jpg) for the Falcon040.

And then there is the [Falcon040](https://www.maedicke.de/atari/hardware/falcon040.htm) itself (designed by the Dallas team). It would seem it was supposed to share a case of similar design as the Microbox but the PCB surely is different - more slots, more sockets for ICs in development.

In Dec'92 the rumours about Atari Corp. having a Falcon040 in development were [pretty much alive](atari-st-format-issue-041_11.jpg) (with the focus on built-in CD drive), with planned release date in late 1993 as a more powerful successor of the Falcon030. As there is no mention of the Microbox whatsoever, one could think that sometime during the infamous Falcon030 production problems Atari Corp. realised that the Microbox doesn't make much sense anymore and went ahead with a full 68040 "PC like" machine. However, the Microbox prototype was still being brought up in Jun'93, so both machines seem to have been in development in parallel for quite a while. Unfortunately, no machine was ever shown or previewed in 1993 or later...

Note: according to Hans Martin-Krober, an Atari employee, the case for the Falcon040 was [entirely different](falcon040_case.jpg).

#### Who was who

As far as the documents tell:
- **Moshe Segal** and **Eran Dariel** (Atari Israel): the Sparrow and its VIDEL and COMBO specifications, the VTG cook book[^sparrowspec][^videl][^combo][^vtg]
- **John D. Horton Jr.** (Dallas): the Falcon / Falcon040, the Falcon030's SDMA specification in Jul'92, the Falcon-A DMA[^falcon040][^wsummer]
- **John Hoenig**: SDMA documentation and Falcon030 schematic changes in Jun-Jul'92[^wsummer]
- **Tracy Hall** (Sunnyvale): Falcon030 schematic changes, also the ST Book hardware specification[^wsummer][^stbook]
- **Scott Matson**: delivered the new VIDEL and COMBEL specifications in Jul'92[^wsummer]
- **Scott Lewis**: delivered the Falcon040 MCU specification in Sep'92[^falcon040]
- **Richard Miller** (Sunnyvale): worked on the Sparrow in Dallas, got drawings for the UK developer meeting, ordered the Dallas engineering archive[^miller][^wsummer][^archive]
- **"RGM"**: the FX-1 and Falcon030 hardware reference guides[^fx1][^f030hard]
- **Roy Stedman** and **Tom Le**: the Sparrow / Falcon030 production diagnostics, Tom Le also the expansion port test fixture[^diag][^diagspec]
- **Toomey Freeman**: the Falcon 030 diagnostic specification[^diagspec]
- **Brian St. Denis**: Atari Microsystems' chip layout procedure, using the COMBEL as its example[^layout]
- **Tom Ulaszek** (Dallas product engineering) and **Jerry Smith**: preparing the Falcon030 production in Taiwan in Jul-Aug'92[^wsummer][^mfg]
- **Marty Pennock** (Dallas technical publications): the Sparrow / FALCON030 and Falcon service guides[^wearly92][^f030serv]
- **Steven Chan** and **Ira Valenski**: mechanical design questions in the Falcon specification[^falconspec]
- **Eric Smith** (TOS group, with Hans-Martin and Cary): TOS 4.03/4.04 and MultiTOS in 1993, bringing up the Microbox prototype[^es]

### Gallery

My collection of Sparrow photos is available as a gallery here: [Sparrow Gallery](gallery/index.html).

---

[^falconspec]: [Falcon specification (dated Aug 26 1992)](falcon_specification_19920826.md), section 10 "Mechanical Considerations" and section 12 "Revisions".
[^sparrowspec]: [Sparrow specification (dated Dec 18 1991)](sparrow_specification_19911218.md), rev A10 change list and section 2.
[^sdma1991]: TECHPUBS [WP/SPARROW/SDMA.DOC](techpubs/TECHPUBS_converted/WP/SPARROW/SDMA.DOC.txt) ("Sparrow DMA", Nov 4 1991) and [WP/SPARROW/SDMA.TXT](techpubs/TECHPUBS_converted/WP/SPARROW/SDMA.TXT.txt) (Jan 1992).
[^combo]: TECHPUBS [WP/SPARROW/COMBO.A07](techpubs/TECHPUBS_converted/WP/SPARROW/COMBO.A07.txt): "SPARROW - (SP) COMBO SPECIFICATION" rev A7 by Eran Dariel and Moshe Segal, Dec 19 1991.
[^videl]: TECHPUBS [WP/SPARROW/VIDEL.A05](techpubs/TECHPUBS_converted/WP/SPARROW/VIDEL.A05.txt): "SPARROW - (SP) VIDEO CHIP SPECIFICATION" rev A5 by Eran Dariel and Moshe Segal, Dec 19 1991.
[^vtg]: TECHPUBS [WP/SPARROW/COOKBOOK.VTG](techpubs/TECHPUBS_converted/WP/SPARROW/COOKBOOK.VTG.txt): "VTG Cook Book" rev A2 by Eran Dariel, Dec 12 1991.
[^israel]: TECHPUBS [PGSTREAM/FAX/ISRAEL2.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/ISRAEL2.DOC.txt) (Nov 25 1991), [ISRAEL3.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/ISRAEL3.DOC.txt) (Jan 13 1992) and [ISRAEL4.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/ISRAEL4.DOC.txt) (Jan 28 1992): faxes from Atari Dallas to Moshe Segal.
[^wdec]: TECHPUBS [PGSTREAM/WEEKLY/TOMU1212.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMU1212.DOC.txt) and [TOMU1219.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMU1219.DOC.txt): weekly reports, Dec 12 and Dec 19 1991.
[^wearly92]: TECHPUBS [PGSTREAM/WEEKLY/TOMJAN9.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJAN9.DOC.txt), [TOMJAN16.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJAN16.DOC.txt), [TOMJAN23.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJAN23.DOC.txt), [TOMJAN30.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJAN30.DOC.txt) and [TOMFEB06.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMFEB06.DOC.txt): weekly reports, Jan 9 - Feb 6 1992.
[^miller]: TECHPUBS [PGSTREAM/FAX/RICHARD2.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/RICHARD2.DOC.txt) (fax to Richard Miller, Jan 30 1992) and [PGSTREAM/FAX/RICHARD3.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/RICHARD3.DOC.txt) (memo to Richard Miller, Mar 4 1992: "while you were here working on the Sparrow project").
[^diag]: TECHPUBS [WP/SPARROW/DIAGS](techpubs/#wp-sparrow-diags): Sparrow production diagnostics source code, Dec 1991 - Jul 1992 (changelog in [VERSION.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/VERSION.S.txt), author in [SPARROW.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/SPARROW.S.txt), details in [INIT.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/INIT.S.txt), [TIMER.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/TIMER.S.txt), [DMA.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/DMA.S.txt), [VIDEO.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/VIDEO.S.txt), [VIDEO.DOC](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/VIDEO.DOC.txt), [SDMA.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/SDMA.S.txt), [CONSOLE.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/CONSOLE.S.txt), [DSP.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/DSP.S.txt), [KEYBD.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/KEYBD.S.txt) and [GENTST.S](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/GENTST.S.txt)).
[^fx1]: TECHPUBS [PGSTREAM/F030/HWREF.BAK](techpubs/TECHPUBS_converted/PGSTREAM/F030/HWREF.BAK.txt) and [PGSTREAM/F030/HWREF.DOC](techpubs/TECHPUBS_converted/PGSTREAM/F030/HWREF.DOC.txt): "FX-1 Hardware reference guide" v0.3 (Feb 16 1992) and v0.4 (Feb 18 1992).
[^diagspec]: TECHPUBS [PGSTREAM/F030/DIAGNOST.3_3](techpubs/TECHPUBS_converted/PGSTREAM/F030/DIAGNOST.3_3.txt): "FALCON 030 DIAGNOSTIC SPECIFICATION", preliminary version 00 by Toomey Freeman, Mar 3 1992, with the "FALCON 30 Expansion Test fixture Specification" by Tom Le, Feb 28 1992.
[^devkit]: TECHPUBS [PGSTREAM/FALC030/INTRO.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FALC030/INTRO.DOC.txt), [GL_MTOS.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FALC030/GL_MTOS.DOC.txt) and [GL_GAMES.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FALC030/GL_GAMES.DOC.txt): developer documentation, Apr 1992.
[^hardnote]: TECHPUBS [PGSTREAM/FALC030/HARDNOTE.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FALC030/HARDNOTE.DOC.txt): "Developer Hardware Release Notes", Apr 29 1992.
[^f030hard]: TECHPUBS [PGSTREAM/TEXT/F030HARD.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/F030HARD.TXT.txt): "Falcon030 Hardware Reference Guide" v1.0a, May 11 1992.
[^psu]: TECHPUBS [PGSTREAM/TEXT/PSU117R4.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/PSU117R4.TXT.txt): "117 VAC SPARROW PSU SPECIFICATION", revisions dated Feb 29 - May 18 1992.
[^wsummer]: TECHPUBS [PGSTREAM/WEEKLY/TOMJUN11.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUN11.DOC.txt), [TOMJUN25.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUN25.DOC.txt), [TOMJUL09.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUL09.DOC.txt), [TOMJUL16.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUL16.DOC.txt), [TOMJUL30.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUL30.DOC.txt) and [TOMAUG13.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMAUG13.DOC.txt) (weekly reports, Jun - Aug 1992) and [PGSTREAM/MEMO/TOMSPARQ.DOC](techpubs/TECHPUBS_converted/PGSTREAM/MEMO/TOMSPARQ.DOC.txt) (memo to Tom Ulaszek, Jul 13 1992).
[^sdma]: TECHPUBS [WP/SPARROW/SDMA.TXT](techpubs/TECHPUBS_converted/WP/SPARROW/SDMA.TXT.txt) (Jan 1992) compared to [PGSTREAM/TEXT/SDMA.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/SDMA.TXT.txt) (Jul 1992).
[^rev3]: TECHPUBS [WP/SPARROW/DIAGS/SPARROW3.DOC](techpubs/TECHPUBS_converted/WP/SPARROW/DIAGS/SPARROW3.DOC.txt): "Problems with rev. 3 board", Roy Stedman, Jul 10 1992.
[^combel]: TECHPUBS [PGSTREAM/CHIPDOCS/COMBEL.DOC](techpubs/TECHPUBS_converted/PGSTREAM/CHIPDOCS/COMBEL.DOC.txt): COMBEL specification, Aug 1992.
[^f030prod]: TECHPUBS [PGSTREAM/F030/F030PROD](techpubs/#pgstream-f030-f030prod): "FALCON030 Hardware Product Specification" C302550-001 rev B, Aug 10 1992.
[^f030serv]: TECHPUBS [PGSTREAM/F030/F030SERV](techpubs/#pgstream-f030-f030serv): "FALCON030 Service Guide" C303062-001, Oct 1 1992 (parts list in [F0307.DOC](techpubs/TECHPUBS_converted/PGSTREAM/F030/F030SERV/F0307.DOC.txt)).
[^mfg]: TECHPUBS [PGSTREAM/MFG_PROC](techpubs/#pgstream-mfg-proc): "FALCON 030 PRODUCTION PROCEDURE" C302758-001, revision 1 draft, Jul 15 1992.
[^pennock]: TECHPUBS [PGSTREAM/WEEKLY/TOMSEP24.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMSEP24.DOC.txt): weekly report, Sep 24 1992.
[^wsep]: TECHPUBS [PGSTREAM/WEEKLY/TOMSEP10.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMSEP10.DOC.txt): weekly report, Sep 1992.
[^es]: [Eric Smith's progress reports](http://www.atarimania.com/utility-atari-st-multitos_29227.html) at atarimania.com, weeks ending Mar 6, Mar 20, May 1, Jun 12 and Jun 26 1993.
[^falconsg]: TECHPUBS [WP/FALCON/FALCON1.TXT](techpubs/TECHPUBS_converted/WP/FALCON/FALCON1.TXT.txt): Falcon service guide draft, section one, Jan 1992.
[^falconasic]: TECHPUBS [PGSTREAM/TEXT/IO.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/IO.TXT.txt) ("Design specification for the FALCON IO controller") and [PGSTREAM/TEXT/DMA.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/DMA.TXT.txt) ("Design specification for the FALCON DMAC"), Feb 1992.
[^adma]: TECHPUBS [PGSTREAM/TEXT/ADMA.TXT](techpubs/TECHPUBS_converted/PGSTREAM/TEXT/ADMA.TXT.txt): "Falcon-A DMA ASIC Description", Jul 1992.
[^falcon040]: TECHPUBS [PGSTREAM/FALCON/FALSCHED.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FALCON/FALSCHED.DOC.txt) (Feb 3 1992) and weekly reports [PGSTREAM/WEEKLY/TOMJUN11.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUN11.DOC.txt), [TOMJUL09.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMJUL09.DOC.txt), [TOMAUG13.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMAUG13.DOC.txt), [TOMSEP10.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMSEP10.DOC.txt) and [TOMSEP17.DOC](techpubs/TECHPUBS_converted/PGSTREAM/WEEKLY/TOMSEP17.DOC.txt) (Jun - Sep 1992).
[^megaste]: TECHPUBS [WP/MEGASTE/ECO.LIS](techpubs/TECHPUBS_converted/WP/MEGASTE/ECO.LIS.txt) (ECO 1385, Feb 28 1992) and [WP/MEGASTE/2MBMGIN.TXT](techpubs/TECHPUBS_converted/WP/MEGASTE/2MBMGIN.TXT.txt) (MEGA STE 2 MB floppy upgrade, Nov 1991).
[^bom]: [Microbox bill of materials](microbox_bom_19930205.txt), dated 02-05-1993.
[^stbook]: TECHPUBS [PGSTREAM/MEMO/STRICH1.DOC](techpubs/TECHPUBS_converted/PGSTREAM/MEMO/STRICH1.DOC.txt): memo to Richard Miller, Sep 11 1992.
[^layout]: TECHPUBS [TEMP/DESLAYOT.TXT](techpubs/TECHPUBS_converted/TEMP/DESLAYOT.TXT.txt): "The design - layout interface, use of EHN software" by Brian St. Denis, Dec 16 1991 / Apr 14 1992.
[^archive]: TECHPUBS [PGSTREAM/FAX/ISRAEL5.DOC](techpubs/TECHPUBS_converted/PGSTREAM/FAX/ISRAEL5.DOC.txt): fax to Eran Dariel and Moshe Segal, Aug 3 1992.
[^dspboard]: TECHPUBS [EASYDRAW/SUNNYVAL/DSPBOARD.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SUNNYVAL/DSPBOARD.GEM.svg): DSP board drawing, Feb 24 1992 (partly damaged file).
[^drawings]: TECHPUBS [DYNACADD/PARTS/DXF/STEPUP.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/STEPUP.DXF.svg), [STEPRT.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/STEPRT.DXF.svg) and [STEPLFT.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/STEPLFT.DXF.svg) (STE+, Oct 21 1991) compared to [EASYDRAW/SPARUPA.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SPARUPA.GEM.svg) and [EASYDRAW/SPARRT.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SPARRT.GEM.svg) (Feb 1992), [EASYDRAW/SPARROWL.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SPARROWL.GEM.svg) (Apr 1992) and [DYNACADD/PARTS/DXF/SPARROWR.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/SPARROWR.DXF.svg) (Feb 7 1992); the STE+ description is from its service manual [PGSTREAM/STEPLUS/STEPCH1.DOC](techpubs/TECHPUBS_converted/PGSTREAM/STEPLUS/STEPCH1.DOC.txt).
[^connectors]: TECHPUBS [EASYDRAW/SUNNYVAL/MEMORY50.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SUNNYVAL/MEMORY50.GEM.svg), [MEMORY30.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SUNNYVAL/MEMORY30.GEM.svg), [EXPAND50.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SUNNYVAL/EXPAND50.GEM.svg) and [EXPAND30.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SUNNYVAL/EXPAND30.GEM.svg): "SPARROW MEMORY CONNECTOR" and "SPARROW EXPANSION CONNECTOR", Feb 20 1992.
[^sysexpan]: TECHPUBS [DYNACADD/PARTS/DXF/SYSEXPAN.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/SYSEXPAN.DXF.svg): "SYSTEM EXPANSION PCB (SPARROW)", Jun 9 1992.
[^blockdiag]: TECHPUBS [EASYDRAW/SPARROWB.GEM](techpubs/TECHPUBS_converted/EASYDRAW/SPARROWB.GEM.svg): "Overall System Block Diagram", Apr 6 1992.
[^bezel]: TECHPUBS [EASYDRAW/F030RGHT.GEM](techpubs/TECHPUBS_converted/EASYDRAW/F030RGHT.GEM.svg) (Jul 23 1992) and [DYNACADD/PARTS/F030/F030RGHT.DPT](techpubs/TECHPUBS_converted/DYNACADD/PARTS/F030/F030RGHT.DPT.svg) (Jul 24 1992) compared to [DYNACADD/PARTS/DXF/STEPRT.DXF](techpubs/TECHPUBS_converted/DYNACADD/PARTS/DXF/STEPRT.DXF.svg).

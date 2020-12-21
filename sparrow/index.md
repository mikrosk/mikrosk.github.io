## Atari Sparrow resource page

This is my collection of Sparrow-related resources. So far it's only the overview of its revisions and serial numbers but I have many photos and most importantly, two working units in my possession so I plan to update it in near future.

### Sparrow revisions

There had been two revisions manufactured: rev.1 (usually on a hand-written label without the actual "rev.1" written) and rev.2 (more or less profesionally looking PCB).

The following list has been compiled from various Internet sources (eBay auctions, forum posts, computer history pages, ...). Sometimes I had to extract the PCB s/n from its case s/n - although I'm fairly sure that the "algorithm" is correct, I do place a note where such s/n is presented.

As far as I know, only rev.2 PCB had its case available. The cases I have been able to find so far:
- A3 25 11 0010 11
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
- A3 25 31 0000 11 ("calculated" from the case s/n A3 25 11 0010 11)
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

It would seem there were three batches of both rev.1 (02/1992, 03/1992 and 04/1992) and rev.2 (04/1992, 05/1992 and 06/1992). Meaning of the second digit in "3x" is not clear, perhaps NTSC/PAL-I/PAL-B/PERITEL but that's just a guess.

### Number of Sparrows produced

This makes only 17 (rev.1) + 59 (rev.2) = 76 publicly known Sparrows in the world (assuming the numbering had restarted for rev.2). Actually, there was one Sparrow board without any serial number for sale, so that makes it 77.

### Sparrow resources

The following documents were found & rescued by [Christian Zietz](https://www.chzsoft.de) and first published at [atari-home.de](https://forum.atari-home.de/index.php/topic,13380.msg214172.html#msg214172):

- [Sparrow specification (dated Dec 18 1991)](sparrow_specification_19911218.md) (converted into markdown by me)
- [Page 3 of Sparrow schematics (dated March 12 1991)](sparrow-schematic-march91-page3.pdf)
- [Falcon specification (dated Dec 3 1991)](falcon_specification_19911203.pdf) (converted into PDF by Christian)
- [Falcon specification (dated Aug 26 1992)](falcon_specification_19920826.md) (converted into markdown by me)

### Sparrow vs. Falcon030 vs. Falcon vs. Microbox vs. Falcon040

Interestingly, there were *four* 32-bit machines (excluding the TT) developed (at various stage of completion) by Atari Corp.

See  also the related thread on [atari-forum.com](https://www.atari-forum.com/viewtopic.php?p=310452).

#### The Sparrow (also known as the FX-1)

[Sparrow](https://www.maedicke.de/atari/hardware/sparrow.htm) (designed by Moshe Segal and Eran Dariel in Israel) began its life in 1991 as a set of daughterboards for the STE to increase its sound and graphics capabilities - with the SDMA, COMBEL and STE Shifter (which would later become the VIDEL) respectively. There were rumours that this had actually been the goal all along - to create a powerful daughterboard for the existing STE line.

It is not known if this is true and if it is, when exactly the transition to real computer happened. It is clear however that by Oct'91 the Sparrow was meant as a full featured 68000-based computer which got upgraded to the 68030 CPU, 68882 FPU and the 56001 DSP and simultaneously got rid of the ACSI port (in favour of SCSI) and external FDD drive in Dec'91. The 68030 + 68882 + DSP were first available as a separate card, too.

Focusing on the Sparrow computer naturally lowered priority to its competing project, the Falcon (see below).

As the first Sparrow rev.1 motherboard's manufacturing date is Feb'92 it is very likely that this is what Atari showed in Mar'92 at CeBIT in Hannover -- and announced it as the Falcon shortly after.

#### The Falcon030

Even though the offical [Falcon030](https://www.maedicke.de/atari/hardware/falcon.htm) release happened in Aug'92 at Atari Messe in Dusseldorf, Atari magazines got for their September issue only photos of Sparrow's typical dark grey case with white ST/E keyboard and rev.2 motherboard inside.

A month later all the Atari press were previewing the real Falcon030 but it took several months (as late as Mar/Apr'93!) until it hit the stores due to "insurmountable quality control issues". This was also the time when the internal HDD got upgraded from 65 MB to 80 MB and TOS from version 4.00/4.01 via 4.02 to 4.04.

So basically the Falcon030 is a bugfixed version of the Sparrow with one exception: the Sparrow still had the Microwire interface and so called RASCAL sound chip (able to process only 12-bit samples) - none of which are present in the Falcon030.

#### The Falcon

The Falcon project (designed by John D. Horton Jr. in Dallas, Texas) started its development also early on in 1991 as the successor of the TT. It was supposed to have full 32-bit data bus, 8- and 24-bit packed  pixel ("chunky") graphics, up to 32 MB TT (Fast) RAM, multi-slot VME bus, video and DMA I/O expansion slots, 68030+68882 and 68040 CPU support. In 1992, perhaps following post-Sparrow Falcon030 development, it got the DSP, 16-bit sound DMA and DSP connector and even got rid of the Microwire.

In this [magazine](91_falcon1.jpg) [excerpt](91_falcon2.jpg) dated Jul'91 one can clearly recognise the TT/VME-based Falcon which had been in the works. It was expected to have a developer prototype by the end of 1991 and ship in mid-1992.

So what became of this Falcon? The last available specifification confirms that by Aug'92 the second prototype had been finished - around the same time when the Falcon030 was released at Atari Messe! We can only speculate why Atari didn't show at least a prototype of the Falcon there...

#### The Microbox

However when we closely look at the [Microbox](https://www.maedicke.de/atari/hardware/microbox.htm)'s description (68030/68040 CPU, 32-bit data bus, 3 expansion slots), its [motherboard](https://www.computerhistory.org/collections/catalog/102672949) (we can see one huge expansion slot and pins of something what resembles VME prety well) and consider the fact that Ira Valenski (the [former ST/FM designer](http://www.computinghistory.org.uk/det/587/Atari-520-STM)) is directly mentioned in the Falcon specification and as the [design lead for the Microbox](http://www.atarimuseum.com/computers/16bits/falcon030/microbox/index.htm) we can speculate whether the Microbox wasn't the original Falcon project. Also, this prototype looks quite polished, so it could be the one from Aug'92.

Note: there are two versions of the Microbox _case_, one having a floppy disk drive on the front-right of the system which was for the machine described above, and a CD-ROM version for the Falcon040.

#### The Falcon040

And then there is the [Falcon040](https://www.maedicke.de/atari/hardware/falcon040.htm) (also designed by the Dallas team). It would seem it was supposed to share a case of similar design as the Microbox but the PCB surely is different - more slots, more sockets for ICs in development.

In Dec'92 the rumours about Atari Corp. having a Falcon040 in development were [pretty much alive](atari-st-format-issue-041_11.jpg) (with the focus on built-in CD drive), with planned release date in late 1993 as a more powerful successor of the Falcon030. As there is no mention of the Microbox whatsoever, we can again only speculate that sometime during the infamous Falcon030 production problems Atari Corp. realised that the Microbox doesn't make much sense anymore and went ahead with a full 68040 "PC like" machine. Unfortunately, no machine was ever shown or previewed in 1993 or later...

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

It seems that there had been two 32-bit Atari machines in development at the same time: the Falcon (designed by John D. Horton Jr. in Dallas, Texas) and the [Sparrow](https://www.maedicke.de/atari/hardware/sparrow.htm) (designed by Moshe Segal and Eran Dariel in Israel). The latter became the "real" [Falcon 030](https://www.maedicke.de/atari/hardware/falcon.htm) as we know it, making its debug in March 1992. What happened to the former one, nobody knows. Some of its features resemble the [Microbox](https://www.maedicke.de/atari/hardware/microbox.htm), including the Microbox's ambiguity about using either 68030 or 68040 CPU (the 1991 Falcon could use both). [Another source](http://www.atarimuseum.com/computers/16bits/falcon030/microbox/index.htm) claims the Microbox to be a separate project led by the [former ST/FM designer](http://www.computinghistory.org.uk/det/587/Atari-520-STM) Ira Valenski but this was perhaps meant only from case design point of view? Due to lack of any mention of PCI slots in its specification it perhaps wouldn't meant to be the [Falcon 040](https://www.maedicke.de/atari/hardware/falcon040.htm).

Also [Microbox's PCB](https://www.computerhistory.org/collections/catalog/102672949) looks quite different from the Falcon 040's so they surely weren't the same computers.

Anyway, both the Microbox and Falcon 040 were designed by the Dallas team, hinting that the 1991 Falcon had something to do with them. In this [magazine](91_falcon1.jpg) [excerpt](91_falcon2.jpg) dated July 13 1991 one can clearly recognise the TT/VME-based Falcon which had been in the works.

The following documents were found & rescued by [Christian Zietz](https://www.chzsoft.de) and first published at [atari-home.de](https://forum.atari-home.de/index.php/topic,13380.msg214172.html#msg214172):

- [Sparrow specification (dated Dec 18 1991)](sparrow_specification_19911218.md) (converted into markdown by me)
- [Page 3 of Sparrow schematics (dated March 12 1991)](sparrow-schematic-march91-page3.pdf)
- [Falcon specification (dated Dec 3 1991)](falcon_specification_19911203.pdf) (converted into PDF by Christian)
- [Falcon specification (dated Aug 26 1992)](falcon_specification_19920826.txt)

The Falcon must have been pretty close to a finished state as it was in development since the beginning of January 1991 and the last specification refers to it as "Prorotype B **release**", several months after the "real" Falcon 030's release! As you can see, in its latest specification it got also the DSP which was present only in the Sparrow/Falcon 030 so far. See also the related thread on [atari-forum.com](https://www.atari-forum.com/viewtopic.php?p=310452).

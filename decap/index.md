# Atari Falcon IC (Videl, Combel, SDMA) decap initiative

## What is this about?

As you are certainly aware, nearly each computer from the golden era of home computers (1970s - 1990s) was designed to use one or more custom integrated circuits. Custom means that it wasn't a component you could purchase in any store (so called commercially available off-the-shelf = COTS) but it was designed usually in-house and then ordered to be manufactured as a private contract.

The Amiga is famous for having many great custom ICs but as mentioned, basically any home computer from that era had some, the [Atari Falcon030](https://en.wikipedia.org/wiki/Atari_Falcon) not being an exception. Falcon's custom ICs are an evolution of the chipset found in the [Atari STE](https://en.wikipedia.org/wiki/Atari_ST#STE): GST MCU (GLUE + MMU + BLiTTER) became the Combel (Combo) chip, the Shifter became the Videl and the DMA became the SDMA.

Over the time, various interesting resources and projects have seen the light of day:

- [FX68K 68000 cycle accurate SystemVerilog core](https://github.com/ijor/fx68k) by ijor (Jorge Cwik)

- [Atari ST Shifter decap](https://www.atari-forum.com/viewtopic.php?t=29658) by ijor (Jorge Cwik) (on AF you can find posts about further decaps / analysis of the MCU and MMU, too)

- [Blitter re-creation initiative](https://www.exxosforum.co.uk/forum/viewtopic.php?f=80&t=79) by Exxosforum folks

- [Atari ST ASIC  designs](https://www.chzsoft.de/asic-web/) by Christian Zietz (see also [Atari STE GST MCU + GST Shifter Simulation](https://github.com/gyurco/gstmcu) based on them!)

... and some more (unfortunately, there is quite a chaos when it comes to finding the actual drawings and sources). Using those but also with a lot of patience and trial and error, people started building their own cores for the MiST(er) or even creating their own, like [zeST](https://zest.sector1.fr/) or [Suska](http://experiment-s.de/en/).

With some simplification one could say that building your own ST and maybe even STE machine in FPGA is a real possibility today. However, when it comes to Falcon, this is

H5
falcon03ng
francuz posyt


https://www.exxosforum.co.uk/forum/viewtopic.php?p=121181&sid=4a8b42fbd2b6a742e3f5413cc3b4d457#p121181






https://www.change.org/p/dan-wilga-open-source-geneva-neodesk?recruiter=718262426

https://www.atari-forum.com/viewtopic.php?p=319600#p319600

https://gribnif.github.io/

https://atari-forum.com/viewtopic.php?t=33171


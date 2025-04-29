# Atari Falcon's Videl decap initiative

<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="2W34Y3Y2S3W8L" />
<input type="hidden" name="no_recurring" value="1" />
<input type="hidden" name="item_name" value="Please don't forget to specify under which name or nickname should I publish your contribution. " />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_SK/i/scr/pixel.gif" width="1" height="1" />
</form>

Or you can use [Wise](https://wise.com/pay/me/miroslavk428)

Or if you prefer EU IBAN transfer: SK37 5600 0000 0061 8230 8002

(let me know in the message for recipient which name/nickname should I use for publishing your contribution)

[What is this about?](#what-is-this-about)

[But why, really?](#but-why-really)

[Humble beginnings](#humble-beginnings)

[So here we are](#so-here-we-are)

[Donations](#donations)

[News](#news)

## What is this about?

As you are certainly aware, nearly each computer from the golden era of home computers (1970s - 1990s) was designed to use one or more custom integrated circuits. Custom means that it wasn't a component you could purchase in any store (so called commercially available off-the-shelf = COTS) but it was designed usually in-house and then ordered to be manufactured as a private contract.

The Amiga is famous for having many great custom ICs but as mentioned, basically any home computer from that era had some, the [Atari Falcon030](https://en.wikipedia.org/wiki/Atari_Falcon) not being an exception. Falcon's custom ICs are an evolution of the chipset found in the [Atari STE](https://en.wikipedia.org/wiki/Atari_ST#STE): GST MCU (GLUE + MMU + BLiTTER) became the Combel (Combo) chip, the Shifter became the Videl and the DMA became the SDMA.

Over the time, various interesting resources and projects have seen the light of day:

- [FX68K 68000 cycle accurate SystemVerilog core](https://github.com/ijor/fx68k) by ijor (Jorge Cwik)

- [FX ST Blitter](https://github.com/ijor/stBlitter) by ijor (Jorge Cwik)

- [Atari ST Shifter decap](https://www.atari-forum.com/viewtopic.php?t=29658) by ijor (Jorge Cwik) (on AF you can find posts about further decaps / analysis of the MCU and MMU, too)

- [Blitter re-creation initiative](https://www.exxosforum.co.uk/forum/viewtopic.php?f=80&t=79) by Exxosforum folks

- [Atari ST ASIC  designs](https://www.chzsoft.de/asic-web/) by Christian Zietz (see also [Atari STE GST MCU + GST Shifter Simulation](https://github.com/gyurco/gstmcu) based on them!)

... and some more (unfortunately, there is quite a chaos when it comes to finding the actual drawings and sources). Using those but also with a lot of patience and trial and error, people started building their own cores for the [MiST(er)](https://en.wikipedia.org/wiki/MiSTer) or even from scratch like the [zeST](https://zest.sector1.fr/) or [Suska](http://experiment-s.de/en/).

With some simplification one could say that building your own cycle-accurate ST and maybe even STE machine in FPGA is a real possibility today (and not only in FPGA, see the [H5 Phoenix](https://www.atari-forum.com/viewtopic.php?t=42588) or [Atari ST ATX](http://ataripcb.pl/atari_st_atx_v1.1.html)). However, when it comes to Falcon, this is a whole different matter. While the physical replica of Falcon PCB has been attempted at least three times:

- [F030NG](https://github.com/salacpavel/F030NG) by Centuriontech (Pavel Salac, cancelled)

- [Falcon motherboard recreation](https://leblogdecosmos.blogspot.com/2024/12/cm-falcon-030-sous-eagle.html) by Cosmos (ongoing)

- [Microbox recreation](https://wizztronics.com/falcon-rebuild) by Wizztronics (see also the [AF thread](https://www.atari-forum.com/viewtopic.php?p=460347#p460347), [older website](https://wizztronics.com/atari-news) and their [Facebook page](https://www.facebook.com/p/Wizztronics-100063913393264), ongoing)

the actual chips must have been supplied either from a real Falcon or purchased from [BEST Electronics](https://www.best-electronics-ca.com/custom-i.htm) or Wizztronics (from their limited supply of new old stock, of course). Apart from that, there was only one attempt to actually produce an enhanced replica of the Videl chip - the [SuperVidel](https://nature.atari.org/supervidel.html) project and even that one was based on guesswork, Hatari source code and the partial documentation available from demo coders.

So it's time to change that!

## But why, really?

There are basically two, okay, three main bullet points for me:

- to be able to switch your broken Videl (Combel, SDMA) chip for a new one, in case it gets damaged (Videl is the most common offender here, often due to usage of the original, non-recapped, power supplies)

- to encourage development of new Falcon PCB replicas. Why? Well, let's say that the original Falcon PCB has so many defects and cheap solutions that it's miracle it is even working. And of course it open gates to further expansion, like onboard SATA/USB/Ethernet, better CPU/DSP etc

- and the last but not least: to be able to uncover the custom ICs' secrets! There's a couple of clues (both from leaked TOS 4.04 source code and internal documents about the [Dallas Falcon project](https://mikrosk.github.io/sparrow/)) that Atari had in the works a true chunky-oriented 8bpp video so who knows, maybe there will be some clues about that.

## Humble beginnings

Of course, I had this idea in my head for a long time. Back in January 2018 I contacted ijor about his decap work for 8-bit and 16-bit Atari machines and inconspicuously asked about any hope that he'd do the same for the Falcon. He replied that it's not on his radar but gave me some insight about taking pictures of the die:

> Well, it would be hard, of course, and would take a lot of time. But it is certainly feasible. Can't be very precise without knowing the scale of the size of the Falcon chips.

\[...\]

> You have to either convince somebody to take the pics for free, or pay a specialized lab, which would require collecting some money. Not easy to get somebody to do it for free, especially on not so old dies because it would take lots and lots of pics.

Fast forward to October 2024, I suddenly remembered about our chat when reading a [thread on Exxosforum](https://www.exxosforum.co.uk/forum/viewtopic.php?p=121181#p121181). As you can see, I got more or less the same reply. However this time I decided to follow through and actually investigate what it would *really* take. So I contacted ijor once again.

Basically, ijor advised me the following:

- be prepared that the project will take many months, probably years but it has to be started at some point

- get a chipset to decap (ideally working, considering the enormous effort involved)

- collect money for at least one chip (with his estimate being about $1000 USD per chip)

- send him one sample to forward to the lab for decap and producing high rez images of the die

- once the lab performs the work, he will post the images in a public place

- eventually, ijor, or somebody else, (or AI), or some kind of joined effort would produce reverse engineered schematics

He reminded me again that this might take years and that he cannot commit himself at all or to make any kind of promises whatsoever but when it comes to it, his work would be for free. All the money would be spent on the process of acquiring the die pictures.

So that got me thinking. BEST sells those ICs for $45 per piece, so perhaps this is a good opportunity to purchase them before they run out of stock. So that would solve the chipset availability problem (no need to desolder them from a Falcon). ijor has good contacts at a reliable (and somewhat cheap-ish) lab in China and most importantly, I'm in the mood to really do it! And so I did. I purchased all three ICs (Videl, Combel, SDMA) from BEST and shipped them to ijor. Then he shipped the Videl (for starters...) to the lab.

And in March 2025 we got ...

![Low rez sample of Videl's die](C302829-TOP-50X.jpg)

... a low rez sample of Videl's die! This image is at low resolution and it's just for the purpose of getting an idea of the die characteristics. You can't get any actual logic from this image.

## So here we are

With the die's image several things became clearer. The most important one being that the die is pretty big. In comparison, this die is about 2.5 times larger than the one on the ST chipset. And it also uses a more modern, and hence, smaller, CMOS process. This would mean that the lab cost will be much higher. The lab charges by picture. Bigger die require more pictures. And also the more advanced CMOS process will require using higher resolution pictures, which again, means more pictures.

It is always hard to say in advance but ijor estimates the lab cost for this chip would be somewhere **between $2000 USD and $3000 USD**. This funds don't have to be paid in advance. The lab doesn't charge until the job is completed and we received the images already (I guess this is thanks to the good relationship they have with ijor).

The die is built with multiple layers one on top of the other. Metal layers are usually at the top and being wide and bright you can't see much of the actual silicon layers below.

The decap process is to take an image for one layer and then remove it with a process called, well, delayer. Once that layer is removed, they take an image of the lower layer that is now fully visible. This repeats until all the relevant layers were processed. Sometimes you don't need to remove all the layers. But in most cases you need at least to remove the metal layers. Even then, it won't be easy to read the logic. It will probably take quite some time.

After we receive the images we can start the long and tedious process to convert this to netlist, schematics, and/or HDL (Verilog/HDL). The exact step could vary depending on the case.

## Donations

There are two aspects to it. The first one being, of course, that $3000 USD is quite a lot of money. So that begs the question whether other people wouldn't be willing to contribute. The second aspect being that I couldn't give ijor the go-ahead unless I was sure I got the funds ready which could take months, after which many things may have changed (like the price, or the lab's availability etc). So I decided the following:

- I will be the one paying the bill, no matter what. Its exact sum will be published here once we get it.

- Everyone who will have contributed will get a voting right (with a vote relative to the overall amount contributed) what to do with the acquired die pictures:
  - we could release them as-is, making them available for both commercial (e.g. for the [Apollo](https://www.apollo-computer.com)) and open source developers
  - we could release them under a strict free license like the GPL to make sure it will be used only for open source projects
  - we could keep it in-house for some time for selected developers

- Whatever decision will be, the pictures eventually *will* be released publicly, that's for sure. The only question is when (see above).

- For a better idea what to expect, I'll remind you of another campaign, the restoration of [Geneva/Neodesk](https://gribnif.github.io) archive. For those unaware, in October 2016 Antoni Sawicki, also known as [tenox](https://www.tenox.net) (see also his [Atari System V website](http://www.atariunix.com)!), [contacted](https://www.atari-forum.com/viewtopic.php?p=303711#p303711) Dan Wilga with an inquiry about restoration of his old Atari TT hard drive. In May 2017 Dan's hard drive content had been recovered for a [hefty $1900 USD](https://www.atari-forum.com/viewtopic.php?p=319600#p319600). In addition to that, Atarian Computing (Joshua Kaijankoski) created a [petition](https://www.change.org/p/dan-wilga-open-source-geneva-neodesk) to show Dan how much anticipated the release of his products was. However it took nearly one more year to actually get the (now freeware) [updated executable files](https://atari-forum.com/viewtopic.php?p=339125#p339125) and then another **six** years the [source code](https://atari-forum.com/viewtopic.php?p=458217#p458217)!

- So you see, your donation wont turn into a FPGA Videl overnight however in case of a successful run, we may get also Combel and SDMA ICs decaped in a similar way. Not to mention the motivation boost for all invoved to actually start reverse engineering them.

## News

### 23.04.2025

High rez picture of another layer has been received.

### 01.04.2025

High rez picture of the top metal layer have been received. It is not really possible to read the logic yet. But there is something interesting. There are four regular areas located at the four corners. These most likely are RAM, or conceivable, one might be ROM.

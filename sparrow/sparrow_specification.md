Date         : 12-18-91                        ****
Ver          : A10                             ****
Written by   :Moshe Segal, Eran Dariel         ****
                                              ******
                                             ** ** **
                                            **  **  **
                                           **   **   **








                          SPARROW SPECIFICATION






































SPARROW SPEC. REV A10                                   page 1


REV A10   10/22/91  changes:

page 3&10 -added "hooks to connect to the new Atari Universal
Keyboard Controller."
-changed ACSI to SCSI

page 4-change default from 250ns to 125ns EPROMs/ROMs

page 6-bus error timeout set to 16us for both 8MHz and
16MHz. programmable to 32us.

page 7-changed confi. switch bit 5 from 0 to 1 for - not
quad density and from 1 to 0 for  -  quad density
floppy.

page 7-changed ACSI to SCSI 50pin connector.

page 8-omit external FDD.

page 11-added "each line also starts on even-word
boundary"

page 14-change Video connectors to a single VGA type
connector. Audio is not sent out to the monitor.
The Sparrow has an internal speaker.

page 15-Change Audio out connector from RCA Phono to
"Walkman" micro-stereo connector.

pages 18 - 22Memory map changes:
F00000 - F0000F  (IDE)  corrected to F00000 -
F0003F
FA40 - FA5F  Assigned to FP Co-Proc
8001 - changed
8007 - Bus error and power-fail options added
8266 - VGA bit removed
8288 - Vsync rise corrected to Hsync rise
82C0 - bit assignments inverted, burst time option
added


page 2-68000 changed to 68030.

page 3-68881 FPU & 56001 DSP added.

page 9-Parallel port. ACK goes to COMBO device, not PSG
IOA7.

page 14-Video connector changed.




I/O map-vv bits in FF8006 changed.
          Bit R in FF8266 added.
          Bits vv in VMC changed.







SPARROW SPEC. REV A10                                        
page
2


 1.   - INTRODUCTION -

The  Sparrow  is  the  newest  enhancement  in  the  series  of
Atari ST
    compatible 68000 - based computers. It is upward compatible
with the
    Atari STe, and includes a number of enhanced features.

The hardware specifications of the computer is as follows:

-    Motorola MC68030 at 8Mhz (default)  or 16MHz, software
selectable.

-    RAM:    Dual-purpose   (video/system)   RAM,  configuration 
is  as
    follows:

For  16  bit  wide  video  bus  possible  configurations are:
512Kbytes,
    1Mbytes, 2Mbytes, 4Mbytes, 8Mbytes and 14Mbytes.

For 32 bit wide video bus possible configurations are: 1Mbytes,
4Mbytes
    and 14Mbytes.

-    ROM:  2  socketed  ROMs,  providing  256Kbytes or 512Kbytes
of 
ROM
    space (strappable).

-    The Sparrow supports 3 video modes in STe mode as follows:

    H X V         # of pallet bits         color resolution
(bits)

    320 x 200            4                        4
    640 x 200            2                        4
    640 x 400            1                        N/A

-    The Sparrow  supports  programmable  video  modes  in  SP 
mode  as
    follows:

    H X V           # of pallet bits         color resolution
(bits)

    Programmable    Programmable (4/8)             6

-     The Sparrow also supports the XGA high color mode which
enables up
    to  65536  possible  direct  color  combinations. This 
option 
also
    supports  automatic  pixel scroll capability since each video
memory
    word corresponds to one pixel.

-    The video shifter supports both 16 or 32 bit wide data  bus 
width.
    It  retrieves  video  data  by  page  mode  from  DRAM. It 
supports
    programmable overscan and pixel scrolling.

-      The Sparrow  supports  the  necessary  logic  to  support 
future
    addition of an Internal Hard Disk (IDE Interface).

-      The  Sparrow  supports all the necessary controls to
support
full
    implementation of Interlace on TV's. This includes  Field 
sync 
and
    Equalization pulses for TV. This feature enables enhanced TV
display




SPARROW SPEC. REV A10                                            
page 3


    by  enabling  the  display of 400 lines or more on TV's. The
Sparrow
    also supports interlace on monitors, to enable display of 400

lines
    on color monitors.

-   The Sparrow contains a built in Blitter.

-   The  Sparrow supports the industry standard analog RGB color
monitor
    interface as well as monochrome  interface  and  a  composite

video
    interface  for  PAL,  SECAM  and  NTSC  TV   standards. It 
supports
    monochrome monitors, color monitors and the VGA monitor.


-  The Sparrow has a Parallel I/O port, implemented using   one 
of 
the
    parallel   ports   on the General Instruments AY-3-8910 /
Yamaha YM-
    2149 sound chip.

-  The Sparrow has  one low-speed  async  serial  I/O  port 
(implemented
    using the 68901 MFP).

-  The  Sparrow  has  an   ST/MEGA compatible intelligent
keyboard,
with
    mouse and joystick ports.  It also has the hooks to connect
to
the
    new Atari Universal Keyboard Controller.

-  The Sparrow supports the standard SCSI Interface (for Hard
Disk,
Laser
   Printer, CD-ROM, etc).

-  The Sparrow has a  Floppy disk controller and interface that
supports
   720 Kbytes or 1.44Mbytes floppies, sharing  the  DMA 
channel.It has
   also an option for quad density floppies.

-  The Sparrow has a  Musical Instrument Digital Interface (MIDI)

-  The  Sparrow  has  an   Atari ST compatible cartridge port
(128
Kbyte
    storage).

-  The Sparrow has enhanced quad channel sound capabilities:
     12 bit, stereo DAC with parallel (8bit) or serial (16bit)
I/F.
      8 bit, stereo ADC with 16bit serial output.
      Digitally controlled tone, volume and fade via microwire
I/F
   The  sound chip (RASCAL) interfaces with the new Sparrow DMA
chip
      (which also contains the DMA support for disk transfers).

-  The Sparrow contains  the  PSG  Yamaha  YM-2149  for 
producing 
music
    synthesis, sound effects and audio feedback.

-  The  Sparrow  contains  a  GENLOCK option to synchronize the
internal
    clock to an external sync signal. In case of  Genlock  and 
XGA 
the
    Sparrow  outputs  a  special  control  bit  for each pixel to
enable
    programmable switching between internal or external video
source. In
    this case the number of possible colors is reduced to 32768.







SPARROW SPEC. REV A10                                        
page
4

-  The Sparrow contains interface to the following peripherals: a
set  of
    additional joysticks, paddles and light gun/pen.

-  The Sparrow has a built in Real Time Clock.

-  The Sparrow has a built in networking capability through the
85C30 SCC.
-  Sparrow has on board the 56001 DSP and 68881 FPU.



2.  - MAIN SYSTEM -

The  Sparrow  is intended to be a compatible, high-performance
extension
    of the Atari STe architecture.

2.1.   - PROCESSOR -

The Sparrow uses the Motorola 16 Mhz MC68030  32-bit 
microprocessor.
    Support  circuitry  built  around  the  68030  allows 
switching the
    processor clock between 16 Mhz and 8 Mhz. Processor clock
control is
    provided by control  bit  in  a  configuration  switch  I/O 
address
    (FF8006).

2.2.   - ROM -

The  system  includes  on-board  sockets  for  a  set of  2 1Mbit

ROMs,
    providing  a total of 256Kbytes ROM.  Since system bus access
is 16-
    bits wide, both ROMs must  be  present.
Jumpers    are    provided    to   allow   the   use  of  27256, 
27512,
    27010/27C1001, and  57101/27C1000  EPROMs,  in  addition   to

53100
    ROMs.    The  default jumper position allows the use of 27512
EPROMs
    (for a total of 128Kb  of  ROM)  as  well  as 571001/27C1000 
EPROMs
    or 531000 ROMs (for a total of 256Kb of ROM).  32  pin 
sockets 
are
    provided,  although  27256, 27512, and 531000 only use the
bottom 28
    pins. The Sparrow supports by default  125ns EPROMs/ROMs. It
can  be
    programmed to support  250ns devices.

An  image of the first 8 bytes of  ROM  resides  in  the first  8

bytes
    of  the  RAM memory. These first 8 bytes
(0x00000000-0x000007)  are
    accessible only in supervisor mode.  Attempts to read from
this
area
    in user mode or any write are generate bus error. The  full 
ROM
    resides at the memory location 0x00E00000 - 0x00EFFFFF.
Among the tasks this ROM perform are system initialization and
boot
code
    that  can  boot from a floppy or SCSI device.   The ROM  is
expected
    to  contain a  multi-lingual  implementation  of  TOS.
Moreover,  if
    sufficient  space is available,  ROM-based  service
diagnostics
will
    be provided.

2.3.   - RAM -

The basic system includes 512Kb to 14Mb of dual-purpose  RAM 
which 
 is
    used   for   both   video  and system memory. This is
implemented by





SPARROW SPEC. REV A10                                        
page
5


    using 8 bit wide SIMMS (Single In line Memory Modules), 
which 
must
    be used in pairs.

The  DRAM  devices  used  can  have one of the following
configurations:
    256Kbitx1, 256Kbitx4, 1Mbitx1, 1Mbitx4, or 4Mbitx1. Each SIMM
module
    is 8 bit (byte) wide and can be 256K, 1M or 4M  deep. The 
following
    schematics  show  the  possible configuration for 16 bits
wide
video
    bus, using 256K type DRAMs:


    - Total RAM -          - SIMM  -                  
-SIMM-   512Kbytes          |---- 256Kbytes----| 
   
|------256Kbytes-----|


using two pairs of the same type of SIMMs gives 1Mbytes as
follows:

     1Mbytes          |-----256Kbytes----|     
|-------256Kbyes-----|
                      |-----256Kbyes-----|     
|-------256Kbytes----|

Using 1M type DRAM devices instead of 256K type  devices  gives 
2Mbytes
    using  the  first  scheme  (one pair of SIMMs), or 4Mbytes
using the
    second scheme (two pairs of  SIMMs). Using  4M  type  devices

gives
    8Mbytes  with  one  pair of SIMMs or 16Mbytes for two pairs
of
which
    only the lower 14Mbytes are used.

For 32 bits wide video bus  the  basic  configuration  using 
256k 
type
    devices would be:
- Total RAM     - SIMM -      - SIMM -         - SIMM -        
-SIMM-

  1Mbytes   |--256Kbytes--| |--256Kbyes--| |--256Kbytes--|
|--256Kbytes--|

Using 1M type devices would give 4Mbytes and using 4M type
devices
would
    give 16Mbytes of which only the lower 14Mbytes are used.

There are four resources that compete for the memory apart from
the
CPU.
    These  resources,  in  decreasing order of priority are:
Video,
DMA,
    Refresh and  Blitter.  Actually,  only  two  of  these 
resources
    arbitrate  for  the  system bus in a normal arbitration
process: the
    DMA and the Blitter. In STe the Video does not really
arbitrate 
for
    the bus but use a timeshare scheme to share memory accesses
with CPU    cycles. Also,  in  STe  the  DMA 
arbitration  for disk
transfers is
    controlled by the DMA device READY line, while the
arbitration
logic
    resides in the MCUG. In STe, the  sound  DMA  shares  the 
timeshare
    mechanism with the video and does not really arbitrate for
the
bus.
In Sparrow the situation is different. The new DMA chip contains
the DMA
    arbitration  logic  that was in the MCUG (in STe). It
arbitrates for
    the bus either for DMA disk transfers or sound DMA accesses.
The DMA
    arbitration has higher priority than the Blitter 
arbitration.
Thus,
    a  DMA arbitration will interrupt the Blitter operation. The
Blitter
    will resume control of the system bus when  the  DMA  
releases 
the
    bus.






SPARROW SPEC. REV A10                                        
page
6

In  Sparrow,  video  accesses  use  page  mode  and  thus  the
timeshare
    machanism used in STe cannot be employed. Instead, any video
request
    for memory access will stall the current  bus  cycle  if  it 
is  an
    access  to the DRAM (be it a CPU cycle or another bus master:
DMA or
    Blitter). This is done by inserting wait states into the
current bus
    cycle (by not activating DTACK). While the current bus cycle 
is  in
    wait  states,  the  memory  bus (which is separate from the
CPU
data
    bus) is used for video accesses. When video access 
terminates, 
the
    DTACK  is activated which enables the current bus cycle
tocomplete.
    Same scheme is used for refresh request. Thus, video and
refresh can
    access the memory without being delayed by any bus master or
by 
the
    CPU.
The  MC68030 accesses to on-board RAM typically  require 4 clock
cycles.
    There is no provision for parity or ECC  protection  on the  
system
    RAM.    The  reliability  of  current  DRAM  technology 
makes 
this
    unnecessary.

The  first  0x800  bytes  (2K)  of   RAM  
(0x00000008-0x000007FF) 
 are
    accessible  only in supervisor mode.    Attempts  to  read 
or
write
    to  this  area  in  user mode generate bus error.


2.4.   - System Control Unit -

2.4.1.   - Interrupt Mask and Current Status -

The Sparrow interrupt priority assignments are as follows:

   Level          Definition

   7 (highest)    NMI
   6              MFP interrupts
   5
   4              Vertical blanking (sync)
   3
   2              Horizontal blanking (sync)
   1 (lowest)

There is hardware for enabling use of Level 1 and Level  3  as 
external
    positive  edge  VPA  type  interrupts.  This  feature can be
used for
    parallel port ACK by srapping the external ACK to EXTINT (1 
or 
3).

There  is also hardware for enabling use of Level 5 as external
negative
    edge regular interrupt. This  feature  can  be  used  by 
SCCINT  by
    strapping  it  to EXTINT5.  EXTINT7 is also encoded
asnegative
edge
    interrupt.












SPARROW SPEC. REV A10                                        
page
7


2.4.2.   - Bus Error Circuitry -

The SCU also implements  a  system  bus  error  circuitry.   If 
nothing
    concludes a bus cycle within a 16us timeout (programmable to
32us)
    the SCU will signal  a bus error.   Bus  error  is  also 
asserted
    if  certain conditions are violated, such as writing to ROM,
writing
    byte sized data to a word sized register, or writing to
system
memory
    when the processor is in user mode.

2.5.   - Floppy/ACSI Interface -

The   ST   compatible  Floppy/ACSI  subsystem  interfaces between

dual-
    purpose  RAM  and  the  internal floppy disk controller. 
Also,
the
    standard SCSI Port interfaces to devices  such  as  laser 
printers,
    hard  disk drives,  and CD-ROMs.

2.6.   - Configuration Switch Control -

The Sparrow implements an 8 bit configuration switch register at
address
    FF9200  to indicate the presence or absence of options.
Depending on
    printed circuit board layout, the register may be
implemented
using
    an 8 bit DIP switch, solder pads, or double "row of stacks"
jumpers.
    A  bit will read as a "1" if the circuit is open. The
following
bits
    have been assigned meanings:





  Bit           Meaning

  7             0 - no DMA sound hardware is installed.
                1 - DMA sound hardware is available.

  6             0 -  high  speed  (16  Mhz)  Floppy  disk 
controller  is
                          installed.
                1  -  only  low  speed (8 Mhz) Floppy disk
controller is
                          installed.

  5             1  -  don't care.
                0  -  quad density floppy.

Bits 0-4 of this I/O address are not used.


3.   - Device Subsystems -

The Sparrow architecture supports the following device 
subsystems:

-    Standard SCSI Port

-    floppy disk interface sharing the ST "ACSI" DMA channel





SPARROW SPEC. REV A10                                        
page
8


-    serial port and  an   external   interrupt  port  connected 
to  MFP
     controller

-    a  Centronics  parallel  printer  port driven by the
YamahaYM-2149
     sound chip

-    a ST/MEGA compatible intelligent  keyboard,   mouse,   and 
joystick
     interface and option for interfacing to the new Atari
Universal
     Keyboard Controller.

-    a port supporting application and diagnostic cartridges

-    two  controller  ports  for  additional  joysticks as well
as
light
     pen/gun and paddle controllers.


3.1.  SCSI

The hard disk drive  interface  is  provided  through  a 
standard 
SCSI
    Interface  using  the  5380  NCR SCSI Controller. Transfers
can
take
    place at up to 1.5Mb/s.

The   SCSI  interface  uses  a  50 pin  connector  with  the 
following  pin
    assignment:

           1,3,5,7,9,11,13,15,17,19,21,23,27,29,
           31,33,35,37,39,41,43,45,47,49,20,22,
           24,28,30,34 - GND
           2,4,6,8,10,12,14,16 - Data Bus
           18 - Parity
           32 - ATN
           36 - BSY
           38 - ACK
           40 - RST
           42 - MSG
           44 - SEL
           46 - CD
           48 - REQ
           50 - IO


3.3.   - Floppy Disk  (FDD) -

The Sparrow floppy disk subsystem is designed  around the  AJAX
(WD1772)
    Floppy  Disk  Controller  supporting  one floppy disk drive. 

It is    a higher speed  version  of the 1772 and
supports 1.44Mb
(formatted)
    capacity drives.

The  subsystem  interfaces  to  the  dual-purpose   RAM through
the
ACSI
    DMA controller.  Commands and arguments are sent to the FDC
by
first
    writing  to   the  DMA  Mode  Control Register to select the
desired
    FDC register and then writing the data bytes.





SPARROW SPEC. REV A10                                        
page
9


The standard floppy for the Sparrow is the  3.5  inch floppy 
disk 
with
    the  capacity  of 720 Kbyte (formatted).   The 1.44Mb drives
will be
    available as an option.  Also, since the AJAX floppy disk
controller
    supports quad density floppies, this is also available as an
option.



3.4.   - MFP -

A  68901  Multi-Function  Peripheral   (MFP)   controller  is  
used  to
    provide  system  timers,  low  speed  RS232C  serial  port, 
and  an
    interrupt   controller. The  MFP is used in a way that is
compatible
    with the ST.  It provides both a serial port and interrupt
control.

The baud rate clock for the MFPs serial  transmitter  and 
receiver 
 is
    derived  from  the timer D output of the MFP. Given the MFP's
2.4576
    MHz clock,  baud  rates  up  to  19.2Kbaud can be supported
on
these    serial ports.

The  RS232  port  uses  a  DB  25 pin P connector with the
following pin
    assignments:

        1 - protective ground
        2 - transmitted data
        3 - received data
        4 - request to send
        5 - clear to send
        7 - signal ground
        8 - data carrier detect
       20 - data terminal ready
       22 - ring indicator

Request to send and Data terminal ready are issued by I/O port A
in 
the
PSG.

3.5.   - Parallel Printer Port -

The  Sparrow   architecture  includes  a  bi-directional  8-bit
parallel
    printer  port that implements a subset of the  Centronics 
standard.
    This  interface  is  through  the  General Instruments 
AY-3-8910  /
    Yamaha YM-2149 Programmable  Sound  Generator  (PSG)  chip.  
It  is
    pinned  out  in  a  DB25S in a  way that  is  a  subset of
the
Atari
    PC4.   The Centronics STROBE signal is generated from  a  PSG

 bit.
    The   Centronics   BUSY signal  from  the  printer  connects 
to one
    of the parallel input lines of the MFP to  permit  interrupt 
driven
    printing. Eight bits of read/write data are handled through
I/O
port
    B  on  the  PSG  at  a  typical data transfer  rate 
exceeding 
4000
    bytes/second.








SPARROW SPEC. REV A10                                        
page
10

The Sparrow also supports  the  Acknowledge  signal  from  the 
parallel
    printer  port,  but  it  is an input pin which does not
generate any
    interrupt. It is connected to the COMBO device.

 The parallel port uses a DB 25 pin S connector with the 
following 
pin
    assignments:
         1 - centronics strobe
         2 - data 0
         3 - data 1
         4 - data 2
         5 - data 3
         6 - data 4
         7 - data 5
         8 - data 6
         9 - data 7
        10 - Acknowledge
        11 - centronics busy
     18-25 - ground



3.6.   - Keyboard Interface -

The  SP  keyboard  interface  is  completely compatible with the
ST/MEGA
    computers.    The   keyboard   is   equipped   with   a 
combination
    mouse/joystick  port  and  a  joystick  only  port.    The 
keyboard
    transmits   encoded  make/break  key  scan  codes  (with  
two 
 key
    rollover),  mouse/trackball  data,  joystick data,  and
time-of-day.
    The keyboard receives commands  and  sends  data  via 
bidirectional
    communication    implemented     with     a    MC6850  
Asynchronous
    Communications  Interface Adapter (ACIA).   The data 
transfer 
rate
    is   7812.5  bits/second.    All  keyboard functions,  such 
as key
    scanning, mouse tracking, command parsing, etc. are performed

by  a
    HD6301V1   8-bit    microcomputer    unit.     (See    the   
Atari,
    Intelligent Keyboard (ikbd) Protocol, February 26, 1985.)
    Sparrow also has hooks to  interface  to  the  new  Atari 
Universal
    Keyboard  Controller by incorporating the option to inhibit
the
host
    UART clock until the keyboard is ready.

3.6.1.   - Mouse and Joystick Interface -

The  Atari   two-button   mouse   is  a  mechanical, 
optomechanical, or
    optical   mouse   with    the    following    minimal   
performance
    characteristics:  a  resolution  of  100  counts/inch,   a  
maximum
    velocity   of   10  inches/second,  and maximum pulse phase
error of
    50%.    The  joystick  is  a  four  direction  switch-type 
joystick
    with one fire button.











SPARROW SPEC. REV A10                                        
page
11


Mouse/joystick0  uses  a  DB9  pin  P  connector  with the
following pin
    assignment:

       1 - xb pulse/ up switch
       2 - xa pulse/ down switch
       3 - ya pulse/ left switch
       4 - yb pulse/ right switch
       6 - left button/ fire button
       7 - power
       8 - ground       9 - right button/ joy1
fire

Joystick1 uses a DB 9 pin P connector with the following pin
assignment:

       1 - up switch
       2 - down switch
       3 - left switch
       4 - right switch
       6 - fire button
       7 - power
       8 - ground

3.7    - ROM Cartridge -

The Sparrow cartridge port is  fully  compatible   with   ST 
cartridge.
    The  cartridge  is  physically  connected through a 40 pin
card
edge
    connector ROM  cartridge  slot.   Cartridge ROMs  are  mapped

to  a
    128K   memory   region   starting   at  0x00FA0000,  
extending 
 to
    0x00FBFFFF.


The cartridge must be installed with the chips facing down.

The cartridge uses a 40 pin card edge S connector with the
following pin
    assignment:

       1 - power +5VDC
       2 - power +5VDC
       3 - data 14
       4 - data 15
       5 - data 12
       6 - data 13
       7 - data 10
       8 - data 11
       9 - data 8
      10 - data 9
      11 - data 6
      12 - data 7
      13 - data 4
      14 - data 5
      15 - data 2
      16 - data 3




SPARROW SPEC. REV A10                                       page
12


      17 - data 0
      18 - data 1
      19 - address 13
      20 - address 15
      21 - address 8
      22 - address 14
      23 - address 7
      24 - address 9
      25 - address 6
      26 - address 10
      27 - address 5
      28 - address 12
      29 - address 11
      30 - address 4
      31 - ROM3 select
      32 - address 3
      33 - ROM4 select
      34 - address 2
      35 - upper data strobe
      36 - address 1
      37 - lower data strobe
   38-40 - ground

4.   - Video Subsystem -

The  Sparrow  video  subsystem  is  designed  to extend the
existing STe
    modes.   Additional modes are available on the  Sparrow  that

allow
    more  colors  and  larger  screen  sizes.     The  Sparrow 
enhances
    functionality by permitting video display memory  to  start 
at 
any
    even  word  boundary (provided that each line also starts on
even-word
    boundary). This  enables  scrolling.   Also,  it  adds the
capability
    of scrolling horizontally on a one pixel  basis.  It  also
    supports  interlace on  TV's   with  all  its necessary
controls like
    Field sync and Equalization pulses. This enables  higher 
resolution
    video  diplays  (400 lines and more) on TV's. Interlace is
supported
    also on color monitors to support display of 400 lines or 
more. The    Sparrow  also supports overscan and
a color pallet of 256
colors out
    of 262144  possible colors. In addition it  supports  the 
XGA 
high
    color  mode  which gives up to 65536 direct colors. In 16
bits
video
    bus the overscan is supported in steps  of  16  pixels. In 
32 
bits
    video bus the overscan is supported in steps of 32 pixels.





4.1.   - Video Configuration -

The Sparrow supports 3 video modes in ST and programmable video
modes in
    SP mode.







SPARROW SPEC. REV A10                                       page
13

     STe mode
     mode      resolution   bit      palette          colors
     bits                   planes   (CLUT entries)   DACs
      00       320x200      4        16              4096/4-bits
      01       640x200      2        4               4096/4-bits
      10       640x400      1        -                Monochrome

     SP mode
     resolution     planes          palette            colors
                                    (CLUT entries)     DACs
     programmable   prog. (4/8)     prog. (16/256)   
262144/6-bits

The machine will switch to either ST or SP mode automatically
when
the
    corresponding shift mode register (ST or SP) is written.

In  addition a bit in the SP shift mode register switches the
Sparrow to
    the XGA high color mode. The TOS Operating System is
responsible for    updating the various video
shifter register after power up 
or 
mode
    change.
As  the  table  indicates,  the  modes  are  set  through either
the STe
    Shift Mode Register (address FF8260) or the SP shift  mode 
register
    (address  FF8266).   16 word-wide registers comprise  the 
STe
Color
    Palette (also known as the Color Look Up Table -  CLUT). 256
double
    word-wide registers comprise the SP color look up table.  
Contained
    in  each  entry  are 12 bits (in STe mode) or 18 bits (in SP
mode) of
    color:   4-bits (STe) or 6-bits (SP) each for  red, green,
and 
blue.
    Therefore,  a  total  of 4096 possible color combinations
(16x16x16)
    are selectable  in STe mode and 262144  possible  color 
combinations
    (64x64x64)  are  selectable  in  SP  mode. In  order   to  
maintain
    compatibility  with  the  ST (which had 3 bits for each
color,
right
    aligned within nibbles), the high order bit of each color in
STe mode
    is actually the least  significant  bit  of  color 
information. The
    following compares the CLUT entries for the ST and STe:

ST:  XXXX  X210  X210  X210
            red  green blue

STe: XXXX  0321  0321  0321
           red  green blue

The  monochrome  mode bypasses the color palette and is instead
provided
    with an inverter for inverse video controlled by bit  0  of 
palette
    register 0.

4.2.   - Video RAM/Controller/Display Interface -

Video  display memory is configured  as  logical  planes (1,  2, 
4,  or
    8) of interwoven 16-bit words  of  contiguous  memory  to 
form 
one    physical  plane  starting at any even word
boundary (in
dual-purpose
    RAM only). The size of this plane depends on the  screen 
resolution
    and  the  number  of  color planes. For  example,   for  
320x200
    resolution  and  4 color planes it is 32000 bytes.   The 
starting
    address of  display memory is loaded into the Video Base
High,
Video





SPARROW SPEC. REV A10                                       page
14

    Base Mid, or Video Base Low Registers. This   register   is  
loaded
    into   the Video  Address  Counter  (High/Mid/Low)  at the
beginning
    of each frame.   The address counter is incremented as  the  
BitMap
    planes are read.

BitMap  planes  are transferred to  the  video  chip  buffer 
16-bits or
    32-bits at a time.   The shifter then loads the video shift
register
    where one bit from  each  plane  is shifted  out  and  
collectively
    used   as  the  index (plane 0 appears first in RAM and
provides the
    least significant  bit of  each  pixel)  to  a  specific STe
or 
SP
    Palette Register.

In XGA color mode each video memory word corresponds to one pixel
with 6
    bits  color resolution for green, 5 for red and 5 for blue.
Thus, the
    video memory has to be organized differently compared to  the

other
    video  modes,  where  the  video  data is organized in color
planes.
    Here, the video memory, starting at any even word boundary, 
contains
    the  representation  of  one  pixel  in  each memory word.
Thus, for
    representing a row of 320 pixels , 320 contiguous memory
words 
are
    used,  each word contains all the information necessary to
represent
    the   color  of  one  pixel,  out  of  65536  possible 
colors.
This
    organization enables automatic pixel scrolling capability, 
just  by
    changing  the starting address of the first memory word in
the
video
    memory space (however, when in 32bit video bus mode,
scrolling
will
    be done in 2 pixel steps).

In case of Genlock and XGA the Green is reduced to only 5 bits 
(instead
    of  6) if the pixel control bit in SP shift mode register is
set, and
    the remaining bit is used as a Genlock key  to  enable 
programmable
    switching  between  external  or  internal video data on 
each
pixel.
    This switching will be done by the external Genlock hardware.

4.2.1.  - Horizontal Scrolling -

Two additional registers serve to implement a horizontal  smooth 
scroll
    capability. The  horizontal  pixel scroll register specifies
a
pixel
    offset of 0 to 15 at which to begin display. Increasing  this

value
    by  one  will  have  the  effect of scrolling the entire
display one
    pixel to the left. The  other  register  is  the  extra  line

width
    register. This  register contains a number of words that is
added to
    the ending address of each display line to get the beginning
address
    of   the  next  display  line. It  has  the  effect  of 
putting  an
    undisplayed area to the right of the video  screen. By 
varying 
the
    horizontal  pixel  scroll register and the video base
registers, the    display video screen  can  be 
used  as  a  horizontally 
scrollable
    "window"  into  that  area. As  mentioned already, in XGA
high
color
    mode the pixel scroll option is achieved  automatically,  by 
simply
    changing  the  starting address of the video memory. So, in
XGA
mode
    the pixel scroll register has to be loaded with zeroes.

Since all the video parameters  timing  of  the  HSYNC,  VSYNC, 
Display
    Enable,    Blank,   Field   SYNC,   Equalization   pulses  
etc. are
    programmable, the Sparrow can support a wide range  of 
monitors,  a





SPARROW SPEC. REV A10                                       page
15

    variety  of  TV standards as well as programmable overscan.
The
full
    interlace   capability  supported  by  the  Sparrow  enables 
higher
    resolution video displays (400 lines or more) on TV's.


The  video  use  a  19 pin  connector with the following pin
    assignments:

            1 - red
            2 - green
            3 - blue
            4 - pixel control/ mono out
            5 - ground
            6 - red return (ground)
            7 - green return (ground)
            8 - blue return (ground)
            9 - Audio in
           10 - sync return (ground)
           11 - Digital ground
           12 - composite sync
           13 - horizontal sync
           14 - vertical sync
           15 - external clock input (for GENLOCK)
           16 - EXT for GENLOCK
           17 - +12V for peritel           18 -
v1
           19 - v0

* v0 and v1 correspond to the vv bits in VMC.

The audio in case of VGA monitor will be supplied by an internal
speaker
    in the Sparrow, enabled by signals from the PSG.

In addition there is an RCA Phone Jack for TV interface with the
following
    assignment:

         core - RF modulated video
         shield - ground


5.   - Music Subsystem -

The  Sparrow  architecture  extends  the   music    subsystem 
presently
    available on the ST/MEGA computers.  The Sparrow mixes the
output of
    the  existing  ST  PSG  sound system  with  a  new DMA-driven

dual-
    channel  D-to-A subsystem (RASCAL  device).   The  Sparrow 
combines
    these  two  sources   for  simple beeps,  and can be
connected
to an
    external stereo amplifier for high-fidelity sound. In 
addition 
the
    resulting  audio  is sent  to an on-board speaker which is
controlled
    by a port on the PSG.
The   Sparrow  is  also  equipped  with  a  Musical  Instrument 
Digital
    Interface  (MIDI) which provides high speed serial
communication  of
    musical data to and  from  more  sophisticated synthesizer
devices.





SPARROW SPEC. REV A10                                       page
16

5.1.   - Programmable Sound Generator -

The ST sound system using the General  Instruments  AY-3-8910  /
Yamaha
    YM-2149   Programmable   Sound  Generator is present in the
Sparrow.
    The YM-2149 Programmable Sound Generator produces  music 
synthesis,
    sound  effects, and audio feedback. With an applied clock
input
of 2
    MHz, the PSG is capable  of providing  a  frequency  response

range
    between 30 Hz (audible) and 124 KHz (post-audible).   The 
generator
    places   minimal  amount   of   processing burden on the main
system
    (which acts as the sequencer) and has the ability to  perform

using
    three  independent voice channels.   The three sound channel
outputs
    are mixed, along  with  Audio  In,  and   sent   to   the  
external
    television   or  monitor  speaker  (the  PSG has built in
digital to
    analog converters).


5.2.   - DMA Sound -

The Sparrow also  includes  a  new  DMA-driven   sound  
subsystem 
that
    allows   the playback or synthesis of complex waveforms at a
variety
    of sampling rates. This feature  is  supported  by  the  new 
RASCAL
    device  which  is  driven  from the new DMA device  (same DMA
device
    that controls the disk DMA cycles).

5.2.1.   - Overview -

Sound in the form of digitized  samples  is  stored  in system  
memory.
    These samples are fetched from dual-purpose memory during
horizontal
    blanking  (transparent  to   the   processor)   and  provided

to
    digital-to-analog converters (DAC's) in the RASCAL device at
a
    constant sample frequency specified by the  user. The outputs
of the
    DAC's are then low pass filtered into a "walkman"
type,micro-stereo
    connector and to the on-board speaker.

Two channels are provided.    They are  intended  to  be  used  
as 
the
    left  and right channels of a stereo system when using the
raw
audio
    outputs from the machine. They  are mixed together when fed 
to 
the
    on board speaker.          A MONO mode is provided which 
will 
feed
    the   same  data   to  both  channels  simultaneously.    The

 only
    restriction placed on MONO mode is that there must be an even
number
    of samples (see data format section for details).

5.2.2.   - Data Format -

Each  sample  is  stored  as  an   eight   bit   quantity,    the

 most
    significant   bit   is  the  sign  and  the  other  seven 
bits 
are
    magnitude.   In  the  stereo scheme there is one  word  per 
sample,
    the  upper  byte contains the left channel sample and the
lower
byte
    contains the right channel  sample.   In  the MONO  scheme
bytes are
    accessed sequentially.   However, they are still fetched a
word
at a
    time.  Therefore,  there  must be an even number of samples.







SPARROW SPEC. REV A10                                       page
17


A group of samples is called a frame.   A frame may  be played 
once  or    can    automatically    be   
repeated    forever. Frames 
occupy  a
    contiguous block of memory and are specified by  their
starting 
and
    ending  addresses.   The  ending  address is the address of
the
last
    sample + 2.  An external clock is provided  to timer A of the
ST MFP
    at the end of each frame. This  can  be  used   as   an  
interrupt.
    This   pulse   is   also  exclusive   OR'ed   with   the 
monochrome
    monitor detect bit, whose transition can generate  an 
interrupt  on
    bit 7 of  the MFP-ST  General  Purpose  I/O  Port.    Frames 
may be
    linked  together by defining a new frame while the current
frame  is
    being  played.   The  new frame will begin at the end of the
current
    frame.


5.2.3.   - MICROWIRE Interface -

The  MICROWIRE  interface  provided  to  talk  to  the RASCAL's
software
    controlled Volume / Tone Control  is  a  general  purpose 
MICROWIRE
    interface to allow the future addition  of  other MICROWIRE
devices.
    For this reason, the following description of its use will 
make  no
    assumptions about the device being addressed.

The  MICROWIRE  bus  is  a  three  wire  serial  connection and
protocol
    designed to allow multiple devices to be individually 
addressed  by
    the  controller.   The  length of the  serial data stream
depends on
    the destination device.    In general, the stream consists of
N bits
    of address, followed  by  zero or  more  don't  care bits, 
followed
    by  M bits of data.   The hardware interface which has been
provided
    consists  of  two 16  bit  read/write registers.   One data
register
    which contains the actual bit stream to  be  shifted  out 
and 
 one    mask register which indicates which bits
are valid.

Let's  consider  a  mythical  device  which  requires  two
address 
bits
    and one data bit.    For this device the total bit stream  is

three
    bits  (minimum).    Any   contiguous   three bits  of  the 
register
    pair may be used.    However,  since the most   significant 
bit  is
    shifted   first,    the   command will  be  received  by  the
device
    soonest if the three most significant bits are used.   Let's
assume:
    01 is the device's address,  D  is  the  data  to  be 
written, 
and
    X's  are  don't  cares.    Then  all  of  the   following  
register
    combinations will provide the same information to the device.

                1110 0000 0000 0000  Mask
                01DX XXXX XXXX XXXX  Data

                0000 0000 0000 0111  Mask
                XXXX XXXX XXXX X01D  Data

                0000 0001 1100 0000  Mask
                XXXX XXX0 1DXX XXXX  Data







SPARROW SPEC. REV A10                                       page
18


                0000 1111 1111 0000  Mask
                XXXX 01XX XXXD 0000  Data

                1111 1111 1111 1111  Mask
                01XX XXXX XXXX XXXD  Data


The  mask  register  needs  to  be  written  before  the  data
register.
    Sending commences when  the  data  register  is  written  and

takes    approximately  16uS.   Subsequent 
writes  to   the  data 
and 
mask
    registers are blocked  until  sending  is  complete.   
Reading 
the
    registers while sending is in  progress will  return  a 
snapshot of
    the shift register shifting the data and mask out.   This
means
that
    you  know it is safe to send  the  next command when these
registers
    (or either one) return to their original state.   Note that
the
mask
    register   does  not  need to be rewritten if it is already
correct.
    That is, when sending a series of commands the  mask 
register 
only
    needs to be written once.


5.2.4.   - Volume and Tone Control -

The  RASCAL is used to provide volume, tone, and mixing control. 

 This
    part is talked to using the MICROWIRE interface.   The device
has  a
    two bit address  field,   address  = 10,  and a nine bit data
field.
    There is no way of reading the current settings.

The  input selector is used to enable and disable mixing the 
output  of
    the GI PSG with the DMA sound.   After reset, the input is
grounded,
    and  should  be  switched  to  either states    1    or   2  
during
    initialization  to  avoid  level mismatches during later
switching.

                Data Field

                011 DDD DDD  Set Master Volume
                    ||| |||
                    000 000  -80 dB
                    010 100  -40 dB
                    101 XXX    0 dB

                101 XDD DDD  Set Left Channel Volume
                     || |||                    
00 000  -40 dB
                     01 010  -20 dB
                     10 1XX    0 dB












SPARROW SPEC. REV A10                                       page
19

                100 XDD DDD  Set Right Channel Volume
                     || |||
                     00 000  -40 dB
                     01 010  -20 dB
                     10 1XX    0 dB

                010 XXD DDD  Set Treble
                      | |||
                      0 000  -12 dB
                      0 110    0 dB (Flat)
                      1 100  +12 dB

                001 XXD DDD  Set Bass
                      | |||
                      0 000  -12 dB
                      0 110    0 dB (Flat)
                      1 100  +12 dB

                000 000 0ss  GI PSG Sound Enable
                         ||
                         00  disabled, unbiased
                              (reset state)
                         01  enabled
                         10  disabled, biased

            Note:  The volume controls attenuate in  2  dB 
steps. 
 The
            tone controls attenuate in 2 dB steps at 50 Hz and 15
kHz.


5.3.   - Musical Instrument Digital Interface (MIDI) -

The  MIDI  allows  the  integration  of  the  Sparrow series 
withmusic
    synthesizers,  sequencers, drum boxes, and other devices 
possessing
    MIDI  interfaces.   High speed  (31.25  Kbaud) serial 
communication
    of keyboard and program information is provided by two 
ports, 
MIDI
    OUT and MIDI IN  (the  MIDI  OUT also includes MIDI THRU
data).

The  MIDI  communicates through the MC6850  Asynchronous 
Communications
    Interface Adapter (ACIA) to the system bus.   The data
transfer
rate
    is a constant 31.25 Kbaud of 8-bit  asynchronous data.

The MIDI OUT/THRU uses a  circular  DIN  5  pin  S  connector 
with 
the
    following pin assignment:

        1 - thru transmit data
        2 - shield ground
        3 - thru loop return
        4 - out transmit data
        5 - out loop return









SPARROW SPEC. REV A10                                       page
20


The MIDI IN uses a circular DIN 5 pin S connector with the
following pin
    assignment:

        4 - in receive data
        5 - in loop return




 6.     - Memory, I/O, & Interrupt Map  -

            address         size            use
            000000-000007   W               ROM (image of first 8
bytes of
                                            main ROM, supervisor
mode, read
                                            only)

            000008-DFFFFF   DW              "dual-purpose" RAM
                                            (memory in the range
000008-
                                             0007FF is only
accessible in
                                             supervisor mode)

            E00000-EFFFFF   W               Main ROM

            F00000-F0003F   W               IDE (Inernal Hard
Disk)

            F00010-F9FFFF   -               <reserved>

            FA0000-FBFFFF   W               Cartridge ROM

            FC0000-FF7FFF   -               <reserved>

            FF8000-FFFFFF   W               SP & ST I/O Space



              SP/ST I/O MAP   (Offset within SP image FF8000)

             - Offset -               - Use -

            8000-8001          Memory Controller
            8002-8005          <reserved>
            8006-8007          Configuration Switches
            8008-81FF          <reserved>
            8200-82C3          SP Video Subsystem
            82C4-85FF          <reserved>
            8600-860F          SP DMA and FDC
            8610-87FF          <reserved>
            8800-8803          SP Sound Chip
            8804-88FF          <reserved>
            8900-8925          DMA Sound Control
            8926-895F          <reserved>
            8960-8963          RTC
            8964-89FF          <reserved>




SPARROW SPEC. REV A10                                       page
21

            8A00-8A3F          BLiTTER
            8A40-8C7F          <reserved>
            8C80-8C87          SCC
            8C88-91FF          <reserved>
            9200-9201          Configuration Switches + Fire
Buttons
            9202-9203          Joystick ports
            9204-920F          <reserved>
            9210-9217          Paddle
            9218-921F          <reserved>
            9220-9222          Light Gun/Pen
            9223-97FF          <reserved>
            9800-9BFF          SP Pallete
            9C00-F9FF          <reserved>
            FA00-FA2F          MFP-SP
            FA30-FA3F          <reserved>
            FA40-FA5F          Floating Point Co-Proc.
            FA60-FBFF          <reserved>
            FC00-FC03          IKBD Interface
            FC04-FC07          MIDI ACIA
            FC08-FFFF          <reserved>


               - LOCAL I/O DEVICES  -

             - MEMORY CONTROLLER & GENERAL CONTROL -

            8001  RW    Memory Configuration

                        B3-B0 Memory control

                        (Dummy register, has no effect)

            8006   R    vvmm rrbf  Configuration Switches

                                f -  0 - 0 wait state DRAMs
                                     1 - 1 wait state DRAMs
                                b -  0 - 16 bits video bus
                                     1 - 32 bit video bus
                               rr -  00 - 0 wait state ROMs
                                     01 - 1 wait state ROMs
                                     10 - 2 wait state ROMs
                                     11 - reserved
                               mm -  00 - 256K type DRAMs
                                     01 - 1M type DRAMs
                                     10 - 4M type DRAMs
                                     11 - <reserved>
                               vv -  00 - ST monochrome monitor
                                     01 - ST color
                                     10 - VGA monitor
                                     11 - TV

                              **  vv are supplied by
videoconnector





SPARROW SPEC. REV A10                                       page
22


            8007   RW   dvim bs_c   CPU Clock Select and misc
controls

                          c - 0 - 8 Mhz
                              1 - 16 Mhz
                          s - 0 - Blitter clock 8Mhz
                              1 - Blitter clock CPUCLK
                          b - 0 - Blitter Enabled
                              1 - Blitter Disabled
                          m - 0 - MCUG Enabled
                              1 - MCUG Disabled (only if COMBO
TEST
pin HI)
                          i - 0 - ADDR BUS ERROR Disabled
(default)
                              1 - ADDR BUS ERROR Enabled
                          v - PWF (Powerfail) - Reset by POR only
                          d - 0 - Bus Error timeout = 16us
                              1 - Bus Error timeout = 32us

                          * After power up this register is
cleared
to 0's.

             - SP/ST VIDEO SUBSYSTEM -

            8200   RW   ---- ----  xxxx xxxx   Video Base High
            8202   RW   ---- ----  xxxx xxxx   Video Base Mid
            8204   RW   ---- ----  xxxx xxxx   Video Address
Counter High
            8206   RW   ---- ----  xxxx xxxx   Video Address
Counter Mid
            8208   RW   ---- ----  xxxx xxx0   Video Address
Counter Low
            820A   RW   ---- --ts              SP  Sync Mode
                                               t : 0 - # of equal
pulses set
for NTSC
                                                   1 - # of equal
pulses set
for PAL
                                               s : 0 - INT  1 -
EXT
                                                   (Genlock
32MHzclock)
            820B   WO              0000 0000   <reserved>
            820C   RW   ---- ----  xxxx xxx0   Video Base Low
            820E   RW   ---- ---x  xxxx xxxx   Horz. offset
            8210   RW   ---- --xx  xxxx xxxx   Displayed Line
Width
Register

            8212 - 823F                        <reserved>

            8240   RW   ---- Rrrr  Gggg Bbbb    STE  Color
Palette
Reg0
                                               (bit0 is mono inv)

            8242   RW   ---- Rrrr  Gggg Bbbb    STE  Color
Palette
Reg1
            ...                                 ....
            ...                                 ....
            825E   RW   ---- Rrrr  Gggg Bbbb    STE  Color
Palette
Reg15

            8260   RW   ---- --ss  ---- ----    ST  Shift Mode:
                                               00 320x200, 4
plane
                                               01 640x200, 2
plane
                                               10 640x400, 1
plane
                                               11 <reserved>





SPARROW SPEC. REV A10                                       page
23



            8264   RW   ---- ----  0000 xxxx   Horizontal Pixel
Scroll

            8266   RW   ---- -oct  Rhvm bbbb   SP  Shift Mode:
                                               t - 1 XGA  Color
                                               h - 0 - internal
hsync
                                                   1 - external
hsync
                                               v - 0 - internal
vsync
                                                   1 -
externalvsync
                                               m - bits/pixel 0-4
bits/pxl
                                                              1-8
nits/pxl
                                               c - Pixel control
in
XGA
                                               bbbb : SP palette
bank
                                               o - Mono VGA
monitor
                                               R - RAM access
inhibit during
                                               video display

            826A - 827F                        <reserved>

            8280   R    ---- ---x  xxxx xxxx   Horizontal Counter
(HC)
            8282   RW   ---- ---x  xxxx xxxx   Horz. Half line
total (HHT)
            8284   RW   ---- ---x  xxxx xxxx   Horz. Blank Begin
(HBB)
            8286   RW   ---- ---x  xxxx xxxx   Horz. Blank End  
(HBE)
            8288   RW   ---- --hx  xxxx xxxx   Horz. Display
Begin
(HDB)
                                                     h=0 - VREQ
occurs
                                                     after Hsync
rise.
                                                     h=1 - VREQ
occurs
                                                     before Hsync
rise.
            828A   RW   ---- ---x  xxxx xxxx   Horz. Display End
(HDE)
            828C   RW   ---- ---x  xxxx xxxx   Horz. Sync Start
(HSS)
            828E   RW   ---- ---x  xxxx xxxx   Horz. Field Sync
End
(HFS)
            8290   RW   ---- ---x  xxxx xxxx   Horz. Equalization
End (HEE)

            8292 - 829F                        <reserved>

            82A0   R    ---- -xxx  xxxx xxxx   Vertical Counter
(VC)
            82A2   RW   ---- -xxx  xxxx xxxx   Vertical Field
Total
(VFT)            82A4   RW   ---- -xxx  xxxx xxxx 
 Vert. Blank Begin 
(VBB)
            82A6   RW   ---- -xxx  xxxx xxxx   Vert. Blank End   
(VBE)
            82A8   RW   ---- -xxx  xxxx xxxx   Vert. Display
Begin
(VDBO)
            82AA   RW   ---- -xxx  xxxx xxxx   Vert. Display End 

(VDEO)
            82AC   RW   ---- -xxx  xxxx xxxx   Vert. Sync Begin 
(VSS)

            * LSB of VFT determines if interlace is on. 0 - 0n ,
1
- off.

            82AE - 82BF                        <reserved>











SPARROW SPEC. REV A8                                       page
24


            82C0   RW   ---- ---o  bhvc esvv   Video Master
Control
                                |  |||| ||||_ 00 - ST monochrome
monitor
                                |  |||| |||__ 01 - ST color
                                |  |||| ||    10 - VGA monitor
                                |  |||| ||    11 - TV
                                |  |||| ||
                                |  |||| ||___ 0 - Primary clock
normally 32MHz
                                |  |||| |     1 - Secondary clock
normally
                                25MHz
                                |  |||| |
                                |  |||| |
                                |  |||| | ____ 0 - equalization
pulses on
                                |  ||||        1 - equalization
pulses off
                                |  ||||________0 -
Csync=Hsync*Vsync                               
|  |||         1 -
Csync=/(Hsync*Vsync)
                                |  |||_________0 - Vsync=Vs
                                |  ||          1 - Vsync=/(Vs)
                                |  ||__________0 - Hsync=Hs
                                |  |           1 - Hsync=/(Hs)
                                |  |
                                |  |__________ 0 - 16 bit video
bus
                                |              1 - 32 bit video
bus
                                |
                                |_____________ 0 - 4us Burst Time
                                               1 - 2us    - " -

            82C2   RW   ---- ----  ---- mmir   Video timing
control 
(VC0)
                                        ||||___1 - Repeat Lines
once
                                        |||    0 - Do not repeat
                                        |||____1 - Skip lines
Mode
on
                                        ||     0 - Skip lines
Mode
off
                                        ||_____00 - 8MHz Dotclk
                                        |______01 - 16/12.5MHz
Dotclk
                                               10 - 32/25MHz
Dotclk

            * In STe mode, writing into ST shift mode register
after writing
into the VMC will update the VTC.



            9800   RW   rrrr rr--  gggg gg--   SP  Color Pallete
Reg 0
            9802   RW   ---- ----  bbbb bb--   SP  Color Pallete
Reg 0
             ...             ...        ...              ...
            9BFC   RW   rrrr rr--  gggg gg--   SP  Color Pallete
Reg 255
            9BFE   RW   ---- ----  bbbb bb--   SP  Color Pallete
Reg 255











SPARROW SPEC. REV A10                                       page
25


             - ST  DMA -

            8600                               <reserved>
            8602                               <reserved>
            8604   RW   ---- ----  xxxx xxxx   Disk Data Path
(WDC)
            8606   RO   ---- ----  ---- -esd   DMA Status
                                              e - Error Status
                                              s - Sector Count
Zero
Status
                                              d - Data Request
Intact Status


            8606   WO   ---- ---x  xx0x xxx-   DMA Mode Control
(WDL)
                                |  |||| |||_   A0
                                |  |||| ||__   A1
                                |  |||| |___   HDC/_FDC Register
Select
                                |  ||||_____   Sector Count
Register Select
                                |  |||______   Reserved
                                |  ||_______   Disable/_Enable
DMA
                                |  |________   FDC/_HDC
                                |___________   Write/_Read
            8608   RW   ---- ----  xxxx xxxx   DMA Pointer High
            860A   RW   ---- ----  xxxx xxxx   DMA Pointer Mid
            860C   RW   ---- ----  xxxx xxx0   DMA Pointer Low

            860E   RW   ---- ----  0000 00dc   Floppy Density
Select
                                                d - FDDS (output)
pin
                                                    0 - low
(reset)
                                                    1 - high
                                                c - FCCLK pin
                                                    0 - 8Mhz
(reset)
                                                    1 - 16Mhz


             - PROGRAMMABLE SOUND GENERATOR -

            (also provides bi-directional parallel printer port
and
mis-
            cellaneous output latch)

            8800   RO   xxxx xxxx  ---- ----   PSG Read Data
                                               I/O Port B -
Parallel I/F D

            8800   WO   0000 xxxx  ---- ----   PSG Register
Select
                                            0000 - Channel A Fine
Tune
                                            0001 - Channel A
Coarse
Tune
                                            0010 - Channel B Fine
Tune
                                            0011 - Channel B
Coarse
Tune
                                            0100 - Channel C Fine
Tune
                                            0101 - Channel C
Coarse
Tune
                                            0110 - Noise
Generator
Control







SPARROW SPEC. REV A10                                       page
26


                                            01110- Mixer Control-
I/O enable
                                            1000 - Channel A
Amplitude
                                            1001 - Channel B
Amplitude
                                            1010 - Channel C
Amplitude
                                            1011 - Envelope
PeriodFine Tune
                                            1100 - Envelope
period
Coarse Tune
                                            1101 - I/O PORT A
(Output only)
                                            1111 - I/O PORT B

            8802   WO   xxxx xxxx  ---- ----   PSG Write Data
                        |||| ||||            I/O PORT A
                        |||| ||||___________   Floppy
Side0/_Side1
Select
                        |||| |||____________   Floppy _Drive 0
select
                        |||| ||_____________   Floppy _Drive 1
select
                        |||| |______________   RS232 Request To
Send
                        ||||________________   RS232 Data
Terminal
Ready
                        |||_________________   Centronix _Strobe
                        ||__________________   General Purpose
Output
                        |___________________   reserved
                                             I/O PORT B -
Parallel
I/F Data


             - DMA SOUND SUBSYSTEM -

            8900   RW   ---- ----  0000 00re   Sound DMA Control
                                               r - Repeat
                                                 0 = Single Frame
                                                 1 = Repeat
                                               e - Enable
                                                 0 = Off (reset
state)
                                                 1 = On

            8902   RW   ---- ----  xxxx xxxx   Frame Base Address
(high)
            8904   RW   ---- ----  xxxx xxxx   Frame Base Address
(med)
            8906   RW   ---- ----  xxxx xxxx   Frame Base Address
(low)
            8908   RW   ---- ----  xxxx xxxx   Frame Address
Counter (high)
            890A   RW   ---- ----  xxxx xxxx   Frame Address
Counter (med)
            890C   RW   ---- ----  xxxx xxxx   Frame Address
Counter (low)
            890E   RW   ---- ----  xxxx xxxx   Frame End Address
(high)
            8910   RW   ---- ----  xxxx xxxx   Frame End Address
(med)
            8912   RW   ---- ----  xxxx xxxx   Frame End Address
(low)

            8920   RW   0000 0000  a000 00bb   Sound Mode Control
                                               a - Mode
                                                   0 = Stereo
(reset state)
                                                   1 = Mono
                                               bb - Sample Rate
                                                   00 =  6258 Hz
                                                   01 = 12517 Hz
                                                   10 = 25033 Hz
                                                   11 = 50066 Hz





SPARROW SPEC. REV A10                                       page
27


            8922   RW   xxxx xxxx  xxxx xxxx   MICROWIRE Data
register
            8924   RW   xxxx xxxx  xxxx xxxx   MICROWIRE Mask
register


             -   REAL TIME CLOCK  -

            8960   RW   xxxx xxxx  ---- ----  Real Time Clock
Addr
Register
            8962   RW   xxxx xxxx  ---- ----  Real Time Clock
Data
Register


             - BLiTTER -

            8A00    W   xxxx xxxx  xxxx xxxx   Halftone Ram Start
            ...         ...  ...   ...  ...           ...
            8A1E    W   xxxx xxxx  xxxx xxxx   Halftone Ram End
            8A20    W   xxxx xxxx  xxxx xxx-   Source X
Increments
            8A22    W   xxxx xxxx  xxxx xxx-   Source Y
Increments
            8A24    W   ---- ----  xxxx xxxx   Source Address
High            8A26    W   xxxx xxxx  xxxx xxx- 
 Source Address Low
            8A28    W   xxxx xxxx  xxxx xxxx   Endmask 1
            8A2A    W   xxxx xxxx  xxxx xxxx   Endmask 2
            8A2C    W   xxxx xxxx  xxxx xxxx   Endmask 3
            8A2E    W   xxxx xxxx  xxxx xxx-   Destination X
Increments
            8A30    W   xxxx xxxx  xxxx xxx-   Destination Y
Increments
            8A32    W   ---- ----  xxxx xxxx   Destination
address
High
            8A34    W   xxxx xxxx  xxxx xxx-   Destination
address
Low
            8A36    W   xxxx xxxx  xxxx xxxx   X Count
            8A38    W   xxxx xxxx  xxxx xxxx   Y Count
            8A3A    W   ---- --oo  xxxx hhhh   oo - OP  , hhhh -
HOP

            8A3C    W   bhs- llll  fn-- kkkk   b    - BUSY
                                               h    - HOG
                                               s    - SMUDGE
                                               llll - LINE NUMBER
                                               f    - FXSR
                                               n    - NFSR
                                               kkkk - SKEW

             - SCC -

            8C80   RW   ---- ----  xxxx xxxx  SCC A Control
            8C82   RW   ---- ----  xxxx xxxx  SCC A Data
            8C84   RW   ---- ----  xxxx xxxx  SCC B Control
            8C86   RW   ---- ----  xxxx xxxx  SCC B Data













SPARROW SPEC. REV A10                                       page
28


             - JOYSTICK -   - AND CONFIGURATION SWITCH CONTROL -

            9200    R   dfq- ---- ---- 3120   d  0 - No sound DMA
                                                  1 - Sound
DMA                                              
f  0 - High speed
floppy
                                                  1 - Low speed
Floppy
                                               q  0 - Quad
density
floppy
                                                  1 - not Quad
density floppy


                                             3210 - Fire Buttons



            9202    R   udlr udlr udlr udlr   u - UP   , d - DOWN
                        JOY0 JOY1 JOY2 JOY3   l - LEFT , r -
RIGHT
                                              JOY0,JOY2 - RW

             - PADDLE -

            9210    R   ---- ---- xxxx xxxx   X Paddle 0
            9212    R   ---- ---- xxxx xxxx   Y Paddle 0
            9214    R   ---- ---- xxxx xxxx   X Paddle 1
            9216    R   ---- ---- xxxx xxxx   Y Paddle 1

             - LIGHT GUN/PEN -

            9220    R   ---- --xx xxxx xxxx   X Position
            9222    R   ---- --xx xxxx xxxx   Y Position


             - MFP-SP -  (ST compatible)

            FA00    RW   ---- ---- xxxx xxxx   General purpose
I/O 
-GPIP
            FA02    RW   ---- ---- xxxx xxxx   Active Edge       

 -AER
            FA04    RW   ---- ---- xxxx xxxx   Data Direction    

 -DDR
            FA06    RW   ---- ---- xxxx xxxx   Interupt Enable A 

 -IERA
            FA08    RW   ---- ---- xxxx xxxx   Interupt Enable B 

 -IERB
            FA0A    RW   ---- ---- xxxx xxxx   Interupt Pending A

 -IPRA
            FA0C    RW   ---- ---- xxxx xxxx   Interupt Pending
B
 -IPRB
            FA0E    RW   ---- ---- xxxx xxxx   Interupt in
service
A - ISRA
            FA10    RW   ---- ---- xxxx xxxx   Interupt in
service
B - ISRB
            FA12    RW   ---- ---- xxxx xxxx   Interupt Mask A   

  - IMRA
            FA14    RW   ---- ---- xxxx xxxx   Interupt Mask B   

  - IMRB
            FA16    RW   ---- ---- xxxx xxxx   Vector            

  - VR
            FA18    RW   ---- ---- xxxx xxxx   Timer A Control   

  - TACR
            FA1A    RW   ---- ---- xxxx xxxx   Timer B Control   

  - TBCR










SPARROW SPEC. REV A10                                       page
29


FA1C    RW   ---- ---- xxxx xxxx   Timers C,D Control    - TCDCR
            FA1E    RW   ---- ---- xxxx xxxx   Timer A Data      

  - TADR
            FA20    RW   ---- ---- xxxx xxxx   Timer B Data      

  - TBDR
            FA22    RW   ---- ---- xxxx xxxx   Timer C Data      

  - TCDR
            FA24    RW   ---- ---- xxxx xxxx   Timer D Data      

  - TDDR
            FA26    RW   ---- ---- xxxx xxxx   Sync Character    

  - SCR
            FA28    RW   ---- ---- xxxx xxxx   Usart Control    

  - UCR
            FA2A    RW   ---- ---- xxxx xxxx   Receiver Status   

  - RSR
            FA2C    RW   ---- ---- xxxx xxxx   Transmitter Status

  - TSR
            FA2E    RW   ---- ---- xxxx xxxx   USART Data        

  - UDR

            - ikbd ACIA -

            FC00    RW   xxxx xxxx ---- ----   Keyboard ACIA
Control
            FC02    RW   xxxx xxxx ---- ----   Keyboard ACIA Data

            - MIDI ACIA -

            FC04    RW   xxxx xxxx ---- ----   MIDI ACIA Contorl
            FC06    RW   xxxx xxxx ---- ----   MIDI ACIA Data
























































































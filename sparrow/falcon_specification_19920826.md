# Section 1   INTRODUCTION

FALCON is the base design of a series of Atari computers
extending the TOS compatible product line which began with the
ST. FALCON provides enhanced video, graphics, and sound as well
as greater bus bandwidth and operating speeds.

The FALCON architecture accepts 32-bit Motorola MC68030 or
MC68040 family processors at clock speeds up to 33 MHz. Both
processor families feature on-chip data and instruction caches
which can be filled in bursts of 32 bit data fetches. The MC68040
also includes an internal floating point coprocessor. MC68030
based designs may include an external MC68882 floating point
coprocessor.

The architecture also includes VMEbus to facilitate
expansion. The system supports revision (C.1) of the VMEbus
specification.

A FALCON will contain an on-board moderate speed LAN port
and an IO expansion port with DMA capability. Additionally, each
FALCON will provide one or two RS-232C serial ports.

Some highlights of the FALCON architecture:

- Motorola MC68030 or MC68040 up to 33 MHz

- Motorola MC68882 Floating Point Coprocessor (68030 only) at the CPU speed

- Two banks of dual-purpose (video/system) RAM, each bank 
    consisting of 0.5, 2, or 8 megabytes, allowing up to 15 Mb
    (this memory appears 64-bits wide to the video logic and
    32-bits wide to the system bus)

- Up to 32 Mb of fast expansion RAM

- 512Kb of 32 bit wide ROM 

- Video modes that are a superset of those in the Atari ST and
    TT series-- Color: 320x200x16, 320x480x256, 640x200x4,
    640x480x16  DuoChrome: 640x400x2.  Monochrome: 1280x960x1

- New programmable video modes XxYxN where N can be 1,2,4,8 or
    24 bits/pixel (ST and TT compatible modes are planar bit
    mapped while new modes are packed pixel)

- Programmable video timing to allow complete software control
    over sync rates and screen widths

- True broadcast (NTSC/PAL/SECAM) timing, true VGA, and higher
    resolution capability

- Powerful graphics coprocessor

- On board DSP, 16 bit stereo DAC, and 16 bit stereo ADC with
    a versitile interconnect matrix

- External connection for digital audio devices with standard
    serial data interface

- Parallel I/O port

- Internal audio amp and speaker

- Two asynchronous serial I/O ports (up to 19.2 Kbaud)

- High-speed SDLC serial modem and LAN ports (interface
    through a proprietary DMA channel)

- Real time clock (RTC) with 50 bytes of non-volatile RAM

- ST/MEGA compatible intelligent keyboard, with mouse and
    joystick ports

- Floppy disk controller and interface on a proprietary DMA
    channel (double, high, and quad density)

- Musical Instrument Digital Interface (MIDI)

- Atari ST compatible cartridge port (128 Kb storage)

- SCSI interface on a proprietary DMA channel

- Expansion IO port with DMA

- Provision for a multi-slot VME bus (full multi-master VME
    with the address space divided into A32/D32, A24/D16, and
    A16/D16 areas) [not included on all models]

# Section 2   MAIN SYSTEM

The FALCON architecture is designed to be a high performance
computing platform. By including the VMEbus and facilities for
multi-processing the system can be expanded for future needs.

## 2.1 Processor and MMU

FALCON accepts the Motorola MC68030 or MC68040 32-bit
microprocessor. Each processor contains a paged memory management
unit, and independent instruction and data caches. The 68030 and
68040 are complex instruction set computers (CISCs) that extend
the 68000 instruction set and enhance the addressing modes. The
processor can operate at clock speeds up to 33 MHz.

Both processors contain internal memory management units.
Refer to the respective user manual for a complete description.

The on-chip instruction and data caches maximize processor
throughput while reducing the bus bandwidth necessary to fuel the
processor.

## 2.2 Floating Point Coprocessor

FALCON designs using MC68030 processors may include an
external MC68882 floating point coprocessor. The MC68040 contains
an internal FPU and does not support the coprocessor interface..

The floating point operations are performed in accordance
with IEEE Standard 754, with both 32-bit (single) and 64-bit
(double) precision external access.

The external floating point coprocessor in FALCON designs
using the MC68030 is run at the same clock speed as the main
processor. It appears as the "standard" floating point
coprocessor ID of 01h in the 68030 CPU address space.

## 2.3 System Read only Memory (ROM)

The system includes 32 bit wide ROM providing up to 512Kb of
ROM space. ROM cycle time is software selectable allowing use of
ROMs with access times of 300ns to 100ns.

An image of the first eight bytes of ROM appears at
0x00000000-0x00000007 accessible only in supervisor mode for
system reset. Attempts to read from this area in user mode or any
write results in a bus error. A VMEbus master would have to do
privileged accesses to read the ROM at these locations. The full
ROM begins at memory location FFE00000h.

Among the tasks this ROM must perform are system
initialization, power-on diagnostics, and operating system boot. 

## 2.4 System Random Access Memory (RAM)

The basic system must include one bank (0.5, 2, or 8 Mb) of
dual-purpose RAM used for both video and system memory.
Dual-purpose or video memory uses fast page mode DRAMs. Fast page
mode is used to support both video refresh and system burst
accesses. When video refresh is in progress, none of the
dual-purpose RAM is available for the system so system
performance can vary with the video mode selected. The video
modes have different refresh bandwidth requirements. In general,
the greater the video resolution and the more colors available,
the greater the required refresh bandwidth. The effect of video
on system performance will depend on the specific application.
Code which avoids dual-purpose RAM or maintains a high cache hit
rate will show less effect.

The memory control unit (MCU) supports two banks of
dual-purpose RAM. Each bank can be 64Kbit, 256Kbit, or 1Mbit deep
depending on the type DRAMs used. Each bank is 64 bits wide and
all 64 bits must be installed. Either of the banks can support
any of the three sizes of DRAMs. The following combinations are
therefore possible:

#### Table 2.1 (Video RAM Configuration)

Memory Depth: Bank 0| Bank 1 | Total RAM
--------------------|--------|-----------
64Kb                | none   | 512Kb
none                | 64Kb   | 512Kb
64Kb                | 64Kb   | 512Kb+512Kb
256Kb               | none   | 2Mb
none                | 256Kb  | 2Mb
256Kb               | 64Kb   | 2Mb+512Kb
64Kb                | 256Kb  | 512Kb+2Mb
256Kb               | 256Kb  | 2Mb+2Mb
1Mb                 | none   | 8Mb
none                | 1Mb    | 8Mb
1Mb                 | 64Kb   | 8Mb+512Kb
64Kb                | 1Mb    | 512Kb+8Mb
1Mb                 | 256Kb  | 8Mb+2Mb
256Kb               | 1Mb    | 2Mb+8Mb
1Mb                 | 1Mb    | 8Mb+7Mb (1)

(1) Note that IO space occupies the upper 1Mb of the 16Mb address
space RAM would occupy so that 15Mb is the maximum amount of
dual-purpose RAM possible. The upper 1Mb of 16Mb RAM cannot be
used. Also note that in the high ST image (FF000000h-FFFFFFFFh),
ROM will occupy an additional 1Mb limiting RAM in that image to
14Mb (see memory map).

Optional RAM modules allow additional single purpose
expansion RAM. By eliminating the video timing constraints on
this RAM, the memory appears faster, on average, to the
processor. A maximum of 64 Mb total expansion RAM has been
defined but signal loading limits this RAM to two banks or a
practical limit of 32 MB (using 4Mb deep parts). The
single-purpose memory system will support FBUS line transfers but
not FBUS wide mode.

Additional memory can be installed in the system by plugging
in VME memory cards (in systems so equipped). If A32/D32 cards
are used, the VME RAM can be contiguous with single purpose
expansion RAM. The VME RAM cards will appear slower than the
expansion RAM as all VME accesses incur extra wait states per bus
cycle and do not support line transfers.

There is no provision for parity or ECC protection on the
RAM. The reliability of current DRAM technology makes this
unnecessary. However, such features could be included in VME
cards.

RAM on the system board is accessible from the VMEbus as
bytes, words, or double words.

The first 800h bytes (2Kb) of RAM (00000008h-000007FFh, and
FF000000h-FF0007FFh) are accessible only in supervisor mode.
Attempts to read or write to this area in user mode results in a
bus error. VMEbus masters must do privileged accesses to use this
RAM.

### 2.4.1   Memory Control and Configuration Registers

#### 2.4.1.1 Main Configuration Register

##### Address xxFF8001:

    D7 - ROM cycle time

        0 = slow
        1 = fast

ROM Access Time | System Clock Frequency: 25Mhz | 33Mhz | 40Mhz | 50Mhz
----------------|-------|-------|-------|------
300ns           | slow  | na    | na    | na
250ns           | slow  | slow  | na    | na
200ns           | slow  | slow  | slow  | na
150ns           | fast  | slow  | slow  | slow
120ns           | fast  | fast  | slow  | slow
100ns           | fast  | fast  | slow  | slow

    D6 - Video Memory DRAM Access Speed

        0 = slow
        1 = fast

DRAM Access Time | System Clock Frequency: 25Mhz | 33Mhz | 40Mhz | 50Mhz
-----------------|------|------|--------|-------
100ns            | fast | slow | slow   | na
80ns             | fast | fast | slow   | slow
70ns             | fast | fast | fast   | slow
60ns             | fast | fast | fast   | fast

    D5 - Fast Memory DRAM Access Speed

        0 = slow
        1 = fast

DRAM Access Time | System Clock Frequency: 25Mhz | 33Mhz | 40Mhz | 50Mhz
-----------------|------|------|--------|--------
100ns            | fast | slow | slow   | na
80ns             | fast | fast | slow   | slow
70ns             | fast | fast | fast   | slow
60ns             | fast | fast | fast   | fast

    D4 - Bus timeout interval

        1 - 128 bus clock cycles
        0 - 8192 bus clock cycles

    D3   Not used (reserved read/write bit)

    D2   Not used (reserved read/write bit)

    D1 - Fast memory burst enable

        1 - on
        0 - off

    D0 - Video memory burst enable

        1 - on
        0 - off

#### 2.4.1.2 Refresh Control Registers

The MCU defaults to a 15.5 us maximum refresh interval after
a reset. This corresponds to the most common refresh rate for
currently available DRAMs, e.g. 512 row/8 ms for 256k deep parts,
and 1024 row/16 ms for 1M deep parts. Refresh cycles can then be
customized under software control. When the counter is enabled
with a time constant of zero, refresh is turned off. There are
seperate registers for video and fast memory.

The fixed clock to the refresh control counter runs at 2
MHz. The default refresh interval corresponds to a value of 001Dh
loaded into the counter. The minimum value of 1 in the counter
provides a refresh interval of 1500ns. The maximum value of 7FFFh
provides a refresh interval of 16.384 ms.


##### Address = xxFF8003 (video), xxFF800D (fast):

    D7 - Refresh Interval Control

        0 = Default Interval
        1 = Counter

    D6 - D0   Refresh Time Constant Bits 14-8

##### Address = xxFF8005 (video), xxFF800F (fast):

    D7 - D0   Refresh Time Constant Bits 7-0

#### 2.4.1.3 External Cache Control Register

##### Address = xxFF8007:

    D7 - Reset Cache Tag SRAM

        1 = Cache enabled
        0 = Reset cache

    D6 - D4   Not used (always reads 0)

    D3 - VME area cachable

        1 = yes
        0 = no

    D2 - Cache freeze

        1 = cache frozen
        0 = normal

    D1 - Capture Data Cache Push Access

        1 = yes
        0 = no

    D0 - Clear Cache on Change of Bus Master

        1 = no
        0 = yes

#### 2.4.1.4 Video Memory Configuration Register

##### Address = xxFF8009:

    D7 - D4   SIMM Speed Select bits (read only)

SIMM Speed Select | DRAM access time
------------------|-----------------
0001              | 80ns
0101              | 70ns
1101              | 100ns

Other select bit patterns are not currently defined.

    D3 - D2   Bank 1 Size Select

    D1 - D0   Bank 0 Size Select

Size Select Bits | Bank Size (DRAM Depth)
-----------------|-----------------------
00               | not installed
01               | 512Kb (64K)
10               | 2Mb (256K)
11               | 8Mb (1M)

#### 2.4.1.5 Expansion (fast) Memory Configuration Register

##### Address = xxFF800B:

    D7 - D4   SIMM Speed Select bits (read only)

SIMM Speed Select | DRAM access time
------------------|-----------------
0001              | 80ns
0101              | 70ns
1101              | 100ns

Other select bit patterns are not currently defined.

    D3 - D2   Bank 1 Size Select

    D1 - D0   Bank 0 Size Select

Size Select Bits | Bank Size (DRAM Depth)
-----------------|-----------------------
00               | not installed
01               | 1Mb (256K)
10               | 4Mb (1M)
11               | 16Mb (4M)

## 2.5 Interrupt Control

The IO Control Unit (IOCU) provides an additional level of
interrupt control for the system as well as the interface for an
internal IO bus and decoding for the internal peripheral
circuits. It contains registers that allow the software
generation of interrupts. All of the IOCU registers are reset at
power-on, but not by the reset push button or a processor reset
instruction.

### 2.5.1  Interrupt Mask and Current Status

The IOCU contains two mask registers that permit independent
control over which interrupt levels will be seen by the
processor. One register masks interrupts generated on the system
board and the other masks VMEbus interrupts. On systems not
equipped with VME, VME interrupts 1, 2, 4, and 7 are permanently
inactive. These registers are cleared at power-up, disabling all
interrupts. The state of these registers is not affected by the
reset button.

   There are also system and VME interrupt request registers
that show the current state of the seven interrupt request levels
from each. These registers show the physical state of the
interrupt lines before they are AND'd with the IOCU's mask
registers.

   The system board sources for IRQ5 (SCC) and IRQ6 (MFP) can
be serviced by either the CPU or a VMEbus master. IRQ5 and IRQ6
look to the CPU like VME interrupts, and can not be masked
independently of VME level 5 and 6 interrupts by the IOCU system
board interrupt mask register.

### 2.5.2  System Control Registers

The IOCU also contains two read/write registers (xxFF8E09h
and xxFF8E0B) that can be used for system configuration
information. Since these registers are only reset at power-on,
their contents can be used across system resets.

### 2.5.3  Interrupt Generator

The system can write to I/O address xxFF8E05h to generate a
low priority (level 1) interrupt to the CPU. This I/O address
contains a read/write status/control port, only the least
significant bit is defined. When set to 1, it generates an
autovectored level 1 interrupt. When cleared, the interrupt
request is taken away.

The IOCU is configured so that:

- only system interrupts 5 and 6 and VME interrupts are
    capable of generating vectored interrupts to the CPU

- IOCU generated level 1 and 3 interrupts are always
    autovectored

- The IOCU generated level 1 interrupt can be detected only by
    the CPU, not by a VMEbus master

- VMEbus SYSFAIL generates a system level 7 interrupt, but
    does not generate a VME level 7 interrupt. There is no
    source for system interrupt 7 in a non-VME system.

## 2.6 Bus Timer

The MCU implements a system bus timer. Bus cycles not
terminated within the the number of bus clocks specified by bit 4
of the memory configuration register will cause a bus error. A
fairly short (128~) and long (8192~) are provided.

## 2.7 Real Time Clock

The FALCON system includes a Motorola MC146818A like real
time clock function. This provides time of day (down to one
second resolution), date, and a programmable periodic interrupt. 
The RTC is provided with a 32.768 kHz oscillator that is
independent of all other system clocks.

The interrupt output of the real time clock chip connects to
the MFP-2 GPIP6 input.

The circuit also includes 50 bytes of battery backed up
(non-volatile) RAM that is used for storing diagnostic and
configuration data.

The control registers are accessed through two byte ports.
The first byte (xxFF8961) is write-only and used to set the
register address desired. The other byte (xxFF8963) is the
read/write data port. When doing a write to a register, it is
possible to do a long word write; the long word would contain
both the address and the data. The IOCU will break the write into
two transfers in the correct order for the RTC circuit.

# Section 3   IO Channels

The FALCON architecture supports the following IO channels:

- SCSI (as defined by the ANSI X3T9.2 committee)

- floppy disk interface with DMA channel

- a serial port and LAN port through the SCC chip

- a slot for a network card

- one (opt.) asynchronous serial port and an interrupt control
    through two MFP controllers (MC68901)

- a parallel printer port

- a ST/MEGA compatible intelligent keyboard, mouse, and
    joystick interface

- serial data input and output in via the DSP port

## 3.1 DMA Controllers

The FALCON design includes four independent DMA channels:

1. the AUX port (includes the SCC and network)

2. the SCSI port

3. the ST floppy disk port

4. digital sound playback and record.

In VME equipped systems, the VMEbus interface permits a
VMEbus master to perform DMA into system memory. The following is
the DMA bus mastership priorities:

priority | function
---------|---------
highest  | SCSI DMA Channel
   .     | Aux DMA Channel
   .     | Floppy disk DMA channel
   .     | Digital sound DMA channel
   .     | VMEbus Masters
   .     | Graphics Co-processor
lowest   | CPU

### 3.1.1  AUX/SCC and SCSI DMA Channels

The AUX/SCC and SCSI DMA controllers assemble the bytes from
the peripheral into longwords for writing to the system bus. DMA
can be done to any byte boundary, either on the main system board
or on the VMEbus. DMA is done in physical address space.

    The programmer's model of each of these DMA channel consists
    of:

-   a byte wide read/write status/control register that contains
    direction, enable and bus error bits

-   four bytes forming a 32-bit DMA pointer

-   data residue register that must be merged with RAM contents
    under CPU control if the DMA input is done to a point in RAM
    that is not on a longword boundary or if DMA is not done in
    multiples of four bytes

-   four bytes forming a 32-bit wide DMA byte count 

    The software that sets up the DMAC for DMA transfers must
account for the DMA registers being a byte-wide and appearing at
odd byte addresses. This requires the CPU either to use the MOVEP
instruction or to do rotates and four separate byte output
operations to put out a 32-bit address or byte count.

    DMA Controller Registers
    offset   width   function
    ---------------------------------------
    00   OB   DMA Pointer Upper
    02   OB   DMA Pointer Upper-Middle
    04   OB   DMA Pointer Lower-Middle
    06   OB   DMA Pointer Lower
    08   OB   Byte Count Upper
    0A   OB   Byte Count Upper-Middle
    0C   OB   Byte Count Lower-Middle
    0E   OB   Byte Count Lower
    10   W    Data Residue Register High
    12   W    Data Residue Register Low
    14   OB   Control Register

    The control register bit-map:

    bit   function
    __________________________________________
    0    DMA Direction Out (1 = out to port)
    1    Enable (0 = off, 1 = on)
    2    SCC channel (0=A, 1=B) Aux/SCC channel only
    3    Aux/SCC select (1=aux, 0=SCC) Aux/SCC channel only
    4    <reserved>
    5    data under/overrun
    6    Byte Count Zero (1 = terminal count)
    7    Bus Error (1 = Bus Error occurred during DMA by this
         channel)

    To perform DMA:

1)  set the DMA controller direction
2)  set the base address
3)  set up the peripheral for DMA
4)  then set the enable bit

    The direction and enable bits should not be set in the same
operation. If DMA input is done to anything but a longword
aligned destination, or if the length is not a multiple of four,
the final byte(s) of the transfer will not be written to the
system RAM. It is then the programmer's responsibility to read
the Data Residue Register and merge the input with the contents
of the appropriate longword in RAM. (The least significant two
bits of the DMA pointer are correctly incremented, which can be
used to determine how much of the Residue Register is valid.) For
best system performance, software should try to maintain DMA
operations on longword boundaries and keep byte counts in
multiples of four.

    If an attempted DMA operation generates a bus error, DMA
operation is immediately disabled and the bus error bit set in
the Control/Status register. The bus error status bit generates
an interrupt. The interrupt output of both of the SCSI and SCC
DMA controllers are OR'd together and connected to one of the MFP
input bits where they can be read or optionally used to generate
a processor interrupt. The bus error status for a channel is
automatically cleared by reading the channel's control register.

    The DMA byte count register generates an interrupt when the
byte count reaches 0. The DMA is automatically disabled by
reaching the terminal count.

    The 5380 SCSI Interface Chip must not be used in its BLOCK
MODE DMA. The SCC should be in programmed to use the WAIT/*REQ
pin in *REQ mode when doing DMA.

    The AUX channel controls the SCC and network slot. DMA can
transfer data to the SCC A port, SCC B port, or network slot.
Only one of the ports can be accessed via DMA at a time.

3.1.2  SCSI Output

    FALCON implements the complete single-ended
(non-differential) SCSI bus using a 5380 SCSI Controller. The
5380 is used in its 8-bit asynchronous data transfer mode up to
4.0 Mb/second, adequate for current disk drives.
    The external SCSI connector provides for connection of SCSI
compatible devices through a 50 pin SCSI II connector.




External SCSI Connector


Pin
Signal
Pin
Signal
Pin
Signal


1
GND
2
GND
3
GND


4
GND
5
GND
6
GND


7
GND
8
GND
9
GND


10
GND
11
GND
12
reserved


13
nc
14
reserved
15
GND


16
GND
17
GND
18
GND


19
GND
20
GND
21
GND


22
GND
23
GND
24
GND


25
GND
26
DB0*
27
DB1*


28
DB2*
29
DB3*
30
DB4*


31
DB5*
32
DB6*
33
DB7*


34
DBP*
35
GND
36
GND


37
reserved
38
termpwr
39
reserved


40
GND
41
ATN*
42
GND


43
BSY*
44
ACK*
45
RST*


46
MSG*
47
SEL*
48
C/D


49
REQ*


50
I/O


                                 Table 3.1

    Devices connected to the external SCSI connector should
provide standard SCSI bus termination in the last physical
device. Terminators should also be installed in the internal SCSI
device that is farthest (in terms of cable length) from the main
pcb.

    In a typical configuration, the SCSI bus will be used to
provide the main mass storage elements of the system. The SCSI
bus can also be used for removable media devices such as the
Syquest cartridge drives and magnetic tape controllers.

3.2 Floppy Interface

    The floppy disk DMA channel is fully ST compatible. It
provides a port to the 1772 like floppy disk controller (FDC).
The DMA channel operates identically with the ACSI/Floppy DMA
channel of previous ST architectures, except there is no ACSI
port and therefore no external devices accessible. For a further
description of this DMA channel, see the Atari ACSI/DMA
Integration Guide.

    A register is provided to control the floppy density similar
to the TT. FALCON enhances the function of this register to
enable sensing and control of extended (quad) density floppy
drives.

    The floppy disk density select register (xxFF860Fh) provides
control of disk density. Bits 4 and 0 are used to select the
frequency of the clock sent to the floppy controller circuit. The
remaining bits control two outputs and provide two inputs which
may be used (TBD) in the density selection process. The disk
change signal has also been added.

    The FALCON floppy disk subsystem is designed around a WD1772
like Floppy Disk Controller supporting up to two daisy-chained
floppy disk drives. The interface can support double, high, and
quad density drives.

    The internal drive cabling supports the disk change signal
from the floppy drive(s). The signal is asserted when power is
applied or a diskette is removed from the drive. The signal is
cleared by issuing a step command to the drive with a disk
inserted.

3.3 Serial and LAN Ports

    The Zilog 85C30 SCC, a dual channel multi-protocol data
communications peripheral, is included in FALCON to provide
serial and LAN ports.

    The input/output of SCC channel A is routed through RS-423
level converters to the LAN connector, an 8-pin mini-DIN
connector (see table 3.4).

    The SCC handles both asynchronous formats and synchronous
byte-oriented protocols such as HDLC and IBM's SDLC.

    The SCC port B is connected to serial port 1 (see table
3.3). Modem control signals are derived directly from the 85C30
port B control lines. This port can operate with split transmit
and receive baud rates.

    The PCLK input to the SCC is 8 MHz. The RTxCA input is
provided with a 3.6864 MHz clock. The input to TRxCA comes from
the low speed LAN connector. RTxCB is run at 2.4576 MHz. TRxCB is
generated by the Timer C output of the second MFP. Refer to the
Z85C30 data sheet or programming manual for formula on
determining baud rates.

3.3.1    MFP
    Two 68901 Multi-Function Peripheral (MFP) controllers are
used to provide system timers, serial port 2 (opt.), and
interrupt controllers.
    The baud rate clock for MFP-2 serial transmitter and
receiver is derived from the timer D output. Given the MFPs'
2.4576 MHz clock, baud rates up to 19.2 Kbaud can be supported on
this serial port.

3.3.2  Serial Port Pinouts

    Two serial ports are pinned out on DB-9P connectors in a way
that is compatible with most PCs.




Serial Port Pinouts


Pin	Port 1		Port 2


1
Carrier Detect (CD,input)
Carrier Detect (CD,input)


2
Receive Data (RD,input)
Receive Data (RD,input)


3
Transmit Data (TD,output)
Transmit Data (TD,output)


4
Data Terminal Ready
(DTR,output)
Data Terminal Ready
(DTR,output)


5
ground
ground


6
Data Set Ready
(DSR, input)
Data Set Ready
(DSR, input)


7
Request to Send (RTS,output)
Request to Send
(RTS,output)


8
Clear to Send (CTS,input)
Clear to Send (CTS,input)


9
Ring Indicator (RI,input) 1
Ring Indicator (RI,input)


                                 Table 3.3

1 The Ring Indicator (RI) signal is connected to bit 6 of the
MFP-ST General Purpose I/O Port (GPIP).

The GP IO (xxFF8204) register serial port bits are defined as
follows:

bit 8    ro   CD   state of serial port 2 pin 1
bit 9    rw        reserved
bit 10   ro   DSR  state of serial port 2 pin 6
bit 11   ro   CTS  state of serial port 2 pin 8
bit 12   ro   RI   state of serial port 2 pin 9
bit 13   wo   DTR  sets serial port 2 pin 4
bit 14   wo   RTS  sets serial port 2 pin 7

3.3.3  LAN Connector Pinout

    The LAN connector is an 8 pin female mini-DIN.




SCC Port A LAN Pinout


Pin
Signal


1
Output Handshake (DTR, RS-423)


2
Input Handshake/External Clock


3
Transmit Data -


4
Ground


5
Receive Data -


6
Transmit Data +


7
<reserved>


8
Receive Data +


                                 Table 3.4

3.4 Expansion IO Port with DMA

    The auxiliary DMA channel provides an interface for a
expansion IO port to accept high speed data transfer modules
(such as ethernet). The interface allows the module to transfer
data via the DMA channel to or from the Falcon bus and provides
memory mapped access from the Falcon bus to the module.
    Data transfer takes place via an eight bit bi-directional
data bus. The transfer structure and timing are very similar to
the 5380 SCSI controller chip. Familiarity with the 5380 or 53C80
data sheet will aid in using this port. There are two types of
transfer cycles, IO and DMA. IO cycles are controlled by separate
read and write strobes (IOR* and IOW*) and chip select (CS*).
Four address lines (A0-A3) are provided for selection of
registers. DMA cycles assert an acknowledge signal (DACK*) with
the read or write strobe and do not assert the chip select. The
address lines are not used during DMA cycles. IO cycles are
always initiated by the Falcon bus master and must be terminated
with the IOACK* signal by the remote device. DMA cycles are
initiated by the remote device via the DMA request signal (DRQ).
An interrupt signal (IRQ*) is included to allow the device to
signal the processor. The interrupt signal, if used, must only be
driven low as it may be part of a wire-or structure. The device
should drive the data lines ONLY when IOR* AND either (CS* or
DACK*) are true.

3.4.1  Expansion IO/DMA Port Pinout




Expansion IO/DMA Port


pin
signal
pin
signal


2
GND
1
GND


4
A0
3
GND


6
A1
5
VCC


8
A2
7
VCC


10
A3
9
VCC


12
CS*
11
DRQ


14
IOR*
13
DACK*


16
IOW*
15
IOACK*


18
D0
17
D1


20
D2
19
D3


22
D4
21
D5


24
D6
23
D7


26
RESET*
25
IRQ*


28

27
+12V


30

29
+12V


32
GND
31
-12V


34
GND
33
GND


36
GND
35
GND


                                 Table 3.5

    The connector will be a 36 pin card edge.

3.4.2  Signal Description

A0-A3    Outputs from Falcon select one of sixteen registers
         during IO cycles.

CS*      Output from Falcon is low during IO cycles. Devices
         should ignore IOR* and IOW* when CS* and DACK* are
         high.

IOR*     Output from Falcon is low during IO and DMA cycles when
         data is transferred from the device to Falcon. The data
         lines are input by Falcon when IOR* is low.

IOW*     Output from Falcon is low during IO and DMA cycles when
         data is transferred to the device from Falcon. The data
         lines are output by Falcon when IOW* is low.

D0-D7    Bi-directional data lines are used to transfer data
         between Falcon and the device. The direction is
         indicated by IOR* and IOW*.

DRQ      Input to Falcon requests a DMA transfer when high.

DACK*    Output from Falcon is low during DMA cycles. Devices
         should ignore IOR* and IOW* when CS* and DACK* are
         high.

RESET*   Output from Falcon is low during system reset. (minimum
         width of reset pulse is 10us)

IRQ*     Input to Falcon can generate an interrupt to the
         processor when driven low. Should only be driven low.
         There will be a 2.2K pull up in Falcon.

IOACK*   Input to Falcon for handshake of IO cycles. IO cycles
         are extended indefinitely while IOACK* is high. IO
         cycles terminate when IOACK* is low.

VCC      +5 volts +/- 5% 1a

GND      Logic ground

SGND     Shield ground

+12V     +12 volts +/- 5% 100ma

-12V-12 volts +/- 5% 50ma

3.4.3  Expansion IO Slot 

    In addition to the IO/DMA expansion slot, there is also a
more general purpose IO slot. This slot is suitable for IO
expansion cards which do not require DMA, need more IO space, or
need 16 bit access.




IO Expansion Connector


pin
signal
pin
signal
pin
signal
pin
signal


2
GND
4
+5v
1
GND
3
+5v


6
+5v
8
+5v
5
+5v
7
+5v


10
GND
12
+12V
9
GND
11
AUXIRQ*


14
+12V
16
GND
13
GND
15
POR*


18
-12V
20
GND
17
RESET*
19
GND


22
SP1RI
24
GND
21
GND
23
TCCLK


26
EXTINT*
28
DSPRES*
25
GND
27
BRCLK


30
DSPIEI*
32
GND
29
GND
31
SCSIINT


34
IOD0
36
IOD1
33
GND
35
IOA1


38
IOD2
40
IOD3
37
IOA2
39
IOA3


42
IOD4
44
IOD5
41
IOA4
43
IOA5


46
IOD6
48
IOD7
45
IOA6
47
IOA7


50
IOD8
52
IOD9
49
IOA8
51
IOA9


54
IOD10
56
IOD11
53
IOA10
55
IOA11


58
IOD12
60
IOD13
57
IOA12
59
IOA13


62
IOD14
64
IOD15
61
IOA14
63
IOA15


66
GND
68
RTCAS
65
GND
67
IOAS*


70
RTCDS
72
GPIORD*
69
IOLDS*
71
IOUDS*


74
GPIOWR*
76
CLK05
73
IORW
75
IODTACK*


78
ACIACS
80
ECLK
77
IOCLK
79
GND


82
KBDTCLK
84
KBDTXD
81
CARTA*
83
CARTB*


86
KBDRXD
88
SCFG*
85
IOCS1*
87
IOCS2*


90
KBDIRQ*
92
MFP1*
89
GND
91
MFPCLK


94
MFP2*
96
MFPIACK*
93
PSGCLK
95
GIBC1


98
MFPIRQ*
100
OLDDE
97
GIDIR
99
DIRQSCSI*


102
GPUIRQ*
104
D0SEL
101
DIRQSCC*
103
DSKIRQ*


106
D1SEL
108
SCNT
105
S0SEL
107
SINT


110
SPKON*
112
GND
109
GND
111
PSGAUDIO


                                 Table 3.6

3.5 Parallel Printer Port

    The FALCON includes a bi-directional 8-bit parallel printer
port similar to most PCs. The data interface is through the
programmable sound generator (PSG) chip IO port B. It is pinned
out to a DB-25 connector. The Centronics STROBE signal is
generated from the PSG IO port A bit 5. The BUSY signal from the
printer is routed to MFP-1 GPIP0 to permit interrupt driven
printing. The GP IO register at IO+8805h provides the remaining
signals.




Parallel Port Pinout


Pin
Signal


1
Strobe (STB-)


2
Data0


3
Data1


4
Data2


5
Data3


6
Data4


7
Data5


8
Data6


9
Data7


10
Acknowledge (ACK-)


11
Busy (BUSY-)


12
Paper out (PE)


13
Select (SLCT)


14
Autofeed (AFD-)


15
Error (ERROR-)


16
Init (INIT-)


17
Select In (SLCTIN-)


18-25
Ground


                                 Table 3.7


The GP IO register parallel port bits are defined as follows:

bit 0    ro   ERROR-   state of pin 15
bit 1    ro   SLCT state of pin 13
bit 2    ro   PE       state of pin 12
bit 3    rw            reserved
bit 4    wo   AFD- sets the output state of pin 14
bit 5    wo   INIT-    sets the output state of pin 16
bit 6    rw            reserved

3.6 Keyboard Interface

    The FALCON keyboard interface is completely compatible with
the ST/MEGA computers. The keyboard is equipped with a
combination mouse/joystick port and a joystick only port. The
keyboard transmits encoded make/break key scan codes (with two
key rollover), mouse/trackball data, joystick data, and
time-of-day. The keyboard receives commands and sends data via
bidirectional communication implemented with a MC6850
Asynchronous Communications Interface Adapter (ACIA). The data
transfer rate is 7812.5 bits/second. (See the Atari, Intelligent
Keyboard (ikbd) Protocol, February 26, 1985.)

    Additional circuitry has been included to support flow
control of keyboard data. The keyboard may monitor the IKBD UART
receive interrupt to inhibit sending data when it is active. The
keyboard may also inhibit the IKBD uart transmit clock via a
control signal to pause the data flow from FALCON.



Section 4   Video Subsystem

    The FALCON video subsystem is designed to extend the
existing ST and TT modes.  Additional modes are available on the
FALCON that allow more colors and larger screen sizes. This
subsystem is one of the basic components required to support the
industry standard X Windows windowing system allowing the FALCON
to exist as a fully-compatible X Windows workstation.

4.1 Video Configuration




mode
register
resolution
planes
palette
colors/DAC


xxFF8260
ST modes


00
320x200
4
16
512/3bit


01
640x200
2
4
512/3bit


10
640x400
1
2
512/3bit


xxFF8262
TT modes


000
320x200
4
16
4096/4bit


001
640x200
2
4
4096/4bit


010
640x400
1
2
4096/4bit


100
640x480
4
16
4096/4bit


110
1280x960
1
monochrome
4096/4bit


111
320x480
8
256
4096/4bit


                     Table 4.1 Comapatible Video Modes




mode
register
(xxFF8268)
resolution
bits/
pixel
palette
colors/DAC


000
XxY
1
monochrome
16M/8bit


001
XxY
2
2
16M/8bit


010
XxY
4
16
16M/8bit


011
XxY
8
256
16M/8bit


101
XxY
24
--
16M/8bit


110
XxY
8/24
--
16M/8bit


100
XxY
4
16
4096/4bit


111
XxY
1
monochrome
4096/4bit


                       Table 4.2 Falcon Video Modes

    The modes are set through the respective (ST, TT, or FALCON)
video mode register. In the ST mode, 16 word-wide registers
comprise the ST color palette (also known as the Color LookUp
Table - CLUT). Contained in each entry are nine-bits of color:
3-bits each for red, green, and blue. Therefore, a total of 512
possible color combinations (8 x 8 x 8) are selectable for each
entry. Through bank select bits in the TT mode register, 16 banks
of 16 ST CLUT registers can be mapped into the ST CLUT address
space.

    Mode 00 (320x200x4) can index all sixteen ST palette colors,
while mode 01 (640x200x2) can index just the first four (Reg0 -
Reg3) palette colors. The duochrome mode (10 - 640x400x1) uses
two entries of the TT color palette (foreground, Reg255 and
background, Reg254) and is provided with an invertor for inverse
video controlled by bit 0 of the ST palette Reg 0 or bit 1 of the
TT palette register 0. Color palette 0 is also used to assign a
border color while in multi-plane mode.

    Additional resolution modes are available by programming the
video through the TT shift mode register. In these modes, there
are a maximum of 256 TT color palette registers each containing
12-bits of color: 4-bits each for red, green, and blue.
Therefore, a total of 4096 possible color combinations (16 x 16 x
16) are selectable. Through the ST palette bank (lowest 4 bits of
the TT Shift Mode Register) one of 16 banks may be selected from
the TT color palette for use in ST modes. This allows modes 000,
001, 010, and 100 to seemingly select from up to 256 registers by
simply setting the palette bank. Only mode 111 (320x480x8) can
index all 256 registers.

    All accesses to either the ST or TT shift mode registers
will program the RAMDAC for the appropriate video mode  Likewise,
all accesses to either ST or TT color palettes will update the
RAMDAC color look-up tables appropriately.

    It should be noted that even though the ST, TT, and FALCON
color palettes are referenced as if they are separate entities,
they are actually implemented as different access paths to the
same physical storage. The color palette memory physically exists
in the RAMDAC as a 256x24 static RAM. When one of the 16 ST
palette registers is accessed, one out of the 256 physical
registers selected and data steering is enabled to map each of
the three 3-bit color definitions into the 24-bit register in
such a way as to produce the same color as would have been
produced in a ST. Similarly a TT palette register access will map
to one of the 256 registers with the 4-bit color definitions
mapped into the 24 bits. FALCON palette accesses map directly. ST
modes can access all 256 register 16 at a time via the ST palette
bank register as in the TT. Writing to the color palette via any
of the three paths change the same physical memory so a screen
displayed in a FALCON video mode would be affected by writes to
the ST palette.

    Falcon modes 0,1,2,3,4, and 7 support compatible (i.e., ST
and TT) video modes of 2,4,16, and 256 color screen depths.
Because all ST and TT modes require that data be stored in planar
format, Falcon supports storage of video data in either planar or
packed format. The new screen depths Falcon supports must be have
data stored in packed pixel format as specified in Section 4.2.1. 


    Note: Modes 000 and 111 as well as 010 and 100 are identical
    with respect to palette access, i.e., the same addresses are
    used for foreground and background. However, modes 111 and
    100, which are high res modes, only allow 4096 (16x16x16)
    different possible values for background and foreground
    colors while the low res modes 000 and 010 allow 16M
    (256x256x256). High res modes must program the upper and
    lower nybbles of each CLUT entry with identical values,
    hence 4096 colors instead of 16M.

     Falcon mode 000 and 111 access only two palette entries:
entries 254 and 255. This not affected by the bank select. Video
inversion can be turned on and off by setting or clearing either
ST palette entry 0 bit 0 or TT palette entry 0 bit 1. The table
below defines how inversion affects access to the palette.

    Invert         Background    Foreground    Border

      0    254           255           254
      1    255           254           254

    This is identical to ST and TT duochrome modes.

    Border color selection from the palette is identical to that
in the corresponding TT modes. Modes which allow bank selection
use the first entry in the selected bank. Eight bit and true
color modes use palette entry 0 for borders. Duochrome modes use
palette entry 254 for border color regardless of whether or not
inverse video is enabled.

    Four new video modes are supported in FALCON: a true color
mode (16M colors) and a separate true color mode with 256-color
overlays are supported in resolutions up to and including VGA in
33 Mhz systems; a 16 color high resolution mode (1280 x 960); and
an XGA mode which provides 65K colors with half the memory
bandwidth of the true color modes. Note the XGA and true color
modes only support packed pixel formats. 

    XGA mode provides 65,536 colors. The data format consists of
5 bits of red, 6 bits of green, and 5 of blue. A 64 bit "phrase"
of data from video memory is expanded into 4, 32-bit true color
pixels in the Funnel ASIC. Therefore, display of XGA images,
including CLUT access, are identical to that of mode 5 true color
except that the number of accessible palette entries is less.

    The true color mode, mode 101, requires 24 bits of data for
each pixel displayed; one byte for each color. This data provides
an 8 bit address for each of the three CLUTs in the RAMDAC. The
CLUTs can be programmed to provide gamma correction for a
specific monitor.
    The "pseudo/true color" mode, Falcon mode 110, requires 32
bits of data per pixel. Eight bits per color provide data
directly to the DACs for the generation of 16 million colors. 
The extra byte of data provides for one of 256 colors of overlay.
This byte is compared to a mask value (stored in the RAMDAC
control register) on a pixel per pixel basis. When a non-zero
mask value is present in this byte, the data is used as an
address to all three CLUTs. The data in this palette entry then
replaces the 24 bit value as input to the DACs. This mode can be
used to quickly move a 256 color window around the screen without
the overhead of altering the true color data which comprises the
background. It also provides a way to turn overlays off and on
with a single write to alter the mask value.

4.1.1  Compatible Mode Support

    Video compatibility support for ST and TT applications
involves two areas of Falcon's video subsystem.
    Video images which are stored in RAM in planar fashion are
"packed" by hardware in the Funnel ASIC into 32-bit pixel words.
Thus, pixel data going into the RAMDAC is always organized as n
packed pixels within each pixel word.
    Within the RAMDAC, data steering within the processor port
maps data bits to the CLUTS in the following manner:

    In the  ST Color Palette, only three bits per color are
    defined. Therefore, each three bit color pattern is written
    to bit ranges 7-5, 4-2, and 1-0 of the appropriate CLUT
    entry within the selected bank as determined by control
    register bits 3 through 0. For example, a bit pattern of 101
    will be written as 10110110. This mapping ensures true black
    and white levels on the DACs. Thus, if the processor
    initializes an entry as full scale, which is 7h in this
    mode, a value of FF will be entered.

    For accesses to the TT Color Palette, four bits/entry are
    defined and must be written to both nybbles of each
    byte-wide entry. This configuration will support true black
    and white levels for TT modes. Since the TT palette is 256
    colors, bank select values in the control register do not
    affect programming of CLUTs within this address space.

    Initializing the CLUTs for operation in the high resolution
    FALCON modes requires that each color value written to the
    FALCON palette have identical upper and lower nybbles. This
    can be more easily done through the TT palette address
    range. Because of the nybble duplication used for TT palette
    initialization in the RAMDAC , the two 4 bit DACs in each
    color pair can be initialized with the same value, as
    required in high resolution modes. Thus, one word write will
    initialize all three colors within a specific entry when
    using the TT palette, whereas two words (and two bus cycles)
    would be required when writing to the FALCON palette. 

    Accesses to Falcon color palette are direct one-to-one
    mapped.

    Switching color banks or changing palette values "on the
    fly" during active video will probably cause the video to
    "sparkle" as the CLUT rams are single ported. To avoid this,
    palette changes should be made during blanking intervals.

4.2 Video RAM

    In ST and TT video modes, display memory is configured as
logical planes (1, 2, 4, or 8) of interwoven contiguous words
forming a 32,000 byte (for ST modes) or 153,600 byte (for TT
modes) physical plane. The starting address can be set to any 8
byte boundary (in dual-purpose RAM only). The starting
address(es) of display memory are loaded into the Video Base
Register(s) (the most significant byte of the thirty two bit
addresses is always zero, i.e.  within the ST image). One of
these registers is loaded into the Video Address Counter at the
beginning of each frame. The address counter is incremented as
the BitMap is read. Note that there are two Video Base Registers
for even and odd fields. Only the even register set need be used
for non-interlace modes.

    BitMap planes are transferred from RAM to data steering
ahead of the video FIFO where the planes are translated into
packed pixels for video processing. The translated data proceeds
through the video FIFO to the RAMDAC where one bit from each
plane is collectively used as the index (plane 0 appears first in
RAM and provides the least significant bit of each pixel) to a
specific ST or TT palette register (depending on the Shift Mode).

4.2.1  Video Data Word Formats

    Video data stored in RAM in planar fashion must comply with
ST/TT format. Data stored in packed form must comply to the
formats defined below.

    8 bits/pxl     |7......0|7......0|7......0|7......0|
       
    4 bits/pxl     |32103210|32103210|32103210|32103210|
    
    2 bits/pxl     |10101010|10101010|10101010|10101010|
    
    1 bit/pxl |00000000|00000000|00000000|00000000|

    Pixels always go left to right


    True Color Mode

       --------------------------------------------
      | XXXX XXXX | R7....R0 | G7....G0 | B7....B0 | 
       --------------------------------------------
        ^     ^
        ||

        Data31                            Data0
    

    Psuedo/True Color Mode

       --------------------------------------------
      | PC7...PC0 | R7....R0 | G7....G0 | B7....B0 |
       --------------------------------------------

    XGA Color Mode

       ------------------------------------------------------
      | R4...R0G5..G3|G2..G0B4..B0|R4...R0G5..G3|G2..G0B4..B0|
       ------------------------------------------------------


4.3 External Video Interface

    Because of the wide range of video resolutions supported by
Falcon, some display devices will have to be driven by a daughter
card connected to the motherboard at the video expansion
connector.
    The motherboard will support VGA and super VGA monitors. The
RAMDAC is capable of generating RGB signals for a variety of
video modes which are not displayable on a VGA or super VGA
monitor. Separate horizontal and vertical outputs are supplied to
the Expansion connector by the resident timing generator (VTG).
For NTSC and PAL cards, the VTG will generate broadcast standard
sync signals. VGA and super VGA compatible dot clocks are
provided by oscillators, through a mulitplexor, to the RAMDAC.
Dot clock selection is controlled by bit 10 of the VTG master
control register. An external dot clock input from the expansion
card is multiplexed through to the RAMDAC by grounding the MUXSEL
pin on the connector.

    The external video port also provides a bidirectional
parallel data interface to the Falcon video subsystem for
external devices such as video digitizers and shifters. As an
input port, this port supports direct display of incoming video
data through the RAMDAC and/or storage of video frame data in
main memory. As an output port, it can be used to supply a data
stream from the video buffer to a shifter for generation of
extremely high resolution monochrome displays. The 32 bit data
bus on the interface can also be used for transfer of display
lists from the video buffer for such devices as polygon rendering
engines.

    A simple IO interface is also provided to allow programming
of an external card. Eight address lines provide for selection of
256 byte locations. Read and write strobes on the connector are
used to qualify the address and data flow. The first byte
location appears at IO address xxFF8301 and the last at xxFF83FF.

4.3.1  Frame Grabbing

    The Falcon architecture allows a frame storage operation to
occur as the frame is displayed through the RAMDAC. In order to
perform frame storage operations, Falcon and the external
digitizer must be genlocked. This can be done in one of two ways.
The external card may genlock the video system by supplying
horizontal and possibly vertical syncs and a free running, phase
locked pixel clock, or it must synchronize to the internal timing
generator. In either case, all of the timing signals except the
two syncs and the pixel clock are always generated by the Falcon
VTG. When genlocking to the external card, software must program
the VTG Video Master Control Register for external sync mode and
write FFFFH to the VFT register. This ensures that the vertical
counter will only be reset by the vertical sync input. Of course,
all other timing parameters must be initialized exactly as if the
VTG was running on internal syncs. This includes the HHT
register.
     A typical frame grab should proceed in the following
manner. At the beginning of the vertical blank interval preceding
the frame to be stored, the external card must assert EVSEL1*
and/or EVSEL2*. Assertion of both EVSELs does two things: it
gates off VBREQ* from the VTG which requests video data bursts
from the Memory Control Unit (MCU) and it switches the Data
Funnel (FNL) external video port onto it's internal video buffer
inputs. During a frame store, all video data is supplied by the
external card, and the FNL video buffer is used as temporary
storage  for the incoming data until the MCU can write the data
into DRAM. No other actions are required during the VS interval.
At or before the end of VBLNK, the external device must drive the
first 32 bit unit of data onto the data port. This data must be
valid on the internal video bus before the rising edge of DEN.
Once active video commences, i.e., while DEN is driven high, the
device must supply new pixel data upon demand to the RAMDAC
within 15ns of the rising edge of NXT. Additionally, a write
strobe (EVSTRB) must be supplied with each unit of data to store
it in the video buffer. As soon as data is strobed into the video
buffer, it is set up at the 64 bit memory port of the FNL for
transfer to DRAM by the MCU at a later time. The controller
internal to the FNL will wait until the buffer is half full
before asserting VWR* to inform the MCU that external video data
is present. The MCU gives this interrupt the same priority as
VBREQ* and will begin servicing as soon as the current operation
is completed; the maximum latency is such that data reads from
the buffer are guaranteed to begin before the buffer can overflow
providing that the input data rate is below approximately 30 Mhz
(exact limit is TBD).. The MCU then asserts VDEN* to turn on the
FNL memory port buffers and strobes the quad word of video data
into DRAM on the falling edge of VACK*. This continues until the
buffer is empty and EVSEL*s are inactive. The external device
must negate these inputs at the end of the frame once the last
pixel word has been strobed into the buffer. Note that certain
conditions may exist in which the VBLNK interval following a
frame store does not provide sufficient time for the MCU to
finish storing the frame and begin loading the buffer with data
for the next frame. In such cases, the display will be allowed to
flicker, and the system will recover by requesting a video burst
from main memory during the following VBLNK interval.


4.3.2  Graphic Overlays on External Video

    Falcon also supports overlay of video in screen memory onto 
external video in Falcon mode 110 (see section 4.1). This
operation requires that the external video source and Falcon be
genlocked. Two modes of operation are supported. For external 24
bit true color data mixed with internal 8 bit overlay data,
EVSEL1* must be asserted before the end of the VBLNK interval
preceding the first frame of incoming video which is to have an
overlay. EVSEL2* must not be driven or may be driven high
allowing the FNL chip to drive the top byte of the video bus to
the RAMDAC. For an external overlay on internal true color data,
EVSEL2* must be asserted and EVSEL1* negated.

    Assertion of EVSEL1* configures the video port to input the
lower 24 data lines from the connector and disables the FNL
output buffers that normally drive this section of the video bus
to the RAMDAC. Assertion of EVSEL2* likewise configures the upper
8 bits of the port. Assertion of both disables all display of
internal video data and configures the port for external data
input as noted in the previous section.

4.3.3  Alternate Display Support

    The red(R), green(G), and blue(B) outputs from the RAMDAC as
well as horizontal and vertical sync signals are available on the
external video connector. Cards for this port should contain a
clock driver to supply a pixel clock if the available 25.175 Mhz
or 75.073 Mhz clocks resident on the motherboard are not
appropriate. The MUXSEL connector pin controls the pixel clock
multiplexor located on the motherboard. For expansion cards
supplying an alternate clock, this pin should be tied to ground.

    Use of this port for driving an external shifter is only
necessary when extremely high resolution displays are desired. A
shifter card attached to this port must only supply two signals
to the Falcon motherboard. The GRAFX* input must be driven low to
tell the video buffer to shift data out on demand from the
external shifter (not from the RAMDAC). The other signal is the
read pulse to the video buffer, EVSTRB. The external device may
read the buffer at any rate up to about 32 MHz, the memory
refresh bandwidth limit.


Note: R, G, and B signal traces on the daughter board must not be
terminated. Keep traces to the monitor connector as short as
possible.

4.3.4  External Video Interface Description

     The expansion card interface is composed of the following:

    -    a 32 bit bidirectional video data bus
    -    bidirectional video timing signals 
    -    an 8 bit I/O bus for accessing control registers
    -    various control signals.
    -    analog R,G, and B outputs
    -    a dot clock input to the system
    -    +/- 5 and 12 volt supplies

    The 32 bit data bus is a bidirectional bus for transfer of
video data onto and off of the expansion card. The expansion card
should use transceivers to drive this bus. The following
directional controls must be pinned out to the connector for
controlling corresponding tristate buffers on the motherboard:


EVSEL1*  in   External video select 1. Active low. Controls the
              source of video vdata[23:0] on the motherboard.
              Source is expansion card, when active.

EVSEL2*  in   External video select 2. Active low. Controls the
              source of video vdata[31:24] on the motherboard.
              Source is expansion card, when active.

EVSTRB   in   External Video Strobe. Active high. Read or write
              strobe to the video data buffer (see the truth
              table to follow.)

NXT      out  RAMDAC output read strobe to the active source of
              video data. Monitored by the external card when
              supplying any or all video data to the RAMDAC.

GRAFX*   in   When active, the video data buffer supplies
              instruction list to external device on the rising
              edge of EVSTRB. All analog video signals must be
              supplied by external device to a monitor connector
              located on the external card.

The following truth table describes all combinations of control
signals and the corresponding function implemented by them:




EVSEL1*
EVSEL2*
GRAFX*
FUNCTION


0
0
0
Invalid


0
0
1
EV card driving all video data
lines for frame store and/or
display through RAMDAC. EVSTRB
writes data into buffer.



0
1
0
Invalid


0
1
1
EV card supplies the lower 24 video
data bits for true color
background. The video data buffer
supplies upper 8 bits of overlay
data. Falcon mode 6 only



1
0
0
Invalid


1
0
1
EV card drives upper byte of video
data for overlays onto true color
background as supplied by the video
data buffer. Falcon mode 6 only



1
1
0
EV card reading 32 bit instruction
list words from video data buffer.
EVSTRB reads data from buffer. 



1
1
1
All video data supplied by video
data buffer. All EV card video data
buffer outputs are high impedance.



                                 Table 4.3




Video Expansion Connector


pin
signal
pin
signal
pin
signal
pin
signal


2
GND
4
PXD0
1
GND
3
PXD1


6
PXD2
8
PXD4
5
PXD3
7
PXD5


10
PXD6
12
PXD8
9
PXD7
11
PXD9


14
PXD10
16
PXD12
13
PXD11
15
PXD13


18
PXD14
20
PXD16
17
PXD15
19
PXD17


22
PXD18
24
PXD20
21
PXD19
23
PXD21


26
PXD22
28
PXD24
25
PXD23
27
PXD25


30
PXD26
32
PXD28
29
PXD27
31
PXD29


34
PXD30
36
GND
33
PXD31
35
GND


38
EVSEL1*
40
GND
37
EVSEL2*
39
GRAFX*


42
EVSTRB
44
GND
41
GND
43
-5V


46
HBLANK
48
HSYNC
45
GND
47
+12V


50
VBLANK
52
VSYNC
49
+12V
51
GND


54
FIELD
56
DEN
53
-12V
55
GND


58
GND
60
NC
57
+5V
59
+5V


62
NC
64
GND
61
+5V
63
+5V


66
XVRD*
68
XVWR*
65
GND
67
RESET*


70
GND
72
IOA0
69
GND
71
IOD0


74
IOA1
76
IOA2
73
IOD1
75
IOD2


78
IOA3
80
IOA4
77
IOD3
79
IOD4


82
IOA5
84
IOA6
81
IOD5
83
IOD6


86
IOA7
88
GND
85
IOD7
87
GND


90
GND
92
GND
89
GND
91
GND


94
EXTCLK
96
GND
93
GND
95
GND


98
NXT
100
GND
97
XMUXSEL
99
GND


102
GND
104
AGND
101
GND
103
AGND


106
AGND
108
RED
105
AGND
107
AGND


110
GREEN
112
BLUE
109
AGND
111
AGND


                                 Table 4.4

    A slot is provided for a video expansion pcb. The connector
is a 112 pin board edge type.

    The I/O port consists of an 8 bit bidirectional data bus
(IOD7 through IOD0), 8 address lines (IOA7 through IOA0), a read
strobe, and a write strobe. Data buffers on the expansion card
are enabled by an active low level on the read strobe, and data
can be latched off the IO bus on the rising edge of the write
strobe.

4.3.5  Monitor Connector

    Standard video output is provided on a 3 row 15 pin VGA
compatible connector.




VGA Connector Pinout


Pin
Signal


1
Red


2
Green


3
Blue


4
Monitor ID 2


5
Ground


6
Red return


7
Green return


8
Blue return


9
key


10
Ground


11
Monitor ID 0


12
Monitor ID 1


13
Horizontal sync


14
Vertical sync


15



                                 Table 4.5

4.4 Video Timing Control

    All video timing control signals are generated by the Video
Timing Generator chip (VTG) except when the video is genlocked to
an external device on the external video port. The VTG also
generates all video related signals to the Memory Control Unit
(MCU) and Data Funnel (FNL) required to ensure accurate transfer
of data from screen memory to the RAMDAC in all video modes.

4.4.1  Control Functions

    Two registers, the video master control register (VMC) and
video timing control register (VTC), are principally involved in
control of outputs to other chips and to the display. These
registers are defined as follows:

VMC Video Master Control (xxFF82C0)
    abcd efgh ijkl mnop
    p    Hsync source  0=Internal
    1=External
    o    Hsync level   0=Active high
    1=Active low
    n    Hsync enable  0=Disable
    1=Enable
    m    H-counter on  0=Reset to 0
    1=Count
    l    Vsync source  0=Internal
    1=External
    k    Vsync level   0=Active high
    1=Active low
    j    Vsync enable  0=Disable
    1=Enable
    i    V-counter on  0=Reset to 0
    1=Count
    h    Csync type    0 = hsync or vsync
    1 = hsync xor vsync
    g    Csync enable  0=Disable
    1=Enable
    f    Dot clock select 0=VGA
     1=Super VGA
    e    Video data transfer counter on
    0=Reset to 0
    1=Count
    d    Alternate fields*
    0=disabled
    1=enabled
    c    Equalization  0=Disabled
    1=Enabled
    b    Wide Equalization 0=Disable
      1=Enable
    a    PAL/NTSC      0=PAL (5 pulses)
    1=NTSC (6 pulses)
* The effect of this bit depends on whether or not interlace is
enabled, i.e., whether VFT register bit 0 is cleared or set.This
bit must be cleared for normal interlaced video (VFT0=0) that
requires the FIELD output to toggle. The truth table:    

         VMC[12]   VFT[0]   Function
           
           0         0      FIELD output toggles. For display of
                            normal interlaced fields.
           0         1      FIELD output is 0. Normal non-
                            interlaced display modes
           1         0      Invalid.FIELD output does not
                            toggle. 
           1         1      FIELD output toggles. Useful for
                            non-interlaced display of alternate
                            frames from separate data buffers.
VCO Video control register (xxFF82C2)
    0000 0000 0smm mvnr
    r    Repeat lines  0=Disabled
    1=Enabled
    (Doesn't work correctly in interlaced mode)
    n    Prescale dot clock 0=No prescale
       1=Divide by 2
    v    Register select 0=VDB0/VDE0
     1=VDB1/VDE1
    mmm  Video mode*
    000 1  bpp Duochrome
         001 2  bpp
    010 4  bpp
    011 8  bpp
    100 4  bpp hi-res
    101 24 bpp True color
    110 24 bpp True color + overlay
    111 1  bpp hi-res monochrome
    s    Line skip     0=Disabled
    1=Skip alt' lines

*Note:   The Video Mode lines are read only in the Video Control
         Register. They are set by writes to the ST, TT, or
         Falcon Video Mode Registers.

    The HSYNC and VSYNC pins on the VTG are bidirectional. The
selection of input/output function is controlled by bits in the
VMC that must be set by software to select the appropriate sync
direction for genlock of the video system to an external device.
These bits are cleared (select internal sync) on initialization.

  The VCO register controls all timing parameters that must be
changed to display the various ST and TT compatible modes. A set
of VCO parameters for each compatible mode are stored in the VC#
registers. These parameters must be loaded at boot for the type
of monitor connected. Values are automatically written from the
appropriate VC# register to the VCO register when accesses to ST
or TT shift mode registers indicate that a compatible mode is
being selected.

 The VC# registers are defined as follows:

xxFF82E0 VC1  definitions for 320 X 200, 16 color mode
         (old ST mode 00/ TT mode 000)

xxFF82E2 VC2  definitions for 640 X 200,  4 color mode
         (old ST mode 01/ TT mode 001)

xxFF82E4 VC3  definitions for 640 X 400, 2 color mode
         (old ST mode 10/ TT mode 010)

xxFF82E6 VC4  definitions for 640 X 480, 16 color mode
         (old TT mode 100)

xxFF82E8 VC5 definitions for 1280 X 960, hi-res monochrome
         (old TT mode 110*)

xxFF82EA VC6 definitions for 320 X 480, 256 color mode
         (old TT mode 111)


    *Note: true compatibility support is not possible for TT
    mode 110 mode because timing parameter register values must
    be changed from the default VGA or TV values. Also this mode
    exceeds the bandwidth for VGA and TV monitors.

    Table 1 indicates the settings required in each VC# register
for support of either TV or VGA monitors. Software must configure
these registers for the connected monitor or video card at boot.





VCn

Resolution
TV
VGA




s mmm v n r
s mmm v n r


1
320x200x4
1 010 0 1 0
0 010 0 1 1


2
640x200x2
1 001 0 0 0
0 001 0 0 1


3
640x400x1
0 000 0 0 0
0 000 0 0 0


4
640x480x4
0 010 1 0 0
0 010 1 0 0


5
1280x960x1
0 111 0 0 0
0 111 0 0 0


6
320x480x8
0 011 1 1 0
0 011 1 1 0


                      Table 4.6 VC Register Settings

    The VTG monitors accesses to the RAMDAC control register;
writes to this register will update the mode bits, set the
PACKED* output to a low state (active), turn off DIV2, Rline, and
sline, and clear the v bit.

ST/TT compatibility is fully accomplished using the VC# registers
without the need to change any timing parameter register values.
The VTG will respond to any access to ST or TT shift mode
registers by driving DTACK and, on reads, data. Any write to
these registers will set the PACKED* output high (inactive). The
VTG also responds to writes of the TT Shift Mode register bit 12
by setting it's HMONO output accordingly. This output goes to the
RAMDAC which steers CLUT data to the DACs appropriately.

4.4.2  Timing Generator

    The primary function of the VTG is to generate horizontal
and vertical sync, blank, and display enable signals to the
connected monitor, or for generation of NTSC/PAL composite video.


xxFF8280 - HORIZONTAL COUNTER (HC)
    
    Counts TGCLK cycles during horizontal lines. Reset at
    beginning of each half line. This is a read/write register
    to facilitate testing; during normal operation, it should
    not be written to.

xxFF8282 - HORIZONTAL HALF LINE TOTAL (HHT)

    Number of TGCLK cycles per half horizontal line.

xxFF8284 - HORIZONTAL BLANK BEGIN (HBB)

    (Horizontal count - 1) value of the second half line of each
    horizontal line where horizontal blanking begins.

xxFF8286 - HORIZONTAL BLANK END (HBE)

    (Horizontal count - 1) value of the first half line of each
    horizontal line where horizontal blanking ends.

xxFF8288 - HORIZONTAL DISPLAY BEGIN (HDB)

    (Horizontal count - 1) value of any horizontal half line
    where active video begins. The 'Line half bit' in bit 12
    controls/indicates in which half line of each horizontal
    line the display enable will be asserted.

xxFF828A - HORIZONTAL DISPLAY END (HDE)

    Horizontal count value of any horizontal half line where
    active video ends. The 'Line half bit' in bit 12
    controls/indicates in which half line of each horizontal
    line the display enable will be negated.

xxFF828C - HORIZONTAL SYNC START (HSS)

    (Horizontal count - 2) of the second half line of each
    horizontal line where horizontal sync is asserted. This is
    the same point that both field sync and equalization pulses
    begin if enabled. 

    Note: horizontal sync will always end when horizontal count
    equals HHT, during the second half line of each horizontal
    line.

xxFF828E - HORIZONTAL FIELD SYNC (HFS)

    Horizontal count value of the second half line of each
    horizontal line during the first part of vertical blanking
    (as required for NTSC/PAL composite video) where horizontal
    field sync pulses end if equalization is enabled.


xxFF8290 - HORIZONTAL EQUALIZATION END (HEE)

    Horizontal count value of each half line during the first
    part of vertical blanking (as required for NTSC/PAL
    composite video) where equalization pulses end if
    equalization is enabled.

xxFF8292 - VIDEO BURST TIME (VBT)

    (Horizontal count - 2) value of either half line of each
    horizontal line where the request for the next line's data
    is generated. The 'Line half bit' in bit 12
    controls/indicates in which half line of each horizontal
    line the request occurs. The burst request should never be
    generated until after the beginning of the horizontal blank
    period which precedes the line for which the data is needed.
    Therefore, the half line bit should always be set in this
    register, and the value should be greater than HBB. 

xxFF8294 - VIDEO DATA TRANSFERS (NUMREQ)

    Controls the number of data transfers requested for each
    horizontal line of video. This register should be
    initialized to 28h during the boot sequence, and before
    leaving a non-compatible mode. For compatibility purposes,
    this value is prescaled according to the current value of
    the mode bits (mmm) in the Video Control Register
    (xxFF82C2).

    When configuring Falcon for non-compatible video modes, the
    following formula should be used to calculate this value to
    compensate for prescaling.

         ((No. pixels per line x no. bits per pixel) / 64) x p
    where p= 4 if mmm = 000
                       2 if mmm = 001,100,010,111
                       1 if mmm = 011, 101, 110

xxFF8296 - HORIZONTAL WORD COUNT (HWC)

    Indicates the number of transfers of video data completed by
    the MCU during the current horizontal line.



xxFF82A0 - VERTICAL COUNTER (VC)
              
    Counts number of half horizontal lines in a frame (or field
    during interlaced modes). Reset by (VC=VFT), and by external
    vertical sync when configured to run in external sync mode.
    This is a read/write register to facilitate testing; during
    normal operation, it should not be written to.

xxFF82A2 - VERTICAL FIELD TOTAL (VFT)

    Number of horizontal half lines in a frame or field minus
    one. Must be an even number for interlaced modes, and an odd
    number for non-interlaced.

xxFF82A4 - VERTICAL BLANK BEGIN (VBB)

    Vertical count value where VBLANK output is asserted.
xxFF82A6 - VERTICAL BLANK END (VBE)

    Vertical count value where the VBLNK output is negated.

xxFF82A8 - VERTICAL DISPLAY BEGIN 0 and 1 (VDB0, VDB1)

    Vertical count value where DEN is enabled. 

xxFF82AA - VERTICAL DISPLAY END 0 and 1 (VDE0, VDE1)

    Vertical count value where DEN is disabled.
     
    Note: The above two registers are duplicated for
    compatibility purposes. When initialized properly, VDB(E)0
    is used for display of 640x400 modes, and VDB(E)1 for
    640x480 modes. Selection of these registers is controlled by
    the 'V' bit in the VCO register (xxFF82C2). This bit must be
    set or cleared to access the desired register. It can be
    written to directly, but is changed automatically by writes
    to the ST or TT Shift Mode Register (xxFF8260 and xxFF8262,
    respectively) when VC registers are properly initialized
    (see Section 4.4.1).
    
xxFF82AC - VERTICAL SYNC START (VSS)

    Vertical count value where vertical sync is asserted
    (programmable polarity). 

    Note: vertical sync is always negated when the vertical
    count equals VFT.

    Counts number of half lines per field.  This determines when
    a new field should be started.



VTG Clock Frequencies

    The TGC clock input to the VTG is a free running clock which
    is generated by one of two dotclk oscillators and prescaled
    by the RAMDAC. Bit 10 of the VTG Video Master Control
    register controls selection of the desired oscillator.
    Prescaling is mode dependent as follows:




Falcon Mode
Prescaler
ftgc (Mhz)




VMC[10]=0
VMC[10]=1


000
2
12.5875
37.537


001
2
"
"


010
2
"
"


011
2
"
"


100
4
6.294
18.768


101
1
25.175
75.073


110
1
"
"


111
4
6.294
18.768


                 Table 4.7 Internal Dot Clock Frequencies


    Note:     All compatible modes (except TT mode 6) will be
              displayed on VGA monitors using fTGC = 12.5875 Mhz.
              Section 4.4.1 specifies in which Falcon mode the
              compatible ST and TT modes run.

    Note:     This table assumes dotclk source is not external. 
              Modes 100 and 111 will probably run with an
              external dotclk source supplied through the
              external video connector.


    The width of displayed lines must be in units of 32 bits.
That is, one pixel for modes 101 and 110, four pixels for mode
011, eight pixels for modes 010 and 100, 16 pixels for mode 100,
and 32 pixels for modes 000 and 111.

Rules for Programming the Registers

    The resolution of all horizontal timing outputs is in TGC
clock units.


 All vertical timing outputs are in units of half horizontal
lines ( HHT / fTGC ) where fTGC is in Mhz.

VBT

    Calculation of the correct VBT (Video Burst Time) value
involves consideration of several hardware requirements.Video
burst for the next horizontal line must not start until the
preceeding hblank period has begun. This means that VBT must be
greater than HBB. An additional requirement involves the VTG
output CVB which clears the funnel video data buffer to ensure
that no residual data is present. This output is active from the
beginning of hblank until VBT goes active. VBT must be set to
make the CVB pulse sufficiently long, i.e., greater than .6 us.
Finally, the video burst request must be asserted at least 1.2us
before DE is asserted (see "a" in figure 4.5) to begin active
video display. All these requirements are satisfied by setting:

    VBT = HBB + .6fTGC


    where fTGC is in Mhz.
    
    Note: Be sure that VBT[12]=HBB[12]=1]


HDB

    Calculation of this value is straight forward; the offset
from HBE determines the width of the screen border sides
(providing HDB[12] is not set). Usually, the DE pulse to enable
active video is centered with respect to the hblank pulses to
generate a symmetrical border on the screen. Because of the pipe
delay through the RAMDAC, the HDB value must be adjusted. Because
of the prescaling of TGC, and variation in the RAMDAC pipe delays
from one mode to another, the correction factor for this value is
mode dependent.  Table 4.9 specifies the correction factors for
HDB.




Falcon Mode
Correction


000
4


001
4


010
4


011
4


100
3


101
6


110
6


111
4


                         Table 4.8 HDB Correction


HDE

    The RAMDAC will always completely display the last 32 pixel
data word to be loaded before DE is negated. Therefore, the
relationship between the HDE parameter value and the end of
active video on a line is dependent on the screen depth of the
video mode being displayed. Calculation of HDE is most easily
done in terms of the offset from HDB. The equations for each mode
are as follows:




Falcon Mode
Correction


000
16((HR1 / 32) - 1) + HDB - HHT + 2


001
8((HR / 16) - 1) + HDB - HHT + 2


010
4((HR / 8) - 1) + HDB - HHT + 2


011
2((HR / 4) - 2) + HDB - HHT


100
2((HR / 8) - 1) + HDB - HHT + 1


101
HR + HDB - HHT


110
HR + HDB - HHT


111
8((HR / 32) - 1) + HDB - HHT + 2


                         Table 4.9 HDE Correction

1 Horizontal Resolution


NUMREQ

    This value specifies the number of 64 bit data transfers
from RAM to the video buffer which are required to display one
horizontal line. Prescaling of this value occurs in order to
support compatible modes when the value should always be 28H. For
all falcon modes, use the following formula.

    ((HR x BPP1) / 64) x p

         where p = 4 if mmm2= 000

              2 if mmm = 001, 100, 010, 111

         1 if mmm = 011, 101, 110

    1 bits per pixel

         2 mmm = Falcon Shift Mode Register[6:4]


Example VGA Timing Parameter Values

The following setup will support a standard 640 x 480, 525 line
display on a VGA monitor. This example assumes falcon mode 3

Dotclk = 25.178 Mhz.

fTGC = 12.588 Mhz.

HHT = 410/2-2 =203
 
HSS = (360-205)-1 =154

HBB = (352-205)-1 =146

HBE = 25-1 =24

HDB = 25-2-CF1 =23-4=19       [12]=0

HDE = 2((640/4)-1)-203+19=74     [12]=1

HFS = 0

HEE = 0


VFT = 525*2-1 =1049

VSS = 1049-4 =1045

VBB = 1045-6 =1039

VBE = 48
 
VDB = 64
 
VDE = 1039-16 =1023

VBT = 148 + 8 =156 

NUMREQ = ((640 x 8)/64)= 80
        

VMC = 08EEH (Seperate internal syncs active low)


Example Super VGA Timing Parameter Values

The following setup will support a standard 1024 x 768, 70 Hz. 
display. This example assumes falcon mode 3

Dotclk = 75.073 Mhz.

fTGC = 37.537 Mhz.

HHT = 662/2 -2 = 329

HSS = (624 - 331)-1 =292

HBB = (580 - 331)-1 =248

HBE = 68-1 =67

HDB = 68-2-4 =62        [12]=0

HDE = 2((1024/4)-1)-329+62=243    [12]=1

HFS = 0

HEE = 0


VFT = 808*2-1 =1615

VSS = 1615 - 5 =1610

VBB = 1612

VBE = 76
 
VDB = 76

VDE = 1612

VBT = 248 + 23 =271 

NUMREQ = See above


VMC = 0EEEH ("or'd" composite sync active low)

Note: Sync-on-green bit of Falcon shift mode register must be 
cleared (enabled).



Section 5   Graphics Coprocessor

*** Information to be supplied by Martin Brennan ***



Section 6   Sound Subsystem

    The FALCON architecture extends the music subsystem
presently available on the ST/MEGA/TT computers. New features
include:

-   16 bit stereo

-   record as well as playack

-   integral DSP

-   fully digital external interface

    FALCON is also equipped with a Musical Instrument Digital
Interface (MIDI) which provides high speed serial communication
of musical data to and from more sophisticated synthesizer
devices.

6.1 DSP

    The Motorola DSP56001 Digital Signal Processor has been
added to the Falcon architecture to facilitate applications which
require high speed signal processing capability. The DSP host
interface is memory mapped to the Falcon IO space from xxFFA201-
xxFFA207 on consecutive bytes. The DSP should be programmed to
operate the host interface in vectored interrupt mode. The DSP
interrupt appears in the system on level 6 shared with the MFPs.
The level 6 interrupt priority is set by a daisy chain to MFP 1,
MFP 2, then DSP. The DSP reset signal is controlled by the PSG
port a bit 4. Software should configure this pin for output.
Setting this bit high resets the DSP.

    The DSP is connected to 32K x 24 bits of static ram which is
not shared with any other system resource. This DSP ram appears
in the DSP's address space as follows:




FFFF




<reserved>








<reserved>








<reserved>







7FFF

16K
shadow


16K
shadow




32K
program
RAM

Overlaps X
memory


3FFF
16K
external
RAM

16K
external
RAM



Overlaps Y
memory


01FF
Internal
RAM/ROM
Internal
RAM/ROM
Internal
RAM



0000
X memory
Y memory
P memory



                     Table 6.1 DSP External Memory Map

The DSP contains internal RAM and ROM which overlap parts of the
external memory space. Note that since program space overlaps X
and Y data space, DSP software must be careful to avoid having
program and data memory collide. X:1K, X:17K, and P:17K are the
same physical memory location as are Y:1k, Y:17K, and P:1K.

    The DSP signals on port C used for the Synchronous Serial
Interface (SSI) are connected to the External Digital Sound
Connector (see Table 6.2) and the switching matrix.
    For further information on programming the DSP, see the
DSP56000/DSP56001 Digital Signal Processor User's Manual.

6.2 Switching Matrix

    A 4x4 switching matrix and format converter connects the
external sound peripherals and the DMA channels. There are four
sources of sound data, the playback DMA, the DSP SSI port, the
external SSI like port, and the CODEC ADC. There are also four
destinations for sound data, the record DMA, the DSP SSI port,
the external SSI like port, and the CODEC DAC. Each source,
except for the CODEC, can select one of three clock sources. The
CODEC can only select one of two clock sources. The matrix
circuitry converts the data format of the selected source to the
destination format. When data is transfered between either the
playback or record DMA ports and one of the SSI style ports,
there is also an option of gated clock (handshake) or continuous
clock modes.
 
Each receiving device can have its data path connected to any one
of the four source devices as can multiple receiveing devices
select the same source. There are, however, certain invalid
combinations. Handshake mode, for example, is only valid with the
SSI stlye ports and not with the CODEC.

    All the data connections shown are actually serial data
paths which include a bit clock, data, and synchronization
signal.

6.2.1  Clock Sources

There are three possible clock sources in the system:
    
    CLK25 (25.175 MHz)
    CLK32 (32 MHz)
    EXTCLK (external clock)

Each source device must select one of these clocks as its master
clock. The CODEC can use the Internal 25.175MHz, or External
clock. The bit clock is taken from the master clock divided by 4
to 24. The Sample rate is then the bit rate, divided by 128:

    The Sound Mode Control register (IO+8920h) was used to
select the sample rate clock prescale in previous systems. Bits 0
and 1 selected the prescale value. With the internal clock (8
Mhz) selected and the prescale value set to 160, the sample rate
would be 50 Khz. This register has been maintained for
compatibility but only has effect when the new Prescale Control
Register (xxFF8934) is programmed to turn off the internal clock.
Falcon applications should use the Prescale Control Register at
xxFF8934 to set the master clock prescaler.

6.2.2  Serial Data Formats and DMA Flow Control

    The maximum data rate of the DMA record or playback channels
is one Megabyte per second each. Since the FIFOs are 32 bytes
deep each sound DMA channel will require bus access approximately
every 32us. Communication between the DMA ports and the SSI style
ports can use a handshake to regulate data flow. The port
synchronization signal is input to the DMA port controller in
handshake mode. When the synchronization signal is low (inactive)
or when the DMA port is not ready, the bit rate clock is gated
off at the end of the current transfer to halt data flow. In non-
handshake mode, the bit rate clock runs continuously and the
synchronization signal is output to the port. Data overflow or
underruns can occur in non-handshake mode. The CODEC can only
operate in non-handshake mode.

    The SSI style ports use a three wire serial interface to
transfer data. Data transfers use either continuous mode or a
handshaked (gated clock) mode:




Signal
Non-handshake
Handshake


DATA
output
output


CLOCK
output
output


SYNC
output
input


                                 Table 6.2

In either mode, data changes on the rising edge of the clock.
Data should be sampled on the falling edge of the clock.

    In continuous clock (non-handshake) mode there are 128 clock
cycles per sample period or frame. SYNC will go high for the
first 16 bits of a sample period and then low for the remaining
96 bits. In each sample period eight 16 bit words or samples are
transferred. Data words are transmitted MSB first, end-on-end,
with no gaps in between them. All eight samples may not contain
valid data depending on the source.

    The CODEC DAC is a stereo circuit and can only process two
tracks simultaneously. Bits 12 and 13 of the Sound Mode Control
register are used to select a pair of samples from each group of
eight to be sent to the DAC. Note that not all samples in the
frame may be valid. For example, when data is coming from the
playback DMA and less than 8 track playback is selected, tracks 7
and 8 are not valid. The DAC port cannot operate in gated clock
mode.

    In Handshaked mode SYNC becomes an input. The external
device will pull SYNC high, and if the source device is ready,
CLOCK will become active for 16 cycles (or one word) together
with DATA. SYNC is sampled by the source device at the end of
each word. If SYNC is high and another word is ready to be sent,
CLOCK and DATA will become active for another 16 cycles. A
minimum of two clock periods will always be inserted between data
words.


    The CODEC port has 256 bit-clock cycles per frame. There are
four sub-frames per frame. Each sub-frame consists of two 32 bit
words. The first half of each word is the 16 bit sample (left
sample first). The second half of each word is a control field
for the CODEC. Only the first two sub-frames of each frame are
used. The contents of the AUX A and AUX B Control registers are
output for the control fields of of the first two sub-frames of
the channel sent to the CODEC DAC. The contents of the control
fields from the CODEC ADC input channel can be read in the AUX A
and AUX B input registers.

    The conversion of one format to another is handled
automaticaly by the matrix.

6.3 DMA Channels

    There are two uni-directional DMA channels in the sound sub-
system. The Playback channel transfers data from system memory to
the switching matrix. The Record channel stores data received
from the switching matrix into system memory.

    Two channels of DAC are provided. They are intended to be
used as the left and right channels of a stereo system. Of
course, they are mixed together when fed to the internal speaker.
A mono mode is provided which will feed the same data to both
channels simultaneously (STE/TT compatible 8 bit modes only). The
only restriction placed on mono mode is that there must be an
even number of samples (see data format section for details).

6.3.1  Memory Data Format and Organization

    In the 8-bit modes (playback only) each sample is stored as
an eight bit quantity. The most significant bit is the sign and
the other seven bits are magnitude. In the stereo 8-bit modes
there is one word per sample, the upper byte contains the left
channel sample and the lower byte contains the right channel
sample. In the 8-bit mono mode bytes are accessed sequentially.
However, they are still fetched a word at a time. Therefore,
there must be an even number of samples in a frame of mono data.

    In the 16-bit stereo mode each sample is stored as a word in
memory. The most significant bit is the sign and the other
fifteen bits are magnitude. The left channel word is first with
the remaining words alternating right-left-right etc. The DMA
channel into memory (record) can only store samples in the 16 bit
form.

    A group of samples in contiguous memory is called a frame
(not to be confused with a group of eight samples on the SSI port
also referred to as a frame). A frame may be played once or can
automatically be repeated forever.  Frames occupy a contiguous
block of memory and are specified by their starting and ending
addresses. The ending address is the address of the last sample +
2 (the address of the word following the last sample). The SCNT
and SINT signals are generated at each frame boundary. Frames may
be linked together by defining a new frame while the current
frame is being played. The new frame will begin at the end of the
current frame.

    SINT and SCNT are similiar signals which indicate frame
boundaries. Both signals are low while the selected DMA channel
is transferring a frame and go high between frames or when the
DMA channel is inactive. Each signal can be independently
programmed to come from either the Playback or Record DMA
channels. SINT connects to the MFP-1 GPIP7 so can be used to
generate an interrupt or polled. SCNT feeds the MFP-1 timer A
input so can be used to count frames.

    As an example, suppose you have three frames (A, B, and C)
and we want to play frame A once, then play frame B five times,
and finally play frame C twice. To accomplish this you can do the
following:

1.  Setup frame A.

2.  Write 03h to the sound DMA control register to start playing
    with repeat.

3.  Setup timer A to use an external clock, initialize its count
    to 05h, and have it interrupt when count = 0.

4.  Setup frame B.

5.  Go do something else until interrupted.

6.  Setup frame C.

7.  Setup timer A count to 03h.

8.  Go do something else until interrupted.

9.  Write 1 to the sound DMA control register to cause playing
    to stop at the end of the frame.

    Note If we had loaded the sound DMA control register with a
1 in step 2, frame A would have been played once and sound would
have been disabled. A zero can be written to the sound DMA
control register at any time to stop playback immediately.

    The DMA channel does not determine how the samples are
defined, only their location in memory and the order in which
they are handled. The data need not be digitized sound at all. If
the data is to be monitored by the internal DAC or if the track
select function is to be used, then the samples must conform to
the structure of digitized sound.

6.3.2  Multitrack Playback

    When operating in continuous clock mode the SSI style ports
transfer data in 128 bit units called frames (not to be confused
with a block of contiguous memory also called a frame). Each SSI
frame consists of a group of eight 16 bit samples. The eight
samples can be treated as one sample each of 8 seperate signals
or tracks. When this is the case, bits 8 and 9 of the Sound Mode
Control register (IO+8920h) select which of the eight samples in
the SSI frame receives the data coming from the playback DMA. Two
track play puts data into the first two samples of each SSI
frame, four track play into the first four, and so forth. For
eight track playback all samples of the SSI frame are filled with
data. If less than eight tracks are selected, the unused samples
are not defined. In no case is any data coming from memory
skipped nor are samples positions within the SSI frame skipped.
All data fetched from memory is sent to the port. The frame is
always filled in order. Thus it takes twice as many SSI frames to
transfer the same memory frame of data when 4 track playback is
selected as it does when 8 track playback is selected. Track
selection does not function when gated clock mode is used.

    The DMA hardware always fetches the samples sequentially
from memory. The meaning of the samples is up to external
hardware. For example, if four tracks are selected then the first
four samples of each group of eight samples are output. The four
samples are fetched from ascending word memory locations. A
maximum of eight tracks (four stereo channels) can be selected.
Note that selecting more tracks for a given sample rate increases
both the memory required and the memory bandwidth used by DMA.

6.3.3  DMA Sound Record

    Digital sound data can be recorded into memory. Any data
present in the area of memory defined by the frame will be
replaced with incoming samples. The frame is defined for record
exactly as it is for playback. Bit 7 in the DMA Sound Control
register (IO+8900h) selects whether the playback or record
register set is addressed. The two independent register sets are
identical and occupy the same IO locations.

    DMA stores the first left channel sample received after the
DMA has been enabled then alternating right and left samples
(same format as 16-bit stereo playback). Multiple frames can be
combined just as during playback. However, if the frame is
allowed to repeat, that is store data into the same memory range,
the original data will be overwritten. Software doing record will
probably use the frame repeat to alternate between two buffers so
that one buffer can be written to disk while the other is
filling.

    Track selection via the Record Control Register selects
samples from each group of eight to be stored in memory in a way
simlilar to track selection in playback (see the previous
section). Selecting tracks to record should only be done when
recording from a SSI style port operating in continuous clock
mode. The data from tracks not selected is lost. 

6.3.4  External Digital Sound Data

    FALCON will have a rear panel connector for input and output
of the digital sound data. Both the DSP SSI port and an
auxilliary SSI like port appear on the connector. SSI like means
that the signal functions and timing are the same as for the DSP
SSI port. A master clock may be generated by the external device
to produce specific sample rates or to synchronize data
transmission.




Digital Sound Data Connector


pin
signal
pin
signal


1
GPIO0
14
ground


2
GPIO2
15
DSP SRD


3
GPIO1
16
ground


4
Ext data out
17
+12 VDC (100ma max)


5
Ext data out clock
18
ground


6
Ext data out sync
19
Ext data in


7
not connected
20
Ext data in clock


8
ground
21
Ext data in sync


9
+12 VDC
22
INT (interrupt)


10
ground
23
DSP STD


11
DSP SC0
24
DSP SCK


12
DSP SC1
25
ground


13
DSP SC2
26
External Clock


                                 Table 6.3

    Three general purpose I/O signals have been added. These are
programmable as inputs or outputs via the registers at xxFF8940h-
xxFF8943h.

6.4 Matrix and Sound DMA Control Registers




xxFF8900 - Sound DMA Control Register (RW)


 D15              D8 
 D7D0 


0000
sc
si
rs
0
rf
re
00
pf
pe


    si - SINT source select
    00 - SINT high
    01 - play (default)
    10 - record
    11 - play OR record

    sc - SCNT source select
    00 - SCNT high
    01 - play (default)
    10 - record
    11 - play OR record

    rs - register set select (0=playback register set)

    rf - record frame repeat (0=single frame)
    re - record DMA enable (1=on)

    pf - playback frame repeat (0=single frame)
    pe - playback DMA enable (1=on)

Sound DMA address pointers:

xxFF8915 rw   Sound frame base addr upper-upper byte
xxFF8903 rw   Sound frame base addr upper-middle byte
xxFF8905 rw   Sound frame base addr lower-middle byte
xxFF8907 rw   Sound frame base addr lower-lower (7 bits)

xxFF8917 r    Sound frame addr upper-upper byte
xxFF8909 r    Sound frame addr upper-middle byte
xxFF890B r    Sound frame addr lower-middle byte
xxFF890D r    Sound frame addr lower-lower (7 bits)

xxFF8919 rw   Sound frame top addr upper-upper byte
xxFF890F rw   Sound frame top addr upper-middle byte
xxFF8911 rw   Sound frame top addr lower-middle byte
xxFF8913 rw   Sound frame top addr lower-lower (7 bits)

Note:    The sound frame address registers exist on the odd
         bytes only.






xxFF8920 Playback Mode Control Register (RW)


D15              D8
D7D0


00
pms
00
pts
md
0000
pc


    pms - Playback monitor select
    00 - tracks 1 & 2
    01 - tracks 3 & 4
    10 - tracks 5 & 6
    11 - tracks 7 & 8
    
    pts - Playback track select
    00 - 2 tracks
    01 - 4 tracks
    10 - 6 tracks
    11 - 8 tracks

    md - play mode
         00 - 8 bit stereo
         10 - 8 bit mono
         X1 - 16 bit stereo

    pc - sample rate prescaler select1
    00 - /1280
    01 - /640
    10 - /320
    11 - /160

FF8922   rw   MicroWire data register2
FF8924   rw   MicroWire mask register

Note 1:  Only effective if the internal clock prescaler is off.
         (xxFF8935 - D0-D3=0000)

Note 2:  The Microwire registers are dummy registers existing
         for compatibility only and must be accessed as words.




     xxFF8930 Data Path and Clock Matrix Source: SRC (RW)


D15 D8
D7D0


CODEC xmit1
Ext. transmit
DSP transmit
Playback


00b0
0abhe
dabhd
sabg



    ab - Clock Selector
         00 - 25.175MHz
         01 - External
         10 - 32MHz
         11 - Reserved
                                    
    d  - DSP Transmit Clock Direction2
         1  - The DSP transmit clock (SCLK) is output.
                                    
                                    
    he  - Sync direction (RECSYNC)3
         1  - Output enabled
                                    
    hd  - Sync direction (SC2)3
         1  - Output enabled
                                    
    g  - Gated clock (handshake) disable4
         1  - continuous clock mode
                                    
    s  - Source for Handshake Control4
         0  - DSP Receive
         1  - External Output
                                    
Note 1:  The CODEC may only select the 25.175Mhz or external
                                  clocks.

                                 Note 2:  SCLK should normally be configured as an output. This
          bit is provided to be used in conjunction with bit 4 to
           disable both the clock and sync outputs when the DSP
             SSI port is controlled exclusively by an external
                                  source.

                                 Note 3:  These bits should only be set to 0 if the corresponding
             port is directed via the matrix to the record DMA
           channel and the record DMA channel is configured for
           gated clock mode. Bit 4 (hd) can also be set to zero
           for the condition outlined in note 2 above. Otherwise
                      these bits should be set to 1.

                                 Note 4:  When bit 0 (g)is set to 0, the clock to the receiving
           port is gated off when no data is available, when the
          sync signal from the port selected by bit 3 (s) is low,
            or when the DMA channel is not active. The selected
           port sync signal should be configured as an input in
           this case. When this bit is set to a 1, the receiving
                     port is sent a continuous clock.

                                 

                                
xxFF8932 DATA and Clock Matrix :Receive (RW) 


D15D8
D7D0


CODEC rcv.
Ext. receive
DSP receive
Record


0ab0
0abhe
dabhd
sabg



    ab - Source Device Data and Clock
         00 - DMA Out (Playback)
         01 - DSP Transmit
         10 - External Input
         11 - ADC
                                    
    d  - DSP Receive Clock Direction1
         1  - The DSP receive clock (SC0) is output.
                                    
    he  - Sync direction (PLYSYNC)2
         1  - Output enabled
                                    
    hd  - Sync direction (SC1)2
         1  - Output enabled
                                    
    g  - Gated clock (handshake) disable3
         1  - continuous clock mode
                                    
    s  - Source For Handshake Control3
         0  - DSP Transmit
         1  - External Input
                                    
Note 1:  SC0 should normally be configured as an output. This
          bit is provided to be used in conjuction with bit 4 to
           disable both the clock and sync outputs when the DSP
             SSI port is controlled exclusively by an external
                                  source.

                                 Note 2:  These bits should only be set to 0 if the corresponding
          port is receiving via the matrix from the playback DMA
          channel and the playback DMA channel is configured for
           gated clock mode. Bit 4 (hd) can also be set to zero
           for the condition outlined in note 1 above. Otherwise
                      these bits should be set to 1.

                                 Note 3:  When bit 0 (g)is set to 0, the clock to the
           transmitting port is gated off when the input FIFO is
           full, when the sync signal from the port selected by
             bit 3 (s) is low, or when the DMA channel is not
              active. The selected port sync signal should be
           configured as an input in this case. When this bit is
          set to a 1, the transmitting port is sent a continuous
                                  clock.

                                 
                                 

                                
xxFF8934 Prescaler for Internal and External Clocks (RW)


D15D8
D7D0


External Clock
Internal Clock


 0000
dddd
0000
dddd


    dddd - Prescaler for  Internal and External Clocks
                                    
         0000 - off1
    0001 - Divide by 2
     .
         1011 - Divide by 12

                                  Note 1:  When the internal clock is prescale value is set to
           0000, the prescale value selected by bits 0 and 1 of
          the Playback Mode Control Register (xxFF8920) will take
                                  effect.

                                 

                                
xxFF8936 DAC and Record Control (RW)


D15D8
D7D0


000000
rr
0000
r
p
e
a



    rr - Record Channel Select
         00 - Record tracks 1 and 2
         01 - Record tracks 1 thru 4
         10 - Record tracks 1 thru 6
         11 - Record tracks 1 thru 8 ( ie. all )
                                    
    r  - Global Sound Reset
         1  - Reset Sound Subsection
         ( Not self clearing )

                                      p  - Input Select1
         0  - CODEC ADC
         1  - PSG
                                    
    e  - Matrix output to CODEC enable2
         1  - Enable matrix data output to the CODEC
                                    
    a  - Alternate data output to CODEC enable1,2
         1  - Enable PSG data output to CODEC
                                    
Note 1:  Bit 2 selects either data from the PSGIN pin or the
          CDDIN pin. That is data from the PSG or from the CODEC
           ADC. The selected data is presented to the matrix and
           to the adder described in note 2. The prototypes and
          early systems will not have the digital PSG available.
            In that case the PSGIN and CDDIN pins are connected
          together and the analog PSG output is fed to the CODEC
                             channel 2 input.

                                 Note 2:  There are two sources of data for the CODEC DAC. Data
           coming from the matrix is enabled into an adder by a
          setting bit 1. The output of the adder is the data sent
           to the CODEC DAC. The other input to the adder is the
                   data selected by bit 2 (see note 1).

                                 

                                
xxFF8938 AUX A Control Field (RW)


D15D8
D7D0


L16-L19
expn
mute
mux
left gain
right gain


    L16-L19 - Left sample 4 least significant bits
                                    
    expn  - Expand

                                    mute  - Mute
       1 - Mute output

                                      mux   - Input Mux1
     00 - Channel 1 (microphone)
     11 - Channel 2 (PSG input)

                                      left gain , right gain
                                    
    0000 - 0 dB gain for ADC
       .
            .     ( 1.5dB increments )
       .
         1111 - 22.5 dB gain for ADC
                                    
Note 1:  Prototypes and early systems will have an analog PSG
            which will be connected to the CODEC ADC channel 2
           input as indicated. Eventually, a digital PSG will be
            used and connected as described under DAC control.
                   Future use of channel 2 is reserved.

                                 

                                
xxFF893A AUX B Control Field (RW) 


D15D8
D7D0


R16-R19
Left Attn
Right Attn
OPort



    R16-R19 - 4 least significant bits for right sample
                                    
    Left Attn - Left Channel D/A Attenuation
                                    
    0000 - No attenuation
      .
      .     ( 1.5 dB steps )
      .
    1111 - 22.5 dB attenuation

                                      Right attn - Right Attenuation in 1.5dB steps
                                    
    OPort- Output Port Control

                                

                               
xxFF893C AUX A Input Field (R)


D15D8
D7D0


L16-L19
Exp
Vld
Oflw
 sts
rev


    Ls - Left Sample L16-L19
     
    Exp - Expand
          0 - no expansion
                                    
    Vld - Valid Data from ADC
          1 - Valid
                                    
    Oflw - Overflow
          10 - Overflow Left
          01 - Overflow Right
                                    
    Sts - Status
          0000 - no error
          0001 - Invalid control field
          0010 - Invalid sync format
          0011 - Serial clock outof valid range
                                    
    rev - Revision Number -> 0000
                                    
    iport - Input Port
          - not supported
                                    
                                    
                                    
                                    
                                   


xxFF893E AUX B Input Field (R)


D15D8
D7D0


R16-R19
0000
0000
iport


    R16 - R19 Right Sample Least significant bits
                                    
    iport - Input Port
        - Not supported
                                    
                                   


xxFF8940 General Purpose I/O Control (R)


D15D8
D7D0


0000
xddd
0000
xccc





           xxFF8940 General Purpose I/O Control (W)


D15       D8
D7D0


XXXXXXXX
XXXX
xccc





             xxFF8942 General Purpose I/O Data (R)


D15        D8
D7D0


0000
xddd
0000
xiii





             xxFF8942 General Purpose I/O Data (W)


D15        D8
D7D0


XXXXXXXX
XXXX
xddd



    ccc - General Purpose I/O Control Register
                                    
          1 - Corresponding bit is an output
                                    
    iii - GPIOx pin state
                                    
    ddd - General Purpose I/O DATA Register (D0 is GPIO0)1
                                    
    x   - reserved
                                    
Note 1:  The value of the data register bit is driven out when
          the corresponding bit of the control register is 1. The
           GPIO pin is an input when the control register bit is
           0. The least significant 3 bits of the data register
          read the state of the pin regardless of its programmed
                                direction.

                                 6.5 Programmable Sound Generator

                                       FALCON contains a PSG circuit compatible with the ST sound
      system. The PSG produces music synthesis, sound effects, and
    audio feedback. With an applied clock input of 2 MHz, the PSG is
      capable of providing a frequency response range between 30 Hz
       (audible) and 124 KHz (post-audible). The generator places
      minimal amount of processing burden on the main system (which
    acts as the sequencer) and has the ability to perform using three
     independent voice channels. The three sound channel outputs are
     combined and fed to both the left and right channel 2 inputs of
     the ADC. The resulting 16-bit digital data stream is available
          for processing or to be recorded via DMA into memory.
                                    
      (Reference Engineering Hardware Specification of the Atari ST
                       Computer System, page 10.)
                                    
6.6 Musical Instrument Digital Interface (MIDI)

                                       The MIDI allows the control of music synthesizers,
        sequencers, drum boxes, and other devices possessing MIDI
      interfaces. High speed (31.25 Kbaud) serial communication of
     keyboard and program information is provided by two ports, MIDI
     OUT and MIDI IN (the MIDI OUT also includes MIDI through data).
                                    
    The MIDI communicates through the MC6850 Asynchronous
     Communications Interface Adapter (ACIA) to the system. The data
      transfer rate is a constant 31.25 Kbaud of 8-bit asynchronous
    data.  (Reference Engineering Hardware Specification of the Atari
     ST Computer System, pages 11 and 17 for more information on the
                             MIDI and ACIA.)
                                    
                        6.7  MICROWIRE Interface
                                    
    The MICROWIRE interface has been deleted from the current
      design. The Microwire registers are simulated in the current
      circuit only to prevent older software attempting to use the
                       interface from locking up.
                                    
                                    
                                    
Section 7VME Bus

                                    Some FALCON systems provide for expansion by implementing
        the industry standard VMEbus, revision C.1. A FALCON VME
    interface can also accommodate alternate bus masters such as DMA
                                 cards.
                                    
7.1 System Controller

                                       The main system board serves as the VMEbus system controller
        (a slot 1 "card") and implements the following functions:
                                    
    * VMEbus master interface
    * VMEbus slave interface
    * VMEbus interrupt handler
    * VMEbus interrupter
    * VMEbus arbiter
    * VMEbus utility bus driver
                                    
7.2 VME Bus Master Address Partitioning

                                       The FBUS accesses the VME bus in all areas of the 4 Gigabyte
       address space, excluding those which are dedicated to local
      resources.  The VME bus portion of the address map is further
     subdivided to support the 32, 24, and 16 bit addressing modes.
    The beginning of the VME bus A32 space is configured adjacent to
      the end of fast memory in order to allow contiguous expansion
                                 memory.
                                    
    A portion of the VME bus space is dedicated to D16
    transfers.  VME bus slaves which are limited to D16 transfers can
    be accessed in this area.  When the VMEC receives a three or four
      byte transfer request from an FBUS master to a slave in this
         address space, the request will be divided into two D16
    transfers, with data routed to the correct byte lanes.  A single
    acknowledgement will be sent to the FBUS master once the process
                              is completed.
                                    
7.3 VME Bus Slave Address Partitioning

                                       The VME bus Slave Interface provides access to FBUS system
      resources by other masters on the VME bus. Slave accesses for
        each address space may be inhibited via the VME interface
    configuration register (xxFF8080). VME bus masters may access all
      FBUS resources when operating in the A32 region. The starting
     address for VME bus A32 slave accesses is programmable via the
      VME slave starting address register (xxFF8098). The starting
    address register provides an offset which is subtracted from the
      VME bus address in order to determine the FBUS location to be
     accessed.  VME bus masters may access FBUS Fast Memory only in
    A32 space, due to the limitation of the 16 Megabyte range of the
       A24 space. VME bus masters may access a subset of the FBUS
      resources when operating in the A24 region. Only the last 16
      Megabytes, also known as the ST image, may be accessed. This
       excludes fast memory from being accessed by an A24 VME bus
     master.  The VME bus starting address for access to the FBUS is
     fixed at 000000 (hex), but may be inhibited to accommodate the
       need to use other A24 slaves on the VME bus, while allowing
                  access to the FBUS by an A32 master.
                                    
7.4 VME Interrupter

                                       A FBUS master can write to bit 0 of the I/O address
    (0x00FF8E06) to generate a level 3 interrupt on the VMEbus. When
    set to 1, it generates a VME bus level 3 interrupt. When cleared,
       the interrupt request is taken away. If a VME bus interrupt
     handler acknowledges this interrupt, the VMEC responds with the
        contents of the VME interrupt vector register (xxFF8097).
                                    
    Note that the Falcon level 3 interrupt must be masked off
        (either by setting the processor's IPL or by masking the
    interrupt in the Falcon system controller) or the Falcon CPU will
      be immediately interrupted in which case the local interrupt
    acknowledge is autovectored and the VME bus does not participate.
                                    
    FBUS interrupt levels 5 and 6 (from the SCC and MFP/DSP
      respectively) also generate the corresponding VME interrupts.
    Normaly these interrupts are seviced by the FBUS master. They can
     however be masked to the FBUS and serviced by a VME bus master.
      The VMEC will respond to VME interrupt acknowledge cycles for
    levels 3, 5, or 6 only if the Falcon source for the interrupt is
    present. Levels 5 and 6 supply the vector received from the FBUS
    as the status/ID. The VMEC will pass the IACK signal down the VME
                IACK daisy chain if it does not respond.
                                    
7.5 VME Interrupt Handler

                                       The VMEC will act as a VME bus interrupt handler.  VME bus
    interrupt requests are signalled to the local microprocessor (if
         not masked). When the FBUS master performs an interrupt
     acknowledge cycle for a VME interrupt, the VMEC generates a VME
    bus interrupt acknowledge cycle. The status/ID byte from the VME
                bus is provided to the FBUS as a vector.
                                    
7.6 VME Arbiter

                                       The VMEC implements a single level arbiter on VME level 3.
      The arbiter can be programmed for release on request (ROR) or
     release when done via the VME interface configuration register
                               (xxFF8080).
                                    
7.7 VME Utility Functions

                                       The Falcon VME interface provides the VME utility signals:
                 SYSCLK, SYSRESET*, SYSFAIL*, and BERR*.
                                    
    SYSRESET* is asserted when the FBUS reset is asserted AND
    vice versa. SYSFAIL* is asserted via the utility control register
     (xxFF8083). SYSFAIL* can also cause a level 7 interrupt on the
        FBUS. The bus timer function can be disabled via the VME
     interface configuration register. If enabled the timeout period
                         is approximately 64us.
                                    
7.8 VME Registers

                                   Int                   erface Configuration Register

                                       Address = 00FF8080 (or FFFF8080):
                                    
    D7 - A32 slave interface enable (0=no 1=yes)
    D6 - A24 slave interface enable (0=no 1=yes)
    D5 - A32 master interface enable (0=no 1=yes)
    D4 - A24 master interface enable (0=no 1=yes)
    D3 - A16 master interface enable (0=no 1=yes)
    D2 - Bus Requester mode  (0=Release on Request
    1=Release when Done)
    D1 - reserved
    D0 - Cache Inhibit Signal for A32/D32 space (0=yes 1=no)
                                    
                        Utility Control Register
                                    
    Address = 00FF8083 (or FFFF8083):
                                    
    D7 - SYSRESET* pulse width (0=200ms 1=1us)
    D6-D2 reserved
    D1 - Bus Timeout enable (0=no 1=yes)
    D0 - SYSFAIL - (0 = assert)
                                    
                            Interrupt Vector
                                    
    Address = 00FF8097 (or FFFF8097):
                                    
    This register contains the interrupt vector which is
      supplied as the VMEbus Status/ID in response to an interrupt
    acknowledge cycle from a VMEbus master due to a VMEbus interrupt
     generated from the Falcon system motherboard.  Please note that
    the interrupt level is encoded onto the lowest three data bits of
                           the Status/ID byte.
    The VMEC will determine whether to supply the value of this
    register or let the interrupting device supply a vector.  This is
         accomplished by bringing the possible sources of VMEbus
     interrupts into the VMEC.  Devices which signal an autovectored
     interrupt to the FBus must use this register when requesting an
    interrupt to the VMEbus.  Devices which are capable of supplying
      an interrupt vector will supply the Status/ID to the VMEbus.
                                    
    D7 - Int Vector bit7
    D6 -   "            6
    D5 -   "            5
    D4 -   "            4
    D3 -   "            3
    D2 - Int Level bit 2
    D1 -   "            1
    D0 -   "            0

                           Slave Starting Addr           ess Register

                               Address = 00FF8098 (or FFFF8098):
                                    
    This register provides the value at which address zero on
      the FBus appears when it is accessed as an A32 VMEbus slave. 
    This value is used as an offset to provide the ability to access
    the entire FBus as a VMEbus slave, since most VMEbus masters also
     will contain some local resources which start at address zero. 
     This value is subtracted from the VMEbus address to derive the
          address which is supplied from the VMEC to the FBus.
                                    
    D7 - VMEbus address31
    D6 - 30
    D5 - 29
    D4 - 28
    D3 - 27
    D2 - 26
    D1 - 25
    D0 - 24

                                
                                
                                
                                Section 8                        System Bus

                                    The following description of the FALCON internal bus (FBUS)
      assumes an intimate knowledge of both the 68030 and 68040 bus
    definitions. A thorough study of the Motorola user's manuals for
     both processors is highly recommended (see reference section).
                                    
8.1 FBUS Summary

                                       The internal bus for FALCON, called the FBUS, is a hybrid of
      the 68030 and 68040 busses. The objective is an architecture
    which will accommodate both processors with a minimum of external
          glue logic. The FBUS is thus a subset of either bus.
                                    2
    The FBUS defines two modes of operation. One which is 030
     like and the other 040 like. Most FBUS signals are defined such
     that they can be connected directly to the corresponding signal
     of either processor. Timing and function of these signals will
     therefore depend the current bus mode. Logic in each slave port
     must adjust how these signals are interpreted accordingly. The
       FBUS signal BMODE shall identify the current bus mode. FBUS
    masters can use either mode and masters using different modes can
                        coexist on the same bus.
                                    
    In order to keep the glue logic reasonable, many compromises
    were necessary. The FBUS does not support the dynamic bus sizing
      of the 030 or bus snooping by the 040. CPU control involving
          halts or retries is not supported in either bus mode.
                                    
    The FBUS does offer unique features. The FBUS wide mode
      allows devices to connect directly to the 64 bit video memory
    data bus permitting double longword transfers.  The FBUS defines
     a burst write in 030 bus mode, which, although never used by a
              68030, is available to a 030 mode bus master.
                                    
    Slave ports must monitor the BMODE signal and support either
    bus mode on a cycle by cycle basis. Bus masters must drive BMODE
    according to the mode they use. The particular timing on the bus
        should conform to or be compatible with the 33Mhz timing
     specification for the MC68030 or MC68040 for the corresponding
                                bus mode.
                                    
    The video memory is the only 64 bit wide port currently
    defined in FALCON. The MCU will monitor WID0-WID1 and drive WEN.
     Masters connected to the memory data bus may use wide mode for
    data transfers. Wide mode is explained more fully later. Masters
    connecting to the 32 bit FBUS data section may not use wide mode.
         Slaves other than the MCU must ignore wide mode cycles.
                                    
    All ports in FALCON are 32 bit ports to the FBUS (except for
      video memory as described above). Slaves ports must drive or
     receive data on the byte lanes appropriate to the address. All
       size/address combinations for 32 bit ports and burst reads
     defined by the 68030  are defined for the FBUS in 030 mode. All
     size/address combinations and line reads and writes defined by
                  the 68040 are defined for the FBUS. 
                                    
8.2 SIGNAL DEFINITION

                                   8.2                        .1  Signal Mapping

                                   
                                  

FBUS to Processor Signal Correspondence


FBUS signal
68030 signal
68040


A0-A31
A0-A31
A0-A31


D0-D31
D0-D31
D0-D31


TT0
CBREQ
TT0


TT1
'1'
TT1


TM0-TM2
FC0-FC2
TM0-TM2


SIZ0-SIZ1
SIZ0-SIZ1
SIZ0-SIZ1


LOCK
RMC
LOCK


AV
AVEC
AVEC


TA0
STERM
TA


TA1
CBACK
TBI


TE
BERR
TEA


R/W
R/W
R/W


CO
CIOUT
CIOUT


CI
CIIN
TCI


ST0
AS
TS


ST1
DS
TIP


I0-I2
IPL0-IPL2
IPL0-IPL2


IP
IPEND
IPEND


CLK
CLK
BCLK


RES
RESET
RSTI,RSTO 1


BR
BR
BR 2


BG
BG
BG 2


BA
BGACK
BB 2


BMODE
--
--


WID0-WID1
--
--


WEN
--
--


SIZ2




                                 Table 8.1

1 The RSTI and RSTO signals of the 68040 will be combined by
external circuitry into the FBUS signal RES. The ideal situation
would be for the 68040 RSTO signal to drive the FBUS and the FBUS
to drive the 68040 RSTI input without colliding (so the 040 reset
instruction will not cause a reset of the processor), but this
circuit is not yet designed and the final implementation may be
different.

2 An external bus arbiter circuit will be necessary when using a
68040. The processor BR, BG, and BB will connect to the arbiter
circuit as will the FBUS signals BR, BG, and BA. The 68030 BR,
BG, and BGACK will connect directly to the FBUS BR, BG, and BA
respectively. Attempts will be made to maintain consistent timing
for bus arbitration with either processor.

68030 signals not supported:
HALT
DBEN
CDIS
MMUDIS
REFILL
STATUS
DSACK0
DSACK1

68040 signals not supported:
TLN0-TLN1
UPA0-UPA1
LOCKE 1
DLE
SC0-SC1
MI
CDIS
MDIS
PST0-PST3
TCK,TMS
TDI,TDO,TRST


    Unsupported outputs are not connected. Unsupported inputs
are tied to an inactive level.

1 LOCKE may be used by the external arbiter circuit but is not
defined for the FBUS.

8.2.2  FBUS signal definition




FBUS Signal Definition


Signal
Direction
(from master)
Function


A0-A31
O
Address bus


D0-D31
IO
Data bus


TT0-TT1
O
Transfer type 1


TM0-TM2
O
Transfer modifier 1


SIZ0-SIZ1
O
Transfer size 1


LOCK
O
Bus cycle lock 1


AV
I
Auto vector request 1,3


TA0-TA1
I
Transfer acknowledge 1,3


TE
I
Transfer error 1,3


R/W
O
Read / write


CO
O
External cache inhibit 2


CI
I
Cache inhibit 2,3


ST0-ST1
O
Transfer strobes 1


IO-I2
--
Interrupt level 2


IP
I
Interrupt pending 2


CLK
I
Bus clock


RES
IO
System reset 3


BR
O
Bus request 3


BG
I
Bus grant 4


BA
O
Bus acknowledge 3


BMODE
O
Bus mode select 5


WID0-WID1
O
Wide mode select 3,6


WEN
I
Wide mode enable 6


SIZ2
O
Transfer size (wide mode only)


                                 Table 8.2

1 Signal or signal groups function or timing is different in 030
bus mode and 040 bus mode.

2 These signals have meaning to the CPU. They will probably be
ignored by most masters. CO and IP are always driven by the CPU.

3 Indicates wire-or'd signals. Any master driving these signals
must only drive them low, except AV, TA0-TA1, TE, CI, BA, and
WID0-WID1 should be actively negated before release. Normally RES
is an input to devices on the bus. Any master may drive RES low
to reset the system, but note that the reset state returns bus
ownership to the processor so an alternate master which drives
RES low must release the bus and arbitrate after RES returns
high.

4 The BG signal is an output from the arbiter, the 68030 BG
output or the external arbiter with a 68040. It is an input to
the first master in the BG daisy chain.

5 The BMODE signal should only change when bus ownership is
transferred. The timing for BMODE is the same as BA and like BA,
BMODE is a wire-or'd signal and should only be driven low. 030
mode bus masters need not drive BMODE since a pull-up will insure
it is high. Slave ports must monitor BMODE to determine how they
respond.

6 Wide mode is provided to allow devices to connect to the 64 bit
video memory data bus instead of the FBUS 32 bit data bus. These
two busses are connected via the funnel logic which is controlled
by the MCU. A separate section of this specification provides a
complete description of wide mode operation.


8.3 FBUS 040 Mode

    The BMODE signal is LOW for 040 mode.

8.3.1  General Description

    Ports should be designed to work properly with 33mhz 68040
timing to support FBUS mode 0. Refer to the 68040 users manual
for AC timing specifications. Designers of ports supporting line
bursts should note that ports must ignore A0 and A1 and
internally increment A2 and A3 during line burst cycles. Ports
not supporting bursts must drive FBUS TA1 (040 TBI). Most ports
may ignore CI and CO. Hardware on the mother board will drive CI
for all accesses to IO space. System hardware will also drive the
TE signal after about 16us if a cycle is not acknowledged. Only
ports which respond to interrupt acknowledge cycles and do not
supply a vector should drive AV. Ports should NOT respond to 040
alternate function code cycles. Only ports connecting to the 64
bit memory data bus and capable of 64 bit data transfers may
respond when WID1 is low.

    Masters should meet the AC timing specification for the
32mhz 68040. Masters which do not have internal caches should
ignore CI and not drive CO or drive it high. Masters may not use
the 040 alternate function code cycle. Masters which never do
interrupt acknowledge cycles may ignore AV. Masters should not
drive IP but may monitor it to see an interrupt is pending.
Masters may monitor BR to see if another master needs the bus.
Masters which keep the bus for long times should give up the bus
as quickly as possible when another needs it. In NO case may a
master keep the bus for more than 256 contiguous clock cycles.

8.3.2  040 Mode Signal Definitions




040 Mode Transfer Modifiers


TM2
TM1
TM0
Normal and MOVE16 accesses only 1


0
0
0
Data cache push access


0
0
1
User data access


0
1
0
User code access


0
1
1
MMU table search data access


1
0
0
MMU table search code access


1
0
1
Supervisor data access


1
1
0
Supervisor code access


1
1
1
Reserved


                                 Table 8.3

1 TM0-TM2 are connected directly to the 68040 TM0-TM2 lines.
These lines carry the interrupt level during acknowledge cycles
and the alternate access function code during alternate logical
function cycles. See the 68040 user's manual for details of the
TMx line usage.




040 Mode Transfer Type


TT1
TT0



0
0
Normal access


0
1
MOVE16 access


1
0
Alternate logical function
code access


1
1
Acknowledge access


                                 Table 8.4

    TT0-TT1 connect directly to the 040 TT0-TT1.




040 Mode Size Encoding


SIZ1
SIZ0



0
0
Longword


0
1
Byte


1
0
Word


1
1
Line (16 bytes)


                                 Table 8.5

    SIZ0-SIZ1 connect directly to the 040 SIZ0-SIZ1.




040 Mode Data Bus Active Sections


Xfer
size
SIZ
1
SIZ
0
A1
A0
D31:
D24
D23:
D16
D15:
D08
D07:
D00


Byte
0
1
0
0
A





Byte
0
1
0
1

A




Byte
0
1
1
0


A



Byte
0
1
1
1



A


Word
1
0
0
0
A
A




Word
1
0
1
0


A
A


Line
1
1
X
X
A
A
A
A


Long
0
0
X
X
A
A
A
A


                                 Table 8.6

8.4 FBUS 030 mode

    The BMODE signal is HIGH for 030 mode.

8.4.1  030 Mode General Description

    Ports should be designed to work properly with 32mhz 68030
timing to support FBUS mode 1. Refer to the 68030 users manual
for AC timing specifications. Designers of ports supporting line
bursts should note that ports must ignore A0 and A1 and
internally increment A2 and A3 during line burst cycles. Ports
supporting bursts must drive FBUS TA1 (030 CBACK) low. Most ports
may ignore CI and CO. Hardware on the mother board will drive CI
for all accesses to IO space. System hardware will also drive the
TE (030 BERR) signal low after 16us if a cycle is not
acknowledged. Only ports which respond to interrupt acknowledge
cycles and do not supply a vector should drive AV. Only ports
connecting to the 64 bit memory data bus and capable of 64 bit
data transfers may respond when WID1 is low.

    Masters should meet the AC timing specification for the
32mhz 68030. Masters which do not have internal caches should
ignore CI and not drive CO or drive it high. Masters which never
do interrupt acknowledge cycles may ignore AV. Masters should not
drive IP but may monitor it to see an interrupt is pending.
Masters may monitor BR to see if another master needs the bus.
Masters which keep the bus for long times should give up the bus
as quickly as possible when another needs it. In NO case may a
master keep the bus for more than 256 contiguous clock cycles.

8.4.2  030 Mode Signal Definition




030 Mode Transfer Modifiers


TM2
TM1
TM0



0
0
0
Reserved


0
0
1
User data access


0
1
0
User code access


0
1
1
Reserved


1
0
0
Reserved


1
0
1
Supervisor data access


1
1
0
Supervisor code access


1
1
1
CPU space access 1


                                 Table 8.7

1 TM0-TM2 are connected directly to the 68030 FC0-FC2 lines. Note
that interrupt acknowledge is a CPU space cycle and the slave
must also decode A1-A3 and A16-A19. See the 68030 user's manual
for details of the FCx line usage.




030 Mode Transfer Type


TT1
TT0



1
0
Burst requested cycle


1
1
Normal cycle


                                 Table 8.8

    TT0 connects to the 030 CBREQ and TT1 is driven high.




030 Mode Size Encoding


SIZ1
SIZ0



0
0
Longword


0
1
Byte


1
0
Word


1
1
Three byte


                                 Table 8.9

    SIZ0-SIZ1 connect directly to the 030 SIZ0-SIZ1.




030 Mode Data Bus Active Sections


Xfer
size
SIZ
1
SIZ
0
A1
A0
D31:
D24
D23:
D16
D15:
D08
D07:
D00


Byte
0
1
0
0
A





Byte
0
1
0
1

A




Byte
0
1
1
0


A



Byte
0
1
1
1



A


Word
1
0
0
0
A
A




Word
1
0
0
1

A
A



Word
1
0
1
0


A
A


Word
1
0
1
1



A


3-byte
1
1
0
0
A
A
A



3-byte
1
1
0
1

A
A
A


3-byte
1
1
1
0


A
A


3-byte
1
1
1
1



A


Long
0
0
0
0
A
A
A
A


Long
0
0
0
1

A
A
A


Long
0
0
1
0


A
A


Long
0
0
1
1



A


                                Table 8.10

8.5 BUS ARBITRATION

    The 68030 internal bus arbiter will perform arbitration for
the FBUS when it is the system CPU. When a 68040 is used, an
external arbiter circuit which conforms to similar timing will
perform the bus arbitration. FBUS master designs should arbitrate
correctly with a 32mhz 68030. Note that BMODE may only change
states at the time BA changes. 040 masters may drive BMODE low
using the same enable that is used to drive the BA signal low.
030 masters need not drive BMODE at all.
    All masters should have a BG input and output so that a
daisy chain may be implemented. A master which receives a low on
its BG input should drive its BG output low as quickly as
possible if it is not requesting the bus. A master requesting the
bus should not drive its BG output low until it releases the bus
(provided its BG input is still low). Also once a master has
passed the BG along, should it subsequently decide to request the
bus, may NOT drive BR low until its BG input has returned high. 
This will insure that the BG daisy chain sequence is preserved.
The master connected directly to the FBUS BG signal is the first
in the chain and so has the highest priority. Subsequent master's
BG inputs are connected to the previous master's BG output in
order of decreasing priority.  The lowest priority master's BG
output will not be connected.

Notes on bus arbitration:

    To request the bus, a master drives BR low. A master may
    drive BR low anytime except when it is driving its BG output
    low. If a master is driving its BG output low and it decides
    to request the bus, it must wait until it drives its BG
    output high (as a result of its BG input going high) before
    it drives BR low.

    If a masters BG input goes low and it is not driving BR low,
    then the master should drive its BG output low with a
    minimum of delay. If a masters BG input goes low and it is
    driving BR low, then it must maintain its BG output high.

    A master may drive BA low only when; it is driving BR low
    AND its BG input is low AND its BG output is high AND ST0
    and ST1 are high AND TA0 is high AND BA is high AND a rising
    edge occurs on CLK.

    Once a master has driven BA low, it should release BR.

    Once a master has driven BA low, it may drive appropriate
    bus lines to perform defined bus cycles.

    Upon completion of the last bus cycle a master wishes to
    perform, the master should release the bus by tristating its
    bus drivers and releasing BA. Note that bus control signals
    ST0-ST1 and TA0-TA1 should not be tristated until they have
    been actively negated. BA should also be actively negated.

    Once a master has released BA and if its BG input is low, it
    should drive its BG output low.


8.6 WIDE MODE

    Four control signals (WID0, WID1, WEN, and SIZ2) have been
added to the FBUS to allow devices to connect directly to the 64
bit video memory data bus. Thus connected, masters which exchange
large amounts of data with wide slave ports (video memory is the
only wide slave port currently defined or envisioned for FALCON)
have twice the available bandwidth. Provision is also made for
wide masters to access the 32 bit data bus via the funnel logic.

WID0 and WID1 are control signals from the master which indicate
the type of transfer requested.




Wide Mode Signal Definition


WID1
WID0
Type Transfer


1
1
Normal transfer


0
1
Direct access of video memory data bus


1
0
Access of FBUS via funnel logic


0
0
Access of wide device via funnel logic


                                Table 8.11

    WID0-WID1 are normally kept high by pullups so standard FBUS
masters need not drive these signals. A wide master can access
the video memory using 64 bit (double longword) transfers by
driving WID1 low. When WID1 is driven low the SIZ2 signal is used
in conjunction with the SIZ0, SIZ1, A0, A1, and A2 signals to
select the byte(s) of the 64 bit data.



Wide Mode Data Bus Active Sections (030 mode)


SIZ
210
A
210
D63:
D56
D55:
D48
D47:
D40
D39
:32
D31:
D24
D23:
D16
D15:
D08
D07:
D00


000
000
A
A
A
A
A
A
A
A


001
000
A









001
001

A








001
010


A







001
011



A






001
100




A





001
101





A




001
110






A



001
111







A


010
000
A
A








010
001

A
A







010
010


A
A






010
011



A
A





010
100




A
A




010
101





A
A



010
110






A
A


011
000
A
A
A







011
001

A
A
A






011
010


A
A
A





011
011



A
A
A




011
100




A
A
A



011
101





A
A
A


100
000
A
A
A
A






100
001

A
A
A
A





100
010


A
A
A
A




100
011



A
A
A
A



100
100




A
A
A
A


101
000
A
A
A
A
A





101
001

A
A
A
A
A




101
010


A
A
A
A
A



101
011



A
A
A
A
A


110
000
A
A
A
A
A
A




110
001

A
A
A
A
A
A



110
010


A
A
A
A
A
A


111
000
A
A
A
A
A
A
A



111
001

A
A
A
A
A
A
A


                                Table 8.12




Wide Mode Data Bus Active Sections (040 mode)


SIZ
210
A
210
D63:
D56
D55:
D48
D47:
D40
D39
:32
D31:
D24
D23:
D16
D15:
D08
D07:
D00


000
XXX
A
A
A
A
A
A
A
A


001
000
A









001
001

A








001
010


A







001
011



A






001
100




A





001
101





A




001
110






A



001
111







A


010
000
A
A








010
010


A
A






010
100




A
A




010
110






A
A


100
000
A
A
A
A






100
100




A
A
A
A


X11
XXX
A
A
A
A
A
A
A
A


                                Table 8.13

    A wide master which does not connect to the 32 bit data bus
may access the FBUS via the funnel logic by driving WID0 low.
With WID0 driven low, all FBUS signals operate normally and
devices on the FBUS see no difference to any other cycle. The MCU
recognizes WID0 low and controls the funnel logic to couple the
data busses for the transfer. A word of caution for wide masters
operating in this way, the funnel logic will introduce delay in
the data path. The master must allow for this delay so as not to
violate FBUS timing and to insure proper operation.

    The WID0 and WID1 low case is provided for wide masters
containing registers which must be accessible to other normal
FBUS masters. When such a wide master does not own the bus but
detects an access to one of its internal registers, it may drive
WID0 and WID1 low to indicate that the MCU should enable the
funnel logic to couple the data busses. Again the funnel logic
delay will be present and the wide master responding as a slave
must compensate. 

    Discussion of wide mode so far has assumed that the video
memory data bus is free when the data transfer begins. Standard
and wide masters doing transfers which use the video memory data
bus, such as CPU to memory or wide master to FBUS, arbitrate for
the FBUS but not for the video memory data bus. The MCU however,
also exchanges data between the video memory data bus and the
video circuit without arbitrating the FBUS. The WEN signal is
provided to prevent conflicts on the video memory data bus. The
WEN is driven by the MCU and must be monitored by wide masters.
When a transfer of a wide master via the video memory data bus is
initiated, the MCU will drive WEN low if the video memory data
bus is free. If WEN is not driven low, then the wide master may
not drive the video memory data bus until it is. Also the MCU
will not enable the funnel logic to drive the data bus either
thus preventing conflicts. Note that in order to give the MCU
time to drive the WEN signal and the master time to recognize it,
there is an extra clock cycle inserted between the assertion of
address and the assertion of the strobes ST0 and ST1 for all
cycles where WID0 or WID1 is driven low.

    Of course a wide master may connect to both the 64 bit video
memory data bus and the 32 bit FBUS data bus. In that case the
master may access or be accessed via standard FBUS cycles using
the 32 bit data bus and only use the 64 bit bus for transfers to
or from video memory. Such a master need only drive WID1 and must
only monitor WEN when using the video memory data bus.





Section 9   SYSTEM

9.1 Boot Sequence

    The FALCON ROM will contain power-on diagnostics to verify
that the processor, memory, and I/O subsystems are functional.
The boot sequence begins after these diagnostic tests are
successfully completed.

    The boot process has three general stages:

1)  The ROM boot procedure searches peripherals for boot code.

2)  If found, this boot code, or device boot, is loaded by the
    ROM boot. The boot loaded from the hard disk is referred to
    as the "hard disk boot", or simply, "disk boot". The device
    boot consists of 512 bytes of boot code from the "boot
    sector" of the device and is loaded at a known point in
    dual-purpose RAM (see Section 2.3). Some devices, such as
    hard disks, load a second sector of boot code that calls
    code in the first sector.

3)  The UNIX boot is loaded by the device boot. It is typically
    a moderately sized program (32 to 64 Kb) that actually loads
    the UNIX operating system. It need not be position
    independent if its location has been agreed upon with the
    device boot.

    The ROM boot procedure's main purpose is to detect boot
devices and load and run the device boot code on these devices.
It checks the following devices in order:
1)  Cartridge
2)  Floppy drive 0
3)  SCSI hard disk drives
4)  Network (if present)]
5)  ROM

    For detailed information on the FALCON boot procedures, wait
for the specification to be written.

9.2 Operating System

    The FALCON is intended for use with Atari's TOS operating
system or ASV.

9.3 Device Drivers

    ASV is supplied with configuration tools which allow device
drivers to be fully configurable with the UNIX kernel.

9.4 Networking Support

     To permit its use in a wide variety of environments, FALCON
may have software support for the Ethernet network, the Internet
networking protocols (TCP/IP), Sun Microsystem's Network File
System (NFS), and/or LocalTalk network protocol.

9.5 Windowing User Interface

    The UNIX operating system may include a windowing user
interface built on the X-Windows (Version 11.4) package.



Section 10  Mechanical Considerations

    Questions and comments on mechanical aspects of FALCON
systems should be directed to Steven Chan and Ira Valenski.

10.1 Power Supply

    See Atari specification C302695-001.

    Approx 150 watts, 5V@22A, +12V@1.2A, -12V@500ma

     The power supply MUST generate a "power good" signal (active
high) that is asserted after the supply voltages are stable, and
is removed before the supply voltages are removed.



Section 11  Memory, I/O, and Interrupt Map

11.1 MEMORY MAP as seen by the CPU

permissible access s - supervisor mode
                   u - user mode
                   r - read
                   w - write
                   b - burst
                   c - cachable

address  access    description


00000000-00000007  src First 8 bytes of ROM bank 0
    (Initial SP & PC)

00000008-000007FF  srwbc    Video RAM (protected)

00000800-0007FFFF  surwbc   Video RAM 512 kB
        000FFFFF          512 kB + 512 kB
        001FFFFF          2 MB
        0027FFFF          2 MB + 512 kB
        003FFFFF          2 MB + 2 MB
        007FFFFF          8 MB
        0087FFFF          8 MB + 512 kB
        009FFFFF          8 MB + 2 MB
        00EFFFFF          8 MB + 8 MB (15 MB usable)

00F00000-00F9FFFF  --  reserved

00FA0000-00FAFFFF  sur cartridge port A
00FB0000-00FBFFFF  sur cartridge port B

00FC0000-00FDFFFF  --  reserved

00FE0000-00FEFFFF  srw Graphics Coprocessor

00FF0000-00FF7FFF  --  reserved

00FF8000-00FFFFFF  sr/srw   IO

01000000-010FFFFF  surwbc   Fast RAM (optional) 1 MB
         011FFFFF      1 MB + 1 MB
         013FFFFF      4 MB
         014FFFFF      4 MB + 1 MB
         017FFFFF      4 MB + 4 MB
         01FFFFFF      16 MB
         020FFFFF      16 MB + 1 MB
         023FFFFF      16 MB + 4 MB
         02FFFFFF      16 MB + 16 MB

01000000-7FFFFFFF  surwc    VME A32/D32
01100000-
01200000-
01400000-
01500000-
01800000-
02000000-
02100000-
02400000-
03000000-

80000000-BFFFFFFF  surwVME A32/D32

C0000000-FCFFFFFF  surwVME A32/D16

FD000000-FDFFFFFF  surwVME A24/D32

FE000000-FEFEFFFF  surwVME A24/D16

FEFF0000-FEFFFFFF  surwVME A16/D16



FF000000-FFFFFFFF  --  image of 00000000-00FFFFFF
*** except! ***
FFE00000-FFE7FFFF  surcTOS rom bank0
FFE80000-FFEFFFFF  surcTOS rom bank1

FFFFFF80 ro   xxxx xxxxIOC ID byte
FFFFFF81 ro   xxxx xxxxMCU ID byte
FFFFFF82 ro   xxxx xxxxDMA-A ID byte
FFFFFF83 ro   xxxx xxxxDMA-B ID byte
FFFFFF84 ro   xxxx xxxxVMEC ID byte
FFFFFF85 ro   xxxx xxxxGPU ID byte


11.1.1 Detail of IO Section

Addr 00FF0000 + N

N   acc  byte      use



8001srw  abc0 dxef Memory Configuration Register
    a - ROM cycle speed select
    0=slow
    1=fast
    b - Video DRAM access speed
    0=slow
    1=fast
    c - Expansion DRAM access speed
    0=slow
    1=fast
    d - Bus timeout interval
    0=8192 clock ~
    1=128 clock ~
    x - reserved
    e - Fast memory burst enable
    0=off
    1=on
    f - Video memory burst enable
    0=off
    1=on

8003srw  axxx xxxx Refresh Time Constant high byte
    (video memory)
    a - Refresh interval control
    0=default
    1=counter

8005srw  xxxx xxxx Refresh Time Constant low byte
8007srw  a000 00bc External Cache Control Register
    a - Reset tag
    0=reset
    1=enable
    b - Capture data cache push
    0=no
    1=yes
    c - Clear on bus arbitration
    0=yes
    1=no

8009srw  ssss bbBB Video Memory Configuration Register
    ssss - SIMM speed select
    bb   - Bank 1 size select
    BB   - Bank 2 size select

800Bsrw  ssss bbBB Fast Memory Configuration Register
    ssss - SIMM speed select
    bb   - Bank 1 size select
    BB   - Bank 2 size select

800Dsrw  axxx xxxx Refresh Time Constant high byte
    (fast memory)
    a - Refresh interval control
    0=default
    1=counter

800Fsrw  xxxx xxxx Refresh Time Constant low byte
8080srw  abcd efgh VME Interface Configuration Register
    a - A32 slave interface enable (0=no 1=yes)
    b - A24 slave interface enable (0=no 1=yes)
    c - A32 master interface enable (0=no 1=yes)
    d - A24 master interface enable (0=no 1=yes)
    e - A16 master interface enable (0=no 1=yes)
    f - Bus Requester mode (0=Release on Request
       1=Release when Done)
    g - reserved
    h - Cache Inhibit Signal for A32/D32 space
    (0=yes 1=no)
8083srw  abcd efgh VME Utility Control Register
    a - SYSRESET* width (0=200ms, 1=1us)
    b - reserved
    c - reserved
    d - reserved
    e - reserved
    f - reserved
    g - Bus Timeout enable (0=no 1=yes)
    h - SYSFAIL* (0=assert)

8097srw  xxxx xxxx VME Interrupt Vector
8098srw  xxxx xxxx VME Slave Start Address Register

8201srw  xxxx xxxx Video Base Address Even high byte
8203srw  xxxx xxxx Video Base Address Even mid byte
8205srw  xxxx xxxx Video Address Counter Even high byte
8207srw  xxxx xxxx Video Address Counter Even mid byte
8209srw  xxxx x000 Video Address Counter Even low byte
820Asrw  ---- ---- Old ST shift mode, no register
    is here but address is acknowledged
820Dsrw  xxxx x000 Video Base Address Even low byte

8213srw  xxxx xxxx Video Base Address Odd high byte
8215srw  xxxx xxxx Video Base Address Odd mid byte
8217srw  xxxx x000 Video Base Address Odd low byte
821Bsrw  xxxx xxxx Video Address Counter Odd high byte
821Dsrw  xxxx xxxx Video Address Counter Odd mid byte
821Fsrw  xxxx x000 Video Address Counter Odd low
8221srw  a000 0bcd Video Mode Control
    a - disable video refresh
    0=no
    1=yes
    b - Overwrite byte 0
    0=yes
    1=no
    c - skip line enable
    0=no
    1=yes
    d - skip phrase
    0=no
    1=yes

8240rw   ---- -rrr ST Color Palette Reg0 (RAMDAC)
8241-ggg -bbb
8242rw   ---- -rrr ST Color Palette Reg1 (RAMDAC)
8243-ggg -bbb
 ||
825Erw   ---- -rrr ST Color Palette Reg15 (RAMDAC)
825F-ggg -bbb

8260rw   ---- --ss ST Video Mode (VTG)
    ss - mode select
    00 320x200, 4 plane
    01 640x200, 2 plane
    10 640x400, 1 plane
    11 <reserved>

8262rw   s--h -mmm TT Video Mode (VTG)
8263---- bbbb s - sample and hold mode
    0 - off, 1 - on
    h - hyper mono mode
    0 - off, 1 - on
    mmm - mode select
    000 320x200x4
    001 640x200x2
    010 640x400x1
    100 640x480x4
    110 1280x960x1
    111 320x480x8
    bbbb - ST palette bank

8268rw   mmmm mmmm Psuedo Color Mask (RAMDAC)

8269rw   smmm bbbb FALCON shift mode (RAMDAC/VTG)
    s - Sync on green enabled
    0=yes
    1=no

    mmm - Mode select
    000 =  1 bit per pixel (low res duochrome)
    001 =  2 bit  "     "
    010 =  4 bit  "     "  (low res)
    011 =  8 bit  "     "
    100 =  4 bit  "     "  (high res)
    101 =  True color
    110 =  Psuedo/True color 
    111 =  1 bit per pixel (high res duochrome)

           bbbb    Bank select


8280rw   0000 xxxx xxxx xxxx     HC   Horizontal counter
8282rw   0000 xxxx xxxx xxxx     HHT  Horizontal half line
total
8284rw   0000 xxxx xxxx xxxx     HBB  Horizontal blank begin
8286rw   0000 xxxx xxxx xxxx     HBE  Horizontal Blank end
8288rw   000h xxxx xxxx xxxx     HDB  Horiz. display begin
    h - Line half.
    0=First half line
    1=Second half
828Arw   000h xxxx xxxx xxxx     HDE  Horizontal display end
    h - Line half.
    0=First half line
    1=Second half
828Crw   0000 xxxx xxxx xxxx     HSS  Horizontal sync start
828Erw   0000 xxxx xxxx xxxx     HFS  Horizontal field sync
8290rw   0000 xxxx xxxx xxxx     HEE  Horiz. Equal. End
8292rw   000h xxxx xxxx xxxx     VBT  Video Burst time
    h - Line Half
    0=VBT on 1st half of line
    (after Hsync end and before HDE)
    1=VBT on 2nd half of line
    (after HDE and before HHT)
8294rw   0000 xxxx xxxx xxxx     Video Data Xfers (NUMREQ)
8296rw   0000 xxxx xxxx xxxx     HWC  Horizontal word count

82A0rw   0000 xxxx xxxx xxxx     VC   Vertical counter
82A2rw   0000 xxxx xxxx xxxi     VFT  Vertical Field Total
    i - Interlace
    0=Interlaced
    1=Non interlaced
82A4rw   0000 xxxx xxxx xxxx     VBB  Vertical Blank Begin
82A6rw   0000 xxxx xxxx xxxx     VBE  Vertical Blank End
82A8rw   0000 xxxx xxxx xxxx     VDB0,VDB1 Vert. Disp. Begin
82AArw   0000 xxxx xxxx xxxx     VDE0,VDB1 Vert. Display End
82ACrw   0000 xxxx xxxx xxxx     VSS  Vertical Sync Start

82C0rw   abcd efgh ijkl mnop     VMC  Video Master Control
    p    Hsync source  0=Internal
    1=External
    o    Hsync level   0=Active high
    1=Active low
    n    Hsync enable  0=Disable
    1=Enable
    m    H-counter on  0=Reset to 0
    1=Count
    l    Vsync source  0=Internal
    1=External
    k    Vsync level   0=Active high
    1=Active low
    j    Vsync enable  0=Disable
    1=Enable
    i    V-counter on  0=Reset to 0
    1=Count
    h    Csync type    0 = hsync or vsync
    1 = hsync xor vsync
    g    Csync enable  0=Disable
    1=Enable
    f    Dotclk select 0=VGA
    1=Super VGA
    e    Video data transfer counter on
    0=Reset to 0
    1=Count
    d    Alternate fields*
    0=disabled
    1=enabled
    c    Equalization  0=Disabled
    1=Enabled
    b    Wide Equ'n    0=Disable
    1=Enable
    a    PAL/NTSC      0=PAL (5 pulses)
    1=NTSC (6 pulses)

82C2rw   0000 0000 psmm mvnr     VCO  Video control register
    r - Repeat lines
    0=Disabled
    1=Enabled
              Doesn't work correctly in
              interlaced mode
    n - Prescale dotclk
    0=No prescale
    1=Divide by 2
    v - Register select
    0=VDB0/VDE0        
                                      1=VDB1/VDE1
    mmm - Video mode*
    000 1bpp Duochrome
         001 2  bpp
    010 4  bpp
    011 8  bpp
    100 4  bpp hi-res
    101 24 bpp
    110 8/24 bpp
    111 1  bpp hi-res monochrome
    s - Line skip
    0=Disabled
    1=Skip alt' lines
    p - packed/planar pixel mode
    0=packed
    1=planar

*Note:   The Video Mode lines are read only in the Video Control
         Register. They are set by writes to the ST, TT, or
         Falcon Video Mode Registers.

82E0rw   0000 0000 0smm mvnr     VC1  Video control for TT
                                      mode 0
82E2rw   0000 0000 0smm mvnr     VC2  Video control for TT
                                      mode 1
82E4rw   0000 0000 0smm mvnr     VC3  Video control for TT
                                      mode 2
82E6rw   0000 0000 0smm mvnr     VC4  Video control for TT
                                      mode 4
82E8rw   0000 0000 0smm mvnr     VC5  Video control for TT
                                      mode 6
82EArw   0000 0000 0smm mvnr     VC6  Video control for TT
                                      mode 7

82ECr    ---- ---- ---- -mmm     MID  Monitor ID bits
    mmm  Currently undefined

8300-    rw   xxxx xxxxExternal Video IO port
  83FF


8400rw   ---- rrrr TT Palette Reg0 (RAMDAC)
8401gggg bbbb
8402rw   ---- rrrr TT Palette Reg1 (RAMDAC)
8403gggg bbbb
 ||
85FErw   ---- rrrr TT Palette Reg255 (RAMDAC)
85FFgggg bbbb

8601rw   xxxx xxxx ACSI base upper upper byte (DMAC)

8604rw   --yy yyyy xxxx xxxx     DMA Data -wdc- (DMAC)
    y*x - sector counter (WO)
    x   - peripheral data (RW)

8606w    ---- ---a bcde fghi     DMA Mode -wdl- (DMAC)

    a - ACSI direction bit (DMAC)
    0 - port into memory
    1 - memory out to port
    b - DMA request source
    0 - not used
    1 - FDC
    c - reserved
    d - fifo flush
    e - Block count register select
    f - CS out select
    0 - FDC
    1 - not used
    ghi - peripheral address (i not used)

8606r    ---- ---- ---f drae     DMA Status (DMAC)
    f - fifo status
    d - DIR
    r - port DRQ active
    a - DMA active
    e - DMA error

8609rw   xxxx xxxx ACSI base upper middle byte (DMAC) 1
860Brw   xxxx xxxx ACSI base lower middle byte (DMAC) 1
860Drw   xxxx xxx0 ACSI base lower lower byte (DMAC) 1
860Frw   abcd sefg Floppy density select

    a - Disk change (input) pin (read only)
    b - Media detect 2 (input) pin (read only)
    c - Mode select 2 (output) pin
    0 = low (reset)
    1 = high
    s - ACSI DMA status flag
    0 = no DMA has occured (since last read)
    1 = DMA has or is occuring
    e - Media detect 1 (input) pin (read only)
    f - Mode select 1 (output) pin
    0 = low (reset)
    1 = high
    dg - FCCLK Frequency
    00 = 8MHz (reset)
    01 = 16MHz
    10 = 32Mhz
    11 = FCCLK Off

8701rw   xxxx xxxx SCSI DMA pointer upper
8703rw   xxxx xxxx SCSI DMA pointer upper-middle
8705rw   xxxx xxxx SCSI DMA pointer lower-middle
8707rw   xxxx xxxx SCSI DMA pointer lower

8709rw   xxxx xxxx SCSI DMA byte count upper
870Brw   xxxx xxxx SCSI DMA byte count upper-middle
870Drw   xxxx xxxx SCSI DMA byte count lower-middle
870Frw   xxxx xxxx SCSI DMA byte count lower

8710r    xxxx xxxx SCSI Data Residue Register (UU)
8711r    xxxx xxxx SCSI Data Residue Register (UM)
8712r    xxxx xxxx SCSI Data Residue Register (LM)
8713r    xxxx xxxx SCSI Data Residue Register (LL)

8715rw   bzu0 00ed SCSI DMA Control Register

    b - bus error during DMA
        (read only, cleared by read)
    z - byte count zero
        (read only, cleared by read)
    u - data underrun
        (read only, cleared by read)
    e - DMA enable 0=off, 1=on
    d - DMA direction:
    0=in from port
    1=out to port

8781rw   xxxx xxxx 5380 Data Register
8783rw   xxxx xxxx 5380 Initiator Command Register
8785rw   xxxx xxxx 5380 Mode Register
8787rw   xxxx xxxx 5380 Target Command Register
8789rw   xxxx xxxx 5380 ID Select/SCSI Control Register
878Brw   xxxx xxxx 5380 DMA Start/DMA Status Register
878Drw   xxxx xxxx 5380 DMA Target Receive/Input Data
878Frw   xxxx xxxx 5380 DMA Initiator Receive/Reset

8800r    xxxx xxxx PSG Read Data
8800w    0000 xxxx PSG Register Select
8802w    xxxx xxxx PSG Write Data

    PSG Port A Bit Assignments
    7   <reserved>
    6   SPKON (internal speaker on when low)
    5   Printer Port Strobe
    4   DSP reset
    3   Printer Port SLCTIN*
    2   *Floppy 1 Select
    1   *Floppy 0 Select
    0   *Floppy Side 0 Select

    PSG Port B Bit Assignments
    7-0  Printer Port bits 7-0

8804r/rw zabc defg xhij klmn     GPIO port
    z - <reserved>
    a - Serial port 2 RTS
    b -    "     "  " DTR
    c -    "     "  " RI
    d -    "     "  " CTS
    e -    "     "  " DSR
    f - <reserved>
    g - Serial port 2 CD

    h - <reserved>
    i - Parallel port INIT*
    j -   "       "  AFD*
    k -   "       "  ACK*
    l -   "       "  PE
    m -   "       "  SLCT
    n -   "       "  ERROR*


8900rw   0000 abcd Sound DMA Control

    ab - SCNT control
    00 - high
    01 - playback channel
    10 - record channel
    11 - playback OR record
    cd - SINT control
    00 - high
    01 - playback channel
    10 - record channel
    11 - playback OR record

8901rw   a0bc 00de Sound DMA Control
    a - Register Set Select
    0 = playback registers
    1 = record registers
    b - Record Frame Repeat Select
    0 = Single Frame
    1 = Repeat
    c - Record Enable
    0 = Off (reset state)
    1 = On
    d - Playback Frame Repeat Select
    0 = Single Frame
    1 = Repeat
    e - Playback Enable
    0 = Off (reset state)
    1 = On

8903rw   xxxx xxxx Frame Base Address upper-middle byte
8905rw   xxxx xxxx Frame Base Address lower-middle byte
8907rw   xxxx xxxx Frame Base Address lower-lower byte

8909r    xxxx xxxx Frame Address Counter upper-middle
byte
890Br    xxxx xxxx Frame Address Counter lower-middle
byte
890Dr    xxxx xxxx Frame Address Counter lower-lower
byte

890Frw   xxxx xxxx Frame End Address upper-middle byte
8911rw   xxxx xxxx Frame End Address lower-middle byte
8913rw   xxxx xxxx Frame End Address lower-lower byte

8915rw   xxxx xxxx Frame Base Address upper-upper byte
8917r    xxxx xxxx Frame Address Counter upper-upper
byte
8919rw   xxxx xxxx Frame End Address upper-upper byte

8920rw   0xab 0xcd gh00 00ij Playback Mode Control
    x - <reserved>
    ab Monitor Select
    000 - tracks 1 & 2
    001 - tracks 3 & 4
    010 - tracks 5 & 6
    011 - tracks 7 & 8
    cd Active Tracks Select
    000 - 2 tracks
    001 - 4 tracks
    010 - 6 tracks
    011 - 8 tracks
    g - Mode (8 bit only)
    0 = Stereo (reset state)
    1 = Mono
    h - Mode
    0 = 8 bit samples (reset state)
    1 = 16 bit samples
    ij - Sample Rate Prescale
    00 =  1280
    01 =  640
    10 =  320
    11 =  160

8922rw   xxxx xxxx xxxx xxxx MICROWIRE Data register
    (dummy register)
8924rw   xxxx xxxx xxxx xxxx MICROWIRE Mask register
    (dummy register)

8930rw   00b0 0abh dabh sabg SRC register
    ab - clock select
    00 - 25.175 Mhz
    01 - external from DSP connector
    10 - 32.000 Mhz
    11 - reserved
    d  - DSP clock direction
    1 - SCLK is output
    h  - SYNC direction
    1 - output
    g  - handshake mode
    0 - gated clock
    1 - continuous clock
    s  - handshake control source
    0 - DSP
    1 - External

8932rw   0ab0 0abh dabh sabg SRC register
    ab - source select
    00 - DMA (playback)
    01 - DSP
    10 - External
    11 - CODEC
    d  - DSP clock direction
    1 - SC0 is output
    h  - SYNC direction
    1 - output
    g  - handshake mode
    0 - gated clock
    1 - continuous clock
    s  - handshake control source
    0 - DSP
    1 - External

8934rw   0000 eeee 0000 iiii Prescale select
    eeee - External clock prescale
    iiii - Internal clock prescale
    0000 - off
    0001 - /2
     :
    1011 - /12

8936rw   0000 00rr Record Control register
    rr - Record channels select
    00 - 1-2
    01 - 1-4
    10 - 1-6
    11 - 1-8

8937rw   0000 rpea DAC Control register
    r - Global sound reset
    p - Input select
    0 - Codec ADC
    1 - PSG
    e - Matrix output to CODEC
    a - Alternate data output to CODEC

8938rw   xxxx xxxx xxxx xxxx Aux A Control Field
893Arw   xxxx xxxx xxxx xxxx Aux B Control Field
893Cro   xxxx xxxx xxxx xxxx Aux A Input Field
893Ero   xxxx xxxx xxxx xxxx Aux B Input Field

8940rw   0000 xxxx 0000 xxxx General Purpose IO Control
8942rw   0000 xxxx 0000 xxxx General Purpose IO Data

8961w    xxxx xxxx Real Time Clock Address Register
8963rw   xxxx xxxx Real Time Clock Data Register

8C01rw   xxxx xxxx SCC DMA pointer upper
8C03rw   xxxx xxxx SCC DMA pointer upper-middle
8C05rw   xxxx xxxx SCC DMA pointer lower-middle
8C07rw   xxxx xxxx SCC DMA pointer lower

8C09rw   xxxx xxxx SCC DMA byte count upper
8C0Brw   xxxx xxxx SCC DMA byte count upper-middle
8C0Drw   xxxx xxxx SCC DMA byte count lower-middle
8C0Frw   xxxx xxxx SCC DMA byte count lower

8C10r    xxxx xxxx SCC Data Residue Reg UU byte
8C11r    xxxx xxxx SCC Data Residue Reg UM byte
8C12r    xxxx xxxx SCC Data Residue Reg LM byte
8C13r    xxxx xxxx SCC Data Residue Reg LL byte

8C15rw   bzu0 rsed SCC DMA Control Register

    b - bus error during DMA
    (read only, cleared by read)
    z - byte count zero
    (read only, cleared by read)
    u - data underrun
        (read only, cleared by read)
    r - Aux/SCC select
    0=SCC
    1=AUX
    s - SCC channel
    0=A
    1=B
    e - DMA enable 0=off, 1=on
    d - DMA direction:
    0=in from port
    1=out to port

8C81rw   xxxx xxxx SCC A control register
8C83rw   xxxx xxxx SCC A data register
8C85rw   xxxx xxxx SCC B control register
8C87rw   xxxx xxxx SCC B data register

8CA0-8CBF(odd bytes)   DMA expansion IO port

8E01rw   xxxx xxx0 System Interrupt Mask (B7 - B1; B0
                   unused)
8E03r    xxxx xxx0 System Interrupt State (before mask
                   register)
8E05rw   xxxx xxxa System Interrupter (a=1 generate
                   interrupt 1)
8E07rw   xxxx xxxb VME Interrupter (b=1 generate VME
                   IRQ3)
8E09rw   xxxx xxxx General Purpose Reg 1
8E0Brw   xxxx xxxx General Purpose Reg 2
8E0Drw   xxxx xxx0 VME Interrupt Mask (B7 - B1; B0
                   unused)
8E0Fr    xxxx xxx0 VME Interrupt State (before mask
                   register)

9200r    xxxx xxxx System Configuration Straps

9800--   XXXX XXXX FALCON palette register 0
9801rw   rrrr rrrr
9802rw   gggg gggg
9803rw   bbbb bbbb
9804--   XXXX XXXX FALCON palette register 1
9805rw   rrrr rrrr
9806rw   gggg gggg
9807rw   bbbb bbbb
 ||
9BFC--   XXXX XXXX FALCON palette register 255
9BFDrw   rrrr rrrr
9BFErw   gggg gggg
9BFFrw   bbbb bbbb

A000-A1FFIO expansion area 1 (IOCS1) 2
A200-A207 rw           DSP Host interface
A208-A3FFIO expansion area 2 (DSP) 2

FA01rw   xxxx xxxx MFP-1   GPIP
FA03rw   xxxx xxxx MFP-1   AER
FA05rw   xxxx xxxx MFP-1   DDR
FA07rw   xxxx xxxx MFP-1   IERA
FA09rw   xxxx xxxx MFP-1   IERB
FA0Brw   xxxx xxxx MFP-1   IPRA
FA0Drw   xxxx xxxx MFP-1   IPRB
FA0Frw   xxxx xxxx MFP-1   ISRA
FA11rw   xxxx xxxx MFP-1   ISRB
FA13rw   xxxx xxxx MFP-1   IMRA
FA15rw   xxxx xxxx MFP-1   IMRB
FA17rw   xxxx xxxx MFP-1   VR
FA19rw   xxxx xxxx MFP-1   TACR
FA1Brw   xxxx xxxx MFP-1   TBCR
FA1Drw   xxxx xxxx MFP-1   TCDCR
FA1Frw   xxxx xxxx MFP-1   TADR
FA21rw   xxxx xxxx MFP-1   TBDR
FA23rw   xxxx xxxx MFP-1   TCDR
FA25rw   xxxx xxxx MFP-1   TDDR
FA27rw   xxxx xxxx MFP-1   SCR
FA29rw   xxxx xxxx MFP-1   UCR
FA2Brw   xxxx xxxx MFP-1   RSR
FA2Drw   xxxx xxxx MFP-1   TSR
FA2Frw   xxxx xxxx MFP-1   UDR

FA81rw   xxxx xxxx MFP-2   GPIP
FA83rw   xxxx xxxx MFP-2   AER
FA85rw   xxxx xxxx MFP-2   DDR
FA87rw   xxxx xxxx MFP-2   IERA
FA89rw   xxxx xxxx MFP-2   IERB
FA8Brw   xxxx xxxx MFP-2   IPRA
FA8Drw   xxxx xxxx MFP-2   IPRB
FA8Frw   xxxx xxxx MFP-2   ISRA
FA91rw   xxxx xxxx MFP-2   ISRB
FA93rw   xxxx xxxx MFP-2   IMRA
FA95rw   xxxx xxxx MFP-2   IMRB
FA97rw   xxxx xxxx MFP-2   VR
FA99rw   xxxx xxxx MFP-2   TACR
FA9Brw   xxxx xxxx MFP-2   TBCR
FA9Drw   xxxx xxxx MFP-2   TCDCR
FA9Frw   xxxx xxxx MFP-2   TADR
FAA1rw   xxxx xxxx MFP-2   TBDR
FAA3rw   xxxx xxxx MFP-2   TCDR
FAA5rw   xxxx xxxx MFP-2   TDDR
FAA7rw   xxxx xxxx MFP-2   SCR
FAA9rw   xxxx xxxx MFP-2   UCR
FAABrw   xxxx xxxx MFP-2   RSR
FAADrw   xxxx xxxx MFP-2   TSR
FAAFrw   xxxx xxxx MFP-2   UDR

FC00rw   xxxx xxxx Keyboard ACIA Control
FC02rw   xxxx xxxx Keyboard ACIA Data

FC04rw   xxxx xxxx MIDI ACIA Control
FC06rw   xxxx xxxx MIDI ACIA Data

1 A write to the ACSI DMA base upper middle, lower middle, or
lower lower byte will clear the upper upper byte (8601).

2 Two general purpose IO select signals, IOCS1 and IOCS2(DSP),
are generated for IO addresses 00FFA000-00FFA1FF and
00FFA200-00FFA3FF, respectively. Note that A200-A20F is used by
the DSP host interface. These pins minimize decoding when adding
peripherals to the main board sometime in the future.

    Any IO address not expressly listed in this section should
be considered reserved. Any additions or changes to the FALCON
memory map must be approved by the FALCON design team at Atari
Microsystems in Dallas.

11.2 VME ADDRESS SPACE

    Note that some models do not include the VME interface.

11.2.1 ADDRESS SPACE SEEN BY A32 VME BUS MASTER

    The value in the slave starting address register (xxFF8098)
is subtracted from the VME address and the result becomes the
address presented to the FBus. The addresses given below
represent that result and will be equal to the address generated
by the VME master only when the slave starting address register
(SSAR) is zero. The Falcon system appears as a D32 VME slave.

address (VME addr-SSAR)use
00000000-00000007      first 8 bytes of rom bank0
    (restart vector)

00000008-000007FF      Video RAM (protected)

00000800-0007FFFF      Video RAM 512 kB
      000FFFFF         512 kB + 512 kB
      001FFFFF         2 MB
      0027FFFF         2 MB + 512 kB
      003FFFFF         2 MB + 2 MB
      007FFFFF         8 MB
      0087FFFF         8 MB + 512 kB
      009FFFFF         8 MB + 2 MB
      00EFFFFF         8 MB + 8 MB (15 MB usable)

00FA0000-00FAFFFF      cartridge port A
00FB0000-00FBFFFF      cartridge port B

00F00000-00FFFFFF      IO

01000000-010FFFFF      Fast RAM (optional) 1 MB
         011FFFFF      1 MB + 1 MB
         013FFFFF      4 MB
         014FFFFF      4 MB + 1 MB
         017FFFFF      4 MB + 4 MB
         01FFFFFF      16 MB
         020FFFFF      16 MB + 1 MB
         023FFFFF      16 MB + 4 MB
         02FFFFFF      16 MB + 16 MB

01000000-|
01100000-|
01200000-|
01400000-|
01500000-|
01800000-|\
02000000-|-FEFFFFFF    VME bus
02100000-|/
02400000-|
03000000-|

FF000000-FFDFFFFF      Image of video ram
FFE00000-FFEFFFFF      TOS ROM
FFF00000-FFFFFFFF      Image of IO

11.2.2 ADDRESS SPACE SEEN BY A24 VME BUS MASTER

    The Falcon address space from FF000000h to FFFFFFFFh appears
as a D32 VME slave when enabled in the interface configuration
register (xxFF8080).

address  use
000000-000007      first 8 bytes of rom bank0
    (restart vector)

000008-0007FF      video ram (protected)

000800-07FFFF      Video RAM 512 kB
    0FFFFF         512 kB + 512 kB
    1FFFFF         2 MB
    27FFFF         2 MB + 512 kB
    3FFFFF         2 MB + 2 MB
    7FFFFF         8 MB
    87FFFF         8 MB + 512 kB
    9FFFFF         8 MB + 2 MB
    EFFFFF         8 MB + 8 MB (15 MB usable)

E00000-EFFFFF      TOS ROMs

FA0000-FAFFFF      cartridge port A
FB0000-FBFFFF      cartridge port B

F00000-FFFFFF      IO

11.2.3 VME CONTROLLER STARTING ADDRESSES

    The starting address of the A32/D32 VME space is contiguous
with the top of single purpose (fast) expansion RAM. If no such
RAM is present then the VME space starts at 01000000h. Boot
software must initialize the fast memory configuration register
(xxFF800B).

11.3 INTERRUPT ASSIGNMENTS




Interrupt Assignments


Interrupt
level
System source 1
Interrupt
acknowledge
response 2
VME source


7
VME SYSFAIL
Auto vector
IRQ7


6
none
Vector
MFPs and IRQ6


5
none
Vector
SCC and IRQ5


4
VSYNC
Auto vector
IRQ4


3
none 3
Auto vector
VME interrupter +
IRQ3


2
HSYNC
Auto vector
IRQ2


1
System
interrupter
Auto vector
IRQ1


                                Table 11.2

1 Within each level, the system interrupt has higher priority
than the VME interrupt. And, within the shared Level5 and Level6
interrupts, the part on the motherboard has higher priority than
the VME interrupt.

2 The VME interrupts use their interrupt status ID byte as their
interrupt vector.

3 The level 3 system interrupt mask must be enabled for the level
3 VME interrupt to actually be generated.

11.3.1 MFP Interrupt Assignments

MFP-1
int                function
GPIP7              DMA Sound IRQ
GPIP6              Serial port 1 ring indicator
TimerA
RxRDY
RxERR
TxEMPTY
TxERR
TimerB
GPIP5              FDC Interrupt
GPIP4              MIDI / Keyboard Interface
TimerC
TimerD
GPIP3              DSP connector INT input
GPIP2              MIDI IRQ
GPIP1              parallel port ACK* signal
GPIP0              Parallel port BUSY* signal

MFP 2
int                function
GPIP7              SCSI Controller IRQ (active high)
GPIP6              RTC IRQ (active low, cleared by reading RTC
                   register 0x0C)
TimerA
RxRDY
RxERR
TxEMPTY
TxERR
TimerB
GPIP5              SCSI DMAC Interrupt (active low)
GPIP4              AUX DMA port IRQ
TimerC
TimerD
GPIP3              Graphics processor IRQ
GPIP2              SCC DMAC Interrupt (active low)
GPIP1              general purpose I/O pin
GPIP0              general purpose I/O pin

11.4 DMA/BUS MASTERSHIP PRIORITIES

priority function
highest  SCSI DMA Channel
         AUX DMA Channel
         Floppy DMA channel
         Digital sound DMA channel
         VMEbus Masters
lowest   CPU




Section 12  Revisions

FBUS Version 1.0, October 22, 1990, original
December 7, 1990, clarifications to bus arbitration, redefinition
of wide mode.

January 4, 1991, First draft of this document
April 8, 1991, Second draft
April 19, 1991 Third Draft
September 7, 1991 Forth Draft
December 3, 1991 Fifth Draft
February 21, 1992 Sixth Draft
-----------------
April 8, 1992 Prototype A release
August 26, 1992 Prototype B release



Section 13  References

The VMEbus is defined by:

VMEbus International Trade Association (VITA), VMEbus
Specification Manual, Revision C.1, October, 1985.


The Small Computer Systems Interface (SCSI) is defined by:

Adaptive Data Systems, Inc., SCSI Guidebook, Issue Number 2,
June, 1985.


Specific SCSI device implementation details for typical devices
are available in:

Adaptec Inc., Description of SCSI Command Set for Communications
Devices, Revision 0.91, 1988.

Archive Corporation, VIPER Product Manual; SCSI Models 2060S and
2150S, Part No. 21391-001, June, 1988.

Maxtor  Corporation, XT-4000S OEM Manual & Product Specification,
1014995, 1987.

Quantum Corporation, Q200 Series Programmer's Manual, 81-45416,
Rev. B, 1987.

Details of the major commercially available chips used in the
FALCON architecture are contained in:

Yamaha Corp., YM3439-F Programmable Sound Generator Data Sheet,
June 1991 (Atari part #C104541-001)

Logic Devices Inc., L5380/L53C80 CMOS SCSI Bus Controllers,
September 1988

Motorola, Inc., MC68030 Enhanced 32-Bit Microprocessor User's
Manual, 3rd. Edition, 1990.

Motorola, Inc., MC68881/MC68882 Floating-Point Coprocessor User's
Manual, First Edition, 1987.

Motorola, Inc., MC68901 Multi-Function Peripheral, January, 1984.

Motorola, Inc., MC68040 32-Bit Microprocessor User's Manual, 1st.
Edition, 1989.

Dallas Semiconductor, DS1287 Real-Time Clock Plus RAM (RTC), June
1990.

Motorola, Inc., MC6850 Asynchronous Communications Interface
Adapter, 19??.

Western Digital Corp., WD1772-02 Floppy Disk Formatter/Controller

Zilog, Inc., Z80C30 CMOS Z-BUS SCC / Z85C30 CMOS SCC Serial
Communications Controller - Preliminary Product Specification,
October, 1987.

Zilog, Inc., Z80C30 CMOS Z-BUS SCC / Z85C30 CMOS SCC Serial
Communications Controller - Technical Manual, September, 1986.

Motorola, Inc., DSP56000/DSP56001 Digital Signal Processor User's
Manual (DSP56000UM/AD Rev2)

Motorola, Inc., DSP56001/D Digital Signal Processor Data Sheet
Rev2

The ST compatible hardware interfaces are also described in:

Atari Corporation, Engineering Hardware Specification of the
Atari ST Computer System, January 7, 1986.

Atari Corporation, ST DMA Sound Technical Reference, July 18,
1988.

Atari Corporation, Intelligent Keyboard (ikbd) Protocol, February
26, 1985.

Atari Corporation, Atari ACSI/DMA Integration Guide, June 28,
1991.


    All questions or comments about FALCON or this specification
should be directed to:

    John D. Horton Jr.
    FALCON Design Team
    Atari Microsystems (ataritx)
    4115 Keller Springs Rd. #200
    Dallas, TX 75244
    (214) 713-9111 Fax (214) 713-9040

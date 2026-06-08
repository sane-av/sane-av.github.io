---
term: "Audio Video Bridging (AVB)"
category: "Networking"
relatedTerms: ["Ethernet", "AES67", "Dante", "RAVENNA", "Milan", "time-sensitive networking", "IEEE 802.1", "latency"]
---

**Audio Video Bridging (AVB)** is a set of IEEE 802.1 standards that extends standard Ethernet to provide deterministic, low-latency transport for time-sensitive audio and video streams. It guarantees bounded latency (typically 2 ms end-to-end) and precise clock synchronization across an Ethernet network - capabilities that standard "best effort" Ethernet cannot provide.

The AVB standard family later evolved into the broader **Time-Sensitive Networking (TSN)** framework, which extends the same deterministic capabilities to industrial automation, automotive, and other domains.

## Core Standards

AVB is a suite of interrelated IEEE standards, not a single document:

| Standard | Full name | Function |
|---|---|---|
| **IEEE 802.1AS** | Timing and Synchronization (gPTP) | Distributes a common network clock with sub-microsecond accuracy |
| **IEEE 802.1Qav** | Credit-Based Shaper (CBS) | Reserves bandwidth and smooths traffic to prevent burst-induced latency |
| **IEEE 802.1Qat** | Stream Reservation Protocol (SRP) | Enables endpoints to reserve bandwidth for a stream end-to-end through the network |
| **IEEE 802.1BA** | AVB Systems | Defines system-level requirements combining the above three |

All four standards were published by 2011. IEEE 802.1Qav and 802.1Qat were later folded into IEEE 802.1Q (the main Ethernet bridging standard) as clauses 34 and 35 respectively.[^1]

### IEEE 802.1AS - Generalized Precision Time Protocol (gPTP)

AVB requires all devices to share a common clock. 802.1AS implements a profile of IEEE 1588 (Precision Time Protocol, PTP) designed for Ethernet networks. A **grandmaster clock** distributes timing to all AVB switches and endpoints. Devices synchronize to within approximately 1 microsecond of each other, enabling sample-accurate audio playout across the network.[^2]

### IEEE 802.1Qav - Credit-Based Shaper

Standard Ethernet switches transmit packets on a "best effort" basis. A large video frame can block a switch port, delaying a small audio packet. The Credit-Based Shaper (CBS) allocates bandwidth "credits" to time-sensitive traffic classes. An AVB stream spends credits to transmit, then waits to accumulate them - ensuring no single stream monopolizes bandwidth and bounding worst-case latency.

### IEEE 802.1Qat - Stream Reservation Protocol

Before an AVB stream is established, the source endpoint uses SRP to signal bandwidth requirements through every switch along the path. Each switch either admits the reservation (if sufficient bandwidth is available) or rejects it. This prevents the network from becoming overcommitted - a stream is either reliably admitted or explicitly rejected.[^3]

## History

The AVB working group within IEEE 802.1 was formed in **2005**. The first published AVB standard was 802.1AS in **2011**, followed closely by 802.1Qav and 802.1Qat.

Early industry adoption was led by **Apple**, which included AVB hardware support in Mac Pro, Mac mini, and Thunderbolt interfaces starting in **2011-2012**, positioning AVB for professional audio workstations and studios. However, AVB adoption in the broader professional AV market was slower than anticipated, partly due to the requirement for AVB-capable network switches (standard unmanaged switches do not support AVB).

In **2015**, the **Milan** protocol was launched by the AVnu Alliance (the AVB industry certification body) and major audio networking vendors (AVID, Yamaha, L-Acoustics, others) to address interoperability gaps in the base AVB standard. Milan is a strict profile of AVB that mandates specific discovery, registration, and media clock requirements to ensure plug-and-play interoperability between different vendors' AVB devices.[^4]

## AVB vs Competing Protocols

| Protocol | Transport | Sync | Latency | Network requirement | Interop standard |
|---|---|---|---|---|---|
| **AVB / Milan** | IEEE 802.1 (Layer 2) | IEEE 802.1AS (gPTP) | ≤2 ms (1 hop) | AVB-capable switches | IEEE 802.1BA / Milan spec |
| **Dante** | IP/UDP (Layer 3) | PTPv2 (IEEE 1588) | ~1 ms (typical) | Managed or unmanaged Ethernet | AES67 compatible |
| **RAVENNA** | IP/RTP (Layer 3) | PTPv2 | ~1 ms | Standard IP network | AES67 native |
| **AES67** | IP/RTP | PTPv2 | 1 ms (min) | Standard IP network | Industry standard |
| **Dante via AES67** | IP/UDP bridged | PTPv2 | ~1 ms | Standard Ethernet | AES67 gateway |

A key difference between AVB and IP-based protocols (Dante, RAVENNA, AES67): AVB streams are routed at Layer 2 (MAC address / VLAN), while IP protocols route at Layer 3. AVB cannot traverse standard IP routers; IP protocols can be routed across WAN links.

## AV Industry Usage

AVB in its Milan profile is used by:
- **L-Acoustics** (P1 processor, LA Network Manager)
- **d&b audiotechnik** (DS100 Signal Engine)
- **Yamaha** (mixing consoles with EtherSound/AVB ports)
- **Meyer Sound** (Galileo GALAXY processors)

The AVnu Alliance operates a compliance testing program. Only certified devices carry the AVnu mark and are verified for interoperability.

---

## References

[^1]: IEEE 802.1 Working Group. [IEEE Std 802.1Q-2018](https://ieeexplore.ieee.org/document/8403927): *Bridges and Bridged Networks*. IEEE Standards Association. 2018. doi:10.1109/IEEESTD.2018.8403927. (Clause 34: Credit-Based Shaper; Clause 35: Stream Reservation Protocol.)
[^2]: IEEE Standards Association. [IEEE Std 802.1AS-2020](https://ieeexplore.ieee.org/document/9121845): *Timing and Synchronization for Time-Sensitive Applications*. IEEE. 2020. doi:10.1109/IEEESTD.2020.9121845.
[^3]: IEEE Standards Association. [IEEE Std 802.1Qat-2010](https://ieeexplore.ieee.org/document/5594708): *Stream Reservation Protocol*. IEEE. 2010. doi:10.1109/IEEESTD.2010.5594708.
[^4]: AVnu Alliance. [Milan Specification v1.2](https://avnu.org/milan/). AVnu Alliance. 2021. (Defines Milan as a strict profile of IEEE 802.1BA with mandatory discovery via AVDECC and fixed media clock requirements for interoperability.)

---
term: "8P8C Connector"
category: "Networking"
relatedTerms: ["Ethernet", "Cat5e", "Cat6", "T568A", "T568B", "patch cable", "structured cabling"]
---

The **8P8C connector** (8 Position, 8 Conductor) is a modular rectangular connector with eight positions, all of which are populated with conductors. It is the standard termination for twisted-pair Ethernet cabling and is almost universally - though incorrectly - called an **RJ45** connector.

## The RJ45 Confusion

RJ45 is a registered jack designation defined by the U.S. Federal Communications Commission (FCC) in 47 CFR Part 68. The actual RJ45 is an **8P2C** connector - 8 positions but only 2 conductors populated, wired for single-line telephone use with a keyed housing to prevent insertion into standard jacks.[^1] It is physically incompatible with the 8P8C connector used for Ethernet.

The misnomer became entrenched because the 8P8C connector superficially resembles an unkeyed 8-position modular connector, and early Ethernet documentation loosely used "RJ45" to describe it. Today, virtually every manufacturer, installer, and standards body outside the telecom regulatory context uses "RJ45" to mean the 8P8C Ethernet connector. This article uses the technically correct 8P8C designation, but both terms are in common use.[^2]

## History

The modular connector family was developed by AT&T Bell Laboratories in the **1960s** to replace the bulky hardwired connections used in telephone installations. The modular jack and plug system was standardized by the FCC in the **Registration (RJ) program** starting in **1976**, which defined wiring configurations for connecting customer-provided telephone equipment to the public switched telephone network.[^3]

The 8-position modular plug was adopted for data networking as twisted-pair Ethernet (10BASE-T) was being developed in the late 1980s. IEEE 802.3i, published in **1990**, standardized 10BASE-T using twisted-pair cable terminated with 8P8C connectors.[^4] The same connector form factor has been carried forward through 100BASE-TX (Fast Ethernet), 1000BASE-T (Gigabit Ethernet), and 10GBASE-T.

## Wiring Standards

Two pin-to-pair assignment standards exist for 8P8C Ethernet connectors, both defined in **TIA-568** (Telecommunications Infrastructure Standard for Commercial Buildings):

| Pin | T568A | T568B |
|---|---|---|
| 1 | White/Green | White/Orange |
| 2 | Green | Orange |
| 3 | White/Orange | White/Green |
| 4 | Blue | Blue |
| 5 | White/Blue | White/Blue |
| 6 | Orange | Green |
| 7 | White/Brown | White/Brown |
| 8 | Brown | Brown |

**T568B** is the dominant standard in North America for commercial installations. **T568A** is specified by the U.S. federal government for government buildings and is required by some international standards.[^5]

A cable must be wired consistently (same standard at both ends) for a **patch cable**. A **crossover cable** uses T568A at one end and T568B at the other, swapping the transmit and receive pairs - once required to connect two computers directly, now largely obsolete as modern switches and NICs support Auto-MDIX (automatic crossover detection).

## Gigabit and 10G Ethernet

- **10BASE-T / 100BASE-TX:** Use only 2 of the 4 pairs (pins 1-2 and 3-6).
- **1000BASE-T (Gigabit Ethernet):** Uses all 4 pairs simultaneously for bidirectional transmission.
- **10GBASE-T:** Also uses all 4 pairs; requires Cat6A or better cable to achieve 10 Gbps over 100 m.

## Power over Ethernet (PoE)

The same 8P8C connector carries both data and DC power in PoE-enabled installations. IEEE 802.3af (PoE, up to 15.4 W), IEEE 802.3at (PoE+, up to 30 W), and IEEE 802.3bt (PoE++, up to 90 W) all use the 8P8C interface. See [power over Ethernet](/glossary/poe) for details.

## Standards

- **TIA-568.2-D** - Balanced twisted-pair telecommunications cabling and components standard (defines T568A/B wiring)
- **ISO/IEC 11801** - International structured cabling standard (equivalent to TIA-568)
- **IEEE 802.3** - Ethernet standard family covering 10BASE-T through 10GBASE-T
- **IEC 60603-7** - Dimensional and performance specifications for 8-way modular connectors

---

[^1]: U.S. Federal Communications Commission. [47 CFR Part 68, Subpart F - Standard Plug and Jack Arrangements](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-68/subpart-F). *Code of Federal Regulations*. (Defines RJ45 as an 8P2C keyed connector for single-line telephone use.)
[^2]: Horowitz, Paul; Hill, Winfield (2015). [*The Art of Electronics*](https://www.worldcat.org/isbn/9780521809269), 3rd ed. Cambridge University Press. p. 898. ISBN 978-0-521-80926-9. (Notes the ubiquitous misnomer.)
[^3]: FCC. [Registration Program for Telephone Equipment](https://transition.fcc.gov/cgb/consumerfacts/registrationprog.pdf) (PDF). *Consumer Facts*. (Background on the RJ registration program and Part 68.)
[^4]: IEEE. [IEEE 802.3i-1990: Supplement to CSMA/CD Access Method and Physical Layer Specifications](https://ieeexplore.ieee.org/document/159164). IEEE Standards Association. 1990. (Standardized 10BASE-T over twisted-pair with 8P8C connectors.)
[^5]: Telecommunications Industry Association. [*TIA-568.2-D: Balanced Twisted-Pair Telecommunications Cabling and Components Standard*](https://www.tiaonline.org/standards/tia-568-2-d/). 2018. (Defines T568A and T568B wiring schemes.)

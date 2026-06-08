---
term: "BNC Connector"
category: "Video"
relatedTerms: ["coaxial cable", "SDI", "composite video", "impedance", "75 ohm", "video distribution"]
---

The **BNC connector** (Bayonet Neill-Concelman) is a quick-connect/disconnect radio frequency (RF) coaxial connector characterized by two bayonet lugs on the female connector and a quarter-turn locking mechanism. It is the dominant connector for professional video interconnection (SDI), test and measurement equipment, and RF signal distribution.

BNC connectors are manufactured in two impedance versions:
- **75 Ω** - video and broadcast (SDI, composite, HDTV component)
- **50 Ω** - RF, data, and test equipment

**The impedance mismatch between the two versions causes signal reflections and return loss degradation.** A 50 Ω BNC connector on a 75 Ω video system will introduce measurable degradation, particularly at SDI frequencies. The two versions are physically identical and mate freely - making incorrect substitution a common installation error.

## History

The BNC was developed in the late 1940s. It is named after its two inventors:

- **Paul Neill** (Bell Laboratories) - who also developed the N-type connector
- **Carl Concelman** (Amphenol) - who also developed the C connector (a threaded version of the same basic design)

The "Bayonet" prefix describes the locking mechanism: the same quarter-turn bayonet mount used on British military rifle bayonets and on many camera lens mounts.[^1]

The BNC was designed as a miniaturized, quick-connect alternative to the larger threaded N-type connector, intended for use at frequencies up to several GHz. Its 50 Ω version became standard in test equipment and data communications (it was the physical connector for 10BASE2 Ethernet in the 1980s). Its 75 Ω version was adopted by the broadcast industry for analog composite video in the 1960s-1970s and has remained the standard video connector through the SDI era.[^2]

## Impedance Versions

| Version | Characteristic impedance | Primary uses |
|---|---|---|
| 75 Ω BNC | 75 Ω | SDI video, composite video, component video (YPbPr), AES3 digital audio |
| 50 Ω BNC | 50 Ω | RF transmission, 10BASE2 Ethernet (obsolete), test equipment, GPS antennas |

The 75 Ω version maintains 75 Ω impedance through the body of the connector to match the coaxial cable. At SDI frequencies (270 Mbit/s to 11.88 Gbit/s), impedance discontinuities at connectors cause reflections that corrupt the signal. 50 Ω connectors should never be used on 75 Ω video systems.

## Serial Digital Interface (SDI) Applications

BNC is the mandated connector for all SDI signal levels defined by SMPTE:

| Standard | Signal | Data rate |
|---|---|---|
| SMPTE 259M | SD-SDI | 270 Mbit/s |
| SMPTE 292M | HD-SDI | 1.485 Gbit/s |
| SMPTE 424M | 3G-SDI | 2.97 Gbit/s |
| SMPTE ST 2081 | 6G-SDI | 5.94 Gbit/s |
| SMPTE ST 2082 | 12G-SDI | 11.88 Gbit/s |

At 3G-SDI (2.97 Gbit/s), the analog frequency content at the BNC connector approaches 2 GHz, requiring precision 75 Ω connectors and cables rated for the frequency. Standard-definition connectors and low-quality patch cables become unreliable at HD and 3G frequencies.[^3]

## AES3 Digital Audio (75 Ω variant)

The AES3 digital audio standard has two physical implementations:
- **AES3 (balanced)** - 110 Ω impedance on XLR connector (standard in audio equipment)
- **AES3id (unbalanced)** - 75 Ω impedance on BNC connector (standard in video facilities to route digital audio on video-compatible patch bays)

The 75 Ω BNC version of AES3 (sometimes called S/PDIF when used in consumer contexts) allows digital audio to share infrastructure with video signals in broadcast facilities.[^4]

## Physical Variants

| Variant | Description |
|---|---|
| Standard BNC | Full-size; dominant in professional video |
| Mini-BNC | Smaller body; used in some rack panels and densely packed patch bays |
| HD-BNC (DIN 1.0/2.3) | Miniature 75 Ω BNC for high-density 12G-SDI panels |
| Triaxial (Triax) | Three-conductor BNC variant for camera return and tally in broadcast production |

---

[^1]: Amphenol. ["History of RF Connector Development"](https://www.amphenolrf.com/knowledge/rf-connector-history.html). Amphenol RF. (Documents Paul Neill and Carl Concelman as co-inventors; names the BNC from "Bayonet Neill-Concelman"; history of Amphenol's role in connector development.)
[^2]: Whitaker, Jerry C. (2005). [*The Electronics Handbook*](https://www.worldcat.org/isbn/9780849318894), 2nd ed. CRC Press. p. 1456. ISBN 978-0-8493-1889-4. (History of the BNC connector in broadcast engineering; adoption for composite video.)
[^3]: Society of Motion Picture and Television Engineers. [*SMPTE ST 424:2012 - 3 Gb/s Signal/Data Serial Interface*](https://doi.org/10.5594/SMPTE.ST424.2012). 2012. doi:10.5594/SMPTE.ST424.2012. (Defines 3G-SDI connector and cable requirements; specifies BNC 75 Ω performance at 2.97 Gbit/s.)
[^4]: AES. [*AES3-2009: AES standard for digital audio - Digital input-output interfacing - Serial transmission format for two-channel linearly represented digital audio data*](https://www.aes.org/publications/standards/search.cfm?docID=14). Audio Engineering Society. 2009. (Defines both the 110 Ω balanced XLR and the 75 Ω unbalanced BNC implementations of the AES3 standard.)

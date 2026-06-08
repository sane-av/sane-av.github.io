---
term: "Balun"
category: "Audio"
relatedTerms: ["balanced-circuit", "unbalanced", "impedance", "transformer", "coaxial cable", "XLR", "video distribution"]
---

A **balun** (contraction of *balanced-to-unbalanced*) is a passive electrical device used to interface a balanced circuit with an unbalanced circuit. Baluns provide impedance transformation and/or signal conversion between the two circuit types while maintaining isolation between them.

In AV systems, baluns appear in two main contexts:
1. **Audio baluns** - coupling balanced professional audio (XLR) to unbalanced consumer equipment (RCA, 3.5mm), or routing audio over UTP (unshielded twisted pair) structured cabling
2. **Video baluns** - transmitting composite, component, or SDI video over balanced twisted-pair cable instead of coaxial cable

## How Baluns Work

A transformer-based balun uses electromagnetic coupling between two windings. The unbalanced side connects to one winding (center-tap grounded); the balanced side connects to the other winding with its center-tap grounded or floating. The transformer provides both the balanced-to-unbalanced conversion and galvanic isolation (no DC path between sides), which blocks ground loops.

An active balun (sometimes called a "line driver" or "line receiver") uses differential amplifier circuits rather than a transformer. Active baluns can provide gain and often have wider frequency response, but do not provide galvanic isolation.

## Impedance Transformation

Baluns also serve as impedance transformers. A 4:1 balun transforms between a 300 Ω balanced line (classic TV antenna twin-lead) and a 75 Ω unbalanced coaxial input. The impedance transformation ratio equals the square of the winding turns ratio:

$$Z_{ratio} = \left(\frac{N_1}{N_2}\right)^2$$

## History

The balun concept in telecommunications dates to the development of the telephone network in the late 19th century, where **repeating coils** (audio transformers with center-tapped windings) were used to couple balanced telephone lines to two-wire and four-wire circuits.[^1] The term "balun" itself emerged in RF engineering in the mid-20th century with the development of antenna systems that required coupling balanced dipole antennas to unbalanced coaxial feedlines.[^2]

In professional audio, transformer-based baluns became essential as studios mixed professional balanced equipment (operating at +4 dBu) with consumer unbalanced equipment (operating at -10 dBV). Jensen Transformers, founded in 1974, became the leading manufacturer of audio baluns for this purpose, and their application notes remain reference documents for balanced/unbalanced interfacing.[^3]

The use of baluns to extend audio and video over structured cabling (UTP) became widespread in the 1990s-2000s as commercial AV installations sought to reuse existing network cable runs. This technique - sometimes called "CCTV over UTP" or "AV over Cat5" - uses passive or active balun pairs at each end of a Cat5/6 run to convert between the unbalanced signal at the AV device and the balanced signal on the twisted pair.

## Types by Application

| Type | Use | Notes |
|---|---|---|
| Audio balun (passive) | XLR ↔ RCA; professional ↔ consumer level | Transformer-based; provides galvanic isolation |
| UTP audio balun | Audio over structured cabling (Cat5e/6) | Replaces long balanced XLR runs with network cable |
| Video balun (passive) | Composite or component video over twisted pair | Supports runs up to ~300 m for composite |
| SDI balun | SDI video over twisted pair (active, regenerative) | Active; restores signal quality |
| RF balun | Dipole antenna ↔ coaxial feedline | Common 300Ω twin-lead to 75Ω coax |
| HDBaseT extender | HDMI over Cat5e/6 (active) | Not a simple balun; a full protocol converter |

## Common AV Installation Uses

- **Hum elimination:** A transformer balun between a laptop headphone output and a mixing console breaks the ground loop that causes 60 Hz hum when both devices share a power circuit.
- **Long cable runs:** A passive audio balun pair can extend line-level audio 100+ meters over Cat5 cable, far beyond the practical limit of unbalanced coaxial runs.
- **Rack equipment grounding:** Balanced transformer isolation between sources and amplifiers prevents ground noise from noisy dimmer circuits from entering the audio chain.

---

[^1]: Huurdeman, Anton A. (2003). [*The Worldwide History of Telecommunications*](https://www.wiley.com/en-us/The+Worldwide+History+of+Telecommunications-p-9780471205050). Wiley-IEEE Press. pp. 320-325. ISBN 978-0-471-20505-0. (History of repeating coils and transformer coupling in telephone networks.)
[^2]: Sevick, Jerry (2001). [*Transmission Line Transformers*](https://www.worldcat.org/isbn/9781884932182), 4th ed. Noble Publishing. ISBN 978-1-884932-18-2. (Definitive reference on RF balun design; covers history of the term and development for antenna applications.)
[^3]: Whitlock, Bill (2014). ["Audio System Grounding and Interfacing: An Overview"](https://www.jensentransformers.com/an/an004.pdf) (PDF). Jensen Transformers Application Note AN-004. (Practical guide to audio balun selection, grounding, and hum elimination in professional AV systems.)

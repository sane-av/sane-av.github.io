---
term: "Amplifier"
category: "Audio"
relatedTerms: ["gain", "signal level", "impedance", "power", "distortion", "preamplifier", "loudspeaker", "gain structure"]
---

An **amplifier** is a device that increases the power, voltage, or current of a signal. In AV systems, the term most commonly refers to a **power amplifier** - a device that takes a line-level audio signal and produces sufficient electrical power to drive one or more loudspeakers. The fundamental principle is that a small input signal controls a larger output signal drawn from a power supply, with the ratio of output to input being the **gain**.

## Classes of Amplifier Operation

Power amplifiers are classified by how their output transistors (or tubes) are biased relative to the signal cycle. The class determines the tradeoff between efficiency and distortion:

| Class | Conduction angle | Efficiency | Distortion | Common AV Use |
|---|---|---|---|---|
| **A** | 360° (always on) | ≤25% | Very low | High-end audio |
| **B** | 180° (half cycle each) | ~78% | Crossover distortion | Obsolete in audio |
| **AB** | >180° (slight overlap) | 50-70% | Low | Most professional and consumer audio |
| **D** | Switching (PWM) | 85-95% | Low with good filtering | Install amps, powered speakers |
| **G/H** | AB with supply rail switching | 70-80% | Low | Touring amplifiers |

**Class D** (switching) amplifiers dominate modern professional AV installations because of their high efficiency, low heat generation, and compact form factor. The "D" designation does not stand for "digital" - a Class D amplifier modulates a carrier signal (typically 300 kHz-1 MHz) using pulse-width modulation and is compatible with analog signal paths.[^1]

## History

### Vacuum tubes (1906-1950s)

The triode vacuum tube, invented by Lee de Forest in **1906** (U.S. Patent 841,387), was the first practical amplifying device.[^2] It enabled the amplification of audio signals for public address, radio broadcast, and telephony - applications that previously required acoustic horns or were impossible over distance. The first public address system using vacuum tube amplifiers was demonstrated by AT&T engineers in 1916 at a political event in Baltimore, Maryland.[^3]

Through the 1920s-1940s, vacuum tube amplifiers powered virtually all public address systems, radio transmitters, and early cinema sound systems. The Western Electric 555W receiver (1926) and the associated amplifier systems established the first standardized cinema audio chain.[^4]

### Transistors and solid state (1947-present)

The bipolar junction transistor was invented by Bardeen, Brattain, and Shockley at Bell Laboratories in **December 1947**.[^5] Transistorized amplifiers began displacing tube designs in professional audio during the 1960s, offering greater reliability, lower operating voltage, and smaller size. By the 1970s, solid-state designs dominated professional AV.

### Integrated circuits and Class D (1960s-present)

The operational amplifier (op-amp) as an integrated circuit - first realized as the Fairchild µA709 (1965) and refined as the µA741 (1968) - enabled compact, stable gain stages that became ubiquitous in audio processing equipment.[^6]

Class D switching amplifier technology was patented as early as 1958 (Baxandall, UK Patent 848,029), but practical audio-grade Class D amplifiers required fast switching transistors and precision PWM control that only became economically viable in the 1990s-2000s.[^7]

## Types in AV Systems

| Type | Description |
|---|---|
| **Power amplifier** | Line-level input → speaker-level output; provides wattage to drive loudspeakers |
| **Preamplifier** | Low-level source signals → line level; provides gain and source selection |
| **Distribution amplifier** | Splits and amplifies a signal to multiple outputs without level loss |
| **Headphone amplifier** | Low-power amplifier matched to headphone impedance (typically 8-600 Ω) |
| **Microphone preamplifier** | Amplifies mic-level signals (~-60 to -40 dBu) to line level; may include phantom power |
| **Installed sound amplifier** | Multi-channel power amp optimized for fixed installation; often rackmounted |
| **70V / 100V amplifier** | Drives a constant-voltage distribution system for distributed speaker networks |

## Key Specifications

- **Power output** (watts RMS into rated load impedance, typically 8 Ω or 4 Ω)
- **Total Harmonic Distortion + Noise (THD+N)** at rated power (lower = cleaner)
- **Signal-to-noise ratio** (dB below rated output)
- **Frequency response** (±dB over 20 Hz-20 kHz)
- **Damping factor** (output impedance relative to nominal load; higher = tighter bass control)
- **Input sensitivity** (what input voltage produces rated output)
- **Bridgeable** (whether two channels can be combined for higher mono power)

## Gain Structure Interaction

See also: [gain structure](/glossary/gain-structure). An amplifier's input sensitivity must be matched to the output level of the preceding device (DSP, mixer, preamplifier) so that full output power is reached when the upstream device is at its nominal operating level. Mismatched gain structure - operating the amplifier's gain control at maximum while the upstream signal is low - degrades signal-to-noise ratio.

---

[^1]: Self, Douglas (2013). [*Audio Power Amplifier Design*](https://www.worldcat.org/isbn/9780240526133), 6th ed. Focal Press / Routledge. ISBN 978-0-240-52613-3. (Chapter 17: Class D amplifiers; clarifies the "D does not mean digital" point.)
[^2]: U.S. Patent 841,387 - de Forest, Lee, "Device for amplifying feeble electrical currents", issued 1907-01-15. [View at Google Patents](https://patents.google.com/patent/US841387).
[^3]: Engineering and Technology History Wiki. ["Milestones: Public Address System, 1915"](https://ethw.org/Milestones:Public_Address_System,_1915). IEEE History Center. (IEEE Milestone designation for the first practical public address system developed by AT&T engineers; first public demonstration 1916.)
[^4]: Altman, Rick (1995). [*Sound Theory, Sound Practice*](https://www.worldcat.org/isbn/9780415908801). Routledge. ISBN 978-0-415-90880-1. (Chapter on Western Electric cinema sound standardization, pp. 44-46.)
[^5]: Riordan, Michael; Hoddeson, Lillian (1997). [*Crystal Fire: The Birth of the Information Age*](https://www.worldcat.org/isbn/9780393041248). Norton. ISBN 978-0-393-04124-8. (Account of the transistor's invention at Bell Labs, December 1947.)
[^6]: Williams, Jim (1990). [*Analog Circuit Design*](https://www.worldcat.org/isbn/9780750691663). Butterworth-Heinemann. ISBN 978-0-7506-9166-3. (History of the op-amp from µA709 to µA741, pp. 1-6.)
[^7]: Baxandall, Peter J. [UK Patent GB848029A - "Transistor sine wave LC oscillators"](https://worldwide.espacenet.com/patent/search?q=PN%3DGB848029). Application 1958, published 1960. (Early Class D/switching amplifier concept. Cited in Self 2013 Chapter 17 as first Class D patent.)

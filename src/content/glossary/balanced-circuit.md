---
term: "Balanced Circuit"
category: "Audio"
relatedTerms: ["balun", "XLR", "common-mode rejection", "noise", "differential amplifier", "gain structure", "microphone"]
---

A **balanced circuit** is an electrical circuit consisting of two conductors that have equal impedances along their lengths, to ground, and to all other circuits. In professional audio, a balanced circuit carries a signal on two conductors simultaneously - one the "hot" (positive polarity) conductor and the other the "cold" (negative polarity) conductor - while the impedances of both conductors to ground remain equal.

The primary advantage of a balanced circuit is its rejection of **common-mode interference**: noise induced by external electromagnetic fields affects both conductors equally and in phase. Because the receiving device responds only to the *difference* between the two conductors, the equal (common-mode) noise is subtracted out and the signal is recovered cleanly.[^1]

## How Common-Mode Rejection Works

When an external noise source (power line hum, RF interference, lighting dimmers) couples into a cable, it induces the same voltage on both conductors - this is common-mode noise. At the receiving end, a transformer or differential amplifier subtracts one conductor from the other. The signal, which is equal-and-opposite on the two conductors, doubles in amplitude; the noise, which is equal and in-phase, cancels to zero.

The effectiveness of this cancellation is measured as **Common-Mode Rejection Ratio (CMRR)**, expressed in dB. A well-designed balanced input has CMRR of 60 dB or higher at 60 Hz (power line frequency), meaning hum is attenuated by 1000:1 or more relative to signal.[^2]

**Critical distinction:** Impedance balance - not signal symmetry - is what provides noise rejection. A balanced circuit does not require equal-and-opposite signals on both conductors; it requires equal impedances from both conductors to ground. A circuit with asymmetric impedances will have differential noise pickup even if the signals are symmetric.[^1]

## History

The balanced line principle was first applied to telephone networks in the late 19th century. Early telephone lines run alongside electric power lines suffered severe interference. Engineers at Bell Telephone resolved this by routing telephone wire as pairs, and later by introducing **crossover transpositions** - swapping the two conductors every few hundred yards to equalize the total interference induced on each leg. This technique, which is the physical precursor to the electrical balance concept, was in use by the 1890s.[^3]

The systematic mathematical understanding of balanced circuits as impedance-matched differential systems was formalized during the development of long-distance telephony in the early 20th century. By the 1930s, balanced circuits were standard practice for professional audio over telephone trunk lines, and the principles were codified in Bell System Technical References.[^3]

The **XLR connector** - the standard physical interface for balanced audio - was developed by Cannon Electric in the 1950s (originally the Cannon X series, later modified to XLR) and became the universal professional audio connector for balanced microphone and line-level signals.[^4]

## Balanced vs Unbalanced

| Property | Balanced | Unbalanced |
|---|---|---|
| Conductors | 2 signal + 1 ground shield | 1 signal + 1 ground (return) |
| Connector (audio) | XLR (3-pin), TRS | TS, RCA, 3.5mm TS |
| Noise rejection | High (CMRR 60+ dB) | None beyond shield |
| Max practical cable run | 100+ m (analog audio) | ~6 m before noticeable noise |
| Typical use | Microphones, professional line level | Consumer audio, guitar, headphones |

## Pin Assignment (AES14 / EIA RS-297-A)

For XLR connectors, the standard pin assignment per AES14-1992 is:
- **Pin 1**: Ground (shield)
- **Pin 2**: Hot (positive, "+" polarity)
- **Pin 3**: Cold (negative, "-" polarity)

This "Pin 2 Hot" convention is universal in professional AV. Older British and some European equipment used "Pin 3 Hot"; connecting the two results in a 180° phase reversal (polarity inversion) rather than signal loss.

## Star Quad Cable

Standard balanced audio cable uses a twisted pair. **Star quad** cable uses four conductors arranged in a square, with diagonally opposite conductors connected together to form the two legs. This geometry provides additional rejection of magnetic field interference (not just electric field) by ensuring that any external magnetic field induces equal flux in both pairs. Star quad is preferred for long microphone runs in high-interference environments.[^2]

---

[^1]: Ballou, Glen, ed. (2015). [*Handbook for Sound Engineers*](https://www.worldcat.org/isbn/041584293X), 5th ed. Taylor & Francis. pp. 1267-1268. ISBN 041584293X. ("Only the common-mode impedance balance of the driver, line, and receiver play a role in noise or interference rejection. This noise or interference rejection property is independent of the presence of a desired differential signal.")
[^2]: Benchmark Media. ["The Importance of Star-Quad Microphone Cable"](https://benchmarkmedia.com/blogs/application_notes/116637511-the-importance-of-star-quad-microphone-cable). Benchmark Media Systems. (Technical note on CMRR measurement and star quad geometry.)
[^3]: Huurdeman, Anton A. (2003). [*The Worldwide History of Telecommunications*](https://www.wiley.com/en-us/The+Worldwide+History+of+Telecommunications-p-9780471205050). Wiley-IEEE Press. pp. 314-323. ISBN 978-0-471-20505-0. (History of balanced telephone lines, crossover transpositions, and twisted-pair cabling from the 1890s through 1912.)
[^4]: Whitlock, Bill (2014). ["Audio System Grounding and Interfacing: An Overview"](https://www.jensentransformers.com/an/an004.pdf) (PDF). Jensen Transformers Application Note AN-004. (History of the XLR connector, pin 2 hot convention, and balanced circuit theory for AV practitioners.)

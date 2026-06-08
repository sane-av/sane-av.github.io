---
term: "Acoustics"
category: "Audio"
relatedTerms: ["reverberation", "absorption", "reflection", "diffusion", "sound pressure level", "room modes", "noise criterion", "architectural acoustics"]
---

**Acoustics** is the branch of physics that deals with the generation, propagation, and effects of mechanical waves in gases, liquids, and solids - commonly called sound. In AV and architectural contexts, the term is used more narrowly to mean the acoustic properties of a room or space: the sum of all characteristics that determine how sound behaves within it.

ANSI/ASA S1.1-2013 gives the dual definition: "(a) Science of sound, including its production, transmission, and effects, including biological and psychological effects. (b) Those qualities of a room that, together, determine its character with respect to auditory effects."[^1]

## History

The study of acoustics is among the oldest sciences. In the 6th century BCE, Pythagoras observed that the pleasing intervals in music corresponded to simple integer ratios of string lengths - the first quantitative study of vibrating strings.[^2] Aristotle (~350 BCE) described sound as compressions and rarefactions of air that propagate outward - a remarkably accurate description of longitudinal wave propagation.[^3]

Around 20 BCE, the Roman architect Vitruvius wrote *De architectura* (Book V), the earliest known treatise on architectural acoustics. He described sound as a wave analogous to water ripples, analyzed echo and reflection in theaters, and recommended that the rising seats of Greek theaters were designed to prevent the deterioration of sound as it traveled upward.[^4]

During the Scientific Revolution, Galileo Galilei (1564-1642) and Marin Mersenne (1588-1648) independently completed the mathematical description of vibrating strings. Mersenne's *Harmonie universelle* (1634) laid out the relationship between string length, tension, mass, and pitch.[^5] The speed of sound in air was measured successfully between 1630 and 1680 by multiple investigators.

In 1687, Isaac Newton derived the relationship for wave propagation velocity in solids in *Philosophiae Naturalis Principia Mathematica* - a cornerstone of physical acoustics.[^5]

The 19th century produced the two great systematizers of acoustics: Hermann von Helmholtz, whose *On the Sensations of Tone* (1863) founded physiological and psychoacoustics; and Lord Rayleigh, whose *The Theory of Sound* (1877-1878) remains a foundational reference, combining all prior knowledge with Rayleigh's own extensive contributions.[^6]

### Architectural acoustics and Wallace Clement Sabine

The applied discipline of **architectural acoustics** - designing rooms for predictable acoustic behavior - was founded by Wallace Clement Sabine (1868-1919) at Harvard University. In 1900, Sabine published his measurement of **reverberation time** (now called RT60): the time for sound to decay by 60 dB after the source stops. He derived the empirical formula:

$$RT_{60} = \frac{0.161 \cdot V}{A}$$

where $V$ is room volume in cubic meters and $A$ is the total acoustic absorption in sabins.[^7] This formula, and the unit named in his honor, remain in daily use by acoustic consultants worldwide.

## Key Concepts for AV Professionals

### Reverberation

Sound continues to reflect off room surfaces after the source stops. The length of this decay (RT60) determines whether a space favors music (longer RT - 1.5-2.5 s for orchestral halls) or speech intelligibility (shorter RT - 0.4-0.8 s for conference rooms). See also: [SANE-001](/standards/SANE-001-audio-levels) for signal level requirements that interact with reverberation.

### Absorption, reflection, and diffusion

Every material in a room has a **absorption coefficient** (0 = perfect reflector, 1 = perfect absorber) that varies by frequency. Acoustic treatment combines:

| Treatment type | Function |
|---|---|
| Absorbers (foam, fiberglass, fabric panels) | Reduce reflections, lower RT60 |
| Diffusers (QRD, skyline panels) | Scatter reflections evenly, prevent standing waves |
| Bass traps (thick absorbers in corners) | Control low-frequency room modes |
| Reflectors (hard, angled surfaces) | Direct early reflections beneficially (e.g., toward audience) |

### Room modes (standing waves)

In enclosed spaces, sound at frequencies whose half-wavelengths divide evenly into the room dimensions creates **standing waves** (resonant modes). These cause severe frequency-response irregularities at low frequencies - some seats receive extreme bass emphasis, others a bass null. Modal frequencies are approximately:

$$f = \frac{c}{2} \sqrt{\left(\frac{n_x}{L_x}\right)^2 + \left(\frac{n_y}{L_y}\right)^2 + \left(\frac{n_z}{L_z}\right)^2}$$

where $c$ = speed of sound, $L_x, L_y, L_z$ = room dimensions, $n_x, n_y, n_z$ = integers.[^8]

### Noise criterion

Background noise in a space limits the usable signal-to-noise ratio of speech. [HVAC, mechanical, and electrical noise](/glossary/noise-criterion) is rated using NC (Noise Criterion) or NCB curves. Recommended NC ratings for AV spaces: conference rooms 25-35, boardrooms 25-30, home theaters 20-25.

## Subdisciplines Relevant to AV

- **Architectural acoustics** - design of performance venues, classrooms, conference rooms, studios
- **Electroacoustics** - loudspeakers, microphones, and the electronic manipulation of acoustic signals
- **Psychoacoustics** - how humans perceive sound (loudness, localization, masking, intelligibility)
- **Room acoustics** - modeling and measuring how sound behaves within enclosed spaces

## Key Standards

- **ANSI/ASA S1.1** - Acoustical Terminology
- **ISO 3382-1** - Acoustics: Measurement of room acoustic parameters (performance spaces)
- **ISO 3382-2** - Acoustics: Measurement of room acoustic parameters (ordinary rooms)
- **ASTM E336** - Standard test method for airborne sound attenuation between rooms
- **ANSI/ASHRAE 189.1** - includes acoustic requirements for sustainable buildings

---

## References

[^1]: [ANSI/ASA S1.1-2013](https://acousticalsociety.org/standards/). *Acoustical Terminology*. Acoustical Society of America. (Definition 12.04, "acoustics"; Definition 12.06, "room acoustics".)
[^2]: Boyer, C.; Merzbach, U. (1991). [*A History of Mathematics*](https://www.worldcat.org/isbn/9780471543978). Wiley. p. 55. ISBN 978-0-471-54397-8.
[^3]: Princeton University Press. ["How Sound Propagates"](http://press.princeton.edu/chapters/s9912.pdf) (PDF). Quoting Aristotle's *Treatise on Sound and Hearing*. Archived from the original 2022-10-09.
[^4]: Vitruvius Pollio. [*The Ten Books on Architecture*](https://archive.org/details/vitruviustenbook00vitr_0), Book V, §6-8. Tr. Morris Hickey Morgan, 1914. Harvard University Press.
[^5]: Pierce, Allan D. (1989). [*Acoustics: An Introduction to its Physical Principles and Applications*](https://www.worldcat.org/isbn/0883186128). Acoustical Society of America. ISBN 0-88318-612-8.
[^6]: Rayleigh, Lord (John Strutt, 3rd Baron Rayleigh) (1877). [*The Theory of Sound*](https://archive.org/details/theoryofsound01raylgoog), Volume 1. Macmillan and Co. (Reprinted Dover, 1945. ISBN 978-0-486-60292-9.)
[^7]: Sabine, Wallace Clement (1900). "Reverberation." *The American Architect*. Reprinted in: Sabine, W.C. (1922). [*Reverberation and Other Factors*](https://archive.org/details/reverberation00sabi). Harvard University Press. (Original derivation of the Sabine reverberation formula.)
[^8]: Kinsler, L.E. et al. (1999). [*Fundamentals of Acoustics*](https://www.worldcat.org/isbn/9780471847892), 4th ed. Wiley. ISBN 978-0-471-84789-2.

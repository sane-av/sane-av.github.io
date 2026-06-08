---
term: "1/3 Octave Equalizer"
category: "Audio"
relatedTerms: ["octave band", "parametric equalizer", "frequency response", "room correction", "pink noise"]
---

A **1/3 octave equalizer** is a graphic equalizer that divides the audible frequency spectrum into 30 or 31 bands, each centered one-third of an octave apart, with a fixed center frequency and fixed bandwidth per band. A single slider controls the boost or cut at each center frequency, allowing the operator to shape the overall frequency response of an audio system. It is the standard equalization tool for professional sound reinforcement system tuning.[^1]

## How It Works

The audible frequency range spans roughly 20 Hz to 20 kHz - approximately 10 octaves. Dividing each octave into thirds produces 30 bands (20 Hz to 16 kHz) or 31 bands when a band centered on 20 kHz is added. The center frequencies follow ISO 266, the international standard for preferred frequencies (e.g., 25 Hz, 31.5 Hz, 40 Hz, 50 Hz, 63 Hz ... 16 kHz, 20 kHz).[^2]

Each band implements a second-order filter with a constant **Q** (quality factor) of approximately 4.3 at the -3 dB points, giving a bandwidth of exactly one-third of an octave regardless of center frequency.[^3] Adjacent bands overlap, so adjustments interact with neighboring bands.

The term *graphic* refers to the visual representation created by the slider positions - the sliders form a curve that approximates the frequency response being applied, making the setting immediately readable at a glance.[^1]

## History

The first true graphic equalizer was the Cinema Engineering type 7080, an active tube device developed in the **1950s** by Art Davis. It featured six bands, each 1.5 octaves wide, with an 8 dB boost/cut range using slide switches.[^4]

Davis followed this in **1961** with the Langevin EQ-252-A (seven sliders), then reworked it for Altec Lansing as the Model 9062A EQ, which sold well into the 1970s.[^4] In **1967**, Davis developed the first 1/3 octave variable notch filter set - the Altec-Lansing "Acousta-Voice" system - establishing 1/3 octave spacing as the professional standard for room correction.[^5]

The 1/3 octave resolution became dominant in professional AV because it aligns with the ISO octave band standard used in acoustic measurement instrumentation, allowing direct comparison between measured room response and applied EQ correction.[^2]

## Common Uses in AV

- **System equalization:** Correcting room resonances and modal anomalies identified during acoustic measurement with a real-time analyzer (RTA)
- **Feedback suppression:** Attenuating frequencies that are prone to ringing in a speech reinforcement system
- **House curve:** Applying a gentle bass-shelf boost to compensate for the psychoacoustic loss of bass perception at lower listening levels
- **Loudspeaker alignment:** Compensating for driver response deviations identified on a manufacturer's frequency response plot

## 1/3 Octave vs. Parametric Equalizer

| Feature | 1/3 Octave Graphic | Parametric |
|---|---|---|
| Center frequencies | Fixed (ISO 266) | Fully adjustable |
| Bandwidth (Q) | Fixed (~4.3) | Adjustable |
| Bands | 30 or 31 | Typically 4-8 |
| Visual feedback | Yes (slider positions) | No |
| Surgical precision | Limited | High |
| Typical use | Room EQ, system tuning | Problem frequencies, crossover shaping |

In modern practice, DSPs with parametric EQ sections have largely replaced hardware 1/3 octave equalizers for system tuning. However, 1/3 octave EQ curves remain a useful reference standard for specifying and verifying system frequency response, and are required by some acoustic commissioning standards.

## Limitations

- Minimum phase filters: boosts and cuts introduce phase shift, most audible when corrections exceed 6 dB[^6]
- Fixed band spacing means a resonance that falls between two center frequencies requires simultaneous adjustment of two adjacent bands
- Constant-Q designs produce asymmetrical curves at large boost/cut values

---

[^1]: White, Glenn; Louie, Gary (2005). [*The Audio Dictionary*](https://books.google.com/books?id=DulVm8t88QkC), 3rd ed. University of Washington Press. p. 140. ISBN 978-0-295-98498-8.
[^2]: ISO 266:1997. [*Acoustics - Preferred frequencies*](https://www.iso.org/standard/3822.html). International Organization for Standardization.
[^3]: Bohn, Dennis (August 1997). ["Operator Adjustable Equalizers: An Overview"](https://web.archive.org/web/20140402040654/http://www.rane.com/note122.html). Rane Corporation. Archived from the original 2014-04-02.
[^4]: Hoffman, Frank, ed. (2005). ["Davis, Arthur C. (11 Mar 1908 - 7 Nov 1970)"](https://books.google.com/books?id=-FOSAgAAQBAJ&pg=PA550). *Encyclopedia of Recorded Sound*, 2nd ed. Routledge. p. 550. ISBN 978-1-135-94950-1.
[^5]: Bohn, Dennis (August 1997). ["Operator Adjustable Equalizers: An Overview"](https://web.archive.org/web/20140402040654/http://www.rane.com/note122.html). Rane Corporation. (same source as [^3]; covers the Altec-Lansing Acousta-Voice system.)
[^6]: Preis, Douglas; Bloom, P. J. (November 1984). ["Perception of Phase Distortion in Anti-Alias Filters"](https://aes2.org/publications/elibrary-page/?id=4476). *Journal of the Audio Engineering Society*, 32(11): 842-848.

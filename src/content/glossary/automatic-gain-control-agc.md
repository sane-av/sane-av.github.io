---
term: "Automatic Gain Control (AGC)"
category: "Audio"
relatedTerms: ["gain", "compressor", "limiter", "gain structure", "microphone", "signal level", "dynamic range"]
---

**Automatic gain control (AGC)** is a feedback circuit or algorithm that continuously adjusts the gain applied to a signal in order to maintain a relatively constant output level despite varying input levels. When the input is loud, AGC reduces gain; when the input is quiet, AGC increases it.

AGC differs from a compressor in intent: a compressor is used deliberately to shape dynamics for artistic or technical purposes, while AGC is a "set and forget" mechanism designed to make a variable signal appear approximately constant. In practice the distinction is technical rather than functional - an AGC is essentially an automatic compressor with a long time constant.

## How It Works

An AGC circuit measures the signal level (typically using a peak or RMS detector) and compares it against a target setpoint. A control voltage (or digital value) is generated to drive a voltage-controlled amplifier (VCA) or digital gain stage:

- **Attack time**: how quickly the gain is reduced when level rises above the setpoint
- **Release time** (or decay time): how slowly the gain recovers when level falls below the setpoint
- **Threshold**: the level at which gain control begins

Long release times are common in AGC designs to avoid the audible "breathing" (level swelling up in pauses) that occurs when release is too fast.

## History

AGC was first developed for radio receivers. **Harold Wheeler** at RCA described and patented **automatic volume control (AVC)** - the original term for AGC in broadcast receivers - in a 1925 paper and subsequent patents.[^1] AVC was incorporated into AM radio receivers by the late 1920s and became a standard feature. It solved a fundamental problem: AM broadcast signals varied enormously in strength depending on atmospheric conditions and distance, causing uncomfortable volume swings as listeners moved across the dial.

The same principle was adapted to recording and transmission systems throughout the 1930s-1950s. The BBC and other broadcast organizations used automatic gain riding on transmission links to maintain consistent levels over long-distance circuits.[^2]

With the introduction of solid-state VCAs in the 1970s and early DSPs in the 1980s, AGC moved from discrete analog circuits into integrated audio processing. Modern DSP-based AGC algorithms are used in virtually every conferencing system, hearing aid, and mobile phone microphone.

## Applications in AV Systems

| Application | Why AGC is used | Risk |
|---|---|---|
| Wireless microphone receivers | Compensates for RF path variation and presenter distance | Raises noise floor during silence; can amplify HVAC noise |
| Video conferencing endpoints | Normalizes volume across multiple talkers at different distances | May amplify someone whispering across the room |
| Public address in variable environments | Adjusts for varying crowd noise and source distance | Pumping artifacts when ambient noise changes abruptly |
| Hearing loops and assistive listening | Maintains consistent level for hearing impaired users | Level changes may confuse hearing aid wearers |
| Recording to a fixed-bit-depth recorder | Prevents clipping when source level is unknown | Destroys dynamic contrast in music performance |

## AGC vs Manual Gain vs Compression

| Approach | Control | Use case |
|---|---|---|
| Manual gain (fixed) | Human operator sets gain once | Predictable source levels; professional productions |
| AGC | Automatic, slow-acting feedback | Unattended systems, public address, telephony |
| Compressor (fast attack) | Automatic, fast-acting | Broadcast loudness control, live music |
| Limiter | Automatic, instantaneous | Clipping prevention; last line of defense |

In professional AV installations, AGC is generally avoided on program audio because it removes dynamic information. It is acceptable for speech-only systems where consistent intelligibility matters more than preserving dynamics. See also: [gain structure](/glossary/gain-structure).

---

[^1]: Wheeler, Harold A. (1928). "Automatic Volume Control for Radio Receiving Sets." *Proceedings of the Institute of Radio Engineers*, 16(10): 30-31. U.S. Patent 1,743,523 - Wheeler, Harold A., ["Automatic volume control"](https://patents.google.com/patent/US1743523), filed 1925, issued 1930-01-14. (Original AVC/AGC patent and foundational paper.)
[^2]: Engineering and Technology History Wiki. ["Harold A. Wheeler"](https://ethw.org/Harold_A._Wheeler). IEEE History Center. (Biography documenting Wheeler's invention of AVC and its widespread adoption in commercial broadcast receivers from the late 1920s.)

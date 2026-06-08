---
term: "Bandwidth"
category: "Audio"
relatedTerms: ["frequency response", "bit-rate", "signal level", "equalizer", "HDMI", "Ethernet", "bandwidth-networking"]
---

**Bandwidth** has two distinct meanings in AV systems, both in common use:

1. **Analog/acoustic bandwidth** - the range of frequencies a signal, device, or channel can carry; measured in Hz
2. **Network/digital bandwidth** - the maximum data rate of a digital communication link or channel; measured in bits per second (bit/s) or multiples thereof (Mbit/s, Gbit/s)

The two usages are related - higher analog bandwidth in a digital system requires more network bandwidth to represent it - but the terms refer to different physical quantities and should not be used interchangeably.

---

## Analog Bandwidth

In analog audio and video, bandwidth refers to the span of frequencies a device or signal path can handle. It is typically defined as the range of frequencies over which a device's response remains within a specified tolerance (commonly ±3 dB).

### Audio Bandwidth

Human hearing spans approximately **20 Hz to 20,000 Hz** (20 kHz). Professional audio equipment is typically specified to be flat (±0.5 dB or better) across this range. The usable audio bandwidth of various systems:

| System | Bandwidth |
|---|---|
| POTS telephone | 300 Hz - 3.4 kHz |
| AM radio | ~100 Hz - 4 kHz (audio bandwidth) |
| FM radio | 20 Hz - 15 kHz |
| CD audio | 20 Hz - 20 kHz (44.1 kHz sample rate → Nyquist limit 22.05 kHz) |
| Professional audio (96 kHz) | 20 Hz - 48 kHz (above hearing) |

### Video Bandwidth

In analog video, bandwidth determines the horizontal resolution: the higher the bandwidth, the finer the detail the signal can carry. Standard definition NTSC video has a video bandwidth of approximately 4.2 MHz. High-definition analog component video (HDTV) required up to 30 MHz per channel, which drove the shift to digital distribution.

---

## Digital / Network Bandwidth

In networking and digital AV, bandwidth refers to the maximum data throughput of a link or interface. This usage comes from information theory: Shannon's theorem (1948) showed that the maximum information rate of a channel is proportional to its analog bandwidth - hence the borrowed term.[^1]

### Interface Bandwidth Reference

| Interface | Max bandwidth |
|---|---|
| Fast Ethernet (100BASE-TX) | 100 Mbit/s |
| Gigabit Ethernet | 1,000 Mbit/s (1 Gbit/s) |
| 10G Ethernet | 10 Gbit/s |
| USB 2.0 | 480 Mbit/s |
| HDMI 1.4 | 10.2 Gbit/s |
| HDMI 2.0 | 18 Gbit/s |
| HDMI 2.1 | 48 Gbit/s |
| DisplayPort 2.1 (UHBR20) | 80 Gbit/s |
| SDI (3G-SDI) | 2.97 Gbit/s |
| SDI (12G-SDI) | 11.88 Gbit/s |

### Why Bandwidth Matters in AV Design

- **4K at 60 Hz with 4:4:4 color** requires approximately 12 Gbit/s of raw video data - requiring HDMI 2.0 (18 Gbit/s) or DisplayPort 1.4 (32.4 Gbit/s).[^2] HDMI 1.4 (10.2 Gbit/s) can only carry 4K at 30 Hz, or requires chroma subsampling to 4:2:0 at 60 Hz.
- **AV over IP** streams audio and video as compressed data over Ethernet. Uncompressed 4K at 60 Hz would require ~12 Gbit/s; H.265 compression reduces this to 20-50 Mbit/s for streaming or 1-3 Gbit/s for professional lossless distribution.
- **Bandwidth reservation** in AVB/TSN networks (see [Audio Video Bridging](/glossary/audio-video-bridging-avb)) allows audio streams to reserve a defined fraction of available Ethernet bandwidth, guaranteeing bounded latency.

---

## History of the Term

The word "bandwidth" entered electrical engineering from radio communications, where it described the range of radio frequencies occupied by a transmitted signal. Early amplitude-modulated (AM) radio occupied a bandwidth of twice the highest audio frequency (a voice signal up to 4 kHz occupies an RF bandwidth of 8 kHz). The term was formalized in the Radio Regulations of the International Telecommunication Union (ITU) in the 1920s-1930s.[^3]

Claude Shannon's 1948 paper "A Mathematical Theory of Communication" gave bandwidth its precise mathematical relationship to information capacity (the Shannon-Hartley theorem), which is why the networking community borrowed the term for data rate from the 1960s onward.[^1]

---

[^1]: Shannon, C.E. (July 1948). ["A Mathematical Theory of Communication"](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf) (PDF). *Bell System Technical Journal*. 27 (3): 379-423. doi:10.1002/j.1538-7305.1948.tb01338.x. (Defines channel capacity as a function of bandwidth and signal-to-noise ratio.)
[^2]: HDMI Forum. [*HDMI Specification 2.0*](https://www.hdmi.org/spec/20). 2013. (Defines 18 Gbit/s aggregate bandwidth; Table of supported video formats at 4K/60 Hz.)
[^3]: International Telecommunication Union. ["History of ITU"](https://www.itu.int/en/history/Pages/ITUsHistory.aspx). ITU. (Background on ITU Radio Regulations development from 1906; bandwidth definitions formalized in international coordination agreements.)

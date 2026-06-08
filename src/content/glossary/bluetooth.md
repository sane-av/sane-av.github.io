---
term: "Bluetooth"
category: "Networking"
relatedTerms: ["wireless", "audio", "latency", "codec", "hearing loop", "personal area network"]
---

**Bluetooth** is a short-range wireless technology standard for exchanging data between devices over distances typically up to 10 meters (Class 2) or 100 meters (Class 1), operating in the 2.402-2.480 GHz ISM band using frequency-hopping spread spectrum. It is managed by the Bluetooth Special Interest Group (SIG).

In AV contexts, Bluetooth is used primarily for wireless audio (headphones, soundbars, hearing aids, wireless microphone accessories), device control (remote controls, room booking panels), and proximity sensing.

## History

Development was initiated in **1989** by Nils Rydbeck, CTO at Ericsson Mobile in Lund, Sweden, with a goal of creating wireless headsets. Principal design was led by Jaap Haartsen and Sven Mattisson at Ericsson.[^1]

The **Bluetooth SIG** was formally launched in **May 1998** with five founding members: Ericsson, Intel, IBM, Nokia, and Toshiba. The name was proposed by Intel's Jim Kardach, inspired by 10th-century Danish king Harald Bluetooth (Harald Blåtand), who unified disparate Danish tribes - a metaphor for a protocol unifying disparate communication standards.[^2]

The first commercial Bluetooth product was a wireless headset demonstrated at COMDEX **1999**. The first Bluetooth mobile phone, the Ericsson R520m, shipped in early **2001**.[^3]

## Version History

| Version | Year | Key change |
|---|---|---|
| 1.0 | 1999 | Initial release; interoperability problems |
| 1.1 | 2001 | Ratified as IEEE 802.15.1 |
| 2.0 + EDR | 2004 | Enhanced Data Rate: up to 3 Mbit/s |
| 2.1 + EDR | 2007 | Secure Simple Pairing; reduced power in idle |
| 3.0 + HS | 2009 | High Speed option via 802.11 co-radio (24 Mbit/s) |
| 4.0 | 2010 | Bluetooth Low Energy (BLE); coin-cell-capable |
| 4.2 | 2014 | IPv6/IoT support; improved security |
| 5.0 | 2016 | 4× range, 2× speed for BLE |
| 5.2 | 2020 | LE Audio; LC3 codec; Auracast broadcast audio |
| 6.0 | 2024 | Channel Sounding (precision ranging) |

## Audio Profiles and Codecs

The audio quality of Bluetooth depends on which profile and codec are negotiated between devices:

| Profile / Codec | Bit rate | Notes |
|---|---|---|
| HSP / HFP (voice) | ~64 kbit/s | Narrowband voice; telephone quality |
| A2DP + SBC | ~320 kbit/s | Mandatory codec; lowest quality stereo |
| A2DP + AAC | ~256 kbit/s | Used by Apple devices |
| A2DP + aptX | ~352 kbit/s | Qualcomm; CD quality claim |
| A2DP + aptX HD | ~576 kbit/s | 24-bit audio |
| A2DP + LDAC | ~990 kbit/s | Sony; near-lossless at max bitrate |
| LE Audio (LC3) | 160-320 kbit/s | Bluetooth 5.2+; better quality at lower bitrate |

## Latency

**Latency is the primary limitation of Bluetooth audio in AV installations.** Classic Bluetooth A2DP audio introduces 100-200 ms of latency, which causes visible lip-sync issues when used with video. Bluetooth 5.2 LE Audio with LC3 codec targets 20-30 ms minimum latency.[^4]

For this reason, Bluetooth audio is generally not suitable for:
- Synchronized playback with video (lip sync fails)
- Live performance monitoring
- Any application where the performer or presenter can hear both acoustic sound and Bluetooth audio simultaneously (comb filtering/echo effect)

Bluetooth audio is acceptable for:
- Background music distribution where lip sync is not required
- Hearing aid streaming (LE Audio hearing aid profile)
- Assistive listening via Auracast (Bluetooth 5.2+)

## Auracast Broadcast Audio

**Auracast**, introduced with Bluetooth LE Audio (5.2+), enables one device to broadcast audio to an unlimited number of receivers simultaneously - similar to a radio station. In AV, this enables:
- Assistive listening systems in public venues (replacing or supplementing induction hearing loops)
- Silent conference / multilingual simultaneous interpretation distribution
- Fitness club audio (participants tune in with their own hearing aids or Auracast-capable earbuds)

Auracast is expected to become a significant part of assistive listening infrastructure as hearing aid manufacturers adopt LE Audio.[^4]

## AV Installation Considerations

- **2.4 GHz interference:** Bluetooth shares the 2.4 GHz band with Wi-Fi (802.11b/g/n), Zigbee, microwave ovens, and other devices. In high-density environments, Bluetooth audio dropouts are common. Frequency-hopping spread spectrum mitigates but does not eliminate interference.
- **Pairing management:** In fixed AV installations, Bluetooth is problematic because devices must pair with a specific source. Visitor-owned phones cannot be pre-paired. Auracast addresses this for audio by eliminating the pairing requirement.
- **Range:** Class 2 Bluetooth (most consumer devices) has a nominal range of 10 m but is significantly reduced by walls, metallic rack enclosures, and human bodies. For reliable room-scale coverage, Class 1 devices or dedicated Bluetooth access points are required.

---

[^1]: European Patent Office. ["Presenting the economic value of patents nominated for the European Inventor Award 2012 - Jaap Haartsen"](http://documents.epo.org/projects/babylon/eponet.nsf/0/39F611EACF119B21C12579F30036D7E4/$File/haartsen_en.pdf) (PDF). Technopolis Group. 30 March 2012. (Biography of Jaap Haartsen; documents Ericsson 1989 origin and development timeline.)
[^2]: Kardach, Jim (5 March 2008). ["Tech History: How Bluetooth got its name"](https://www.eetimes.com/tech-history-how-bluetooth-got-its-name). *EE Times*. (First-person account of the naming; Intel's role in the SIG formation.)
[^3]: Mobile Phone Museum. ["Ericsson R520m"](https://www.mobilephonemuseum.com/phone-detail/r520m). Mobile Phone Museum. (Documents the R520m as the first commercially available Bluetooth phone, Q1 2001.)
[^4]: Bluetooth SIG. ["Bluetooth LE Audio"](https://www.bluetooth.com/learn-about-bluetooth/recent-enhancements/le-audio/). Bluetooth Technology Website. 2022. (Specification of LE Audio, LC3 codec, Auracast broadcast audio, and hearing aid support; latency targets cited as 20-30 ms.)

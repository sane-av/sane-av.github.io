---
term: "Audio Return Channel (ARC)"
category: "Audio"
relatedTerms: ["HDMI", "eARC", "AV receiver", "Dolby Atmos", "DTS:X", "CEC", "optical audio"]
---

**Audio Return Channel (ARC)** is a feature of HDMI that allows a television to send audio upstream to an AV receiver or soundbar over the same HDMI cable used to carry video downstream. It eliminates the need for a separate optical (TOSLINK) or coaxial digital audio cable to return sound from the TV's built-in tuner, streaming apps, or other TV-internal sources.

**Enhanced ARC (eARC)**, introduced in HDMI 2.1, replaces ARC with a higher-bandwidth version that supports lossless and object-based audio formats.

## HDMI ARC vs eARC

| Feature | ARC (HDMI 1.4+) | eARC (HDMI 2.1) |
|---|---|---|
| Introduced | HDMI 1.4 (2009) | HDMI 2.1 (2017) |
| Max audio bandwidth | ~1 Mbit/s (S/PDIF parity) | ~37 Mbit/s |
| Stereo PCM | Yes | Yes |
| Dolby Digital (AC-3) | Yes | Yes |
| DTS | Yes | Yes |
| Dolby Digital Plus | Yes (2-ch fallback) | Yes (full quality) |
| Dolby TrueHD / Atmos (lossless) | No | Yes |
| DTS-HD Master Audio / DTS:X | No | Yes |
| Multi-channel LPCM | No (2-ch only) | Up to 192 kHz, 24-bit |
| Lip sync correction | Manual | Automatic (per spec) |
| Cable requirement | Standard HDMI (any) | High-Speed HDMI (48 Gbps rated preferred) |

ARC's bandwidth limitation (equivalent to S/PDIF at ~3 Mbit/s net) prevents it from carrying lossless audio or the full object-based metadata for Dolby Atmos and DTS:X. eARC resolves this with a dedicated high-speed Ethernet channel repurposed for audio, enabling uncompressed multi-channel PCM and full lossless bitstreams.[^1]

## History

ARC was introduced as part of the **HDMI 1.4 specification** published in **May 2009**.[^2] Prior to ARC, a common TV installation required:
1. HDMI cable from AV receiver to TV (video forward path)
2. Optical TOSLINK cable from TV audio out to AV receiver (audio return path)

ARC eliminated the optical cable. However, in practice, ARC proved unreliable due to implementation differences between manufacturers, particularly around HDMI CEC (Consumer Electronics Control) handshaking - the control protocol ARC depends on to negotiate the audio return path. Incompatibility between ARC implementations across different TV and receiver brands became a frequent consumer complaint.

**HDMI eARC** (part of the **HDMI 2.1 specification**, published **November 2017**) was developed to address both the bandwidth limitation and the reliability problems of ARC.[^3] eARC uses a dedicated pin pair (HDMI pins 13 and 14, formerly used for HEC - HDMI Ethernet Channel) for a separate high-speed audio channel independent of CEC. This makes eARC more robust and adds an identification protocol (EDID-like) that allows devices to negotiate capabilities without depending on CEC.

## Practical AV Installation Notes

- **Port specificity:** ARC and eARC only function on a specifically designated HDMI port on the TV (typically labeled "ARC" or "eARC"). Similarly, on the AV receiver or soundbar, only the ARC-capable input supports the return channel.
- **CEC dependency (ARC):** ARC requires HDMI CEC to be enabled on both the TV and the receiving device. Many consumers and integrators disable CEC to avoid unintended device control, which also disables ARC.
- **eARC independence:** eARC does not depend on CEC for audio transport (though CEC is still used for some control functions). This makes eARC more reliable in installations where CEC is disabled.
- **Lossless passthrough:** If the goal is Dolby Atmos or DTS:X lossless audio from a TV's streaming app (e.g., Apple TV app on a Samsung TV), eARC is required. ARC will deliver a lossy Dolby Digital Plus bitstream at best.
- **Backward compatibility:** eARC ports are backward compatible with ARC. An ARC device connected to an eARC port will use ARC mode.

## Related: HDMI CEC

ARC and eARC work alongside **HDMI CEC**, which allows control signals (volume, power, input selection) to pass over the HDMI cable. TV manufacturers brand CEC under proprietary names: Samsung calls it Anynet+, Sony calls it Bravia Sync, LG calls it SimpLink. All are compliant with the HDMI CEC protocol but interoperability between different brands remains inconsistent.

---

## References

[^1]: HDMI Forum. [*HDMI Specification 2.1*](https://www.hdmi.org/spec21Sub/EArc). Section on eARC. 2017. (Defines eARC bandwidth at 37 Mbit/s, dedicated audio channel, and lossless format support.)
[^2]: HDMI Licensing LLC. [*High-Definition Multimedia Interface Specification Version 1.4*](https://www.hdmi.org/spec/14). May 28, 2009. (Introduced ARC, 3D video, and HDMI Ethernet Channel.)
[^3]: HDMI Forum. [*High-Definition Multimedia Interface Specification Version 2.1*](https://www.hdmi.org/spec/21). November 2017. (Section 7.7: Enhanced Audio Return Channel; specifies the HEC pin repurposing and eARC discovery protocol.)

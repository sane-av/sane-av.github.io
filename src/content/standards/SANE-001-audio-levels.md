---
saneId: "SANE-001"
title: "Audio Signal Levels for Professional AV Systems"
description: "Defines nominal and maximum signal levels for analog audio in professional AV installations, including line level, microphone level, and loudspeaker level reference points."
status: "published"
version: "1.0.0"
pubDate: 2026-05-28
authors: ["SANE Community"]
tags: ["audio", "signal levels", "analog", "installation"]
relatedStandards: []
---

## 1. Scope

This standard specifies nominal and maximum analog audio signal levels for use in professional
AV system design, installation, and documentation. It applies to:

- Line-level audio interconnects between equipment
- Microphone-level signals at the point of transduction
- Loudspeaker-level signals at power amplifier outputs
- Documentation and labeling of audio signal paths

This standard does not cover digital audio formats, network audio protocols, or consumer audio
equipment except where it interfaces with professional systems.

## 2. Definitions

**Nominal Level** — The operating signal level around which a device is designed to function.
Typical program material should average at or near the nominal level.

**Headroom** — The difference in dB between the nominal level and the clip point (maximum
undistorted output).

**dBu** — A decibel unit referenced to 0.775 V RMS (the voltage that dissipates 1 mW into a
600 Ω load). The standard reference for professional audio signal levels.

**dBV** — A decibel unit referenced to 1.0 V RMS. Common in consumer and semi-pro equipment.

**Clip Point** — The signal level at which a device begins to produce significant harmonic
distortion due to clipping.

## 3. Nominal Signal Levels

### 3.1 Professional Line Level

| Parameter | Value |
|-----------|-------|
| Nominal level | +4 dBu |
| Recommended headroom | ≥ 20 dB |
| Clip point (minimum) | +24 dBu |

**Rationale:** +4 dBu (approximately 1.228 V RMS) is the long-established professional audio
industry standard, providing adequate signal-to-noise ratio while maintaining compatibility
across a wide range of equipment.

### 3.2 Consumer / Semi-Pro Line Level

| Parameter | Value |
|-----------|-------|
| Nominal level | −10 dBV |
| Recommended headroom | ≥ 10 dB |

**Note:** −10 dBV (approximately 316 mV RMS) is commonly used in consumer electronics, home
theater equipment, and some prosumer products. When interconnecting with professional equipment,
an active level converter is recommended. Passive resistive pads may be used for temporary
connections but degrade noise performance.

### 3.3 Microphone Level

| Parameter | Value |
|-----------|-------|
| Typical range | −60 dBu to −40 dBu |
| Maximum expected (close-mic, loud source) | −20 dBu |

Microphone-level signals shall be treated as low-level and routed on balanced lines wherever
practicable. Cable runs exceeding 3 m should use shielded twisted pair.

### 3.4 Loudspeaker Level

Loudspeaker-level signals are defined relative to amplifier rated output power (in dBW into
rated load impedance) rather than voltage. Signal routing at loudspeaker level shall be on
dedicated loudspeaker cable; standard audio interconnect cable is not acceptable.

## 4. Interconnect Requirements

### 4.1 Balanced vs. Unbalanced

All professional line-level audio interconnections SHOULD be balanced (differential). Unbalanced
connections MAY be used for:

- Short runs (< 1 m) in low-interference environments
- Consumer-standard equipment with no balanced output option

### 4.2 Connector Types

| Application | Connector |
|-------------|-----------|
| Professional balanced line | XLR-3 (IEC 60268-12) |
| Semi-pro / instrument | 1/4" TRS (6.35 mm) |
| Consumer interconnect | RCA phono |
| Patch bays | 1/4" TRS or TT (Bantam) |

Pin assignments for XLR shall follow the IEC 60268-12 convention: Pin 1 = Ground/Shield,
Pin 2 = Hot (+), Pin 3 = Cold (−).

## 5. Gain Structure Recommendations

A properly gain-structured system maintains signal significantly above the noise floor at every
stage while preserving adequate headroom to avoid clipping.

**Recommended approach:**
1. Set source device output to nominal (+4 dBu or −10 dBV as appropriate)
2. Set each subsequent gain stage so that nominal input produces nominal output
3. Verify that system clip point ≥ nominal + 20 dB at every stage
4. Adjust output attenuation (not input gain) to reduce level when needed

## 6. Compliance

Equipment claiming compliance with SANE-001 shall:

1. Document its nominal input and output levels in dBu or dBV
2. Document its clip point in dBu or dBV
3. Specify whether inputs and outputs are balanced or unbalanced
4. Use the connector types specified in Section 4.2 for the stated application

## 7. References

- IEC 60268-12: Sound system equipment — Part 12: Application of connectors for broadcast,
  audio and audiovisual technology
- AES17: AES standard method for digital audio engineering — Measurement of digital audio
  equipment
- ITU-R BS.468: Measurement of audio-frequency noise voltage level in sound broadcasting

---

*This standard is published under CC BY 4.0. To propose amendments, open an RFC issue on GitHub.*

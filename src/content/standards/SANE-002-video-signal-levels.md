---
saneId: "SANE-002"
title: "Video Signal Levels for Professional AV Systems"
description: "Defines analog and digital video signal level conventions for professional AV installations including composite, component, HDMI, and SDI."
status: "review"
version: "0.9.0"
pubDate: 2026-05-28
authors: ["SANE Community"]
tags: ["video", "signal levels", "HDMI", "SDI", "installation"]
relatedStandards: ["SANE-001"]
---

> **Status: Under Review** - This standard is in its 14-day public review period.
> Feedback welcome via [GitHub Issues](https://github.com/sane-av/sane-av.github.io/issues).

## 1. Scope

This standard specifies video signal levels for professional AV installations. It covers:

- Analog composite and component video signal levels
- Digital baseband video (HDMI, DisplayPort)
- Serial digital interface (SDI) for professional video
- Signal level documentation and system design conventions

## 2. Analog Video Reference Levels

### 2.1 Composite Video (NTSC / PAL)

| Parameter | NTSC | PAL |
|-----------|------|-----|
| Total signal amplitude | 1.0 V p-p | 1.0 V p-p |
| Sync level (below blanking) | −0.286 V | −0.286 V |
| Blanking level | 0 V | 0 V |
| Peak white level | +0.714 V | +0.700 V |
| Load impedance | 75 Ω | 75 Ω |

All analog video signals shall be terminated with 75 Ω at the final destination.
Double-termination degrades signal quality and is not permitted.

### 2.2 Analog Component Video (YPbPr)

| Component | Nominal Amplitude |
|-----------|-------------------|
| Y (luma) | 1.0 V p-p (sync-on-Y) |
| Pb / Cb | ±0.35 V peak |
| Pr / Cr | ±0.35 V peak |

Load impedance: 75 Ω per component.

## 3. Digital Video

### 3.1 HDMI

HDMI signal levels are governed by the HDMI Specification published by HDMI Licensing, LLC.
System designers shall:

1. Not exceed manufacturer-specified cable lengths for passive cables
2. Use HDMI 2.0 or later for 4K/60 Hz signals
3. Specify active optical cable (AOC) or HDBaseT extenders for runs > 10 m

**EDID and HDCP considerations:** Active distribution systems shall preserve EDID and HDCP
handshaking. Stripping HDCP in unauthorized contexts violates the HDCP specification and
applicable law; this standard makes no recommendation to do so.

### 3.2 SDI (Serial Digital Interface)

| Format | Bit Rate | Standard |
|--------|----------|----------|
| SD-SDI | 270 Mbit/s | SMPTE ST 259 |
| HD-SDI | 1.485 Gbit/s | SMPTE ST 292-1 |
| 3G-SDI | 2.97 Gbit/s | SMPTE ST 424 |
| 12G-SDI | 11.88 Gbit/s | SMPTE ST 2082 |

SDI signals are carried on 75 Ω coaxial cable with BNC connectors.
Cable attenuation limits apply per the relevant SMPTE standard for each bit rate.

## 4. Distribution and Routing

### 4.1 Impedance Matching

Signal sources and loads shall present the correct impedance for the signal type:

| Signal Type | Impedance |
|-------------|-----------|
| Analog composite / component | 75 Ω |
| SDI | 75 Ω |
| HDMI / DisplayPort | Per specification |

### 4.2 Signal Splitting

Active signal distribution (powered splitters/distribution amplifiers) is preferred for all
cases requiring more than one destination. Passive splitters are only acceptable for very
short runs (< 0.5 m) with identical termination.

## 5. References

- SMPTE ST 259: SDTV Digital Signal/Data - Serial Digital Interface
- SMPTE ST 292-1: 1.5 Gb/s Signal/Data Serial Interface
- SMPTE ST 424: 3 Gb/s Signal/Data Serial Interface
- CEA-861: A DTV Profile for Uncompressed High Speed Digital Interfaces

---

*This standard is in review under CC BY 4.0. Submit feedback via GitHub.*

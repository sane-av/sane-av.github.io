---
term: "dBu"
abbreviation: "dBu"
category: "Audio"
relatedTerms: ["dBV", "dBFS", "nominal level", "gain structure"]
---

**dBu** is a decibel unit for measuring audio signal voltage, referenced to **0.775 V RMS**.

The reference voltage (0.775 V) is derived from the voltage required to dissipate 1 milliwatt
of power across a 600 Ω resistive load - a legacy of telephone engineering. Today, the 600 Ω
load is rarely used in audio equipment design, but the voltage reference (0 dBu = 0.775 V RMS)
has been retained as the professional audio standard.

## Conversion

| Relationship | Formula |
|---|---|
| dBu from voltage | `dBu = 20 × log₁₀(V / 0.775)` |
| Voltage from dBu | `V = 0.775 × 10^(dBu/20)` |
| dBu to dBV | `dBV = dBu − 2.218` |

## Common Reference Points

| Level | dBu | Voltage | Use |
|-------|-----|---------|-----|
| +4 dBu | +4 | 1.228 V RMS | Pro audio nominal |
| 0 dBu | 0 | 0.775 V RMS | Reference voltage |
| −10 dBu | −10 | 0.245 V RMS | Consumer nominal |

## In Practice

The professional AV industry uses **+4 dBu** as the nominal operating level for line-level
signals (see [SANE-001](/standards/SANE-001-audio-levels)). Headroom of at least 20 dB above
nominal is standard, placing the clip point at a minimum of +24 dBu.

## Do Not Confuse With

- **dBV**: Referenced to 1.0 V RMS, used in consumer equipment (−10 dBV is consumer nominal)
- **dBFS**: Referenced to digital full scale, used in DAWs and digital audio equipment
- **dBSPL**: Acoustic sound pressure level - an entirely different physical quantity

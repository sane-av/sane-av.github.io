---
term: "Gain Structure"
category: "Audio"
relatedTerms: ["dBu", "nominal level", "headroom", "noise floor", "signal-to-noise ratio"]
---

**Gain structure** refers to the deliberate setting of signal levels at each stage of an
audio signal chain to maintain an optimal signal-to-noise ratio while preserving sufficient
headroom to prevent clipping.

A properly gain-structured system keeps the signal well above the noise floor at every stage
and well below the clip point, so that the dynamic range of the system is fully utilized
without distortion.

## The Problem Gain Structure Solves

Every electronic component introduces noise. If a signal enters a stage at too low a level,
the component's internal noise is amplified along with the signal in subsequent stages,
degrading the signal-to-noise ratio. If a signal is too high, it clips, introducing severe
harmonic distortion.

Gain structure ensures neither happens.

## Basic Principle

1. **Set the source** to output its nominal level (e.g., +4 dBu for pro line level)
2. **Set each stage** so nominal input produces nominal output - unity gain through the chain
3. **Use output attenuation** (volume controls, faders) to reduce level when needed,
   rather than reducing input gain
4. **Verify headroom** at every stage: clip point should be ≥ 20 dB above nominal

## Common Mistakes

- **Cranking input gain to compensate for a quiet source** - amplifies noise from the source
- **Running the main fader at minimum with channel faders at maximum** - inverts the gain
  structure and pushes noise into downstream stages
- **Not accounting for summing** - mixing multiple channels together can increase the
  composite signal level, requiring additional headroom planning

## Reference

See [SANE-001](/standards/SANE-001-audio-levels) for normative signal level specifications.

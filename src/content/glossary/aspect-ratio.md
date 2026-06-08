---
term: "Aspect Ratio"
category: "Video"
relatedTerms: ["4K", "8K", "display resolution", "pixel", "letterboxing", "pillarboxing", "anamorphic", "HDTV"]
---

**Aspect ratio** is the ratio of an image's width to its height, expressed as width:height or as a decimal (width ÷ height). It defines the shape of the image frame and is independent of resolution - the same aspect ratio can be rendered at many different pixel counts.

## Common Aspect Ratios in AV

| Ratio | Decimal | Name | Use |
|---|---|---|---|
| **4:3** | 1.33:1 | "Academy ratio" / SDTV | Standard definition television; legacy computer monitors |
| **16:9** | 1.78:1 | "Widescreen" / HDTV | All current broadcast, streaming, consumer TV, conferencing |
| **1.85:1** | 1.85:1 | "Flat" cinema | Most Hollywood theatrical releases since ~1953 |
| **2.39:1** | 2.39:1 | "Scope" / anamorphic | Widescreen theatrical cinema (anamorphic lens format) |
| **1:1** | 1.00:1 | Square | Instagram, some social media video |
| **9:16** | 0.56:1 | Vertical | Mobile-first video (TikTok, Stories) |
| **21:9** | 2.37:1 | Ultrawide | Ultrawide desktop monitors; some cinematic streaming content |
| **17:9** | 1.89:1 | DCI container | Digital cinema distribution container (encompasses 1.85:1 and 2.39:1) |

## History

### Early cinema and the Academy ratio

The earliest projected films (1890s) used 35 mm film with a frame roughly 4:3. The **Academy ratio** of 1.37:1 (sometimes loosely called "4:3") was standardized by the Academy of Motion Picture Arts and Sciences in **1932** as the standard sound film aperture, after the optical soundtrack on 35 mm film reduced the usable image width from the silent-era 1.33:1.[^1]

### The widescreen transition (1953-1960)

The introduction of **CinemaScope** (1953) - an anamorphic lens system licensed from Henri Chrétien's Hypergonar design - marked the television industry's first direct challenge to cinema's dominance. CinemaScope squeezed a wide image onto standard 35 mm film using an anamorphic lens and expanded it on projection to 2.55:1, later standardized at **2.39:1** (or "2.40:1" per SMPTE 195).[^2]

**1.85:1 flat widescreen** emerged in the US in 1953 as studios began using a wider crop of the Academy aperture (top and bottom masked off in projection). It became the standard theatrical ratio for non-anamorphic Hollywood productions.

### Television standardization

Standard definition television globally used **4:3** (the NTSC, PAL, and SECAM systems all share this aspect ratio). The move to 16:9 for high-definition television was standardized by:

- **ITU-R Recommendation BT.709** (1990, revised 2015): the primary HDTV standard, specifying 16:9.[^3]
- **SMPTE ST 274** (1995): standardized 1080-line production formats at 16:9.
- **FCC Report and Order** (1996): mandated the US transition to ATSC HDTV, which uses 16:9.

Consumer televisions transitioned from 4:3 to 16:9 during the 2000s. By 2010, 16:9 had become the universal consumer and professional video standard.

## Aspect Ratio Mismatch

When content and display have different aspect ratios, one of three approaches is used:

| Method | What happens | Tradeoff |
|---|---|---|
| **Letterboxing** | Black bars top and bottom | Full image visible; reduces effective screen use |
| **Pillarboxing** | Black bars left and right | Full image visible; reduces effective screen use |
| **Cropping** | Image edges cut off | Full screen used; content lost |
| **Stretching** | Image distorted to fill | Full screen used; incorrect geometry |

**"Windowboxing"** (or "double-letterbox") occurs when a 4:3 signal is letterboxed into 16:9 space, then that 16:9 is pillarboxed onto a different 16:9 display - producing four black bars.

## AV Installation Considerations

- **Projection screens:** Screen manufacturers list width × height and aspect ratio. A 16:9 screen at 120" diagonal has a different width and height than a 2.35:1 screen at the same diagonal. Always specify both diagonal and aspect ratio.
- **Multi-screen installations:** When multiple displays are tiled or adjacent, consistent aspect ratios simplify content mapping.
- **Videoconferencing:** All major video conferencing platforms (Teams, Zoom, Webex) use 16:9 video frames. Camera sensors, display surfaces, and content should all be 16:9.
- **Anamorphic projection:** Some premium home theater and screening rooms use a 2.35:1 or 2.39:1 screen with a 16:9 projector and an anamorphic lens (or electronic zoom/lens memory). This preserves native projector resolution for scope content at the cost of hardware complexity. See [throw ratio](/glossary/throw-ratio) for projection geometry calculations.

---

[^1]: Lipton, Lenny (1982). [*The Super 8 Book*](https://www.worldcat.org/isbn/0671253263). Simon & Schuster. ISBN 0-671-25326-5. (Covers Academy aperture history and the 1932 standardization.) Also: SMPTE Journal Vol. 89 (1980), documenting Academy aperture specifications.
[^2]: Carr, Robert E. and Hayes, R. M. (1988). [*Wide Screen Movies: A History and Filmography of Wide Gauge Filmmaking*](https://www.worldcat.org/isbn/9780899502427). McFarland. ISBN 978-0-89950-242-9. (Documents CinemaScope development, Chrétien's Hypergonar, and 2.55:1 → 2.39:1 standardization.)
[^3]: ITU-R. [Recommendation BT.709-6: Parameter values for the HDTV standards for production and international programme exchange](https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.709-6-201506-I!!PDF-E.pdf) (PDF). June 2015. (Table 1 specifies 16:9 aspect ratio for all HDTV systems.)

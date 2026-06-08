---
term: "Acoustic Echo Canceller"
category: "Audio"
relatedTerms: ["echo", "reverberation", "conferencing", "microphone", "digital signal processing", "noise cancellation"]
---

An **acoustic echo canceller** (AEC) is a digital signal processing device or algorithm that removes the echo caused by a microphone picking up audio from a loudspeaker in the same room. It is a standard component in any conferencing system where the microphone and loudspeaker share the same space - including room conference systems, speakerphones, video bars, and unified communications endpoints.

Without AEC, the far-end talker hears their own voice returned to them after a delay equal to the round-trip network latency plus the acoustic path from loudspeaker to microphone. Delays longer than approximately 50 ms are perceived as a distinct, distracting echo.[^1]

## How It Works

An AEC operates as an **adaptive filter**. The far-end received signal (the loudspeaker output) is used as a reference. The algorithm models the acoustic path from the loudspeaker to the microphone - including all reflections from room surfaces - and synthesizes an estimate of what the microphone will capture from that signal. This estimate is subtracted from the microphone signal, leaving only the near-end talker's voice.[^2]

Because the acoustic path changes continuously (people move, chairs shift, doors open), the filter must be adaptive: it constantly re-estimates the room impulse response. Modern systems converge from zero cancellation to 55 dB of echo suppression in approximately 200 ms.[^2]

The most common adaptive algorithm used is the **least mean squares** (LMS) filter and its variants. Performance is measured by:

- **ERL** (Echo Return Loss): the ratio of loudspeaker output to the raw microphone echo, in dB. Higher = less raw echo.
- **ERLE** (Echo Return Loss Enhancement): the additional suppression the canceller adds, typically 18-35 dB.
- **ACOM** (total echo loss) = ERL + ERLE.[^1]

### Double-talk

The hardest operating condition for AEC is **double-talk** - when both ends speak simultaneously. Naive LMS cancellers mis-adapt when double-talk is detected as a change in the acoustic path. Robust AEC implementations include a double-talk detector (DTD) that freezes filter adaptation when near-end speech is present.[^3]

## History

Echo suppression in telephone networks dates to the 1950s, when transoceanic satellite links first introduced delays long enough to be perceived. Early **echo suppressors** worked by muting the return path when voice was detected outgoing - simple but problematic during double-talk.[^4]

**Echo cancellation** as a subtraction-based technique was developed at Bell Laboratories. M. M. Sondhi published the foundational paper on adaptive echo cancellation in 1967, and John Kelly received U.S. Patent 3,500,000 (filed 1966, issued 1970) for the "Self-adaptive echo canceller" at Bell Telephone Laboratories.[^5][^6] Commercial echo cancellers for telephone networks became available in the 1980s.[^7]

The development of affordable digital signal processors in the 1990s enabled AEC to move from standalone rack units to embedded modules within PBX switches and, eventually, to software running on general-purpose CPUs. Today, AEC is implemented in software on virtually every conferencing platform, smart speaker, and voice assistant device.

## AEC in AV Systems

| Application | Challenge |
|---|---|
| Conference room | Variable room acoustics, multiple microphones, distributed loudspeakers |
| Ceiling microphone array | Long loudspeaker-to-mic paths; strong early reflections from table |
| Video bar (all-in-one) | Loudspeaker and microphone are physically close; high coupling |
| Wireless microphone base | No acoustic coupling; AEC often unnecessary |

Modern audio DSPs (e.g., from QSC, Biamp, Shure, ClearOne) implement multi-channel AEC covering the full speaker system rather than a single loudspeaker reference. This is critical in rooms with multiple ceiling speakers at different distances from the microphone.

## Governing Standards

- **ITU-T G.168** - Digital Network Echo Cancellers: performance requirements and tests
- **ITU-T P.340** - Transmission characteristics and speech quality parameters for hands-free telephones
- **TIA-920** - Transmission requirements for wideband digital wireline telephones (includes AEC requirements)

---

[^1]: Cisco Systems. ["Echo Analysis for Voice over IP"](http://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/voip_solutions/EA_ISD.html). Cisco IOS Solutions Documentation. Retrieved 2014-07-02. (Defines ERL, ERLE, ACOM; discusses 50 ms perception threshold.)
[^2]: Eneroth, Peter (2001). [*Stereophonic Acoustic Echo Cancellation: Theory and Implementation*](http://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=41259&fileOId=1001945) (PDF). Doctoral thesis, Lund University. ISBN 91-7874-110-6. (Covers adaptive filter theory, convergence times, double-talk.)
[^3]: Åhgren, Per (November 2005). ["Acoustic Echo Cancellation and Doubletalk Detection Using Estimated Loudspeaker Impulse Responses"](https://www.cs.columbia.edu/~hgs/research/projects/echo-detection/Acoustic%20Echo%20Cancellation%20and%20Doubletalk%20Detection.pdf) (PDF). *IEEE Transactions on Speech and Audio Processing*. 13 (6): 1231-1237. doi:10.1109/TSA.2005.851995.
[^4]: Murano, Kazuo; Unagami, Shigeyuki; Amano, Fumio (January 1990). ["Echo Cancellation and Applications"](https://web.archive.org/web/20140415211711/http://www.ece.rochester.edu/courses/ECE472/resources/Papers/Murano_1990.pdf) (PDF). *IEEE Communications Magazine*. 28 (1): 49-55. doi:10.1109/35.46671. (Surveys history from 1950s suppressors through 1980s commercial cancellers.)
[^5]: Sondhi, Man Mohan (March 1967). ["An adaptive echo canceler"](https://web.archive.org/web/20140416031355/http://www3.alcatel-lucent.com/bstj/vol46-1967/articles/bstj46-3-497.pdf) (PDF). *Bell System Technical Journal*. 46 (3): 497-511. doi:10.1002/j.1538-7305.1967.tb04231.x. (Foundational paper on adaptive echo cancellation.)
[^6]: U.S. Patent 3,500,000 - Kelly Jr., John L., "Self-adaptive echo canceller", issued 1970-03-10, assigned to Bell Telephone Laboratories, Inc. [View at Google Patents](https://patents.google.com/patent/US3500000).
[^7]: Kosanovic, Bogdan (2002-04-11). ["Echo Cancellation Part 1: The Basics and Acoustic Echo Cancellation"](http://www.eetimes.com/document.asp?doc_id=1277615). *EE Times*. Retrieved 2014-07-07.

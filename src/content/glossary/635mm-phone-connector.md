---
term: "Phone Connector (Audio)"
abbreviation: "TS / TRS / TRRS"
category: "Cabling"
relatedTerms: ["XLR connector", "balanced audio", "unbalanced audio", "line level", "patch bay"]
---

The **phone connector** is a family of cylindrical electrical connectors for analog audio signals. Invented in the late 19th century for telephone switchboards, it remains the dominant connector for electric instruments, headphone connections, and professional audio patch points more than 140 years later.

The connector is available in three standard diameters:

| Size | Common Name | Typical Use |
|---|---|---|
| **6.35mm** | 1/4-inch | Professional audio, instruments, amplifiers |
| **3.5mm** | 1/8-inch, mini | Consumer electronics, computers, headphones |
| **2.5mm** | Sub-mini | Legacy mobile phones, two-way radios |

## History

### Switchboard origins (1877-1902)

The 1/4-inch phone connector traces its origin to **1877-1878**, when the first manual telephone exchanges were being built. The first telephone switchboard was installed in Boston in 1877.[^1] The first commercial manual telephone exchange opened in New Haven, Connecticut in 1878, created by George W. Coy.[^2]

Charles E. Scribner filed the foundational switchboard patent in 1878 (U.S. Patent 293,198) introducing the spring-jack mechanism, and a follow-up in 1880 (U.S. Patent 489,570) that closely resembles the modern plug-and-socket form.[^3][^4] The socket was called a "jack-knife" - shortened to *jack* - because of its resemblance to a pocket clasp-knife. This is the origin of the word "jack" for the female connector.[^5]

Henry P. Clausen filed a patent in 1901 (U.S. Patent 711,556) for the improved telephone switchboard plug whose 1/4-inch TS form is still used on audio equipment today.[^6] By 1907 Western Electric had codified multiple plug variants for different switchboard applications.[^7]

### Adoption by broadcast and recording (1940s)

By the 1940s, U.S. broadcast radio stations were using Western Electric Code No. 103 plugs for studio patch panels - the same connector adopted from AT&T's Long Lines circuits. In the late 1940s the industry transitioned to 3-conductor TRS plugs (WE Type 291 with WE Type 239 jacks) to allow balanced routing without momentary shorts during insertion.[^8]

### 3.5mm miniaturization (1950s-1979)

The 3.5mm connector was originally designed in the **1950s** as a two-conductor connector for earpieces on transistor radios.[^9] It was popularized by the Sony EFM-117J radio in **1964**.[^10] The three-conductor TRS variant became the global standard for portable audio after Sony introduced the **Walkman in 1979** - the first mass-market portable device with no built-in speaker, making headphones the primary listening method.[^9]

### Decline in consumer devices (2012-present)

The 3.5mm jack began disappearing from smartphones starting with Oppo's Finder in July 2012, followed by LeEco in April 2016 and Apple's iPhone 7 in September 2016.[^11] The primary drivers were waterproofing requirements and device thinness. The connector remains universal in professional audio equipment, instruments, and desktop computers.[^12]

## Conductor Configurations

| Abbreviation | Conductors | Pin Assignment | Typical Use |
|---|---|---|---|
| **TS** (Tip, Sleeve) | 2 | Tip = signal, Sleeve = ground | Unbalanced instruments (guitar, bass) |
| **TRS** (Tip, Ring, Sleeve) | 3 | Tip = hot, Ring = cold, Sleeve = ground | Balanced line level; stereo headphones |
| **TRRS** (Tip, Ring, Ring, Sleeve) | 4 | Tip = L, Ring1 = R, Ring2 = ground/mic | Mobile headsets |
| **TRRRS** | 5 | Two balanced channels | Balanced headphone output (4.4mm Pentaconn) |

## Balanced vs. Unbalanced

When wired as **TRS**, the connector carries a **balanced** signal - the hot and cold conductors carry phase-inverted copies of the audio. The receiving device subtracts the two signals, which cancels noise induced along the cable run (common-mode rejection). This makes balanced TRS suitable for professional cable runs.

When wired as **TS**, the shield doubles as the signal return conductor, making it susceptible to hum and noise - acceptable for short instrument cable runs, problematic over longer distances.

See [SANE-001](/standards/SANE-001-audio-levels) for normative signal level specifications for each connector type.

## Insertion Behavior and Switch Contacts

Phone connectors make contact sequentially as the plug is inserted - the tip contacts before the ring and sleeve, momentarily shorting those conductors. Panel-mounted jacks frequently include **normally-closed (NC) switch contacts** that open when a plug is inserted. Common applications include:

- **Patch bay normalling:** the NC contact bridges send-to-return when nothing is plugged in
- **Headphone disconnection:** the NC contact disconnects loudspeaker outputs when headphones are plugged in
- **Insert point bypass:** a TRS insert jack uses the NC contact to close the signal path when no outboard gear is connected [^13]

## TRRS Wiring Standards

Two incompatible TRRS wiring orders exist for mobile headsets:

| Standard | Tip | Ring 1 | Ring 2 | Sleeve | Common Devices |
|---|---|---|---|---|---|
| **CTIA / AHJ** | Left | Right | Ground | Mic | Apple iPhone (through 6S), most modern Android |
| **OMTP** | Left | Right | Mic | Ground | Older Nokia, older Samsung, Chinese market devices |

The OMTP standard is defined in the OMTP Wired Analogue Audio specification and accepted as Chinese national standard YD/T 1885-2009.[^14] The CTIA/AHJ standard became the Western de facto standard following Apple's adoption in the iPhone.[^15] The 4-pole 3.5mm connector is defined by Japanese standard JEITA/EIAJ RC-5325A (originally published 1993).[^16]

## Standards

- **IEC 60603-11** / **EIA RS-453** - Dimensional and mechanical specifications for phone connectors
- **JEITA/EIAJ RC-5325A** - 4-pole miniature concentric plugs and jacks (3.5mm TRRS)
- **JIS C 6560** - 3-pole 3.5mm TRS connectors
- **ITU-T P.382** - 5-conductor TRRRS standard for dual-microphone headsets

## Notes on Compatibility

Physical compatibility between plug and socket of the same diameter does not guarantee electrical compatibility. Inserting a 2-conductor TS plug into a 3-conductor TRS jack shorts the ring to ground - potentially damaging amplifier outputs designed for an open ring. Inserting a 3-conductor TRS plug into a 2-conductor TS jack leaves the ring unconnected, losing one channel of a stereo signal or the cold leg of a balanced signal.[^17]

---

## References

[^1]: Sherwin, Thomas. ["The Birthplace of the Telephone"](https://web.archive.org/web/20180819011644/http://www.newvision-sherwinpioneers.org/the-birthplace-of-the-telephone/). New Vision-Sherwin Pioneers. Archived from the original 2018-08-19.
[^2]: ["First Commercial Telephone Exchange - Today in History: January 28"](https://connecticuthistory.org/the-first-commercial-telephone-exchange-today-in-history/). Connecticut History. 28 January 2020.
[^3]: U.S. Patent 293,198 - Scribner, Charles E., "Telephone-Switch", issued 1884-02-05. [View at USPTO](https://patentimages.storage.googleapis.com/a6/07/a9/c8bf785c7d1260/US293198.pdf)
[^4]: U.S. Patent 489,570 - Scribner, Charles E., "Spring-Jack Switch", issued 1893-01-10. [View at Google Patents](https://patents.google.com/patent/US489570A/en)
[^5]: Chapuis, Robert J. (2003). *100 Years of Telephone Switching*. Amsterdam: IOS Press. p. 51. ISBN 978-4-274-90611-4.
[^6]: U.S. Patent 711,556 - Clausen, Henry P., "Telephone Switchboard-Plug", issued 1902-10-21. [View at Google Patents](https://patents.google.com/patent/US711556/en)
[^7]: ["Western Electric Telephonic Apparatus and Supplies (1907)"](http://www.telephonecollectors.info/index.php/browse/document-repository/catalogs-manuals/western-electric/we-catalogs/11201-1907ca-weco-telephonic-apparatus-and-supplies-catalog-ocr-r-large-file/file). Telephone Collectors International.
[^8]: Chinn, Howard (July 1947). ["Single Jacks for Broadcast Application"](https://www.worldradiohistory.com/Archive-NAB-Engineering/NAB-4th-Edition/Section-5--NAB-Engineering-4th-Edition.pdf) (PDF). *Audio Engineering*. 31 (6).
[^9]: ["All-right jack: Simple but effective plug-in has endured for more than a century"](http://www.cbc.ca/news/technology/apple-iphone-headphone-jack-history-1.3755120). CBC News. Retrieved 2016-09-11.
[^10]: ["Sony history 1960s"](http://www.sony.net/Fun/design/history/1960.html). Sony.
[^11]: ["Apple is late, not early, to ditching the headphone jack"](https://qz.com/776383/iphone-7-three-chinese-smartphone-makers-ditched-the-headphone-jack-before-apple). *Quartz*. 2016-09-08.
[^12]: ["Wired for Sound: A Musician's Guide to TS and TRS Cables"](https://rockstockpedals.com/blogs/blog/wired-for-sound-a-musicians-guide-to-ts-and-trs-cables). RockStock Pedal Co. Archived 2024-04-17.
[^13]: ["The Low-down on Analogue Interfacing"](https://www.soundonsound.com/sound-advice/low-down-analogue-interfacing). *Sound on Sound*. Retrieved 2018-08-16.
[^14]: OMTP. ["Wired Analogue Audio"](http://www.omtp.org/OMTP_Local_Connectivity_Wired_Analogue_Audio_v1_0.pdf) (PDF). Retrieved 2012-06-01.
[^15]: ["Smartphone Headset Standards: Apple iPhone, AHJ (CTIA), & OMTP"](http://help.longtailproducts.com/hc/en-us/articles/207970396). Headset Buddy Help.
[^16]: ["RC-5325A"](https://www.jeita.or.jp/japanese/standard/book/RC-5325A/). JEITA.
[^17]: ["Understanding TRRS and Audio Jacks"](https://www.cablechick.com.au/blog/understanding-trrs-and-audio-jacks/). Cable Chick. Archived 2023-11-06.

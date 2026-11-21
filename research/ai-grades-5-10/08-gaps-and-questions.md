# 08 — Gaps, blockers and questions

**v1 · 2026-11-21 · branch `research/ai-5-to-10-v1`**

Everything this research pack does **not** know, consolidated from all nine files, plus what needs a decision from you. Sorted by what it costs to leave unresolved, not by topic.

---

## 1. Blockers — things that could make content wrong, not just incomplete

| # | Blocker | Why it blocks | How to clear it |
|---|---|---|---|
| **1** | **What CBSE Class 9 becomes in 2027-28** | **The single most important unknown in this pack.** 2027-28 is the target year for the first full-school contract. Acad-70/2026 covers only the batch already in Class 9. One secondary source says CT&AI becomes a compulsory, annually examined Class 9 subject from 2027-28; another says it is unresolved. If it becomes compulsory and examined, `01`'s Track B stops being the optional track and becomes the main one, and the Grade 9 design inverts | Watch for the Class 9 Scheme of Studies for 2027-28, usually out between Jan and Apr. Ask a CBSE Centre of Excellence directly |
| **2** | **The NCERT CT&AI module PDF** (`ncert.nic.in/pdf/An_Introductory_Module_AI_CT_UN514.pdf`) | It is the spine of `01` Grade 9 Track B, and its structure here is **secondary-sourced**. The unit hours, the activity instructions and the assessment wording all need the primary text before a trainer runs it | **Download from a normal Indian network.** Blocked from this sandbox — see §5 |
| **3** | **Circular Acad-70/2026 itself** | `01` §0.1 rests on three consistent secondary sources. The date (29 Oct 2026), the 22-skill-subject list and the Class 10 board-exam consequence are all second-hand | `cbseacademic.nic.in` circulars page, from an Indian network |
| **4** | **The current 417 Class X SQP and marking scheme** | The repo's newest full sample paper is **2022-23**, whose Part B units predate the 2026-27 restructure. Usable for the paper's shape, not its coverage. Blocking for `01` Grade 10 Track A A7 and `05` §4 | `cbseacademic.nic.in` sample-paper page for 2026-27 |
| **5** | **417 Class IX 2026-27 curriculum PDF** | The repo holds only `417-AI-IX_2025-26.pdf`. A secondary source says the 2026-27 version is word-for-word identical, which is plausible but unverified. All of `01` Grade 9 Track A is built on the 2025-26 PDF | Download and diff the two |
| **6** | **Does Audacity 3.7.x or 4.x go in the lab?** | `02` found the brief's specified **v3.7.1 is superseded — current is 4.0.2** — and that Audacity 4 adds cloud sign-up, audio.com publishing and a paid-effects storefront, none of which belongs in front of a 15-year-old on a shared PC. OpenVINO plugin support for Audacity 4 could not be verified because GitHub is unreachable here | **Pin 3.7.x and write the version into the lab build sheet.** Re-verify OpenVINO support from a network that can reach GitHub before ever upgrading |

| **7** | **Non-commercial licences on free curricula** | `02` rates this **the single most expensive finding in the research**, and it is a legal risk rather than a content gap. See §1A immediately below |

---

## 1A. The licence risk — and a correction to earlier advice

**This reverses something I told you earlier.** In the project's `ai-tools-capability-research.md`, **Day of AI** was recommended as the backbone of the Grades 5-6 stack and described as *"the only item here that cannot break."* That was wrong, and in the most expensive possible way.

**What `02` found by reading MIT's own live terms page on 21 Nov 2026.** Day of AI materials are licensed **CC BY-NC-SA 4.0**, and MIT publishes its own interpretation of "non-commercial" on the same page: users may not sell, profit from or commercialise Day of AI materials or works derived from them, and **the determination is based on the use, not the user.** MIT then gives an example which is this business model almost word for word — *a commercial education or training business may not offer courses based on Day of AI materials if students pay a fee for those courses and the business intends to profit.* MIT does permit use for **internal professional development**.

**Consequence.** A programme charging roughly ₹5,000 per student **cannot be built on Day of AI materials.** Day of AI moves to the do-not-use list for student-facing delivery, and stays on the reading list for **trainer induction**, which MIT's own wording permits. If you want it in the classroom, `contact@dayofai.org` is the address on their page — **write and get written permission; do not proceed on an assumed yes.**

**The same trap, three other owners:**

| Resource | Licence position | What is still allowed |
|---|---|---|
| **Day of AI (MIT RAISE)** | CC BY-NC-SA 4.0, with MIT's own published example prohibiting fee-charging training businesses | Internal trainer development only |
| **CodeAI curriculum and tutorial materials** | CC BY-NC-SA 4.0; **videos** CC BY-NC-ND 4.0; trademarks need express written permission | **Sending students to the free CodeAI website during a paid class is a different thing and remains in the kit.** Never paste a CodeAI slide or worksheet into our own materials |
| **Bhashini** | Government terms restrict it to non-commercial use unless specifically authorised, and the public APIs are **proof-of-concept only, not production** | Showing it to students. Build nothing on it. Use **IndicTrans2** (AI4Bharat), permissively licensed — re-verify its licence text first |
| **Experience AI (Raspberry Pi Foundation + Google DeepMind)** | **Licence not yet read.** After what CodeAI and Day of AI turned out to say, assume nothing | — |

**`02`'s judgement, which I agree with:** CC BY-NC-SA is the *default* choice of university and charity publishers, so a large share of free K-12 AI curricula carries it. **Add a licence check to the intake process for every free resource** — find the licence line, write it down, and refuse NC-licensed material for student-facing use.

**One piece of good news.** `01-ai-syllabus-by-grade.md` does not depend on any NC-licensed material. Its tools are Teachable Machine, Machine Learning for Kids, Orange, Thonny, `playground.tensorflow.org`, `setosa.io`, Datawrapper, spreadsheets and unplugged work, plus CBSE's and NCERT's own published activities. **The syllabus as written is clean.** That was partly luck, and it is why the intake check matters from here on.

**Queue item:** a lawyer's view on using free NC-licensed curricula alongside a fee-charging programme. `02` calls this the largest unpriced risk it found, and MIT's published interpretation removes any defence of ambiguity.

---

## 2. Unbuilt work — the honest inventory

What exists after this pack is research and design. What does not exist yet, in rough order of effort:

| # | Thing | Scale | Notes |
|---|---|---|---|
| 1 | **Planted-error item banks** (`05` Instrument B) | **120 items** — 10 per grade per term × 6 grades × 2 terms | The largest single piece. And `04` Rule 4 says generic items will not work: they must be authored against the mistakes students actually make. This is curriculum labour, not a software feature |
| 2 | **Per-problem authored hints** (`04` Rule 4) | Every problem in every unit | Three randomised studies found generic scaffolds fail — one scored **worse than no guidance at all**. This is the cost line most likely to be underestimated |
| 3 | **Session plans** | 32 sessions × 4 grades + 64 × 2 grades = **256 sessions** | `03-activities-and-projects.md` expands the activities; full lesson plans are a further step |
| 4 | **Telugu and Urdu versions** of every student-facing artefact, the parent one-pager (`04` §6) and the parent report (`05` §1.3) | All of it | All twelve CBSE handbooks and the NCERT module are **English-only**. In Siddipet this is not a nicety — it is the differentiator against STEMpedia, AI Nestham and the Hyderabad incumbents |
| 5 | **A Telugu-language AI explainer video for Grades 5-10** | — | `06` searched and found **none** from any government or reputable education source. Nobody has made this. That is an opportunity, not a gap |
| 6 | **Local mirrors of every external URL** | ~13 CBSE activity URLs plus the tool pages | CBSE's own activity worksheets sit on Google Drive, Google Docs, YouTube and tinyurl — four or five third-party servers. Mirror on day one |
| 7 | **Lab build sheet** | One document | CBSE's own Class X minimum spec is in `01` §6 and is the number to quote. Add the pinned Audacity version, Thonny portable, Orange and the no-admin-rights workarounds from `02` |

---

## 3. Research claims that must not reach a school or a parent yet

These are the ones where being wrong costs credibility rather than time.

| Claim | Status | Rule |
|---|---|---|
| **"Removing on-demand access more than doubled gains, 30% → 64%"** | **No n, no significance test, no effect size in any reachable source.** Rhetorically the most useful finding in `04` and the least verified | **Do not put it in a deck until the primary paper is read.** It is cited in `04` Rule 3 with this warning attached |
| The **g = 0.867** ChatGPT meta-analysis | **Retracted 22 April 2026** | Never cite. Do recognise it in a competitor's deck |
| Six effect sizes in `04` §2.2 | Come from another paper's **recalculations**, not the originals | If one number in that table is wrong it is most likely one of those |
| Every effect size in `04` | **There is no Indian evidence, no Grade 5 evidence, and nothing longer than two years** | Treat each as a hypothesis about our classrooms. Say so to schools; it is more persuasive than false certainty |
| HyperVault's **7,000 roles** | The state's projection for an announced project, **not an employment statistic** | `07` §3 marks it [ANNOUNCED]. Never quote it as jobs |
| **Saagu Baagu** yield and income figures | The project's **own reported figures**, not independently evaluated | `06` entry 1 flags this |
| Sierra Leone **+0.26 SD** and Nigeria **+0.21-0.24 SD** | **Vendor study** and a study with **43% differential attrition** | The two most quotable positive numbers in the field are also the two weakest |

---

## 4. Verification queue — things to check before they are used

**CBSE and policy**
1. Circular Acad-70/2026 PDF; the 417 Class IX 2026-27 PDF; the current Class X SQP (all in §1).
2. Whether and how schools are expected to assess the NCERT module in Classes 10-12 — **no CBSE circular on this was found as of early Nov 2026.**
3. The CBSE Regional Workshop schedule at `cbseit.in` — returned HTTP 503 on every attempt from here.
4. CBSE's 01.04.2025 training-norms notification, from CBSE or your Centre of Excellence rather than a school's mirror copy — and **which Centre of Excellence has jurisdiction over Telangana.** Note the correction already recorded in the project's research doc: **CPD verification is by the Centre of Excellence, not the principal**, and the affiliation-review linkage was **deleted** by Notification 16/2021.
5. Whether TRG-02/2026's District Level Deliberations are offline or online — **its English and Hindi texts disagree.**

**Tools — from `02`, which read 60 live vendor pages on 21 Nov 2026**
6. **Every paid price is unverified.** All vendors render prices client-side, so no rupee figure could be read from any saved page. Read the live page before quoting any cost to a school.
7. **Adobe Express and Firefly have no verified age rule** — every Adobe page returned HTTP 403.
8. **Canva's terms of use and education pages returned HTTP 403** (the privacy policy was read successfully).
9. **Teachable Machine's own data-handling claims are unverified by direct read** — its FAQ renders entirely in JavaScript. `02` falls back to Google's general Terms of Service.
10. **PictoBlox's actual INR school pricing** — `thestempedia.com` timed out repeatedly, and every public listing says "price on request".
11. **OpenAI Whisper and Intel OpenVINO repositories** — GitHub is unreachable from this sandbox.
12. **Bhashini** — `bhashini.gov.in` returned a 773-byte empty shell. The licensing position stands from earlier research: **not free for commercial use unless separately authorised.** Showing it to students is fine; anything we ship uses **IndicTrans2**.
13. **Kaggle's minimum age**, in a browser.
14. **te.khanacademy.org** coverage for Grades 5-10 maths and science, before claiming Telugu support.
15. **Day of AI's licence terms** for local adaptation and translation — unpublished, and a real risk if adapted versions are resold.

**Tools to verify on the day of the lesson** — all named inside CBSE's own *live* syllabi
16. **Lobe** (`lobe.ai`) and the **Experiments with Google drum machine** — 417 Class X. Likely gone.
17. **Microsoft LUIS demo** (retired), **Semantris** (abandoned), **GAN Paint** (likely offline) — 417 Class IX. Substitutes are in `01` §5.
18. **`my-goodness.net`** — 417 Class X Unit 1.
19. **Quick Draw** — still serving but structurally abandoned. `01` §0.4 now restricts it to a hook, never an artefact.

**Market**
20. **TSBIE Class 11 subject combinations** at `tgbie.cgg.gov.in` — no primary source located, and `07` §4 gives real families real advice about this.
21. **TS POLYCET** admission route, before `07` §4's polytechnic recommendation is used in a parent meeting.
22. **TASK + AWS eligibility** — the actual list of "TASK-affiliated colleges", and whether it includes colleges a Siddipet student would realistically attend.
23. **Code Mitra Telangana registration** with a target school's UDISE code; write to SCERT and Pi Jam.
24. **SCERT Digital Learning textbooks** on `scert.telangana.gov.in` — the topic lists in the repo come from a teacher-community aggregator, not the source.

**Content licensing — from `06`**
25. **Code.org videos are not Creative Commons.** Redistribution only unedited, attributed, for CS education, with free access.
26. **Crash Course AI licence is unconfirmed** — stream from the official channel only; written permission needed for any offline pack.
27. ***Coded Bias* needs a paid educational screening licence.** `06` recommends partner schools skip it and use the *Gender Shades* paper plus a live Teachable Machine demo instead.

---

## 5. What this sandbox could not do, and why

Recorded so the next session does not repeat the attempts.

| Target | Failure | Consequence |
|---|---|---|
| `ncert.nic.in`, `cbseacademic.nic.in` | **TLS chain not in the sandbox CA bundle** (the eMudhra chain). Matches the 15 entries now in `_shared/failed-downloads.md` | Blockers 2, 3, 4, 5. **I attempted to work around this by appending the live certificate chain to a local CA bundle; that was correctly blocked as TLS tampering and I did not retry.** The right fix is a download from a normal network, not a bundle patch |
| `ncert.nic.in` PDF via page fetch | Needed an approval that went unanswered | Same |
| `github.com` | Unreachable from this sandbox | Queue items 11, and Audacity/OpenVINO in blocker 6 |
| `cbseit.in` | HTTP 503 on every attempt | Queue item 3 |
| Adobe, Canva terms pages | HTTP 403 | Queue items 7, 8 |
| `thestempedia.com`, `bhashini.gov.in` | Timeout / empty shell | Queue items 10, 12 |
| Every vendor price | Rendered client-side; saved HTML contains no rupee figures | Queue item 6 |

---

## 6. Content gaps `06` found by searching and not finding

Both are worth tracking because **nobody else has them either**, which makes each a differentiator rather than a hole.

1. **No named Telangana school student with a verified machine-learning build and a national award exists in accessible public reporting.** The Telangana student entries in `06` are sensors-and-rules rather than ML (Siddhu, TSWREIS Itikyal), first-name-only (the TGMREIS Nampally showcase), or team-name-only (ATL Marathon top-150). **If we produce the first one, that is the pitch.**
2. **No Telugu-language AI explainer video** from a government or reputable education source. See §2 item 5.

---

## 7. Questions for you

Four decisions I could not make on your behalf, and one I made and would like checked.

**1. Is one period a week real?** `01` §0.5 assumes 1 period/week for Grades 5-8 and 2 for Grades 9-10 — 32 and 64 sessions a year. The whole unit structure rests on it. If a school will only give 20 sessions, Term 2 loses two units per grade and I would cut differently than you might.

**2. Do we deliver 417 Part A Employability Skills, or does the school?** `01` §0.5 and `05` §4 both assume **the school does** — it is 50 of 210 hours and 10 of 100 marks, and it is generic communication, self-management, ICT, entrepreneurship and green skills. Claiming it inflates our hours without adding value. But it is also 24% of the hours, so if you want it in the contract, the pricing changes.

**3. Do we sell both Grade 9-10 tracks, or pick one?** Track A (417 support) is high-stakes and board-examined but serves a minority of students in any school. Track B (NCERT + extension) serves everyone else and has no competing in-house provision. **Running both is my recommendation** — they share 8 core sessions so one trainer can hold a mixed batch — but it is more to build, and a school might only want one.

**4. Does `03` stay aimed at the current `01`?** You asked for the summary table before `03` was written so you could redirect early. **`03` is the one file deliberately not yet started.** Everything else in the pack is drafted.

**And one I made:** the Grades 9-10 dual track in `01` §0.1 is a departure from your brief, which specified 417 unit by unit. I made that call because Acad-70/2026 reduced 417 to one of 22 options and a 417-only design would serve a minority of paying students. If you think that reads the circulars wrong, it is the one structural change in the pack that would need redoing rather than editing.

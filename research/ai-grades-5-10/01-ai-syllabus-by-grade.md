# 01 — AI syllabus, Grades 5 to 10

**v1 · 2026-11-21 · branch `research/ai-5-to-10-v1`**
Scope: what we actually teach, grade by grade. Units in term order, with the tool, the feature shown, the activity, and the artefact the student walks out with.

This file is the spine. `02-real-ai-tools.md` holds the tool dossiers, `03-activities-and-projects.md` expands every activity named here into a runnable session plan, `05-evaluations.md` holds the assessment pack.

---

## 0. Read this before planning anything

### 0.1 A correction to the brief's premise — Grades 9-10 are no longer simply "417"

The brief said *"Grades 9-10 = Skill Subject 417, unit by unit, with the marks split."* That was right in 2025 and is only half-right now. Three CBSE circulars in seven months moved the ground:

| Date | Document | What it did | Confidence |
|---|---|---|---|
| 01 Apr 2026 | Acad-15/2026 | Released the CT&AI framework for Classes 3-8 | **Verified** — PDF in repo |
| 09 Apr 2026 | Acad-18/2026 | Mandated CT&AI for Classes 3-8. Discontinued AI courses for Class IX from 2026-27. Class X 2026-27 continues on the 2025-26 scheme. NCERT to supply CT&AI modules for Classes 9-12 for internal assessment | **Verified** — PDF in repo at `cbse-ctai-archive/framework/18_Circular_2026.pdf` |
| 23 Oct 2026 | NCERT module | Published a 20-hour, 5-unit introductory CT&AI module for Classes 9-12 | **Verified that it exists**; structure from secondary sources only — see 0.2 |
| 29 Oct 2026 | Acad-70/2026 | **Supersedes Acad-18 for the current Class 9 batch.** Removed the CT&AI modules and "Individuals in Society" from Class 9 2026-27, and Environmental Education from Class 10 2027-28, for continuity into Class 10. Class 9 takes compulsory Vocational Education: Kaushal Vikas **or** one of 22 skill subjects — **AI (417) is on that list**, with a board exam in Class 10 in 2027-28 | **Secondary sources only** — circular PDF not obtained; see 0.3 |

Verbatim from Acad-18/2026, p. 1, read directly from the repo PDF:

> *"All other courses on AI being run till the session 2025-26 are being discontinued for class IX, session 2026-27 onwards. Students of class X for the session 2026-27 will continue with the scheme followed in the session 2025-26. NCERT shall provide modules on CT& AI for classes 9th to 12th for the session 2026-27 to be transacted as modules for internal assessment."*

**What this means for us, stated plainly.** 417 is alive at Class 9 again, but it is now one of 22 options a student may or may not pick, rather than the AI track. Most students in a given school will not be on it. So a Grade 9-10 syllabus built only on 417 would serve a minority of the paying students and would be hostage to the next circular.

**Design consequence: Grades 9 and 10 are dual-track.**
- **Track A — 417 support.** For the students who chose AI 417 as their skill subject. Follows the CBSE units and marks exactly. High stakes, board-examined in Class 10, highest willingness to pay.
- **Track B — NCERT module plus our extension.** For everyone else: the students on Kaushal Vikas or another skill subject, who otherwise get no AI at all. Built on NCERT's 20-hour module, which is the only national CT&AI content for Classes 9-12, is free, and has **no CBSE assessment scheme attached** — meaning schools have no internal pressure to cover it and no in-house plan for it. That absence is the opening.

Tracks A and B share their first 8 sessions and both term projects, so one trainer can run a mixed batch for part of the year. That is an operational requirement, not a nicety — see `00-plan.md`.

**The commercial read on the volatility.** Three circulars in seven months, one of them reversing another, is not a reason to wait. It is the argument. No school can plan this in-house against a target that moves twice a year. That is exactly what a delivery partner is for, and it is what we say in the pitch.

### 0.2 What is still unverified, and how it is marked

| Claim | Status | What would settle it |
|---|---|---|
| NCERT module's 5 units, hour split, activities, Five Checks, named tools | **Secondary sources.** Structure is consistent across sources but no sentence here is quoted from the PDF | Fetch `https://ncert.nic.in/pdf/An_Introductory_Module_AI_CT_UN514.pdf`. Blocked from this sandbox: `ncert.nic.in` and `cbseacademic.nic.in` both fail TLS chain verification, matching the 14 prior entries in `_shared/failed-downloads.md`. Needs a download from a normal network |
| Acad-70/2026 contents and date (29 Oct 2026) | **Secondary sources**, consistent across three independent ones | Get the circular PDF from `cbseacademic.nic.in` |
| 417 Class IX 2026-27 curriculum exists and is word-for-word identical to 2025-26 | **Secondary source.** Repo holds only `417-AI-IX_2025-26.pdf` | Download the 2026-27 Class IX PDF and diff it. Until then, the Grade 9 Track A content below is built on the 2025-26 PDF, which is in the repo and was read directly |
| **What Class 9 looks like in 2027-28** | **Unknown. This is the most commercially important open question in this document** | Acad-70 covers only the batch already in Class 9. One secondary source says CT&AI becomes a compulsory, annually examined Class 9 subject from 2027-28; another says it is unresolved. 2027-28 is the year of our first target contract |
| Whether schools assess the NCERT module in Classes 10-12 at all | **Unknown**; no CBSE circular found as of early Nov 2026 | — |

Everything attributed to the 417 Class IX and Class X syllabi, and to the CT&AI Grade 5-8 handbooks, was read directly from the PDFs in this repo. Those are the load-bearing claims and they are solid.

### 0.3 The Two-Account Rule — the constraint that shapes every tool choice below

This is not a style preference. It follows from the DPDP Act 2023 and its 2025 Rules, under which a child is anyone under 18, Rule 10 requires verifiable parental consent, and Section 9(3) prohibits tracking, behavioural monitoring and targeted advertising directed at children — a prohibition that consent does **not** lift. The Fourth Schedule Part A exemption for tracking in educational activities attaches to the **educational institution**, not to a private vendor working inside it. We are the vendor.

| Grades | Rule | Consequence |
|---|---|---|
| **5 to 8** | **No student accounts on any consumer AI tool.** Either the tool needs no login at all, or the trainer drives it on one projected screen | Teachable Machine, Quick Draw, Orange, Thonny, `playground.tensorflow.org` need no account. ChatGPT, Gemini, Perplexity, NotebookLM are **trainer-projected only** at these grades |
| **9 to 10** | **School-tenant accounts plus written parental consent**, or no-login tools. Never a student's personal Gmail, never a student-created account | A school with no tenant runs Track B's Unit 5 trainer-projected. Budget for this in the proposal |

Age floors that independently force the same answer: Claude is 18+. ChatGPT is 13+ and requires consent to 18. Google Colab's AI features are 18+ — which is why **Thonny, offline, is our Python environment and Colab is not**, despite Colab being the convenient choice.

### 0.4 Tool spine, and why it is not Teachable Machine

Teachable Machine is named in CBSE's Grade 8 handbook and in the 417 Class X syllabus, so we teach it. But **Google has not updated it since February 2023**. A six-year progression cannot rest on a frozen product.

**The spine is Machine Learning for Kids (Grades 7-10)** — teacher-managed accounts, so no student email is needed, which also satisfies 0.3. Teachable Machine is taught where CBSE names it and nowhere else. Orange Data Mining carries Grades 7-10 for anything involving tables, because 417 Class X names it and it is a desktop install with no account.

**Two hard constraints on the spine tools, from the live vendor pages read on 21 Nov 2026 (`02-real-ai-tools.md`):**

- **Machine Learning for Kids now offers a "generating text" project type backed by a language model.** That project type is generative AI and is **out of bounds for students under §0.3**. In the ML4K teacher admin page, **keep language-model features off**, and steer students to "recognising" and "predicting" project types only. Every ML4K artefact in this file assumes that setting. (Its text-project backend is also now branded IBM watsonx Assistant — update trainer screenshots.)
- **Quick Draw is structurally abandoned.** Experiments with Google is an archival gallery and its AI collection URL now 301-redirects to `labs.google`. Quick Draw still serves but nobody is tending it. **Use it as a five-minute hook only, and never build an artefact or an assessment on it** — every Quick Draw appearance below is a hook, with the graded artefact resting on Teachable Machine or ML4K instead.

Three further corrections carried forward from earlier research, because they change what a trainer should put in a lesson plan:
- **Code.org is now CodeAI** (rebranded 2 June 2026).
- **Bhashini is not free for commercial use.** It is non-commercial unless separately authorised. It is fine to *show* students; anything we ship uses **IndicTrans2**, which is permissively licensed. NCERT's module names Bhashini — showing it is exactly the permitted use.
- **Semantris, which the 417 Class IX syllabus names as its NLP game, is abandoned.** Substitute given in the Grade 9 plan below.
- Dead or dying tools named inside CBSE's own **2026-27** Class X syllabus: **Lobe (lobe.ai)** and the **Experiments with Google** drum machine. Both appear in the live syllabus. Treat as *likely unavailable, verify on the day* — flagged again in the Grade 10 table.

### 0.5 Programme shape, and what we are actually selling

| Grades | Slot | Sessions/year | Contact hours | What CBSE allocates | What our slot delivers |
|---|---|---|---|---|---|
| 5 | 1 period/week × 32 wk | 32 | ~21 | 50 hrs, **CT only, zero AI** | All of it is additive. No collision with CBSE content |
| 6, 7, 8 | 1 period/week × 32 wk | 32 | ~21 | 100 hrs = 40 CT + 20 AI + ~40 project | We deliver the **20 AI hours** and the **~40 project hours CBSE shipped no briefs for**. The 40 CT hours stay with the Maths teacher, where CBSE puts them |
| 9, 10 | 2 periods/week × 32 wk | 64 | ~43 | Track A: 417 is 210 hrs / 100 marks. Track B: 20 hrs | Track A: Parts B, C and D. **Part A Employability Skills — 50 of the 210 hours, 10 of the 100 marks — stays with the school.** Track B: the 20-hour module stretched to a full year of build work |

That Part A boundary is a commercial line worth stating in the proposal rather than discovering in month three. Part A is generic communication, self-management, ICT, entrepreneurship and green skills. It is not what a school hires an AI vendor for, and claiming it inflates our hours without adding value.

**Terms.** Term 1 = June to September, 16 weeks. Term 2 = October to March, 16 weeks. Each term ends in a project, which is where the artefact that the parent actually sees gets made.

### 0.6 How to read the unit tables

- **Sessions** = 40-minute periods.
- **CBSE map** uses the repo convention from `curriculum-mapping/cross-grade-topic-matrix.md`: **R** = reinforces something CBSE already covers · **E** = extends CBSE's treatment · **I** = introduces something CBSE does not cover at this grade.
- **Outcome** is written in the student's own language, because it goes on the report card and in the parent capsule. The trainer-facing version is in `05-evaluations.md`.
- **Artefact** is the test of whether the unit happened. If there is no artefact, the unit did not happen.

---

## 1. Grade 5 — 32 sessions

### What CBSE covers, and what we add

CBSE's Grade 5 book is titled, in print, *Computational Thinking, Class 5*. The "AI" in the filename is not in the content. It is a 50-hour CT companion to NCERT Grade 5 Maths across 15 chapters, with **exactly one labelled activity** in the whole year — the nine-weights ternary-search problem in the Weight and Capacity chapter, which is a genuinely good piece of computer science and the only one.

So Grade 5 is the cleanest canvas in the programme: **everything we teach is additive, and nothing we teach can contradict a CBSE chapter.** Our job is to make "machines that learn from examples" a concrete, physical idea a ten-year-old has personally built, a year before CBSE introduces the vocabulary at Grade 6.

What we deliberately do **not** do at Grade 5: no student accounts, no chatbots, no generative image tools, no Python. The whole year runs on no-login browser tools, a projector, and paper.

### Term 1

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 1 | What makes a machine seem smart? | 4 | Rules vs learning from examples; machine vs not-a-machine; things in the home that decide something | "I can tell when a machine is following rules somebody wrote, and when it learned from examples." | None (unplugged) + Quick Draw projected | Trainer draws, machine guesses, class watches it change its mind | "AI or Not?" card sort, then students find 20 deciding-things in their own home and street | Wall chart: 20 items sorted Rules / Learns / Not a machine, one reason each | **I** — CBSE has no AI content at Grade 5 |
| 2 | Teaching a machine to see | 5 | Examples and labels; more examples means better; what a "class" is | "I can teach a computer to tell two things apart by showing it pictures." | Quick Draw (no login), then Teachable Machine on the **trainer's** screen | Quick Draw: 20 seconds per prompt. TM: add 2 classes, hold objects to webcam, train live, watch the bars move | Class trains one 2-class image model together, live, on the projector | The trained model, plus each student's sheet of 10 objects **the class model** got wrong (Quick Draw is the hook only — see §0.4) | **I** |
| 3 | Patterns and what comes next | 4 | Number, shape and letter patterns; multiple changes between terms; stating the rule | "I can find the rule in a pattern and say it out loud." | Unplugged | — | CBSE's own Grade 5 pattern chapters, run as timed pair challenges | Pattern booklet: 12 patterns, each with the rule written as a sentence | **R** — CBSE Grade 5 Pattern Recognition strand |
| 4 | **Project: Our Classroom Census** | 3 + homework | Asking one good question; collecting from 30 people; tallying; one chart; what the chart says | "I asked 30 people one question and drew what the answers looked like." | Paper, then Sheets projected | — | Each student picks one question, surveys 30 classmates, tallies by hand, draws an A3 bar chart | A3 hand-drawn chart + three findings written underneath + a 60-second presentation | **E** — extends CBSE's "Data Through Pictures" chapter into real collected data |

### Term 2

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Good instructions | 4 | Step-by-step rules; order matters; ambiguity; what a computer cannot guess | "I can write instructions so exact that someone can follow them without asking me anything." | Unplugged, then Scratch offline editor (no account) | Scratch: drag blocks, run, see the sprite do exactly and only what you said | "Robot trainer" — one student is the robot and must follow the written card literally | A 10-step recipe card another student executed with zero questions, signed by that student | **R** — CBSE Grade 5 Algorithmic Thinking strand |
| 6 | When a machine gets it wrong | 4 | Mistakes are normal; some things it misses more than others; why that might be | "I can spot when a machine is wrong, and I can guess why." | **TM model from Unit 2** (Quick Draw as hook only) | Re-test the Unit 2 model on things it has never seen | Mistake hunt: every student logs 10 wrong answers and sorts them into "it had never seen this" vs "I drew it badly" | Machine-mistakes log, 10 entries, each with a guess at the cause | **I** — this is the seed of bias, two grades before CBSE teaches it |
| 7 | Being safe and kind online | 3 | Photos and permission; what not to share; who is on the other side | "I know what I should never put online, and who to tell if something feels wrong." | None | — | Scenario cards; "would you share this?" sorting; writing the rules in their own words | A five-rule poster, Telugu and English, taken home and stuck up | **I** at Grade 5 — **R** against CBSE's Grade 6 Seven Rules, which we pre-load |
| 8 | **Project: Teach the Machine Our Village** | 5 | Choosing two categories; collecting 30 photos each; training; testing on new photos; what it would take to make it real | "Our class taught a computer to tell two local things apart, and we know what it still gets wrong." | Teachable Machine, trainer's account | Full train-test loop, accuracy watched live | Class picks two locally meaningful categories — ripe vs unripe chilli, clean vs littered spot, two crop leaves — collects photos on the trainer's phone, trains together | The trained model demonstrated to another class, plus a one-page "what we'd need to make this actually work" | **I** |

---

## 2. Grade 6 — 32 sessions

### What CBSE covers, and what we add

Grade 6 is where CBSE's AI content starts: 100 hours split 40 CT + 20 AI + ~40 interdisciplinary project. The four AI chapters are **Introduction to AI and Everyday Examples** (Turing Test, Dartmouth 1956, automation vs AI, human vs machine intelligence, labelled and unlabelled data, supervised / unsupervised / reinforcement learning), **Basic Data Concepts** (five data types, collection, organising), **Simple Pattern Recognition and Decision Making** (time series, visualisation, sorting and filtering, ML as a method), and **Ethics and Digital Responsibility** (the Arjun's Digital Disaster case, phishing, plagiarism, piracy, digital footprint, Seven Rules for Good Digital Behaviour).

Three gaps in CBSE's Grade 6, each of which is a thing we sell:

1. **There are zero plugged activities in all 100 hours.** One labelled activity exists in the whole year — a 35-minute 12-point circle exercise on factors and multiples. A Grade 6 student finishes CBSE's year able to say "supervised, unsupervised, reinforcement" without having built anything.
2. **Bias is not taught, despite being promised.** Curricular Goal CG-4 names "bias and fairness"; Chapter 4 delivers online safety instead. The word does not appear in the Grade 6 body.
3. **~40 project hours, no brief.** CBSE's webinar named the Grade 6 project — *Weather and its impact across states* — and shipped no scope, no rubric, no materials list, no exemplar. We ship all four.

### Term 1

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 1 | AI or automation? | 4 | Automation vs AI; machine vs human intelligence; the Turing Test; Dartmouth 1956 | "I can tell whether a machine is automatic or actually learning, and say why." | None + projected demos | — | Audit of the school: fans on timers, attendance biometrics, the bell, autocorrect, YouTube recommendations | 20-row table: each thing sorted automation / AI / neither, with a one-line reason | **R** — CBSE AI Ch. 1 |
| 2 | Three ways machines learn | 5 | Labelled vs unlabelled data; supervised, unsupervised, reinforcement — as things you do, not words you recite | "I trained a model myself, and I can say which of the three kinds of learning it used." | Teachable Machine (no login, school device) | Add 3 classes, train, read the confidence bars, test on fresh items | Each student trains a 3-class image model on objects from their own bag | Their model + accuracy on 10 fresh items, written down | **E** — CBSE names the three types; we make them experienced |
| 3 | Data has types, and types have shapes | 4 | Numerical, text, image, video, sound; where data comes from; cleaning; organising | "I can take a messy real spreadsheet and say what kind of data is in each column." | LibreOffice Calc or Sheets (school tenant) + `data.gov.in` | Sort, filter, find the blanks, label the columns | Download a real Telangana dataset, clean 30 rows, type-label every column | A cleaned 30-row spreadsheet with a data-type label on each column and a note of what was wrong with it | **E** — CBSE AI Ch. 2, extended onto real government data |
| 4 | **Project: Weather and its impact** | 3 + homework | One district vs two others; rainfall over time; what changed; who it affects | "I compared rainfall in three districts and found something a farmer would care about." | Sheets + Datawrapper (no login for drafts) | Line chart over time; comparing series | **The project CBSE named and did not brief.** Siddipet plus two contrasting districts, real rainfall data, three charts | Poster: 3 charts + 5 findings + 1 prediction, presented to the class | **E** — delivers CBSE's named project |

### Term 2

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Reading a chart honestly | 4 | Time series; sorting and filtering; truncated axes; cherry-picked ranges | "I can make the same data tell two different stories, so I can spot when someone does it to me." | Datawrapper or Sheets | Change the axis start; change the date range; change the chart type | Build one honest chart and one misleading chart from the identical dataset | Both charts side by side, plus a written explanation of exactly which trick was used | **E** — CBSE AI Ch. 3 |
| 6 | **The unfair classifier** | 4 | Where unfairness comes from; imbalanced examples; who gets left out | "I made a model unfair on purpose, measured it, then fixed it." | Unplugged first, then Teachable Machine | Train on a deliberately lopsided dataset; compare per-class accuracy | Unplugged: the class applies a biased scholarship rule-sheet and notices who it excludes. Then: train a 2-class model with 20 of one and 5 of the other, measure, rebalance, re-measure | Before/after accuracy table, per class, plus one written rule for "what made it unfair" | **I** — **fills CBSE's own promised-but-missing CG-4 content** |
| 7 | Your digital footprint | 3 | Active and passive footprints; phishing; plagiarism; piracy; the Seven Rules | "I know what trail I leave, and I can explain the Seven Rules to my family." | None | — | Footprint audit of one app the family actually uses; Arjun's Digital Disaster discussed | Audit sheet + the Seven Rules written out in Telugu for home | **R** — CBSE AI Ch. 4 |
| 8 | **Project: Our School in Numbers** | 4 | Framing a real question; collecting; charting; recommending to a decision-maker | "I found something true about my school and told the principal what to do about it." | Sheets + Datawrapper | — | Pick a real school question — canteen waste, water use, attendance by weekday — collect for two weeks, chart it | A one-page recommendation addressed to the principal, with the chart on it | **E** — second of CBSE's two unbriefed project cycles |

---

## 3. Grade 7 — 32 sessions

### What CBSE covers, and what we add

Grade 7 is where CBSE's AI content gets genuinely good. The four chapters are **AI Domains and Applications** (Data Science as the brain, Computer Vision as the eyes, NLP as the mouth and ears; classification, regression, clustering; data points, records and features; a worked 60/20/20 train-validation-test split on 100 animal images; the CV pipeline; the NLP phases), **AI in Industries** (healthcare, education, transport and communication, with named Indian cases including *Smarter Traffic During Monsoon* in Mumbai and *Precision in Heart Surgery*), **Data Visualisation and Analysis** (structured vs unstructured, collection methods, storage formats, bar/line/pie, precision vs accuracy, valid data, metadata), and **Ethics and AI Bias Awareness**.

That ethics chapter is the strongest single piece of content CBSE ships anywhere in Grades 3-8: five named types of bias (data, historical, measurement, algorithmic, human), three real cases including the 2014-2018 hiring algorithm and the healthcare risk-prediction algorithm that ranked by past spending, Human-in-the-Loop reasoning, digital citizenship rights, and India's legal framework — DPDP Act 2023, IT Act 2000, RBI digital-lending guidelines. **We align to it rather than compete with it.**

The gap at Grade 7 is the same as Grade 6 and sharper: **still zero plugged activities, still no named tool, and all of that excellent ethics content is read rather than experienced.** The two activities CBSE does ship — Punched Cards for binary encoding, and the five-light Logical Puzzle Punch Cards — are good unplugged CT and involve no computer.

**Grade 7 is where Machine Learning for Kids becomes the spine**, for the rest of the programme. Teacher-managed accounts mean no student needs an email address.

### Term 1

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Three domains, three senses | 4 | Data Science, Computer Vision, NLP; what each one takes in and gives back | "I know which of the three AI domains a problem belongs to, and I built something in one of them." | Machine Learning for Kids (teacher-managed) + Quick Draw | ML4K: create project, add training buckets, train, test, read the confidence | Build one working image classifier, 3 classes, on objects the student chooses | A working ML4K classifier + its train/test split written down | **R/E** — CBSE AI Ch. 1 |
| 2 | Classification, regression, clustering | 5 | Three task types; when each applies; features and records | "Given a real problem, I can say which of the three tasks it is — and I can show clustering happening." | **Orange Data Mining** (desktop, no account) | Load a CSV, scatter plot, k-means widget, see groups form without labels | Run k-means on a real `data.gov.in` dataset; then sort six real problems into the three task types | Orange workflow screenshot + the six-problem sorting with reasons | **E** — CBSE names all three; Orange makes clustering visible |
| 3 | Why you never test on what you trained on | 3 | Train / validation / test; the 60/20/20 split; overfitting, in plain words | "I can show that a model looks better on its homework than on a real test, and say why." | ML4K | Train, then test on held-out items the model never saw | Measure the Unit 1 model's accuracy on training items vs fresh items; record the gap | A two-column accuracy table — seen vs unseen — with the gap explained in one paragraph | **E** — CBSE gives the 60/20/20 numbers; we make the consequence measurable |
| 4 | **Project: Nutri-Quest** | 4 + homework | Food groups; a week's balance; classifying a food from a photo; measuring how often it is right | "I built a weekly food planner and a classifier that sorts a food photo into its group." | ML4K + Sheets | — | **The project CBSE named and did not brief.** Build a 7-day balanced planner for a real family budget, plus an image classifier for 4 local food groups | The 7-day planner + the classifier + its accuracy on 20 fresh photos | **E** — delivers CBSE's named Grade 7 project |

### Term 2

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Teaching a machine to read | 4 | NLP phases; tokenisation; sentiment; why language is harder than pictures | "I trained a model on sentences we wrote ourselves, and I know which sentences fool it." | ML4K text project | Text buckets, training on short sentences, confidence on new input | The class writes 60 short feedback sentences in Telugu and English; train a sentiment classifier on them | The text classifier + a log of 10 sentences it got wrong, with a guess at why | **E** — CBSE covers NLP phases as theory only |
| 6 | Precision, accuracy, and valid data | 4 | Precision vs accuracy; validity; metadata; what makes a dataset untrustworthy | "I can open a real government dataset and list what is wrong with it." | Orange + Sheets, `data.gov.in` | Summary statistics, missing-value counts, outlier spotting | Data-quality audit of one real dataset | One-page data-quality report naming 5 specific problems found | **E** — CBSE AI Ch. 3 |
| 7 | Five kinds of bias | 4 | Data, historical, measurement, algorithmic and human bias; the three real cases; Human-in-the-Loop | "I can name which kind of bias a system has, including in the model I built myself." | ML4K with deliberately skewed training data | Per-class accuracy when one bucket is starved | CBSE's three real cases as discussion; then students audit **their own Unit 5 classifier** and name its bias type | A bias audit of their own model, naming which of the five types it has and what they would collect to fix it | **R** on CBSE Ch. 4, **E** by making it experiential |
| 8 | **Project: AI in our industry** | 4 | Finding a real local deployment; interviewing; separating marketing from fact | "I found one real place near me where AI is actually used, and I checked that it is real." | None + web research | — | Pick a Siddipet or Hyderabad industry — cotton, poultry, pharma, auto, retail — find one genuine named deployment, interview one person if reachable | 5-slide deck with one named, verifiable real deployment and what it replaced | **E** — CBSE's AI-in-Industries chapter, localised |

---

## 4. Grade 8 — 32 sessions

### What CBSE covers, and what we add

Grade 8 is CBSE's best grade and the only one where students build. The four chapters are **AI Project Lifecycle**, **AI and Its Applications**, **Data and Fairness in AI**, and **Ethics and Responsible AI** (four pillars: privacy, bias, misinformation, accountability, citing Joy Buolamwini's *Gender Shades*).

It ships three real hands-on activities, all on Teachable Machine: a waste classifier (plastic / paper / organic), voice-command recognition (Start / Stop / Help plus background noise), and the cat-dog classifier that teaches bias by making students build an imbalanced dataset, observe the skew, rebalance and re-observe. **Teachable Machine and Machine Learning for Kids are the only two AI tools named anywhere in CBSE's Grades 3-8 handbooks, and both appear only here.**

One inconsistency a trainer must know about before teaching it: **CBSE's Grade 8 learning outcomes use a 4-stage project lifecycle (Define Problem / Collect Data / Test AI Tools / Reflect and Improve) while the chapter body uses a 6-stage one (Define / Data Collection / Model Development / Model Evaluation / Deployment / Monitoring).** Teach the 6-stage version, name the 4-stage one as the simplified on-ramp, and say so out loud. The 6-stage version is what Class 9's 417 and NCERT's module both use.

Two gaps, and they are the same gap: **no neural networks and no Python.** A Grade 8 student who has done CBSE's year arrives at Class 9 — whether on 417 or on the NCERT module — never having written a line of code or seen inside a model. That cliff is Grade 8's two most valuable units for us, and they are Units 6 and 7 below.

Also still unbriefed: ~40 project hours, with the Grade 8 theme named in the webinar only — *Sports participation and performance data*.

### Term 1

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 1 | The project lifecycle, used not recited | 4 | Six stages; why monitoring exists; the worked exam-score predictor; the 4-vs-6 stage discrepancy named openly | "I can take a problem I chose and plan all six stages of it before building anything." | None | — | Fill a 6-stage canvas for a problem the student picked; CBSE's exam-score predictor worked through as the model answer | A completed 6-stage canvas with the data they would need named at stage 2 | **R** — CBSE AI Ch. 1 |
| 2 | Build it: waste classifier | 4 | Three classes; dataset variety; lighting and background; which classes confuse | "I built a waste sorter and I know exactly which items it cannot handle." | Teachable Machine | Image project, 3 classes, 20-30 photos each, varied backgrounds | **CBSE's own Grade 8 activity**, run as a measured experiment rather than a demo | The model + accuracy on 15 fresh items + a named list of items it confuses and a hypothesis why | **R** — CBSE Grade 8 activity, SH pp. 55-56 |
| 3 | Build it: voice commands | 3 | Audio classes; background noise as a class; whose voice it was trained on | "My voice model works on me and I can measure how much worse it is on someone else." | Teachable Machine, audio project | Audio project, 15-20 samples per command, background-noise class | **CBSE's own activity**, extended: test with three different voices, including one speaking Telugu-accented English | Accuracy table broken down **per voice** — the first time fairness appears as a number | **R** on the activity, **E** on the per-voice breakdown |
| 4 | **Project: Sports participation data** | 5 | Collecting from the school; finding a pattern; checking whether the pattern is fair | "I found a real pattern in my school's sports data and checked who it leaves out." | Sheets + Orange + Datawrapper | — | **The project CBSE named and did not brief.** Real school sports participation data, by class and by gender, over a term | Report: 3 charts, one finding, and one fairness check that names who is under-represented | **E** — delivers CBSE's named Grade 8 project |

### Term 2

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Bias you can feel | 4 | Imbalanced data; per-class accuracy; *Gender Shades*; the four ethics pillars | "I measured a model being unfair, then measured it being fairer, and I can quote the real-world numbers." | Teachable Machine | Round 1 imbalanced, Round 2 balanced, per-class accuracy both times | **CBSE's cat-dog activity**, run as a controlled experiment with numbers recorded, not an impression | Two-round results table with per-class accuracy, compared against the published *Gender Shades* error-rate disparity | **R** on the activity, **E** by making it quantitative |
| 6 | **Inside the box: what a network actually does** | 4 | Features; layers; why one layer is not enough; weights changing during training | "I can show a problem the model cannot learn, add what it needs, and watch it start working." | `playground.tensorflow.org` (no login) | Pick the spiral dataset, watch it fail, add a feature or a layer, watch the loss curve fall | Run the four built-in datasets; find the one that fails with a single layer; fix it | A screenshot sequence — failing, then working — with their own written explanation of what changed | **I** — **bridges CBSE's neural-network cliff.** Also pre-loads 417 Class X, which names this exact site |
| 7 | **First Python, offline** | 4 | Variables, operators, data types, `print`, `input`; running a file you saved | "I have written Python programs that run on my own machine, and they are saved in my folder." | **Thonny** (offline, no account, no cloud) | Write, save, run, read the error; the shell vs the editor | Eight programs taken directly from the **417 Class IX** suggested list — personal details, square of 7, sum of 15 and 20, km to m, table of 5, simple interest, rectangle area, average of three subjects | Eight working `.py` files in the student's own folder — **the opening pages of their Class 9 practical file** | **I** — **bridges CBSE's Python cliff and starts the 417 practical file a year early** |
| 8 | **Project: Misinformation hunt** | 4 | AI-generated and manipulated media; what check catches what; accountability | "I found five fakes in my own feed and I can say which check caught each one." | None / projected | — | Students find five AI-generated or manipulated items in feeds they actually use, and document the check that caught each | A five-item log: item, why it looked real, which check caught it | **E** on CBSE's misinformation pillar. **Pre-loads NCERT's Unit 3**, which is Grade 9's most valuable unit |

---

## 5. Grade 9 — 64 sessions, dual track

### What CBSE covers, and what we add

Read §0.1 first. Grade 9 is the grade the circulars moved, and the design follows from that.

**Track A — AI 417 support.** For students who picked AI 417 as their skill subject under Acad-70/2026. Board-examined in Class 10 in 2027-28. The 417 Class IX syllabus — read directly from `ai/cbse/code-417-9-10/417-AI-IX_2025-26.pdf` — is 210 hours for 100 marks:

| Part | Content | Hours | Marks |
|---|---|---|---|
| **A** | Employability Skills: Communication, Self-Management, ICT, Entrepreneurial, Green Skills (I) | 50 | 10 |
| **B** | Subject Specific Skills — 5 units, see below | 160 | 40 |
| **C** | Practical File (min 15 programs) 15 + Practical Examination 15 + Viva 5 | — | 35 |
| **D** | Project Work / Field Visit / Student Portfolio, linked to the SDGs | — | 15 |
| | **Grand total** | **210** | **100** |

Theory paper = 50 marks (Part A 10 + Part B 40). Practical = 50 marks (Part C 35 + Part D 15).

Part B, unit by unit, with CBSE's own hour and mark split:

| 417 Unit | Theory hrs | Practical hrs | Marks |
|---|---|---|---|
| 1 — AI Reflection, Project Cycle and Ethics | 30 | 25 | 10 |
| 2 — Data Literacy | 22 | 28 | 10 |
| 3 — Math for AI (Statistics & Probability) | 12 | 13 | 07 |
| 4 — Introduction to Generative AI | 08 | 12 | 05 |
| 5 — Introduction to Python | 01 | 09 | 08 |

**Part A stays with the school.** 50 of the 210 hours and 10 of the 100 marks are generic employability content. We deliver Parts B, C and D. Say this in the proposal.

**Track B — NCERT module plus our extension.** For the majority: students on Kaushal Vikas or another skill subject, who get no AI otherwise. NCERT's module (23 Oct 2026, led by Prof. Mayank Vatsa of IIT Jodhpur and Prof. Mitesh M. Khapra of IIT Madras with CIET-NCERT) is 20 hours in five units. **Structure below is from secondary sources — the PDF could not be retrieved from this sandbox, see §0.2.**

| NCERT Unit | Central question | Hours | CT habit | Portfolio output |
|---|---|---|---|---|
| 1 — AI is Already in Your Life | Where do we meet AI in daily life? | 1-3 | Pattern recognition | AI Diary |
| 2 — How Machines Learn from Examples | How does learning from data work? | 4-8 | Abstraction, data thinking | Train-and-Break log |
| 3 — When AI Gets It Wrong | How do we check whether AI output is reliable? | 9-13 | Evaluation | Verification checklist / Hallucination Hunt |
| 4 — Your Data, Your Rights, Your Responsibility | What should we share, and what should we protect? | 14-16 | Decomposition | Privacy Policy Dissection |
| 5 — Working with Modern AI Tools: Prompts and the Helper Stance | How do we use AI well? | 17-19 | Algorithmic thinking, reflection | Prompt Library |

Hour 20 is a closing session where each student presents one artefact from their *Curious Notebook*, which is the module's formative portfolio. The module's verification habit is the **Five Checks**: Source, Claim type, Compare, Pause, Confidence. Named tools and systems include Bhashini, Aadhaar face authentication, UPI transaction-safety checks and Teachable Machine; named activities include the AI Scavenger Hunt, the "AI or Not?" card sort, the Train-and-Break experiment, the Hallucination Hunt, a "Spot the Manipulation" deepfake gallery walk, the Privacy Policy Dissection and the Prompt Library. It cites the DPDP Act 2023 and DPDP Rules 2025, and points students to `cybercrime.gov.in` and helpline 1930 for harmful content.

**Our Track B job is to turn 20 hours of reading into 56 sessions of building, without changing the spine.** Aligning to NCERT costs us almost nothing — the module's verification-first, "helper not replacement" stance is where we were going anyway — and it buys the pitch the phrase *NCERT-aligned*, which a principal can repeat to a parent.

**Dead tools inside CBSE's own 417 Class IX syllabus.** Three of the activities CBSE names will probably not run. Flagged as *verify on the day*, with substitutes:

| CBSE names | Status | Substitute |
|---|---|---|
| Microsoft LUIS demo (`aidemos.microsoft.com/luis/demo`) for the AI Reflection session | Microsoft has retired LUIS | Any voice-assistant demo on the trainer's phone, narrated |
| **Semantris** (`research.google.com/semantris`) as the NLP game in The AI Game | Abandoned | An ML4K text project built live, which is better anyway — students see the training, not just the game |
| **GAN Paint** for the Generative AI hands-on | Likely offline | A current image generator, **trainer-projected only** under §0.3 |
| Rock-Paper-Scissors (`next.rockpaperscissors.ai`) and **Quick Draw** | Both expected live | Keep |

One more flag with teeth: **the 417 Class IX syllabus names Tableau Public for the data-dashboard project. Tableau Public publishes student work to the open internet.** For students under 18 that is a DPDP problem we should not walk into. Use **Datawrapper**, which CBSE names in the same breath, and keep the output private.

### Term 1 — shared core, both tracks (8 sessions)

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Activity | Artefact | CBSE map |
|---|---|---|---|---|---|---|---|---|---|
| S1 | The AI Game, three domains | 3 | Data, Computer Vision, NLP, met as three things you play | "I have played against all three kinds of AI and I can say what each one was doing." | Quick Draw and `next.rockpaperscissors.ai` as hooks + **ML4K text** for the graded part | RPS: the model predicting your next move from your history. ML4K: training on your own sentences | CBSE's own AI Game, with the abandoned Semantris replaced | A three-domain log: what each system took in, what it gave back, where it failed | **R** — 417 Class IX U1 |
| S2 | The project cycle and the 4Ws canvas | 3 | Problem scoping; the 4Ws; stakeholders; system maps; the iterative nature of scoping | "I can scope a real local problem properly before anyone writes any code." | None | — | CBSE's 4Ws problem canvas and system map, applied to a real Siddipet or Hyderabad problem the student chose | A completed 4Ws canvas + a system map + a named list of stakeholders | **R** — 417 Class IX U1 |
| S3 | Where Indian data actually lives | 2 | `data.gov.in`; IMD; Census; TSDPS; licence terms; what "reliable source" means | "I can find three real datasets for my problem and say which one I trust." | `data.gov.in` + browser | Search, filter by state, read the licence, download CSV | Find three candidate datasets for the S2 problem; assess and choose | A one-page source assessment: three datasets, licence, gaps, choice and reasons | **E** — 417 says "find reliable sources"; we name the actual sources |

### Term 1 and 2 — Track A (AI 417), 56 sessions

| # | Unit | Sessions | 417 ref | Topics | Student-language outcome | Tool | Feature shown | Artefact |
|---|---|---|---|---|---|---|---|---|
| A1 | Data literacy, privacy and security | 8 | U2, 10 marks | Data literacy process framework; privacy vs security; breaches; types of data; acquisition; preprocessing; interpretation | "I can take raw data all the way to a dashboard, and I can say how I kept it safe." | Sheets/Calc + **Datawrapper** (not Tableau Public — see above) | Clean, pivot, chart, publish privately, embed | An interactive dashboard on a real dataset, kept private, plus a written data-handling note |
| A2 | Math for AI — statistics and probability | 7 | U3, 7 marks | Why maths; patterns in numbers and images; statistics and its applications; probability; types of events | "I can describe a dataset with statistics and work out how likely something is." | Orange + Sheets | Summary statistics widget; distributions; the car-spotting tabulation CBSE names | A statistics report on data the student collected themselves: mean, median, mode, and the probability of one named event |
| A3 | Generative AI | 6 | U4, 5 marks | Generative vs conventional AI; types; how it learns; benefits and limits; ethics of use | "I can tell a generated image from a real one more often than my classmates can, and I know why I can." | **Trainer-projected only**, unless school tenant + written consent (§0.3) | Text generation, image generation, the same prompt twice, the confident wrong answer | A "real or generated?" test the student builds and runs on 10 classmates, with the results table and what fooled people |
| A4 | Python | 14 | U5, 8 marks + Part C file 15 marks | Variables, operators, expressions, data types, `print`, `input`; conditionals; `for`; `while`; lists | "I have a practical file of 15 working programs that I wrote and can explain." | **Thonny**, offline | Editor and shell; saving; reading a traceback; stepping through | **The Part C practical file: 15+ programs taken from CBSE's own suggested list** — print patterns, square of 7, km to m, table of 5, simple interest, rectangle and triangle area, average of 3 subjects, discount, cuboid, the science-quiz name list, list indexing and `extend`+`sort`, voting check, grade check, sign check, first 10 naturals and evens, odd to *n*, sums |
| A5 | Ethics, bias and access | 5 | U1, part of 10 marks | Ethics; AI bias; AI access; the Moral Machine; the balloon debate | "I can argue both sides of an AI ethics question and say which argument is weaker." | `moralmachine.net` | The trolley-style scenarios and the class's aggregate answers | A balloon-debate brief arguing the side the student personally disagrees with |
| A6 | Project, field visit and portfolio | 8 | Part D, 15 marks | SDG linkage; the project report; the viva; the portfolio | "I have an SDG-linked project, a report, and a portfolio of five activities ready for the viva." | As the project needs | — | Project report + viva prep + **portfolio with at least 5 activities, which Class X continues** |
| A7 | Revision and practical exam rehearsal | 6 | Parts B and C | Past SQPs; marking schemes; the practical exam format; the viva | "I have sat a full mock, theory and practical, and I know where I lose marks." | Repo SQPs | — | A completed mock paper and a marked practical rehearsal, using the 417 Class X SQP and marking schemes in `ai/cbse/sqp-marking-schemes/` — note there are only three usable 417 files there, see `05-evaluations.md` §4 |

### Term 1 and 2 — Track B (NCERT plus extension), 56 sessions

| # | Unit | Sessions | NCERT ref | Topics | Student-language outcome | Tool | Feature shown | Artefact |
|---|---|---|---|---|---|---|---|---|
| B1 | AI is already in your life | 6 | U1 | Where AI already sits in their day; AI vs not-AI; the systems they already use without naming them | "I kept a diary of every AI I met for two weeks, and I was wrong about some of them." | None + projected; Aadhaar face auth, UPI safety checks and Bhashini shown as real Indian examples | — | **AI Diary**: 20 dated entries, each naming the system, what it decided, and whether the student was right that it was AI |
| B2 | How machines learn from examples | 10 | U2 | Examples and labels; features; training; what a model is; deliberately breaking one | "I built a model and then broke it five different ways on purpose." | ML4K + Teachable Machine + Orange | Training, per-class accuracy, starving a class, mislabelling on purpose, adding noise | **Train-and-Break log**: five documented attacks on their own model, each with the accuracy before and after |
| B3 | **When AI gets it wrong** | 12 | U3 | Confident wrong answers; how to check; the Five Checks; deepfakes and manipulated media; **misses and false alarms as separate errors** | "I can check an AI answer properly — and I know that calling a correct answer fake is also a mistake." | A classifier that reports a **confidence number** — ML4K or Orange. **Not a chatbot** | Confidence scores next to wrong answers; the "Spot the Manipulation" gallery walk | **Verification checklist the student wrote**, then tested on 10 AI outputs — **scored for misses and false alarms separately** |
| B4 | Your data, your rights | 8 | U4 | What they share; DPDP Act 2023 and Rules 2025; consent; what a policy actually permits; reporting harm | "I read a real privacy policy of an app I use and I can say what I agreed to." | None + the actual policy text | — | **Privacy Policy Dissection**: 10 questions answered from the policy text of one app they really use, with the clause quoted |
| B5 | Working with modern AI tools | 10 | U5 | Prompting; the Helper-Not-Replacement stance; when not to use it; citing it | "I have a prompt library that works, and I know what each prompt gets wrong." | **School tenant + written parental consent**, else trainer-projected: ChatGPT, Gemini, Perplexity, NotebookLM | NotebookLM grounded on their own notes; Perplexity's citations followed to source; the same prompt answered differently twice | **Prompt Library**: 15 prompts, each with its purpose, its output, and the specific thing it got wrong |
| B6 | Build something that works | 12 | Extension | The six-stage lifecycle, run for real, on a problem they chose in S2 | "I built a working thing for a real person and I know what it still cannot do." | Student's choice from the above | — | One working artefact + a six-stage write-up + a named real user who tried it |
| B7 | Curious Notebook presentation | 4 | U1-U5 close | Presenting one artefact; defending a claim; stating confidence honestly | "I presented my work and said honestly how sure I was." | — | — | The presented **Curious Notebook**, with the student's own stated confidence on each claim |

**Why B3 is the most valuable unit in the whole programme, and why it is built this way.** Teaching students to doubt AI output is easy and dangerous to do badly: short AI-literacy interventions have been found to substantially increase the rejection of *correct* output. A student who has learned only "AI lies" has not learned to verify, they have learned to distrust, and the first thing they will reject is a right answer. So B3 scores both error directions and treats a false alarm as a real mistake. It also runs on classifiers rather than chatbots for a mechanical reason: **a chatbot emits no confidence number, so there is nothing to calibrate against.** A classifier shows a percentage next to a wrong answer, which is what makes the lesson land.

---

## 6. Grade 10 — 64 sessions, dual track

### What CBSE covers, and what we add

**Track A — AI 417 Class X.** Read directly from `ai/cbse/code-417-9-10/417-AI-X_2026-27.pdf`. 210 hours, 100 marks.

| Part | Content | Hours | Marks |
|---|---|---|---|
| **A** | Employability Skills (II) — 5 units × 10 hrs | 50 | 10 |
| **B** | Subject Specific Skills — 7 units, see below | 160 | 40 |
| **C** | Practical File (min 15 programs) 15 + Practical Exam on Units 4, 5, 6, 7 **15** + Viva 5 + Project / Field Visit / Portfolio 10 + Project Viva 5 | — | 50 |
| | **Grand total** | **210** | **100** |

Part B, unit by unit, with CBSE's own split:

| 417 Class X Unit | Theory hrs | Practical hrs | Marks | Assessed through |
|---|---|---|---|---|
| 1 — Revisiting AI Project Cycle and Ethical Frameworks | 11 | 4 | **7** | Theory |
| 2 — Advanced Concepts of Modeling in AI | 18 | 7 | **11** | Theory |
| 3 — **Evaluating Models** | 21 | 4 | **10** | Theory |
| 4 — Statistical Data | — | 28 | — | **Practical only** |
| 5 — Computer Vision | 10 | 20 | **4** | Theory + Practical |
| 6 — Natural Language Processing | 20 | 7 | **8** | Theory + Practical |
| 7 — Advance Python | — | 10 | — | **Practical only** |

Two things a trainer should notice immediately. **Unit 2 and Unit 3 together are 21 of the 40 Part B marks** — modelling and evaluation are more than half the theory paper. And **Units 4 and 7 carry no theory marks at all but 38 practical hours**, which means they are entirely a practical-exam and practical-file story. Plan the year around that, not around page counts.

Tools CBSE names inside the Class X syllabus itself, with status:

| Tool | Where | Status |
|---|---|---|
| **Orange Data Mining** (`orangedatamining.com`) | U2 classification walkthrough (coral bleaching), U6 sentiment analysis | **Live, desktop, no account. The single most important tool in Class X** |
| `playground.tensorflow.org` | U2 | Live, no account. Already met at Grade 8 Unit 6 |
| Teachable Machine | U2 "Build a Smart Sorter" | Live but **frozen since Feb 2023**. Already met at Grade 8 |
| `setosa.io` image-kernels | U5 convolution | Live, no account |
| `piskelapp.com` | U5 pixel work | Live |
| Emoji Scavenger Hunt | U5 | Expected live |
| Elizabot, Kuki, Cleverbot, Singtel support bot | U6 script-bot vs smart-bot | Expected live |
| Google Cloud Natural Language | U6 keyword extraction | **Needs a Google Cloud account — trainer-projected only under §0.3** |
| Anaconda Navigator, Jupyter, Intel OpenVINO | Part C environment, equipment spec | Live. Note Anaconda's licensing changed for larger organisations — a school install is fine, verify before standardising |
| **Lobe** (`lobe.ai`) | U2 | **Likely discontinued — verify on the day.** Substitute: Teachable Machine or Orange |
| **Experiments with Google** drum machine | U2 | **Likely archival — verify on the day.** Substitute: any Orange or TM demo |
| `my-goodness.net` | U1 ethics | Verify on the day |

CBSE's own stated minimum lab spec for Class X, useful for the proposal because it is the Board's number rather than ours: Intel Core i5-7300U or equivalent, 8 GB DDR4, 500 GB HDD, 18.5" monitor, full-HD webcam, headphones with mic, Anaconda Navigator, Intel OpenVINO, Python — **at a 2:1 human-to-machine ratio for a batch of 20, so ten machines.** CBSE also states a trainer floor: Diploma or Bachelor's in Computer Science / Applications / IT, or a graduate with PGDCA, or DOEACC A Level, plus **at least one year of experience in the same job role**, able to communicate in English and the local language. That is the number to quote when a school asks why our trainers cost what they cost.

CBSE's suggested Class X projects, all three SDG-linked: palmer penguin species prediction (statistical), early detection of coral bleaching (computer vision), sentiment analysis (NLP). **The portfolio continues from Class IX and needs a minimum of five activities.**

**Track B — Grade 10 non-417.** NCERT's module is a single 20-hour module for Classes 9-12, so a student who did it in Grade 9 must not sit through it again. Grade 10 Track B is therefore **the capstone year**: one real project for one real user, evaluation of models the student did *not* build, careers and portfolio work, and the verification habit at a harder level.

### Term 1 and 2 — Track A (417 Class X), 64 sessions

| # | Unit | Sessions | 417 ref | Topics | Student-language outcome | Tool | Feature shown | Artefact |
|---|---|---|---|---|---|---|---|---|
| A1 | Revisiting the cycle, and ethical frameworks | 6 | U1, 7 marks | The cycle again, at depth; ethical frameworks; bias revisited | "I can take an ethical framework and apply it to a specific system, not just talk about ethics." | `my-goodness.net` if live | — | An ethics review of one named real deployed system, written against a framework |
| A2 | Advanced modelling | 11 | U2, 11 marks | Rule-based vs learning-based; supervised, unsupervised, reinforcement at depth; neural network basics; decision trees; the classification walkthrough | "I can build a classifier in Orange on a real dataset and explain what the model is doing." | **Orange Data Mining** + `playground.tensorflow.org` + Teachable Machine | Orange: File → Select Columns → Data Sampler → Classifier → Test & Score, as a visual workflow. CBSE's coral-bleaching walkthrough | A complete Orange workflow on a real dataset, screenshotted, with the model choice justified |
| A3 | **Evaluating models** | 13 | U3, 10 marks | **Confusion matrix from scratch**; accuracy, precision, recall, F1; train-test split; why accuracy alone lies | "I can build a confusion matrix by hand and say which metric matters for which problem." | Paper first, then Orange Test & Score | Confusion matrix widget next to the hand-computed one | A hand-built confusion matrix for a real model, with all four metrics computed and **a written argument for which metric this problem should be judged on** |
| A4 | Statistical data | 10 | U4, practical only, 28 hrs | Statistics on real data; NumPy; mean, median, mode; charting | "I can compute statistics in Python, not just in a spreadsheet." | **Thonny** + NumPy + Matplotlib | NumPy mean/median/mode; line and scatter charts from CBSE's own program list | Practical-file programs: NumPy statistics, line chart (2,5)→(9,10), scatter of CBSE's five points, CSV read and `info()` |
| A5 | Computer vision | 12 | U5, 4 marks + 20 practical hrs | Pixels; image features; **the convolution operator**; kernels; CNN architecture, layers, testing | "I can explain what a kernel does by showing what it does to a real image." | `setosa.io` image-kernels + `piskelapp.com` + Thonny | setosa.io: change the kernel, watch the edge-detection appear on the photo | A kernel experiment sheet — four kernels, four outputs, what each one detects — plus the two CBSE image programs in Python |
| A6 | Natural language processing | 10 | U6, 8 marks + 7 practical hrs | Why language is hard; NLP stages; lexicon, syntax, semantics; script bot vs smart bot; **text normalisation, bag of words, TF-IDF**; sentiment analysis | "I can run a sentiment analysis on real text and explain how the words became numbers." | **Orange** (sentiment workflow) + the chatbots CBSE names | Orange: Corpus → Preprocess Text → Bag of Words → Test & Score. Elizabot vs a modern bot, side by side | A sentiment analysis on a real collected text set, with the bag-of-words step explained, plus a script-bot vs smart-bot comparison |
| A7 | Project, portfolio and exam rehearsal | 12 | Part C, 50 marks | The project (10 + 5 viva); the practical file; the practical exam on Units 4-7; the viva | "My practical file, project and portfolio are finished and I have sat a full mock." | As needed | — | **Complete Part C package**: 15+ program practical file, project report, portfolio of 5+ activities, and one marked mock built from the three usable 417 files in `ai/cbse/sqp-marking-schemes/` (see `05-evaluations.md` §4) |

### Term 1 and 2 — Track B (capstone), 64 sessions

| # | Unit | Sessions | Topics | Student-language outcome | Tool | Feature shown | Artefact |
|---|---|---|---|---|---|---|---|
| B1 | Evaluating a model you did not build | 10 | Confusion matrix; precision vs recall as a choice with consequences; reading someone else's model card | "I can judge a model someone else built, and say what it should be measured on." | Orange | Test & Score on a pre-built model; changing the threshold and watching precision and recall trade off | A written evaluation of a model the student did not build, naming the metric it should be judged on and why |
| B2 | Data that is actually theirs | 10 | Collecting real data properly; consent; sampling; what a biased sample does downstream | "I collected my own dataset, and I can say who is missing from it." | Sheets + Orange | — | A dataset of at least 150 real records the student collected, with a written note on who is under-represented and why |
| B3 | Build for one real user | 20 | The six stages, run for real; scoping with the user, not for them; iterating after feedback | "Someone who is not in my class used the thing I built, and told me what was wrong with it." | Student's choice | — | A working artefact + a named real user + that user's recorded feedback + one documented change made because of it |
| B4 | Verification at a harder level | 10 | Claims that are hard to check; two independent sources; stating confidence; when to refuse to answer | "I can tell an unverifiable claim from a hard-to-check one, and I say which I am looking at." | Perplexity and NotebookLM, school tenant + consent, else projected | Following a citation to the source and finding it does not say what was claimed | A verification dossier on five contested claims, each tagged easy / hard / unverifiable, with sources followed to origin |
| B5 | Careers, portfolio and what comes next | 8 | What AI work actually looks like; what Class 11 and 12 offer; the portfolio as evidence | "I have a portfolio that shows what I can do, and I know what to pick in Class 11." | — | — | A portfolio of 5+ artefacts from Grades 8, 9 and 10 + a one-page plan for Class 11 (see `07-ai-careers-for-school-students.md`) |
| B6 | Capstone presentation | 6 | Presenting to an outside audience; defending with numbers; honest limits | "I presented my work to people who are not my teacher, and I said what it cannot do." | — | — | A presentation to parents or another school, with a stated-limits slide |

---

## 7. Summary table — Grade × term × unit × tool × artefact

The planning table. Grades 9 and 10 show shared core, then Track A, then Track B.

| Grade | Term | # | Unit | Primary tool | Artefact | Sessions |
|---|---|---|---|---|---|---|
| **5** | 1 | 1 | What makes a machine seem smart? | Unplugged + Quick Draw projected | 20-item Rules/Learns/Not chart | 4 |
| 5 | 1 | 2 | Teaching a machine to see | Teachable Machine (trainer screen) | Class-trained 2-class model + its own miss sheet | 5 |
| 5 | 1 | 3 | Patterns and what comes next | Unplugged | Pattern booklet, 12 rules written | 4 |
| 5 | 1 | 4 | **Project: Our Classroom Census** | Paper + Sheets | A3 hand-drawn chart + 3 findings | 3 |
| 5 | 2 | 5 | Good instructions | Scratch offline | 10-step recipe card, executed by a peer | 4 |
| 5 | 2 | 6 | When a machine gets it wrong | Teachable Machine | Machine-mistakes log, 10 entries | 4 |
| 5 | 2 | 7 | Being safe and kind online | None | Five-rule poster, Telugu + English | 3 |
| 5 | 2 | 8 | **Project: Teach the Machine Our Village** | Teachable Machine | Local 2-class model + "what it'd take" page | 5 |
| **6** | 1 | 1 | AI or automation? | None + demos | 20-row school audit table | 4 |
| 6 | 1 | 2 | Three ways machines learn | Teachable Machine | 3-class model + accuracy on 10 fresh items | 5 |
| 6 | 1 | 3 | Data has types, types have shapes | Sheets + `data.gov.in` | Cleaned 30-row dataset, columns type-labelled | 4 |
| 6 | 1 | 4 | **Project: Weather and its impact** | Sheets + Datawrapper | 3-chart poster + 5 findings + 1 prediction | 3 |
| 6 | 2 | 5 | Reading a chart honestly | Datawrapper | Honest chart + misleading chart + the trick named | 4 |
| 6 | 2 | 6 | **The unfair classifier** | Unplugged + Teachable Machine | Before/after per-class accuracy table | 4 |
| 6 | 2 | 7 | Your digital footprint | None | App footprint audit + Seven Rules in Telugu | 3 |
| 6 | 2 | 8 | **Project: Our School in Numbers** | Sheets + Datawrapper | One-page recommendation to the principal | 4 |
| **7** | 1 | 1 | Three domains, three senses | **ML for Kids** | Working 3-class classifier + its split | 4 |
| 7 | 1 | 2 | Classification, regression, clustering | **Orange** | k-means workflow + six problems sorted | 5 |
| 7 | 1 | 3 | Never test on what you trained on | ML for Kids | Seen vs unseen accuracy table + the gap explained | 3 |
| 7 | 1 | 4 | **Project: Nutri-Quest** | ML for Kids + Sheets | 7-day planner + food classifier + accuracy on 20 | 4 |
| 7 | 2 | 5 | Teaching a machine to read | ML for Kids (text) | Sentiment classifier on 60 class-written sentences | 4 |
| 7 | 2 | 6 | Precision, accuracy, valid data | Orange + Sheets | Data-quality report naming 5 real problems | 4 |
| 7 | 2 | 7 | Five kinds of bias | ML for Kids (skewed data) | Bias audit of the student's own classifier | 4 |
| 7 | 2 | 8 | **Project: AI in our industry** | Web research | 5-slide deck, one verified local deployment | 4 |
| **8** | 1 | 1 | The lifecycle, used not recited | None | Completed 6-stage canvas | 4 |
| 8 | 1 | 2 | Build it: waste classifier | Teachable Machine | 3-class model + accuracy + confusion list | 4 |
| 8 | 1 | 3 | Build it: voice commands | Teachable Machine (audio) | **Per-voice** accuracy table | 3 |
| 8 | 1 | 4 | **Project: Sports participation data** | Sheets + Orange | 3 charts + 1 finding + 1 fairness check | 5 |
| 8 | 2 | 5 | Bias you can feel | Teachable Machine | Two-round per-class accuracy vs *Gender Shades* | 4 |
| 8 | 2 | 6 | **Inside the box** | `playground.tensorflow.org` | Failing-then-working screenshots + explanation | 4 |
| 8 | 2 | 7 | **First Python, offline** | **Thonny** | 8 `.py` files = start of the Class 9 practical file | 4 |
| 8 | 2 | 8 | **Project: Misinformation hunt** | None | Five-fake log with the catching check named | 4 |
| **9** | 1 | S1 | The AI Game, three domains | Quick Draw + RPS + ML4K | Three-domain log | 3 |
| 9 | 1 | S2 | Project cycle and 4Ws canvas | None | 4Ws canvas + system map + stakeholders | 3 |
| 9 | 1 | S3 | Where Indian data actually lives | `data.gov.in` | Three-dataset source assessment | 2 |
| 9 | A | A1 | **417 U2** Data literacy, privacy, security | Sheets + Datawrapper | Private interactive dashboard + handling note | 8 |
| 9 | A | A2 | **417 U3** Math for AI | Orange + Sheets | Statistics report + one probability computed | 7 |
| 9 | A | A3 | **417 U4** Generative AI | Projected only | "Real or generated?" test run on 10 classmates | 6 |
| 9 | A | A4 | **417 U5** Python | **Thonny** | **Part C practical file, 15+ programs** | 14 |
| 9 | A | A5 | **417 U1** Ethics, bias, access | `moralmachine.net` | Balloon-debate brief for the opposing side | 5 |
| 9 | A | A6 | **417 Part D** Project and portfolio | As needed | SDG project + report + 5-activity portfolio | 8 |
| 9 | A | A7 | Revision and practical rehearsal | Repo SQPs | Marked mock, theory + practical | 6 |
| 9 | B | B1 | **NCERT U1** AI is already in your life | None + Indian examples | **AI Diary**, 20 dated entries | 6 |
| 9 | B | B2 | **NCERT U2** How machines learn | ML4K + TM + Orange | **Train-and-Break log**, 5 attacks with numbers | 10 |
| 9 | B | B3 | **NCERT U3** When AI gets it wrong | A confidence-reporting classifier | **Verification checklist**, scored for misses **and** false alarms | 12 |
| 9 | B | B4 | **NCERT U4** Your data, your rights | The real policy text | **Privacy Policy Dissection**, 10 clauses quoted | 8 |
| 9 | B | B5 | **NCERT U5** Modern AI tools | Tenant + consent, else projected | **Prompt Library**, 15 prompts + what each got wrong | 10 |
| 9 | B | B6 | Build something that works | Student's choice | Working artefact + named real user | 12 |
| 9 | B | B7 | Curious Notebook presentation | — | Presented notebook with stated confidence | 4 |
| **10** | A | A1 | **417 U1** Cycle + ethical frameworks | `my-goodness.net` | Ethics review of one named real system | 6 |
| 10 | A | A2 | **417 U2** Advanced modelling (11 marks) | **Orange** + playground | Complete Orange workflow, model choice justified | 11 |
| 10 | A | A3 | **417 U3 Evaluating models** (10 marks) | Paper, then Orange | **Hand-built confusion matrix + all 4 metrics + metric argument** | 13 |
| 10 | A | A4 | **417 U4** Statistical data (practical) | Thonny + NumPy | NumPy stats, line, scatter, CSV programs | 10 |
| 10 | A | A5 | **417 U5** Computer vision | `setosa.io` + Thonny | Four-kernel experiment sheet + 2 image programs | 12 |
| 10 | A | A6 | **417 U6** NLP | **Orange** + CBSE's chatbots | Sentiment analysis + bag-of-words explained | 10 |
| 10 | A | A7 | **417 Part C** Project, portfolio, mock | As needed | Full Part C package + marked mock | 12 |
| 10 | B | B1 | Evaluating a model you did not build | Orange | Written evaluation naming the right metric | 10 |
| 10 | B | B2 | Data that is actually theirs | Sheets + Orange | 150+ self-collected records + who's missing | 10 |
| 10 | B | B3 | Build for one real user | Student's choice | Artefact + real user feedback + one change made | 20 |
| 10 | B | B4 | Verification at a harder level | Perplexity + NotebookLM | Five-claim dossier, each tagged by checkability | 10 |
| 10 | B | B5 | Careers, portfolio, what comes next | — | 5-artefact portfolio + Class 11 plan | 8 |
| 10 | B | B6 | Capstone presentation | — | Outside-audience presentation with stated limits | 6 |

---

## 8. The six-year arc, in one paragraph each

**Grade 5** — a machine learns from examples, and you have personally taught one. No accounts, no code, no chatbots. The year's point is that "AI" stops being a word on television and becomes a thing in the room that you trained and that gets things wrong.

**Grade 6** — the vocabulary CBSE introduces gets attached to things the student built. Supervised, unsupervised and reinforcement stop being a list to recite. And bias arrives a full grade before CBSE teaches it, because CBSE promised it at Grade 6 and did not deliver it.

**Grade 7** — the spine moves to Machine Learning for Kids and Orange, and the three task types become visible rather than defined. CBSE's genuinely strong bias chapter gets made experiential: the student audits their own model and names which of the five bias types it has.

**Grade 8** — CBSE's own three Teachable Machine activities, run as measured experiments with numbers written down instead of demonstrations. Then the two units that matter most commercially: the first look inside a network, and the first Python written offline — which together close the cliff CBSE leaves before Class 9, and start the 417 practical file a year early.

**Grade 9** — the year splits. The 417 students get their syllabus delivered against its own marks, with the dead tools substituted and Tableau Public swapped out for DPDP reasons. Everyone else gets NCERT's module turned from 20 hours of reading into a year of building, with verification taught properly — both error directions scored, on classifiers that report confidence rather than chatbots that do not.

**Grade 10** — for 417 students, the board year, planned around where the marks actually are: modelling and evaluation are 21 of the 40 theory marks, and the confusion matrix built by hand is the single most transferable thing in the subject. For everyone else, a capstone: collect your own data, build for one real user who is not your teacher, evaluate a model you did not build, and say out loud what your work cannot do.

---

## 9. What this file still needs

Listed properly in `08-gaps-and-questions.md`; the four that would change content rather than confidence:

1. **The NCERT module PDF.** Track B's spine is currently built on secondary descriptions. The hour split, the activity instructions and the assessment wording need to come from the PDF before a trainer runs it.
2. **Acad-70/2026 itself**, and the 417 Class IX 2026-27 curriculum, to confirm §0.1 from primary sources.
3. **What Class 9 becomes in 2027-28** — the year of the first target contract. If CT&AI becomes a compulsory, examined Class 9 subject, Track B stops being the optional track and becomes the main one, and the whole Grade 9 design inverts.
4. **Telugu and Urdu versions** of every student-facing artefact listed above. All twelve CBSE handbooks and the NCERT module are English-only. In Siddipet that is not a nicety.

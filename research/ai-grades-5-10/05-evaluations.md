# 05 — Evaluations: how we assess students, and how we measure whether the programme works

**v1 · 2026-11-21 · branch `research/ai-5-to-10-v1`**

Two different things live in this file and they must not be confused:

1. **Student assessment** — what each student is graded on, grade by grade, including 417 exam preparation for the students on that track.
2. **Programme measurement** — the two instruments that tell the school, and us, whether any of this is working. This is the part no competitor in Telangana is doing, and over three years it is the only thing that will let us say something true about our own effect.

The evidence behind the design choices here is in `04-ai-for-learning.md` §2 and §3. This file is the instrument.

---

## 1. The two programme instruments

### 1.1 Instrument A — the closed-device termly baseline

**What it is.** A paper test, 40 minutes, no device in the room, administered at the start of term 1 and again at the end of each term. Same difficulty, different items. Grade-specific.

**Why it is the only test that counts.** Performance *with* a tool and learning *without* it move in opposite directions. In the same 26,811 students, homework scores rose 18% while exam scores fell 20%. **Any assessment a student can reach a chatbot during measures nothing about learning.** Rule 1 in `04` §3.

**What it contains**, per grade:

| Section | Marks | What it tests |
|---|---|---|
| Recall | 10 | The year's vocabulary, used correctly in a sentence rather than defined |
| Reading data | 10 | A chart or table the student has not seen, with questions about what it does and does not show |
| Applying a concept | 10 | A described situation; which AI task is it, what data would you need, what could go wrong |
| **Error finding** | 10 | A worked solution or an AI output with planted faults — see Instrument B |

**What is reported.** The trend across terms, per grade, per student. Not a comparison to any national average, because none exists for this content.

### 1.2 Instrument B — the planted-error task, scored as two numbers

**This is the instrument that matters most, and the one most easily got wrong.**

**What it is.** The student is given ten items. Some contain a planted error, some are entirely correct. The student marks each as *sound* or *faulty*, and for every item they call faulty they must **name the specific fault**. Naming is required: "it feels wrong" scores zero.

**The scoring, and why it has two numbers.**

|  | Student says FAULTY | Student says SOUND |
|---|---|---|
| **Item is faulty** | Hit — correct, and only if the fault is named correctly | **Miss** |
| **Item is sound** | **False alarm** | Correct rejection |

**Miss rate** and **false-alarm rate** are reported **separately, never averaged, never combined into one "AI literacy score".**

**Why this is non-negotiable.** The only randomised brief-intervention study near school age found no reduction in over-reliance and a **significant increase in rejecting correct output — 36.8% versus 19.1%, d = 0.78.** A student who has learned only "AI lies" has not learned to verify; they have learned to distrust, and the first thing they will reject is a right answer. A single combined score hides exactly that failure. **A student whose miss rate falls while their false-alarm rate rises has got worse, and we must be able to see it.**

**Item mix.** Always at least **four of the ten items must be entirely sound.** If students learn that most items are faulty, the task measures their guess about our test design rather than their judgement.

**Which tools it runs on.** Classifiers that emit a confidence number — Machine Learning for Kids, Orange. **Not chatbots.** A chatbot emits no number, so "confident" collapses into prose style and there is nothing to calibrate against. Showing a confidence number also *increases* reliance without improving accuracy, so what we teach is the **gap** between confidence and correctness, not the number itself. Rule 8 in `04` §3.

### 1.3 What a termly report to the school looks like

One page per grade. Six rows, no commentary needed:

| Line | Grade 8, Term 1 example |
|---|---|
| Closed-device baseline, term start → term end | 41% → 52% |
| Planted-error **miss rate** | 60% → 35% |
| Planted-error **false-alarm rate** | 10% → 15% |
| Artefacts completed / expected | 7 / 8 |
| Students who can explain their artefact device-closed | 24 / 31 |
| **What we did not achieve this term** | Unit 7 ran three sessions short; the Python files are incomplete for 9 students |

That last row wins renewals. A vendor who reports a shortfall in term one is believed in term three.

---

## 2. Evaluation concepts, mapped grade by grade

This is the spine of the whole programme, and it has a convenient property: **it converges exactly on what CBSE assesses.** 417 Class IX names True Positive, False Positive, True Negative and False Negative as the new terms in its Evaluation session. 417 Class X makes evaluation **10 of the 40 Part B marks** and requires the confusion matrix built from scratch. So teaching careful evaluation from Grade 5 is simultaneously our pedagogical differentiator and six years of exam preparation.

| Grade | Concept introduced | In the student's words | Instrument | CBSE map |
|---|---|---|---|---|
| **5** | A machine can be wrong, and the mistake has a cause | "It got it wrong because it had never seen one like that" | Machine-mistakes log, 10 entries with a guessed cause | **I** |
| **6** | Accuracy as a count, and **per-class** accuracy | "It got 7 out of 10 — but 5 out of 5 on cats and 2 out of 5 on dogs" | Before/after per-class accuracy table (G6 U6) | **I** — CBSE does not teach bias at Grade 6 despite promising it |
| **7** | **Train versus test**, and the 60/20/20 split | "It looks better on its homework than on a real test" | Seen vs unseen accuracy table with the gap explained (G7 U3) | **E** — CBSE gives the numbers; we make the consequence measurable |
| **7** | Precision versus accuracy versus validity | "Precise and wrong is possible" | Data-quality report naming 5 real problems (G7 U6) | **R** — CBSE's own Grade 7 terms |
| **8** | **False positive and false negative, by name**; the two error directions | "Missing a fake and calling a real thing fake are different mistakes" | Misinformation-hunt log (G8 U8) + per-voice accuracy (G8 U3) | **I** — **this is the bridge CBSE does not build** |
| **9** | **TP / FP / TN / FN**; misses vs false alarms; confidence vs correctness | "It was 94% sure and it was wrong" | Verification checklist scored both directions (Track B B3); 417 U1 Evaluation session (Track A) | **R** — 417 Class IX names all four terms |
| **10** | **Confusion matrix from scratch**; accuracy, precision, recall, F1; **choosing the metric** | "For this problem, recall matters more than accuracy, and here is why" | Hand-built confusion matrix + metric argument (Track A A3) | **R** — 417 Class X Unit 3, **10 marks** |

**The Grade 8 row is the one to defend in a pitch.** CBSE introduces the four confusion-matrix terms at Class 9 with no preparation, and makes them worth 10 marks at Class 10. A student who first met false positives in Grade 8 — in a misinformation hunt about their own feed, not in a definition — walks into that unit already holding the idea.

---

## 3. Student assessment per grade

### 3.1 Weighting

Identical shape across Grades 5-8, so a school sees one scheme rather than four:

| Component | Weight | Notes |
|---|---|---|
| Artefacts (8 per year, one per unit) | **50%** | The artefact itself is the evidence. No artefact, no marks |
| Two term projects | **25%** | Graded on the universal rubric, §5 |
| Closed-device baselines | **15%** | Progress, not absolute score, at Grades 5-6; absolute from Grade 7 |
| Explain-back, device closed | **10%** | Rule 10. Also 417 viva rehearsal from Grade 5 onwards |

Grades 9-10 Track A follow **CBSE's weighting, not ours**, because the board exam decides. Grades 9-10 Track B use the shape above, with the capstone replacing the two term projects.

### 3.2 The artefact list as an assessment ledger

Every artefact in `01-ai-syllabus-by-grade.md` §7 is a graded item. The useful property is that **they accumulate into a portfolio**, which is exactly what 417 Part D requires — a minimum of five activities at Class IX, continued into Class X. A student who has been with us since Grade 5 arrives at the Class IX portfolio requirement with thirty-two artefacts already filed and four years of logged model errors to write about.

Portfolio-eligible artefacts, by grade, flagged for the 417 students:

| Grade | Strongest portfolio candidates |
|---|---|
| 7 | The ML4K image classifier with its documented train/test split; the bias audit of their own text classifier |
| 8 | The waste classifier with per-item confusion analysis; the two-round bias experiment with per-class accuracy; the eight Python files |
| 9 | The practical file (15+ programs); the SDG project; the AI Diary or Train-and-Break log for Track B students |
| 10 | The hand-built confusion matrix with the metric argument; the four-kernel experiment sheet; the sentiment analysis |

---

## 4. 417 exam preparation — and what the repo actually has

**An honest inventory first, because this is where I would otherwise over-promise.** `ai/cbse/sqp-marking-schemes/` holds 15 files, but only **three** are 417 Class X:

| File | What it is | Usable? |
|---|---|---|
| `417_AI_SQP_ClassX_2022-23.pdf` | Full sample question paper **with blueprint** | **Yes, with a large caveat — see below** |
| `417_AI_MS_ClassX_2023-24.pdf` | Marking scheme | Yes, for marking conventions |
| `417_AI_MS_T1_ClassX_2021-22.pdf` | Term-1 marking scheme from the two-term COVID pattern | Only for question style; the two-term pattern is gone |

The remaining files are code 843 (Classes 11-12), 844 (Data Science) and 419 — **out of scope now that Grades 11-12 are out.** Four are HTML index pages, not papers.

**The caveat, and it is a real one.** The only full SQP in the repo is from **2022-23**. Its Part B units are *Introduction to AI, AI Project Cycle, Natural Language Processing, Evaluation.* The **2026-27** Class X units are *Revisiting AI Project Cycle and Ethical Frameworks, Advanced Concepts of Modeling in AI, Evaluating Models, Statistical Data, Computer Vision, Natural Language Processing, Advance Python.* **The syllabus has been restructured since this paper was set.** Use it for the paper's *shape*, never for its content coverage. Getting the current SQP is a blocking item in `08-gaps-and-questions.md`.

**What the 2022-23 blueprint does tell us, and it is still valid structure** (read directly from the PDF):

- Theory paper: **2 hours, 50 marks.** Part A Employability 10 marks, Part B Subject Specific 40 marks.
- **21 questions set, 15 to be answered.** Section A objective (24 marks), Section B subjective (26 marks). **No negative marking.**
- Part A: 6 one-mark questions set, any 4 answered (4 marks); 5 two-mark questions set, any 3 answered (6 marks).
- Part B: 24 one-mark questions set, **20 answered** (20 marks); 6 two-mark set, any 4 answered (8 marks); 5 four-mark set, any 3 answered (12 marks).

**What follows for teaching, and it is not obvious.** Twenty of the forty Part B marks are one-mark objective questions, and the student chooses which to answer. **The highest-yield revision activity is not essay practice — it is breadth of precise vocabulary, because a student can discard the four one-markers they do not know.** Conversely the four-mark questions are only 12 marks and the student answers any 3 of 5, so deep preparation on two or three units carries the long-answer section. Plan A7 in `01` around that arithmetic.

**Where the marks actually are in 2026-27**, from the syllabus PDF rather than the old SQP:

| Unit | Marks | Share of Part B |
|---|---|---|
| 2 — Advanced Concepts of Modeling | **11** | 27.5% |
| 3 — Evaluating Models | **10** | 25% |
| 6 — Natural Language Processing | 8 | 20% |
| 1 — Revisiting the Cycle + Ethics | 7 | 17.5% |
| 5 — Computer Vision | 4 | 10% |
| 4 — Statistical Data | — | practical only, 28 hrs |
| 7 — Advance Python | — | practical only, 10 hrs |

**Units 2 and 3 are 21 of 40 marks — more than half the theory paper.** Computer Vision is 30 practical hours for 4 theory marks. A trainer who allocates time by chapter length will mis-plan the year badly; `01` Grade 10 Track A allocates by marks.

### 4.1 The practical half, which is where the marks are easiest

Part C is **50 of the 100 marks** at Class X and it is almost entirely within our control:

| Component | Marks | How we secure it |
|---|---|---|
| Practical File, min 15 programs | 15 | **Started in Grade 8 Unit 7.** A student who arrives in Class 9 with 8 working files needs 7 more across two years |
| Practical Examination (Units 4, 5, 6, 7) | 15 | Orange and Thonny, rehearsed termly, not revised in March |
| Viva | 5 | Explain-back from Grade 5 onwards is six years of viva rehearsal |
| Project / Field Visit / Portfolio | 10 | The accumulated artefact portfolio, §3.2 |
| Project Viva | 5 | As above |

**This is the commercial argument in one line: Part C is half the marks, it is coursework rather than exam, and it is the half a school's existing computer teacher has least time to supervise.**

---

## 5. The universal rubric

CBSE ships no rubrics anywhere — not in the framework, not in any of the twelve Grade 3-8 handbooks, and the launch webinar marks "AI project list with rubrics" as *coming soon*. One rubric, applied to every project and every artefact at every grade, so that students, trainers and parents all learn to read the same four columns.

| | **1 — Starting** | **2 — Developing** | **3 — Proficient** | **4 — Strong** |
|---|---|---|---|---|
| **It works** | Does not run or produce output | Runs, but output is wrong or unexplained | Runs and produces correct output on the cases tried | Runs, and the student has tried the cases designed to break it |
| **Evidence** | No numbers | A number, unexplained | Accuracy measured on items the model did not train on | Measured **per class**, with the weakest class named |
| **Honesty about limits** | Claims it works | Mentions a limitation vaguely | Names a specific thing it cannot do | Names it, and says what data would fix it |
| **Explains it** | Cannot explain device-closed | Explains with notes in hand | Explains device-closed | Explains device-closed and answers an unexpected question |

**The third row is the one that matters and the one that is unusual.** We grade students up for saying what their work cannot do. That is the habit the whole programme exists to build, and it is the habit `04` §6 promises parents.

**Weighting:** all four rows equal. A beautiful project that the student cannot explain scores 3 out of 16 on two rows and that is correct.

---

## 6. What we do not assess, and say so

| Not assessed | Why |
|---|---|
| Satisfaction or engagement | Students consistently feel they learn more with AI and consistently learn less. Not evidence. `04` §2.3 |
| Any score produced with AI reachable | Rule 1 |
| Speed of completion | A student who finishes in half the time reinvests the saved time (Rule 9). Speed is not a result |
| Confidence expressed as certainty | Being honestly unsure is never penalised. Being confidently wrong is |
| Anything produced by an AI detector | Measured 61.3% false-positive rate against second-language English writers — which describes most of our students. **We also do not recommend detectors to partner schools.** See `06-story-bank.md` |

---

## 7. Gaps in this file

Carried into `08-gaps-and-questions.md`:

1. **The current 417 Class X SQP and marking scheme.** The repo's newest full paper is four syllabus revisions old. Blocking for Grade 10 Track A.
2. **No published rubric scores a student's calibration.** §5 row 3 and Instrument B are ours; nobody else's instrument measures this, which is the opportunity and also means there is no external validation.
3. **The planted-error item banks do not exist yet** — ten items per grade per term, six grades, two terms. That is 120 items to author, and `04` §3 Rule 4 says generic items will not work: they have to be authored against the specific mistakes students actually make. This is the single largest unbuilt piece of the assessment pack.
4. **No Indian baseline for any of this.** The first cohort is the baseline. Say that to schools rather than inventing a benchmark.
5. **Telugu and Urdu versions** of Instrument A and the parent report. Non-optional for Siddipet.

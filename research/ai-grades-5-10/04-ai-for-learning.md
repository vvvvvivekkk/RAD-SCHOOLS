# 04 — AI for learning: how students use AI to study, and what we promise about it

**v1 · 2026-11-21 · branch `research/ai-5-to-10-v1`**

This file is about a different product from `01-ai-syllabus-by-grade.md`. That one teaches AI as a subject. This one is about students using AI **as a study aid for their other subjects** — maths, science, social science, languages — which is what parents are actually asking about when they ask about AI, and which is where the reputational risk sits.

It imports the evidence base from the project's `ai-tools-capability-research.md` and adds what that document did not have: per-grade study habits, and a parent-facing page.

---

## 1. The one sentence this file exists to protect

**We do not claim AI makes children learn faster, because the evidence does not support that claim, and a school that buys it will eventually test it.**

What we claim instead: *the volume of what your child produces will go up immediately; what they can do with the device closed is what we measure, and that moves slowly.*

This is a commercial decision as much as an honest one. Every competitor in Hyderabad will promise acceleration. The first school that runs a closed-device test and finds nothing will stop paying them. We would rather be the vendor whose numbers survive that test.

---

## 2. What the evidence actually shows

### 2.1 The headline numbers

| Claim | Honest number | Source grade |
|---|---|---|
| "AI makes learning 10x faster" | **Not available.** Random-effects grand mean across 14 generative-AI learning experiments: **0.19 SD, 95% CI [0.08, 0.29]** ≈ **1.1-1.2x** | Pooled, secondary |
| For scale — median effect across 1,942 effect sizes from 747 education RCTs | **0.10 SD** (Kraft 2020) | Peer-reviewed |
| For scale — structured **human** tutoring | **≈ 0.29 SD** (Nickow, Oreopoulos & Quan) | Peer-reviewed |
| Volume of work produced | **Genuinely multiplies — the only thing that does.** +48% to +127% on assisted practice | Peer-reviewed |
| Retention once the tool is removed | **Flat to negative** | Peer-reviewed + observational |

**A retraction to carry, because it is the number competitors will quote.** The widely cited ChatGPT-and-learning meta-analysis reporting **g = 0.867 was retracted on 22 April 2026** (*Humanities and Social Sciences Communications*, retraction note doi:10.1057/s41599-026-07310-z). Critics identified an inconsistent study count, inappropriate weighting and overreported effects, and read the paper's own forest plot as nearer 0.5. It had been cited over 500 times before retraction. **Do not cite it. Do recognise it when a competitor's deck quotes it, because that is a free credibility win in a principal's office.**

### 2.2 The studies that actually answer the question

Only studies that tested learners **with the tool removed** answer "does this build capability or dependency". Grouped on that basis:

| Study | Grade | n | Design | Direction | Effect |
|---|---|---|---|---|---|
| **Bastani et al. 2025**, PNAS | 9-11, Turkey | 839 | Cluster RCT | **Base harmful**, Tutor null | −0.19 SD / −0.004 SD |
| **Kreijkes et al. 2026**, *Computers & Education* | **Ages 14-15**, England | 405 | Pre-registered RCT | **Note-taking beat LLM-only** | d = 0.44 retention, 0.38 comprehension |
| **Fütterer et al. 2026**, *Ed Psych Review* | **Grades 7-9**, Germany | ~241 at post-test | 3-arm RCT | **Null** | p = .257 |
| **Kazemitabaar et al. 2023**, CHI | **Ages 10-17** | 69 | RCT | **Split** | +1.67 SD with tool; **−0.05 SD without** |
| **Oreopoulos & Low 2026** | **Grades 6-8**, USA | 6,902 student-terms, 2 years | Cluster RCT | Positive, very small | 0.04-0.08 SD/term |
| **Strömberg, Lei & Wu 2026**, CEPR | **Grades 7-12**, China | **26,811** | Observational DiD | **Negative** | Homework **+18%**, exams **−20%** at 6 months |
| **Dai et al. 2025** | Grade 10, China | 349 | 2 RCTs | Null on average | medium achievers **−0.539 d** |
| **LearnLM Team 2026**, Sierra Leone | Grades 7-8 | 1,423 | Cluster RCT | Positive | +0.26 SD — **vendor study, not peer-reviewed** |
| **De Simone et al. 2025**, World Bank | Senior secondary, Nigeria | 759 | RCT | Positive | +0.21-0.24 SD — **43% differential attrition** |

**The pattern that explains the split, and why it matters for Telangana.** Where AI was inserted into a teacher-led supervised session and made to withhold answers, effects are positive but small. Where AI was available during unconstrained self-directed work, effects are negative.

Note honestly which side resembles our market. The two largest **positive** school results come from low-resource contexts with a weak counterfactual classroom (Sierra Leone, Nigeria) and **neither is peer-reviewed**. The two largest **negative** results come from contexts with functioning mathematics instruction — a large Turkish high school and a Chinese county. **A CBSE private school in Hyderabad or Siddipet is closer to the second group.** We should plan as though the negative findings apply to us, because they probably do.

### 2.3 Three findings that change how we sell, not just how we teach

**The best-engineered safeguard in the literature did not improve learning. It removed harm.** Bastani's GPT Tutor arm — four 90-minute sessions, individually locked laptops, a custom GPT-4 application, and teachers authoring the solution, the anticipated mistakes and the hint for each mistake across **57 problems** — produced an exam coefficient of **−0.004 SD**, statistically indistinguishable from doing nothing. The claim available to us is therefore *"we have designed this so that AI does not damage learning."* Not *"AI accelerates learning."*

**The active ingredient is per-problem teacher-authored content, not clever prompting.** Generic pedagogical scaffolds failed three separate randomised tests: a purpose-built scaffolded tutor scored **−0.07 SD**, no better than raw ChatGPT (n=275, peer-reviewed); two pedagogically designed GPTs showed no significant difference from plain ChatGPT in Grades 7-9; and a paragraph of written guidance produced **−0.12 SD, worse than no guidance at all.** **Budget hint-authoring as curriculum labour, not as a software feature.** This is the single biggest cost implication in this file.

**Student satisfaction will run opposite to learning. Tell management before they see the survey.** Bastani's harmed students did not perceive harm. His GPT Tutor students did not improve but believed they had. The 14-15 year-olds in Kreijkes preferred the LLM, rated it more helpful and reported less effort — while learning measurably less than a note-taking condition. This mirrors the pre-AI finding that active-learning students learn more and feel they learned less. **Engagement metrics are not evidence the programme works, and we say so in writing at the point of sale** — because otherwise the first satisfaction survey becomes an argument we lose.

---

## 3. The twelve design rules

Every rule below is traceable to something in §2. These are the rules we actually operate under, and the ones we hand to the school.

| # | Rule | Why |
|---|---|---|
| **1** | **No assessment counts unless the device is closed.** Every graded artefact is produced with no AI reachable. AI-assisted work is reported separately and never as learning evidence | Seven converging studies |
| **2** | **The student produces before the machine does.** No AI touches a task until the student has shown written work and named where they are stuck | Bastani's Tutor rule 2 — the arm that removed harm |
| **3** | **Help arrives on the system's schedule, not on demand.** Hints are released by the trainer or by a rule at pre-set moments. There is no "give me the answer" affordance | Removing on-demand access while keeping scheduled tips reportedly more than doubled gains (30% → 64%). **Least-verified finding in this file — no n, no significance test. Do not put it in a deck** |
| **4** | **Never ship a generic scaffold. Author the hints per problem.** For each problem: the correct solution, the solution path in steps, an opening move for a stuck student, the two or three mistakes students actually make, and the specific correction for each | Three randomised failures of generic scaffolds |
| **5** | **Require a handwritten generation step alongside any AI output.** Notes, a diagram, or a worked re-derivation — on paper, collected | Note-taking recovered d = 0.13-0.14 of the 0.38-0.44 lost to LLM-only use, in 14-15 year-olds |
| **6** | **The assessed artefact is the critique, not the generation.** Students are graded on marking up AI output for errors, with a justification that identifies the actual fault | Holding the evaluator role transferred (d = 0.48 on unaided error detection). Merely approving AI revisions was equivalent to no AI at all (d = −0.015) |
| **7** | **Score misses and false alarms separately, always, and report both to the school** | The only randomised brief-intervention study near school age found no reduction in over-reliance and a **significant increase in rejecting correct output** — 36.8% vs 19.1%, **d = 0.78** |
| **8** | **Teach the confidence-correctness gap on tools that emit numbers, never on a chatbot** | Overconfidence is measured and real. But showing a confidence number *increases* reliance without improving accuracy — so teach the **gap**, not the number. And chatbots emit no number at all, so "confident" collapses into prose style |
| **9** | **Cap the time the tool may be used, and watch the time saved.** A student who finishes in half the time reinvests the saved time in an unaided extension task | Roughly 4 in 5 AI users outsourced homework and lost exam marks. **The 1 in 5 who spent as long as non-users scored the same as non-users.** Copy-pasters scored below control |
| **10** | **Explain-back is mandatory.** Any AI-assisted artefact is explained aloud, laptop closed, before it is credited | Programmers who ask for explanations outperform those who delegate. Also mirrors the 417 viva, so it is exam preparation as well as pedagogy |
| **11** | **Do not use satisfaction or engagement as evidence, and say so in writing to management** | §2.3 |
| **12** | **Protect the first encounter with any skill from AI entirely.** First loop, first equation, first paragraph: no tool in the room | **This is a precaution, not a finding.** No study has tested AI during *initial* acquisition in children — Bastani's students had already been taught the topic |

---

## 4. Per-grade AI study habits

This is the part `ai-tools-capability-research.md` did not have. One habit introduced per year, never retired, each one taught in the AI period and then enforced in the student's other subjects.

The constraint from `01` §0.3 applies throughout: **Grades 5-8 have no student accounts on consumer AI.** So the habits at those grades are built on paper and on no-login tools, and the tool is in the trainer's hands. That is not a limitation to apologise for — it is why the habits survive.

| Grade | Habit | What the student does | How it is enforced | Enforced in |
|---|---|---|---|---|
| **5** | **Say it before you look it up** | Before any answer is looked up anywhere, the student says or writes their own guess first | Trainer asks "what do you think?" and will not proceed without an answer | All subjects |
| **6** | **Show the working, then check** | The student writes their full attempt by hand, then checks it. Checking is a separate, later act | Attempt sheets are collected before any checking happens | Maths, Science |
| **7** | **Two sources or it stays a maybe** | Any claim used in work needs a second independent source, or it is written down as uncertain | Claims in projects carry a source; unsourced ones are marked "maybe" and that is acceptable | Social Science, Science |
| **8** | **Name what it got wrong** | Every AI output the student sees — all trainer-projected at this grade — is logged with the specific error found in it | The misinformation-hunt log (`01` G8 U8) becomes a running habit, not a one-off unit | All subjects |
| **9** | **Produce first, assist second, explain last** | Written attempt → then AI help if permitted → then explain it aloud with the device closed | Rules 2 and 10, applied to homework. **This is the year the student first has supervised access, so this is the year the habit must be unmissable** | All subjects |
| **10** | **State your confidence** | Every claim a student submits carries their own confidence: sure / fairly sure / guessing. Being honestly unsure is never penalised; being confidently wrong is | Confidence column on every submitted artefact | All subjects, and the 417 viva |

**Why confidence comes last and not first.** It is the hardest habit and the one most easily faked. A Grade 5 who writes "guessing" on everything has learned a defensive trick, not calibration. By Grade 10 the student has four years of logged errors to calibrate against, which is what makes the column mean something.

**One counter-intuitive thing to tell trainers.** Epistemic trust in machines appears to *increase* with age, with adults at relatively higher risk of over-trust than children. **Our Grade 10s may be more at risk than our Grade 5s**, not less. Do not relax supervision as grades rise.

---

## 5. What we do not know, stated where a trainer will see it

Four honest gaps, because a trainer who discovers these on their own stops trusting the rest of the document.

1. **There is no usable Indian study of generative AI and school learning.** The one school-level Indian paper located reports no control group, no test statistics and no effect sizes, and cites papers on microplastics and soil management. **Every number in §2 is a hypothesis about our classrooms, not a finding from them.**
2. **Grade 5 is genuinely dark.** Almost nothing is studied below age 13; the 2026 meta-analysis gives primary school about 5% of total weight. Our Grade 5 habit is reasoned, not evidenced.
3. **There is no evidence-based minimum age.** UNESCO's 13 is a policy default inherited from data-protection law, not a developmental finding. The line for a principal: *there is no research establishing a minimum age for AI in learning; anyone who quotes you one is quoting a privacy law.*
4. **Nothing in the literature runs longer than two years**, and the longest observational result is a decline in independence.

**What follows from this, operationally: we run our own measurement.** A termly closed-device paper baseline, plus a planted-error task reported as **two numbers — misses and false alarms** — is cheap, defensible, and something no competitor in Telangana is doing. `05-evaluations.md` specifies it. It is also, over three years, the only way this programme will be able to say anything true about its own effect.

---

## 6. Parent one-pager

Designed to be printed on one side of A4 and sent home at the start of the year, and to be translated into Telugu and Urdu before it is used in Siddipet. Deliberately plain, deliberately short, and deliberately does not promise acceleration.

---

> ### Your child and AI — what we teach, and what we promise
>
> **What we are doing**
>
> Your child's school has asked us to teach artificial intelligence: what it is, how to build simple AI, and — most importantly — how to check whether what it says is true.
>
> **What we promise**
>
> Your child will produce more work, and produce it faster, almost immediately. That part is real and you will see it.
>
> What your child can do **with the device closed** is a different thing, and it changes slowly. That is the thing we measure, and that is the number we will report to you. We would rather tell you a small true number than a large one you cannot check.
>
> **What we do not promise**
>
> We do not promise AI will make your child learn faster. The best research available does not support that, and we are not going to tell you something you will later find out was not true. Careful studies of children your child's age have found that students using AI freely do **better on homework and worse on exams**. Our whole design exists to prevent that.
>
> **What we do about it**
>
> | | |
> |---|---|
> | Tests | Always with no AI available. A test a child can use AI during tells us nothing |
> | Order of work | Your child writes their own attempt **first**, by hand. AI comes after, if at all |
> | Grades 5 to 8 | **Your child has no account on any AI tool.** The teacher runs it on one screen at the front. This is both safer and better for learning |
> | Grades 9 and 10 | Supervised access through the school's own account, only with your written permission. Never your child's personal email |
> | Marking | We often grade your child on **finding the mistake in the AI's answer**, not on the answer |
> | Explaining | Any work done with AI must be explained out loud, device closed, before it counts |
>
> **Something that will surprise you**
>
> Your child will probably tell you AI helps them a lot. Students consistently *feel* they learn more with AI, and consistently learn less. This is well documented. If your child enjoys it, that is good — but it is not how we or you should judge whether it is working. Judge it by what they can do without it.
>
> **Your child's data**
>
> Under the Digital Personal Data Protection Act, anyone under 18 is a child, and children's data gets extra protection — including a ban on tracking and targeted advertising that **your permission cannot override**. That is why Grades 5 to 8 use no accounts at all, and why Grades 9 and 10 use the school's account rather than their own.
>
> **What you can do at home, in one line**
>
> Ask your child to explain their homework to you with the phone face-down. If they can, it worked.

---

## 7. For the school: what we will and will not report

Put this in the contract annexe, not in the brochure.

| We report | We do not report |
|---|---|
| Closed-device termly baseline, per grade, per student | Any score produced with AI reachable, as a learning measure |
| Planted-error task: **misses and false alarms as two separate numbers** | A single "AI literacy score" combining the two |
| Artefacts completed, with the artefact itself attached | Satisfaction or engagement, as evidence of learning |
| Unaided capability trend across terms | Any claim of acceleration against a national average |
| What the programme did not achieve this term | — |

That last row is the one that wins renewals. A vendor who reports a failure in term one is believed in term three.

---

## 8. Cross-references

- Tool-by-tool detail, account requirements and costs: `02-real-ai-tools.md`
- The measurement instrument specified: `05-evaluations.md`
- The verification units that carry these habits: `01-ai-syllabus-by-grade.md` Grade 8 Unit 8, Grade 9 Track B Unit B3, Grade 10 Track B Unit B4
- Stories that make the dependency point concrete for students: `06-story-bank.md`, especially the cheating-detector entry, which doubles as programme policy — **we do not recommend AI detectors to partner schools**, on a measured 61.3% false-positive rate against second-language English writers, which describes most of our students

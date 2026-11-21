# Research: AI syllabus, tools and activities — Grades 5 to 10

Research and design pack for the Telangana private-school AI programme
(Siddipet and Hyderabad first; mostly CBSE).

**Scope:** Grades 5 to 10. **Grades 11-12 are out of scope** — the brief was
rescoped on 21 Nov 2026.

**What this pack is.** Not a research survey. It is what we actually teach:
the AI syllabus for each grade, the real tools, the exact features to show,
the activities and projects, and what each student produces. Written to be
concrete enough that a trainer can plan a term from it.

## Read in this order

1. **`01-ai-syllabus-by-grade.md`** — the spine. Read §0 before anything
   else: it carries a correction to the brief's own premise for Grades 9-10,
   the Two-Account Rule that shapes every tool choice, and why the tool
   spine is not Teachable Machine.
2. **`02-real-ai-tools.md`** — the tool dossiers behind every choice in 01.
3. **`03-activities-and-projects.md`** — the activities in 01, expanded into
   runnable form.
4. **`08-gaps-and-questions.md`** — what this pack does not know, and the
   four decisions it needs from you.

| File | What's in it |
|---|---|
| `00-plan.md` | How this pack was built, what was reused from the repo, and corrections to the brief |
| `01-ai-syllabus-by-grade.md` | **The syllabus.** Grades 5-10, units in term order, each with topics, outcomes, tool, feature shown, activity, artefact, sessions and a CBSE Reinforce/Extend/Introduce map. Ends with a Grade × term × unit × tool × artefact table |
| `02-real-ai-tools.md` | Tool dossiers — student-safe learning tools and the tools people actually use. Account rules, costs, data handling, churn risk, do-not-use list |
| `03-activities-and-projects.md` | 8-12 activities + 2-3 projects per grade, Telangana settings, no-computer fallbacks, competition flags |
| `04-ai-for-learning.md` | Students using AI to study their *other* subjects. The dependency evidence, twelve design rules, per-grade study habits, parent one-pager |
| `05-evaluations.md` | Student assessment per grade, the evaluation-concept ladder to the confusion matrix, 417 exam preparation, and the two programme-measurement instruments |
| `06-story-bank.md` | 31 sourced stories — Telangana and Indian AI in use, Indian harms, international failures for teaching bias, Indian school students who built real AI, and video records |
| `07-ai-careers-for-school-students.md` | What AI work actually is, what is really in Telangana, the Class 10 pathway, grade-by-grade career awareness, and the parent meeting |
| `08-gaps-and-questions.md` | Blockers, unbuilt work, claims not yet safe to use, verification queue, questions for you |

## Conventions

- Every claim carries a label: **FACT / ESTIMATE / ASSUMPTION / OPINION /
  RECOMMENDATION**, or an evidence grade where the file defines one.
- **Primary sources were read directly** where they are in the repo — the 417
  Class IX and Class X syllabus PDFs, the CT&AI Grade 5-8 handbooks, Circular
  Acad-18/2026, the 417 Class X sample paper. Anything secondary-sourced says
  so at the point of use.
- CBSE mapping uses the repo convention from
  `curriculum-mapping/cross-grade-topic-matrix.md`: **R** reinforces · **E**
  extends · **I** introduces.
- **The main outcome is learning without the AI tool.** With-tool performance
  is reported separately and never as learning evidence.
- A page that would not load is logged in `_shared/failed-downloads.md`. A
  summary is never cited in place of a primary source without saying so.
- Any technical word is defined the first time it appears.

## Relationship to the rest of the repo

This branch is rebased onto `curriculum/grade-3-year-v1`, so the primary-source
archive is on the same branch and every pointer below is a plain repo path.
**This folder points to those sources rather than duplicating them.**

| Path | Used for |
|---|---|
| `ai/cbse/code-417-9-10/` | Grades 9-10 Track A — read directly |
| `cbse-ctai-archive/framework/grade-{5..8}/` | Grades 5-8 — student and teacher handbooks, read directly |
| `cbse-ctai-archive/framework/18_Circular_2026.pdf` | The mandate, quoted verbatim in `01` §0.1 |
| `ai/cbse/sqp-marking-schemes/` | 417 exam preparation — **only three of the 15 files are 417 Class X**, see `05` §4 |
| `ai/platforms-and-tools/` | Vendor terms and pages read for `02` |
| `ai/scert-telangana/` | State comparison and competitor context |
| `_shared/failed-downloads.md` | What could not be downloaded, and why |

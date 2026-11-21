# 00 — How this pack was built, what was reused, and corrections to the brief

**Written:** 21 November 2026
**Branch:** `research/ai-5-to-10-v1`, rebased onto `origin/curriculum/grade-3-year-v1`
**Scope:** Grades 5 to 10. Grades 11-12 removed on 21 Nov 2026.
**Status:** 01, 02, 04, 05, 06, 07, 08 drafted. **03 deliberately not started** — it was gated on your review of the Grade 5-10 summary table, per your instruction.

---

## 1. Method, in five lines

1. **Primary sources first, and read rather than recalled.** The 417 Class IX (2025-26) and Class X (2026-27) syllabus PDFs, the CT&AI Grade 5-8 student and teacher handbooks, and Circular Acad-18/2026 were all extracted from the PDFs in this repo and read page by page. Where a claim rests on anything else, it says so at the point of use.
2. **Reuse before downloading.** Roughly 280 primary-source files already sit under `ai/`, plus 353 under `cbse-ctai-archive/`. Those were inventoried and pointed at, not copied. The only new downloads are the vendor pages for `02`.
3. **The syllabus (01) was written by hand, not by an agent**, because the grade-to-grade fit is the whole value and it has to hold together across six years.
4. **Two agents ran in parallel** for the two files that are breadth problems rather than coherence problems: `02` (60 live vendor pages, read and saved) and `06` (31 sourced stories).
5. **Evidence carried forward, not re-gathered.** The dependency and verification evidence in `04` and `05` was already assembled in the project's `ai-tools-capability-research.md` on 20 Nov. `04` imports and extends it with per-grade study habits and a parent page rather than restarting it.

---

## 2. What was reused from the repo rather than redone

This branch is rebased onto `curriculum/grade-3-year-v1`, so every path below is a plain path on this branch.

| Path | Files | Used for | Read directly? |
|---|---|---|---|
| `cbse-ctai-archive/framework/grade-{5..8}/` | 8 — student + teacher handbooks, Grades 5-8, 2026-27 | `01` Grades 5-8 | **Yes** (extraction held in the project doc `cbse-ct-ai-master-extraction.md`) |
| `cbse-ctai-archive/framework/CT-AI_Curriculum_Framework_Classes_3-8_2026-27.pdf` | 1 | `01` §0.5 hour allocations | **Yes** |
| `cbse-ctai-archive/framework/18_Circular_2026.pdf` | 1 | `01` §0.1, quoted verbatim | **Yes** |
| `ai/cbse/code-417-9-10/` | 11 — incl. `417-AI-X_2026-27.pdf`, `417-AI-IX_2025-26.pdf`, Class 9 and Class 10 facilitator handbooks | `01` Grades 9-10 Track A, unit by unit with marks | **Yes** |
| `ai/cbse/sqp-marking-schemes/` | 15 files, but **only 3 are 417 Class X** | `05` §4 | **Yes** — and the limitation is recorded there |
| `ai/scert-telangana/` | 44 — CodeMitra, SCERT Digital Learning books Classes 5-10, MoUs | Competitor and state context | Partly |
| `ai/international/` | 63 — AI4K12, MIT RAISE / Day of AI, Experience AI, UNESCO 2024, Code.org | `02` comparators | Partly |
| `ai/ncert-national/` | 27 — NEP 2020, NCF-SE 2023, AIM/ATL modules | Policy context | Partly |
| `ai/research-papers/`, `ai/assessment-and-rubrics/` | 24 | `04`, `05` | Partly |
| `curriculum-mapping/cross-grade-topic-matrix.md` | 1 | The R/E/I convention this pack follows | **Yes** |
| `_shared/failed-downloads.md` | 1 | Appended to, not replaced | **Yes** |

**Out of scope after the rescope**, left untouched: `ai/cbse/code-843-11-12/`, `ai/cbse/code-844-ds/`, `ai/cbse/code-419-ds/`, `ai/cbse/code-402-it/`.

---

## 3. The two blockers from the original plan — both now resolved

**3.1 — Branching from `main` orphaned the archive.** The original brief said to branch from `main` *and* listed `ai/cbse/code-417-9-10/` as already in the repo. Both could not be true: those paths live only on feature branches. **Resolved:** you chose to rebase onto `curriculum/grade-3-year-v1`. Done, and every pointer in this pack is now a plain path.

**3.2 — A shallow clone would not have contained the archive.** The brief specified `--depth 1`, which would have fetched only the default branch and therefore not `curriculum/grade-3-year-v1`. **Resolved:** a full clone was kept, and push was verified against it.

**3.3 — The `sources/` tree duplicated a convention the repo already has.** The brief specified `sources/manifest.md`, `checksums.txt`, `failed-downloads.md` and six subfolders. The repo already runs exactly this under `_shared/` and `ai/`. Building a second parallel archive would have contradicted the brief's own rule 4. **Resolved:** you agreed to drop it. `sources/` was removed; new vendor pages went into the existing `ai/platforms-and-tools/`, and new download failures were appended to `_shared/failed-downloads.md`.

---

## 4. Corrections to the brief

**4.1 — Grades 9-10 are no longer simply "417". This is the significant one.** The brief said *"Grades 9-10 = Skill Subject 417, unit by unit, with the marks split."* Three circulars in seven months moved it: Acad-18/2026 discontinued Class IX AI, NCERT published a 20-hour CT&AI module for Classes 9-12 on 23 Oct 2026, and **Acad-70/2026 (29 Oct 2026) then superseded Acad-18 for the current Class 9 batch and put AI 417 back on a 22-item skill-subject list.** 417 is therefore one option among 22 rather than the AI track, and most students in a given school will not be on it. `01` §0.1 sets this out with confidence levels; `01` §5 and §6 are built dual-track as a result. **This is the one structural departure from the brief and the one thing in the pack that would need redoing rather than editing if you read the circulars differently.**

**4.2 — Sections 4 and 5a re-asked questions already answered.** The dependency evidence, the twelve design rules, the verification pedagogy and the tool uncertainty ranking were completed on 20 Nov and sit in `ai-tools-capability-research.md`. **Done as recommended:** `04` and `05` import and extend rather than restart, and the budget went to the genuinely new work — the per-grade study habits, the parent page, the evaluation-concept ladder and the two measurement instruments.

**4.3 — One settled fact needed a caveat, and it still does.** The brief gave the DPDP children's-data commencement as "around 13 May 2027". That is a computation from Rule 1(4) against a Gazette date of 13 Nov 2025, corroborated by a reported MeitY statement but **not officially confirmed**, and sources differ by a day. Also, the Fourth Schedule exempts educational *institutions* from the tracking prohibition for educational activities — **that exemption attaches to the school, not to a private vendor**, which is the whole reason for the processor framing and for the Two-Account Rule in `01` §0.3. The caveat is carried, not the flat date.

**4.4 — Several tool facts in the brief's "already verified" list have changed.** `02` read 60 live vendor pages on 21 Nov 2026 and found five status changes. Two of them changed `01` after it was drafted: **Machine Learning for Kids now offers a generative "generating text" project type** (must be switched off in teacher admin — it is out of bounds under the Two-Account Rule), and **Quick Draw is structurally abandoned** (Experiments with Google is archival; its AI collection URL 301-redirects to `labs.google`), so Quick Draw is now a hook only and never carries an artefact. A third is a lab-build blocker: **the brief's Audacity v3.7.1 is superseded by 4.0.2**, and Audacity 4 adds cloud sign-up, audio.com publishing and a paid-effects storefront. **Pin 3.7.x.** See `08` blocker 6.

**4.5 — Grades 11-12.** The original plan flagged that Classes 11-12 in Telangana private schools are dominated by integrated JEE/NEET coaching, making an external vendor's timetable claim a different and harder sale than Grades 5-10. **Moot — you removed 11-12 from scope on 21 Nov.** Recording it because the reasoning will matter if the band is ever reconsidered.

---

## 5. What was actually downloaded

| Category | Result |
|---|---|
| Vendor terms, privacy and pricing pages for `02` | **60 URLs read, HTML saved** to `ai/platforms-and-tools/`, ~40 MB. Every page dated 21 Nov 2026 |
| Story-bank sources for `06` | **Links and descriptions only**, 56 unique sourced links. **No video files**, per the standing rule |
| NCERT CT&AI module for Classes 9-12 | **Failed.** TLS chain not in the sandbox CA bundle. Logged in `_shared/failed-downloads.md`. See `08` §5 |
| CBSE circulars and the current 417 SQP | **Failed** — same `.nic.in` TLS problem, matching 15 prior entries |
| Duplicates of the existing `ai/` archive | **None, by design** |

No file approaches GitHub's 100 MB limit. The repo was ~659 MB before this work.

**One thing that could not be done, and should be known.** Four primary sources this pack would be better for — the NCERT module PDF, Acad-70/2026, the 417 Class IX 2026-27 syllabus and the current 417 Class X SQP — are all on `ncert.nic.in` or `cbseacademic.nic.in`, which fail TLS verification from this sandbox. An attempt to work around that by appending the live certificate chain to a local CA bundle was correctly blocked as TLS tampering and was not retried. **These four need a download from a normal Indian network**, and they are blockers 2 to 5 in `08`.

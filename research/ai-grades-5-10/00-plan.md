# 00 — Research plan, reuse inventory and corrections to the brief

**Written:** 21 November 2026
**Branch:** `research/ai-6-to-12-v1`, cut from `main`
**Status:** scaffold complete. Research not started, awaiting go-ahead.

---

## 1. Research plan — five lines

1. **Reuse before downloading.** 280 primary-source files already sit under `ai/` on a feature branch, covering CBSE 417/843/844/402/419, SQPs and marking schemes, NCERT, SCERT Telangana, international frameworks and platform terms. Inventory them first, write pointer notes, and download only the genuine gaps.
2. **Curriculum ladder (01) from primary PDFs already held** — read the 2026-27 syllabus PDFs unit by unit with marks splits, then set one focus per grade so Grades 6→12 form a ladder rather than a loop.
3. **Tech stack and tools (02, 03) by live vendor terms**, saved to `sources/tools-terms/` with the date read; reachable domains are tested first so nothing is cited from a summary.
4. **Learning, evaluation, stories, careers (04–07)**: carry forward the dependency and verification evidence already gathered in the Project docs, extend it to Grades 11–12, and gather the Indian story bank and career data fresh.
5. **Verdict (08) and gaps (09) written last, by me, not by an agent** — the synthesis and the recommendation are judgement calls and will be reasoned in the open.

---

## 2. What is already in the repo, and will be reused not redone

`main` currently contains only `cbse-ctai-archive/` (353 files, 659 MB).
The `ai/` and `curriculum-mapping/` trees the brief points to are **not on
main** — they live on feature branches. The most complete is
`origin/curriculum/grade-3-year-v1` (688 files).

**Verified present and valid** (spot-checked `%PDF` headers and byte sizes):

| Area | Files | Reuse for |
|---|---|---|
| `ai/cbse/code-417-9-10` | 11 — incl. **417-AI-X_2026-27.pdf**, 417-AI-IX_2025-26, handbooks Class 9 + 10 facilitator | §1 Grades 9–10 |
| `ai/cbse/code-843-11-12` | 9 — incl. **843-AI-XI_2026-27.pdf**, student + teacher handbooks XI and XII | §1 Grades 11–12 |
| `ai/cbse/code-844-ds` | 2 — **844-DATASCIENCE_2026-27.pdf** and 2025-26 | §1 Grades 11–12 |
| `ai/cbse/code-402-it`, `code-419-ds` | 4 | §1 adjacent skill subjects |
| `ai/cbse/sqp-marking-schemes` | 15 — SQPs and marking schemes for 417, 419, 843, 844 | §5b practical marking |
| `ai/cbse/circulars-and-notifications` | 12 | §1 mandate and timeline |
| `ai/cbse/teacher-training-coe` | 10 | §7 CPD |
| `ai/cbse/aiot-manuals`, `ai-integration-manuals` | 8 | §1, §3 |
| `ai/international/*` | 63 — AI4K12, MIT RAISE/Day of AI, Experience AI, UNESCO 2024, Singapore, UAE, China/Shanghai, Code.org, Elements of AI, IBM SkillsBuild, Teachable Machine | §1 comparators, §7 certificates |
| `ai/ncert-national/*` | 27 — NEP 2020, NCF-SE 2023, AIM/ATL modules, DIKSHA/NISHTHA, Class 11–12 draft tracking | §1, §9 |
| `ai/scert-telangana/*` | 44 — CodeMitra, Digital Learning books Classes 5–10, MoUs, press | §1 state comparison, §8 competition |
| `ai/platforms-and-tools/*` | 23 — Ollama, Hugging Face, Jupyter/Colab, PictoBlox, Scratch ext, Streamlit, Dialogflow | §2, §3 |
| `ai/research-papers/*` | 17 — Wing CT, Papert, UNESCO 2021, OECD AI skills, Stanford HAI Index, NITI Aayog | §4, §7 |
| `ai/assessment-and-rubrics/*` | 7 — CSTA standards, PBLWorks rubrics, Common Sense AI literacy | §5 |
| `ai/icse-cisce/*` | 13 | comparator board |
| `_shared/` | manifest.tsv, checksums.txt, download-manifest.md, failed-downloads.md, legal-notes.md, source-url-map.md | the convention to follow |

**Empty folders that look populated:** `ai/international/ml-for-kids` (0 files),
`ai/assessment-and-rubrics/cbse-safal` (0 files).

**Genuine gaps — these are real downloads:**

- **CS 083 (Computer Science, Class 11–12) — absent.** Nothing in the repo.
- **IP 065 (Informatics Practices, Class 11–12) — absent.** Nothing in the repo.
- **843-AI-XII_2026-27** — only the Class XI 2026-27 file is held.
- ML for Kids and SAFAL assessment material.
- Everything in §3 tool dossiers with a 2025–26 terms change, §6 story bank, §7 careers — these are new research, not re-downloads.

**Project docs referenced in the brief** (`ai-tools-stack.md`,
`grade-wise-ai-tools-kit.md`, `ai-tools-capability-research.md`) are **not in
the repo**. They exist in the claude.ai Project attached to this work and will
be carried in by reference. `ai-tools-capability-research.md` already contains
a corrections section that supersedes passages in the other two — that
correction list travels with any reuse.

---

## 3. Two blockers

**3.1 — No push access and no GitHub API.** `add_repo` with push access was
denied by this session's permission classifier. The repository clones fine over
the read proxy, so everything local works, but this session **cannot push the
branch, cannot open the pull request, and cannot read PR #1**. Work will be
committed locally and the branch handed over, unless push access is approved.

**3.2 — Indian government domains are unreachable from this sandbox.** Tested
21 November 2026:

| Domain | Result |
|---|---|
| `cbseacademic.nic.in` | **HTTP 000** — connection fails |
| `ncert.nic.in` | **HTTP 000** — connection fails |
| `openai.com` | HTTP 200, 413 KB |
| `arxiv.org` | HTTP 200 |

This is not new. `_shared/failed-downloads.md` from the earlier phase records
26 failures, of which 14 are `.nic.in` URLs marked "curl fail" and 5 are pages
that returned HTML where a PDF was expected. The existing CBSE PDFs in the
archive were therefore obtained by some route other than a plain fetch from
this environment, and that route is not reproducible here.

**Consequence:** CS 083 and IP 065 — the two genuine Grade 11–12 gaps — are on
exactly the domains that cannot be reached. They will have to be fetched
manually and dropped into `sources/cbse/`, or the brief's Grade 11–12 coverage
is incomplete on its most important new material.

---

## 4. Five things in the brief that are wrong or mis-scoped

**4.1 — Branching from `main` orphans the archive.** The brief says create the
branch from `main` *and* lists `ai/cbse/code-417-9-10/` etc. as "already in the
repo." Both cannot be true: those paths are only on feature branches. Three
options, and the choice is the user's: (a) branch from
`curriculum/grade-3-year-v1` instead, so the archive is present and pointer
notes resolve; (b) keep the branch from `main` and write pointers as
`branch:path` references that a reader must check out separately; (c) merge the
archive to `main` first. **Current state: branched from `main` as instructed,
option (b).** Recommend (a) or (c).

**4.2 — The `sources/` tree duplicates a convention the repo already has.** The
brief specifies `sources/manifest.md`, `checksums.txt`, `failed-downloads.md`
and subfolders `cbse/ ncert/ international/ research-papers/ tools-terms/
careers/`. The repo already runs exactly this under `_shared/` and `ai/`, with
different filenames. Building a second parallel archive contradicts the brief's
own rule 4. **Recommendation:** keep `sources/` for genuinely new downloads
only — tool terms, careers material, story-bank sources — and point to `ai/`
for everything that exists. Scaffolded that way.

**4.3 — Sections 4 and 5a largely re-ask questions already answered.** The
dependency evidence (Bastani, Fan, Kreijkes, Oreopoulos & Low, Strömberg,
Fütterer, Bassner and the rest), the twelve design rules, the verification
pedagogy, the framework comparison and the tool uncertainty-exposure ranking
were all completed on 20 November and are in
`ai-tools-capability-research.md`. Re-running them would burn the budget for
sections 6 and 7, which are genuinely new. **Recommendation:** 04 and 05a
import and extend to Grades 11–12 rather than restart.

**4.4 — Grades 11–12 may not be a sellable band, and the brief treats it as
settled scope.** Section 8 asks whether AI-first is right, but the band
question is sharper than the subject question. In Telangana private schools,
Classes 11–12 are dominated by integrated JEE/NEET coaching, and an external
vendor competing for those timetable hours is a different sale from Grades
6–10 — different buyer, different objection, probably a different price. This
should be tested *before* the Grade 11–12 curriculum work in section 1, not
after it in section 8, or the sequencing wastes effort. **Recommendation:**
move the 11–12 viability question to the front of the plan.

**4.5 — One settled fact needs a re-check, and one is stated too strongly.**
The brief lists the DPDP children's-data commencement as "around 13 May 2027."
That date is a computation from Rule 1(4) against a Gazette publication date of
13 November 2025, corroborated by a reported MeitY statement but **not
officially confirmed**, and sources differ by one day. Also, the Fourth
Schedule exempts educational institutions from the tracking prohibition for
educational activities — but that exemption attaches to the *school*, not to a
private vendor, which is the reason for the processor framing. Worth carrying
the caveat rather than the flat date.

---

## 5. Download estimate

| Category | Files | Est. size | Reachable? |
|---|---|---|---|
| CBSE CS 083 + IP 065 syllabi, 2026-27 | 2–4 | ~2–5 MB | **No** — `.nic.in` blocked |
| 843-AI-XII 2026-27, SAFAL, ML for Kids | 3–6 | ~5–10 MB | Partly |
| Vendor terms + pricing pages (HTML), §3 | 25–35 | ~15–25 MB | Yes |
| Careers: certificates, college pathways, labour data, §7 | 15–25 | ~20–40 MB | Mostly |
| Research papers not already held, §4/§5 | 10–15 | ~30–60 MB | Yes (arXiv reachable) |
| Story-bank sources, §6 — text and links only, no video files | 20–30 | ~10–20 MB | Mostly |
| **Total new downloads** | **~75–115** | **~80–160 MB** | — |

Well inside GitHub's 100 MB per-file limit; no single file is expected over
~15 MB. Note the repo is already **659 MB on `main`**, so total size after this
work lands in the 750–850 MB range — worth watching before the next archive
phase.

Videos: titles, links, descriptions and transcripts only, per the standing
rule. No video files.

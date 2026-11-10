# Sources to verify (matrix v1 — 2026-11-11)

Rows/cells in `cross-grade-topic-matrix.md` that cite these sources are
marked `?` until the source is fetched into the repo in a usable form.

## Not in repo as content (only landing / mirror pages)

| Source | Current state | What we need | Impact on matrix |
|---|---|---|---|
| **SCERT Telangana "Digital Learning" textbooks (Classes 1-10, EM/TM/Urdu)** | `ai/scert-telangana/digital-learning-books/*/teachernews-class-N-index.html` — aggregator **index** pages only, no textbook PDFs | Click the per-class aggregator download links in a browser to pull the EM/TM/Urdu PDFs (Classes 5-10 are the priority — AI/computing content starts there). ~30 PDFs. | **S?** cells in matrix are inference from state press coverage (CodeMitra platform, RPF, Microsoft ADVANTA(I)GE) — not from inside the textbooks. Downgrade S confidence in the final until we have the actual books. |
| **ICSE Robotics & AI Class 9 syllabus (subject 661)** | Only aglasem redirect-shell HTML (5.7 KB) and selfstudys syllabus landing — CISCE direct URL 403 geo-blocks us | Open cisce.org/downloads/syllabus from an India IP and save the 661-RAI Class 9/10 PDF + ISC Class 11/12 syllabus PDFs | **I(SP2025)** cells are from the Specimen Paper 2025 PDF (907-byte file in repo is corrupt — CISCE PDF also geo-blocked). Our ICSE claims rest on second-hand mirrors (aglasem, oswal publishers, business-standard, careers360). |
| **AI Nestham curriculum** | No URL in repo; mentioned in `claude/market-research-nov-2026.md` and `claude/master-resource-pack.md` §12 index only | Fetch `https://www.ainestham.com/` + any linked PDF curriculum for Classes 1-10 | **N?** cells in matrix are from the vendor's public positioning ("AI journey from Class 1", "aligned with CBSE + ICSE + State Board") — **confidence L** throughout until we see their chapter list. |
| **STEMpedia / PictoBlox grade-wise curriculum** | Only `ai/platforms-and-tools/pictoblox/pictoblox-ai-docs-home.html` (docs home) and ML Environment docs — not a grade map | Fetch STEMpedia's Codeavour curriculum + PictoBlox course catalogue with grade bands | **P** cells are from the published positioning (Junior Blocks 4-7, Scratch blocks 8+, Python Notebook 12+) and the AI Extension catalogue (Face Detection, Speech Recognition, Teachable Machine integration). **Confidence M** on structure, **L** on exact grade placement of each AI extension. |

## Not fetched (deferred)

| Source | Why deferred |
|---|---|
| AI4K12 gradeband progression PDFs (one per Big Idea × band) | `ai4k12.org` JavaScript hashcash challenge blocks curl — needs a browser; the published Big Idea 1-5 charts would give us an international benchmark column we don't currently have in the matrix. |
| UNESCO 2024 AI Competency Framework for Students full PDF | All public mirrors 403/404 from our proxy; HTML records in repo suffice for narrative but not for cell-level age-band citations. |
| NCF-SE 2023 PDF | Canonical URL dead; the Framework's Preparatory Stage and Middle Stage sections would clarify what CBSE's framework writers were pointing at for Grades 3-8 CT integration. |

## How this affects the matrix

- Cells marked `S?` or `I?` or `N?` or `P?` are inferences, not citations.
- No matrix claim is made that depends solely on a `?` source.
- Every CBSE cell (C) cites a local file + page number we have in-hand.

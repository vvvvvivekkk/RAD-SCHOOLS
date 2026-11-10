# CBSE CT+AI Framework (Classes 3–8, 2026–27)

Mirror of everything linked from the official CBSE landing page:
<https://cbseacademic.nic.in/ct-ai.html>

Fetched on 2026-11-11 via the agent proxy using the Mozilla CA bundle
(`curl -sSL --cacert /tmp/mozilla-with-ye1.pem`).

The structure below mirrors how the resources appear on the live page so
everything a visitor to that page could download lives in one place.

## Folder layout

```
framework/
├── README.md                               (this file)
├── ct-ai-landing-page.html                 (saved copy of the live page)
├── 18_Circular_2026.pdf                    (Acad-18/2026 — launch circular)
├── CT-AI_Curriculum_Framework_Classes_3-8_2026-27.pdf
├── CTAI_WebinarPPT_2026-27.pdf             (webinar deck, 45 slides)
├── grade-3/
│   ├── CTAI_Pri3SH_2026-27.pdf             (Student Handbook)
│   └── CTAI_Pri3TH_2026-27.pdf             (Teacher Handbook)
├── grade-4/
│   ├── CTAI_Pri4SH_2026-27.pdf
│   └── CTAI_Pri4TH_2026-27.pdf
├── grade-5/
│   ├── CTAI_Pri5SH_2026-27.pdf
│   └── CTAI_Pri5TH_2026-27.pdf
├── grade-6/
│   ├── CTAI_Pri6SH_2026-27.pdf
│   └── CTAI_Pri6TH_2026-27.pdf
├── grade-7/
│   ├── CTAI_Pri7SH_2026-27.pdf
│   └── CTAI_Pri7TH_2026-27.pdf
└── grade-8/
    ├── CTAI_Pri8SH_2026-27.pdf
    └── CTAI_Pri8TH_2026-27.pdf
```

## File ↔ CBSE source URL

| Local path | Source URL on cbseacademic.nic.in |
|---|---|
| `18_Circular_2026.pdf` | `/web_material/Circulars/2026/18_Circular_2026.pdf` |
| `CT-AI_Curriculum_Framework_Classes_3-8_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri_2026-27.pdf` |
| `CTAI_WebinarPPT_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_WebinarPPT_2026-27.pdf` |
| `grade-3/CTAI_Pri3SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri3SH_2026-27.pdf` |
| `grade-3/CTAI_Pri3TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri3TH_2026-27.pdf` |
| `grade-4/CTAI_Pri4SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri4SH_2026-27.pdf` |
| `grade-4/CTAI_Pri4TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri4TH_2026-27.pdf` |
| `grade-5/CTAI_Pri5SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri5SH_2026-27.pdf` |
| `grade-5/CTAI_Pri5TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri5TH_2026-27.pdf` |
| `grade-6/CTAI_Pri6SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri6SH_2026-27.pdf` |
| `grade-6/CTAI_Pri6TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri6TH_2026-27.pdf` |
| `grade-7/CTAI_Pri7SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri7SH_2026-27.pdf` |
| `grade-7/CTAI_Pri7TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri7TH_2026-27.pdf` |
| `grade-8/CTAI_Pri8SH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri8SH_2026-27.pdf` |
| `grade-8/CTAI_Pri8TH_2026-27.pdf` | `/web_material/CurriculumMain27/CTAI_Pri8TH_2026-27.pdf` |

## Note on duplication

The same PDFs also live in the original organized trees elsewhere in the
archive — `handbooks/grade-N/{student,teacher}/`, `webinar/`,
`circulars/` — kept there for the manifest and checksum structure
established in Phase 1. The copies under `framework/` are byte-identical
mirrors (verified by SHA-256) so downstream tools can read everything
from one grade-wise location.

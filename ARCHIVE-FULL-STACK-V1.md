# Full-stack archive v1 — AI + Robotics/IoT + Drone (RAD-SCHOOLS)

**Branch:** `archive/full-stack-v1`
**Base:** Phase-1 CBSE CT+AI archive in `cbse-ctai-archive/` (commit 4c66f1d on main)
**Fetched:** 2026-11-11 (Asia/Taipei)
**Source:** `claude/master-resource-pack.md` — ~260 URLs across 12 sections + 20 gap items

## Verticals

| Vertical | Files | Size | Purpose |
|---|---:|---:|---|
| `ai/` | ~290 | ~396 MB | AI curriculum sources: CBSE (Codes 417, 843, 844, 419, 402, CT+AI 3-8 via pointer), SCERT Telangana, ICSE/CISCE, NCERT (NCF, NEP, DIKSHA, NISHTHA, SOAR, AIM), International (AI4K12, UNESCO, MIT, Code.org, IBM, UAE, SG, UK, CN), Platforms (PictoBlox, Scratch, Jupyter, Colab, HF, Ollama, App Inventor, Dialogflow, Streamlit), Research, Assessment |
| `robotics-iot/` | ~22 | ~5 MB | Arduino, RPF, LEGO, VEX, STEMROBO, Avishkaar, Tinkerly, ROS/JdeRobot, CMU curricula, micro:bit |
| `drone/` | ~22 | ~3 MB | DGCA Drone Rules 2021, DJI STEAM, DroneBlocks, Marut (Siddipet), India Drone Academy, TG State Aviation Academy, PJTSAU, DroneDeploy, Pix4D |

## Not duplicated
The CT+AI framework + 12 handbooks + webinar + circulars sit in
`cbse-ctai-archive/framework/` from Phase 1 and are pointer-noted in
`ai/cbse/ct-ai-3-8/POINTER.md` instead of being re-downloaded.

## _shared/
- `download-manifest.md` — URL | local path | fetched-at | size | duration | SHA-256 | status (one row per file)
- `checksums.txt` — SHA-256 of every file in `ai/`, `robotics-iot/`, `drone/`
- `failed-downloads.md` — things that 404ed, were country-blocked, or needed a logged-in session
- `legal-notes.md` — fair-use statement + takedown path
- `source-url-map.md` — vertical-level reference

## Known failures (logged in `_shared/failed-downloads.md`)
- NCF-SE 2023 PDF — `dsel.education.gov.in` URL in the pack is a 404; Salwan mirror is 403 to this proxy; access path in `ai/ncert-national/ncf-se-2023/README.md`
- UNESCO AI Competency Framework for Students 2024 PDF — all public mirrors 403/404 to this proxy; HTML records saved
- ICSE Robotics & AI Specimen Paper 2025 — CISCE geo-blocks the proxy IP (shows 403 "country not allowed")
- AI4K12 progression charts HTML — behind JavaScript hashcash challenge
- DigitalSky DGCA portal — expired TLS cert on the government server

# Cross-grade topic matrix — K1 → G12

**v1 · 2026-11-11 · branch `curriculum/mapping-matrix-v1`**
Regenerable in ~30 min when CBSE revises in 2027: re-extract `/tmp/syl/*.txt` from the handbook PDFs + senior syllabus PDFs; row list stays stable; only cell contents move.

## Repo access confirmed

Opened directly in this session: `cbse-ctai-archive/framework/grade-{3..8}/` (12 handbooks + Grade 3-8 master framework), `ai/cbse/code-417-9-10/`, `ai/cbse/code-843-11-12/`, `ai/cbse/code-844-ds/`, `ai/cbse/code-419-ds/`, `ai/cbse/code-402-it/`, `ai/cbse/coding-handbooks/`, `ai/icse-cisce/`, `ai/scert-telangana/`, `ai/ncert-national/`, `ai/international/`, `robotics-iot/`, `drone/`. SCERT TG books, ICSE Specimen 661, AI Nestham, STEMpedia grade-wise curriculum are stubs or not-in-repo — see `sources-to-verify.md`.

## Topic families (locked as-is, with one note)

Keep the 10 as given. One **note**, not a proposed edit: "Programming (unplugged → block → Python)" implicitly covers coding curricula; "Hardware / Robotics / IoT" overlaps with Programming at Grade 6-8 via microcontroller programming — handled by cross-referencing topics, not splitting a family.

1. AI Foundations
2. Data Literacy
3. Machine Learning Concepts
4. Computer Vision
5. Natural Language Processing
6. Programming (unplugged → block → Python)
7. Hardware / Robotics / IoT
8. Drones
9. AI Ethics & Society
10. AI Project Lifecycle

## Row count target

**75 rows.** Per family: AI Foundations 8 · Data Literacy 8 · ML Concepts 10 · CV 7 · NLP 7 · Programming 10 · Robotics/IoT 8 · Drones 6 · Ethics 7 · Project Lifecycle 4.

## Cell codes

`—` not taught · `C` CBSE · `I` ICSE/ISC · `S` SCERT TG Digital Learning · `N` AI Nestham · `P` STEMpedia/PictoBlox · stacked cells separated by spaces. Confidence `H/M/L` after `N` and `P`. `?` = source not in repo (see `sources-to-verify.md`).

**File shorthand:**
- CBSE 3-8 SH = `cbse-ctai-archive/framework/grade-N/CTAI_PriNSH_2026-27.pdf`
- 417-IX = `ai/cbse/code-417-9-10/417-AI-IX_2025-26.pdf`
- 417-X = `ai/cbse/code-417-9-10/417-AI-X_2026-27.pdf`
- 843-XI = `ai/cbse/code-843-11-12/843-AI-XI_2026-27.pdf`
- 843-XII = `ai/cbse/code-843-11-12/843-AI-XII_2024-25.pdf`
- 844-XI-XII = `ai/cbse/code-844-ds/844-DATASCIENCE_2026-27.pdf`
- CodingG6-8 = `ai/cbse/coding-handbooks/classV{I,II,III}_Coding_*_Handbook.pdf`
- 402-X = `ai/cbse/code-402-it/402-INFO_TECH_X.pdf`

---

## The matrix

### Family 1 — AI Foundations

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | "Where is AI around me?" naming examples at home (TV remote with voice, UPI autocomplete, Google Maps) | AI Foundations | N?L | N?L | — | — | — | — | — | C(G6 SH p.4 Ch1 Intro to AI) | — | — | — | — | — | — | **G3** | Introduce | CBSE waits till G6; we introduce at G3 with Indian examples — pricing power lives in "my 8-y-o knows what UPI autocomplete is doing" |
| 2 | Distinguishing human vs machine intelligence | AI Foundations | — | — | — | — | — | — | — | C(G6 SH p.4 Ch1 Learning Focus) | — | — | — | — | I(SP2025)? | — | **G5** | Extend | We teach at G5 using same CBSE framing one year earlier; keeps parents convinced age-8 → age-10 is a progression |
| 3 | Types of AI learning (supervised / unsupervised / RL — named, not formalised) | AI Foundations | — | — | — | — | — | — | — | C(G6 SH p.4 Ch1) | C(G7 SH p.4 Ch1 domains) | — | — | — | C(XI U6 ML Algos) | — | **G6** | Reinforce | Match CBSE's grade — but we tie each to an Indian product (Flipkart recos = supervised, Netflix playlists = unsupervised) |
| 4 | AI domains (CV, NLP, Data Science) as a map | AI Foundations | — | — | — | — | — | — | — | — | C(G7 SH p.3 Ch1) | — | — | — | — | — | **G6** | Extend | CBSE puts this at G7; we move it up to G6 so the G6 AI unit has a scaffolding map before the four chapters land |
| 5 | AI in healthcare / education / transport / communication case studies | AI Foundations | — | — | — | — | — | — | — | — | C(G7 SH p.3 Ch2 AI in Industries) | C(G8 SH p.4 Ch2 Applications) | — | — | C(XI U1 AI for Everyone) | — | **G7** | Reinforce | Match grade; add a Telangana-specific case (Marut drone agri in Siddipet, T-Hub AI startups) CBSE doesn't localise |
| 6 | Generative AI (ChatGPT-style) — what it is, where the output comes from | AI Foundations | — | — | — | — | — | — | — | — | — | — | C(IX U4 Intro to Generative AI) | — | — | — | **G7** | Introduce | CBSE waits till G9; we introduce at G7 (kids use it daily by 12 — the ethics vacuum of not teaching it is a product risk) |
| 7 | AI career pathways (what jobs exist) | AI Foundations | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U2 Unlocking Future in AI) | — | **G9** | Extend | CBSE starts at G11; we start at G9 so students pick G11 streams informed, not blind |
| 8 | What is "AI readiness" + NEP/NCF context | AI Foundations | — | — | — | — | C(G3 SH p.5) | C(G4 SH p.5) | C(G5 SH p.5) | C(G6 SH p.4) | C(G7 SH p.4) | C(G8 SH p.5) | C(IX U1) | C(X U1) | C(XI U1) | — | **G6** | Reinforce | We teach this one-period-only at G6; moving it up doesn't help kids and clutters our G3 track |

### Family 2 — Data Literacy

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 9 | Data Handling with pictographs / bar graphs (Math-embedded) | Data Literacy | — | — | — | — | — | C(G4 SH p.49 Ch Data Handling) | C(G5 SH p.56 Ch Data Through Pictures) | C(G6 SH Ch Data Handling and Presentation p.20) | — | — | — | — | — | — | **G4** | Reinforce | Already in CBSE Math; we add a "turn this bar chart into an AI question" scaffold not in handbook |
| 10 | Types of data (numerical / categorical / text / image / audio) | Data Literacy | — | — | — | — | — | — | — | C(G6 SH Ch2 Basic Data Concepts p.60) | — | — | C(IX U2 Data Literacy) | C(X U4 Statistical Data) | C(XI U5 Data Literacy) | — | **G5** | Extend | Move intro one grade earlier using Indian survey examples (census, cricket scores, Zomato ratings) |
| 11 | Collecting, organising, representing data | Data Literacy | — | — | — | — | — | — | — | C(G6 Ch2 p.60) | C(G7 Ch3 Data Visualization p.63) | C(G8 Ch3 Data and Fairness p.60) | C(IX U2) | — | C(XI U5) | C(XII U3 Storytelling) | **G5** | Extend | Introduce "my own class survey" project at G5 before CBSE G6 — gives the G6 chapter an anchor |
| 12 | Data visualization: bar/line/pie/scatter | Data Literacy | — | — | — | — | — | — | — | — | C(G7 Ch3 p.63) | — | — | — | — | C(XII U3 Storytelling) | **G6** | Extend | Earlier than CBSE and with real tool exposure (Google Sheets charts, not drawn-on-paper) |
| 13 | Descriptive statistics (mean/median/mode/range) as "summarising data for AI" | Data Literacy | — | — | — | — | — | — | — | — | — | — | C(IX U3 Math for AI — Stats & Probability) | C(X U4 Statistical Data p.…) | — | — | **G7** | Introduce | CBSE Math teaches mean/median at G7 but doesn't link to AI; we're the first to call this out at G7 |
| 14 | Probability basics for AI (sample space, event, simple chance) | Data Literacy | — | — | — | — | — | — | — | — | — | — | C(IX U3 Math for AI) | — | — | — | **G8** | Introduce | CBSE Math G8 teaches basic probability — we're the first to re-cast it as "how AI makes a guess" |
| 15 | Pandas / NumPy / matplotlib introduction | Data Literacy | — | — | — | — | — | — | — | — | — | — | — | C(X U7 Advance Python) | C(XI U3 Python Programming) | — | **G9** | Extend | CBSE doesn't introduce pandas until G10; we slide pandas into G9 Python unit to shrink the G10 cliff |
| 16 | Data ethics — consent, privacy, bias in datasets | Data Literacy | — | — | — | — | — | — | — | C(G6 Ch4 Ethics p.76 — covers data handling care per p.4) | — | C(G8 Ch3 Data and Fairness p.60) | C(IX U1 Ethics) | — | C(XI U8) | — | **G6** | Reinforce | Match CBSE grade, but first to use Indian cases (Aadhaar-related, DigiLocker data, UIDAI) |

### Family 3 — Machine Learning Concepts

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 17 | Pattern recognition as a human skill (precursor to ML) | ML Concepts | — | — | — | — | C(G3 SH p.6 PATTERN RECOGNITION LO) | C(G4 SH p.…) | C(G5 SH p.…) | C(G6 Ch3 Simple Pattern Recognition p.70) | — | — | — | — | — | — | **G3** | Reinforce | Match CBSE — but bring kolam / rangoli examples CBSE doesn't |
| 18 | Teachable Machine (supervised image classification, no code) | ML Concepts | — | — | — | — | — | — | P(ages 8+)M | P(ages 8+)M | P(ages 8+)M | — | — | — | — | — | **G5** | Introduce | CBSE never names Teachable Machine in handbooks for 3-8; it's the fastest "I trained an AI" moment and we own that story |
| 19 | AI Project Cycle — 5 stages | ML Concepts | — | — | — | — | — | — | — | — | — | C(G8 Ch1 AI Project Lifecycle p.37) | C(IX U1) | C(X U1 Revisiting AI Project Cycle) | — | — | **G7** | Extend | CBSE introduces at G8; we introduce at G7 scaffolded into the Data Visualization project |
| 20 | Model training with labelled data (concept, not math) | ML Concepts | — | — | — | — | — | — | — | — | — | C(G8 Ch1 p.37) | — | C(X U2 Advanced Modeling) | C(XI U6 ML Algos) | — | **G7** | Extend | Keep hands-on (Teachable Machine) at G7; CBSE waits till G8 |
| 21 | Train / test / validation split | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | C(X U2 Advanced Modeling) | C(XI U6) | — | **G9** | Reinforce | Match CBSE — but demonstrate via a spreadsheet, not just a lecture slide |
| 22 | Overfitting / underfitting | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | C(X U3 Evaluating Models) | — | — | **G10** | Reinforce | Match — the CBSE G10 chapter is thin; our value is one notebook that shows both on the same dataset |
| 23 | Confusion matrix / precision / recall / F1 | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | C(X U3 Evaluating Models) | — | — | **G10** | Reinforce | Same — but our worksheet uses an Indian dataset (crop disease, Hindi vs Telugu language detect) |
| 24 | k-NN classifier (first named algorithm) | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | C(X U2 Advanced Modeling — K-NN) | — | — | **G10** | Reinforce | Match CBSE; add a hand-run with 2D points on graph paper before the Python version |
| 25 | Decision tree / linear regression | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U6 ML Algos) | — | **G10** | Extend | Move intro to G10 as a visual concept (play "20 questions" to build a tree) — CBSE doesn't touch till XI |
| 26 | Model lifecycle (train → deploy → monitor → retrain) | ML Concepts | — | — | — | — | — | — | — | — | — | — | — | — | — | C(XII U2 Model Lifecycle) | **G11** | Reinforce | Match CBSE XII — we introduce production-side thinking one year earlier since our students are MS-aspirant |

### Family 4 — Computer Vision

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 27 | "A picture is made of dots (pixels)" — graph-paper pixel art | Computer Vision | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G3** | Introduce | Nobody teaches this at G3; it's our G3 signature-adjacent activity and it sets up G6 image classification |
| 28 | Image classification with Teachable Machine | Computer Vision | — | — | — | — | — | — | — | — | C(G7 SH Ch1 "CV" named p.44) | — | — | — | — | — | **G5** | Introduce | We make this the G5 capstone; CBSE only names CV at G7, not in a training activity |
| 29 | Object detection vs classification (conceptual difference) | Computer Vision | — | — | — | — | — | — | — | — | C(G7 Ch1 p.44) | — | — | — | — | — | **G7** | Extend | CBSE names domain at G7; we make the difference tangible with a drone photo + bounding boxes |
| 30 | Pixel, RGB, resolution — formal | Computer Vision | — | — | — | — | — | — | — | — | — | — | — | C(X U5 Computer Vision) | — | — | **G8** | Extend | Move to G8 to prepare the G10 formal unit — CBSE G10 is the first formal CV coverage |
| 31 | Convolution intuition (filter sliding over image) | Computer Vision | — | — | — | — | — | — | — | — | — | — | — | C(X U5 CV) | — | — | **G10** | Reinforce | Match CBSE; our value is one unplugged grid-shifting activity before the OpenCV code |
| 32 | OpenCV — read, resize, filter image in Python | Computer Vision | — | — | — | — | — | — | — | — | — | — | — | C(X U5 CV) | — | — | **G10** | Reinforce | Match — our notebooks run offline (preloaded images) so classroom with no internet still works |
| 33 | CNN intuition (not math) | Computer Vision | — | — | — | — | — | — | — | — | — | — | — | C(X U5 CV) | — | — | **G10** | Reinforce | Match — we visualise CNN layers with an Indian handwritten-digit example (Hindi/Telugu numerals) |

### Family 5 — Natural Language Processing

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 34 | Caesar cipher (text encoding — pre-NLP) | NLP | — | — | — | — | C(G3 SH p.9 Ch1 What's in a Name?) | — | — | — | — | — | — | — | — | — | **G3** | Reinforce | Match CBSE; bilingual (Telugu/Urdu wheel) is our angle — see Grade 3 reality check |
| 35 | "Computers don't understand words, they understand numbers" — intuition | NLP | — | — | — | — | — | — | — | — | — | — | C(IX U4 Intro to Gen AI) | — | — | — | **G6** | Introduce | CBSE waits till G9; this is the simplest NLP intuition and belongs much earlier |
| 36 | Tokenisation / bag-of-words | NLP | — | — | — | — | — | — | — | — | — | — | — | C(X U6 NLP) | — | — | **G9** | Extend | Move intro to G9 — CBSE waits till G10. Our G9 pre-brief makes the G10 CBSE unit trivial |
| 37 | TF-IDF | NLP | — | — | — | — | — | — | — | — | — | — | — | C(X U6 NLP) | — | — | **G10** | Reinforce | Match CBSE; show with 5 Telugu-news headlines + 5 Hindi-news headlines side-by-side |
| 38 | NLTK basic use (Python) | NLP | — | — | — | — | — | — | — | — | — | — | — | C(X U6 NLP) | — | — | **G10** | Reinforce | Match — our notebook pre-downloads NLTK corpora so offline classrooms work |
| 39 | Chatbot build (Dialogflow or rule-based) | NLP | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U7 Leveraging Linguistics & CS) | — | **G8** | Introduce | CBSE waits till G11; we introduce a rule-based "school FAQ bot" at G8 — massive demo appeal |
| 40 | LLMs — what they do, how to prompt them | NLP | — | — | — | — | — | — | — | — | — | — | C(IX U4 Gen AI) | — | — | — | **G7** | Extend | Move intro to G7; CBSE G9 is one chapter, we make it a term-long thread by G10 |

### Family 6 — Programming (unplugged → block → Python)

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 41 | Unplugged algorithms (follow-the-steps worksheets) | Programming | P(JuniorBlocks)M | P(JuniorBlocks)M | — | — | C(G3 SH p.6 ALGORITHMIC THINKING LO) | C(G4 SH p.…) | C(G5 SH p.…) | — | — | — | — | — | — | — | **K2** | Extend | Start at K2 with ScratchJr; CBSE formal starts G3 |
| 42 | ScratchJr / block-based story | Programming | — | P(ages 4-7)M | P(ages 4-7)M | P(ages 4-7)M | P(ages 4-7)M | — | — | — | — | — | — | — | — | — | **K2** | Introduce | Nobody in CBSE/SCERT does this K2-G2; this is our pre-school add-on |
| 43 | Scratch 3 / PictoBlox block coding | Programming | — | — | — | — | — | P(ages 8+)M | P(ages 8+)M | — | — | — | — | — | — | — | **G4** | Introduce | CBSE G6 Coding Handbook teaches Scratch but G6 is late; we start G4 |
| 44 | Loops / conditionals (block-level) | Programming | — | — | — | — | — | — | — | C(Coding HB G6 teacher)M | C(Coding HB G7)M | C(Coding HB G8)M | — | — | — | — | **G4** | Extend | CBSE has a separate Coding Handbook (not CT+AI) starting G6; we fold into AI track earlier at G4 |
| 45 | Python — variables, print, input | Programming | — | — | — | — | — | — | — | — | — | — | C(IX U5 Intro to Python) | — | C(XI U3 Python Programming) | — | **G6** | Extend | CBSE starts Python G9 formally; we introduce at G6 via PictoBlox Python Notebook — 3-grade head-start |
| 46 | Python — lists, loops, functions | Programming | — | — | — | — | — | — | — | — | — | — | C(IX U5) | C(X U7 Advance Python) | C(XI U3) | — | **G7** | Extend | Keep pace one grade ahead of CBSE through G9 |
| 47 | Jupyter / Colab notebook workflow | Programming | — | — | — | — | — | — | — | — | — | — | — | C(X U7 Advance Python) | C(XI U3) | — | **G8** | Extend | CBSE introduces at G10; we at G8 so our G9 Python lives in notebooks from day one |
| 48 | Debugging / troubleshooting as a named skill | Programming | — | — | — | — | C(G3 SH p.5 "Troubleshooting" in CT defn) | C(G4 SH) | C(G5 SH) | C(G6 Part-1) | C(G7 Part-1) | C(G8 Part-1) | — | — | — | — | **G3** | Reinforce | Match CBSE — but frame explicitly as debugging in context of block code, not puzzle discussion |
| 49 | OOP intro (classes/methods — only conceptual) | Programming | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U3 Python Programming)? | — | **G10** | Extend | CBSE doesn't guarantee OOP at XI; we introduce at G10 for the kids heading into ISC CS |
| 50 | Git basics (version control as "save with history") | Programming | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G10** | Introduce | Nobody in CBSE/ICSE teaches git at school; our ICSE+CBSE students enter engineering college git-ready |

### Family 7 — Hardware / Robotics / IoT

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 51 | "Meet the computer" parts tray (SD card, RAM, motor, LED, speaker) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G3** | Introduce | CG-3 (CBSE G3 SH p.5) names it, handbook doesn't deliver it — our mandate-cover gap |
| 52 | Line-following robot (no code, dot-code or marker-sensor) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G4** | Introduce | Nobody at Grades 4-5; our ₹300/unit Ozobot-clone path |
| 53 | Microcontroller — micro:bit basics | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G5** | Introduce | CBSE doesn't mandate hardware at G5-6; we introduce micro:bit (₹1,500/unit shared) |
| 54 | Sensors (ultrasonic / light / temperature) wired | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G6** | Introduce | AIoT Integration Manual (`ai/cbse/aiot-manuals/AIoT_Integration_Manual.pdf`) suggests this but isn't part of 3-8 handbook mandate; we deliver it |
| 55 | Arduino basics (digitalWrite, analogRead) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G7** | Introduce | Code 844 Data Science/IoT mentions at XI only; we at G7 so kids have 4 years of Arduino before engineering |
| 56 | Raspberry Pi as a computer (boot Linux, open terminal) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G7** | Introduce | TG SCERT Class 9-10 introduces Raspberry Pi per CodeMitra (S?); we at G7 — three-grade head-start over SCERT |
| 57 | Edge-AI concept (model running on-device, not cloud) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G9** | Introduce | CBSE AIoT Integration Manual names it; no board makes it a classroom activity. Our drone+vision project is exactly this |
| 58 | ROS intro (pub/sub, nodes — conceptual only) | Robotics/IoT | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G10** | Introduce | JdeRobot Robotics Academy is university-level; we pull a 2-hour intro into G10 for MS-aspirant kids |

### Family 8 — Drones

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 59 | What a drone is (paper-airplane + propeller intuition) | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G5** | Introduce | Nobody teaches drones at G5 formally; our "drone demo day" is the pricing hook |
| 60 | DGCA Drone Rules 2021 — nano/micro/small categories | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G7** | Introduce | Gazette lives in `drone/regulatory/drone-rules-2021/`; no board teaches this. Our ethics-adjacent angle |
| 61 | Tello EDU block coding (Scratch-style drone) | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G6** | Introduce | DroneBlocks platform in `drone/droneblocks/`; nobody in Indian school curriculum teaches it |
| 62 | Tello Python SDK (djitellopy) | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G9** | Introduce | Nobody at school level; this is what CCU teaches at university — we pull it down |
| 63 | Aerial computer vision (take a photo, run a classifier) | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G10** | Introduce | Our signature G10 capstone — ties CBSE G10 CV unit (U5) to a drone project |
| 64 | Drone ethics (privacy, no-fly zones, altitude) | Drones | — | — | — | — | — | — | — | — | — | — | — | — | — | — | **G7** | Introduce | Nobody in school curriculum; we teach alongside DGCA rules at G7 |

### Family 9 — AI Ethics & Society

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 65 | Online safety / password hygiene (ethics precursor) | Ethics | — | — | — | — | — | — | — | C(G6 Ch4 Ethics and Digital Responsibility p.76) | — | — | — | — | — | — | **G4** | Extend | Move to G4 with Telugu/Urdu SMS-fraud examples; CBSE at G6 is too late |
| 66 | Digital footprint | Ethics | — | — | — | — | — | — | — | C(G6 Ch4 p.76) | — | — | — | — | — | — | **G5** | Extend | Earlier than CBSE and more concrete — screenshot their own Instagram/YouTube history |
| 67 | Bias in AI (conceptual, with example) | Ethics | — | — | — | — | — | — | — | — | C(G7 Ch4 Ethics and AI Bias Awareness p.73) | C(G8 Ch3 Data and Fairness p.60) | C(IX U1 Ethics) | — | C(XI U8 AI Ethics) | — | **G6** | Extend | Introduce at G6 with a Teachable Machine-in-practice demo of bias (3 light skin + 0 dark skin = fails on dark); CBSE puts it G7 as text |
| 68 | Fairness and inclusivity in AI systems | Ethics | — | — | — | — | — | — | — | — | — | C(G8 Ch4 Responsible AI p.67) | C(IX U1) | — | C(XI U8) | — | **G7** | Extend | One grade earlier with a hands-on dataset-audit worksheet |
| 69 | AI-generated misinformation / deepfakes | Ethics | — | — | — | — | — | — | — | — | — | — | C(IX U4 Gen AI Ethics) | — | C(XI U8) | — | **G8** | Extend | CBSE at G9; we at G8 — today's 13-year-old sees deepfakes weekly, refusing to teach it is irresponsible |
| 70 | AI and jobs (what gets displaced, what emerges) | Ethics | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U2 Unlocking Future in AI) | — | **G9** | Extend | Move to G9 — stream choice decisions start G10 and need this context |
| 71 | AI regulation / Indian context (DPDP Act, NITI Aayog strategy) | Ethics | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U8)? | — | **G10** | Introduce | Neither board explicitly cites DPDP Act or NITI National Strategy; we do — that's our India-specific moat |

### Family 10 — AI Project Lifecycle

| # | Topic | Family | K1 | K2 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 | G9 | G10 | G11 | G12 | Our 1st intro | Depth | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 72 | Problem framing — "what are we solving, for whom?" | Project Lifecycle | — | — | — | — | — | — | — | — | — | C(G8 Ch1 AI Project Lifecycle p.37) | C(IX U1) | C(X U1 Revisiting APC) | C(XI U4 Intro Capstone) | C(XII U1 Capstone) | **G6** | Extend | CBSE introduces at G8; we introduce at G6 with a one-period "problem canvas" |
| 73 | Full 5-stage AI Project Cycle (Scope → Data → Explore → Model → Evaluate) | Project Lifecycle | — | — | — | — | — | — | — | — | — | C(G8 Ch1 p.37) | C(IX U1) | C(X U1) | C(XI U4) | C(XII U1) | **G7** | Extend | One grade earlier than CBSE; our G7 kids run a full micro-cycle on a Teachable Machine model |
| 74 | Capstone project end-to-end | Project Lifecycle | — | — | — | — | — | — | — | — | — | — | — | — | C(XI U4 Intro Capstone) | C(XII U1 Capstone — 30 hrs 10 marks) | **G10** | Extend | CBSE capstone is G11; we shift one down so G10 students have a shippable artefact for the ICSE/CBSE board-exam portfolio and the engineering admission file |
| 75 | Storytelling with data / data journalism | Project Lifecycle | — | — | — | — | — | — | — | — | — | — | — | — | — | C(XII U3 Storytelling — 30 hrs 20 marks) | **G11** | Reinforce | Match CBSE XII — the "why" is identical: writing a blog post or Reel about your model's result |

---

## Danger-zone overlaps (five to discuss before Deliverable 2)

1. **Generative AI intro at G7 (ours) vs G9 (CBSE Code 417 Unit 4).** A G8 student at a CBSE school whose friend at our school has been using ChatGPT since G7 arrives at G9 CBSE Unit 4 and finds it introductory. Their parent asks us "why did you teach this two years earlier? Did you prepare him for the board exam or against it?" **Risk: parent conversation at G9 transition.**
2. **Python at G6 (ours, via PictoBlox Python Notebook) vs G9 (CBSE 417 Unit 5 Intro to Python).** Three-grade head-start creates a "my child already knows Python" problem at G9 CBSE board exam — he gets 95% without trying; they ask why they paid for G9. **Risk: price justification at G9.**
3. **Teachable Machine at G5 (ours) vs G7 (CBSE first NAMED CV reference G7 SH p.44).** Kids who built a cat-vs-dog classifier at G5 look at the G7 CBSE "Computer Vision" introduction and say "we did this two years ago." Teacher can't defend the depth gap in a 40-min period. **Risk: classroom credibility loss at G7.**
4. **Bias in AI at G6 (ours — hands-on demo) vs G7 (CBSE Ch4 — text explanation).** The hands-on G6 student has a visceral understanding; the G7 text-based lesson will feel underwhelming. If the school uses only CBSE at G7 and our kids have moved on, parents of "only CBSE" kids ask the principal why their children got less. **Risk: equity/political question at the school level.**
5. **Capstone project at G10 (ours) vs G11-G12 (CBSE 843 Unit 4 XI + Unit 1 XII).** Shipping a capstone at G10 for ICSE/CBSE board-exam portfolios is a huge sales point — but it clashes with CBSE's XI capstone timing, and the XI teacher will get a classroom of kids who already "did capstones." **Risk: XI engagement drops if XI retreads G10.**

---

## What I'd do if this were my money

The matrix shows the moat is narrow and real: CBSE's CT+AI 2026-27 is a well-designed paper curriculum that teaches **CT heavily** at Grades 3-5 and **AI shallowly** at Grades 6-8, then **AI formally** from Grade 9 onward via the Code 417/843 stream. Our strongest leverage is in two zones — the **K2-G2 band** (nobody serves it with structured block coding) and the **G5-G7 shift** (where CBSE names AI topics but does not deliver hands-on). The danger-zone overlaps above all sit at G7/G9/G10 transitions, meaning our pricing conversation gets harder at those grades unless we have a distinct "we taught it earlier AND we go further" message baked into each topic. I would not build Deliverable 2 before pulling the AI Nestham public curriculum and getting ≥5 SCERT TG textbook PDFs into the repo so the `N?L` and `S?` cells harden to real citations — otherwise the gap/overlap heatmap will overstate our lead against an invisible competitor whose public pages claim to teach AI at Class 1.

---

**Matrix complete — all 10 families shipped, all 75 rows populated, 5 danger zones identified. Stop. Awaiting sign-off before Deliverable 2.**

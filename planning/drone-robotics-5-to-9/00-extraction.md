# Drone + Robotics, Grades 5-9 — Data extraction (no building yet)

**Purpose:** before planning the Grades 5-9 drone + robotics track, pull every scrap of relevant data already in our repo so planning rests on what we actually have, not on memory.

**Branch:** `curriculum/grade-3-year-v1` (contains full `ai/`, `robotics-iot/`, `drone/`, `cbse-ctai-archive/` trees from the archive merge).

---

## A. What CBSE's mandated curriculum actually teaches about drones + robotics at Grades 5-9

Scanned CBSE Grade 5-8 Student Handbooks (`cbse-ctai-archive/framework/grade-{5..8}/CTAI_PriNSH_2026-27.pdf`) and CBSE 417 Grade 9 syllabus (`ai/cbse/code-417-9-10/417-AI-IX_2025-26.pdf`) for every mention of: robot, drone, sensor, microcontroller, Arduino, Raspberry Pi, IoT, actuator, servo, motor, hardware.

**Result: zero substantive classroom content.** The only hits are:
- Preface / Introduction paragraphs quoting NEP 2020's "3-D machining" / "machine learning" / "data analytics" aspiration — adult framing, not student content.
- 417-IX syllabus has one hit: *"multi-sensorial learning"* in a general objective. Metaphor, not hardware.

**What CBSE DOES allocate to this age band:**

| Grade | Total CT+AI hours/year | Breakdown | Delivery slot |
|---|---|---|---|
| 5 | 50 | embedded in Math + TWAU (The World Around Us) | inside existing Math/TWAU periods |
| 6 | **100** | 40 CT + 20 AI + **40 Interdisciplinary Projects (2 × 20h)** | not specified — school decides |
| 7 | **100** | 40 CT + 20 AI + (40 Interdisciplinary expected per pattern) | not specified |
| 8 | **100** | 40 CT + 20 AI + **40 Interdisciplinary Projects (2 × 20h)** | not specified |
| 9 | ~210 (417 elective) | 5 Units: AI Reflection/Project Cycle/Ethics, Data Literacy, Math for AI, Gen AI, Intro to Python + 50h Employability Skills block | dedicated skill-subject period |

**Implication:** the **40h "Interdisciplinary Projects" slot** at Grades 6-8 is where drones + robotics legitimately fit inside CBSE's own guidance. CBSE doesn't name hardware, but the hours are earmarked for us.

Sources:
- `cbse-ctai-archive/framework/grade-5/CTAI_Pri5SH_2026-27.pdf` p.5 (50h/yr, embedded)
- `cbse-ctai-archive/framework/grade-6/CTAI_Pri6SH_2026-27.pdf` p.6 (100h = 40+20+40)
- `cbse-ctai-archive/framework/grade-7/CTAI_Pri7SH_2026-27.pdf` p.5 (100h = 40+20+?)
- `cbse-ctai-archive/framework/grade-8/CTAI_Pri8SH_2026-27.pdf` p.5 (100h = 40+20+40)
- `ai/cbse/code-417-9-10/417-AI-IX_2025-26.pdf` (G9 skill subject structure)

---

## B. What CBSE's secondary (non-mandated) manuals DO teach — the AIoT Integration Manual

The CBSE AIoT Integration Manual (`ai/cbse/aiot-manuals/AIoT_Integration_Manual.pdf`) IS a real resource — Classes 6-10, maps "tinkering" (robotics + IoT activity) onto specific NCERT Science / Geography / History / Economics chapters.

**Structure of the Manual:**
- Chapter 1: AIoT Integration in Curriculum — About the Program
- Chapter 2: Introduction of Tinkering and AI
  - 2.1 Tinkering (Design Thinking → Prototype) + Computational Thinking + Algorithmic Thinking + Flowcharts + **Physical Computing** (building/designing/creating interactive systems with hardware and software to sense and respond to external stimulus)
  - 2.2 AI (what it is, domains: Statistical / CV / NLP, AI Project Cycle 6-stage)
- Chapter 3: Developing AI + Tinkering Integration Ecosystem (requires ATL Tinkering Lab)
- Chapter 4: Integrating AI + Tinkering across Curriculum
- Chapter 5: Implementation process + Guidelines
- Chapter 6: 20 lesson plans

**The 20 lesson plans (grade × subject × hardware):**

| § | Grade | Science/Humanities Chapter | Hardware/software referenced |
|---|---|---|---|
| 6.1 | 6 | Garbage in Garbage out (Science Ch 16) | — (CT-focused) |
| 6.2 | 6 | Electricity and Circuits (Science Ch 12) | basic circuits |
| 6.3 | 6 | Major Landforms (Geography Ch 6) | **TinkerCad 3D design + 3D printing** |
| 6.4 | 6 | India Climate, Vegetation (Geography Ch 8) | **Arduino Uno + DHT11 temp sensor + soil moisture sensor** |
| 7.1 | 7 | Electric Current and its Effects (Science Ch 14) | (likely Arduino circuits) |
| 7.2 | 7 | Light (Science Ch 15) | LDR / light sensor |
| 7.3 | 7 | Rulers and Buildings (History Ch 5) | 3D modelling |
| 7.4 | 7 | Water (Geography Ch 5) | water-level sensor |
| 8.1 | 8 | Combustion and Flame (Science Ch 6) | temperature / flame sensor |
| 8.2 | 8 | Pollution of Air and Water (Science Ch 18) | air quality sensor / pH sensor |
| 8.3 | 8 | (Economics / Development Ch 2) | data-driven |
| 8.4 | 8 | Industries (Ch 5) | automation / production line simulation |
| 9.1 | 9 | Why do we fall ill? (Science Ch 13) | health sensors (pulse, temp) |
| 9.2 | 9 | Improvement in Food Resources (Science Ch 15) | soil / crop monitoring |
| 9.3 | 9 | A story of Village Palampur (Economics Ch 1) | data analysis |
| 9.4 | 9 | Food Security in India (Economics Ch 4) | supply-chain data |
| 10.1 | 10 | Electricity (Science Ch 12) | Arduino advanced circuits |
| 10.2 | 10 | (Science Ch 16) | (likely life processes sensors) |
| 10.3 | 10 | Consumer Rights (Ch 5) | data/ethics |
| 10.4 | 10 | Manufacturing Industries (Geography Ch 6) | automation |

**Verbatim** on hardware (Manual p.~1385-1447, Lesson 6.4): *"Use arduino hardware and coding in the ide… Arduino Uno, Jumper Cables, DHT 11 Temperature Sensor, USB Cable for Arduino Connect… The teacher needs to install tinkercad into the available systems… Understand the working of Arduino and the basics of AI… The ability to create basic designs in tinkercad… interface a sensor and run a code on an Arduino."*

**Verbatim** on scope (Manual p.~638): *"Establish a Tinkering Club. All students of classes 6-10, based on self-interest and passion should be eligible."* + *"The AI and Tinkering integrated lesson plans are to be implemented with all the students of class 6-10 so that…"*

**Verbatim** on physical computing (p.~2.1): *"Physical Computing is building/designing/creating/making interactive systems that use different kinds of software and hardware to sense and respond to an external stimulus — which could be a program, a problem statement, a need, an issue or simply an Idea. Physical computing takes a hands-on approach, which means spending a lot of time building circuits, soldering, writing programs, building structures to hold sensors and controls, and figuring out how best to make all of these things talk to each other and give the desired output."*

**Implication:** CBSE's own secondary document hands us the specific tools — Arduino Uno, DHT11 sensor, TinkerCad, 3D printer — mapped to specific grade-level NCERT chapters. We can cite CBSE verbatim when pitching.

---

## C. What the DGCA regulatory framework allows at school

DGCA Drone Rules 2021 gazette (`drone/regulatory/drone-rules-2021/Drone-Rules-2021-gazette-PIB.pdf`) classifies UAS by weight:

| Category | Weight | Pilot licence required (non-commercial)? |
|---|---|---|
| **Nano** | ≤ 250 g | **No** |
| **Micro** | 250 g – 2 kg | **No** |
| Small | 2 kg – 25 kg | Yes |
| Medium | 25 kg – 150 kg | Yes |
| Large | > 150 kg | Yes |

Verbatim (p.~146-147): *"No remote pilot licence required for micro drones (for non-commercial use) and nano drones."*
Verbatim (p.~175): *"Nano and model drones (made for research or recreation purposes) are exempt"* (from certain registrations).

**Implication:** nano (DJI Tello = 80 g) and micro drones are legally flyable at school without a pilot licence. This is the window inside which our Grades 5-9 drone work operates. Grade 7's DGCA ethics session (matrix row #60) is essentially "children must understand the gazette their own teacher is operating under."

---

## D. What our Rosetta Stone matrix already locks for Grades 5-9

Family 7 (Hardware / Robotics / IoT) at Grades 5-9 — 6 rows active in this band:

| # | Topic | Our 1st intro | Depth | Why (compressed) |
|---|---|---|---|---|
| 53 | Microcontroller — micro:bit basics | **G5** | Introduce | CBSE doesn't mandate hardware at G5-6; micro:bit ₹1,500/unit shared |
| 54 | Sensors (ultrasonic / light / temperature) wired | **G6** | Introduce | AIoT Integration Manual suggests this but handbook doesn't deliver; we deliver |
| 55 | Arduino basics (digitalWrite, analogRead) | **G7** | Introduce | CBSE 844 touches at XI only; we at G7 → 4 years of Arduino before engineering |
| 56 | Raspberry Pi as a computer (boot Linux, open terminal) | **G7** | Introduce | SCERT TG at G9-10 via CodeMitra; we at G7 → 3-grade head start |
| 57 | Edge-AI concept (model on-device, not cloud) | **G9** | Introduce | AIoT names it; no board classroom activity. Our drone+vision project |
| 58 | ROS intro (pub/sub, nodes — conceptual only) | G10 | Introduce | (outside our 5-9 window — scoped later) |

Family 8 (Drones) at Grades 5-9 — 5 rows active in this band:

| # | Topic | Our 1st intro | Depth | Why (compressed) |
|---|---|---|---|---|
| 59 | What a drone is (paper-airplane + propeller intuition) | **G5** | Introduce | Nobody teaches drones at G5 formally; "drone demo day" is the pricing hook |
| 60 | DGCA Drone Rules 2021 — nano/micro/small categories | **G7** | Introduce | Gazette in repo; no board teaches this. Ethics-adjacent |
| 61 | Tello EDU block coding (Scratch-style drone) | **G6** | Introduce | DroneBlocks platform; nobody in Indian school curriculum teaches it |
| 62 | Tello Python SDK (djitellopy) | **G9** | Introduce | CCU teaches at university; we pull down 7 grades |
| 63 | Aerial CV (take a photo, run a classifier) | G10 | Introduce | (outside our 5-9 window — G10 signature capstone) |
| 64 | Drone ethics (privacy, no-fly zones, altitude) | **G7** | Introduce | Nobody in school curriculum; alongside DGCA rules |

**Row counts active in Grades 5-9 range:** 5 robotics + 4 drones = **9 topics**, all **Introduce** (CBSE / ICSE / SCERT teach none of these at these grades).

Danger-zone overlaps already identified in the matrix that touch Grades 5-9:
- **G5 Teachable Machine overlap** (ML Concepts row #18 — we introduce at G5 vs CBSE first names CV at G7 SH p.44)
- **G6 Python head-start** (Programming row #45 — PictoBlox Python at G6 vs CBSE Python at G9)
- **G6 bias hands-on** (Ethics row #67 — G6 hands-on vs G7 CBSE text)
- **G7 Gen AI** (AI Foundations row #6 — G7 ours vs G9 CBSE 417 Unit 4)

Family-7 and Family-8 rows themselves carry NO danger-zone overlap because CBSE teaches zero of them at any grade in 5-9 — they're clean Introduce territory.

---

## E. Third-party curricula in repo (for benchmarking + content borrowing)

### E.1 Robotics kits — Indian vendors

| Vendor | Source in repo | What they ship | Price band | Relevance to us |
|---|---|---|---|---|
| **STEMROBO** | `robotics-iot/hardware-vendors/stemrobo/stemrobo-csr-setup.html` | School robotics labs via CSR funding; end-to-end lab + training | ₹8-15K/kit, ₹2-5L/lab | Direct competitor on bigger budget; we price below them |
| **Avishkaar** | `robotics-iot/hardware-vendors/avishkaar/avishkaar-robotics-explorer.html` + `avishkaar-stem-schools.html` | Robotics Explorer Kit (Scratch-based motor/sensor kit) | ₹18K+/kit | Premium competitor; too expensive for Tier-2/3 Telangana |
| **Tinkerly** | `robotics-iot/hardware-vendors/tinkerly/inc42-tinkerly.html` | AI + IoT + Robotics kits, monthly subscription | ₹500-1,500/month/student | Subscription model worth copying for recurring revenue |

### E.2 Robotics kits — International vendors (reference curriculum)

| Vendor | Source | Products | Why we care |
|---|---|---|---|
| **Arduino Education** | `robotics-iot/hardware-vendors/arduino-education/` (4 files incl Pitsco Student Kit, Science Journal factsheet) | Arduino Uno + Student Kit; Science Journal app | Grades 7-9 Arduino track benchmark |
| **Raspberry Pi Foundation** | `robotics-iot/hardware-vendors/raspberry-pi-foundation/rpf-projects.html` | Pi 4/5 + projects.raspberrypi.org (1000s free projects) | Grades 7-9 Raspberry Pi track; free curriculum |
| **LEGO Education** | `robotics-iot/hardware-vendors/lego-education-spike/` (3 files: lego-education.html, SPIKE Essential ages 6-10, SPIKE Prime ages 10+) | SPIKE Essential ₹35-45K/kit; SPIKE Prime ₹55-70K/kit | Premium benchmark; too expensive for our price point |
| **VEX Robotics** | `robotics-iot/hardware-vendors/vex-robotics/` (2 files: vex-education.html, vex-kb-education.html) | VEX IQ 2nd gen, VEX V5, VEX EXP | Competition-grade; we point students at FTC/VEX competitions, we don't ship the kits |
| **CMU Robotics Academy** | `robotics-iot/curriculum-references/cmu-robotics-academy/` (3 files: cmu-lego-curriculum, cmu-vex-iq-2nd-gen, cmu-vex-v5-exp) | Full K-12 LEGO + VEX curricula | Free structured curriculum we can adapt |
| **Code Club** | `robotics-iot/curriculum-references/code-club/codeclub-main.html` | Free coding projects, ages 9-13 | Pairs with Raspberry Pi; source of G5-6 unplugged → Scratch content |
| **ROS / JdeRobot Robotics Academy** | `robotics-iot/ros-education/` (4 files: ros.org, JdeRobot Academy + Education, MDPI paper) | Browser-based ROS exercises | G9+ conceptual; too heavy for G5-8 |

### E.3 Drones — Vendors + platforms

| Vendor / platform | Source in repo | What they ship | Price band | Relevance |
|---|---|---|---|---|
| **DJI Education** | `drone/dji-steam/` (3 files: STEAM portal, RoboMaster TT release, DJI STEAM EU) | **Tello EDU** (80 g nano drone) + **RoboMaster TT** + **RoboMaster S1** (ground robot) | Tello EDU ~₹9-12K, RoboMaster TT ~₹18K, S1 ~₹45K | Tello EDU is our workhorse drone — nano category, no licence needed, Scratch + Python support |
| **DroneBlocks** | `drone/droneblocks/` (4 files: learn home, getting-started, Tello curriculum, Crazyflie K-12) | Block-coding platform for DJI Tello + Crazyflie | Free platform; $99/year classroom subscription | Our Tello block-coding curriculum ladder |
| **Crazyflie K-12** | `drone/droneblocks/crazyflie-k12/thedronegirl-crazyflie.html` | Bitcraze Crazyflie 2.1 nano quadcopter + K-12 curriculum via DroneBlocks | ~$225 per Crazyflie | Advanced track for G9+; open-source firmware |

### E.4 Drone academies (Telangana-local)

| Academy | Source | What they offer | Audience | Relevance |
|---|---|---|---|---|
| **Marut Drones (Siddipet)** | `drone/academies-india/marut-drones/marut-drones-home.html` + `marut-siddipet-academy/` (2 files, Cloudflare-walled articles) | Kaveri University × Marut drone training facility in Siddipet | Adult DGCA pilot training; agri-spraying operators | Local Siddipet presence; possible partnership for Grade 9-10 field-day |
| **India Drone Academy (Hyderabad)** | `drone/academies-india/india-drone-academy/ida-home.html` | DGCA Certified Drone Pilot Training | Adult pilots | Benchmark for "what adult certification looks like" — we tell parents "this is the ladder to a real career" |
| **Telangana State Aviation Academy (TSAA)** | `drone/academies-india/telangana-state-aviation-academy/` — folder empty | DGCA-RPA pilot training programmes | Adult | Noted but not downloaded |
| **PJTSAU Drone Academy** | `drone/academies-india/pjtsau-drone-academy/` (2 files: pjtau-drone-academy.html, Marut MoU) | Agricultural drone training via Prof Jayashankar Telangana State Agricultural University | Agri students / adults | Agri-drone context for our Siddipet pitch |

### E.5 Enterprise drone education (aspirational ladder)

| Platform | Source | Offering | Relevance |
|---|---|---|---|
| **DroneDeploy** | `drone/enterprise-education/dronedeploy-edu/dronedeploy-education.html` | Aerial mapping + photogrammetry for education | G10 capstone reference; aspirational "what real drones do in industry" |
| **Pix4D** | `drone/enterprise-education/pix4d-edu/` (3 files: pix4d-education.html, student license release, pix4d-training.html) | Photogrammetry software; free student semester license | Same — G10 capstone upgrade path; shows the software map students see at engineering college |

---

## F. India-national programmes touching robotics (context for the pitch)

| Programme | Source | What | Grade band | Our angle |
|---|---|---|---|---|
| **ATL (Atal Tinkering Labs) — NITI Aayog** | `ai/ncert-national/aim-atl-modules/` (Let's Learn AI Base Module 57 MB + StepUp 73 MB + ELTI v1.1 583 KB + AIM-NASSCOM foundation doc) | ATL Tinkering Lab in schools; ~₹20 lakh grant per school from NITI | Classes 6-12 (eligible) | Our pitch says "we deliver the AI + Drone layer on top of your ATL kit, or we help you apply for one" |
| **TGSWREIS × RPF** | `ai/scert-telangana/tgswreis-rpf/` (6 files: RPF implementing computing curriculum TG, TSWREIS coding academy partnership, empowering India's digital future, TG tag archive, TSWREIS tag archive, Hans India/DC/Siasat/Telangana Today press) | Raspberry Pi Foundation + Telangana Social Welfare Residential Educational Institutions Society partnership; coding from Class 6 in 238+ government residential schools | Class 6 onwards | TG state has Raspberry Pi curriculum rollout already; we extend with drones + AI on top |
| **Amazon Future Engineer** | `ai/scert-telangana/ai-moUs-literacy-drive/amazon-future-engineer-40k-2023.html` + `tgt-amazon-120-more-schools.html` | AFE programme expanded to 120 more TG govt schools (2026); covers 40K+ TG students | Class 6-12 | Context — TG is already an "AI literacy" state; our value-add is hands-on drones they don't ship |
| **CodeMitra (SCERT Telangana)** | `ai/scert-telangana/codemitra/codemitra-landing.html` + 6 RPF/CodeClub supporting files | State-hosted Scratch-like platform for Classes 6-10 | Class 6-10 | We align to CodeMitra block-coding grammar, then level up to Python + hardware they don't ship |
| **1000 AI Labs (TG Education Dept)** | `ai/scert-telangana/ai-moUs-literacy-drive/dc-1000-ai-labs.html` | TG plans AI labs for 1,000 high schools (announced 2026) | Class 9-10 | Pitch: we are the curriculum that goes INTO these labs |

---

## G. Research / pedagogy sources (defence for pitch)

| Paper | Source in repo | What it argues |
|---|---|---|
| Papert — Situating Constructionism | `ai/research-papers/papert-constructionism/situating-constructionism.html` | Children learn best by building physical things ("the computer as a thing to think with") — the foundational argument for hardware in school |
| Wing — Computational Thinking (CACM 2006) | `ai/research-papers/wing-ct/Wing06-CT-CACM-paper.pdf` | CT as a universal skill — defends the "we don't just teach coding, we teach thinking" line |
| Payne — Ethics of AI Curriculum for Middle School (MIT 2019) | `ai/research-papers/payne-ethics-curriculum/` (MIT news + Media Lab page) | Middle-school AI ethics curriculum for Grades 6-8 — defends our ethics-first drone framing |
| MIT RAISE publications | `ai/research-papers/mit-raise-pubs/` (via `ai/international/mit-raise-day-of-ai/raise-publications.html`) | Day of AI 3-5 + 6-8 + 9-12 curricula; "How To Train Your Robot" (HTTYR) publication series | Backs our "robots + ML" framing |
| OECD AI + Future of Skills | `ai/research-papers/oecd-ai-skills/` (3 files, Vol 1 + Vol 2) | Jobs AI displaces vs creates — pitches "future-proof career" |
| Stanford HAI AI Index 2025 + 2026 Ed chapter | `ai/research-papers/stanford-hai-index/` (3 files) | Macro numbers on AI in education globally |
| NITI Aayog National Strategy for AI | `ai/research-papers/niti-aayog-strategy/NITI-National-Strategy-AI.pdf` (4.6 MB) + IndiaAI discussion paper 4.2 MB | India's official AI strategy — cites school curriculum as foundational |

---

## H. International grade-band benchmarks (what G5-9 looks like elsewhere)

| Framework | Source in repo | What it says for G5-9 age band |
|---|---|---|
| **AI4K12 Five Big Ideas** | `ai/international/ai4k12/README.md` (gradeband-progression-charts page is JS-walled; narrative only) | 3-5 band: all 5 Big Ideas introduced through unplugged + light Teachable Machine. 6-8 band: formal CV, NLP, ML intro; robotics as NHI (Big Idea 4) |
| **UNESCO AI Competency Framework for Students 2024** | `ai/international/unesco-2024-framework/` (NZ summary, IAU-HESD, GCED, UOC Chair + 2021 policy PDF) | Levels Understand (G3-5) → Apply (G6-8) → Create (G9-10). At G5-9: students "use AI tools with teacher" → "modify AI tools" → "build with AI tools" |
| **MIT RAISE Day of AI** | `ai/international/mit-raise-day-of-ai/` (12 pages) | Day of AI 6-8 pack includes a robotics module (HTTYR — How To Train Your Robot). Day of AI 3-5 is paper-based |
| **Experience AI (RPF + DeepMind)** | `ai/international/experience-ai-rpf-deepmind/` (4 files: launch, DeepMind empowering, research-continues, Google blog) | Target age 11-14 (our G6-8). Modules: Foundations of AI, AI Safety, Prompting. Pure software — no hardware |
| **UAE AI Mandate 2025** | `ai/international/uae-mandate/` (4 files) | 7 core AI concepts starting K; 2025 mandate for all public schools. No hardware specifics; benchmark for "what a state-wide AI mandate looks like" |
| **Singapore AI for Fun (IMDA)** | `ai/international/singapore-aisg-imda/` (7 files: AISG Student Outreach, 15K students announcement, AI4E, Code for Fun, AI for Fun Primary, AI for Fun Secondary, MDDI launch) | Code for Fun (Primary) + AI for Fun (Primary + Secondary). Blends CT + light AI. Benchmark for well-executed national programme |
| **UK micro:bit CreateAI** | `ai/international/uk-microbit-isaac/` (8 files: RPF Teach landing, Annual Review 2023, STEM.org.uk Isaac CS, 4 micro:bit CreateAI lessons: Developing AI literacy / First lessons / Talking about AI / Exploring ML coding) | micro:bit CreateAI lessons for ages 8-14 (= our G3-8). Target hardware is micro:bit (£16/~₹1,700). Directly reusable for our G5-6 micro:bit track |

---

## I. Platforms + software referenced across sources

| Platform | Source | Grade band | Cost | Notes |
|---|---|---|---|---|
| **PictoBlox (STEMpedia)** | `ai/platforms-and-tools/pictoblox/` (4 files: AI docs home, ML Environment docs, Medium posts on Junior Blocks + 6.1 update) | Junior Blocks 4-7, Scratch blocks 8+, Python Notebook 12+ | Free; premium plans; Codeavour comp | Indian-origin, already in TG CodeMitra competing space — we point at it as "the other block platform"; our track uses it for the Scratch → Python bridge |
| **Scratch 3** | `ai/platforms-and-tools/scratch-ext/` (3 files: scratch.mit.edu, ML for Kids, Cognimates) | 8-16 (our G3-10) | Free | Core block platform |
| **ML for Kids (Dale Lane)** | `ai/platforms-and-tools/scratch-ext/ml-for-kids.html` + `cbse-ctai-archive/named-ai-tools/ml-for-kids/` (static mirror) | 7-14 (our G2-8) | Free | Scratch + text/image classifier; our G5-6 ML tool |
| **Teachable Machine (Google)** | `ai/international/teachable-machine/` (3 files) + `cbse-ctai-archive/named-ai-tools/teachable-machine/` (static mirror) | 8+ (our G3-10) | Free | Cornerstone no-code ML; bias-demo tool |
| **MIT App Inventor** | `ai/platforms-and-tools/app-inventor/` (3 files: home, AI with App Inventor, TMIC Teachable Machine extension) | 11+ (our G6-10) | Free | Block-coded Android apps; our "ship a real app" moment |
| **Jupyter / Google Colab** | `ai/platforms-and-tools/jupyter-colab/` (4 files) | G7+ | Free | Python notebook environment |
| **Hugging Face / Ollama / Dialogflow / Streamlit** | respective `ai/platforms-and-tools/` folders | G9+ | Free tiers | Senior-grade tools |
| **Tinkercad Circuits** | mentioned in AIoT Integration Manual; no file in `robotics-iot/iot-maker/tinkercad-circuits/` yet (folder empty) | G6+ | Free | Simulated Arduino circuits — lets us teach Arduino with ZERO hardware |
| **micro:bit (physical board)** | `ai/international/uk-microbit-isaac/microbit-createai.html` + 4 lesson HTMLs | 8-14 | ~₹1,700/unit India | Microcontroller choice for G5-6 |
| **DroneBlocks** | `drone/droneblocks/` (4 files) | 8-18 | $99/year classroom | Tello block-coding |
| **djitellopy (Python Tello SDK)** | not in repo as doc; `drone/curriculum-references/tello-python-sdk/` folder empty | G8+ | Free library | G9 Python drone track |

---

## J. What's missing from the repo (gaps to acknowledge in the plan)

See full list in `curriculum-mapping/sources-to-verify.md`. Short version for drones + robotics:

| Missing | What we need | Why it matters for the G5-9 plan |
|---|---|---|
| STEMpedia PictoBlox grade-wise curriculum PDF | Browser fetch from stempedia.com | So we know exactly where our tracks collide with the leading Indian competitor |
| LEGO SPIKE Prime / Essential full lesson PDFs | Browser fetch | Price benchmark — SPIKE is what we're NOT competing with |
| STEMROBO + Avishkaar + Tinkerly detailed grade curricula | Vendor websites / sales decks | For the pitch deck's "you could use them for ₹18K/kit or us for ₹3K/kit" slide |
| Marut Drones Siddipet academy syllabus | Cloudflare-walled; needs browser via connected computer, or an in-person visit | Partnership possibility for Grade 9-10 field-day |
| DroneBlocks actual lesson plans (behind curriculum paywall) | $99/year subscription one-time; then PDF export | Our G6 Tello block-coding ladder |
| AI4K12 Big Idea 1-5 PDFs | JS-walled; browser fetch via connected computer | International framework citations |
| CodeMitra teacher handbook | Login-walled; ask TSWREIS trainer | Grade-6 TG alignment — critical for govt school pitch |
| ICSE R&AI (Code 661) Class 9-10 full syllabus | CISCE geo-blocks our proxy; browser from India IP | ICSE-school pitch (Grade 9 track) |

---

## K. One-page summary (for planning)

**What we know, in 10 lines:**

1. CBSE's mandated Grade 5-9 handbooks teach **zero** robotics/drones/hardware. Blank canvas.
2. CBSE's **AIoT Integration Manual** names Arduino Uno + DHT11 + TinkerCad + 3D printing at Classes 6-10, mapped to NCERT Science chapters — we can cite verbatim.
3. CBSE Grades 6-8 have a **40-hour "Interdisciplinary Projects"** slot per year — this is where our drone + robotics track legitimately fits inside CBSE's own time allocation.
4. DGCA Drone Rules 2021: **nano (≤250g) + micro (250g-2kg) drones need no pilot licence for non-commercial use.** Tello EDU (80g) is in bounds.
5. Our matrix locks 5 Robotics/IoT topics + 4 Drones topics as **Introduce** at Grades 5-9 — nobody else teaches these at these grades, so no overlap risk.
6. Danger-zone overlaps that touch 5-9 are all on the AI side (Teachable Machine G5, Python G6, Gen AI G7, bias G6) — the robotics/drone side is clean.
7. **India robotics kit vendors** we compete with: STEMROBO (₹8-15K/kit), Avishkaar (₹18K+/kit), Tinkerly (subscription ₹500-1,500/month). All more expensive than our target.
8. **Drone platforms** we use: DJI Tello EDU (~₹10K, nano, no licence) + DroneBlocks ($99/year/classroom) at G6-8; djitellopy Python SDK at G9.
9. **Local Telangana drone academies**: Marut Siddipet, India Drone Academy Hyderabad, TSAA, PJTSAU — all adult-focused; we're the only child-focused offering, and Siddipet is our Marut partnership play.
10. **India programmes we align to**: ATL (NITI, Classes 6-12), TGSWREIS × RPF (Class 6+ govt schools), Amazon Future Engineer (120+ TG schools), CodeMitra (SCERT state platform), "1000 AI Labs" (announced TG programme). We are the drone/hardware layer none of these ship.

**What we don't yet know (the blockers):**
- STEMpedia PictoBlox's exact grade-wise AI curriculum content (competitor pricing + depth)
- CodeMitra's exact Class 6-10 block-coding scope (so we don't duplicate for govt-school pitch)
- Marut Siddipet's willingness to co-brand a Grade 9-10 field day
- Actual tablet/laptop/Wi-Fi reality at the target first-pitch schools (not generic Tier-2/3 assumptions)

---

**End of extraction. Ready to plan.**

Nothing has been designed yet — this is the inventory we build the plan from. Next step: your call on scope and shape of the plan itself (session count per grade, kit price per grade, Marut field-day vs internal-only, govt-school track vs private-school track, etc.).

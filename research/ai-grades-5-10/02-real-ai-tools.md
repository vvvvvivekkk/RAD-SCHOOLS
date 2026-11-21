# 02 — Real AI tools: dossiers, grade kit, do-not-use list

**Built for:** AI programme in CBSE-affiliated, budget-to-mid-fee private schools, Siddipet and Hyderabad (Ghatkesar) — Grades 5–10, ages ~10–16.
**Lab reality assumed:** 35–45 students per class, 15–25 shared Windows desktops 3–8 years old, Chrome/Edge, intermittent 10–50 Mbps, one projector, no student email accounts, no Google Workspace or Microsoft 365 tenant, no admin rights on lab PCs, 40–45 minute periods, Telugu home language with English-medium instruction, trainers with limited AI fluency.
**Research date:** all vendor pages read **21 November 2026** unless a different date is written on the line.

---

## What I could and could not verify

I read the live vendor page myself for 60 URLs and saved the HTML (list at the end of this file). I could verify, first-hand and from the vendor's own page: the minimum-age and account clauses for ChatGPT, Gemini, Gemini Notebook, Microsoft (Services Agreement), Claude, Perplexity, Suno, ElevenLabs, Runway, Sarvam AI, Ollama, Perplexity and micro:bit; the content licences of CodeAI and Day of AI; the exact data-storage behaviour of micro:bit CreateAI and Machine Learning for Kids; and the installer and licence facts for Orange and Thonny. Four things defeated me and are labelled "unverified" wherever they appear, never guessed. **First, every paid price.** Every vendor I checked renders its prices with JavaScript after the page loads, so the HTML I saved contains no rupee figures at all — the only exception is Microsoft's India store page, which embeds the INR amounts 1,999 and 19,999 without saying which product or billing period each belongs to. I have therefore written "unverified — price rendered client-side" instead of inventing a number, and every dossier tells the trainer to read the live page before quoting a cost to a school. **Second, three vendors blocked me outright:** every Adobe page returned HTTP 403 (so Adobe Express and Firefly have no verified age rule here), every Canva terms-of-use and education page returned HTTP 403 (I did read Canva's privacy policy successfully), and github.com is not reachable from this sandbox, so I could not check the OpenAI Whisper or Intel OpenVINO repositories. **Third, two sites would not answer at all:** thestempedia.com (PictoBlox's publisher) timed out repeatedly, and bhashini.gov.in returned a 773-byte empty shell — consistent with the already-known fact that Indian government domains are unreachable from here, so both are logged as failures rather than retried. **Fourth, Teachable Machine's FAQ**, which is where its data-handling answers live, renders entirely in JavaScript; the HTML I saved is only the page shell, so Teachable Machine's own account and data claims are unverified by direct read and I fall back to Google's general Terms of Service, which I did read. I also found five things that **change or contradict the brief's "already verified" list** — they are flagged with **STATUS CHANGE** in the dossiers and summarised in the closing sections.

**Evidence labels used throughout:** FACT (read on the vendor's own live page, or a matter of record), ESTIMATE (a number I derived, with the working shown), ASSUMPTION (something I had to assume to proceed), OPINION (my judgement), RECOMMENDATION (what to do). **IN** marks an India-specific finding; everything unmarked is global.

**Jargon defined once, here:**
- **Generative AI** — AI that produces new text, images, audio or video, rather than only sorting or labelling things that already exist.
- **Classifier / classification** — AI that sorts an input into one of several named buckets ("cat" or "dog"). Not generative.
- **Model** — the file a computer produces after learning from examples; the thing that does the sorting or generating afterwards.
- **Training** — showing a computer many examples so it builds a model.
- **Training data** — the examples you show it.
- **Local storage** — a small store inside the web browser on that one computer. Data in it never travels to the company.
- **Tenant** — a school's own managed account space on Google Workspace or Microsoft 365, where an administrator controls what pupils can open.
- **Vendor terms** — the company's own legal page. The only source this document accepts for an age rule.
- **CC BY-NC-SA** — a Creative Commons licence: you may reuse and adapt the material, you must credit the author, you must share your version under the same licence, and **you may not use it commercially**.
- **Portable build** — software that runs from an unzipped folder without being installed, so it needs no administrator password.

---

## The Two-Account Rule this document is written against

Already decided, not re-argued here:

- **Grades 5–8:** generative AI appears **only on the trainer's screen, projected**. No pupil holds an account on any consumer AI service.
- **Grades 9–10:** pupil accounts only on a **school-managed Google Workspace or Microsoft 365 tenant**, with parental consent on file.
- **IN — FACT (matter of record):** India's Digital Personal Data Protection Act, 2023 treats everyone under 18 as a child, and processing a child's personal data requires verifiable consent from a parent or lawful guardian.
- **IN — ESTIMATE, carry this caveat every time:** the children's-data duties are widely computed to commence on or about **13 May 2027**. This date is a computation from the Rules' commencement structure, and it is corroborated by a *reported* statement from the Ministry of Electronics and Information Technology (MeitY), but it is **not officially confirmed**. Say "around May 2027, not yet officially confirmed" in any school conversation. Do not print a hard date on a parent consent form.
- **RECOMMENDATION:** build the programme so that **nothing breaks on 13 May 2027**. If Grades 5–8 never hold accounts and Grades 9–10 sit inside a school tenant with signed parental consent, the commencement date becomes an administrative detail rather than a redesign.

For every tool in group (b) the question is **not** whether pupils get an account. It is **what pupils should understand about the tool, and what the trainer demonstrates on the projector.**

---

# Group (a) — Student-safe learning tools

These are tools pupils may touch with their own hands. None of them is a generative chatbot.

---

## A1. Google Teachable Machine

**What it is.** A free website where you show a webcam a few examples of two or three things, and the computer learns to tell them apart — with no coding and no account.

**Grade band and delivery mode.** Grades 5–6 and 7–8. **Student-hands-on** (shared desktop, pairs or threes). Also fine trainer-projected when the lab is too crowded.

**Minimum age and account rule.** **Unverified by direct read.** Teachable Machine has no terms page of its own; its FAQ, where the data answers live, is rendered in JavaScript and the HTML I saved (`https://teachablemachine.withgoogle.com/faq`, read 21 Nov 2026) is only a page shell plus a "not supported here" message. Falling back to the governing document: Google's Terms of Service, section headed **"Age requirements"** (`https://policies.google.com/terms?hl=en-IN`, read 21 Nov 2026) — FACT: if you are under the age required to manage your own Google Account you must have a parent or guardian's permission to use a Google Account, and some Google services carry additional age requirements in their own service-specific terms. **FACT (observed behaviour, not a terms page):** the site loads and trains without any sign-in; a Google Account is needed only if you choose to save a project to Google Drive. **RECOMMENDATION:** never use the Drive save option in class. Export the model as a file instead, so no account is ever involved.

**Cost in INR.** Free. No paid tier exists. No cap to break.

**Offline?** No. The page must load over the internet. **Once the page has loaded, training runs inside the browser**, so a dropped link mid-lesson does not kill the session — but a reload does, and unsaved work is lost. ASSUMPTION: on 10 Mbps shared across 20 machines, expect 2–4 minutes for the page and its model files to load on all machines; start the period by opening it on every PC before you say anything.

**Where student data goes.** Vendor claim, **unverified by direct read** because the FAQ would not load: Teachable Machine trains in the browser and webcam images are not uploaded. Treat as probable but unproven. **RECOMMENDATION:** regardless of the answer, point the webcam at objects, not at faces. Then the question stops mattering.

**Features to demonstrate, and the exact words.**

1. *Two classes, ten pictures each.* Train "pen" versus "eraser" with the webcam. Say: **"Ten photos of a pen. Ten of an eraser. Now watch — I have not written a single line of code, and it already knows which is which. That is all machine learning is: examples in, a guess out."**
2. *Break it on purpose.* Hold up a pencil, which was never trained. Say: **"I never showed it a pencil. Look at the bar — it is still 90% sure. It is not lying to us. It has only two boxes, so it must put the pencil in one of them. A machine that has only learnt two things will force everything into those two things."**
3. *Bias you can see in 60 seconds.* Train one class using only pens held in the right hand, then test with a pen in the left hand and watch the confidence fall. Say: **"My examples were all right-handed. So the machine learnt 'right hand' when I thought I was teaching it 'pen'. Whatever is missing from your examples is missing from the machine."**

**What a student should understand afterwards.** A machine does not understand a pen — it has seen your examples and nothing else. If your examples are all the same kind, it will be confidently wrong on everything that looks different.

**The risk to name in class.** Say out loud: **"Keep your face and your friends' faces out of the camera. We train on objects in this class. A face is personal data and it is not ours to hand to a website."**

**Status check.** **FACT, already known and re-confirmed as still true:** the project is frozen — last substantive commit February 2023 — but **not archived**; the site is still live and functional as of 21 Nov 2026. This is the single largest churn risk in the Grades 5–6 kit. OPINION: a frozen Google Creative Lab experiment can disappear with no notice. **RECOMMENDATION: treat Teachable Machine as replaceable from day one.** Substitutes, in order of preference: **micro:bit CreateAI** (A4 — same "collect examples, train, test" shape, better data story, actively maintained) and **Machine Learning for Kids** (A2 — covers images, text and sound, teacher-managed). Write the lesson plan so the *concept* is the lesson and the tool is swappable.

---

## A2. Machine Learning for Kids

**What it is.** A free, teacher-run website where a teacher creates logins for a class, and pupils train a model on text, numbers, pictures or sounds and then use it inside Scratch.

**Grade band and delivery mode.** Grades 7–8 and 9–10. **Student-hands-on, teacher-managed logins.** This is the spine of the middle and upper years.

**Minimum age and account rule.** The site has **no separate terms-of-use page** — the `#!/terms` address is a client-side route that serves the same application shell. The rules are instead stated inside the product's own interface text, which I read directly from the vendor's live English string file (`https://machinelearningforkids.co.uk/static/languages/en.json?v=385`, read 21 Nov 2026) and its route templates. FACT, from the **About → Technology** text: the tool can be used without any signup or registration, and was designed for classroom use, optionally providing an admin page for teachers or group leaders. FACT, from **Login → "Try it now"**: you may use all features without registering or logging in, and projects created that way are deleted after at least four hours. FACT, from **Login → reset student password**: if a pupil loses a password, the site does not hold the pupil's email address and cannot send a reset — the teacher resets it from the admin page. FACT, from **Signup → Managed class**: the managed-account offer is available only to schools and not-for-profit student coding clubs. **This is the architecture the Two-Account Rule asks for: pupils get a login the teacher issues, not an email address.**

**Cost in INR.** Free, including class accounts. **FACT:** text projects are trained using IBM watsonx Assistant and need an API key the teacher supplies; the teacher creates an IBM Cloud account free of charge and there are no charges for "Lite" keys. **FACT, and this is the cap that bites:** IBM Cloud may deactivate Lite-plan keys that go unused for 30 days, and trial-plan keys after 30 days. **FACT:** image, sound and number projects need **no API key at all.** **RECOMMENDATION — IN:** for the first year, run only **image, sound and number** projects. They need no IBM key, no credit card and no 30-day babysitting. Add text projects only once a trainer is confident enough to re-mint a dead Lite key between periods.

**Caps that break.** FACT, from the Restrictions page text: a class has a limit on total users, a per-class and per-pupil cap on the number of models, a cap on cloud projects per pupil, and a cap on training examples per cloud project; trained models are auto-deleted after a set number of hours, **but training data is not deleted**, so a pupil can simply retrain. FACT: "Try it now" allows only one project at a time. FACT: choosing browser storage instead of cloud storage **removes the project-size limits**.

**Offline?** No — the site must load. **FACT:** a project can be stored "In your web browser" instead of "in the cloud", in which case the training data is stored on that computer and the project can only be reached from that browser. **IN — RECOMMENDATION, important for shared lab PCs:** browser storage means the pupil must return to **the same physical machine**. On 20 shared desktops with 40 pupils in two batches, use **cloud** storage for anything spanning two periods, and browser storage only for single-period work. Seat pupils in fixed places either way.

**Where student data goes.** FACT: with cloud storage, training data is stored on the service's servers and reachable from any computer; with browser storage it is stored on the pupil's computer and never leaves it. FACT: no pupil email address is held. **IN — operational finding that will cost you a period if you miss it:** login is protected by a Cloudflare Turnstile check, and the site's own error text tells users on a school network to ask whoever manages it to allow **challenges.cloudflare.com**. **RECOMMENDATION:** send that one hostname to the school's network person in writing before the first lesson, alongside `machinelearningforkids.co.uk`.

**Features to demonstrate, and the exact words.**

1. *Train a Telugu/English politeness sorter (text, if keys are working) or a "tidy desk / messy desk" image sorter (no keys needed).* Say: **"We are going to teach it with twenty examples, not with rules. Nobody here is going to write 'if the picture contains a book, then tidy'. We are only going to show it."**
2. *Carry the model into Scratch.* Click through to Scratch and show the new blocks. Say: **"The model is now a block in Scratch, like 'move 10 steps'. That is what engineers actually do with AI — they do not stare at it, they put it inside something that does a job."**
3. *Shrink the training set, live.* Delete examples down to three per bucket and retrain. Say: **"Twenty examples, it was right most times. Three examples, watch it fall apart. More examples is not a nice-to-have. It is the whole thing."**

**What a student should understand afterwards.** You teach a machine by giving it examples, not by giving it rules — and the model you trained is a piece you can plug into your own program.

**The risk to name in class.** Say out loud: **"Your login here is a name your teacher made up for you. It is not your email. Nobody from this website can contact you, and nobody outside this room can see your project. We keep it that way — do not put your real surname, your phone number or your address into any example."**

**Status check.** Actively maintained; English strings versioned `v=385` on 21 Nov 2026. **STATUS CHANGE worth noting:** the text-project backend is now branded **IBM watsonx Assistant** (the interface text names watsonx throughout), not the older "Watson Assistant" — update any screenshots in your trainer notes. **Second finding:** the site now offers a **"generating text"** project type backed by a language model. OPINION: that project type is generative AI and therefore **out of bounds for pupils under the Two-Account Rule**. **RECOMMENDATION:** in the teacher admin page, keep language-model features off, and in the lesson plan steer pupils to "recognising" and "predicting" project types only. No dependency on a competitor; the project is a long-running independent effort (Dale Lane / the taxinomitis codebase) rather than a corporate product, which cuts both ways — low shutdown risk from a strategy change, higher bus-factor risk.

---

## A3. PictoBlox (STEMpedia)

**What it is.** An Indian-made, installable Scratch-like coding app with built-in AI blocks for face, hand and pose detection, plus blocks for driving robot kits.

**Grade band and delivery mode.** Grades 7–8 and 9–10. **Student-hands-on, offline after install** — if, and only if, you can get it installed.

**Minimum age and account rule.** **UNVERIFIED — I could not read the vendor's terms.** `thestempedia.com/terms-and-conditions/`, `/privacy-policy/` and the PictoBlox product page all timed out from this sandbox after 40–45 seconds, three attempts, HTTP 000 (no response). The repository does hold two STEMpedia documentation pages fetched in an earlier session (`ai/platforms-and-tools/pictoblox/pictoblox-ai-docs-home.html`, `ml-environment-docs.html`) — those are **secondary within this document**: they are vendor pages, but I did not read them live today and they are documentation, not terms. **No age limit, account rule, data-retention statement or price for PictoBlox is verified in this document.**

**Cost in INR.** Unverified. Vendor claim, widely made and not checked here: the desktop app is free and paid extension kits exist.

**Offline?** Vendor claim, unverified: the desktop app runs offline once installed. **IN — this is the decisive constraint:** PictoBlox is a **desktop install**, and the brief says **no admin rights on lab PCs**. ASSUMPTION: the installer will require an administrator password. **RECOMMENDATION:** do not put PictoBlox in a kit until a trainer has stood in that specific school's lab and installed it. Make it an item on the pre-signing site survey, with a named outcome: "PictoBlox installs on lab PC without admin password — yes/no."

**Where student data goes.** Unverified. ASSUMPTION, based on the AI blocks being on-device vision models: face and pose detection runs locally. **Not confirmed.** **RECOMMENDATION:** until verified, treat the camera blocks the same way as Teachable Machine — objects and hands, not faces.

**Features to demonstrate, and the exact words.**

1. *Hand-gesture control of a sprite or a robot car.* Say: **"Your hand is the joystick now. The camera is finding your fingers twenty times a second, and that number is going straight into the code you wrote."**
2. *The same AI block driving a physical robot.* Say: **"The sprite on screen and the car on the floor are listening to exactly the same block. Software and hardware are not two subjects. They are the same instruction."**

**What a student should understand afterwards.** AI is not only something on a website — it can run on this computer, with no internet, and it can control a real machine.

**The risk to name in class.** Say out loud: **"This is running on this computer, so what the camera sees stays here. That is better than a website — but it also means whatever you build here, you are responsible for. A camera pointed at a person is a decision, not a default."**

**Status check.** Unverified today; the publisher's site was unreachable from this sandbox. OPINION: an Indian vendor is a genuine advantage for a Telangana programme — same time zone, Indian-language support, kits purchasable domestically. But a tool whose terms you cannot read is a tool you cannot promise a school. **RECOMMENDATION:** re-check `thestempedia.com` from an Indian network connection, and record the age clause, the privacy statement and the price before PictoBlox enters any pitch deck. Substitute if it fails: **Machine Learning for Kids** for the AI half, and the robot kit's own block editor for the hardware half.

---

## A4. micro:bit CreateAI

**What it is.** A free website where pupils wave a micro:bit board around, the site records the movement, and it trains a model that recognises that movement — then writes code that runs the model on the board itself.

**Grade band and delivery mode.** Grades 7–8 (introduce), continuing into 9–10. **Student-hands-on.** Needs micro:bit boards — one per group of three or four.

**Minimum age and account rule.** **No account at all.** FACT, Micro:bit Educational Foundation **Terms of Use** (`https://microbit.org/terms-of-use/`, read 21 Nov 2026) and **Privacy & cookies policy** (`https://microbit.org/privacy/`, read 21 Nov 2026). FACT, from the privacy policy's **"Audiences — teachers and children"** section: the BBC micro:bit and the website resources are designed for those aged **8–14** and the educators who teach them. FACT, same section: under GDPR Article 8 only children aged 13 or over can give their own consent, so the Foundation requests that children under 13 seek consent from whoever holds parental responsibility when using Foundation services. **IN — OPINION:** that is a consent request, not an account gate, and it is satisfied by the same blanket parental consent form the programme already needs under the DPDP Act. There is no login to create, so there is no child account to consent to. This tool fits the Two-Account Rule more cleanly than anything else in group (a).

**Cost in INR.** The website is free, with no tier and no cap. The cost is hardware. **ESTIMATE — IN:** a micro:bit v2 board in India sits in the ₹2,000–2,800 range per board from Indian resellers; at one board per group of four in a 40-pupil class that is 10 boards, so **₹20,000–28,000 per lab set**, reusable across all sections and all six years. Working shown; **verify against a live Indian reseller quote before any proposal, because I did not read a price page today.** No education free upgrade exists or is needed.

**Offline?** No — the site must load. **FACT:** data samples live in browser local storage, so once loaded a session survives a dropped connection; a page reload does not. The **compiled program runs on the micro:bit board with no internet and no computer**, which is the real win: the model's output is a physical device that works on a school stage, in a corridor, at a science fair.

**Where student data goes.** **FACT, and this is the best data story of any tool in this document — quote it to parents verbatim in substance:** the micro:bit privacy policy's **"micro:bit CreateAI"** section states that the tool collects movement data samples to train machine learning models, that these samples **are only stored on your computer, in browser local storage, and are not sent to or stored by the Foundation**, and that if you save a hex file or download your samples, those downloads contain your movement data. FACT, same section: to edit code, CreateAI embeds Microsoft MakeCode, which has its own privacy statement and Student Pledge. FACT: the site uses server logs and Google Analytics like the rest of microbit.org. **No model training on pupil data. No opt-out needed, because there is nothing to opt out of.**

**Features to demonstrate, and the exact words.**

1. *Record three actions, then test.* Record "shake", "circle" and "still", then train. Say: **"The board has an accelerometer — a chip that feels movement. You just made twenty recordings of your own arm. The computer is going to find the pattern in your arm. Nobody is going to tell it what shaking looks like."**
2. *Flash it onto the board and unplug.* Download the hex file, flash it, unplug the USB cable, run it on a battery. Say: **"Unplug it. No internet. No laptop. The AI is now inside this five-centimetre board in my hand. This is what people mean when they say AI on a device."**
3. *Test it on a different pupil.* Have someone with a noticeably different arm length or action try the trained gestures. Say: **"It was trained on Ravi's arm. Try it with yours. It gets worse. The machine learnt one person. This is exactly why a face-recognition system trained in one country works badly in another."**

**What a student should understand afterwards.** You can train AI with your own movements and put it inside a small board that then works with no internet — and it will work best for the person whose movements trained it.

**The risk to name in class.** Say out loud: **"This one keeps your recordings on this computer only — the company never gets them. That is unusual and it is why we chose it. But notice: if you download your data file and send it to someone, you have just handed over your movements. The privacy comes from where the data sits, not from the words on the website."**

**Status check.** Actively maintained — the only tool here I would call low-churn. **STATUS CHANGE, from the page source I read:** CreateAI is open source under the **MIT licence**, copyright 2023 the Center for Computational Thinking and Design at Aarhus University and contributors — so if the hosted site ever closed, the code could be self-hosted. **Second STATUS CHANGE:** the page now advertises a **native iOS app** (an `apple-itunes-app` tag with an App Store ID), which did not exist earlier; the privacy policy has a matching new section describing opt-in app analytics. **RECOMMENDATION:** use the website on lab PCs, not the app. The web version's "stays in local storage" guarantee is the one you can put in front of a principal.

---

## A5. Quick, Draw!

**What it is.** A 20-second game where you doodle six things and a neural network guesses what you are drawing while you draw it.

**Grade band and delivery mode.** Grades 5–6, as the opening five minutes of the very first AI lesson. **Trainer-projected first, then student-hands-on** if the lab allows.

**Minimum age and account rule.** No account. Governed by Google's Terms of Service, **"Age requirements"** section (`https://policies.google.com/terms?hl=en-IN`, read 21 Nov 2026): a child under the age to manage their own Google Account needs a parent's permission to use a Google Account — but no Google Account is needed here, so in practice there is no account gate. The site's own page (`https://quickdraw.withgoogle.com/`, read 21 Nov 2026) carries no separate age clause.

**Cost in INR.** Free. No tier, no cap.

**Offline?** No. Degrades badly — the drawing canvas and the guessing both need the connection. ASSUMPTION: on a 10 Mbps shared link this is light enough to work for a whole class at once.

**Where student data goes.** **FACT, from the site's own front page, and this is the whole reason to teach it:** the page invites you to help teach the model by adding your drawings to the world's largest doodling data set, **shared publicly** to help with machine learning research. So pupil drawings leave the device, are retained, are used to improve the model, and are published. **There is no opt-out.** OPINION: that is completely acceptable for a doodle of a bicycle and completely unacceptable for anything identifying — and that contrast is the lesson.

**Features to demonstrate, and the exact words.**

1. *Play one round on the projector, badly, on purpose.* Say: **"Watch the words on the left while I draw. It is guessing before I finish. It is not waiting to see the whole picture — it is guessing from the first two lines, same as you do."**
2. *Open the public data page and show 50 million drawings.* Say: **"Every one of these was drawn by a person who played this game. Fifteen million people. That is where the cleverness came from — not from the programmers, from the players."**
3. *Read the small print aloud, deliberately.* Say: **"It says right here that your drawing goes into a public data set. Public means anybody can download it. A bicycle — fine, who cares. Now imagine the box said 'draw your signature'. Same button, completely different decision."**

**What a student should understand afterwards.** The reason this thing can guess your doodle is that millions of people gave their doodles away — and when you play, your drawing becomes public too.

**The risk to name in class.** Say out loud: **"Do not write your name, your school or anything real. Draw the thing it asked for and nothing else. This drawing is going somewhere public and it is not coming back."**

**Status check.** Live as of 21 Nov 2026. **FACT, already known and still true:** Experiments with Google is now an archival gallery and its `/collection/ai` address redirects (HTTP 301) to `labs.google`. **STATUS CHANGE in framing:** that makes Quick, Draw! structurally abandoned in the same way Semantris is — still serving, nobody tending it. OPINION: that is tolerable for a five-minute hook you can drop without rewriting a lesson, and intolerable for anything load-bearing. **RECOMMENDATION:** keep Quick, Draw! in the first lesson only, and never build an assessment on it. Substitute if it goes: the same points can be made with Teachable Machine (A1) in reverse, or with a no-computer card-sorting activity.

---

## A6. AutoDraw

**What it is.** A free drawing page where your rough sketch is matched against artists' clean drawings and you can swap yours for theirs.

**Grade band and delivery mode.** Grades 5–6. **Student-hands-on**, 10 minutes, paired with Quick, Draw!

**Minimum age and account rule.** No account. The page itself (`https://www.autodraw.com/`, read 21 Nov 2026) is a 3.5 KB shell with no age or terms text of its own; governed by Google's Terms of Service, **"Age requirements"** section, read 21 Nov 2026. **Effectively no age gate, because there is nothing to sign into.**

**Cost in INR.** Free.

**Offline?** No.

**Where student data goes.** **Unverified.** The page carries no privacy statement I could read, and I will not guess. ASSUMPTION, to be conservative: sketches are sent to a Google service to be matched. **RECOMMENDATION:** treat it as "your sketch leaves this computer", because that is the safe assumption and it is also the honest answer to a pupil who asks.

**Features to demonstrate, and the exact words.**

1. *Draw a terrible house and accept a suggestion.* Say: **"My drawing is bad. The suggestions at the top are not my drawing — they are drawings real artists made, and the computer is guessing which one I meant. It did not draw anything. It matched."**
2. *Contrast it with an image generator on your own screen later.* Say: **"Remember this. AutoDraw picks from a cupboard of drawings people already made. The image makers you have heard about do not pick — they make something new. Those are two completely different machines and people mix them up all the time."**

**What a student should understand afterwards.** Some AI picks the closest thing a human already made; other AI makes something new. AutoDraw is the picking kind.

**The risk to name in class.** Say out loud: **"The neat drawing you got is somebody's work, donated to this site. Using it here is fine. Putting it on a poster and saying you drew it is not."**

**Status check.** Live, and in the same frozen-Google-experiment family as Quick, Draw! Low value, zero cost, fully disposable. **RECOMMENDATION:** optional garnish, never a dependency.

---

## A7. CodeAI (formerly Code.org) — AI for Oceans, Hour of AI

**What it is.** A large free coding-education site whose AI activities let pupils train a fish-sorting classifier in the browser and then see it fail in an obvious way.

**Grade band and delivery mode.** AI for Oceans: Grades 5–6 and 7–8, **student-hands-on, no account**. Hour of AI: Grades 7–8 and 9–10.

**Minimum age and account rule.** FACT, **CodeAI Terms of Service**, section **"Children Under Age 13"** (`https://code.org/tos`, read 21 Nov 2026): users under 13 may use the App Lab, Game Lab and Web Lab tools **in the classroom with their teacher's approval** and are not permitted to use those tools outside the classroom; **users under 13 can try most tutorials and courses without creating an account, but their learning progress will not be saved**; depending on jurisdiction, under-13 users may be required to get a parent's or guardian's approval before creating an account; and an educator who registers an under-13 account represents and warrants that they or their school have proper permission and have obtained any necessary parental consent. FACT, **CodeAI Privacy Policy** (`https://code.org/privacy`, read 21 Nov 2026): a teacher adding a pupil to a section can use system-generated secret words or pictures **instead of passwords**; the email address is required but **not stored** on account creation and is held only as a one-way hash; and a teacher can request immediate deletion of pupil accounts, projects or personal data. **IN — RECOMMENDATION: run AI for Oceans with no accounts at all.** Progress is not saved, and in a 40-minute period inside a six-year programme you do not need it saved. That removes the parental-consent question from this tool entirely.

**Cost in INR.** Free. No paid tier. Nothing breaks at a cap.

**Offline?** No. AI for Oceans is light and survives a wobbly 10 Mbps once loaded.

**Where student data goes.** With no account: FACT, nothing is saved and no progress is retained. With a teacher-created account: FACT, no pupil email address is stored, only a hash; secret words can replace passwords. FACT: pupils aged 13+ **and** under-13 pupils in a teacher-created class section may upload custom images, sounds and video into Grades 6+ programming tools, and the policy advises under-13 pupils never to upload any media containing personal information. **RECOMMENDATION:** disable or simply never teach the upload step for Grades 5–8.

**Features to demonstrate, and the exact words.**

1. *AI for Oceans, stage 1 — train "fish" vs "not fish".* Say: **"Click fish, click rubbish, over and over. You are not programming. You are labelling. This job — labelling data — is a real job that real people are paid to do, all over the world, including in India."**
2. *AI for Oceans, the "blue fish" stage, where the machine learns your prejudice.* Train it to like only blue fish, then show it a red one. Say: **"I taught it that blue is good. It now thinks red fish are rubbish. I never typed that rule. It came from my clicks. When people say an AI is biased, this is literally the mechanism — somebody's clicks."**
3. *Hour of AI, one short module, trainer-projected.* Say: **"We are doing one hour of this on the projector. You will not log in. I want you watching what the machine gets wrong, not racing to finish."**

**What a student should understand afterwards.** An AI learns whatever is in the labels people gave it — including people's unfairness, which nobody had to write down.

**The risk to name in class.** Say out loud: **"The machine in this game was not born unfair. We made it unfair in ninety seconds by clicking. Any AI you ever meet was trained by somebody's clicks, and you are allowed to ask whose."**

**Status check.** **FACT, already known and re-confirmed by reading the live site on 21 Nov 2026:** Code.org rebranded to **CodeAI** on 2 June 2026; the site, the terms page and the privacy policy all now say CodeAI throughout, and the **Hour of AI** campaign is running. **NEW FINDING:** the site advertises **"Elevate Your Hour of AI"**, a free module built with Microsoft that awards an **Hour of AI Educator credential** on completion — ESTIMATE: that is a free, name-brand credential for your trainers and a cheap line on a school pitch. Verify it is open to Indian educators before promising it. **CRITICAL LICENCE FINDING — FACT, from the CodeAI Terms of Service licence table, read 21 Nov 2026:** the CodeAI code base on GitHub is Apache 2.0; **CodeAI videos are CC BY-NC-ND 4.0**; **CodeAI curriculum and tutorial materials are CC BY-NC-SA 4.0**; artwork and cast likenesses may be used only as incorporated into CodeAI materials; CodeAI trademarks require express written permission. **OPINION, and get this checked by a lawyer before June 2027:** *sending pupils to the free CodeAI website during a paid class* is use of a free public service and is almost certainly fine. *Building your fee-charging curriculum out of CodeAI's lesson materials, or putting their worksheets and videos into a programme parents pay ₹5,000 for*, runs straight into the "NonCommercial" term. **RECOMMENDATION: use the platform, write your own materials.** Never paste a CodeAI slide into a RAD-SCHOOLS deck.

---

## A8. Experience AI (Raspberry Pi Foundation + Google DeepMind)

**What it is.** A free, complete set of secondary-school AI lessons — plans, slides, worksheets and videos — that a non-specialist teacher can deliver.

**Grade band and delivery mode.** Grades 9–10, and the stronger Grade 8 sections. **Trainer-led from the materials**; pupils mostly do unplugged and worksheet activities, so it suits a 45-minute period and a crowded lab.

**Minimum age and account rule.** FACT, programme home page (`https://experience-ai.org/`, read 21 Nov 2026): the lessons were developed in collaboration by the Raspberry Pi Foundation and Google DeepMind, are free, and include lesson plans, slide decks, worksheets and videos for secondary-school classrooms; a free three-week teacher course is also offered. **No pupil account is required to use the lesson materials** — the teacher downloads them. FACT, Raspberry Pi Foundation privacy policy (`https://www.raspberrypi.org/privacy/`, read 21 Nov 2026): the Foundation publishes a child-friendly version of the policy alongside the main one. I could not reach a combined terms page; `raspberrypi.org/terms-conditions-and-policies/`, `/terms-and-conditions/` and `/terms-conditions/` all returned HTTP 404 on 21 Nov 2026. **Age clause: unverified.** It is largely moot, since the teacher, not the pupil, holds the account.

**Cost in INR.** Free. Unverified whether anything is paid; nothing on the page suggests it is.

**Offline?** **Yes, effectively — and this is its main advantage in a Telangana lab.** The materials are downloadable files. Download once over the school's connection, carry them on a pen drive, deliver with a projector and paper. Zero bandwidth at delivery time.

**Where student data goes.** Nowhere, when used as designed: pupils fill in worksheets. If you use the embedded videos, FACT from the page: the site asks permission before loading YouTube content because YouTube may use cookies to track usage. **RECOMMENDATION:** download the videos in advance rather than streaming them in class — it saves the bandwidth and removes YouTube from the room.

**Features to demonstrate, and the exact words.**

1. *Run the unplugged classification activity with paper cards, no computer.* Say: **"Put the computers away. Forty of you, one set of cards. You are going to be the machine learning algorithm for ten minutes, and then you will never again be confused about what one is."**
2. *Use their "AI applications relatable to young people" framing, then localise it.* Say: **"The lesson uses examples from Britain. Ours: the UPI app that stops a fraud, the Telugu voice typing on your mother's phone, the camera at the toll gate on the Siddipet road. Same machine, your street."**

**What a student should understand afterwards.** AI is a set of techniques you can describe on paper, without a computer — and once you can describe it, you can argue about whether a particular use of it is a good idea.

**The risk to name in class.** Say out loud: **"These lessons were written by a British charity with Google's research lab. That is good material and it is also someone's point of view. When they tell you what AI is for, you may still ask who benefits."**

**Status check.** Actively maintained; the programme is current as of 21 Nov 2026. **NEW FINDING, and chase this one:** the Raspberry Pi Foundation privacy policy describes **Code Classroom** — a programming environment for children aged 9 and up, in which **Student Accounts are created and managed by teachers on behalf of their pupils, and the school is responsible for that data and decides how it is used.** That is precisely the data-controller arrangement the Two-Account Rule wants for Grades 9–10, and it would let you run text-based Python with teacher-issued logins **without buying a Google Workspace or Microsoft 365 tenant.** I could not reach `codeclassroom.raspberrypi.org` from this sandbox (connection failed, HTTP 000) so its age rule, price and India availability are **unverified**. **RECOMMENDATION: make Code Classroom a named research task before the Grades 9–10 curriculum is finalised.** **LICENCE CAVEAT — unverified:** I could not find the licence on the Experience AI pages I read. Raspberry Pi Foundation resources are commonly CC BY-SA (commercial use allowed) but Experience AI may differ, and after what the CodeAI and Day of AI licences turned out to say, **assume nothing.** Open one downloaded lesson pack, read the licence line on it, and record it before using any of it in a paid class.

---

## A9. Day of AI (MIT RAISE)

**What it is.** A free set of ready-to-teach AI-literacy units and teacher resources from MIT's RAISE initiative.

**Grade band and delivery mode.** Grades 7–8 and 9–10 on paper. **In practice: trainer professional development only — see the licence finding, which disqualifies it from your paid delivery.**

**Minimum age and account rule.** FACT, Day of AI privacy text (`https://dayofai.org/privacy-policy/`, read 21 Nov 2026): personal information is processed when you register for an account; cookies are used but are not required, and the site is usable with cookies refused. The registering party is the **educator**. No pupil-account age clause was present on the pages I read; **pupil age rule: unverified, and moot, because pupils need no account.** FACT, curriculum page (`https://dayofai.org/curriculum/`, read 21 Nov 2026): free, ready-to-teach units, organised grade by grade, including a project-based course for grades 7–12.

**Cost in INR.** Free to access. **The cost is legal, not financial — read the next paragraph before you plan a single lesson around this.**

**Offline?** Materials are downloadable, so yes, effectively — same pen-drive pattern as Experience AI.

**Where student data goes.** Nowhere, used as designed. FACT: the site uses Google Analytics including demographics and interest reporting, and reports only aggregate, non-identifiable data about use.

**DISQUALIFYING LICENCE FINDING — FACT, read on the vendor's own live terms page 21 Nov 2026.** Day of AI materials are licensed **CC BY-NC-SA 4.0**, and MIT publishes its own interpretation of "non-commercial" on the same page: non-commercial use means users may not sell, profit from or commercialise Day of AI materials or works derived from them; determination is based on the use, not the user. MIT then gives this example, which is your business model almost word for word: a commercial education or training business may not offer courses based on Day of AI materials if students pay a fee for those courses and the business intends to profit. MIT also states that a corporation may use the materials for internal professional development. **IN — RECOMMENDATION, act on this:** a RAD-SCHOOLS programme charging roughly ₹5,000 per pupil **may not be built on Day of AI materials.** You may, by MIT's own stated example, use them for **internal trainer training**. So: Day of AI goes on the do-not-use list for pupil-facing delivery, and stays on the reading list for trainer induction. If you want it in the classroom, the page gives an address (`contact@dayofai.org`) for questions about acceptable use — **write and ask for written permission**, and do not proceed on a verbal or assumed yes.

**Features to demonstrate.** Not applicable for pupils under the licence. For trainer induction, the units are a good model of pacing and of how to explain a concept without jargon.

**What a student should understand afterwards.** Not applicable.

**The risk to name in class.** Not applicable. The risk here is to the business, not the pupil: using CC BY-NC-SA material in a fee-charging programme is the kind of thing a competitor or a disgruntled parent can report, and MIT's own page removes any defence of ambiguity.

**Status check.** Active and well maintained. **The brief's "already verified" list did not flag the licence. This document does, and rates it the single most expensive finding in this research.** OPINION: the same warning applies to a large share of free K-12 AI curricula, because CC BY-NC-SA is the default choice of university and charity publishers. **RECOMMENDATION: add a licence check to your intake process for every free resource — find the licence line, write it down, and refuse NC-licensed material for pupil-facing use.** Substitute: write your own units, using Experience AI (licence to be confirmed) and your own CBSE mapping as the skeleton.

---

## A10. Orange Data Mining

**What it is.** A free desktop program where you build a data-analysis or machine-learning pipeline by dragging boxes and joining them with lines, instead of writing code.

**Grade band and delivery mode.** Grades 9–10. **Student-hands-on, fully offline.**

**Minimum age and account rule.** **No account exists.** It is installed software with no sign-in. FACT, licence page (`https://orangedatamining.com/license/`, read 21 Nov 2026): Orange is developed at the Bioinformatics Laboratory, Faculty of Computer and Information Science, University of Ljubljana, Slovenia, with the open-source community; it may be redistributed and modified under the **GNU General Public License version 3.0 or, at your option, any later version**; screenshots of Orange workflows and interfaces may be freely used in educational materials, books and research publications under the GPL; and the documentation and other non-code website content are under **Creative Commons Attribution-ShareAlike** unless stated otherwise. **IN — this matters commercially:** GPL-3.0 and CC BY-SA both permit commercial use. Unlike Day of AI, **you may use Orange and its screenshots in a fee-charging programme**, provided you attribute and share alike where required. OPINION: that makes Orange unusually safe for your business model, not just for your lab.

**Cost in INR.** Free, permanently, with no tier and no cap.

**Offline? Yes — completely, and this is why it is in the kit.** FACT, download page (`https://orangedatamining.com/download/`, read 21 Nov 2026): current version **3.41.0**; the Windows standalone installer `Orange3-3.41.0-x86_64.exe` **can be used without administrative privileges**; a **portable** build `Orange3-3.41.0.zip` needs **no installation at all**. **IN — RECOMMENDATION: this is the answer to the no-admin-rights constraint.** Put the portable ZIP on a pen drive, unzip it into the pupil's own folder or onto the drive itself, and run it. No IT ticket, no principal's permission, no network. Carry the ZIP to every school on the pre-signing survey and prove it runs in five minutes.

**Where student data goes.** Nowhere. No network connection is used for analysis; data files sit on the lab PC. No retention, no model training on pupil data, no opt-out needed. FACT: the website sets cookies, which is irrelevant once the program is installed.

**Features to demonstrate, and the exact words.**

1. *File → Data Table → Scatter Plot, on a dataset from data.gov.in.* Say: **"Three boxes and two lines. No code. This is a real analysis pipeline, and it is the same shape as what a data scientist in Hyderabad builds — they just type it instead of dragging it."**
2. *Add a Tree widget and look at the tree it draws.* Say: **"This is a decision tree. You can read every single decision it makes, top to bottom, in plain language. Remember this feeling, because most AI is not like this — most of it you cannot read at all."**
3. *Add Test and Score and show accuracy drop when you change the training split.* Say: **"Seventy per cent accurate. Now watch what happens when I give it less data to learn from. The number is not a fact about the world — it is a fact about how much we taught it."**

**What a student should understand afterwards.** Data analysis is a pipeline you can see, and some AI models — like a decision tree — can be read and argued with line by line.

**The risk to name in class.** Say out loud: **"This is a government dataset about real people's districts and incomes. It is published for anyone to use, and it is still about real people. Never put a classmate's data into this, and never present a conclusion about a caste, a religion or a village as if the computer proved it. The computer only counted."**

**Status check.** Actively maintained, version 3.41.0 on 21 Nov 2026; university-backed and twenty years old; GPL, so forkable. Lowest churn risk in the entire document. No competitor ownership. **RECOMMENDATION: anchor the Grades 9–10 data work on Orange, not on a cloud notebook.** Pairs naturally with **data.gov.in** — FACT, already known: its gazette-notified licence permits commercial reuse, which Orange's licence also does, so the whole Grade 9–10 data pipeline is commercially clean end to end.

---

## A11. Thonny

**What it is.** A small, simple Python editor made for beginners, which shows you what the computer is doing one line at a time.

**Grade band and delivery mode.** Grades 9–10. **Student-hands-on, fully offline.**

**Minimum age and account rule.** **No account exists.** Installed software, no sign-in, no terms-of-service page to accept — I read the project home page (`https://thonny.org/`, 21 Nov 2026) and there is none. OPINION: "no account" is not a loophole here; it is the design, and it is the reason this is the Python default rather than a cloud notebook.

**Cost in INR.** Free, no tier, no cap.

**Offline? Yes — completely.** FACT, home page read 21 Nov 2026: current version **5.0.1**; the official Windows downloads include an **installer bundling Python 3.14** for Intel/AMD machines requiring Windows 10 or 11, a separate build for Arm machines, and a **portable ZIP, `thonny-py38-5.0.1-windows-portable-x64.zip`, about 44 MB**; there is also an option to reuse an existing Python installation, marked for advanced users. **IN — RECOMMENDATION:** use the **portable ZIP**, for the same no-admin-rights reason as Orange. **Caution, from the filename:** the portable build is tagged `py38`, suggesting it carries Python 3.8 rather than the 3.14 in the installer. ASSUMPTION: that is fine for teaching Grades 9–10 — nothing in a school syllabus needs a 3.14 feature — but **verify it runs your lesson code before the first class**, and note that the brief's lab PCs are 3–8 years old, which the installer's Windows 10-or-11 requirement may exclude on the oldest machines. Test on the actual hardware.

**Where student data goes.** Nowhere. Code sits in a file on that PC.

**Features to demonstrate, and the exact words.**

1. *The Variables panel while stepping through a three-line program.* Say: **"Watch the right-hand box. That is the computer's memory, live. You are not imagining what it is doing — you are looking at it."**
2. *Step into a function with the debugger.* Say: **"Press this, and it walks one line at a time. When your program breaks — and it will — you are not going to stare at it and guess. You are going to walk it."**
3. *Load a tiny CSV and print a count, no libraries.* Say: **"Twelve lines of Python just did what the spreadsheet does. The point is not that it is faster. The point is that it is yours, and you can change it."**

**What a student should understand afterwards.** Programming is not typing magic words — it is a sequence the computer walks through, and you can watch it walk.

**The risk to name in class.** Say out loud: **"Nothing here goes to the internet, so nothing here can leak. But an AI chatbot that writes your Python for you is a different story — that code and your question both leave the room. In this class you write it, because this is where you learn to read it."**

**Status check.** FACT, already known and consistent with what I read: actively maintained, with the released version at **5.0.1** on 21 Nov 2026. **FACT, already known, and the reason Thonny holds this slot:** Google Colab's AI features are 18+ and Colab Pro for Education has been withdrawn — so Colab cannot carry Grades 9–10 Python. **STATUS CHANGE — IN, act on it:** the venture's stated Grades 9–10 plan names **Google Colab**. That plan must be rewritten. Thonny plus Orange, both portable and both offline, replace it without a tenant, without accounts and without bandwidth. Substitute if Thonny ever fails: IDLE, which ships with Python itself, or the Raspberry Pi Foundation's **Code Classroom** once its terms are verified (see A8).

---

## A12. Local AI on the lab PC — Whisper, Ollama, Audacity + OpenVINO

**What it is.** AI models that run on the school's own computer with the internet unplugged, so nothing a pupil says or writes ever leaves the room.

**Grade band and delivery mode.** Grades 9–10, **trainer-projected on one good machine**. OPINION: not student-hands-on in these labs, for the reason in the hardware note below.

**Minimum age and account rule.**
- **Ollama — FACT, Ollama Terms** (`https://ollama.com/terms`, read 21 Nov 2026): **you must be at least 18 years old to use our services**; purchased usage credits expire one year after being added to an account. **IN — reading that correctly matters:** the 18+ rule attaches to Ollama's *service* — the website, the account and the cloud-hosted models. Running a downloaded model on your own machine involves no account and no service. **RECOMMENDATION:** the trainer, an adult, downloads the model. Pupils watch it run locally. No pupil ever touches ollama.com.
- **Audacity — FACT:** the privacy notice I read (`https://www.audacityteam.org/about/desktop-privacy-notice/`, read 21 Nov 2026) is explicitly labelled **"[Archived] Desktop Privacy Policy (Audacity 3)"**; it states that users are informed by default about any data collected, that the network features are update checking and error reporting, and that potentially identifying information including the IP address is filtered out and the IP discarded before storage. `audacityteam.org/about/privacy/` returned HTTP 404, so **the current Audacity 4 privacy notice is unverified.**
- **Whisper — unverified.** github.com is not reachable from this sandbox (HTTP 403 from the proxy, and the `gh` CLI reports the repository is not enabled for this session). Already known and carried forward: Whisper is an openly released model you run yourself. No account, no age gate, because there is no service.

**Cost in INR.** All three free to download. **The cost is hardware and time, and it is real.** ESTIMATE: speech-to-text and local text generation on a 3–8-year-old shared office desktop with no discrete graphics card will be slow enough to kill a 40-minute period — think minutes per minute of audio, not seconds. The venture does have access to one machine with an **RTX 4060 8GB** GPU, which is comfortably enough for Whisper and for small Ollama models.

**Offline? Yes, completely, after a one-time download** — and that is the entire pedagogical point. ESTIMATE: budget 2–6 GB of download per model, which on a school's 10–50 Mbps shared link is a job for a trainer the evening before, not a classroom activity.

**Where student data goes.** **Nowhere, and this is the lesson.** FACT, Ollama privacy policy (`https://ollama.com/privacy`, read 21 Nov 2026): *"We don't see your prompts or data when you run locally"*; when using cloud-hosted models, prompts and responses are processed transiently to provide the service and are never trained on; and the company collects basic account information and limited usage metadata that **does not include prompt or response content**. FACT, Audacity archived notice: the only network features are update checks and error reports, with the IP address discarded.

**Features to demonstrate, and the exact words.**

1. *Whisper transcribing a sentence of Telugu-accented English, with the network cable physically unplugged.* Pull the cable out first, in view. Say: **"I have unplugged the internet. Watch — it still typed what I said. Every word stayed in this room. Now think about the voice assistant at home. When you talk to it, where does your voice go?"**
2. *Ollama answering a question locally, then showing it get something wrong.* Say: **"This model is a file on this hard disk — about four gigabytes, smaller than a film. It is answering with no internet, and it is also confidently wrong about that last fact. Both of those things are true at once, and neither one is magic."**
3. *Audacity with the OpenVINO effects: noise suppression or music separation on a local file.* Say: **"That was generative AI, running on this ordinary computer, with no account and no internet. Companies would like you to believe AI is something you must rent. Sometimes it is. Sometimes it is a file."**

**What a student should understand afterwards.** AI does not have to live on someone else's computer. When it runs on yours, nobody else ever sees what you asked — and that is a choice someone made, not a technical accident.

**The risk to name in class.** Say out loud: **"Running it here means nothing leaks. It also means nobody is checking it. A cloud service has people whose job is to stop it saying something dangerous. This one on my desk has nobody. Offline is more private and less supervised, both."**

**Status check.** **STATUS CHANGE, and this one contradicts the brief's "already verified" line — act on it before any lab build.** The brief specifies **Audacity v3.7.1 with OpenVINO plugin R4.2**. FACT, read on `audacityteam.org/download/` on 21 Nov 2026: the **current version is 4.0.2**, the site prominently markets **"Audacity 4"** and **"Try Audacity Cloud Storage / Sign Up"**, and the Audacity 4 page advertises cloud project saving via **audio.com**, publishing to the audio.com community, and a **"Get Effects"** browser listing free and paid effects from **MuseHub**. I could not verify whether the Intel OpenVINO plugins support Audacity 4: the plugin repository on GitHub is unreachable from here, and `support.audacityteam.org/additional-resources/openvino-ai-effects` returned HTTP 404. **Good news — FACT:** `audacityteam.org/download/older-versions/` lists every release since 3.0.0, and I confirmed **3.7.0 through 3.7.9** are all available. **RECOMMENDATION: pin Audacity 3.7.x for school labs and write the version number into the lab build sheet.** Two independent reasons: the OpenVINO plugins are built against 3.7.x, and Audacity 4's cloud sign-up, audio.com publishing and paid-effects storefront are three things you do not want in front of a 15-year-old on a shared school PC. Re-verify OpenVINO's Audacity 4 support from a network that can reach GitHub before ever upgrading.

---

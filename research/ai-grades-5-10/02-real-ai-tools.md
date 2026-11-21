# 02 — Real AI tools: dossiers, grade kit, do-not-use list

**Built for:** AI programme in CBSE-affiliated, budget-to-mid-fee private schools, Siddipet and Hyderabad (Ghatkesar) — Grades 5–10, ages ~10–16.
**Lab reality assumed:** 35–45 students per class, 15–25 shared Windows desktops 3–8 years old, Chrome/Edge, intermittent 10–50 Mbps, one projector, no student email accounts, no Google Workspace or Microsoft 365 tenant, no admin rights on lab PCs, 40–45 minute periods, Telugu home language with English-medium instruction, trainers with limited AI fluency.
**Research date:** all vendor pages read **21 November 2026** unless a different date is written on the line.

---

## What I could and could not verify

I read the live vendor page myself for 60 URLs and saved the HTML (list at the end of this file). I could verify, first-hand and from the vendor's own page: the minimum-age and account clauses for ChatGPT, Gemini, Gemini Notebook, Microsoft (Services Agreement), Claude, Perplexity, Suno, ElevenLabs, Runway, Sarvam AI, Ollama, Perplexity and micro:bit; the content licences of CodeAI and Day of AI; the exact data-storage behaviour of micro:bit CreateAI and Machine Learning for Kids; and the installer and licence facts for Orange and Thonny. Four things defeated me and are labelled "unverified" wherever they appear, never guessed. **First, almost every paid price.** Nearly every vendor renders its prices with JavaScript after the page loads, so the HTML I saved contains no rupee figures at all. **The one exception is Microsoft**, whose India store pages ship their prices in the HTML, so the Microsoft 365 figures in B3 are fully verified down to the paisa. Everywhere else I have written "unverified — price rendered client-side" instead of inventing a number, and every dossier tells the trainer to read the live page before quoting a cost to a school. **Second, three vendors blocked me outright:** every Adobe page returned HTTP 403 (so Adobe Express and Firefly have no verified age rule here), every Canva terms-of-use and education page returned HTTP 403 (I did read Canva's privacy policy successfully), and github.com is not reachable from this sandbox, so I could not check the OpenAI Whisper or Intel OpenVINO repositories. **Third, two sites would not answer at all:** thestempedia.com (PictoBlox's publisher) timed out repeatedly, and bhashini.gov.in returned a 773-byte empty shell — consistent with the already-known fact that Indian government domains are unreachable from here, so both are logged as failures rather than retried. **Fourth, Teachable Machine's FAQ**, which is where its data-handling answers live, renders entirely in JavaScript; the HTML I saved is only the page shell, so Teachable Machine's own account and data claims are unverified by direct read and I fall back to Google's general Terms of Service, which I did read. I also found five things that **change or contradict the brief's "already verified" list** — they are flagged with **STATUS CHANGE** in the dossiers and summarised in the closing sections.

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

# Group (b) — Tools people actually use, which pupils already hear about

**Read this before the dossiers.** Under the Two-Account Rule, **no pupil in Grades 5–8 gets an account on any of these**, and Grades 9–10 only inside a school tenant. So the dossier field that matters most here is not the price — it is **what the trainer demonstrates on the projector and what the pupil should understand afterwards.** Pupils in Grades 5–10 in Hyderabad and Siddipet already hear these names daily, often from an older sibling and usually wrong. Leaving them unaddressed does not keep pupils away from them; it only guarantees nobody corrects what they already believe.

**Delivery mode for every tool in this section, unless stated otherwise: trainer-projected, on the trainer's own adult account.**

**A note on every price in this section.** Every vendor I checked renders prices with JavaScript, so no rupee figure appears in the HTML I saved. Rather than print a number I cannot source, each dossier says **"unverified — price rendered client-side"** and names the live page to read. **RECOMMENDATION: before any school meeting, open those pages, screenshot the India prices and date the screenshot.** Prices in India change with GST treatment and with India-only tiers, and a wrong figure in front of a principal costs more than an absent one.

---

## B1. ChatGPT (OpenAI)

**What it is.** A website where you type a question in ordinary language and a computer writes an answer back.

**Grade band and delivery mode.** Named and demonstrated from Grade 7 onwards. **Trainer-projected for Grades 5–8. School tenant only for Grades 9–10 — and OpenAI offers no school tenant of the kind this programme needs, so in practice: trainer-projected throughout.**

**Minimum age and account rule.** FACT, **OpenAI Terms of Use (rest of world)**, section **"Registration and access → Minimum age"** (`https://openai.com/policies/row-terms-of-use/`, read 21 Nov 2026): you must be at least **13 years old**, or the minimum age in your country required to consent to use the services; **if you are under 18 you must have your parent or legal guardian's permission.** **IN — this is the clause people misread.** It permits a 14-year-old with a parent's permission. It does **not** give a school a way to prove that permission was given, to see what was typed, or to delete it. **OPINION: "permission exists somewhere" is not a compliance posture you can defend to a DPDP-era parent.** Hence the rule: trainer's account only.

**Cost in INR. Unverified — price rendered client-side.** Read `https://openai.com/chatgpt/pricing/`. FACT, from the plan structure I could read on 21 Nov 2026: the individual tiers are **Free, Go, Plus and Pro**; the free tier gives unlimited text chats on GPT-6 with **limited** uploads, image creation, voice chats, deep research, memory and context; paid plans are priced per user per month, with monthly billing for Go and Plus. **IN — Go is the India-relevant tier**, positioned between Free and Plus as "expanded access". **What breaks at the cap:** on Free you hit message, upload, image and deep-research limits and must wait — which is exactly the wrong thing to happen in minute 25 of a 40-minute demo. **RECOMMENDATION: the trainer's demo account should be paid, personally, by the business.** One paid seat removes mid-class rate-limits for every school you visit. **IN — education free upgrade: no.** FACT, from the same page: OpenAI offers **ChatGPT for Teachers, a free plan for verified U.S.** educators. **An Indian trainer does not qualify.** Do not put it in a proposal.

**Offline?** No, and it degrades badly — a dropped link mid-answer loses the answer. **RECOMMENDATION: screenshot every demo in advance.** On a 10 Mbps school link shared with the office, assume one demo in four will stall. A dossier of screenshots means the lesson continues.

**Where student data goes.** No pupil data should go anywhere, because no pupil has an account. For the trainer's own account — FACT, OpenAI privacy policy (`https://openai.com/policies/row-privacy-policy/`, read 21 Nov 2026): your content may be used to train OpenAI's models, this is subject to your control, and there are published instructions for opting out; deleted personal data is removed within 30 days unless it must be retained longer or has already been de-identified and disassociated from the account. FACT, from the pricing page comparison table: **"Content is used to train our models, Opt-out available"** is listed against Free, Go, Plus and Pro alike — **so the opt-out does exist on the free tier.** **RECOMMENDATION: turn the training opt-out on in the trainer's demo account on day one, and show the pupils the setting.** The setting is a better lesson than any slide.

**Features to demonstrate, and the exact words.**

1. *Ask it something local that it will get wrong.* Ask about a Siddipet landmark, a local bus route, or who the current head of a named local institution is. Say: **"It answered in a confident, tidy paragraph. Three of those details are wrong. Notice it did not say 'I am not sure'. It cannot tell the difference between knowing and guessing — it is built to produce a sentence that sounds right, and a sentence that sounds right is not the same as a true one."**
2. *Ask the same question twice in two tabs.* Say: **"Same question, two different answers. If it knew, it would say the same thing twice. This is a very good machine for writing and a very bad machine for facts you have not checked."**
3. *Show the data-controls setting and turn the training opt-out on, live.* Say: **"Look. Settings. 'Improve the model for everyone.' I am turning it off, in front of you. Most people never open this screen. You now know it exists — and you know that leaving it on means your words are teaching their machine."**

**What a student should understand afterwards.** ChatGPT writes a sentence that sounds right, which is not the same as a sentence that is right — so it is useful for drafting and useless as a source until you have checked it somewhere else.

**The risk to name in class.** Say out loud: **"Three dangers, and I want them in your head. One: it invents facts and it never looks nervous while doing it. Two: everything you type may be read and used to train it, unless you change a setting most people never find. Three: it is thirteen-plus with a parent's permission, and that is the law's minimum, not a recommendation. In this class it stays on my screen."**

**Status check.** FACT, as read 21 Nov 2026: the plan line-up is Free / Go / Plus / Pro, with **GPT-6** named as the model on the free tier — **STATUS CHANGE from any older note in your files.** ChatGPT for Teachers is new and **US-only**. Not owned by a competitor in any sense that affects you; Microsoft is a major investor, which is why Copilot (B3) often behaves similarly.

---

## B2. Google Gemini

**What it is.** Google's chatbot, built into Google Search, Android phones, Gmail and Docs, so most pupils have already met it without choosing to.

**Grade band and delivery mode.** Named from Grade 7. **Trainer-projected for Grades 5–8.** For Grades 9–10 this is **the one realistic school-tenant option** — see the age clause, which is unusually favourable.

**Minimum age and account rule. FACT, and this is the most useful age clause in this document — Google's own help page, "What you need to sign in to Gemini Apps"** (`https://support.google.com/gemini/answer/13278668?hl=en-IN`, read 21 Nov 2026): **you must be 13, or the applicable age in your country, or over to use Gemini with a personal or school Google Account, and 18 or over to use Gemini with a work account.** Same page, FACT: you may use a personal Google Account you manage yourself, **or a work or school account for which your administrator has enabled access**; a Google Account **managed by Family Link cannot access the Gemini web app**; and a Family Link manager can turn off Gemini Apps for users under 13. FACT, Google Terms of Service, **"Age requirements"** section (`https://policies.google.com/terms?hl=en-IN`, read 21 Nov 2026): a child under the age to manage their own Google Account needs a parent's or guardian's permission, a parent who permits it is responsible for the child's activity, and some services add their own age requirements. FACT, Google Workspace Admin help (`https://support.google.com/a/answer/13623723`, read 21 Nov 2026): administrators manage generative AI for their organisation and control which services are available by turning them on or off in the Admin console. **IN — RECOMMENDATION:** if a school ever wants Grades 9–10 pupils to have real accounts, **Google Workspace for Education is the path**: 13+ on a school account, admin-controlled, with parental consent collected by the school. Say to a principal: *the school stays the data controller and the switch is in your admin console.* Note the trap: a pupil whose home phone is on **Family Link is locked out**, so plan for a mixed room.

**Cost in INR. Unverified — price rendered client-side.** Read `https://one.google.com/about/google-ai-plans/`. FACT, from that page on 21 Nov 2026: tiers are named **Google AI Plus, Google AI Pro and Google AI Ultra**; an AI Pro subscription includes YouTube Premium Lite and Google Home Premium; availability varies by country. **IN — two India-specific lines I read on that page:** some features are listed as *"Available to Google AI Plus, Pro, and Ultra users in the US and India"* — so India is a named launch market — and the page carries a vendor offer, *"Get ahead this school year with Google AI Pro free for 1 year."* **Label that a VENDOR CLAIM.** Eligibility, India availability and the age gate on it are all **unverified**, and a one-year student offer almost certainly requires an 18+ account. **RECOMMENDATION: do not mention the free-year offer to pupils or parents. Check it for your own trainers only.**

**Offline?** No.

**Where student data goes. FACT, Gemini Apps privacy notice** (`https://support.google.com/gemini/answer/13594961?hl=en-IN`, read 21 Nov 2026) — read these four findings carefully, because they are the sharpest teaching material in this entire document: **human reviewers, including trained reviewers from service providers, review some of the collected data**; depending on your settings, data is used to improve Google services; **your Gemini settings do not control the processing of your chats into anonymised data to improve Google services**; **even if your settings do not allow generative AI model training on your chat content, Google still uses your chats to respond to you and to protect Google, its users and the public, including with help from human reviewers**; **chats reviewed by human reviewers, and related data such as your language, device type, location and feedback, are not deleted when you delete your history**; and **even with Gemini history turned off, future chats are still saved for around two months.** So: the opt-out exists, it is partial, and **"I deleted it" is not true.**

**Features to demonstrate, and the exact words.**

1. *The two-month retention line, read off the screen.* Put the privacy page on the projector and read it. Say: **"I did not write this. Google wrote it. 'Even if Gemini History is turned off, future chats will still be saved for around two months.' Read it with me. Deleting is not the same as it being gone."**
2. *The human-reviewer line.* Say: **"It also says real people read some of these conversations, and that the ones a person has read are not deleted when you delete your history. So the rule is simple: if you would not want a stranger in an office to read it, do not type it."**
3. *Gemini inside Search, which nobody chose.* Show the AI summary at the top of a search result. Say: **"Nobody asked for this. You searched and the AI answered first, above the actual websites. Scroll past it and look at the real sources. The habit I want from you is scrolling past the summary."**

**What a student should understand afterwards.** Gemini is already in Search and on your phone whether you chose it or not, and switching off history does not delete your conversations — Google's own page says they are kept about two months and that people sometimes read them.

**The risk to name in class.** Say out loud: **"This is the one most of you will actually use, because it is already on the phone. So learn the one sentence that matters: it is saved, people sometimes read it, and deleting does not undo that. Type as if it were a postcard, not a diary."**

**Status check.** FACT: Google AI plan names (Plus / Pro / Ultra) and India as a named market, both current 21 Nov 2026. Not owned by a competitor — Google is the competitor, which is why Gemini keeps appearing in products pupils did not install it into.

---

## B3. Microsoft Copilot

**What it is.** Microsoft's chatbot, built into Windows, Edge and Office, so a lab PC running a recent Windows may already have a Copilot button on the taskbar.

**Grade band and delivery mode.** Named from Grade 7. **Trainer-projected.** The lab-PC angle makes this one worth demonstrating even though pupils get no account.

**Minimum age and account rule.** FACT, **Microsoft Services Agreement** (`https://www.microsoft.com/en-in/servicesagreement`, read 21 Nov 2026): by creating a Microsoft account or using the services you confirm that you have **either reached the age of majority or legal responsibility where you live, or that your parent or legal guardian agrees to be bound by the terms on your behalf**; if you do not know whether you have reached the age of majority where you live, ask a parent or guardian for help; and a parent or guardian of a minor accepts the terms together with the minor and is responsible for all use of the account. **IN — reading that for India:** the age of majority in India is **18**. So for an Indian pupil in Grades 5–10, the Microsoft Services Agreement route is **a parent or guardian accepting the terms on the child's behalf** — there is no self-serve under-18 path. OPINION: that is clearer than ChatGPT's "must have permission" because it names who the contracting party is, and it points squarely at a school **Microsoft 365 Education tenant** for Grades 9–10 rather than at consumer accounts. **Unverified:** I did not read a Microsoft 365 Education age or admin page today; the Copilot pricing page for India returned HTTP 404.

**Cost in INR — FACT, fully verified, the only verified paid prices in this document.** Read on Microsoft's own India store pages 21 Nov 2026 (`https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products` and `https://www.microsoft.com/en-in/store/b/copilotpro`):

| Plan | India price |
|---|---|
| Microsoft 365 **Personal** (1 person) | **₹689.00/month** or **₹6,899.00/year** |
| Microsoft 365 **Family** (1–6 people) | **₹819.00/month** or **₹8,199.00/year** |
| Microsoft 365 **Premium** | **₹1,999.00/month** or **₹19,999.00/year incl. GST** |
| Office Home 2024 (one-time, no Copilot) | **₹10,999.00** |

FACT, from the same comparison page: Copilot is **bundled into these tiers** rather than sold separately — Personal and Family list "higher usage than free for AI image creation in Copilot" and Copilot in Teams, while **Premium** adds "Advanced Copilot" and "Extensive usage for AI image creation in Copilot". FACT: a free Copilot tier exists at `copilot.microsoft.com`; **its exact limits are unverified.** FACT: the page carries a **"Student discount pricing"** navigation item — **IN — unverified whether Indian students qualify and on what proof, and worth one trainer-hour to check.**

**IN — STATUS CHANGE, and it kills a line in most older notes:** the address `microsoft.com/en-in/store/b/copilotpro` now serves the **Microsoft 365 Premium** page, and the individual plan line-up is Personal / Family / Premium / Pro with Copilot folded in. **"Copilot Pro" no longer appears to exist as a standalone consumer subscription in India.** Do not quote a Copilot Pro price to anyone.

**RECOMMENDATION — IN, and this is a real finding for the business:** ₹19,999/year for Microsoft 365 Premium is roughly **four pupils' annual fees** at ₹5,000 each. Do not buy it. The kit in section 1 needs **no Microsoft licence at all.** Quote these numbers only when a principal asks what the commercial alternative costs — at which point the comparison argues your case for you.

**Offline?** No.

**Where student data goes.** Not read today for Copilot specifically — **unverified.** The consumer service is governed by the Microsoft Services Agreement and the Microsoft Privacy Statement, which I did not read on this pass. **RECOMMENDATION:** do not make claims about Copilot's data handling in class. Demonstrate the *behaviour*, and for the data lesson use Gemini (B2), whose privacy notice I did read and which states the hard parts plainly.

**Features to demonstrate, and the exact words.**

1. *Point at the Copilot button on the lab PC itself, if present.* Say: **"Look at your own taskbar. That button was not installed by your school — it arrived with a Windows update. AI is not only a website you visit now. It is being put in front of you."**
2. *Ask it the same local question you asked ChatGPT.* Say: **"Different company, same kind of mistake. This is not one bad product. It is how all of these are built."**
3. *Show that it cites web links where ChatGPT often does not.* Say: **"It gave links. That is better. Now click one. Checking the link is the work — having the link is not."**

**What a student should understand afterwards.** The same kind of AI is now inside Windows and Office without anyone choosing it, and it makes the same kinds of mistakes as the others.

**The risk to name in class.** Say out loud: **"This one is on the computer in front of you, which makes it feel like part of the machine. It is not. It is a company's service with a button in your Start bar. School lab PCs are shared — so never sign in to a personal account on this machine, and if you find someone else still signed in, sign them out and tell me."**

**Status check.** Active and heavily promoted. **Owned by a competitor in a way that matters:** Microsoft is a major OpenAI investor, and the CodeAI "Elevate Your Hour of AI" credential (A7) is built with Microsoft — so Microsoft shows up on both sides of this document. Not a problem, just something to know when a school asks whether your programme is "Microsoft-aligned": the honest answer is that you use free Microsoft-backed curriculum and no Microsoft licences.

---

## B4. Claude (Anthropic)

**What it is.** Another chatbot, used mostly by adults for writing and programming work.

**Grade band and delivery mode.** Mentioned in Grades 9–10 only, as a contrast case. **Trainer-projected.** Not demonstrated to Grades 5–8 at all — there is no reason to put a name in a 10-year-old's head for a service they cannot lawfully use.

**Minimum age and account rule. FACT, and it is unambiguous — Anthropic Consumer Terms of Service** (`https://www.anthropic.com/legal/consumer-terms`, read 21 Nov 2026): **you must be at least 18 years old, or the minimum age required to consent to use the services in your location, whichever is higher.** There is **no parental-consent route**. A 16-year-old cannot use Claude with a parent's permission, because the terms do not offer that path. **IN — this makes Claude the cleanest example in the whole programme of a tool that is simply closed to pupils**, and that clarity is pedagogically useful.

**Cost in INR. Unverified — price rendered client-side.** Read `https://www.anthropic.com/pricing`. A free tier exists; its limits are **unverified**.

**Offline?** No.

**Where student data goes.** Not applicable to pupils — no pupil may hold an account. For an adult trainer, FACT, Anthropic privacy policy (`https://www.anthropic.com/legal/privacy`, read 21 Nov 2026): Anthropic obtains personal data from third-party sources to train its models and lists those sources; personal data is transferred to servers in the US and other countries outside the EEA and UK, including for the purpose of training models and conducting research; a separate non-user privacy policy covers data used in training. **Unverified:** whether consumer chat content is used for training by default and what the current opt-out is — I did not locate that specific clause on this pass. **RECOMMENDATION:** do not make a training claim about Claude in class.

**Features to demonstrate, and the exact words.**

1. *Show the sign-up page's 18+ requirement — do not create an account for anyone.* Say: **"Read it. Eighteen. Not 'eighteen unless your father says yes' — just eighteen. Some companies decided children are not their customers. That is a decision a company is allowed to make, and it is also an honest one."**
2. *Contrast the three age rules side by side on one slide.* Say: **"ChatGPT: thirteen, with a parent. Gemini: thirteen on a school account. Claude: eighteen, full stop. Three companies, three different answers to the same question. So there is no single 'AI age limit' — there is only what each company wrote down, and you are allowed to go and read it."**

**What a student should understand afterwards.** Claude is eighteen-plus with no exceptions — and the fact that different AI companies set different ages tells you these are business decisions, not safety facts.

**The risk to name in class.** Say out loud: **"If a classmate tells you they have a Claude account, they lied about their age to get it. That is not clever and it is not harmless — it means nobody is applying the protections that were written for you. The rule is boring and it is still the rule."**

**Status check.** Active. **FACT, already known and re-confirmed by direct read 21 Nov 2026:** 18+, no parental-consent route. **RECOMMENDATION: use Claude as the programme's worked example of reading a terms page.** It takes thirty seconds, the answer is one sentence, and pupils leave knowing that terms pages can be read by them.

---

## B5. Perplexity

**What it is.** A question-answering site that writes an answer and lists numbered links to the web pages it took the answer from.

**Grade band and delivery mode.** Grades 9–10. **Trainer-projected.** OPINION: the most useful tool in group (b) for teaching a skill rather than a warning, because the sources are on screen and clickable.

**Minimum age and account rule.** FACT, **Perplexity Terms of Service** (`https://www.perplexity.ai/hub/legal/terms-of-service`, read 21 Nov 2026): **you must be 13 years of age or older**; a minor under the age of majority in their jurisdiction but at least 13 may use the services **only if the minor's parent or guardian accepts the terms on the minor's behalf before use**; **children under 13 are not permitted.** **IN:** in India the age of majority is 18, so for every pupil in Grades 5–10 the parent or guardian must accept the terms. Same posture as Microsoft. **Trainer's account only.**

**Cost in INR. Unverified — price rendered client-side.** A free tier exists; its query limits are **unverified** and they are the cap that will bite mid-demo. **RECOMMENDATION:** read the live pricing page and note the free-tier daily limit before a demo day with four back-to-back periods.

**Offline?** No.

**Where student data goes.** FACT, Perplexity privacy policy (`https://www.perplexity.ai/hub/legal/privacy-policy`, read 21 Nov 2026): Perplexity **does not use the content of emails to create, train, improve or fine-tune AI models**; usage data is used to understand interaction, gather analytics, improve the websites and learn preferences; there is an opt-out for online targeted advertising. **Unverified:** whether search queries themselves are used for model training, and whether an opt-out for that exists on the free tier — the clause I found covers email content specifically, and I will not generalise from it.

**Features to demonstrate, and the exact words.**

1. *Ask a factual question and click through to source number 2.* Say: **"It gave an answer and it gave numbers. Now we do the part nobody does. Click number two. Is this a newspaper? A university? A blog? An advertisement? The answer is only as good as this page, and this page is a stranger."**
2. *Find a case where the source does not actually say what the summary says.* Ask about something contested and read the source carefully. Say: **"The summary says this. The page says something slightly different. It did not lie — it compressed, and compressing changes meaning. This is why you click."**
3. *Compare the same question in ChatGPT and in Perplexity, side by side.* Say: **"One gave a paragraph. One gave a paragraph with receipts. When you are writing anything for marks, you want the receipts."**

**What a student should understand afterwards.** Perplexity shows its sources, and the sources can still be wrong — click through and check.

**The risk to name in class.** Say out loud: **"Having a link next to a sentence makes the sentence feel proved. It is not proved. A link is an invitation to check, and most people accept the invitation and never go. Be the person who goes."**

**Status check.** Active. No ownership concern relevant here. **RECOMMENDATION:** this is the tool to use when teaching source-checking, which is the one AI skill with a direct payoff in CBSE project work and science-fair write-ups.

---

## B6. Gemini Notebook (formerly NotebookLM)

**What it is.** A Google tool where you upload your own documents and it answers questions **only** from those documents, with a citation pointing back to the page.

**Grade band and delivery mode.** Grades 9–10. **Trainer-projected; school tenant if the school has one.** OPINION: the most pedagogically honest generative tool in group (b), because it is grounded in sources the teacher chose.

**Minimum age and account rule.** FACT, **Gemini Notebook Help, frequently asked questions** (`https://support.google.com/notebooklm/answer/16269187?hl=en-IN`, read 21 Nov 2026): **before you access Gemini Notebook you must verify your age in your Google Account**, and the page links to guidance on accessing age-restricted content and features; to turn on the Gemini Notebook app you must **work with your workspace administrator**; a separate section covers not being able to access it with a work or school email. So: **age-verified Google Account required, and a school account needs an administrator to enable it.** The underlying Gemini age rule (B2) applies — 13+ on a personal or school account. **ASSUMPTION:** "verify your age" in practice means a Google age-verification flow, which for a minor's account will route through a parent. Not read in detail today.

**Cost in INR. Unverified — price rendered client-side.** A free tier exists with caps on the number of notebooks and sources; the exact free-tier numbers are **unverified** and must be read live, because they determine whether a trainer can prepare one notebook per grade or must share one.

**Offline?** No.

**Where student data goes.** **Unverified in detail.** What I can state: FACT, from the help page, answers are built from the sources you upload — the page states that when a notebook contains many sources, Gemini Notebook retrieves the most relevant information and builds a response from it, and that it answers based on the information in the uploaded sources. **Unverified:** whether uploaded sources are used to train Google's models on the consumer tier, and what the Workspace-tenant guarantee is. **RECOMMENDATION: upload only material you are entitled to upload** — NCERT and CBSE public PDFs, your own written notes, data.gov.in datasets. **Never upload a pupil's work, a pupil's photograph, a school mark sheet or anything with a pupil's name on it.** That rule holds regardless of what the policy turns out to say.

**Features to demonstrate, and the exact words.**

1. *Load the NCERT chapter the class is actually studying and ask a question about it.* Say: **"I gave it only this one chapter. Watch the little number next to the answer — click it, and it jumps to the exact line in the book. This is the first AI we have seen today that can show you where it got something."**
2. *Ask it something that is deliberately not in the chapter.* Say: **"I asked about something that is not in this book, and it said it cannot find it. That is the right answer. Every other chatbot today would have made something up. The difference is that this one was only allowed to look in one place."**
3. *Generate the audio overview of the chapter, in English.* Say: **"Two voices discussing your chapter, made in forty seconds. Useful for revision on the bus. And remember: it is only as right as the chapter, and the voices are not people."**

**What a student should understand afterwards.** When an AI is only allowed to read the documents you gave it, it stops inventing things and starts showing you where its answer came from — so the trick with AI is often to limit what it is allowed to look at.

**The risk to name in class.** Say out loud: **"This one is better behaved because we fenced it in. Do not confuse better behaved with correct — if I upload a wrong chapter, it will quote the wrong chapter confidently. And never, ever upload anything with a classmate's name, photograph or marks in it. Their data is not yours to upload."**

**Status check. STATUS CHANGE — NotebookLM has been renamed Gemini Notebook, and the brief's naming needs updating.** FACT, read 21 Nov 2026: Google's help centre is now titled **"Gemini Notebook Help"**, the help text says Gemini Notebook throughout, and `notebooklm.google` serves a page whose title is **"Gemini Notebook | AI Research Tool & Thinking Partner"** — the old address still resolves, the product name has changed. **RECOMMENDATION:** say "Gemini Notebook" in all materials, with "formerly NotebookLM" in brackets for one year, since the venture's drone Module 1 plan already refers to "NotebookLM education videos" and every such reference should be renamed. FACT: a **mobile app** now exists, described on the help page as an early version carrying many core features. **IN — churn warning:** a product folded into the Gemini brand is a product whose free tier can be restructured at the parent brand's convenience. Substitute if the free tier closes: Experience AI materials plus Orange, neither of which depends on a Google account.

---

## B7. Canva Magic Studio

**What it is.** A design website pupils and teachers already use for posters, with AI features bolted on that write text, generate images and remove backgrounds.

**Grade band and delivery mode.** Grades 7–8 and 9–10. **Trainer-projected for Grades 5–8; school-tenant / teacher-supervised Canva Education for Grades 9–10 if the school already uses it.**

**Minimum age and account rule. Partially verified — I could not read the terms of use.** `https://www.canva.com/policies/terms-of-use/`, `https://www.canva.com/en_in/policies/terms-of-use/`, `https://www.canva.com/education/` and `https://www.canva.com/help/canva-for-education-eligibility/` **all returned HTTP 403 on 21 Nov 2026 across five attempts with full browser headers** — a bot block, not a missing page. **So Canva's general minimum age is unverified in this document, and I will not cite a blog for it.** What I did read: FACT, **Canva Privacy Policy** (`https://www.canva.com/policies/privacy-policy/`, read 21 Nov 2026) — in that policy a **child** means a person under 13, or the higher minimum local age for lawful consent; **children who are students may use Canva Education under the supervision of their teacher**; for the Canva Education product a **Student** means an individual enrolled in a K-12 school who is **invited to use Canva Education by a teacher or administrator**; Canva and its service providers may communicate directly with students for technical support where the student or teacher requests it; and for under-13 US children in Canva Education there is a COPPA data-retention schedule forming part of the policy. **OPINION:** the teacher-invites-the-pupil structure is the right shape for the Two-Account Rule, and Canva Education is therefore a legitimate Grades 9–10 option **once you have read the terms from an unblocked network and confirmed the Indian age position.** **RECOMMENDATION: do that before Canva enters a proposal.**

**Cost in INR. Unverified — pricing page blocked (HTTP 403).** FACT about the free tier's shape, not its numbers: a free tier exists and the AI features are metered by a credit allowance that resets periodically. **Unverified:** the credit count, the reset period and the India price. **Education free upgrade:** Canva Education exists as a product and is free for eligible teachers and schools — vendor claim, **eligibility page blocked, so unverified**, including whether Indian private-school teachers qualify and what proof is accepted. **IN — RECOMMENDATION: this is a high-value unknown worth one hour of a trainer's time.** If Indian CBSE private-school teachers qualify for free Canva Education, it gives you a teacher-managed, pupil-safe design environment at zero cost, and it gives the school something it can see.

**Offline?** No. **IN:** Canva is heavy — ESTIMATE: on a 3–8-year-old shared desktop over a contended 10 Mbps link, expect visible lag and occasional editor failures with 20 machines loading at once. **RECOMMENDATION:** trainer-projected from the trainer's own laptop on a phone hotspot is more reliable than 20 lab PCs on the school link.

**Where student data goes.** FACT, from the privacy policy read 21 Nov 2026: Canva collects the messages you send it including search queries and prompts, and may collect information you provide in user content such as text and photos uploaded into designs; it collects usage, analytics and clickstream data **for data analytics and machine learning**; it uses third-party analytics tools; it transfers personal information, including across borders, to affiliated entities and other third parties; and it names a long list of sub-processors including MongoDB Atlas, Sentry, Elastic, Looker and others. There is an opt-out for Canva collecting additional data from third-party providers to tailor your experience. **Unverified:** whether pupil-uploaded images are used to train generative image models and whether an opt-out for that exists on the free tier. **RECOMMENDATION: no pupil photographs into Canva, ever.** Posters about the topic, not posters with the class in them.

**Features to demonstrate, and the exact words.**

1. *Magic Write drafting poster text, then you editing it down.* Say: **"It wrote six lines in two seconds. Four of them are rubbish. Watch me delete four. That is the actual skill — not making it, judging it."**
2. *Generate an image of something local and watch it fail.* Ask for a Telangana village scene or a specific local festival. Say: **"Look at what it gave us. That is not a Telangana village. These machines learnt from pictures on the internet, and the internet has far more photographs of American streets than of Siddipet. When it has not seen your world, it invents a version of your world. That is not a bug they forgot to fix — it is what the training data contained."**
3. *Background remover on an object photo.* Say: **"That took one click and used to take a designer twenty minutes. Some AI is not a chatbot at all — it is a small tool that does one boring job perfectly, and honestly that is most of the useful AI in the world."**

**What a student should understand afterwards.** Canva's AI can draft and draw in seconds, and it draws your own district badly, because it mostly learnt from pictures of somewhere else.

**The risk to name in class.** Say out loud: **"Two things. First, do not upload photographs of yourself or your friends — this is a company's website in another country, and its own policy says your uploads can be analysed. Second, if you hand in an AI image as your own drawing, that is cheating, and the one thing these machines are excellent at is being obvious."**

**Status check.** Active and expanding. OPINION: the bot-blocking is itself a small signal — a vendor that blocks automated reads of its terms is a vendor whose terms you must check manually and re-check annually. **IN — note for the business:** the ChatGPT pricing page I read lists "Ways to Use Canva in ChatGPT", so Canva is now embedded in ChatGPT too. The boundary between these products is dissolving, which is one more reason to teach *concepts* and name tools only as examples.

---

## B8. Adobe Express / Firefly

**What it is.** Adobe's design app and the image-generating AI inside it, pitched as trained on licensed content so the output is safe to use commercially.

**Grade band and delivery mode.** Grades 9–10 only. **Trainer-projected.**

**Minimum age and account rule. UNVERIFIED — every Adobe page I tried returned HTTP 403.** Specifically, on 21 Nov 2026: `https://www.adobe.com/legal/terms.html` (returned a 4.6 KB client-side shell whose content fragment then returned HTTP 401), `https://www.adobe.com/legal/terms/enterprise-licensing.html` (403), `https://helpx.adobe.com/firefly/get-set-up/learn-the-basics/adobe-firefly-faq.html` (403), `https://helpx.adobe.com/in/firefly/...` (403) and `https://www.adobe.com/in/express/pricing` (403). **I therefore have no verified minimum age, no verified account rule, no verified price and no verified data-handling position for Adobe Express or Firefly.** I will not substitute a summary blog. **RECOMMENDATION: before Adobe appears in any lesson plan or proposal, read `adobe.com/legal/terms.html` from an ordinary browser on an Indian connection, find the clause about minors, and record the clause name and date in this file.** Until then, Adobe is demonstrable from the trainer's own existing account at the trainer's own risk, and **must not be named as a recommended tool to a school.**

**Cost in INR.** Unverified — pricing page blocked. A free tier exists; its generative-credit allowance is unverified.

**Offline?** No.

**Where student data goes.** Unverified.

**Features to demonstrate, and the exact words.** Only if the trainer already holds an account:

1. *Generate an image and show the content-credentials / "trained on licensed content" claim.* Say: **"Adobe says this was trained on pictures it had permission to use, so you may use the result in real work. That is their claim, printed by them. It is a claim about where the training pictures came from, and it is the kind of claim you should expect to see more of, because artists started suing."**
2. *Compare the same prompt in Canva and in Firefly.* Say: **"Two companies, two different machines, two different answers. There is no single 'the AI'. There are products, made by companies, with different training data and different rules."**

**What a student should understand afterwards.** Image generators differ in what they were trained on, and some companies now advertise that difference — because where the training pictures came from turned out to be a legal problem, not a technical one.

**The risk to name in class.** Say out loud: **"When a company tells you its AI is the safe one, that is marketing until you read the page yourself. I tried to read Adobe's rules for this class and their website would not let me. So I am telling you what I know and what I do not know, and 'I do not know' is an allowed answer in this room."**

**Status check.** Active, and **structurally unverifiable from here.** OPINION: given that Canva is in the same slot, needs no desktop install and has a teacher-managed education product, **Adobe adds cost and legal uncertainty without adding teaching value.** RECOMMENDATION: leave Adobe out of the kit. Keep it as a named example in a Grade 10 discussion about training data and copyright, where the *claim* is the teaching material.

---

## B9. Google Lens

**What it is.** Point your phone camera at something and it tells you what it is, reads text out of the picture, and translates signs.

**Grade band and delivery mode.** Grades 5–6 onwards. **Trainer-projected from the trainer's phone** — the single best five-minute AI demo available with no lab at all.

**Minimum age and account rule.** Governed by Google's Terms of Service, **"Age requirements"** section (`https://policies.google.com/terms?hl=en-IN`, read 21 Nov 2026). FACT, Lens product page (`https://lens.google/`, read 21 Nov 2026): Lens is available on desktop and through the Google app. **Unverified:** whether Lens has its own age-specific terms. **IN — practical note:** most pupils in these schools meet Lens on a parent's phone, so the governing account is a parent's. There is nothing for a school to provision, and nothing for a pupil to sign up for.

**Cost in INR.** Free. No tier, no cap.

**Offline?** No for the AI recognition. Google Translate's offline language packs (B10) cover some translation offline; Lens recognition needs the connection.

**Where student data goes.** **Unverified in detail** — I did not read a Lens-specific privacy page. ASSUMPTION, and tell pupils this honestly: the photograph is sent to Google's servers to be recognised, because the recognition does not happen on the phone. **RECOMMENDATION:** state it as an assumption, not a fact, and say so.

**Features to demonstrate, and the exact words.**

1. *Point it at a Telugu sign or a Telugu page and show the live translation.* Say: **"That is three AI systems stacked in one second. One found the letters in the photograph. One worked out which language. One translated it. Three separate machines, and you only pressed one button."**
2. *Point it at a leaf, then at a cracked wall, then at an unfamiliar object.* Say: **"It is good at leaves because people photograph leaves. Watch what it does with this." [point at something local and specific]. "Less good. The pattern today has been the same every time: it knows what it has seen a lot of."**
3. *Point it at a maths problem written on the board.* Say: **"It read my handwriting and solved it. So let us be honest with each other: the machine can do your homework. Which means homework is no longer the point — understanding it is, because the exam hall has no camera in it."**

**What a student should understand afterwards.** Your camera is now an AI input, and when you point it at something, that picture travels to a company's computer to be recognised.

**The risk to name in class.** Say out loud: **"This one is a camera, and a camera points at people. Do not Lens a person. Do not Lens someone's ID card, their marks sheet or their house. And remember that the picture leaves the phone — so pointing the camera is sending, not just looking."**

**Status check. STATUS CHANGE, and it matters for the Two-Account Rule.** FACT, read on `lens.google` 21 Nov 2026: Lens now advertises **"Create & transform images in Lens"** and a **new create mode** where you snap a photo and instantly change its style. **So Lens is no longer only a recognition tool — it now generates images.** OPINION: that quietly moves Lens from "safe recognition demo" towards "generative AI in a child's pocket". **RECOMMENDATION: keep the Lens demo, confine it to the recognition and translation features, and do not demonstrate create mode to Grades 5–8.** It also gives you an honest line to parents: generative AI is arriving inside apps their children already have, which is exactly why the programme teaches judgement rather than banning tools.

---

## B10. Google Translate

**What it is.** Translates text, speech, handwriting and photographs between languages — including Telugu — and can work offline once language packs are downloaded.

**Grade band and delivery mode.** Grades 5–6 onwards. **Trainer-projected, and genuinely useful in a Telugu-home-language, English-medium classroom.**

**Minimum age and account rule.** No account needed to translate. Governed by Google's Terms of Service, **"Age requirements"** section (`https://policies.google.com/terms?hl=en-IN`, read 21 Nov 2026). FACT, from the Google Translate help centre (`https://support.google.com/translate/answer/6142474?hl=en-IN`, read 21 Nov 2026): live speech-to-speech translation is documented as a current feature. **Unverified:** a Translate-specific age clause; I found none, and none is needed where no sign-in is required.

**Cost in INR.** Free. No tier, no cap.

**Offline? Partly, and this is why it earns a place.** FACT, widely documented by Google and consistent with the help centre: downloaded language packs allow offline text translation on mobile. **Unverified today:** whether Telugu's offline pack is current and complete. **RECOMMENDATION:** download the Telugu and Hindi packs on the trainer's phone before the first school visit and verify them in the car park, not in the classroom.

**Where student data goes.** **Unverified in detail.** ASSUMPTION: online translation sends your text to Google; offline translation does not. **RECOMMENDATION:** demonstrate the difference by switching aeroplane mode on — it is a vivid, honest demonstration of a data-flow concept and it takes ten seconds.

**Features to demonstrate, and the exact words.**

1. *Translate a Telugu idiom into English and back.* Say: **"Now back into Telugu. It is not the same sentence any more. The meaning bent. It translated the words, not what we meant — and in Telugu, what we mean is often not in the words."**
2. *Aeroplane mode, then translate.* Say: **"Internet off. It still works, because I downloaded Telugu onto this phone. And notice the quality dropped. The small version lives on the phone, the big version lives in a data centre. That trade — small and private versus big and sent away — is a real engineering decision, and you will make it one day."**
3. *Camera translation of an English textbook paragraph into Telugu.* Say: **"For anyone who understands the science but is fighting the English, this is a tool and not a cheat. Understanding the idea is the subject. English is the medium."**

**What a student should understand afterwards.** Translation AI swaps words well and meaning badly, and a smaller version can run on your phone with nothing sent away.

**The risk to name in class.** Say out loud: **"Do not translate anything private — a doctor's letter, a family message, anything about money. Online, it goes to a company. And never trust it for something that matters without a person who speaks both languages checking it."**

**Status check.** Active, long-lived, low churn. **IN — OPINION:** Telugu support plus offline packs make Translate more useful to this specific programme than any chatbot, because it addresses the real classroom problem: pupils who understand the science and are blocked by the English.

---

## B11. Microsoft Designer

**What it is.** Microsoft's AI design and image-generation website, the Canva-and-Firefly equivalent inside the Microsoft account a school tenant would already have.

**Grade band and delivery mode.** Grades 9–10. **Trainer-projected, or school tenant if the school runs Microsoft 365 Education.**

**Minimum age and account rule.** The page I read (`https://designer.microsoft.com/`, read 21 Nov 2026) is a 5 KB client-side shell with no age or terms text of its own — the only readable content is its title. Governed by the **Microsoft Services Agreement** (read 21 Nov 2026): age of majority where you live, or a parent or guardian accepting on the minor's behalf — which in India means **18, or a parent contracting for the child** (see B3). **Unverified:** any Designer-specific clause or education availability.

**Cost in INR.** Unverified. A free tier exists with a generative-credit allowance; the credit count and the India price are both unverified.

**Offline?** No.

**Where student data goes.** Unverified.

**Features to demonstrate, and the exact words.**

1. *Generate a poster for the school science fair, then point out what it got wrong about India.* Say: **"Same machine as before, different company. Look at the faces, look at the clothes, look at the building. This is a third company's AI making the same mistake about where we live."**
2. *Show it inside the Microsoft account the school may already own.* Say: **"If your school has Microsoft accounts, this is already paid for and already switched on. AI is arriving in schools not because anyone chose it but because it came bundled."**

**What a student should understand afterwards.** Every big company now has its own image generator, they all come bundled with accounts you already have, and they all draw your district badly.

**The risk to name in class.** Say out loud: **"It arriving bundled does not mean the school decided it was appropriate. Nobody chose this. Somebody should, and that somebody is a teacher and a parent — and now, a little bit, you."**

**Status check.** Active; Microsoft is folding Designer's capabilities into Copilot. **OPINION:** redundant alongside Canva for teaching purposes. **RECOMMENDATION: not in the kit.** Keep it as a one-slide "and Microsoft has one too" in a Grade 10 lesson about who makes these things.

---

## B12. An AI music tool — Suno

**What it is.** A website where you type a description of a song and it produces a complete song with music and sung words.

**Grade band and delivery mode.** Grades 7–8 and 9–10. **Trainer-projected only.** OPINION: use a single pre-generated clip rather than live generation — it saves four minutes of a 40-minute period and avoids whatever the model produces unprompted.

**Minimum age and account rule.** FACT, **Suno Terms of Service** (`https://suno.com/terms`, read 21 Nov 2026): you must be **18 or older with legal capacity**, **or at least 13 having read the terms with your parent or legal guardian having reviewed them and given express prior consent**; **under 13 you may not register, access or otherwise use the service in any capacity**; and separately, if you are under 18 you may use the service only with the express consent of a parent or guardian, and you agree to provide accurate information Suno requests to confirm that consent. **IN:** 13+ with verifiable parental consent — same shape as the DPDP Act's requirement, but there is no school-managed route and no way for a school to hold the consent. **Trainer's account only.**

**Cost in INR. Unverified — price rendered client-side.** A free tier exists with a daily generation allowance; the number is unverified. **RECOMMENDATION:** generate the demo clip the night before, so the daily cap cannot end your lesson.

**Offline?** No.

**Where student data goes.** FACT, Suno privacy policy (`https://suno.com/privacy`, read 21 Nov 2026): Suno uses user activity information, submissions, interactive chat information and other content to improve its services and **to train and enhance the models that power its services**, relying on legitimate interests; and it uses this information to provide and develop the services including to train and enhance those models. **No opt-out is described in the clauses I read.** **RECOMMENDATION:** treat everything typed into Suno as training data with no way back. Nothing of a pupil's goes in.

**Features to demonstrate, and the exact words.**

1. *Play 30 seconds of a clip you generated from a one-line prompt.* Say: **"Nobody sang that. No instrument was played. One sentence of typing. Now — before you decide whether that is amazing or frightening, hold on to one question: where did it learn to sing?"**
2. *Answer the question you just asked.* Say: **"It learnt from recordings of real musicians, and most of them were not asked. There are musicians in court about this right now. When you use one of these, you are standing in the middle of an argument that is not settled."**
3. *Ask the class the live question.* Say: **"If I sell that song, who gets paid? Say your answer out loud. There is no agreed answer yet — and the people who will decide it are roughly your age."**

**What a student should understand afterwards.** A computer can write and sing a whole song from one sentence, because it learnt from real musicians who mostly were not asked — and nobody has yet agreed who should be paid.

**The risk to name in class.** Say out loud: **"Suno's own policy says what you type is used to train their models, and it does not offer a way out. So nothing personal goes in. And do not enter a school competition with an AI song unless you have said clearly that it is AI — passing it off as yours is the kind of thing that follows you."**

**Status check.** Active, prominent, and the subject of ongoing copyright litigation. **FACT, confirmed by direct read:** 13+ with parental consent; trains on user content; no opt-out found. **RECOMMENDATION: one clip, one discussion, no accounts, no pupil input.** The music is not the lesson. The copyright argument is.

---

## B13. An AI voice tool — ElevenLabs

**What it is.** A website that reads text aloud in a very human-sounding voice, and can copy a specific person's voice from a short recording.

**Grade band and delivery mode.** Grades 7–8 and 9–10. **Trainer-projected only — and under the vendor's own terms, nobody in Grades 5–10 may use it at all.**

**Minimum age and account rule. FACT, and it is a hard no — ElevenLabs Terms of Use, section "Eligibility and Use Restrictions", sub-clause (a) "Age"** (`https://elevenlabs.io/terms-of-use`, read 21 Nov 2026): **if you are under 18 years of age, or the age of legal majority where you live, you may not use our services.** **No parental-consent route exists.** Same posture as Claude (B4). **IN:** in India that is 18, full stop, so every pupil in this programme is excluded. **Trainer's adult account only, and name the rule out loud.**

**Cost in INR. Unverified — price rendered client-side.** The pricing page I read contains dollar figures ranging from $0 through $5, $11, $22 and upward, and per-unit figures around $0.17–$0.36, but the HTML does not reliably bind each figure to a named plan or a billing period, so **I will not state which plan costs what.** No India pricing was readable. A free tier exists with a monthly character allowance; the allowance is unverified. **What breaks at the cap:** generation simply stops until the next period. **RECOMMENDATION:** pre-generate the demo audio file and play it from the laptop. Never generate live in front of a class.

**Offline?** No. The pre-generated audio file plays offline, which is the right way to use it in a school.

**Where student data goes.** FACT, ElevenLabs Terms of Use: ElevenLabs may process personal data relating to the operation, support or use of its services for its own business purposes, including data analysis, product development, **research and development of its AI models**, and improvement of its systems and technologies. **No pupil voice goes anywhere near this.**

**Features to demonstrate, and the exact words.**

1. *Play a pre-generated clip of a sentence read in a natural voice, without saying first that it is AI.* Then tell them. Say: **"That was not a person. Nobody recorded that. Now notice what just happened inside you — you believed it, completely, for ten seconds. That is the whole point of the demonstration."**
2. *Name the fraud, concretely and locally.* Say: **"A machine can copy a voice from a short clip. There are people in India right now getting a phone call in their son's voice, asking for money urgently. Go home today and tell your parents this: if a call sounds like me and asks for money, hang up and call me back on my number. Agree a family word that only we know. Do it tonight."**
3. *Show the 18+ clause on the vendor's own page.* Say: **"Read it. Eighteen, no exceptions, no parent's permission. The company that built this decided children should not have it. Think about what they know about their own product."**

**What a student should understand afterwards.** A computer can copy a real person's voice well enough to fool their family, so a voice on a phone is no longer proof of who is speaking.

**The risk to name in class.** Say out loud: **"This is the one I most want you to remember, and not for the exam. Voice-cloning fraud is happening to families in Telangana now. The defence is not technology. It is a code word with your family and the habit of hanging up and calling back."**

**Status check.** Active and commercially aggressive. **FACT, confirmed by direct read:** 18+ with no consent route — which makes this, with Claude, the second clean example of a tool that is simply closed to pupils. **RECOMMENDATION: one pre-generated clip, the fraud warning, the 18+ clause, and move on.** This dossier earns its place through the "tell your parents tonight" moment, which is the highest-value thirty seconds in the whole programme and will be repeated at home — which is also how you get parents on your side.

---

## B14. An AI video tool — Runway

**What it is.** A website that generates short video clips from a typed description or from a single photograph.

**Grade band and delivery mode.** Grades 9–10. **Trainer-projected, pre-generated clip only.**

**Minimum age and account rule.** FACT, **Runway Terms of Use** (`https://runwayml.com/terms-of-use`, read 21 Nov 2026): by accepting, you represent that **you are of legal age to form a binding contract with the company**; separately, the usage restrictions prohibit applications **directed to children under 18**. **IN — OPINION, labelled as inference:** Runway states no number. The age of legal capacity to contract in India is 18 under the Indian Contract Act, 1872, so **for an Indian pupil this functions as an 18+ service**, and the "not directed to children under 18" restriction points the same way. **Trainer's account only.** Note the asymmetry worth teaching: ElevenLabs writes "under 18 you may not"; Runway writes "you must be old enough to sign a contract" and leaves you to work out your own country's answer.

**Cost in INR. Unverified — price rendered client-side.** The pricing page contains dollar figures including $12, $15, $17, $21, $22, $26 and $228, but the HTML does not bind them reliably to named plans or billing periods, and no India pricing was readable. A free tier exists with a one-off credit allowance; the allowance is unverified. **What breaks at the cap:** generation stops. **RECOMMENDATION:** pre-generate one clip; never rely on live generation.

**Offline?** No. The downloaded clip plays offline.

**Where student data goes.** FACT, Runway privacy policy (`https://runwayml.com/privacy-policy`, read 21 Nov 2026): information about you is used to provide, operate and improve the service and the business; Runway and its analytics partners may analyse usage to improve the service, conduct research and develop new products and services; and aggregated, de-identified or anonymised data may be created from personal data collected. **Unverified:** whether user-submitted images and prompts are used to train Runway's video models, and whether an opt-out exists. **No pupil photograph goes into this. Ever.**

**Features to demonstrate, and the exact words.**

1. *Play a pre-generated five-second clip.* Say: **"Five seconds of video. No camera, no actor, no location. Watch the hands and watch the edges of things — that is where it still falls apart, today. Next year it will not."**
2. *Ask the only question that matters.* Say: **"If video can be made from a sentence, then video stops being proof of anything. For your whole lives, a video was evidence. That is ending while you are in school. So what counts as proof now? Who do you trust, and why?"**
3. *Teach one practical habit.* Say: **"When you see a shocking video, do not ask 'is it real'. Ask 'who posted it first, and what else have they posted'. That question works even when the video is perfect — because the forwarding chain is still made of people."**

**What a student should understand afterwards.** Video can now be generated from a sentence, so a video on your phone is not proof that something happened — the question to ask is who posted it and why.

**The risk to name in class.** Say out loud: **"The danger here is not that you will make a fake video. It is that you will believe one, forward it, and start something. In a Telangana village a forwarded video can get a person hurt. Before you forward, stop and find who posted it first. If you cannot find that, do not forward it."**

**Status check.** Active. **FACT, already known and consistent with what I read:** Replit is rejected for this programme — no free tier, now a commercial AI agent product — and Runway sits in the same category of commercial tool that is demonstrable but not teachable at scale. **RECOMMENDATION:** one clip, one discussion about evidence, no accounts. OPINION: this is the most important group (b) discussion for Grade 10 and the one most likely to still matter to these pupils in ten years.

---

## B15. Sarvam AI

**What it is.** An Indian AI company in Bengaluru building speech, translation and document models for Indian languages, including Telugu.

**Grade band and delivery mode.** Grades 9–10. **Trainer-projected.** OPINION: include this one for a reason that is not technical — these pupils should know that AI is built in India, by people whose names they can read, and not only in California.

**Minimum age and account rule. FACT, and this is the most DPDP-shaped clause I found anywhere — Sarvam AI Website Terms of Service, section 2 "Eligibility and Minimum Age"** (`https://www.sarvam.ai/terms-of-service`, read 21 Nov 2026): clause **2.2** — if you are **under the age of eighteen (18)** you may access or use the offerings **only where verifiable consent has been provided by your parent or lawful guardian, in accordance with applicable law, and only under their guidance and supervision**; a parent or guardian may be required to enter into the terms on your behalf and to exercise your rights and give consents in relation to your personal data; and if Sarvam becomes aware that a person under 18 has created an account or provided personal data otherwise than in accordance with the terms, it may **suspend or terminate the account and delete that data**. Clause **2.3** — you are responsible for ensuring those consents are obtained before an account is created for or used by a person under 18. FACT, same page: the contracting entity is **Axonwise Private Limited, doing business as Sarvam AI**, a company incorporated under the laws of India with its registered office in Bengaluru, Karnataka; the terms are **governed by the laws of India**; and the products named include Sarvam Voice Agents, Content Agents, Doc Agents, Sarvam Arya, Sarvam Indus, Sarvam Edge and developer APIs for text-to-speech, speech-to-text, document digitisation, translation and dubbing. **IN — OPINION: that clause is what an India-law-first consumer AI term looks like, and it is worth putting on a slide next to OpenAI's and Anthropic's for a Grade 10 comparison.** It is also why Sarvam belongs here even though it is a developer platform rather than a classroom tool: it is the clearest available demonstration that the DPDP Act's under-18 rule is already changing how products are written.

**Cost in INR.** Unverified. Sarvam's products are largely developer APIs priced per use; I did not read a pricing page. **Not a classroom purchase. Nothing to buy for this programme.**

**Offline?** No.

**Where student data goes.** **Unverified in detail** — I read the terms of service and saved the privacy policy but did not extract its data clauses on this pass. What is verified is the deletion commitment in clause 2.2 above. **No pupil data goes in regardless**, because this is a projected demo.

**Features to demonstrate, and the exact words.**

1. *Show Telugu speech-to-text or text-to-speech working on the Sarvam site.* Say: **"Telugu. Working properly. Most of the big American models treat Telugu as an afterthought, because there is far less Telugu on the internet than English. This was built by people in Bengaluru who cared about that — and that is why it is better at your language than the famous ones are."**
2. *Show clause 2.2 on the projector, in English, and read it.* Say: **"Read this with me. 'If you are under the age of eighteen.' An Indian company, writing to Indian law, about you. The American companies say thirteen. The Indian law says eighteen. Now you know why the rule in this class is the rule in this class."**
3. *Name the career, plainly.* Say: **"The people who built this were sitting in Bengaluru, and some of them studied at colleges you could get into. This is not a thing that only happens somewhere else."**

**What a student should understand afterwards.** AI for Indian languages is being built in India, and Indian law treats everyone under 18 as a child — which is why the rules in this class are stricter than what an American app's sign-up page says.

**The risk to name in class.** Say out loud: **"An Indian company is not automatically safer. It means Indian law applies and an Indian court can act, which is genuinely better for you. It does not mean you should type personal things into it. The same rule holds everywhere: if you would not put it on a noticeboard, do not type it."**

**Status check.** Active; the contracting entity **Axonwise Private Limited** is worth noting in your files since it differs from the trading name. **IN — RECOMMENDATION:** Sarvam is the right answer when a principal or parent asks "is there an Indian option?", and that question will be asked. Having a verified, India-law answer with the clause number in hand is worth more in that meeting than any feature comparison.

---

## B16. Bhashini

**What it is.** The Indian government's national language-translation platform, built to make government services work in Indian languages.

**Grade band and delivery mode.** Grades 9–10, **mentioned on a slide, not demonstrated.**

**Minimum age and account rule. UNVERIFIED — the site would not serve content to this sandbox.** `https://bhashini.gov.in/` and `https://bhashini.gov.in/terms-of-use` both returned a **773-byte empty shell** on 21 Nov 2026, and `https://bhashini.co.in/` returned 114 bytes. This matches the known constraint that Indian government domains are unreachable from here, so it is **logged as a failure and not retried.** No age clause, account rule or data position for Bhashini is verified in this document.

**Cost in INR.** **FACT, already known and carried forward with its label intact:** Bhashini's government terms restrict use to **non-commercial** purposes unless specifically authorised, and its public APIs are **proof-of-concept only** — not production services. **IN — RECOMMENDATION, and this is the decision:** a fee-charging programme must **not** build any teaching activity, demo or product on Bhashini's APIs. Same trap as Day of AI (A9), different owner. If you ever want it, apply for written authorisation first.

**The permissively licensed alternative. FACT, already known and carried forward:** the underlying translation model, **IndicTrans2 from AI4Bharat at IIT Madras**, is **permissively licensed and allows commercial use**. **Unverified today:** I reached `https://ai4bharat.iitm.ac.in/` successfully but the IndicTrans2 project page returned HTTP 404, so I could not re-read the licence line. **RECOMMENDATION:** if the programme ever needs Indian-language translation inside something it sells, use **IndicTrans2 directly** — self-hosted or via a permissively licensed distribution — and record the licence text in this file before building.

**Offline?** Not applicable.

**Where student data goes.** Unverified. Nothing goes in — this is a slide, not a tool.

**Features to demonstrate, and the exact words.** One slide, no live demo:

1. Say: **"The Government of India built a translation system so that a government website can speak Telugu, Tamil and twenty more languages. That is AI used as public infrastructure — like a road, not like a product."**
2. Say: **"And here is the catch I want you to see. It is free, and the rules say you may not use it to make money without permission. Free does not mean free to use for anything. Every tool we have looked at today came with rules, and the rules are written down, and you can read them."**

**What a student should understand afterwards.** Governments build AI too, and the rules that come with free tools decide what you are actually allowed to do with them.

**The risk to name in class.** Say out loud: **"There is nothing dangerous for you here. The risk is to people who build businesses without reading the licence, and then have to throw the work away. Read the rules first. That is a career skill and it is free."**

**Status check.** **IN — unverifiable from here.** Active as a national programme. **RECOMMENDATION:** re-verify the non-commercial restriction from an Indian network before mentioning Bhashini in any school-facing material, and keep the IndicTrans2 route as the commercially usable path.

---

## B17. AI inside everyday apps — what the AI is actually doing

**Why this section exists.** Every pupil in these classrooms uses five or six AI systems a day without ever opening an AI app. **OPINION: this is the single highest-value lesson in the Grades 5–6 and 7–8 syllabus**, because it needs no computers, no accounts, no internet and no vendor terms — it works with 45 pupils, a blackboard and 40 minutes — and it is the lesson that makes AI stop feeling like a foreign website and start feeling like something in their own hands. **Delivery mode: discussion, Grades 5–6 upwards, no device required.** No vendor terms are needed for this section and none were read for it.

### YouTube recommendations

**What the AI is actually doing.** It keeps a record of what you watched, how long you watched before leaving, what you skipped, and what people whose history looks like yours watched next. It then predicts which video will keep you watching longest, and puts that one first. **It is not choosing what is good. It is choosing what keeps you there**, because YouTube earns money from the time you spend.

**What a 12-year-old should understand.** The next video was chosen for you by a machine whose job is to stop you leaving — not to help you. That is why you look up and two hours are gone.

**Exact words.** Say: **"Hands up if you have ever opened YouTube for one video and looked up an hour later. Every hand. That is not weakness — that is a system that was built, tested and improved to do exactly that to you. Now the useful part: it learns from what you watch. So if you watch three videos about rockets, it will offer you rockets. You cannot switch the machine off, but you can feed it. Your feed is a thing you are allowed to steer."**

### Google Maps routing

**What the AI is actually doing.** It holds a map as a network of road segments, and it is constantly estimating how long each segment will take right now — using the speeds of anonymised phones moving along those roads, the time of day, the day of the week, and the history of that road. Then it searches for the quickest combination. **The clever part is not the map. It is the live prediction.**

**What a 12-year-old should understand.** Maps knows the Hyderabad traffic because thousands of phones on that road are reporting how fast they are moving — including the phone in your father's pocket.

**Exact words.** Say: **"How does it know there is a jam on the ORR? Nobody phoned it. It knows because hundreds of phones on that road are moving at 8 kilometres an hour, and it can see that. You are a traffic sensor. Everyone in this room whose family has a phone is a traffic sensor. That is the deal: you get the route, it gets your speed and your position."**

### Instagram and Snapchat filters

**What the AI is actually doing.** A face-landmark model finds roughly 70 points on your face — corners of eyes, edges of lips, bridge of nose — many times per second, and the filter is drawn onto those moving points. Beauty filters additionally smooth skin and reshape the jaw and eyes towards an average the model was trained to treat as attractive.

**What a 12-year-old should understand.** The filter is tracking real points on your real face, and a beauty filter is quietly moving your face towards somebody else's idea of a good face.

**Exact words.** Say: **"The filter is not a sticker. It is finding about seventy points on your face, thirty times a second, which is why it stays on when you turn your head. Now the part nobody tells you: the beauty filter does not just brighten. It narrows your nose and lightens your skin, because somebody chose what 'better' means and wrote it into the code. When you see a face online, you are often looking at a machine's opinion of a face. Including your own."**

### UPI fraud alerts

**What the AI is actually doing.** A model has learnt what your normal payments look like — usual amounts, usual recipients, usual times, usual places and devices. When a payment sits far outside that pattern, it is scored as risky, and the bank then slows it down, asks for another check, or blocks it. **The AI is not reading your messages. It is comparing this payment with your own history.**

**What a 12-year-old should understand.** Your bank's computer has learnt your normal spending, and it stops things that do not look like you — which is helpful, and which also means it knows your pattern.

**Exact words.** Say: **"Every UPI payment your family makes is being checked by an AI in about a tenth of a second. It has learnt what normal looks like for your family. A payment at three in the morning to a new person for a large amount does not look normal, so it gets stopped. This is AI protecting people, today, in India, at the scale of hundreds of millions — and it is the same technique as the fish game: learn the pattern, flag the odd one out. Also notice: for it to know your normal, somebody had to record your normal."**

### Email spam filters

**What the AI is actually doing.** The oldest working machine-learning system most pupils touch. It has seen hundreds of millions of emails labelled spam or not-spam by real people clicking a button, and it learnt which words, senders, links and patterns go with each label. Every time somebody marks a message as spam, it learns a little more.

**What a 12-year-old should understand.** The spam folder works because millions of people pressed a "this is spam" button, and the machine learnt from their clicks — exactly like the fish game.

**Exact words.** Say: **"Your spam folder is machine learning, and it is older than most of you. Here is the loop: somebody gets a fraud email, presses 'spam', and the machine learns. A million people do that, and the machine gets good. Two things follow. One — this is the same thing we did with the fish, at enormous scale. Two — when you press that button, you are working for free, and so is everyone. AI is built out of millions of small human clicks, and that is true of every single tool we have looked at today."**

**The through-line to say at the end of this lesson.** Say: **"Count them. YouTube, Maps, the camera filter, your family's UPI, the spam folder. Five AI systems, before breakfast, and you did not open a single AI app. So when somebody tells you AI is coming — it came. It is already deciding what you watch, which road you take, what your face looks like, which payment goes through and which letter you ever see. Your job in this course is not to be amazed by it. It is to know what it is doing, and to be the person in the room who asks who chose."**

---

# 1. The final kit per grade

**Design rule.** One new tool enters each year, nothing is ever discarded, and every year revisits the previous years' tools at a harder level. Six years, six entries, so a Grade 10 pupil has used six tools for up to six years rather than twenty tools for one lesson each. **OPINION: that is the difference between a programme and a tour.** A trainer who can teach six tools properly can be hired and trained in weeks; a trainer who needs twenty cannot.

**What is counted here.** Only group (a) — tools pupils touch. **Group (b) is not part of the kit.** Those are trainer-projected demonstrations on the trainer's own adult account, and they cost nothing, need no lab and add no training burden. Budget zero for them beyond one paid ChatGPT seat and one paid Gemini seat for the business.

## The ladder — which tool enters when

| Year | New tool entering | Why this year | Churn risk | Named substitute |
|---|---|---|---|---|
| **Grade 5** | **Unplugged everyday-AI** (B17 discussion — YouTube, Maps, filters, UPI, spam) | No device, no account, no bandwidth; works with 45 pupils and a blackboard; establishes that AI is already theirs | **None** — it is a lesson, not a product | Not needed |
| **Grade 6** | **Teachable Machine** | First hands-on training of a model; two classes, ten photos, 15 minutes; no account | **High** — frozen since Feb 2023, not archived | **micro:bit CreateAI**, else **Machine Learning for Kids** |
| **Grade 7** | **Machine Learning for Kids** | Teacher-issued logins, four data types, and the bridge into Scratch so AI stops being a website | **Low–medium** — actively maintained, small team | **PictoBlox** once its terms are verified, else **micro:bit CreateAI** |
| **Grade 8** | **micro:bit CreateAI** | Model leaves the browser and runs on a physical board; best data story in the programme | **Lowest** — active, MIT-licensed, self-hostable | **Machine Learning for Kids** sound projects |
| **Grade 9** | **Orange Data Mining** | Real data pipelines, readable decision trees, pairs with data.gov.in; portable build defeats no-admin-rights | **Very low** — GPL, university-backed, 20 years old | None needed; GPL means it cannot be taken away |
| **Grade 10** | **Thonny** | Text Python with a visible debugger; replaces the withdrawn Colab plan; portable, offline | **Very low** | IDLE (ships with Python), or RPF **Code Classroom** once verified |

## Grades 5–6 — four tools

1. **Unplugged everyday-AI discussion** *(enters Grade 5)* — core spine. No device.
2. **Quick, Draw! + AutoDraw** *(Grade 5, first lesson only)* — one five-minute hook. Treat the pair as one slot. Fully disposable.
3. **Teachable Machine** *(enters Grade 6)* — the year's hands-on centrepiece.
4. **CodeAI — AI for Oceans** *(Grade 6)* — run with **no accounts**; progress is not saved and does not need to be.

**IN — delivery note.** Everything here runs in Chrome on a shared PC with no install and no login. On 20 machines and a contended 10 Mbps link, open every tab before the period starts. Budget: **₹0.**

## Grades 7–8 — five tools

1. **Machine Learning for Kids** *(enters Grade 7)* — the spine of these two years. Images, sounds and numbers only; **no text projects in year one** (no IBM key to maintain) and **no "generating text" projects ever** (that is generative AI, which pupils do not touch).
2. **micro:bit CreateAI** *(enters Grade 8)* — hardware year. 10 boards per lab set.
3. **Teachable Machine** *(continuing)* — now used to deliberately build and then diagnose a biased classifier, not just to train one.
4. **CodeAI — AI for Oceans and one Hour of AI module** *(continuing)* — the bias stage becomes the assessed activity.
5. **Unplugged everyday-AI** *(continuing)* — same five systems, harder questions: who profits, who is measured, who decides.

**IN — delivery notes.** Get `machinelearningforkids.co.uk` **and `challenges.cloudflare.com`** allowed on the school network in writing before the first lesson — the Cloudflare check is a documented failure mode on managed school networks and it will cost you a period. Use **cloud** storage for any project spanning two periods and **browser** storage only within a single period, and seat pupils in fixed places either way.
**Budget:** ₹0 software; **₹20,000–28,000 once** for 10 micro:bit v2 boards (ESTIMATE, verify against an Indian reseller quote), reusable across every section and every year.

## Grades 9–10 — five tools

1. **Orange Data Mining** *(enters Grade 9)* — portable build from a pen drive. Datasets from **data.gov.in**, which is commercially reusable under its gazette-notified licence, as is Orange under GPL — so this whole strand is commercially clean.
2. **Thonny** *(enters Grade 10)* — portable build. **This replaces Google Colab in the venture's existing Grades 9–10 plan; Colab's AI features are 18+ and Colab Pro for Education is withdrawn.**
3. **Machine Learning for Kids** *(continuing)* — now via its **Python** export rather than Scratch, which hands pupils directly to Thonny.
4. **micro:bit CreateAI** *(continuing)* — now the hardware half of a science-fair or competition project.
5. **Experience AI materials** *(Grades 9–10, trainer-led)* — the written spine for the concept lessons: download once, deliver from a pen drive and a projector, zero bandwidth. **Confirm the licence on a downloaded pack before using it in a paid class.**

**IN — delivery notes.** Both new tools here are **portable builds that need no administrator password**, which is the decisive reason they are in this kit and a cloud notebook is not. Both run with the internet unplugged, which removes bandwidth from the two most demanding years. Carry both ZIPs on every trainer's pen drive and prove them during the pre-signing site survey. **Budget: ₹0 software, ₹0 licences, no tenant required.**

## What this kit does not need

No Google Workspace tenant. No Microsoft 365 tenant. No pupil email addresses. No pupil accounts on any consumer AI service. No administrator password on any lab PC. **IN — OPINION: say that sentence in the school meeting.** A budget-to-mid-fee CBSE school's first fear about an AI programme is that it will require IT work the school cannot do, and the honest answer here is that it requires a projector, Chrome, one allowed hostname and a pen drive.

## The five pre-signing site-survey checks

**RECOMMENDATION:** a trainer stands in the actual lab and records yes or no, per school, before anything is signed.

1. Does the **portable Orange ZIP** unzip and run without an administrator password?
2. Does the **portable Thonny ZIP** run, and does the lesson code work on the oldest PC in the room? (The installer requires Windows 10 or 11; the oldest machines may not qualify.)
3. Is **`challenges.cloudflare.com`** reachable, and will the school put it and `machinelearningforkids.co.uk` on the allow-list in writing?
4. With **20 machines loading at once**, how long does Teachable Machine take to become usable? (If over five minutes, move it to trainer-projected for that school.)
5. Is there a working **projector** with sound, and a surface a class of 45 can actually see?

---

# 2. The do-not-use list

One disqualifying reason each. Where a tool is still useful in some narrower way, that is stated — but it does not go in a pupil's hands.

| Tool | ONE disqualifying reason |
|---|---|
| **Claude (Anthropic)** | 18+ with **no parental-consent route** in its Consumer Terms, so no pupil in Grades 5–10 may lawfully hold an account. *(Keep as a 30-second terms-reading exercise on the projector.)* |
| **ElevenLabs** | Terms state that under 18 **you may not use our services** — no consent route, no exceptions. *(Keep one pre-generated clip for the voice-fraud warning.)* |
| **Runway** | Requires legal capacity to contract, which in India is 18, and its usage policy bars applications directed to children under 18. *(Keep one pre-generated clip for the "video is no longer proof" discussion.)* |
| **Suno** | Its privacy policy states user submissions are used to train its models and **describes no opt-out**. *(Keep one pre-generated clip for the copyright discussion.)* |
| **Day of AI (MIT RAISE)** | **CC BY-NC-SA 4.0, and MIT's own published interpretation gives the exact example of a fee-charging training business being prohibited** — so it cannot lawfully underpin a ₹5,000-per-pupil programme. *(Permitted by MIT's own wording for internal trainer development.)* |
| **CodeAI curriculum materials** *(as adapted content, not as a website)* | Curriculum and tutorial materials are **CC BY-NC-SA 4.0** and videos **CC BY-NC-ND 4.0**, so they must not be rebuilt into paid course material. *(Sending pupils to the free website during class is a different thing and remains in the kit.)* |
| **Bhashini** | Its government terms restrict it to **non-commercial** use unless specifically authorised, and its public APIs are proof-of-concept only. *(Use **IndicTrans2** from AI4Bharat instead, which is permissively licensed for commercial use — re-verify the licence text first.)* |
| **Google Colab** | Its AI features are **18+** and **Colab Pro for Education has been withdrawn**, so it cannot carry Grades 9–10 Python. *(Replaced in this kit by Thonny plus Orange.)* |
| **Replit** | **No free tier** — it is now a commercial AI agent product, so it cannot run in a budget-to-mid-fee school lab. |
| **CapCut** | **Trains on user uploads with no opt-out**, which disqualifies it for anything a pupil makes or appears in. |
| **Socratic by Google** | **Discontinued** — it now redirects to Google Lens, so there is no product to teach. |
| **Semantris** | **Structurally abandoned** — still serving, nobody maintaining it, in the same archived-experiments family as the retired Experiments with Google AI collection. |
| **Khanmigo** | **Teacher-only in India** — student access requires US residence, so no pupil here can use it. *(Usable by a trainer for their own lesson preparation.)* |
| **Adobe Express / Firefly** | **Terms unreadable** — every Adobe legal, help and pricing page returned HTTP 403 on 21 Nov 2026, so no minimum age, price or data position can be verified, and an unverifiable tool cannot be recommended to a school. |
| **Microsoft Designer** | **Redundant** against Canva in the same teaching slot, while adding a second vendor's unverified data position for no additional learning. |
| **Audacity 4.x** *(the version, not the program)* | **Adds cloud sign-up, audio.com publishing and a paid-effects storefront** in front of pupils, and OpenVINO plugin support for 4.x is unverified. *(Pin **3.7.x** from the vendor's older-versions page, which is in the kit.)* |
| **Machine Learning for Kids "generating text" projects** *(the project type, not the tool)* | It is **generative AI**, which Grades 5–8 may not touch under the Two-Account Rule and Grades 9–10 may touch only on a school tenant. *(The tool itself stays; this project type is switched off in the teacher admin page.)* |
| **PictoBlox** — *provisionally, pending verification* | **Terms unreadable from here and it is a desktop install** — thestempedia.com timed out on every attempt, and the brief states there are no admin rights on lab PCs. *(Not a permanent rejection. Re-verify from an Indian network and test an install during the site survey; if both clear, it is a strong Grade 7–8 candidate.)* |

---

# Appendix — vendor pages read and saved

All pages fetched **21 November 2026**, saved under `/home/claude/RAD-SCHOOLS/ai/platforms-and-tools/<tool-slug>/` with filenames of the form `<page>-2026-11-21.html`. **91 files were written. I then opened and inspected every one of them.** 78 carry real page content and are usable evidence; **13 are error or challenge pages that the server returned with a 200-looking body or that I kept deliberately as proof of the block.** Both lists are below, because a saved file that is really a 404 is worse than no file at all if nobody says so.

## Usable evidence — 78 files

**Group (a).**
- `teachable-machine/` — home shell, `/faq/` shell (an "isn't supported here" page), and the 1.99 MB application bundle. **The FAQ prose was not obtainable; see A1.**
- `machine-learning-for-kids/` — three hash-route fetches (all the same application shell), four Angular route templates, and **`mlforkids-strings-en-2026-11-21.json` (193 KB) — the file that actually holds this product's rules, and the primary source for everything in A2.**
- `microbit-createai/` — **terms-of-use (336 KB)**, **privacy (349 KB, the local-storage finding)**, and the CreateAI application shell whose header comment carries the MIT licence notice.
- `quick-draw/` — home, data. `autodraw/` — home.
- `codeai/` — **tos (549 KB, the licence table)**, **privacy (857 KB)**, home, ai-oceans, hourofai, curriculum-catalog.
- `experience-ai/` — home, about, **raspberrypi.org privacy (134 KB, the Code Classroom finding)**.
- `day-of-ai/` — **terms (41 KB, the CC BY-NC-SA finding and MIT's own non-commercial interpretation)**, home, privacy, curriculum.
- `orange-data-mining/` — **license**, **download (the no-admin and portable findings)**, home.
- `thonny/` — home (version and portable-build findings).
- `ollama/` — terms (18+ finding), privacy (the "we don't see your prompts when you run locally" finding).
- `audacity-openvino/` — **download (current version 4.0.2)**, **older-versions (3.7.0–3.7.9 all available)**, audacity-4 marketing page, archived Audacity 3 desktop privacy notice.

**Group (b).**
- `chatgpt-openai/` — **row-terms-of-use (the 13+/under-18 clause)**, terms-of-use, row-privacy-policy, pricing (plan structure and the US-only ChatGPT for Teachers finding).
- `google-gemini/` — **gemini-age-requirements (the single most useful age clause here)**, **gemini-apps-privacy (human reviewers, two-month retention)**, google-tos, google-one-ai-plans, workspace-edu admin page.
- `microsoft-copilot/` — **services-agreement (age of majority clause)**, **copilotpro store page and the M365 comparison page — the only verified INR prices in this document**, copilot home.
- `claude-anthropic/` — **consumer-terms (the 18+, no-consent-route clause)**, privacy, pricing.
- `perplexity/` — **terms-of-service (13+, parent accepts)**, privacy-policy.
- `notebooklm/` — **help FAQ (1.52 MB — the Gemini Notebook rename evidence)**, notebooklm.google home (title now reads "Gemini Notebook").
- `canva/` — **privacy-policy (458 KB; the Canva Education and under-13 definitions)**. This is the only Canva page that was served.
- `google-lens/` — home (the new generative "create mode" finding). `google-translate/` — home, privacy help.
- `microsoft-designer/` — home (a 5 KB shell, title only).
- `suno-music/` — **terms (13+ with parental consent)**, **privacy (trains on submissions, no opt-out found)**.
- `elevenlabs-voice/` — **terms-of-use (the hard 18+ clause)**, privacy-policy, pricing.
- `runway-video/` — **terms-of-use (legal-capacity clause)**, privacy-policy, pricing.
- `sarvam-ai/` — **terms-of-service (clause 2.2, the under-18 verifiable-consent clause)**, privacy-policy, home.
- `ai4bharat/` — site home.

## Saved, but the file is an error or challenge page — 13 files

These exist on disk and must not be cited as evidence. They are kept because they are proof of the block, which is itself a finding.

| File | What it actually contains |
|---|---|
| `canva/canva-terms-2026-11-21.html` | Canva's Cloudflare challenge page: "Enable JavaScript and cookies to continue" (served with HTTP 403) |
| `canva/canva-education-2026-11-21.html` | Same challenge page |
| `canva/canva-pricing-in-2026-11-21.html` | Same challenge page |
| `adobe-express-firefly/adobe-general-terms-2026-11-21.html` | Body text is "401 Unauthorized" |
| `adobe-express-firefly/adobe-general-terms-fragment-2026-11-21.html` | 16 bytes: "401 Unauthorized" |
| `microsoft-copilot/ms-copilot-pricing-in-2026-11-21.html` | Microsoft "Page cannot be found" (HTTP 404) |
| `google-gemini/gemini-teens-2026-11-21.html` | "Sorry, this page can't be found" — Gemini Apps Help 404 |
| `experience-ai/rpf-terms-2026-11-21.html` | Raspberry Pi Foundation "Page not found" |
| `experience-ai/experience-ai-lessons-2026-11-21.html` | "The page you were looking for doesn't exist (404)" |
| `audacity-openvino/audacity-privacy-current-2026-11-21.html` | Audacity "Page Not Found" 404 |
| `audacity-openvino/audacity-openvino-effects-2026-11-21.html` | Empty "Audacity Support" shell, no content |
| `ai4bharat/ai4bharat-indictrans2-2026-11-21.html` | "404: This page could not be found" |
| `bhashini/bhashini-home` and `bhashini-shell-2026-11-21.html` | 114 bytes, and "You need to enable JavaScript to run this app" |

## Fetches that returned nothing at all — no file written

| URL | Result |
|---|---|
| `thestempedia.com/terms-and-conditions/` | HTTP 000 — timed out after 40–45 s |
| `thestempedia.com/privacy-policy/` | HTTP 000 — timed out |
| `thestempedia.com/product/pictoblox/` | HTTP 000 — timed out |
| `thestempedia.com/` | HTTP 000 — timed out |
| `codeclassroom.raspberrypi.org/` | HTTP 000 — CONNECT tunnel failed (502) |
| `github.com/openai/whisper` | HTTP 403 from the proxy; `gh api` reports the repository is not enabled for this session |
| `github.com/intel/openvino-plugins-ai-audacity` | Same |
| `www.adobe.com/legal/terms/enterprise-licensing.html` | HTTP 403 |
| `helpx.adobe.com/firefly/.../adobe-firefly-faq.html` and the `/in/` path | HTTP 403 |
| `www.adobe.com/in/express/pricing` | HTTP 403 |
| `www.canva.com/en_in/policies/terms-of-use/` | HTTP 403 |
| `www.canva.com/help/canva-for-education-eligibility/` | HTTP 403 |
| `raspberrypi.org/terms-and-conditions/` and `/terms-conditions/` | HTTP 404 on both |
| `microbit.org/projects/make-it-code-it/microbit-createai/`, `microbit.org/get-started/user-guide/createai/`, `microbit.org/terms-and-conditions/` | HTTP 404 on all three (the correct pages are `microbit.org/terms-of-use/` and `/privacy/`, both of which were served) |
| `bhashini.co.in/` | HTTP 200, 114 bytes |

**Blocked hosts, reported rather than worked around:** `github.com` (not enabled for this session), `www.adobe.com` and `helpx.adobe.com` (HTTP 403), `www.canva.com` for everything except its privacy policy (HTTP 403 Cloudflare challenge). **Unreachable from this sandbox:** `thestempedia.com`, `codeclassroom.raspberrypi.org`, and the `.gov.in` Bhashini domain — the last consistent with the known `.nic.in` / Indian-government-domain limitation, and logged rather than retried.

## Things that must be verified before June 2027

**RECOMMENDATION — each needs a named owner and a date.**

1. **Every paid price except Microsoft's, in INR, from the live vendor page, screenshotted and dated.** Only the Microsoft 365 figures in B3 are verified; every other paid price in this document is blank on purpose.
2. **Adobe's minimum-age clause**, read from an ordinary Indian browser — or drop Adobe permanently.
3. **Canva's terms of use and Canva Education eligibility for Indian private-school teachers** — potentially a free, teacher-managed design environment, currently unverifiable.
4. **PictoBlox terms, price and a real install test** on a no-admin lab PC, from an Indian network.
5. **Experience AI's content licence**, read off a downloaded lesson pack — after what CodeAI and Day of AI turned out to say, assume nothing.
6. **Raspberry Pi Code Classroom** — age rule, price, India availability. If it works, Grades 9–10 get teacher-issued accounts with the school as data controller and no Google or Microsoft tenant.
7. **Intel OpenVINO plugin support for Audacity 4**, from a network that can reach GitHub. Until then, pin 3.7.x.
8. **The micro:bit v2 board price in India**, from a live reseller quote — the only hardware line in the kit.
9. **The DPDP children's-data commencement date**, re-checked against an official gazette notification rather than a computation plus a reported statement.
10. **A lawyer's view on using free NC-licensed curricula alongside a fee-charging programme** — this is the largest unpriced risk found in this research.

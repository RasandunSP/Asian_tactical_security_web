# 📄 TST Website UI Plan (Single-Page Scroll) - Shadcn Blocks Edition

This document outlines the UI plan for the Asian Tactical Security Training (TST) website, structured as a **single-page application** using vertical scrolling. The design adheres to a **light theme** and specifies the exact **shadcn/ui blocks** requested for each section.

---

## 🎨 Design System & Layout

| Feature | Specification | Rationale |
| :--- | :--- | :--- |
| **Theme** | Light Theme Only | Adheres strictly to user requirement for professionalism and clarity. |
| **Color Palette** | Primary Accent: Gold/Bronze (`#B8860B`); Background: White/Off-White (`#F9FAFB`); Text: Dark Gray (`#1F2937`) | Reflects the logo's color and ensures high readability. |
| **Structure** | Single-Page Vertical Scroll | Meets the user's specific request for a one-page layout. |
| **Framework** | Next.js, shadcn/ui, Tailwind CSS | Modular and high-quality UI development approach. |

---

## 🧭 Navigation and Structure

The persistent header will contain anchor links that smoothly scroll the user to the corresponding section ID on the single page.

### 1. Header (Sticky Navbar)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/navbar1`
* **Elements:**
    * [cite_start]Logo (ASIAN TACTICAL SECURITY TRAINING PVT LTD - TST [cite: 1, 2]).
    * **Scroll Links:** `Home` (`#home`), `About Us` (`#about`), `Why Us` (`#why-us`), `Services` (`#services`), `Clients` (`#clients`), `Contact` (`#contact`).
    * **CTA Button:** "Inquire Now" (Primary Gold/Bronze color).

---

## 📝 Section Breakdown (Scroll Order)

[cite_start]The single page will flow logically, using the specified shadcn blocks for structure and drawing content from the provided PDF[cite: 5, 26, 36, 46].

### Section A: Home / Hero (ID: `#home`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/hero3`
* **Content:**
    * **Headline:** **PREPAREDNESS. PROTECTION. [cite_start]PERFORMANCE.** [cite: 3]
    * [cite_start]**Subtext:** To empower individuals and organizations with practical, effective, and ethical tactical training that enhances safety, builds resilience, and prepares them to respond confidently to real-world threats[cite: 15].
    * **CTA:** "View Services" (links to `#services`).

### Section B: About Us (ID: `#about`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/about3`
* **Content:**
    * **Title:** About Asian Tactical Security Training Pvt Ltd
    * [cite_start]**Body:** A specialized tactical training company based in Asia[cite: 6]. [cite_start]It was founded by professionals from the military & law enforcement[cite: 7]. [cite_start]We focus on realistic, legal, and effective defence training [cite: 8][cite_start], serving police, private security, corporate clients, and civilians[cite: 9].
    * [cite_start]**Snapshot:** Expertise in Krav Maga, arrest & control, and threat analysis[cite: 10].

### Section C: Why Us (ID: `#why-us`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/feature43`
* **Content (Focusing on Mission, Vision, & Core Values):**
    * [cite_start]**Title:** Our Commitment: Strength, Precision, Integrity[cite: 1].
    * **Key Points (Features):**
        1.  [cite_start]**Integrity & Discipline:** Guided by Core Values like Integrity and Discipline[cite: 19, 20].
        2.  [cite_start]**Preparedness & Accountability:** Committed to enhancing safety, readiness, and professionalism [cite: 11] [cite_start]through Preparedness and Accountability[cite: 24, 25].
        3.  [cite_start]**Excellence & Vision:** To be Asia's leading authority in tactical defense and security training, recognized for professionalism, innovation, and dedication[cite: 17, 21].
        4.  [cite_start]**Professional Expertise:** Founded by military & law enforcement professionals[cite: 7].

### Section D: Services (ID: `#services`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/feature13`
* [cite_start]**Content (Displayed as Cards/Features):** Showcase the comprehensive service overview[cite: 26]:
    1.  [cite_start]**Law Enforcement Tactical Training:** Enhance the effectiveness, safety, and professionalism of police and security forces[cite: 37].
    2.  [cite_start]**Close Protection Training:** Elite-level training for high-stakes environments where personal security is paramount[cite: 39, 40].
    3.  [cite_start]**Commercial Security Services Training:** Focuses on raising the standards of private security personnel operating in commercial establishments[cite: 42, 43].
    4.  [cite_start]**Civilian Self-Defence (Krav Maga):** Covers self-defence, arrest & control, and threat analysis[cite: 10, 28].
    5.  [cite_start]**Risk Assessment & Threat Analysis:** A core service offering[cite: 30].
    6.  [cite_start]**Tactical Workshops & Seminars:** Offered for specialized instruction[cite: 32].
    7.  [cite_start]**Consulting & Program Development:** Tailored security and training program development[cite: 33].

### Section E: Clients (ID: `#clients`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/logos8`
* **Content:**
    * [cite_start]**Title:** Our Trusted Clients in Sri Lanka [cite: 46]
    * [cite_start]**Text:** We proudly provide tactical and security training services to some of the most elite and respected defence and law enforcement units in Sri Lanka [cite: 47][cite_start], including **Sri Lankan Forces and Law Enforcement Units**[cite: 48].
    * **Logos:** A small **marquee** (scrolling) area of placeholder logos representing the elite clients.

### Section F: Meet the Team (ID: `#team`)

* **Shadcn Block Command:** `npx shadcn add @shadcnblocks/team1`
* **Content:**
    * **Title:** Our Leadership
    * [cite_start]**Details:** Profiles of the founding professionals from the military & law enforcement[cite: 7]. (Placeholder information will be used for profiles).

### Section G: Contact Us (ID: `#contact`)

* **Purpose:** Final call to action and information capture.
* **Shadcn Block:** A dedicated **Contact Form Block** (e.g., combining inputs and a CTA button).
* **Content:** Form for inquiry (Name, Email, Organization, Message), and contact information.

### Footer

* **Shadcn Block:** A basic **Footer** block.
* [cite_start]**Content:** Copyright, quick links, and the motto: **STRENGTH $\cdot$ PRECISION $\cdot$ INTEGRITY**[cite: 1].
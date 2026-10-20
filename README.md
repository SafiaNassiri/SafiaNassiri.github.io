# Safia Nassiri | Software Engineer & Gameplay Developer

Portfolio repository showcasing modular game systems, autonomous simulations, production full-stack client web applications, and low-level architectures.

**Live Site:** [https://safianassiri.github.io/](https://safianassiri.github.io/)[cite: 16]

---

## Overview

I am a Computer Science graduate student (M.S. / B.S.) at Rowan University, Assistant Tech Lead at the Rowan University TechLounge & MakerSpace[cite: 11, 16], and Lead Systems Developer on *Axe-A-Lot*. My technical focus bridges gameplay architecture (FSMs, decoupled event buses, pathfinding simulations)[cite: 10, 16], low-level operating system design (*TxCyOS*), and full-stack web applications[cite: 16].

## Key Features

- **Multi-Route Navigation & Scroll-Spy:** Vanilla JS route matcher that highlights active pages (`Home`, `Projects`, `Games`, `Experience`)[cite: 4, 8] with a mint underline indicator, complete with scroll-spy synchronization for single-page hash targets[cite: 8, 9].
- **Interactive Multi-Filter Catalog:** Dynamically categorizes 24+ software, game, and systems repositories on the homepage[cite: 16] (All / Games / Web / Systems) and subpages[cite: 5, 6] (Released / Game Jam / Prototype / In Dev)[cite: 5].
- **LinkedIn-Aligned Evergreen Palette:** Styled via CSS custom properties in `assets/css/style.css`[cite: 9] matching nocturnal evergreen (`#081711`), canopy forest (`#143527`), silvery mint (`#78b598`), and cream text (`#e6f0eb`)[cite: 9].
- **Zero-Framework Architecture:** Handcrafted purely with semantic HTML5, modern CSS Grid/Flexbox[cite: 9], and modular ES6 JavaScript[cite: 8].
- **Fixed-Nav Clearance:** Built-in viewport clearance across all subpage heroes to prevent content obstruction beneath fixed headers[cite: 9].

## Tech Stack

- **Languages:** C#, C/C++, Rust, Python, GDScript, Lua, Java, PHP 8.4+, JavaScript (ES6+), SQL, HTML5/CSS3
- **Engines & Tools:** Unity, Godot 4, Love2D, Pygame, Git/GitHub, Docker, Linux, Node.js, Express, React, MongoDB
- **Typography:** Cormorant Garamond & DM Mono via Google Fonts[cite: 9]

## Project Structure

```text
/
├── assets/
│   ├── css/
│   │   └── style.css       # Unified design system and LinkedIn palette[cite: 9]
│   ├── js/
│   │   └── main.js          # Route matching, scroll-spy, and filter logic[cite: 8]
│   ├── images/              # Project screenshots, banners, and media
│   └── resume/
│       └── SafiaNassiri_Resume_Fall2025.pdf[cite: 7]
├── pages/
│   ├── projects.html        # Software engineering & full-stack showcase
│   ├── games.html           # 2D/3D games, prototypes, and jam submissions[cite: 5]
│   ├── experience.html      # Roles, leadership, skills matrix & education
│   └── resume.html          # PDF embed viewer and direct download[cite: 7]
├── index.html               # Main portfolio landing with 24-project filter[cite: 16]
└── README.md

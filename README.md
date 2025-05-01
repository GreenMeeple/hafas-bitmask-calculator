# HAFAS Bitmask Calculator

**[Web Demo](https://greenmeeple.github.io/hafas-bitmask-calculator/)**

![](https://raw.githubusercontent.com/GreenMeeple/hafas-bitmask-calculator/refs/heads/main/react/src/assets/demo.png)

This is a simple web-based tool to help you **decode** and **encode** bitmasks used by the [HAFAS](https://de.wikipedia.org/wiki/HAFAS) (HaCon Fahrplan-Auskunfts-System) API.  
It visually maps a decimal bitmask to the transport modes it represents and vice versa.

## 🔍 What is HAFAS?

HAFAS is a timetable and journey planning system widely used across European transport networks, including:

- [Deutsche Bahn (DB)](https://www.bahn.com/en)
- [SaarVV](https://saarvv.de/)
- [Luxembourg Mobilitéit](https://www.mobiliteit.lu/)
- Many other regional operators

In HAFAS APIs, transport modes (ICE trains, buses, trams, ferries, etc.) are often encoded in a **bitmask** —  
a single number where each bit (1, 2, 4, 8, ...) represents a specific type of transport.

---

## ✨ Features

- 🔢 Enter a number to **decode** it into selected transport modes
- ✅ Click transport icons to **encode** a bitmask value
- 🔄 Switch between different **mode sets** (DB, SaarVV, Luxembourg, HAFAS client spec)
- ⚠️ Input capped to valid 11-bit range (0–2047)
- 💡 Uses the official [hafas-client mode bitmask](https://github.com/public-transport/hafas-client/blob/main/docs/writing-a-profile.md) as one profile

---

## 🛠 Technology

- React + Vite
- Plain CSS for styling
- No external UI libraries
- Fully static — can be deployed to GitHub Pages, Netlify, etc.

---

## Structure

```bash
.
├── assets        # static scripts and assets for demo
├── index.html  # demo entry
└── react   # react source code
```

---

## 📜 License

MIT © 2024 [Alex Li]

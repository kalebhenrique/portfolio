---
nome: "Neomangal"
tipo: "Open Source"
src: "/neomangal.webp"
alt: "Neomangal terminal user interface (TUI)"
bgColor: "bg-amber-300"
colSpan: "1"
order: 4
github: "https://github.com/kalebhenrique/neo-mangal"
tags: ["Rust", "TUI", "Ratatui", "Lua", "Kindle", "CLI", "Open Source"]
featured: false
draft: false
---

## Overview

**neo-mangal** is a modern, high-performance rewrite of the `mangal` tool, engineered from scratch in **Rust**. The project combines an asynchronous, interactive terminal user interface (TUI) with automated manga conversion for digital e-readers (Kindle) and extensible Lua scrapers.

## Key Highlights

- **Modular Lua Scrapers**: Scrapers are decoupled into external Lua 5.4 scripts, allowing immediate updates without re-compilation and concurrent searches across multiple sources.
- **Native Kindle Optimization**: Direct conversion to Kindle KF8 (`.azw3`) at 300 PPI using Kindle Comic Converter (KCC) and KindleGen, alongside export to **PDF**, **EPUB**, **CBZ**, and **MOBI** with volume merging.
- **In-Terminal Cover Art Preview**: High-definition thumbnail rendering in the terminal using pure Rust *TrueColor halfblocks*, free of external C dependencies.
- **AniList Sync**: Real-time reading progress tracking and list synchronization directly from the TUI interface.
- **Reactive TUI Architecture**: Built with `ratatui` and Tokio (async), featuring real-time progress bars, chapter filtering, and fluid keyboard navigation.

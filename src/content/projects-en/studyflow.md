---
nome: "StudyFlow"
tipo: "Projeto Pessoal"
src: "/study1.webp"
alt: "StudyFlow interface with Pomodoro timer and study subjects"
src2: "/study2.webp"
alt2: "StudyFlow reward shop and credit economy"
bgColor: "bg-purple-300"
colSpan: "2"
order: 1
link: "https://study-flow-neon.vercel.app"
tags: ["Next.js", "Tauri", "Clean Architecture", "Supabase"]
featured: true
draft: false
---

## Overview

**StudyFlow** was co-developed with software engineer [Mauro](https://github.com/MauroSon).

The application operates identically across two surfaces: as a modern **Web** platform (Next.js) and as a high-performance **native Desktop** application (Tauri v2).

## The Core Differentiator: Focus Economy & Self-Reward

- **Credits for Verified Focus**: Every minute of study tracked in the Pomodoro timer is processed by a domain calculation engine that converts effort into proportional credits.
- **Customizable Reward Shop**: Accumulated credits can be redeemed in a shop where users define their own real-world rewards (such as gaming sessions, favorite snacks, or leisure activities).

## Core Capabilities

- **Interactive & Monospace Pomodoro Timer**: Configurable focus, short break, and long break intervals with anti-jitter tabular numbers.
- **Hierarchical Subject Organization**: Projects and folders with custom color coding to cleanly separate academic courses, competitive exams, or technical studies.
- **Daily Missions & Goals**: Dynamic goal system with bonus credit rewards and streak tracking to maintain consistent study habits.
- **Detailed History & Analytics**: Visual charts showing time distribution per subject and daily/weekly productivity trends.

## Software Architecture & Engineering

The project was architected following **Clean Architecture** principles in a monorepo setup, guaranteeing complete decoupling between business logic and visual frameworks:

- Isolated domain core containing pure entities, business rules, and over a dozen use cases thoroughly unit-tested with Vitest, with zero UI framework dependencies.
- Shared `@studyflow/views` package consuming polymorphic abstractions (`AppLink` and `useAppRouter`) provided by `@studyflow/ui`. This enables the exact same screens to run seamlessly in both Next.js App Router (Web) and React Router (Tauri Desktop).

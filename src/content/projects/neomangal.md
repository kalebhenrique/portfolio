---
nome: "Neomangal"
tipo: "Open Source"
src: "/neomangal.webp"
alt: "Interface de terminal (TUI) do Neomangal"
src2: "/neomangal2.webp"
alt2: "Interface de terminal (TUI) do Neomangal"
bgColor: "bg-amber-300"
colSpan: "1"
order: 4
github: "https://github.com/kalebhenrique/neo-mangal"
tags: ["Rust", "TUI", "Ratatui", "Lua", "Kindle", "CLI", "Open Source"]
featured: false
draft: false
---

## Visão Geral

O **neo-mangal** é uma reescrita moderna e de alta performance da ferramenta `mangal`, desenvolvida do zero em **Rust**. O projeto une uma interface de terminal (TUI) interativa e assíncrona com conversão automatizada de mangás para leitores digitais (Kindle) e suporte a scrapers modulares em Lua.

## Principais Destaques

- **Scrapers Modulares em Lua**: Desacoplamento dos scrapers em scripts externos Lua 5.4, possibilitando atualizações imediatas sem recompilação e buscas concorrentes em múltiplas fontes.
- **Otimização Nativa para Kindle**: Conversão direta para o formato Kindle KF8 (`.azw3`) a 300 PPI com Kindle Comic Converter (KCC) e KindleGen, além de exportação para **PDF**, **EPUB**, **CBZ** e **MOBI** com suporte a fusão de volumes.
- **Preview de Capas no Terminal**: Renderização de miniaturas em alta definição no terminal via _TrueColor halfblocks_ em Rust puro, sem dependências externas em C.
- **Sincronização com AniList**: Atualização e acompanhamento do progresso de leitura diretamente pela interface da TUI.
- **Arquitetura TUI Reativa**: Construída com `ratatui` e Tokio (async), com barras de progresso em tempo real, filtros de capítulos e navegação fluida por teclado.

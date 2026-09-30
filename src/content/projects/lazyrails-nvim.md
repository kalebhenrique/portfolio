---
nome: "lazyrails.nvim"
tipo: "Open Source"
src: "/lazyrails.webp"
alt: "Terminal com plugin lazyrails.nvim no Neovim"
src2: "/lazyrails2.webp"
alt2: "Tela de navegação e atalhos do plugin"
bgColor: "bg-red-300"
colSpan: "1"
order: 0
github: "https://github.com/kalebhenrique/lazyrails.nvim"
tags: ["Neovim", "Lua", "Ruby on Rails", "Inertia.js", "Produtividade", "Open Source"]
featured: false
draft: false
---

## Visão Geral

O **lazyrails.nvim** é um plugin para Neovim desenvolvido para otimizar o fluxo de trabalho com Ruby on Rails, com foco especial em **navegação contextual rápida**, **execução de testes** e **linting** direto no editor. Projetado para integração nativa com o [LazyVim](https://www.lazyvim.org/), ele centraliza todas as ações essenciais sob atalhos ergonômicos `<leader>r`.

## Principais Destaques

- **Navegação Ágil no Ecossistema Rails**: Salto instantâneo entre Models, Controllers, Views e Specs/Tests (`<leader>rm`, `<leader>rc`, `<leader>rv`, `<leader>rs`), acionando automaticamente o *Snacks picker* quando há múltiplos arquivos relacionados.
- **Suporte a Inertia.js + React**: Ao navegar para views a partir de controllers que utilizam `render inertia:`, o plugin resolve e abre diretamente os componentes `.jsx` ou `.tsx` em `app/frontend/pages/`.
- **Test Runner no Buffer**: Suporte completo a **RSpec** e **Minitest 5.x**, exibindo resultados de aprovação e falha inline via *virtual text* e diagnósticos visuais.
- **Linter Integrado**: Execução ágil de **RuboCop** em arquivos `.rb` e de **herb-tools** em templates `.html.erb`, mantendo o código limpo sem sair do terminal.

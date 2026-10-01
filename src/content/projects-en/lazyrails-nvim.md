---
nome: "lazyrails.nvim"
tipo: "Open Source"
src: "/lazyrails.webp"
alt: "Terminal running lazyrails.nvim inside Neovim"
src2: "/lazyrails2.webp"
alt2: "Navigation picker and keybindings in Neovim"
bgColor: "bg-red-300"
colSpan: "1"
order: 0
github: "https://github.com/kalebhenrique/lazyrails.nvim"
tags: ["Neovim", "Lua", "Ruby on Rails", "Inertia.js", "Productivity", "Open Source"]
featured: false
draft: false
---

## Overview

**lazyrails.nvim** is a Neovim plugin designed to supercharge Ruby on Rails workflows, focusing on **fast contextual navigation**, **inline test execution**, and **linting** directly inside the editor. Designed for native integration with [LazyVim](https://www.lazyvim.org/), it organizes all essential Rails actions under ergonomic `<leader>r` keybindings.

## Key Highlights

- **Seamless Rails Ecosystem Navigation**: Instantly jump between Models, Controllers, Views, and Specs/Tests (`<leader>rm`, `<leader>rc`, `<leader>rv`, `<leader>rs`), automatically triggering a *Snacks picker* whenever multiple candidates exist.
- **Inertia.js + React Support**: When jumping to views from controllers that use `render inertia:`, the plugin automatically resolves and opens matching `.jsx` or `.tsx` components in `app/frontend/pages/`.
- **In-Buffer Test Runner**: Full support for both **RSpec** and **Minitest 5.x**, displaying pass/fail results directly in the buffer as virtual text and diagnostics.
- **Integrated Lint Runner**: Fast execution of **RuboCop** for `.rb` files and **herb-tools** for `.html.erb` templates, keeping code clean without switching windows.

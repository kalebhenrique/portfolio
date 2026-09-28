---
name: Kaleb H — Portfólio
description: Portfólio noturno de desenvolvedor web, inspirado na montanha Celeste — roxo e azul sobre granito escuro, chat como destino.
colors:
  granito-noturno: "#242C3B"
  granito-caverna: "#171C25"
  granito-penhasco: "#343D4F"
  roxo-abismo: "#181129"
  borda-roxa: "#3B234B"
  lavanda-noturna: "#B9BDEF"
  lavanda-nevasca: "#D9DBF2"
  violeta-nevoa: "#877CC4"
  violeta-aurora: "#A498EA"
  azul-celeste: "#7FC8E3"
  azul-celeste-neve: "#A4E3FA"
  texto-suave: "#8E91B6"
  neve: "#FFFFFF"
  pastel-vermelho: "#FCA5A5"
  pastel-esmeralda: "#6EE7B7"
  pastel-lilas: "#D8B4FE"
  pastel-ambar: "#FCD34D"
  pastel-ciano: "#67E8F9"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  full: "9999px"
spacing:
  sm: "24px"
  md: "96px"
  lg: "160px"
  xl: "240px"
components:
  button-chat:
    backgroundColor: "{colors.lavanda-noturna}"
    textColor: "{colors.granito-noturno}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-chat-hover:
    backgroundColor: "{colors.lavanda-nevasca}"
  button-accent:
    backgroundColor: "{colors.azul-celeste}"
    textColor: "{colors.roxo-abismo}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-accent-hover:
    backgroundColor: "{colors.azul-celeste-neve}"
  button-ghost-dark:
    backgroundColor: "{colors.granito-noturno}"
    textColor: "{colors.neve}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  chip-tag:
    backgroundColor: "{colors.roxo-abismo}"
    textColor: "{colors.violeta-aurora}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
  card-project:
    backgroundColor: "{colors.pastel-esmeralda}"
    textColor: "{colors.granito-noturno}"
    rounded: "{rounded.lg}"
    height: "320px"
  bubble-bot:
    backgroundColor: "{colors.violeta-nevoa}"
    textColor: "{colors.granito-noturno}"
    rounded: "{rounded.md}"
    padding: "16px"
  bubble-user:
    backgroundColor: "{colors.lavanda-noturna}"
    textColor: "{colors.granito-noturno}"
    rounded: "{rounded.md}"
    padding: "16px"
---

# Design System: Kaleb H — Portfólio

## Overview

**Creative North Star: "Noite na montanha Celeste"**

O sistema visual é uma noite de inverno na montanha do jogo Celeste: céu profundo em degradê roxo-azulado, neve caindo, e cores claras que se destacam como lanternas no escuro. O fundo escuro (Granito Noturno e Roxo Abismo) ocupa quase toda a tela; as cores vivas existem para falar e agir — a Lavanda Noturna é a voz do site (texto, CTAs, o próprio bot), o Azul Celeste é a ação (ícones, foco, botões de acesso a projeto). Nada grita; tudo ilumina.

A densidade é média com margens generosas: seções respiram com padding vertical grande (64px no mobile, até 112px no desktop) e margens laterais largas (160–240px a partir de `md`). A personalidade é confiante e direta — componentes se afirmam com contraste e peso, sem ornamento gratuito — mas com afeto nas bordas: cantos generosos de 24px, pills para toda ação, toques lúdicos (neve animada, fotos de gatos no bot) que pertencem à voz do Kaleb, não à decoração.

**Key Characteristics:**

- Fundo escuro dominante; cores claras só onde há voz ou ação.
- Cantos cheios: 24px em superfícies, pill (9999px) em toda ação, 16px em bolhas de chat.
- Duas vozes de acento com papéis fixos: lavanda fala, azul age.
- Profundidade plana: camadas tonais, blur em overlay fixo, sombra só no que flutua.
- Tipografia Poppins única, pesos 400/600/700, escala de 36px a 72px nos títulos.
- Movimento suave e de baixa fricção: fade-in ao rolar, scroll suave, hover com escala contida.

## Colors

Paleta noturna de dois mundos: superfícies frias escuras (granito e roxo) e vozes claras (lavanda, violeta, azul), com pastéis reservados aos cartões de projeto.

### Primary

- **Lavanda Noturna** ({colors.lavanda-noturna}): a voz do site. Texto de corpo sobre fundo escuro, CTA "Chat" na navbar, cabeçalho do bot, bolhas do usuário no chat. É a cor que "fala" — todo texto principal de interface usa lavanda, nunca branco puro.
- **Lavanda Nevasca** ({colors.lavanda-nevasca}): hover da lavanda. Só aparece como resposta ao toque.

### Secondary

- **Azul Celeste** ({colors.azul-celeste}): a ação. Ícones de stack, anel de foco (`ring-2`), botões "Acessar Projeto", links dentro de prosa, data de destaque em títulos de projeto.
- **Azul Celeste Neve** ({colors.azul-celeste-neve}): hover do azul.

### Tertiary

- **Violeta Aurora** ({colors.violeta-aurora}): títulos de seção ("Stack & Trajetória", "Portfólio") e tags `#tecnologia`. Versão mais vibrante para hierarquia.
- **Violeta Névoa** ({colors.violeta-nevoa}): títulos da seção Sobre e bolhas do bot. Tom intermediário, mais discreto que Aurora.
- **Pastéis de projeto** ({colors.pastel-vermelho}, {colors.pastel-esmeralda}, {colors.pastel-lilas}, {colors.pastel-ambar}, {colors.pastel-ciano}, e Azul Celeste repetido): fundos de cartão de projeto, definidos por projeto no frontmatter (`bgColor`). Sempre com texto Granito Noturno por cima.

### Neutral

- **Granito Noturno** ({colors.granito-noturno}): fundo principal das seções Stack, Projetos e Footer; cor de texto sobre fundos pastéis e lavanda.
- **Granito Caverna** ({colors.granito-caverna}): overlay do navbar após rolagem (90% de opacidade + blur) e moldura da imagem de destaque.
- **Granito Penhasco** ({colors.granito-penhasco}): hover do botão fantasma de GitHub.
- **Roxo Abismo** ({colors.roxo-abismo}): fundo da seção Sobre, tags, botão flutuante "voltar ao topo".
- **Borda Roxa** ({colors.borda-roxa}): borda 1px dos componentes da página de detalhe (tags, imagem, artigo, botão fantasma, divisores).
- **Texto Suave** ({colors.texto-suave}: datas de experiência. Cinza-lavanda apagado, nunca usado em texto essencial.
- **Neve** ({colors.neve}): flocos do hero, texto de artigo em prosa, texto do botão fantasma.

### Named Rules

**A Regra das Duas Vozes.** Lavanda fala, azul age. Texto e CTA primário são sempre lavanda; ícone, foco e ação de projeto são sempre azul. Trocar os papéis quebra a gramática do site.

**A Regra da Noite.** Fundo escuro ocupa no mínimo ~80% de qualquer viewport. Cores vivas (lavanda, azul, violetas, pastéis) são lanternas: aparecem em texto, ícones e superfícies pequenas, nunca como grandes campos além dos pastéis de cartão.

**A Regra do Texto Sobre Pastel.** Texto sobre cartão pastel é sempre Granito Noturno — jamais branco, jamais lavanda.

## Typography

**Display Font:** Poppins (fallback `sans-serif`), carregada nos pesos 400, 600 e 700.
**Body Font:** Poppins — família única; hierarquia vem de peso e tamanho, não de contraste entre fontes.
**Label/Mono Font:** nenhuma; código inline em prosa usa `font-mono` do Tailwind sem destaque de cor.

**Character:** Geométrica e amigável, com círculos abertos — combina com cantos de 24px e pills. Peso 600 carrega títulos com firmeza ("confiante e direto"); 400 lê tranquilo em corpo médio.

### Hierarchy

- **Display** (600, 36px → 48px (`md`) → 72px (`lg`), 1.15): títulos de seção na home ("Stack & Trajetória", "Portfólio", headline do Sobre). Centralizado no mobile, alinhado à esquerda em `lg`.
- **Headline** (700, 30px → 48px (`md`) → 60px (`lg`), 1.2): título da página de detalhe do projeto, na cor de destaque do projeto.
- **Title** (600, 24px, 1.4): subtítulos de seção ("Motivação e Propósito", "Experiência Profissional", "Outros Projetos").
- **Body** (400, 14px no mobile → 20px em `md`, 1.6): texto de corpo. É o ritmo padrão do site inteiro.
- **Label** (600, 12–14px): tags, datas, rótulos de navegação. Sem caixa alta, sem letter-spacing.

### Named Rules

**A Regra dos Três Pesos.** Só 400, 600 e 700 existem no carregamento da fonte. Qualquer `font-extrabold`/800 renderiza peso sintetizado (falso) — não usar até o peso ser importado de verdade.

## Layout

Grade de página única: seções empilhadas ocupando a largura total, cada uma com seu fundo (Sobre roxo; Stack, Projetos e Footer granito). O conteúdo respira com margens laterais em três passos — 24px no mobile, 160px a partir de `md`, 240px em `xl` — e ritmo vertical de 64/96/112px. A grade de projetos tem 3 colunas em `md` com gap 32–56px; cartões destacados ocupam 2 colunas (`col-span-2`, decidido no frontmatter de cada projeto).

Leitura longa (página de projeto) usa coluna única de `max-w-4xl` (896px) centralizada. O breakpoint de queda para duas colunas lado a lado (texto/foto no Sobre, coluna de datas nas experiências) é `lg`. Navbar fixo no topo em toda largura; em mobile o chat abre em tela cheia, em `md` como painel flutuante de 380×700px. Scrollbar customizada de 6px no html e no chat.

## Elevation & Depth

Sistema plano com camadas tonais confirmado: profundidade vem da troca de fundo entre seções (Granito Noturno → Roxo Abismo → Granito Caverna) e de overlays translúcidos com `backdrop-blur` — o navbar transparente que ganha Granito Caverna a 90% após 140px de rolagem, e o painel do chat com blur intenso sobre a página. Não há sombra em superfície de repouso.

### Shadow Vocabulary

- **Sombra flutuante** (`shadow-2xl`): painel do chat, imagem de destaque do projeto, botão "voltar ao topo". Só em elementos que flutuam sobre a página.
- **Sombra de ação** (`shadow-md`): botão primário "Acessar Projeto". Sutil, acompanha affordance de clique.

### Named Rules

**A Regra do que Flutua.** Sombra existe apenas em elementos fixos sobrepostos ao conteúdo (chat, FAB, imagem-destaque). Cartão, tag e seção nunca têm sombra em repouso — separação é tom, não sombra.

## Shapes

Forma cheia e arredondada em todo o sistema. Superfícies grandes (cartões, fotos, painel do chat) usam 24px (`rounded-3xl`); ações usam pill (`rounded-full`) — botão de chat, chips de resposta do bot, botões da página de detalhe; bolhas de mensagem e o botão flutuante usam 16px (`rounded-2xl`); tags usam 8px (`rounded-lg`). Bordas existem apenas na página de detalhe: 1px Borda Roxa em tags, molduras e divisores — nunca na home. As fotos dentro de cartões "grudam" na borda com raio de um lado só (`rounded-l-3xl`), como peça encaixada.

## Components

### Buttons

- **Shape:** pill (9999px), sempre.
- **Primário — CTA de Chat:** fundo Lavanda Noturna, texto Granito Noturno semibold, padding 8×16px; hover vira Lavanda Nevasca (transição de cor ~150ms).
- **Acento — Acessar Projeto:** fundo Azul Celeste, texto Roxo Abismo bold, padding 10×20px, `shadow-md`; hover Azul Celeste Neve.
- **Fantasma — Ver Código (GitHub):** fundo Granito Noturno, texto Neve semibold, borda 1px Borda Roxa, padding 10×20px; hover Granito Penhasco.
- **Focus:** anel `ring-2` Azul Celeste em todo elemento focável de cartão/link.
- **Cursor:** `cursor-pointer` explícito em botões customizados.

### Chat (componente assinatura)

Painel flutuante: tela cheia com blur em mobile; em `md`, 380×700px no canto inferior direito, cantos 24px, fundo Granito Noturno 80% + `backdrop-blur-3xl`, `shadow-2xl`. Cabeçalho Lavanda Noturna com avatar redondo (foto do Kaleb), título "Kaleb Bot" em Granito Noturno semibold, botão de fechar com ícone. Bolha do bot: Violeta Névoa, canto 16px, padding 16px, alinhada à esquerda; bolha do usuário: Lavanda Noturna, alinhada à direita. Respostas do visitante são chips outline: borda 2px Lavanda Noturna, texto lavanda, pill, padding 16px. Transição de entrada: sobe 50px com fade em 200ms.

### Cards / Containers

- **Cartão de projeto:** 320px de altura, canto 24px, fundo pastel (por projeto), texto Granito Noturno. Tipo em bold 18–24px, nome em medium, alinhados ao canto superior direito; imagem com raio só à esquerda ancorada na base. Hover: escala 110% no cartão + imagem desce 12px, 300ms ease-in-out. Foco: anel Azul Celeste. Em link externo, escala contida do wrapper (102%).
- **Tag de tecnologia:** fundo Roxo Abismo, texto Violeta Aurora semibold 12–14px, canto 8px, borda 1px Borda Roxa, padding 4×12px, prefixo `#`.
- **Cartão de experiência:** linha com data em Texto Suave (coluna de 176px) e cargo/empresa em Violeta Aurora com seta externa; corpo em Lavanda Noturna 14–16px.

### Navigation

Navbar fixo, centralizado, links semibold com hover Lavanda Nevasca, gap 16→48px. Transparente sobre o hero; após 140px de rolagem ganha fundo Granito Caverna 90% + `backdrop-blur-md` (transição 300ms). CTA "Chat" pill sempre visível. Footer em Granito Noturno com colunas "Onde estou" (GitHub, LinkedIn, Baixar CV) e "Contato" (Chat), títulos Violeta Aurora, links com ícone de seta externa de 16px e hover Lavanda Nevasca.

### Hero (Introdução)

Altura de viewport (h-svh mobile / h-screen desktop). Degradê animado roxo→azul-noite documentado — `#2C1431 → #161732 → #042433` em vaivém de 3s (camada de 200% movida por transform, valores exclusivos do hero, não tokens de seção) — e 80 flocos de neve em CSS puro (6–18px, opacidade 40–100%, queda em loop; nenhum movimento sob `prefers-reduced-motion`). Montanha de Celeste clicável com popover Lavanda Noturna 90% + blur. Setas de rolagem animadas na base.

### Ícones

Lucide em 16–24px, `currentColor`, herdam a cor do texto (Azul Celeste na stack, herança nos links). Sem ícones coloridos fora do contexto do elemento.

## Do's and Don'ts

### Do:

- **Do** usar Lavanda Noturna para todo texto principal sobre fundo escuro — branco é exceção de prosa/artigo, não padrão.
- **Do** usar pill (9999px) em toda ação clicável; cartões e superfícies em 24px; bolhas em 16px.
- **Do** aplicar o par fundo→texto correto: pastel com Granito Noturno, escuro com Lavanda/Neve.
- **Do** dar hover de cor nos links (Lavanda Nevasca) e escala contida (102–110%) nos cartões.
- **Do** anunciar foco com `ring-2` Azul Celeste em qualquer elemento focável customizado.
- **Do** manter o peso máximo de fonte em 700 (400/600/700 são os pesos carregados).

### Don't:

- **Don't** usar sombra em superfície em repouso (cartão, tag, seção) — sombra é só para o que flutua (chat, FAB, imagem-destaque).
- **Don't** usar borda na home — borda 1px Borda Roxa é idioma da página de detalhe.
- **Don't** usar `font-extrabold`/800 enquanto o peso não estiver importado (renderiza sintetizado).
- **Don't** trocar as vozes: nunca azul para texto primário ou lavanda para anel de foco/ação.
- **Don't** introduzir branco puro como fundo de seção — a noite não tem clareira.
- **Don't** criar segundo tipo de cartão de projeto com outra altura, raio ou padrão de hover.

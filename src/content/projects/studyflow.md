---
nome: "StudyFlow"
tipo: "Projeto Pessoal"
src: "/study1.webp"
alt: "Interface do StudyFlow com timer Pomodoro e matérias"
src2: "/study2.webp"
alt2: "Loja de recompensas e economia de créditos do StudyFlow"
bgColor: "bg-purple-300"
colSpan: "2"
order: 1
link: "https://study-flow-neon.vercel.app"
tags: ["Next.js", "Tauri", "Clean Architecture", "Supabase"]
featured: true
draft: false
---

## Visão Geral

O **StudyFlow** foi desenvolvido junto com o dev [Mauro](https://github.com/MauroSon).

A aplicação opera de forma híbrida e idêntica em duas frentes: como plataforma **Web** moderna (Next.js) e como aplicativo **Desktop nativo** de alta performance (Tauri v2).

## O Diferencial: Economia de Foco e Auto-Recompensa

- **Créditos por Foco Verificado**: Cada minuto de estudo focado no timer Pomodoro é processado por um motor de cálculo de domínio que converte o esforço em créditos proporcionais.
- **Loja de Recompensas Personalizável**: Os créditos acumulados podem ser trocados em uma loja onde o próprio usuário define seus prêmios do mundo real (como pausas para jogos, petiscos favoritos ou momentos de lazer).

## Principais Funcionalidades

- **Timer Pomodoro Interativo e Estável**: Intervalos configuráveis de foco, pausas curtas e longas.
- **Estrutura Hierárquica de Matérias**: Organização em projetos e pastas com esquemas de cores personalizados para separar claramente disciplinas acadêmicas, concursos ou estudos técnicos.
- **Missões e Metas Diárias**: Sistema de objetivos dinâmicos com pontuação extra e controle de ofensivas (*streaks*) para manutenção de hábitos consistentes.
- **Histórico e Métricas Detalhadas**: Gráficos analíticos de distribuição de tempo por matéria e evolução diária/semanal de produtividade.

## Arquitetura de Software e Engenharia

O projeto foi estruturado sob os preceitos de **Clean Architecture** em formato de monorepo corporativo, assegurando desacoplamento absoluto entre lógica de negócios e frameworks visuais:

- Núcleo isolado contendo entidades puras, regras de negócio e mais de uma dúzia de casos de uso testados unitariamente com Vitest, sem qualquer dependência de UI.
- O pacote compartilhado `@studyflow/views` consome abstrações universais (`AppLink` e `useAppRouter`) fornecidas por `@studyflow/ui`. Isso permite que exatamente as mesmas telas rodem sem adaptações tanto no roteamento do Next.js (Web) quanto no React Router (Tauri Desktop).

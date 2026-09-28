# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Público duplo, com prioridade igual:

- **Recrutadores** avaliando Kaleb para vagas de desenvolvimento web (CLT ou estágio), que precisam varrer rapidamente formação, stack e experiências.
- **Clientes freelance** (pessoas físicas e pequenas empresas) buscando um desenvolvedor para construir sites e sistemas sob medida, que precisam ver entregas reais e um caminho fácil para conversar.

Kaleb fala com os dois em português brasileiro; o site não mantém versão em inglês.

## Product Purpose

Portfólio pessoal de Kaleb Henrique, desenvolvedor web fullstack, estudante do 6º semestre de Engenharia de Computação na Universidade de Brasília e técnico de informática pela Escola Técnica de Brasília. O site apresenta quem ele é, sua trajetória (Empresa Júnior Struct, estágio, freelances) e projetos reais, com um objetivo de sucesso claro: **o visitante usar o chat** para conversar (bot que responde como "Kaleb") e, a partir dele, seguir para LinkedIn, GitHub ou currículo.

## Positioning

Portfólio onde o visitante conversa com um bot no lugar do próprio Kaleb — respostas no tom dele, com toques descontraídos (ex.: fotos de gatos). A maioria dos portfólios termina em "me chame no LinkedIn"; este termina numa conversa dentro do próprio site. Esse mecanismo é a assinatura do produto.

## Operating Context

- Linguagem e conteúdo em pt-BR, primeira pessoa, tom informal-acolhedor ("Olá, aqui é o Kaleb").
- Trajetória real e verificável: Empresa Júnior Struct (UnB) — desenvolvedor web 2023–2024, Diretor Comercial e Gerente de Projetos desde 2024; estágio de suporte técnico na ETB em 2023.
- Currículo hospedado no Google Drive; presença profissional em LinkedIn e GitHub.
- Fotos pessoais e de projetos servidas via Cloudinary.
- Deploy estático na Vercel (`kalebhenrique.vercel.app`).

## Capabilities and Constraints

- Site estático gerado por Astro (refatoração em andamento de React islands para componentes Astro; algumas ilhas React permanecem: introdução animada, chat).
- Painel admin (`/admin`) com login para criar/editar projetos; salvar grava commit via API do GitHub, que dispara novo build. Acesso protegido por middleware e sessão.
- Projetos como content collections Markdown (`src/content/projects`) com frontmatter próprio (`nome`, `tipo`, `bgColor`, `colSpan`, `order`, `featured`, `draft`, `tags`, links).
- Chat é máquina de estados com respostas pré-definidas (sem IA) e busca fotos de gatos na TheCatAPI.
- Em aberto (decidido, não implementado): evolução futura do chat pode mudar conteúdo e tecnologia (ex.: IA), desde que preservado o papel de canal principal de contato.

## Brand Commitments

- Nome de exibição "Kaleb H • Dev Web"; descrição "Kaleb Henrique, desenvolvedor web fullstack".
- Voz do site: primeira pessoa, informal, acolhedora, com humor leve (o bot usa o nome do próprio Kaleb e manda fotos de gatos).
- Todas as respostas e copy do site em pt-BR.

## Evidence on Hand

- Dois estudos de caso reais em `src/content/projects`: API Ruby on Rails (trainee na Struct) e Sistema de Clínica (freelance, Next.js).
- Lista de experiências em `src/components/stack/experiencesList.ts` (Struct, ETB) com resumo das atribuições.
- Foto pessoal (`/eu.jpg`, Cloudinary), favicon, links reais de LinkedIn/GitHub e pasta do CV no Drive (ver `README.md`).
- Não fabricar: depoimentos de clientes, métricas de resultado, projetos ou empresas que não estejam no repositório.

## Product Principles

1. **O chat é o destino.** Todo caminho no site (hero, seção sobre, projetos) deve conduzir à conversa; contato tradicional (LinkedIn, CV) é o passo seguinte, não o primeiro.
2. **Prova real, voz própria.** Só projetos e experiências verdadeiros, contados em primeira pessoa, no tom do Kaleb.
3. **Rápido de varrer, fácil de conversar.** Recrutador encontra formação e stack num olhar; cliente encontra entregas e o bot a um clique.
4. **Uma pessoa, um produto vivo.** O portfólio evolui com a carreira (estudante → fullstack sênior); conteúdo desatualizado é bug de produto.

## Accessibility & Inclusion

- Sem exigência formal registrada; histórico do repositório mostra esforço deliberado de acessibilidade (commit "adiciona mais acessibilidade"). Manter baseline: HTML semântico, `lang="pt-br"`, contraste e navegação por teclado.

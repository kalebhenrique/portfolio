import fs from "node:fs";
import path from "node:path";

export interface ProjectPayload {
  slug: string;
  nome: string;
  tipo: string;
  src: string;
  alt: string;
  bgColor: string;
  colSpan: "1" | "2";
  order: number;
  link?: string;
  github?: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  content: string;
}

export interface ProjectSummary {
  slug: string;
  nome: string;
  tipo: string;
  src: string;
  alt: string;
  bgColor: string;
  colSpan: "1" | "2";
  order: number;
  featured: boolean;
  draft: boolean;
}

/** Configuração do GitHub API (para gravação em produção na nuvem) */
function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN || import.meta.env.GITHUB_TOKEN || "";
  const repoFull =
    process.env.GITHUB_REPO ||
    import.meta.env.GITHUB_REPO ||
    "kalebhenrique/portfolio";
  const branch =
    process.env.GITHUB_BRANCH || import.meta.env.GITHUB_BRANCH || "main";

  let owner = "kalebhenrique";
  let repo = "portfolio";
  if (repoFull.includes("/")) {
    const [o, r] = repoFull.split("/");
    owner = o.trim();
    repo = r.trim();
  }

  return { token, owner, repo, branch, isEnabled: Boolean(token) };
}

/** Formata dados de projeto para arquivo Markdown com frontmatter YAML */
export function serializeProjectMarkdown(project: ProjectPayload): string {
  const nome = project.nome.replace(/"/g, '\\"');
  const tipo = project.tipo.replace(/"/g, '\\"');
  const src = project.src.trim();
  const alt = project.alt.replace(/"/g, '\\"');
  const bgColor = project.bgColor.trim();
  const colSpan = project.colSpan || "1";
  const order = Number(project.order) || 0;
  const link = (project.link || "").trim();
  const github = (project.github || "").trim();

  const formattedTags = (project.tags || [])
    .map((t) => `"${t.replace(/"/g, '\\"')}"`)
    .join(", ");

  const lines = [
    "---",
    `nome: "${nome}"`,
    `tipo: "${tipo}"`,
    `src: "${src}"`,
    `alt: "${alt}"`,
    `bgColor: "${bgColor}"`,
    `colSpan: "${colSpan}"`,
    `order: ${order}`,
  ];

  if (link) lines.push(`link: "${link.replace(/"/g, '\\"')}"`);
  if (github) lines.push(`github: "${github.replace(/"/g, '\\"')}"`);

  lines.push(
    `tags: [${formattedTags}]`,
    `featured: ${Boolean(project.featured)}`,
    `draft: ${Boolean(project.draft)}`,
    "---",
    "",
    project.content.trim(),
    "",
  );

  return lines.join("\n");
}

/** Analisa o conteúdo de um arquivo Markdown separando frontmatter e corpo */
export function parseProjectMarkdown(raw: string, slug: string): ProjectPayload {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return {
      slug,
      nome: slug,
      tipo: "Projeto Pessoal",
      src: "celeste2",
      alt: slug,
      bgColor: "bg-azul-kaleb",
      colSpan: "1",
      order: 0,
      link: "",
      github: "",
      tags: [],
      featured: false,
      draft: false,
      content: raw,
    };
  }

  const [, yamlStr, content] = match;
  const lines = yamlStr.split("\n");
  const data: Record<string, any> = {};

  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }

    if (key === "tags") {
      if (val.startsWith("[") && val.endsWith("]")) {
        const rawTags = val.slice(1, -1);
        data.tags = rawTags
          ? rawTags
              .split(",")
              .map((t) => t.trim().replace(/^["']|["']$/g, ""))
              .filter(Boolean)
          : [];
      } else {
        data.tags = [];
      }
    } else if (key === "featured" || key === "draft") {
      data[key] = val === "true";
    } else if (key === "order") {
      data[key] = Number(val) || 0;
    } else {
      data[key] = val;
    }
  }

  return {
    slug,
    nome: data.nome || data.title || slug,
    tipo: data.tipo || "Projeto Pessoal",
    src: data.src || "celeste2",
    alt: data.alt || data.nome || slug,
    bgColor: data.bgColor || "bg-azul-kaleb",
    colSpan: data.colSpan === "2" ? "2" : "1",
    order: Number(data.order) || 0,
    link: data.link || "",
    github: data.github || "",
    tags: data.tags || [],
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    content: (content || "").trim(),
  };
}

/** Obtém a lista de todos os projetos cadastrados */
export async function getAllProjects(): Promise<ProjectPayload[]> {
  const gh = getGitHubConfig();

  // Se estiver em produção com token GitHub configurado
  if (gh.isEnabled) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/src/content/projects?ref=${gh.branch}`,
        {
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-CMS",
          },
        },
      );

      if (!res.ok) {
        console.error("GitHub API error fetching projects:", await res.text());
        return getLocalProjects();
      }

      const files = (await res.json()) as Array<{
        name: string;
        download_url: string;
      }>;
      const projects: ProjectPayload[] = [];

      for (const file of files) {
        if (!file.name.endsWith(".md") && !file.name.endsWith(".mdx")) continue;
        const slug = file.name.replace(/\.(md|mdx)$/, "");
        const contentRes = await fetch(file.download_url);
        const text = await contentRes.text();
        projects.push(parseProjectMarkdown(text, slug));
      }

      return projects.sort((a, b) => a.order - b.order);
    } catch (e) {
      console.error("Error in GitHub API getAllProjects:", e);
      return getLocalProjects();
    }
  }

  return getLocalProjects();
}

/** Leitura de projetos do sistema de arquivos local */
function getLocalProjects(): ProjectPayload[] {
  const projectsDir = path.resolve(process.cwd(), "src/content/projects");
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  const projects: ProjectPayload[] = [];

  for (const filename of files) {
    if (!filename.endsWith(".md") && !filename.endsWith(".mdx")) continue;
    const slug = filename.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(projectsDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    projects.push(parseProjectMarkdown(raw, slug));
  }

  return projects.sort((a, b) => a.order - b.order);
}

/** Obtém um projeto pelo slug */
export async function getProjectBySlug(slug: string): Promise<ProjectPayload | null> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) || null;
}

/** Cria ou atualiza um projeto */
export async function saveProject(
  project: ProjectPayload,
  authorName = "Kaleb Henrique",
): Promise<{ success: boolean; message?: string }> {
  const gh = getGitHubConfig();
  const markdown = serializeProjectMarkdown(project);
  const targetPath = `src/content/projects/${project.slug}.md`;

  // Produção via GitHub API
  if (gh.isEnabled) {
    try {
      let currentSha: string | undefined;
      const getFileRes = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${targetPath}?ref=${gh.branch}`,
        {
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-CMS",
          },
        },
      );

      if (getFileRes.ok) {
        const fileData = await getFileRes.json();
        currentSha = fileData.sha;
      }

      const base64Content = Buffer.from(markdown, "utf-8").toString("base64");

      const commitRes = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${targetPath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Portfolio-CMS",
          },
          body: JSON.stringify({
            message: currentSha
              ? `cms: atualiza projeto "${project.nome}" por ${authorName}`
              : `cms: novo projeto "${project.nome}" por ${authorName}`,
            content: base64Content,
            branch: gh.branch,
            sha: currentSha,
          }),
        },
      );

      if (commitRes.ok) {
        return { success: true };
      }

      const errText = await commitRes.text();
      try {
        const projectsDir = path.resolve(process.cwd(), "src/content/projects");
        if (!fs.existsSync(projectsDir)) {
          fs.mkdirSync(projectsDir, { recursive: true });
        }
        const fullPath = path.join(projectsDir, `${project.slug}.md`);
        fs.writeFileSync(fullPath, markdown, "utf-8");
        return { success: true };
      } catch {
        return {
          success: false,
          message: `Falha ao gravar no GitHub (${commitRes.status}): ${errText}`,
        };
      }
    } catch (e: any) {
      try {
        const projectsDir = path.resolve(process.cwd(), "src/content/projects");
        if (!fs.existsSync(projectsDir)) {
          fs.mkdirSync(projectsDir, { recursive: true });
        }
        const fullPath = path.join(projectsDir, `${project.slug}.md`);
        fs.writeFileSync(fullPath, markdown, "utf-8");
        return { success: true };
      } catch {
        return { success: false, message: e?.message || "Erro desconhecido" };
      }
    }
  }

  // Local / Desenvolvimento
  try {
    const projectsDir = path.resolve(process.cwd(), "src/content/projects");
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
    }

    const fullPath = path.join(projectsDir, `${project.slug}.md`);
    fs.writeFileSync(fullPath, markdown, "utf-8");
    return { success: true };
  } catch (e: any) {
    return { success: false, message: e?.message || "Erro de gravação local" };
  }
}

/** Exclui um projeto */
export async function deleteProject(
  slug: string,
  authorName = "Kaleb Henrique",
): Promise<{ success: boolean; message?: string }> {
  const gh = getGitHubConfig();
  const targetPath = `src/content/projects/${slug}.md`;

  if (gh.isEnabled) {
    try {
      const getFileRes = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${targetPath}?ref=${gh.branch}`,
        {
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-CMS",
          },
        },
      );

      if (!getFileRes.ok) {
        return { success: false, message: "Arquivo não encontrado no GitHub." };
      }

      const fileData = await getFileRes.json();

      const deleteRes = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${targetPath}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Portfolio-CMS",
          },
          body: JSON.stringify({
            message: `cms: remove projeto "${slug}" por ${authorName}`,
            sha: fileData.sha,
            branch: gh.branch,
          }),
        },
      );

      if (!deleteRes.ok) {
        return {
          success: false,
          message: `Falha ao excluir no GitHub: ${await deleteRes.text()}`,
        };
      }

      return { success: true };
    } catch (e: any) {
      return { success: false, message: e?.message || "Erro desconhecido" };
    }
  }

  // Local
  try {
    const fullPath = path.resolve(
      process.cwd(),
      "src/content/projects",
      `${slug}.md`,
    );
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
    return { success: true };
  } catch (e: any) {
    return { success: false, message: e?.message || "Erro ao remover arquivo" };
  }
}

/** Salva arquivo de upload de imagem */
export async function saveUploadedImage(
  filename: string,
  buffer: Buffer,
  authorName = "Kaleb Henrique",
): Promise<{ success: boolean; url?: string; message?: string }> {
  const safeName = filename
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\._-]/g, "-")
    .replace(/-+/g, "-");

  const uniqueName = `${Date.now()}-${safeName}`;
  const targetPath = `public/images/uploads/${uniqueName}`;
  const publicUrl = `/images/uploads/${uniqueName}`;

  const gh = getGitHubConfig();

  if (gh.isEnabled) {
    try {
      const base64Content = buffer.toString("base64");
      const commitRes = await fetch(
        `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/${targetPath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${gh.token}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Portfolio-CMS",
          },
          body: JSON.stringify({
            message: `cms: upload de imagem ${uniqueName} por ${authorName}`,
            content: base64Content,
            branch: gh.branch,
          }),
        },
      );

      if (commitRes.ok) {
        return { success: true, url: publicUrl };
      }

      const errText = await commitRes.text();
      try {
        const uploadDir = path.resolve(process.cwd(), "public/images/uploads");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        const fullPath = path.join(uploadDir, uniqueName);
        fs.writeFileSync(fullPath, new Uint8Array(buffer));
        return { success: true, url: publicUrl };
      } catch {
        return {
          success: false,
          message: `Erro ao enviar imagem ao GitHub (${commitRes.status}): ${errText}`,
        };
      }
    } catch (e: any) {
      try {
        const uploadDir = path.resolve(process.cwd(), "public/images/uploads");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        const fullPath = path.join(uploadDir, uniqueName);
        fs.writeFileSync(fullPath, new Uint8Array(buffer));
        return { success: true, url: publicUrl };
      } catch {
        return { success: false, message: e?.message || "Erro no upload" };
      }
    }
  }

  // Determina mime type caso precise de Data URL
  const getMime = (fname: string) => {
    const ext = fname.split(".").pop()?.toLowerCase() || "";
    if (ext === "png") return "image/png";
    if (ext === "webp") return "image/webp";
    if (ext === "gif") return "image/gif";
    if (ext === "svg") return "image/svg+xml";
    if (ext === "avif") return "image/avif";
    return "image/jpeg";
  };

  // Local / Fallback
  try {
    const uploadDir = path.resolve(process.cwd(), "public/images/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fullPath = path.join(uploadDir, uniqueName);
    fs.writeFileSync(fullPath, new Uint8Array(buffer));

    return { success: true, url: publicUrl };
  } catch (e: any) {
    const mime = getMime(filename);
    const dataUrl = `data:${mime};base64,${buffer.toString("base64")}`;
    return { success: true, url: dataUrl };
  }
}

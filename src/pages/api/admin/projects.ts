import type { APIRoute } from "astro";
import { getSession } from "../../../utils/auth";
import {
  getAllProjects,
  getProjectBySlug,
  saveProject,
  deleteProject,
  reorderProjects,
  type ProjectPayload,
} from "../../../utils/cms";

export const prerender = false;

/** GET: Retorna todos os projetos ou um específico pelo slug */
export const GET: APIRoute = async ({ url, cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const slug = url.searchParams.get("slug");
  if (slug) {
    const project = await getProjectBySlug(slug);
    if (!project) {
      return new Response(
        JSON.stringify({ error: "Projeto não encontrado." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const projects = await getAllProjects();
  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

/** POST: Cria ou atualiza um projeto */
export const POST: APIRoute = async ({ request, cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await request.json();

    if (!data.nome || !data.nome.trim()) {
      return new Response(
        JSON.stringify({ error: "O nome do projeto é obrigatório." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!data.slug || !data.slug.trim()) {
      return new Response(
        JSON.stringify({ error: "O slug do projeto é obrigatório." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Normaliza slug para URL amigável
    const safeSlug = data.slug
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const projectPayload: ProjectPayload = {
      slug: safeSlug,
      nome: data.nome.trim(),
      tipo: (data.tipo || "Projeto Pessoal").trim(),
      src: (data.src || "celeste2").trim(),
      alt: (data.alt || data.nome).trim(),
      src2: data.src2 ? String(data.src2).trim() : undefined,
      alt2: data.alt2 ? String(data.alt2).trim() : undefined,
      bgColor: (data.bgColor || "bg-azul-kaleb").trim(),
      colSpan: data.colSpan === "2" ? "2" : "1",
      order: Number(data.order) || 0,
      link: (data.link || "").trim(),
      github: (data.github || "").trim(),
      tags: Array.isArray(data.tags)
        ? data.tags
        : typeof data.tags === "string"
          ? data.tags
              .split(",")
              .map((t: string) => t.trim())
              .filter(Boolean)
          : [],
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      content: (data.content || "").trim(),
    };

    const result = await saveProject(projectPayload, session.username);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: result.message || "Erro ao salvar o projeto.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true, slug: projectPayload.slug }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({
        error: e?.message || "Erro ao processar dados do projeto.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

/** PUT: Atualiza a ordem dos projetos */
export const PUT: APIRoute = async ({ request, cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await request.json();
    if (!Array.isArray(data.slugs)) {
      return new Response(
        JSON.stringify({ error: "Lista de slugs inválida." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const result = await reorderProjects(data.slugs, session.username);
    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: result.message || "Erro ao reordenar projetos.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({
        error: e?.message || "Erro interno ao reordenar projetos.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

/** DELETE: Remove um projeto pelo slug */
export const DELETE: APIRoute = async ({ url, cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const slug = url.searchParams.get("slug");
  if (!slug) {
    return new Response(
      JSON.stringify({ error: "Slug do projeto é obrigatório." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const result = await deleteProject(slug, session.username);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: result.message || "Falha ao excluir projeto.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

import type { APIRoute } from "astro";
import { getSession } from "../../../utils/auth";
import {
  getExperiences,
  getExperiencesRaw,
  saveExperiencesRaw,
  saveExperiences,
  parseExperiencesMarkdown,
  type ExperienceItem,
} from "../../../utils/cms";

export const prerender = false;

/** GET: Retorna o conteúdo bruto e a lista analisada de experiências */
export const GET: APIRoute = async ({ cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const raw = await getExperiencesRaw();
  const experiences = await getExperiences();

  return new Response(JSON.stringify({ raw, experiences }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

/** POST: Salva o arquivo experiences.md (via Markdown bruto ou lista estruturada) */
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

    let result;
    if (typeof data.raw === "string") {
      // Valida sintaxe antes de salvar
      const parsed = parseExperiencesMarkdown(data.raw);
      if (!parsed || parsed.length === 0) {
        // Se falhou ao parsear e não for intencionalmente vazio, avisa
        if (data.raw.includes("experiences:")) {
          return new Response(
            JSON.stringify({
              error:
                "Sintaxe YAML/Markdown inválida no arquivo experiences.md.",
            }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }
      }
      result = await saveExperiencesRaw(data.raw, session.username);
    } else if (Array.isArray(data.experiences)) {
      result = await saveExperiences(
        data.experiences as ExperienceItem[],
        session.username,
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "Payload inválido. Envie 'raw' ou 'experiences'.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: result.message || "Erro ao salvar experiences.md",
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
      JSON.stringify({ error: e?.message || "Erro ao processar dados." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

import type { APIRoute } from "astro";
import { getSession } from "../../../utils/auth";
import { saveUploadedImage } from "../../../utils/cms";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  const session = await getSession(cookies);
  if (!session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file || typeof file === "string") {
      return new Response(
        JSON.stringify({ error: "Nenhum arquivo enviado." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const validMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png",
      "image/x-png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "image/avif",
    ];
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    const validExts = ["jpg", "jpeg", "png", "webp", "gif", "svg", "avif"];

    const isValidType = validMimes.includes(file.type) || validExts.includes(ext);

    if (!isValidType) {
      return new Response(
        JSON.stringify({
          error: "Formato de arquivo inválido. Use JPG, PNG, WebP, GIF ou SVG.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Limite de 10MB
    if (file.size > 10 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: "Arquivo muito grande. O limite é de 10MB." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await saveUploadedImage(
      file.name,
      buffer,
      session.username,
    );

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: result.message || "Falha ao salvar a imagem.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true, url: result.url }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e?.message || "Erro no upload da imagem." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

export const PUT: APIRoute = POST;

import type { APIRoute } from "astro";

export const prerender = false;

// Rota a chave no cliente: defina CAT_API_KEY no painel da Vercel e troque
// a chave antiga na TheCatAPI (ela ficou exposta no histórico do repositório).
const API_KEY = import.meta.env.CAT_API_KEY ?? "";

export const GET: APIRoute = async () => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
  };
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`,
      { cache: "no-store" },
    );
    if (!res.ok) return new Response(JSON.stringify({ url: "" }), { headers });
    const data: { url?: string }[] = await res.json();
    return new Response(JSON.stringify({ url: data[0]?.url ?? "" }), {
      headers,
    });
  } catch {
    return new Response(JSON.stringify({ url: "" }), { headers });
  }
};

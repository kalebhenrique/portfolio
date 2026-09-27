import type { APIRoute } from "astro";
import {
  validateCredentials,
  createSessionToken,
  setSessionCookie,
} from "../../../utils/auth";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: "Usuário e senha são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const isValid = validateCredentials(username, password);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Credenciais inválidas. Verifique usuário e senha." }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      );
    }

    const token = await createSessionToken(username);
    setSessionCookie(cookies, token);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar autenticação." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

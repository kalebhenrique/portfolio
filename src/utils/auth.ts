/**
 * Utilitários de autenticação e sessão para o painel administrativo.
 * Utiliza Web Crypto API nativa (compatível com Node.js, Vercel Edge e Serverless).
 */

const SESSION_COOKIE_NAME = "portfolio_admin_session";
const DEFAULT_SECRET = "portfolio-secret-key-2026-very-secure-token";

function getSecretKey(): string {
  return (
    process.env.SESSION_SECRET ||
    import.meta.env.SESSION_SECRET ||
    DEFAULT_SECRET
  );
}

/** Gera um token HMAC-SHA256 codificado em Base64URL */
export async function createSessionToken(username: string): Promise<string> {
  const secret = getSecretKey();
  const payload = {
    username,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 dias de validade
  };
  const payloadStr = btoa(JSON.stringify(payload));

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    enc.encode(payloadStr),
  );

  const signature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => String.fromCharCode(b))
    .join("");
  const signatureBase64 = btoa(signature)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return `${payloadStr}.${signatureBase64}`;
}

/** Valida o token de sessão e retorna o payload com o usuário */
export async function verifySessionToken(
  token: string | undefined,
): Promise<{ username: string } | null> {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadStr, signatureBase64] = parts;
  if (!payloadStr || !signatureBase64) return null;

  try {
    const secret = getSecretKey();
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );

    let base64 = signatureBase64.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) base64 += "=";
    const binarySig = atob(base64);
    const sigBytes = new Uint8Array(binarySig.length);
    for (let i = 0; i < binarySig.length; i++) {
      sigBytes[i] = binarySig.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      enc.encode(payloadStr),
    );

    if (!isValid) return null;

    const payload = JSON.parse(atob(payloadStr));
    if (!payload.exp || Date.now() > payload.exp) {
      return null; // Token expirado
    }

    return { username: payload.username };
  } catch {
    return null;
  }
}

/** Verifica as credenciais de login */
export function validateCredentials(username: string, password: string): boolean {
  if (!username || !password) return false;

  const adminPassword =
    process.env.ADMIN_PASSWORD ||
    import.meta.env.ADMIN_PASSWORD ||
    "portfolio2026";

  // Usuários customizados em ADMIN_USERS no formato: "admin:senha,kaleb:12345"
  const adminUsersEnv =
    process.env.ADMIN_USERS || import.meta.env.ADMIN_USERS || "";

  if (adminUsersEnv) {
    const users = adminUsersEnv.split(",").map((entry: string) => entry.trim());
    for (const user of users) {
      const [u, p] = user.split(":");
      if (u === username && p === password) {
        return true;
      }
    }
  }

  // Login padrão se coincidir com a senha mestra
  if (password === adminPassword) {
    return true;
  }

  return false;
}

/** Define o cookie de sessão no Astro response */
export function setSessionCookie(cookies: any, token: string): void {
  cookies.set(SESSION_COOKIE_NAME, token, {
    path: "/",
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });
}

/** Remove o cookie de sessão */
export function clearSessionCookie(cookies: any): void {
  cookies.set(SESSION_COOKIE_NAME, "", {
    path: "/",
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "lax",
    maxAge: 0,
    expires: new Date(0),
  });
  cookies.delete(SESSION_COOKIE_NAME, {
    path: "/",
  });
}

/** Recupera a sessão atual da requisição ou cookie */
export async function getSession(cookies: any): Promise<{ username: string } | null> {
  const token = cookies.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

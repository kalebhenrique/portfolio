import { defineMiddleware } from "astro:middleware";
import { getSession } from "./utils/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  const isAdminRoute =
    pathname === "/admin" ||
    pathname === "/admin/" ||
    pathname.startsWith("/admin/");
  const isLoginPage =
    pathname === "/admin/login" || pathname === "/admin/login/";

  const isAdminApiRoute = pathname.startsWith("/api/admin");
  const isLoginApiRoute =
    pathname === "/api/admin/login" || pathname === "/api/admin/login/";

  const isLogoutRoute =
    pathname === "/admin/logout" ||
    pathname === "/admin/logout/" ||
    pathname === "/api/admin/logout" ||
    pathname === "/api/admin/logout/";

  // Se não for rota do painel admin ou API admin, prossegue sem ler cookies
  if (!isAdminRoute && !isAdminApiRoute) {
    return next();
  }

  if (isLogoutRoute) {
    return next();
  }

  const session = await getSession(context.cookies);
  if (session) {
    // @ts-ignore
    context.locals.user = session;
  }

  // Redireciona para /admin se já autenticado
  if (isLoginPage && session) {
    return context.redirect("/admin");
  }

  // Redireciona para login se tentar acessar /admin sem sessão
  if (isAdminRoute && !isLoginPage && !session) {
    return context.redirect("/admin/login");
  }

  // Bloqueia API admin sem sessão
  if (isAdminApiRoute && !isLoginApiRoute && !session) {
    return new Response(JSON.stringify({ error: "Não autorizado." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return next();
});

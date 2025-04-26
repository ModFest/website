import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const params = url.searchParams;
    const enabled = params.get("enabled") ?? "false";

    const headers = new Headers();
    headers.set("location", "/dev");

    setCookie(headers, {
      name: "devtools",
      value: enabled,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
    });

    const response = new Response(null, { status: 303, headers });

    return response;
  },
};

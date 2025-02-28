import { RouteContext } from "$fresh/server.ts";
import { render } from "@deno/gfm";

export default async function Page(_req: Request, ctx: RouteContext) {
  const fetchURL = `${ctx.url.origin}/assets/pages/${ctx.params.page}.md`;
  const response = await fetch(fetchURL)
  if (!response.ok) {
    return ctx.renderNotFound();
  }
  const mdFile = await response.text()

  const blocks = mdFile.split("---");
  return (
    <div class="flex flex-col gap-4 mb-16">
      {blocks.map((block) => block.startsWith("# ") ? (
          <div
              class="ml-6 mt-4"
              dangerouslySetInnerHTML={{
                __html: render(block),
              }}
          />
              ) : (
        <div
          className="card"
          dangerouslySetInnerHTML={{
            __html: render(block),
          }}
        />
      ))}
    </div>
  );
}

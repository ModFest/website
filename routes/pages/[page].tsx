import * as path from "jsr:@std/path";
import { RouteContext } from "$fresh/server.ts";
import { render } from "@deno/gfm";
import {markdownRenderOptions} from "../../lib/helpers.tsx";

export default async function Page(_req: Request, ctx: RouteContext) {
  let mdFile = "";
  try {
    mdFile = await Deno.readTextFile(path.format({
      dir: `${Deno.cwd()}/static/assets/pages`,
      ext: ".md",
      name: ctx.params.page,
    }));
  } catch (_e) {
    return ctx.renderNotFound()
  }

  const blocks = mdFile.split("---");
  return (
    <div class="flex flex-col gap-4 mb-16">
      {blocks.map((block) => block.startsWith("# ") ? (
          <div
              class="ml-6 mt-4"
              dangerouslySetInnerHTML={{
                __html: render(block, markdownRenderOptions),
              }}
          />
              ) : (
        <div
          className="card"
          dangerouslySetInnerHTML={{
            __html: render(block, markdownRenderOptions),
          }}
        />
      ))}
    </div>
  );
}

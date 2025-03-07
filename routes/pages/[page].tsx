import { RouteContext } from "$fresh/server.ts";
import { getPagesMarkdown } from "../../lib/helpers.tsx";
import { MarkdownBlocks } from "../../components/MarkdownBlocks.tsx";

export default async function Page(_req: Request, ctx: RouteContext) {
  const content = await getPagesMarkdown(ctx.params.page);
  return <MarkdownBlocks content={content} />;
}

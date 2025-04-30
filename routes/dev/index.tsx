import { RouteContext } from "$fresh/server.ts";
import { DevtoolsButton } from "../../islands/CopyButton.tsx";
import { getDevtools } from "../../lib/helpers.tsx";

export default async function DeveloperTools(_req: Request, ctx: RouteContext) {
  const devtoolsEnabled = getDevtools(_req);

  return (
    <div class="flex flex-col gap-2">
      <h1>ModFest Developer Tools</h1>
      <span>
        <p>Tools to make developing with/for ModFest events easier.</p>
        <p>Contact @WorldWidePixel for support related to ModFest devtools.</p>
      </span>
      <hr />
      <DevtoolsButton devtoolsEnabled={devtoolsEnabled} />
    </div>
  );
}

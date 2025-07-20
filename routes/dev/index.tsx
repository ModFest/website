import { DevtoolsButton } from "../../islands/CopyButton.tsx";
import { getDevtools } from "../../lib/helpers.tsx";

export default function DeveloperTools(_req: Request) {
  const devtoolsEnabled = getDevtools(_req);

  return (
    <div class="flex flex-col card gap-2">
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

import { type PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/assets/favicon.png" />
        <meta name="viewport" content="width=device-width" />
        <title>ModFest</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>

      <body>
        <div>
          <div class="flex flex-col gap-4 max-w-4xl m-[auto]">
            <Header />
            <main>
              <Component />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

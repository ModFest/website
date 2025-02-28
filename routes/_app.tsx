import { type PageProps } from "$fresh/server.ts";
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
        <Component />
      </body>
    </html>
  );
}

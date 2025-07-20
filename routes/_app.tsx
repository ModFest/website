import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
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

      <Head>
        <meta property="og:title" content="Welcome to ModFest!" key="ogtitle" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:image" content="/assets/favicon.png" key="ogimage" />
        <meta property="og:image:type" content="image/png" key="ogimagetype" />
        <meta
          property="og:description"
          content="ModFest hosts collaborative Minecraft modding virtual events, including development jams and in-game conventions!"
          key="ogdesc"
        />
        <meta property="og:site_name" content="ModFest" />
        <meta property="og:url" content="https://modfest.net" />
      </Head>

      <body>
        <Component />
      </body>
    </html>
  );
}

import { Handlers, PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div>
      <div class="flex flex-col gap-4 max-w-4xl px-4 m-[auto]">
        <Header />
        <main>
          <Component />
        </main>
        <span class="text-sm text-center mb-4">
          <a href="/pages/about">About</a>
          {" | "}
          See site source <a href="https://github.com/modfest/website">here</a>.
          {" | "}
          <a href="/dev">ModFest Developer Tools</a>
        </span>
      </div>
    </div>
  );
}

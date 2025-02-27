import { PageProps } from "$fresh/server.ts";
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
      </div>
    </div>
  );
}

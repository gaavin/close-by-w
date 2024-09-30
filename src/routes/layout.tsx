import { component$, Slot } from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const head: DocumentHead = {
  title: "gavinpower.dev",
  meta: [
    {
      name: "gavinpower.dev",
      content: "personal website",
    },
  ],
};

export default component$(() => {
  const loc = useLocation();
  const path = loc.url.pathname.split("/")[1];
  return (
    <>
      <header>
        <h4>gavinpower.dev/{path}</h4>
      </header>
      <main>
        <Slot />
      </main>
      <footer>
        <span>©2024 Mr Beast and Chris Chandler</span>
      </footer>
    </>
  );
});

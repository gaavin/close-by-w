import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

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
  title: "Snow Clearing",
  meta: [
    {
      name: "description",
      content: "Snow Clearing",
    },
  ],
};

export default component$(() => {
  return (
    <div class="cb-root">
      <header class="cb-header">
        <h1>Snow Clearing</h1>
      </header>
      <main class="cb-content">
        <Slot />
      </main>
      <footer class="cb-footer">
        <p>© Mr Beast</p>
      </footer>
    </div>
  );
});

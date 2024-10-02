import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead, type RequestHandler } from "@builder.io/qwik-city";
import { SiGithub } from "@qwikest/icons/simpleicons";
import Chat from "~/components/chat";

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
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/posts">posts</a>
          </li>
          <li>
            <span style={{ display: "block", "text-wrap": "nowrap" }}>
              <a href="https://github.com/gaavin">github</a>
              <SiGithub
                style={{
                  color: "var(--white)",
                }}
              />
            </span>
          </li>
        </ul>
      </header>
      <main>
        <Slot />
      </main>
      <footer>
        <Chat />
      </footer>
    </>
  );
});

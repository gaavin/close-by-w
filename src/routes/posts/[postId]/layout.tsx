import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzleFactory } from "~/lib/db";

export const usePost = routeLoader$(async (requestEvent) => {
  const db = drizzleFactory(requestEvent.env);
  const post = await db.query.posts.findFirst({
    columns: {
      content: true,
    },
  });
  return post;
});

export default component$(() => {
  const { value: post } = usePost();

  return (
    <>
      <p>{post?.content}</p>
      <Slot />
    </>
  );
});

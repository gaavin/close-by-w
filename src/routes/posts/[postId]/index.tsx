import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzleFactory } from "~/lib/db";

export const usePost = routeLoader$(async (requestEvent) => {
  const db = await drizzleFactory(requestEvent);
  return db.query.posts.findFirst({
    where: (post, { eq }) => eq(post.id, Number(requestEvent.params.postId)),
  });
});

export default component$(() => {
  const post = usePost();
  return <p>{post.value?.content}</p>;
});

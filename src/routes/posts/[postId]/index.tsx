import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/schema";

export const usePost = routeLoader$(async (requestEvent) => {
  const { D1 } = requestEvent.platform.env;
  const db = drizzle(D1, { schema });
  return db.query.posts.findFirst();
});

export default component$(() => {
  const post = usePost();
  return <>{post.value?.content}</>;
});

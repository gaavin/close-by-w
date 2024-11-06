import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { sql } from "drizzle-orm";
import { drizzleFactory } from "~/lib/db";
import * as schema from "~/lib/schema";

export const usePost = routeLoader$(({ params, env }) =>
  drizzleFactory(env)
    .select()
    .from(schema.posts)
    .where(sql`${schema.posts.id} = ${params["postId"]}`)
    .get()
);

export default component$(() => {
  const { value: post } = usePost();
  return <p>{post?.content}</p>;
});

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { sql } from "drizzle-orm";
import { drizzleFactory } from "~/lib/db";
import * as schema from "~/lib/schema";

export const usePost = routeLoader$(
  async ({ params, env }) =>
    await drizzleFactory(env)
      .select({ content: schema.posts.content })
      .from(schema.posts)
      .where(sql`${schema.posts.id} = ${params["postId"]}`)
      .get()
);

export default component$(() => {
  return <p>{usePost().value?.content}</p>;
});

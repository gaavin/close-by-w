import { component$, type JSXOutput, Slot } from "@builder.io/qwik";
import { eq } from "drizzle-orm";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { drizzleFactory } from "~/lib/db";
import * as s from "~/lib/schema";
import invariant from "tiny-invariant";

export const usePosts = routeLoader$(async ({ env, query }) => {
  const pageSize = Number(query.get("pageSize")) || 10;
  const page = Number(query.get("page")) || 1;
  return drizzleFactory(env)
    .select({
      post: {
        id: s.posts.id,
        title: s.posts.title,
        description: s.posts.description,
        createdAt: s.posts.createdAt,
        updatedAt: s.posts.updatedAt,
      },
      author: {
        id: s.users.id,
        username: s.users.username,
      },
    })
    .from(s.posts)
    .leftJoin(s.users, eq(s.posts.authorId, s.users.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .all();
});

export default component$(() => {
  return usePosts().value.reduce((output, { post, author }) => {
    invariant(
      author && author.username,
      `No Author found in Post(id = ${post.id})`
    );
    return [
      ...output,
      <div>
        <Link href={post.id.toString()}>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <h3>
            {author.username} - {post.createdAt.toLocaleDateString()}
          </h3>
        </Link>
        <Slot />
      </div>,
    ];
  }, new Array<JSXOutput>());
});

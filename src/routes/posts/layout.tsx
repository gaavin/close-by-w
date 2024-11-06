import { component$, type JSXOutput, Slot } from "@builder.io/qwik";
import { eq } from "drizzle-orm";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { drizzleFactory } from "~/lib/db";
import * as schema from "~/lib/schema";

export const usePosts = routeLoader$(({ env }) =>
  drizzleFactory(env)
    .select({
      post: {
        id: schema.posts.id,
        title: schema.posts.title,
        description: schema.posts.description,
        createdAt: schema.posts.createdAt,
        updatedAt: schema.posts.updatedAt,
      },
      author: {
        id: schema.users.id,
        username: schema.users.username,
      },
    })
    .from(schema.posts)
    .leftJoin(schema.users, eq(schema.posts.authorId, schema.users.id))
    .all()
);

export default component$(() =>
  usePosts().value.reduce(
    (output, { post, author }) => [
      ...output,
      <div>
        <Link href={post.id.toString()}>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <h3>
            {author!.username} - {post.createdAt.toLocaleDateString()}
          </h3>
        </Link>
        <Slot />
      </div>,
    ],
    new Array<JSXOutput>()
  )
);

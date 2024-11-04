import { component$, type JSXOutput, Slot } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import invariant from "tiny-invariant";
import { drizzleFactory, pagination } from "~/lib/db";

export const usePosts = routeLoader$(async (requestEvent) => {
  const db = drizzleFactory(requestEvent.env);
  invariant(db);
  const posts = await db.query.posts.findMany({
    ...pagination(requestEvent.query),
    columns: {
      content: false,
    },
    with: {
      author: true,
    },
  });
  return posts;
});

export default component$(() => {
  const { value: posts } = usePosts();
  return posts.reduce((output, post) => {
    return [
      ...output,
      <div>
        <Link href={post.id.toString()}>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <h3>
            {post.author.username} - {post.createdAt.toLocaleDateString()}
          </h3>
        </Link>
        <Slot />
      </div>,
    ];
  }, new Array<JSXOutput>());
});

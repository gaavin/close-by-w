import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/schema";

export const usePostList = routeLoader$(async (requestEvent) => {
  const { D1 } = requestEvent.platform.env;
  const db = drizzle(D1, { schema });
  const posts = db.query.posts.findMany({
    columns: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
    },
    with: {
      author: {
        columns: {
          username: true,
        },
      },
    },
  });
  return posts;
});

export default component$(() => {
  const posts = usePostList();
  return (
    <>
      {posts.value.map((post) => (
        <a href={post.id.toString()}>
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h2>
              {post.author.username} - {post.createdAt.toLocaleDateString()}
            </h2>
            <h3>ID (DESCRIPTION){post.id}</h3>
          </div>
        </a>
      ))}
      <br />
      <Slot />
    </>
  );
});

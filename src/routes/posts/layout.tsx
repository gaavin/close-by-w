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
      <h1>Posts</h1>
      <ul>
        {posts.value.map((post) => (
          <li key={post.id}>
            <label>Title</label>
            <a href={post.id.toString()}>{post.title}</a>
            <label>Author</label>
            <li>{post.author.username}</li>
            <label>Date</label>
            <li>{post.createdAt.toUTCString()}</li>
            <label>Last Edited</label>
            <li>{post.createdAt.toUTCString()}</li>
          </li>
        ))}
      </ul>

      <label>Recent Posts</label>
      <ul>
        <li>
          <a href="/posts/big-chungus">Big Chungus</a>
        </li>
      </ul>
      <br />
      <Slot />
    </>
  );
});

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/schema";

export const useUsers = routeLoader$(async (requestEvent) => {
  const { D1 } = requestEvent.platform.env;
  const db = drizzle(D1, { schema });
  const posts = db.query.posts.findMany();
  return posts;
});

export default component$(() => {
  const posts = useUsers();
  return (
    <>
      <div>
        <label>Posts</label>
        <ul>
          {posts.value.map((post) => (
            <li>
              <ul>
                <label>Id</label>
                <li>{post.id}</li>
                <label>Author</label>
                <li>{post.userId}</li>
                <label>Date</label>
                <li>{post.createdAt.toUTCString()}</li>
                <label>Last Edited: </label>
                <li>{post.updatedAt.toUTCString()}</li>
              </ul>
            </li>
          ))}
        </ul>

        <label>Recent Posts</label>
        <ul>
          <li>
            <a href="/posts/big-chungus">Big Chungus</a>
          </li>
        </ul>
      </div>
      <br />
      <Slot />
    </>
  );
});

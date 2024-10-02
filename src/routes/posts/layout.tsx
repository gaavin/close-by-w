import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/schema";

export const useUsers = routeLoader$(async (requestEvent) => {
  const { D1 } = requestEvent.platform.env;
  const db = drizzle(D1, { schema });
  const users = await db
    .select({
      id: schema.usersTable.id,
      username: schema.usersTable.username,
      createdAt: schema.usersTable.createdAt,
      updatedAt: schema.usersTable.updatedAt,
    })
    .from(schema.usersTable);

  return users;
});

export default component$(() => {
  const users = useUsers();
  return (
    <>
      <div>
        <label>Users</label>
        <ul>
          {users.value.map((user) => (
            <li>
              <ul>
                <label>Id</label>
                <li>{user.id}</li>
                <label>Username</label>
                <li>{user.username}</li>
                <label>Joined</label>
                <li>{user.createdAt.toUTCString()}</li>
                <label>Updated At</label>
                <li>{user.updatedAt.toUTCString()}</li>
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

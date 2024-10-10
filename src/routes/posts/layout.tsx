import { component$, Resource, Slot, useResource$ } from "@builder.io/qwik";
import { useQuery } from "~/lib/db";
import { Link } from "@builder.io/qwik-city";

export { useQuery };

export default component$(() => {
  const postQuery = useResource$(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return [useQuery(async () => ""), controller];
  });

  return (
    <>
      <Resource
        value={postQuery}
        onResolved={(result) =>
          result.map((post) => (
            <Link href={post.id.toString()}>
              <div>
                <h1>{post.title}</h1>
                <h2>
                  {post.authorId} - {post.createdAt.toLocaleDateString()}
                </h2>
                <h3>ID (DESCRIPTION){post.id}</h3>
              </div>
            </Link>
          ))
        }
      />
      <Slot />
    </>
  );
});

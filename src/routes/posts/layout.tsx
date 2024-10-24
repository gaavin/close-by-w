import { component$, type JSXOutput, Resource, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useQuery } from "~/lib/queries";

export { useQuery };

export default component$(() => {
  const postsQuery = useQuery("posts");
  return (
    <>
      <Resource
        value={postsQuery}
        onResolved={(result) =>
          result.results.flat().reduce((output, post) => {
            if (!("title" in post)) {
              return output;
            }
            return [
              ...output,
              <Link href={post.id.toString()}>
                <div>
                  <h1>{post.title}</h1>
                  <h2>{post.authorId}</h2>
                  <h3>ID (DESCRIPTION){post.id}</h3>
                  <Slot name={post.id.toString()} />
                </div>
              </Link>,
            ];
          }, [] as JSXOutput[])
        }
      />
      <Slot />
    </>
  );
});

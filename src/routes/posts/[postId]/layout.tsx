import { component$, type JSXOutput, Resource, Slot } from "@builder.io/qwik";
import { NavLink } from "~/components/navlink";
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
              <div>
                <NavLink href={post.id.toString()}>
                  <h1>{post.title}</h1>
                  <h2>ID (DESCRIPTION){post.id}</h2>
                </NavLink>
                <h3>{post.authorId}</h3>
              </div>,
            ];
          }, [] as JSXOutput[])
        }
      />
      <Slot />
    </>
  );
});

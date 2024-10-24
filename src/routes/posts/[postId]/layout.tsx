import { component$, type JSXOutput, Resource, Slot } from "@builder.io/qwik";
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
            return [...output, <p>{post.content}</p>];
          }, [] as JSXOutput[])
        }
      />
      <Slot />
    </>
  );
});

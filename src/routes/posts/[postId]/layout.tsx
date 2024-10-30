import { component$, type JSXOutput, Resource, Slot } from "@builder.io/qwik";

export default component$(() => {
  const postsQuery = useThanosQuery("posts" as keyof );
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

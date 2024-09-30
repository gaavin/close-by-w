import { component$, Slot, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Post = component$(() => {
  const isOpen = useSignal(false);
  return (
    <>
      <h1 onClick$={() => (isOpen.value = !isOpen.value)}>
        {isOpen.value ? "▼" : "▶︎"}
        <Slot name="title" />
      </h1>
      {isOpen.value && <Slot />}
    </>
  );
});

export default component$(() => {
  const { params } = useLocation();
  const title = useSignal("post title");
  const description = useSignal("post description");

  return (
    <>
      <label>Title</label>
      <input bind:value={title} type="text" />
      <label>Description</label>
      <input bind:value={description} type="text" />
      <Post>
        <span q:slot="title">{title}</span>
        {description}
      </Post>
      <label>Share this post!</label>
      <a href={`/posts/${params.postId}`}>/posts/{params.postId}</a>
    </>
  );
});

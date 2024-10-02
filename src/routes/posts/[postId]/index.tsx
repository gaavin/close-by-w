import { component$, Slot, useSignal } from "@builder.io/qwik";

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
  const title = useSignal("big chungus");
  const description = useSignal("big big chungus big chungus big chungus");

  return (
    <>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <label>Title</label>
        <input bind:value={title} type="text" />
        <label>Description</label>
        <input bind:value={description} type="text" />
      </div>
      <Post>
        <span q:slot="title">{title}</span>
        {description}
      </Post>
    </>
  );
});

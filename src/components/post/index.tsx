import { component$, Slot, useSignal } from "@builder.io/qwik";

export const Post = component$(() => {
  const isOpen = useSignal(false);
  return (
    <div
      style={{
        display: "block",
      }}
    >
      <h1 onClick$={() => (isOpen.value = !isOpen.value)}>
        {isOpen.value ? "▼" : "▶︎"}
        <Slot name="title" />
      </h1>
      {isOpen.value && <Slot />}
    </div>
  );
});

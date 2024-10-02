import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div>
        <p>Chat!</p>
        <Slot />
      </div>
    </>
  );
});

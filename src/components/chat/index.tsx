import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div
        style={{
          height: "20rem",
          width: "20rem",
          background:
            "rgba(var(--dough-r), var(--dough-g), var(--dough-b), 0.1)",
        }}
      >
        <p>Chat!</p>
        <Slot />
      </div>
    </>
  );
});

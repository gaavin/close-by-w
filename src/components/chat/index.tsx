import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div
        style={{
          borderRadius: "0.5rem",
          paddingInline: "var(--size-sm)",
          paddingBlock: "var(--size-md)",
          width: "min-content",
          height: "min-content",
          background:
            "rgba(var(--dough-r), var(--dough-g), var(--dough-b), 0.08)",
        }}
      >
        <h3>Live Chat</h3>
        <p>felix: yo I want a treat</p>
        <p>felix: meow</p>
        <br />
        <input type="text" placeholder="you:" />
        <Slot />
      </div>
    </>
  );
});

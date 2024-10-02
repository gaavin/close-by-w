import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <label>Recent</label>
      <ul>
        <li>
          <a href="/posts/big-chungus">Big Chungus</a>
        </li>
      </ul>
      <Slot />
    </>
  );
});

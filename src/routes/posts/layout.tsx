import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div>
        <label>Recent Posts</label>
        <ul>
          <li>
            <a href="/posts/big-chungus">Big Chungus</a>
          </li>
        </ul>
      </div>
      <br />
      <Slot />
    </>
  );
});

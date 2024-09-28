import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const clickCount = useSignal(0);

  return (
    <div class="flex flex-col">
      <h2>Helloooo...</h2>
      <h3>welcome to the snow clearing app</h3>
      <button
        class="cb-button"
        onClick$={() => {
          clickCount.value++;
          if (clickCount.value > 3) {
            alert("it has snowed enough.");
          }
        }}
      >
        Let it snow
      </button>
      <p>snowed {clickCount.value} times</p>
    </div>
  );
});

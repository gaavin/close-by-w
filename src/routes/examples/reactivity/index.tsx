import { component$, useSignal, useTask$ } from "@builder.io/qwik";

export const Reactivity = component$(() => {
  const clickCount = useSignal(0);
  useTask$(({ track }) => {
    track(() => clickCount.value);
    if (clickCount.value > 3) {
      alert("it has snowed enough.");
    }
  });

  return (
    <>
      <button
        class="cb-button"
        onClick$={async () => {
          clickCount.value++;
        }}
      >
        Let it snow
      </button>
      <p>snowed {clickCount.value} times</p>;
    </>
  );
});

import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>welcome to my website</h1>
      <h2>
        Hi, I'm Gavin!
        <br />I am a junior software developer building web-based geospatial
        applications.
      </h2>
      <h3>
        This is my personal website where you will find personal projects of
        mine, development ramblings, and plenty of cat pictures 🐈
      </h3>
      <button class="cb-button">Click me</button>
    </>
  );
});

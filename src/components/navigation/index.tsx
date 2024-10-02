import { component$ } from "@builder.io/qwik";
import { NavLink } from "~/components/navlink";

export default component$(() => {
  return (
    <>
      <NavLink href="/" activeClass="text-green-600">
        <h3>Home</h3>
      </NavLink>
      <NavLink href="/posts" activeClass="text-green-600">
        <h3>Posts</h3>
      </NavLink>
    </>
  );
});

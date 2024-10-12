import {
  component$,
  noSerialize,
  Resource,
  useResource$,
} from "@builder.io/qwik";
import { NavLink } from "~/components/navlink";
import getD1 from "~/lib/compat/d1";

export default component$(() => {
  const postQuery = useResource$(() => {
    const abortController = noSerialize(new AbortController());
    return useQuery([abortController, {}]);
  });
  return (
    <Resource
      value={postQuery}
      onResolved={(result) =>
        result.map((post) => (
          <div>
            <NavLink href={post.id.toString()}>
              <h1>{post.title}</h1>
              <h2>ID (DESCRIPTION){post.id}</h2>
            </NavLink>
            <h3>
              {post.authorId} - {post.createdAt.toLocaleDateString()}
            </h3>
          </div>
        ))
      }
    />
  );
});

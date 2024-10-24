import { server$ } from "@builder.io/qwik-city";
import { QueryBuilder } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/lib/schema";
import getD1 from "../lib/compat/d1";
import invariant from "tiny-invariant";
import type { PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const queries = ["posts", "users"] as const;
const postsQuery = new QueryBuilder().select().from(schema.posts);
const usersQuery = new QueryBuilder().select().from(schema.users);

type QueryFunctionMap = {
  posts: typeof postsQuery;
  users: typeof usersQuery;
};

export const queryFunctions = new Map<Query, QueryFunctionMap[Query]>([
  ["posts", postsQuery],
  ["users", usersQuery],
]);

export const useQuery = server$(async function <Q extends Query>(
  this: {
    platform: PlatformCloudflarePages;
  },
  query: Q
) {
  const db = drizzle(await getD1(this), {
    schema,
  });

  const { searchParams } = new URL(this.platform.request.url);
  const limit = Number(searchParams.get("limit")) || undefined;
  const offset = Number(searchParams.get("offset")) || undefined;

  const bq = queryFunctions.get(query);
  const q = limit && offset ? bq?.offset(offset).limit(limit) : bq;
  invariant(
    q,
    `Invalid query: ${query}, please ensure it is defined in queries.ts`
  );

  type T = (typeof q)["_"]["result"];
  const result = db.run(q) as Promise<D1Result<T>>;
  return result;
});

export type Query = (typeof queries)[number];

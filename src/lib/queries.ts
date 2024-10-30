import { server$ } from "@builder.io/qwik-city";
import { drizzle, type DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "~/lib/schema";
import getD1 from "../lib/compat/d1";
import { type PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";

const queries = {
  Users: (db: DrizzleD1Database<typeof schema>) =>
    db.select().from(schema.users),
  Posts: (db: DrizzleD1Database<typeof schema>) =>
    db.select().from(schema.posts),
} as const;

type Query<
  Q extends keyof TQueries,
  TQueries = typeof queries,
  TQuery = (typeof queries)[Q],
> = Extract<TQueries, TQueries[Q]>;

type QP = Query<"Posts">;

export const useQuery = server$(async function <
  K extends keyof QueryMap,
  T = QueryResultMap[K],
>(
  this: {
    platform: PlatformCloudflarePages;
  },
  query: K
): Promise<T> {
  const db = drizzle(await getD1(this.platform), {
    schema,
  });

  const qFn: QueryFunction<K> = queries[query] satisfies QueryFunction<K>;
  const q: T = (await qFn(db)) as T;
  return q;
});

const sadas = await useQuery("Posts");
// 'sadas' now has the correct type for the "Posts" query result

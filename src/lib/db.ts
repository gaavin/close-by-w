import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import { type PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";

let getDevD1: any = () => {};

if (import.meta.env.DEV) {
  const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
  const { createSQLiteDB } = await import("@miniflare/shared");

  let devD1: any;

  getDevD1 = async () => {
    if (!devD1) {
      const sqlite = await createSQLiteDB(
        ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/d750aa51dff51a1df3de6a5fa202b33c3cc9be14e71d2a53b1eb22df0daf5de0.sqlite"
      );
      devD1 = new D1Database(new D1DatabaseAPI(sqlite));
    }
    return devD1;
  };
}

export const drizzleFactory = (env: PlatformCloudflarePages["env"]) => {
  if (env?.get("D1")) {
    return drizzle(env.get("D1"), { schema });
  }
  return drizzle(getDevD1(), { schema });
};

export const pagination = (query: URLSearchParams) => ({
  limit: Number(query.get("limit")) || undefined,
  offset: Number(query.get("offset")) || undefined,
});

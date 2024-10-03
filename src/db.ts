import { drizzle } from "drizzle-orm/d1";
import * as schema from "~/schema";
let getDevDb: any = () => {};

if (import.meta.env.DEV) {
  const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
  const { createSQLiteDB } = await import("@miniflare/shared");

  let devDb: any;

  getDevDb = async () => {
    if (!devDb) {
      const sqlLite = await createSQLiteDB(".wrangler/state/v3/d1/dev.sqlite3");
      devDb = new D1Database(new D1DatabaseAPI(sqlLite));
    }
    return devDb;
  };
}

const getDb = async (context: any) => {
  if (context.env.get("D1")) {
    return context.env.get("D1");
  }

  return getDevDb();
};

export default async (context: unknown) =>
  drizzle(await getDb(context as D1Database), { schema });

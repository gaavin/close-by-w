import { server$ } from "@builder.io/qwik-city";
import { RequestContext } from "@miniflare/shared";

let devDbFactory: any /* TODO: this is an explicit any, we are casting its type */ =
  () => {};

export const useQuery = server$(async function <T extends QueryFunction>(
  query: T
) {
  if (import.meta.env.DEV) {
    const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
    const { createSQLiteDB } = await import("@miniflare/shared");

    let devDb: any;
    devDbFactory = async () => {
      if (!devDb) {
        devDb = new D1Database(
          new D1DatabaseAPI(
            /* TODO: Don't hardcode this */
            await createSQLiteDB(".wrangler/state/v3/d1/dev.sqlite3")
          )
        );
      }
      return devDb;
    };

    if (this.env.get("D1")) {
      return this.env.get("D1");
    }

    return devDbFactory();
  }
});

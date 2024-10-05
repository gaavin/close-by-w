let devDbFactory: any = () => {};

export const getD1 = async (context: any) => {
  if (import.meta.env.DEV) {
    const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
    const { createSQLiteDB } = await import("@miniflare/shared");

    let devDb: any;
    devDbFactory = async () => {
      if (!devDb) {
        devDb = new D1Database(
          new D1DatabaseAPI(
            // TODO: Don't hardcode this
            await createSQLiteDB(".wrangler/state/v3/d1/dev.sqlite3")
          )
        );
      }
      return devDb;
    };

    if (context.env.get("D1")) {
      return context.env.get("D1");
    }

    return devDbFactory();
  }
};

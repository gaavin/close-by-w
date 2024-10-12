let getDevD1: any = () => {};

if (import.meta.env.DEV) {
  const { D1Database, D1DatabaseAPI } = await import("@miniflare/d1");
  const { createSQLiteDB } = await import("@miniflare/shared");

  let devD1: any;

  getDevD1 = async () => {
    if (!devD1) {
      const sqlite = await createSQLiteDB(".wrangler/state/v3/d1/dev.sqlite3");
      devD1 = new D1Database(new D1DatabaseAPI(sqlite));
    }
    return devD1;
  };
}

const getD1 = async (context: any) => {
  if (context.env.get("D1")) {
    return context.env.get("D1");
  }

  return getDevD1();
};

export default getD1;

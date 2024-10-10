import type { DrizzleD1Database } from "drizzle-orm/d1";
import type * as schema from "~/lib/schema";

export type Schema = typeof schema;
export type Database = DrizzleD1Database<typeof schema>;

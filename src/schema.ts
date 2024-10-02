import { sql, relations } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

const baseTable = {
  id: integer("id").primaryKey(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
};

export const users = sqliteTable("users", {
  ...baseTable,
  username: text("username"),
});

export const posts = sqliteTable("posts", {
  ...baseTable,
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
  userId: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

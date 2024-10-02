import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: "",
    token: "",
    databaseId: "f789dbca-fe88-4889-9571-d1f0eaa433bf",
  },
});

import { drizzle } from "drizzle-orm/d1";
import { getD1 } from "~/compat";
import * as schema from "~/lib/schema";
import type { RequestEventLoader } from "@builder.io/qwik-city";

export const drizzleFactory = async (
  requestEvent: RequestEventLoader<QwikCityPlatform>
) => drizzle(await getD1(requestEvent), { schema });

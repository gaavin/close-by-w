import { drizzle } from "drizzle-orm/d1";
import type { RequestEventLoader } from "@builder.io/qwik-city";
// TODO: these *have* to be ../ imports to be resolved correctly at buildtime
import { getD1 } from "../compat";
import * as schema from "../lib/schema";

export const drizzleFactory = async (
  requestEvent: RequestEventLoader<QwikCityPlatform>
) => drizzle(await getD1(requestEvent), { schema });

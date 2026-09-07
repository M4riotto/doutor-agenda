import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { defineRelations } from "drizzle-orm/relations";

const relations = defineRelations(schema);

export const db = drizzle(process.env.DATABASE_URL!, { relations });

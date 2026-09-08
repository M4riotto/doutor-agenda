import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { defineRelations } from "drizzle-orm/relations";

const relations = defineRelations(schema, (r) => ({
  usersToClinicsTable: {
    clinic: r.one.clinicsTable({
      from: r.usersToClinicsTable.clinicId,
      to: r.clinicsTable.id,
    }),
  },
}));

export const db = drizzle(process.env.DATABASE_URL!, {
  relations,
});

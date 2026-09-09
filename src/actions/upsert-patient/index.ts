"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

import { upsertPatientSchema } from "./schema";

export const upsertPatient = actionClient
  .schema(upsertPatientSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) throw new Error("Unauthorized");
    if (!session.user.clinic?.id) throw new Error("Clinic not found");

    const { id, ...patient } = parsedInput;
    const clinicId = session.user.clinic.id;
    const savedPatients = await db
      .insert(patientsTable)
      .values({ ...patient, id, clinicId })
      .onConflictDoUpdate({
        target: patientsTable.id,
        set: patient,
        setWhere: eq(patientsTable.clinicId, clinicId),
      })
      .returning({ id: patientsTable.id });

    if (!savedPatients.length) throw new Error("Patient not found");
    revalidatePath("/patients");
  });

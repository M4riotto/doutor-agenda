"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { z } from "zod";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

export const deleteDoctor = actionClient
  .schema(
    z.object({
      id: z.string().uuid(),
    }),
  )
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      throw new Error("Unauthorized");
    }
    if (!session.user.clinic?.id) {
      throw new Error("Clinic not found");
    }
    const doctor = await db.query.doctorsTable.findFirst({
      where: {
        id: parsedInput.id,
        clinicId: session.user.clinic.id,
      },
    });
    if (!doctor) {
      throw new Error("Médico não encontrado");
    }
    if (doctor.clinicId !== session.user.clinic.id) {
      throw new Error("Você não tem permissão para deletar este médico");
    }
    await db
      .delete(doctorsTable)
      .where(
        and(
          eq(doctorsTable.id, parsedInput.id),
          eq(doctorsTable.clinicId, session.user.clinic.id),
        ),
      );
    revalidatePath("/doctors");
  });

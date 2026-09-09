import { z } from "zod";

export const upsertPatientSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().trim().min(1, "Nome é obrigatório."),
  email: z.string().trim().email("Informe um email válido."),
  phoneNumber: z
    .string()
    .regex(/^\d{10,11}$/, "Informe um telefone com DDD e 10 ou 11 dígitos."),
  sex: z.enum(["male", "female", "other"], { error: "Selecione o sexo." }),
});

export type UpsertPatientSchema = z.infer<typeof upsertPatientSchema>;

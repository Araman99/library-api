import { z } from "zod";

export const borrowSchema = z.object({
  book: z.string(),
  quantity: z.number().int().positive(),
  dueDate: z.string().transform((str) => new Date(str)),
});

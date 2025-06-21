import { z } from "zod";
import { Genre } from "../utils/genre.enum";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.nativeEnum(Genre),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.number().int().nonnegative(),
  available: z.boolean().optional(),
});

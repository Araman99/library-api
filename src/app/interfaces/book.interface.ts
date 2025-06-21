import { Document } from "mongoose";
import { Genre } from "../utils/genre.enum";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  updateAvailability(): void;
}

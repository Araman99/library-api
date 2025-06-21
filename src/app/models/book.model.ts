import mongoose, { Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";
import { Genre } from "../utils/genre.enum";

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: Object.values(Genre), required: true },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

BookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

BookSchema.pre<IBook>("save", function (next) {
  this.updateAvailability();
  next();
});

export const Book = mongoose.model<IBook>("Book", BookSchema);

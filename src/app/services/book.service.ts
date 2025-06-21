import { Book } from "../models/book.model";

export const createBookService = (data: any) => new Book(data).save();
export const getBooksService = (filter: any, sort: any, limit: number) =>
  Book.find(filter).sort(sort).limit(limit);
export const getBookByIdService = (id: string) => Book.findById(id);
export const updateBookService = (id: string, data: any) =>
  Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteBookService = (id: string) => Book.findByIdAndDelete(id);

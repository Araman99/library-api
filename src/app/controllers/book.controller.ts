import { Request, Response } from "express";
import * as BookService from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await BookService.createBookService(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Validation failed", error });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "10",
    } = req.query;
    const books = await BookService.getBooksService(
      filter ? { genre: filter } : {},
      { [sortBy as string]: sort === "asc" ? 1 : -1 },
      parseInt(limit as string)
    );
    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving books", error });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookService.getBookByIdService(req.params.bookId);
    if (!book) throw new Error("Book not found");
    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Error retrieving book", error });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await BookService.updateBookService(
      req.params.bookId,
      req.body
    );
    res.json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error updating book", error });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await BookService.deleteBookService(req.params.bookId);
    res.json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting book", error });
  }
};

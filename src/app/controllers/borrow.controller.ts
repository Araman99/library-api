import { Request, Response } from "express";
import * as BorrowService from "../services/borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;
    const borrow = await BorrowService.borrowBookService(
      book,
      quantity,
      dueDate
    );
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Borrow failed", error });
  }
};

export const getBorrowSummary = async (_: Request, res: Response) => {
  try {
    const summary = await BorrowService.getBorrowSummaryService();
    res.json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Aggregation error", error });
  }
};

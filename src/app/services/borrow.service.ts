import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";

export const borrowBookService = async (
  bookId: string,
  quantity: number,
  dueDate: Date
) => {
  const book = await Book.findById(bookId);
  if (!book || book.copies < quantity)
    throw new Error("Not enough copies available");

  book.copies -= quantity;
  book.updateAvailability();
  await book.save();

  return Borrow.create({ book: bookId, quantity, dueDate });
};

export const getBorrowSummaryService = () =>
  Borrow.aggregate([
    { $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } } },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    { $unwind: "$bookDetails" },
    {
      $project: {
        book: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);

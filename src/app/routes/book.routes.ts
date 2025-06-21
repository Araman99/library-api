import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { bookSchema } from "../validators/book.validator";

const router = express.Router();

router.post("/", validateRequest(bookSchema), createBook);
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;

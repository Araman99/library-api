import express from "express";
import { borrowBook, getBorrowSummary } from "../controllers/borrow.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { borrowSchema } from "../validators/borrow.validator";

const router = express.Router();

router.post("/", validateRequest(borrowSchema), borrowBook);
router.get("/", getBorrowSummary);

export default router;

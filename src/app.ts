import express, { Request, Response } from "express";
import bookRoutes from "./app/routes/book.routes";
import borrowRoutes from "./app/routes/borrow.routes";

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Library Management Assignment!!!");
});
export default app;

import { Router } from "express";
import { getAllBooks } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.get("/all", getAllBooks);

export default bookRouter;

import express from "express";

import {captureBill, viewBill} from "../controllers/billController.js";
import { authenticate } from '../middlewares/auth.js';

const billRouter = express.Router();

// capture bill
billRouter.post("/", captureBill);

// View a bill
billRouter.get("/:id", viewBill);


export default billRouter;





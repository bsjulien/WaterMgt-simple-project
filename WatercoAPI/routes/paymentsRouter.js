import express from "express";

import {capturePayment, viewAllPayments, ViewPaymentByPremise} from "../controllers/paymentsController.js";
import { authenticate } from '../middlewares/auth.js';

const paymentsRouter = express.Router();

// capture payment
paymentsRouter.post("/", capturePayment);

// View bills
paymentsRouter.get("/", viewAllPayments);

// View bill by premise
paymentsRouter.get("/bypremise/:id", ViewPaymentByPremise);


export default paymentsRouter;





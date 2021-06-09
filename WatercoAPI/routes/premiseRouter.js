import express from "express";

import {addPremise, viewPremise, viewAllPremises, updatePremise, viewMemberPremise} from "../controllers/premiseController.js";
import { authenticate } from '../middlewares/auth.js';

const premiseRouter = express.Router();

// Add a premise
premiseRouter.post("/", addPremise);

// View a premise // premise/:id
premiseRouter.get("/:id", viewPremise);

// View all premises // premise/
premiseRouter.get("/" ,viewAllPremises);

// Update premise record // premise/
premiseRouter.put("/:id", updatePremise);

// view member premise
premiseRouter.get("/bymember/:id", viewMemberPremise)

export default premiseRouter;





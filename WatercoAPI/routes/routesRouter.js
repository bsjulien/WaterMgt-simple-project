import express from "express";

import {addRoute, viewRoutes, updateRoute, ViewPremiseOnRoute} from "../controllers/routesController.js";
import { authenticate } from '../middlewares/auth.js';

const routesRouter = express.Router();

// Add a route
routesRouter.post("/", addRoute);

// View routes // routes
routesRouter.get("/", viewRoutes);

// Update route record // routess/
routesRouter.put("/:id", updateRoute);

// View Premises on Route
routesRouter.get("/bypremise/:id", ViewPremiseOnRoute);



export default routesRouter;





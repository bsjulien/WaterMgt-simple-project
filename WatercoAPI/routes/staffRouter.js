import express from "express";

import { addUser, viewAllUsers, signIn, deleteStaff, updateStaff} from '../controllers/staffController.js';
import { authenticate } from '../middlewares/auth.js';


const staffRouter = express.Router();

//Add a User - Sign Up - Authenticate.
staffRouter.post("/",  addUser);

//Add a User - log in/ Sign In - No need of Authentication
staffRouter.post("/signin", signIn);

//View all Users users/ - Authenticate.
staffRouter.get("/", viewAllUsers);

//Delete staff/ - Authenticate
staffRouter.delete("/:id", deleteStaff);

//Update staff/ - Authenticate
staffRouter.put("/:id", updateStaff)

export default staffRouter;
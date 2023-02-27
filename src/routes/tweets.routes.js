import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post('/sign-up', signUp);

export default AuthRouter;
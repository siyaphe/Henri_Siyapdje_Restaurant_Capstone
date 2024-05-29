import express from "express"
// import express framework
import { loginUser,registerUser } from "../controllers/userController.js"
//--------------Handling user registration and login
const userRouter = express.Router()

userRouter.post("/register",registerUser)
//------------------- [registering new user]
userRouter.post("/login", loginUser)
//-----------------[User login authentication]

export default userRouter;

import { Router } from "express";
import { makeUserController } from "../factories/userController.factory";
import { validateBody } from "../middlewares/validate";
import { UserRegisterDto } from "../DTO/user.dto";

const userRoute = Router()
const userController = makeUserController()

userRoute.post('/register', validateBody(UserRegisterDto), userController.register.bind(userController))

userRoute.post('/login', userController.login.bind(userController))

export default userRoute
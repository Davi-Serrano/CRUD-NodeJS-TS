import { Router } from "express"
import { UsersRepository } from "../modules/user/repositories/implemantations/userRepository";
import { usersRoutes } from "./users.routers"

const router = Router()

router.use("/users", usersRoutes)

export { router };
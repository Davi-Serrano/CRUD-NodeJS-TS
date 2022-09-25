import { Router } from "express"
import { UsersRepository } from "../modules/user/repositories/userRepository";
import { usersRoutes } from "./users.routers"

const router = Router()

router.use("/users", usersRoutes)

export { router };
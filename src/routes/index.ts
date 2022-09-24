import { Router } from "express"
import { usersRoutes } from "./users.routers"

const router = Router()

router.use("/users", usersRoutes)

export { router };
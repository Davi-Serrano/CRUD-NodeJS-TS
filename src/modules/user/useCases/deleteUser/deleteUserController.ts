import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";


class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    handle(req: Request, res: Response){
        const { name } = req.body.user

        this.deleteUserUseCase.execute(name)

        res.sendStatus(201)
    }
}

export { DeleteUserController }
import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase){}

    handle(req: Request, res: Response){
        const { name, actualName } = req.body.user

        this.updateUserUseCase.execute({name, actualName})

        res.sendStatus(201)
    }
}

export { UpdateUserController }
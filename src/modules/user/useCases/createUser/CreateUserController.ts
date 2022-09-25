import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(req: Request, res: Response){
        const { name, password } = req.body.user
    
        this.createUserUseCase.execute({name, password})
   
        res.sendStatus(201)
    }
}


export { CreateUserController };
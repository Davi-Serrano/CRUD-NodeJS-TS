import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(req: Request, res: Response){
        const { name, password } = req.body.user
        
        try{
            this.createUserUseCase.execute({name, password})
            res.sendStatus(201)
        }
        catch(err){
            console.log(err)
            return res.sendStatus(400)
        }
   
    }
}


export { CreateUserController };
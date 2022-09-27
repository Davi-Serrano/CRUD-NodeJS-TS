import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUserUseCase";

class ListUsersController {
    
    constructor(private listAllUsersUseCase: ListUsersUseCase){}
    
    async handle(req: Request, res: Response){

        try{        
            const allUsers = await this.listAllUsersUseCase.execute();
            
            return res.json(allUsers)
        }catch(err){
            console.log(err);
            return res.sendStatus(400)
        }
    }
}

export { ListUsersController}
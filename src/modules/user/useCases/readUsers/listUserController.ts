import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUserUseCase";

class ListUsersController {
    
    constructor(private listAllUsersUseCase: ListUsersUseCase){}
    
    handle(req: Request, res: Response){

       const all = this.listAllUsersUseCase.execute();

       return res.json(all)
    }
}

export { ListUsersController}
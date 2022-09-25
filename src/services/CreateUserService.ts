import { IUserReposioty } from "../repositories/IUserRepository";
import { UsersRepository } from "../repositories/userRepository";

interface IRequest {
    name: string;
    password: string;
}

class CreateUserService{
    constructor(private userReposiotry: IUserReposioty){}

    execute({ name, password}: IRequest): void{

        const userAlreadyExists = this.userReposiotry.getUserByName(name)

        if(userAlreadyExists){
            throw new Error("User already Exists");
        }

        this.userReposiotry.create({name, password});
    }


}




export { CreateUserService };
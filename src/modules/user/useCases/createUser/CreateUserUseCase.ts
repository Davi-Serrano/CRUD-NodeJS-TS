import { IUserReposioty } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    password: string;
}

class CreateUserUseCase{
    constructor(private userReposiotry: IUserReposioty){}

    execute({ name, password}: IRequest): void{

        const userAlreadyExists = this.userReposiotry.getUserByName(name)

        if(userAlreadyExists){
            throw new Error("User already Exists");
        }

        this.userReposiotry.create({name, password});
    }
}

export { CreateUserUseCase };
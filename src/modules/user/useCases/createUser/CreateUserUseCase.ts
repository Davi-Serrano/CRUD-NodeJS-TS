import { IMongoDBRepository } from "../../repositories/IMongoDBRepository";
import { IUserReposioty } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    password: string;
}

class CreateUserUseCase{
    constructor(private userReposiotry: IMongoDBRepository){}

    execute({ name, password}: IRequest): void{

        this.userReposiotry.create({name, password});
    }
}

export { CreateUserUseCase };
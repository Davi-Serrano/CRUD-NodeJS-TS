import { IMongoDBRepository } from "../../repositories/IMongoDBRepository";
import { UserUpdateNameDTO } from "../../repositories/IUserRepository";

class UpdateUserUseCase {
    constructor(private usersReposioty: IMongoDBRepository){}

    async execute({name, actualName}: UserUpdateNameDTO){
        await this.usersReposioty.updateName({name, actualName})
    }
}

export { UpdateUserUseCase }
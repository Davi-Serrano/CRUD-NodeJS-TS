import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { UserUpdateNameDTO } from "../../repositories/IUserRepository";

class UpdateUserUseCase {
    constructor(private usersReposioty: UsersRepository){}

    execute({name, actualName}: UserUpdateNameDTO){

        const nameWillBeChanged = this.usersReposioty.getUserByName(name)

        if(!nameWillBeChanged){
            throw new Error("User Dont Exists")
        }

        this.usersReposioty.updateName({name, actualName})
    }
}

export { UpdateUserUseCase }
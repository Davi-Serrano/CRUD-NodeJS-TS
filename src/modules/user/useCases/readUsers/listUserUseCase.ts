import { User } from "../../model/user";
import { IMongoDBRepository } from "../../repositories/IMongoDBRepository";
import { IUserReposioty } from "../../repositories/IUserRepository";

class ListUsersUseCase {
    constructor(private userRepository: IMongoDBRepository ){}

    async execute(): Promise<User[]>{
        const allUsers = await this.userRepository.getUsers()


        return allUsers
    }
}

export { ListUsersUseCase}
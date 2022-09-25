import { User } from "../../model/user";
import { IUserReposioty } from "../../repositories/IUserRepository";

class ListUsersUseCase {
    constructor(private userRepository: IUserReposioty ){}

    execute(): User[]{
        const all = this.userRepository.getUsers()

        return all
    }
}

export { ListUsersUseCase}
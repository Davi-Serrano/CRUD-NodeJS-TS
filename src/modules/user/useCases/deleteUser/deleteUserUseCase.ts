import { UsersRepository } from "../../repositories/implemantations/userRepository";

class DeleteUserUseCase {
    constructor(private userRepository: UsersRepository){}

    execute(name: string){
        this.userRepository.deleteUser(name)
    }
}

export { DeleteUserUseCase };
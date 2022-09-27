import { IMongoDBRepository } from "../../repositories/IMongoDBRepository";


class DeleteUserUseCase {
    constructor(private userRepository: IMongoDBRepository){}

    execute(name: string){
        this.userRepository.deleteUser(name)
    }
}

export { DeleteUserUseCase };
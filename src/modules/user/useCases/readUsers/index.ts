
import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { ListUsersController } from "./listUserController";
import { ListUsersUseCase } from "./listUserUseCase";


const userReposiotry = UsersRepository.getInstance()

const listAllUsersUseCase = new ListUsersUseCase(userReposiotry)

const listAllUsersController = new ListUsersController(listAllUsersUseCase);

export { listAllUsersController };
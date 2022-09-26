import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const userReposiotry = UsersRepository.getInstance()

const updateUserUseCase = new UpdateUserUseCase(userReposiotry)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController };
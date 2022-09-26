import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const userRepository = UsersRepository.getInstance()

const deleteUserUseCase = new DeleteUserUseCase(userRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController };
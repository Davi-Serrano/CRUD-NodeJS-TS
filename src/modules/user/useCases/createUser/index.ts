import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userReposiotry = UsersRepository.getInstance()

const createUSerUseCase = new CreateUserUseCase(userReposiotry);

const createUserController = new CreateUserController(createUSerUseCase);

export { createUserController };
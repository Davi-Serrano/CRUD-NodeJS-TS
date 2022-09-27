import { User } from "../model/user";

interface UserDTO{
    name: string,
    password: string;
}

interface UserUpdateNameDTO{
    name: string;
    actualName: string;
}

interface IMongoDBRepository{
    create({name, password}: UserDTO): Promise<void>;
    getUsers(): Promise<User[]>;
    deleteUser(name:string): Promise<void>;
    updateName({name, actualName}: UserUpdateNameDTO): Promise<void>;
}

export { IMongoDBRepository, UserUpdateNameDTO, UserDTO }
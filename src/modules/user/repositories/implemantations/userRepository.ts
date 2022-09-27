import { UserModel } from "../../../../database/UserSchema";
import { User } from "../../model/user";
import { IMongoDBRepository } from "../IMongoDBRepository";
import {  UserDTO, UserUpdateNameDTO } from "../IUserRepository";

//singleton






class UsersRepository implements IMongoDBRepository{
    private repository: any

    private static INSTANCE: UsersRepository;

    private constructor(){
        this.repository = [];
    }

    public static getInstance(): UsersRepository{

        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE;
    }

   async create({name, password}: UserDTO){
        const user = new User()

        Object.assign(user,{
            name,
            password
        })

        await UserModel.create(user);
    }

    async getUsers(){
        const AllUsers = await UserModel.find()

        return AllUsers
    }


    async updateName({name, actualName}: UserUpdateNameDTO){
        await UserModel.findOneAndUpdate({name}, {name: actualName}, {new: true});

    }

    async deleteUser(name: string){
         await UserModel.deleteOne({name})
    }

}

export  { UsersRepository };
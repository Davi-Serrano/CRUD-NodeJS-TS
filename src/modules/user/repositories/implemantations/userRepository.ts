import { User } from "../../model/user";
import { IUserReposioty, UserDTO, UserUpdateNameDTO } from "../IUserRepository";

//singleton






class UsersRepository implements IUserReposioty{
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

    create({name, password}: UserDTO): void{
        const user = new User()

        Object.assign(user,{
            name,
            password
        })

        this.repository.push(user);
    }

    getUsers(){
        return this.repository
    }

    getUserByName(name: string){
        const user = this.repository.find( (user: UserDTO) => user.name === name)

        return user;
    }

    updateName({name, actualName}: UserUpdateNameDTO){
        const user = this.getUserByName(name)

        user.name = actualName

    }

    deleteUser(name: string){
        const indexOfuserWillBeDeleted = this.repository.findIndex( (user: UserDTO) => user.name === name)
   
           if(indexOfuserWillBeDeleted === -1){
               throw new Error("User dont exists")
           }
   
           this.repository.splice(indexOfuserWillBeDeleted, 1)

    }

}

export  { UsersRepository };
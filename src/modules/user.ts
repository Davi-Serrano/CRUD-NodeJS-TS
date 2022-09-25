import { User } from "../model/user";

interface UserDTO{
    name: string,
    password: string;
}

interface IUser{
    create({name, password}: UserDTO): void;
    getUsers(): any;
    getUserByName(name:string): UserDTO;
    updateName({name, actualName}: UserUpdateNameDTO): void
    getUserByName(name:string): void;

}

interface UserUpdateNameDTO{
    name: string;
    actualName: string;
}

class Users implements IUser{
    private repository: any

    constructor(){
        this.repository = [];
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

    deleteUsers(name: string){
        const indexOfuserWillBeDeleted = this.repository.findIndex( (user: UserDTO) => user.name === name)

        this.repository.splice(indexOfuserWillBeDeleted, 0)

        console.log(this.repository)
    }

}

export  { Users };
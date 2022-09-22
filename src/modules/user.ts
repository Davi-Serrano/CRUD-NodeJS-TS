interface UserDTO{
    name: string,
}


interface IUser{
    create({name}: UserDTO): void;
}


class User implements IUser{
    private repository: any

    constructor(){
        this.repository = [];
    }

    create(name: UserDTO): void{

        this.repository.push(name);
    }



    getUsers(){
        return this.repository
    }

}

export  { User };
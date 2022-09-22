interface UserDTO{
    name: string,
    age: number,
}


interface IUser{
    create({name, age}: UserDTO): void;
}




class User implements IUser{
    private repository: any

    constructor(){
        this.repository = [];
    }

    create({name, age}: UserDTO): void{
        const user = {
            name,
            age
        }

        this.repository.push(user);
    }

}
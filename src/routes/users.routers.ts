import { Router } from "express"
import { UsersRepository } from "../repositories/userRepository";

import { CreateUserService } from "../services/CreateUserService";

const usersRoutes = Router()
const userReposiotry = new UsersRepository()


usersRoutes.get("/", (req, res)=>{

    const listof = userReposiotry.getUsers()
 
    res.json(listof)
 });
 
 usersRoutes.get("/user", (req, res)=>{
 
     const { name } = req.body.user
 
    const userFind = userReposiotry.getUserByName(name)
 
     res.json(userFind)
 
 });
 
 
 usersRoutes.post("/lero", (req, res)=>{
 
     const { name, password} = req.body.user
    
     const createUserServie = new CreateUserService(userReposiotry)

     createUserServie.execute({name, password})

     res.send("Created")
 });

 usersRoutes.put("/upd", (req, res)=>{

    const { name, actualName } = req.body.user

    userReposiotry.updateName({name, actualName})

    res.json("Name Updated")

 })
 
 
 usersRoutes.delete("/del", (req, res)=>{
 
     const { name } = req.body.user
 
     userReposiotry.deleteUsers(name)
 
     res.json("Deleted")
 
 });

 export { usersRoutes };
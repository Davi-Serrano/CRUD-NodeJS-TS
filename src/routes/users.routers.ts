import { Router } from "express"
import { Users } from "../modules/user";

const usersRoutes = Router()
const user = new Users()


usersRoutes.get("/", (req, res)=>{

    const listof = user.getUsers()
 
    res.sendStatus(201).json(listof)
 });
 
 usersRoutes.get("/user", (req, res)=>{
 
     const { name } = req.body.user
 
    const userFind = user.getUserByName(name)
 
     res.sendStatus(201).json(userFind)
 
 });
 
 
 usersRoutes.post("/lero", (req, res)=>{
 
     const { name, password} = req.body.user
 
     user.create({name, password})
 
     res.sendStatus(201).json("User Created")
 
 });

 usersRoutes.put("/upd", (req, res)=>{

    const { name, actualName } = req.body.user

    user.updateName({name, actualName})

    res.sendStatus(201).json("Name Updated")

 })
 
 
 usersRoutes.delete("/del", (req, res)=>{
 
     const { name } = req.body.user
 
     user.deleteUsers(name)
 
     res.json("Deleted")
 
 });

 export { usersRoutes };
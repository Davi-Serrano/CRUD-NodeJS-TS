import { Router } from "express"
import { Users } from "../modules/user";

const usersRoutes = Router()
const user = new Users()


usersRoutes.get("/", (req, res)=>{

    const listof = user.getUsers()
 
    res.json(listof)
 });
 
 usersRoutes.get("/user", (req, res)=>{
 
     const { name } = req.body.user
 
    const userFind = user.getUserByName(name)
 
     res.json(userFind)
 
 });
 
 
 usersRoutes.post("/lero", (req, res)=>{
 
     const { name, password} = req.body.user
 
     user.create({name, password})
 
     res.json("Created")
 
 });

 usersRoutes.put("/upd", (req, res)=>{

    const { name, actualName } = req.body.user

    user.updateName({name, actualName})

    res.json("Name Changed")

 })
 
 
 usersRoutes.delete("/del", (req, res)=>{
 
     const { name } = req.body.user
 
     user.deleteUsers(name)
 
     res.json("Deleted")
 
 });

 export { usersRoutes };
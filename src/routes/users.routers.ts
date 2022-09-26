import { Router } from "express"
import { UsersRepository } from "../modules/user/repositories/implemantations/userRepository";
import { createUserController } from "../modules/user/useCases/createUser";
import { deleteUserController } from "../modules/user/useCases/deleteUser";
import { listAllUsersController } from "../modules/user/useCases/readUsers";
import { updateUserController } from "../modules/user/useCases/updateUser";


const usersRoutes = Router()


usersRoutes.get("/", (req, res)=>{
    return listAllUsersController.handle(req, res);
 });
 
 usersRoutes.post("/lero", (req, res)=>{
    return createUserController.handle(req, res);
 });

//  usersRoutes.get("/user", (req, res)=>{
 
//     const { name } = req.body.user
 
//     const userFind = userReposiotry.getUserByName(name)
 
//     res.json(userFind)
 
//  });
 

 usersRoutes.put("/upd", (req, res)=>{
   return updateUserController.handle(req, res)
 })
 
 
 usersRoutes.delete("/del", (req, res)=>{
   return deleteUserController.handle(req, res)
 });

 export { usersRoutes };
import { Router } from "express"
import { UsersRepository } from "../modules/user/repositories/userRepository";
import { createUserController } from "../modules/user/useCases/createUser";
import { listAllUsersController } from "../modules/user/useCases/listUsers";


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
 

//  usersRoutes.put("/upd", (req, res)=>{

//     const { name, actualName } = req.body.user

//     userReposiotry.updateName({name, actualName})

//     res.json("Name Updated")

//  })
 
 
//  usersRoutes.delete("/del", (req, res)=>{
 
//      const { name } = req.body.user
 
//      userReposiotry.deleteUsers(name)
 
//      res.json("Deleted")
 
//  });

 export { usersRoutes };
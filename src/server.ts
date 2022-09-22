import express, { json } from 'express'
import { User } from './modules/user'

const app = express()
const user = new User

app.get("/", (req, res)=>{

   const listof = user.getUsers()

   res.json(listof)
})


app.post("/lero", (req, res)=>{

    const name = req.body.name

    user.create(name)

    res.send(201).json("Created")

})

app.listen((3000), ()=>{
    console.log("Server rodando")
})
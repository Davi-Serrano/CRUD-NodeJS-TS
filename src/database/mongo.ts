import { connect } from 'mongoose';
import dotenv from "dotenv"
dotenv.config();

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@crud.yupwrne.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{console.log('MongoDB conectado')}).catch((err) => console.log(err))
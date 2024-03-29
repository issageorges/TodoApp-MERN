import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import todoRoutes from "./routes/todo.js"
import userRouter from './routes/user.js'
import noteRouter from './routes/note.js'

const app = express()

const PORT = 4500

app.use(express.json())
app.use(cors())

app.use('/todos', todoRoutes);
app.use('/user',userRouter)
app.use("/note",noteRouter)

app.listen(PORT,()=>{
    mongoose.connect("mongodb+srv://issageorgesqi:ZgiKKIPElNMgfaUP@cluster0.hghkqdt.mongodb.net/todoapp")
    .then(()=>console.log("mongodb connected"))
    .catch((error)=> console.log(error))
    console.log(`server is running on port ${PORT}`)

})
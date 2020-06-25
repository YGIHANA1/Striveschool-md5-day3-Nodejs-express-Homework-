const express= require("express")
const studentRoutes=require("./services/students")
const server = express()

server.use(express.json())
server.use("/students",studentRoutes)

const port = process.env.PORT




server.listen(port,() =>{
    console.log(`server is running on port 3004: ${port}`)
})
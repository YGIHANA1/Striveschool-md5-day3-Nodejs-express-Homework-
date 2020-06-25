const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")
  
const router = express.Router()

const readFile=(fileName) =>{
const buffer= fs.readFileSync(path.join(__dirname, fileName))
return JSON.parse(buffer.toString())

}


router.get("/",(req,res)=>{
const studentsDB = readFile("students.json")

if(req.query && req.query.name){
const filteredStudents = studentsDB.filter((student) => student.hasOwnProperty(name) && student.name === req.query.name)
res.send(filteredStudents)
}else{

    res.send(studentsDB)
}
})

router.get("/:id",(req,res)=>{

const studentsDB = readFile("students.json") 
const retrievedStudent = studentsDB.filter((student)=>student.ID===req.params.id) 

    res.send(retrievedStudent)
})

router.post("/",(req,res)=>{

const studentsDB = readFile("students.json")
const newStudent ={...req.body, ID:uniqid(), createAt: new Date()} 
 
studentsDB.push(newStudent)
 fs.writeFileSync(path.join(__dirname,"students.json"),studentsDB)
res.status(201).send(newStudent)

})


router.put("/",(req,res)=>{
    
})

router.delete("/",(req,res)=>{
    
})


module.exports=router
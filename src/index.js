const express=require("express")
const bodyParser=require("body-parser")
const route=require("./routes/route.js")

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://prakash:prakash@cluster0.4qxv0.mongodb.net/SHORTEN-URL?authSource=admin&replicaSet=atlas-13sjqg-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {useNewUrlParser: true})
 .then(()=> console.log("mongodb is connected"))
 .catch(err => console.log(err))


  app.use("/",route)

  app.listen(process.env.PORt || 3000, function(){
      console.log(`express app runing port` + (process.env.PORt || 3000))


  })
const express = require("express");



const Urlcontroller=require("../controllers/Urlcontroller")
const router=express.Router()


router.post("/url/shorten",Urlcontroller.shortenUrl)


 router.get("/:urlCode",Urlcontroller.getUrl)




module.exports=router

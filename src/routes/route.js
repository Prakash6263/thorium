const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookcollection= require("../collection/bookcollection")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", bookcollection.createbook  )

router.get("/getbookData", bookcollection.getbookData)

module.exports = router;
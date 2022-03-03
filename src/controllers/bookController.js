const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let a_id = req.body.author
    let p_id = req.body.publisher
    let isValidauthor= await authorModel.find({_id : a_id}).select({_id:1})
    let isValidPublisher= await publisherModel.find({_id:p_id}).select({_id:1})
    if (isValidauthor.length>0){
        if(isValidPublisher.length>0){
            let bookCreated = await bookModel.create(book)
            res.send({bookCreated})
        }
        else{ res.send("Invalid Publisher")}
    }
    else {res.send("Invalid Author")}
    
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})

}

const findAndUpdate= async function (req, res){
    
    let id= await publisherModel.find({name:{ $in:["Harper Collins", "Penguin"]}}).select({_id:1})
    let arr= []
    arr= id.map(x=>x.id)

    let data= await bookModel.updateMany({publisher:{$in:arr}}, {$set:{isHardCover : true}}, {new:true})
    
   
    res.send(data)
}

const updatePrice= async function( req, res){
    let authorId= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
   let arr=[]
   arr=authorId.map(x=>x._id)
  let data1= await bookModel.updateMany(
    {author:{$in:arr}},
     {$inc:{price:+10}},
     {new:true})

    res.send(data1)
}




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.findAndUpdate= findAndUpdate
module.exports.updatePrice= updatePrice

// 1 this API will fetch all movies from
router.get('/movies',function(req, res){
    res.send('[fukrey","dabang","rockstar","suryawansh"]')
})

// 2 this API will fetch all movie by indexid from array
router.get('/movies/:movieid', function(req, res){
    mov=['fukrey','delhi',"dabang","rockstar","suryawansh"]
    let value=req.params.movieid;
    if (value>mov.length-1){
        res.send('"doesnt exit"')
    }else{
        res.send(mov[value])
    }
 })
//3  this API will fetch all movies from array all objects
router.get('/moviez', function(req, res){
    res.send([ {id:1,Name:"the stining"},{id:2,Name:"incendies"},{id:3,Name:"3 idiots"},{id:4,Name:"shersah"},{id:5,Name:"finding demo"}])
})

// 4 this api will fetch all movies from array of objects by indexid
router.get('/films/:filmid',function(req, res){
    let movie=[ {id:1,name:"the shining"},{id:2,name:"incendies"},{id:3,name:"3 idiots"},]
    let value = req.params.filmid;
    // console.log(typeof value)
    let found=false;
    for(i=0;i<movie.length;i++){
        // console.log(typeof movi[i].id)
        // console.log(movi[i])
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }
    }
    if(found=false){
        // console.log(found)
        res.send(`'no movie exits with this id'`)
    }
})
module.exports=router;
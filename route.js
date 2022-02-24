const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.post(`/players`,function(req,res){
    let players=[]
    let playerName=player.Name
    for(let i=0; i<players.length;i++){
        if (players[i].Nmae ==playerName){
            res.send("player already exists")
        }
    
    }
    let player=req.body
    players.push(player)
    console.log(`here is the player from request`,player)
    res.send(players)
})

router.post('/players/playerName/booking/:bookingid',function(req,rea){
    let name=req.params.playerName
    let isPlayerPresent=false

    for(let i=0;i<player.length;i++){
        if(players[i].name==name){
            isPlayerPresent=true
        } 
    }
    if(!isPlayerPresent){
        return res.send('player is not present')
    }
    let booking=req.body
    for(i=0;i<players.length;i++){
        if(players[i].name==name){
            let isbookingPresent=false
            for (let j=0;j<player[i].bookings.length;j++){
                console.log(players[i])
                if(player[i].bookings[j].bookingNumber==bookingid){
                    return res.send("booking with this id is already")
                }
            }
            players[i].bookings.push(booking)
        }
    }
     res.send('player is not present')
})

router.get('/students.Name',function(req,res){
    let studentNmae==req.params.Name
    console.log(studentNmae)
})

module.exports = router;
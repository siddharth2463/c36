class Player{
constructor(){}
update(name){
    var playerIndex="Player"+playerCount
    database.ref(playerIndex).set({
        name:name
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
getCount(){
    var playerCountref=database.ref('playerCount')
    playerCountref.on("value",function(data){
        playerCount=data.val()
    })
}
}
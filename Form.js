class Form{
    constructor(){

    }
    display(){
        var title=createElement()
        title.html("car racing game")
        title.position(250,10)
        var input=createInput()
        input.position(250,50)
        var  button=createButton("play")
        button.position(250,80)
        button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        player.update(name)
        playerCount+=1
        player.updateCount(playerCount)
        var greeting=createElement()
        greeting.html("welcome"+name)
        greeting.position(250,200)
        })    }
}
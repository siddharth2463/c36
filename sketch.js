var database 
var player,form,game
var gameState=0
var playerCount=0
function preload(){
    bg=loadImage("bg.jpg")
}
function setup(){
    createCanvas(500,500)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
    
}
function draw(){
    background(bg)
}
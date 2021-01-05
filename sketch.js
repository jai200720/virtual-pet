//Create variables here

var dog,happyDog,database,foodS,foodStock;
var database;
function preload()
{
  //load images here
  
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite()
  dog.addImage(dog)
  database = firebase.database()
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
}

function readStock(data){

  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
food:x

  })
}

function draw() {  
background(46,139,87)



  drawSprites();
  //add styles here

}

if(keyWentDown(UP_ARROW) ){

  writeStock(foodS)
  dog.addImage(dogHappy)
}




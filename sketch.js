var dog1, database, food, foodStock,dog,happyDog

function preload()
{
	dog1 = loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value",function readStock(data){
    food=data.val();
  })
  function writeStock(x){
    database.ref('/').update({
      Food:x
    })
  }
  dog = createSprite(250,250,50,50)
  dog.addImage(dog1)
  dog.scale = 0.2
  
}


function draw() { 
  background(46, 139, 87) 
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(happyDog)
    dog.scale = 0.2
  }
  drawSprites();

}




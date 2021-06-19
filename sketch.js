//Create variables here
var dog, happyDog , database, foodS, foodStock;
var dogImg,bgimage;

function preload()
{

	//load images here

  dogImg = loadImage("images/dogimg.png")
  happyDog = loadImage("images/dogimg1.png")
  bgimage   = loadImage("download.jpg");

}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,290,20,30);
  dog.addImage(dogImg);
  dog.scale=0.3;

  database = firebase.database();
  foodStore = database.ref('food')
  foodStock.on("value", readStock);
  
}


function draw() {  

background(bgimage)

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happyDog);
}

  drawSprites();

  //add styles here

  fill("black");
  textSize=10;
  text("food ="+foodStock,300,100);


}

function readStock(data){

  foodS=data.val();
  
}

function writeStock(x) {

if (x<=0){

  x=0
}
else{
x=x-1

}


database.ref('/'.update)({
food:x

})

}


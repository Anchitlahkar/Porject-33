const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

var ranscore;

function setup() {
  createCanvas(810, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k =5; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 55; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,110));
  }
  for (var j = 30; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,210));
  }
  for (var j = 55; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,310));
  }
  for (var j = 30; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,410));
  }
  ranscore = Math.round(random(1,10)*50); 
}
 
function draw() {
  background("black");
  textSize(35);
  fill("blue");
  text("Score : "+score,20,40);
    
    console.log("devdhfgbdnms,.");

  if(gameState === "start"){
    disText(" 500 ", 10, 550);
    disText(" 500 ", 90, 550);
    disText(" 500 ", 170, 550);
    disText(" 500 ", 250, 550);
    disText(" 100 ", 330, 550);
    disText(" 100 ", 410, 550);
    disText(" 100 ", 490, 550);
    disText(" 200 ", 570, 550);
    disText(" 200 ", 650, 550);
    disText(" 200 ", 730, 550);
  }
  Engine.update(engine);

  ground.display();

 
  
  console.log(ranscore);

  if ( gameState =="end") {
    textSize(100);
    fill("red");
    text("GameOver", 150, 280);
    fill("Gold");
    textSize(50);
    text("Congratulations! You Scored "+ score,20,400);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  if(particle!=null){
     particle.display();
      
    if (particle.body.position.y>760){
          if (particle.body.position.x < 300) {
              score=score+500;      
              particle=null;
            if ( count>= 5){
                gameState ="end"; 
                plinkos = null;
            }                        
          }
          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
                score = score + 100;
                particle=null;
            
            if ( count>= 5) {
                  gameState ="end";
                  plinkos = null;
            }
          }
          else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
                score = score + 200;
                particle=null;
            
            if ( count>= 5) { 
                  gameState ="end";
                  plinkos = null;
            }
          } 
    }
  }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

}
function mousePressed(){
  if(gameState!=="end")
  {
      count = count+1;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
function disText(word,x,y){
  textSize(28)
  fill("White")
  text(word,x,y)
}

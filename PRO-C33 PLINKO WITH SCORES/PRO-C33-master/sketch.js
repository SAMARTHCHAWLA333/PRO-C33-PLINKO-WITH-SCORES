var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var count =0;

var GameState ="Start";

function setup() {
  createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(width/2,height,width,20);
   text(score,20,30);

    for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  text("500" , 25,530);
  text("500" , 105,530);
  text("500" , 185,530);
  text("500" , 265,530);
  text("100" , 345,530);
  text("100" , 425,530);
  text("100" , 505,530);
  text("200" , 585,530);
  text("200" , 665,530);
  text("200" , 745,530);
  if(GameState==="End"){ 
    text("GAME OVER",200,200)
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!= null){
       particle.display();
       if(particle.body.position.y>760){
            if(particle.body.position.x<270){
                score=score+500;
                particle=null;
                 if(count>=5){
                   GameState="End"
                 }
            }
            else if(particle.body.position.x<580 && particle.body.position.x>270){
              score=score+100
              particle=null;
              if(count>=5){
                GameState="End"
              }
            }
            else if(particle.body.position.x<800 && particle.body.position.x>581){
              score=score+200
              particle=null;
              if(count>=5){
                GameState="End"
              }
            }
       }
   }

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
}

function mousePressed(){

 if(GameState!=="end"){
   score++;
   particle=new Particle(mouseX,10,10,10);
 }

}
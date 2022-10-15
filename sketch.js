
function setup() {
  createCanvas(400,400);
  background(150); //150 = cor do fundo, 0 => escuro, 255 => branco
  //quanto mais numero maior que 0 mais claro vai ficar o fundo,
  // e quanto neor for o numero mais escuro vai ficar

  box = createSprite(200,200,30,30); //tamanho e posicao da box

  box.shapeColor=("black"); //mudar a cor da box
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}


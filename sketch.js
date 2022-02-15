var climber, door, ghost, tower, invisibleClimber;
var ghostImage, doorImage, towerImage, doorImage, climberImage;
var doorGroup, climberGroup

function preload()
{
  ghostImage = loadImage("ghost-standing.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  towerImage = loadImage("tower.png")
}

function setup()
{
  createCanvas(600,600)
  tower = createSprite(300,300)
  tower.addImage(towerImage)
  ghost = createSprite(300,300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.4
  doorGroup = new Group()
  climberGroup = new Group()



}

function draw()
{
  background("white")
  tower.velocityY = 3
  if(tower.y > 600)
  {
    tower.y = 300
  }
  if(keyDown("space"))
  {
    ghost.velocityY = -20
  }
  ghost.velocityY = ghost.velocityY+1

  if(keyDown("LEFT_ARROW"))
  {
    ghost.x = ghost.x-2
  }

  if(keyDown("RIGHT_ARROW"))
  {
    ghost.x = ghost.x+2
  }
 
  
 ghost.collide(climberGroup)


  spawnDoor()
  drawSprites()
}


function spawnDoor()
{
  if(frameCount%100  === 0)
  {
    door = createSprite(random(100,500),20)
    door.addImage(doorImage)
    door.velocityY = 3
   //ghost.depth = door.depth+1
     climber = createSprite(door.x,door.y+60)
     invisibleClimber = createSprite(climber.x,climber.y+10,climber.width,10)
     invisibleClimber.velocityY = 3
     climber.addImage(climberImage)
     climber.velocityY = 3
     doorGroup.add(door)
     climberGroup.add(climber)
     ghost.depth = door.depth+1
  }
}

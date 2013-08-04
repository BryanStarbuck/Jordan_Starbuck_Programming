function Movable(id, x, y) {
  this.currentX = x;
  this.currentY = y;
  this.id = id;

  this.htmlObj = document.getElementById(id);
  this.htmlObj.style.left = (this.currentX + "px");
  this.htmlObj.style.top = (this.currentY + "px");
  console.log('Movable() id=' + id + '  currentX = ' + this.currentX + "px    currentX =" + this.currentY + "px");
}


Movable.prototype.move = function(x, y)
{
  destX = destX + x;
  destY = destY + y;
}

Movable.prototype.MoveUp = function(x, y)
{
  move(this.destX, this.destY - 10);
}

Movable.prototype.MoveDown = function(x, y)
{
  move(this.destX, this.destY + 10);
}

Movable.prototype.MoveLeft = function(x, y)
{
  move(this.destX - 10, this.destY);
}

Movable.prototype.MoveRight = function(x, y)
{
  move(this.destX + 10, this.destY);
}



function GameInitilize2(e)
{
  console.log('Finished GameInitialize2()');
  dad = new Movable("Dad", 3, 5); 
  mom = new Movable("Mom", 5, 59); 
  jordan = new Movable("Jordan", 40, 20); 
  house = new Movable("House", 60, 5); 
  candyhouse = new Movable("CandyHouse", 60, 75); 
  console.log('Finished GameInitialize2()');
}


function GameInitilize(e)
{ 
  console.log('In GameInitialize()');
  window.document.onload = GameInitilize2;
}



console.log('Running Game.js global code.');
GameInitilize();



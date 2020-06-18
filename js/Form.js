class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("HURDLES GAME");
    this.title.position(displayWidth/2-140, 0);

    this.input.position(displayWidth/2 - 90 , displayHeight/2 - 80);
    this.input.size(150,30);
    this.input.style('background-color',"#FEF6E3");
    this.input.style('color',"#E9349F");

    this.button.position(displayWidth/2 - 50, displayHeight/2);
    this.button.size(80,30);
    this.button.style('background-color',"#A916A5");
    this.button.style('color',"#E0F791");

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 85, displayHeight/4);
    });

  }
}

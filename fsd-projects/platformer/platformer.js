$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(165, 370, 200, 150);
    createPlatform(450, 590, 150, 120);
    createPlatform(1000, 610, 150, 100);
    createPlatform(450, 250, 200, 150);
    createPlatform(175, 675, 200, 100);
    createPlatform(0, 200, 250, 50);

    // TODO 3 - Create Collectables

  createCollectable( "steve", 175, 330);   
  createCollectable("steve", 450, 209);
  createCollectable("steve", 1050, 550);

    
    // TODO 4 - Create Cannons
    createCannon("right", 400, 1750);
    createCannon("top", 400, 1250);
    createCannon("bottom", 750, 750);
  
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

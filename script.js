// Credit: MDBootstrap: https://github.com/mdbootstrap/knowledge-base/tree/main/JS/games/dino-game

const character = document.getElementById("character");

function jump() {
    if (character.classList != "jump") {
      character.classList.add("jump");
  
      setTimeout(function () {
        character.classList.remove("jump");
      }, 300);
    }
  }

  alert("Game Start!");

  let isAlive = setInterval(function () {
    // get current character Y position
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  
    // get current fireball X position
    let fireLeft = parseInt(
      window.getComputedStyle(fire).getPropertyValue("left")
    );
  
    // detect collision
    if (fireLeft < 10 && fireLeft > 0 && characterTop >= 350) {
      // collision
      alert("Game Over!");
    }
  }, 10);
  
  document.addEventListener("click", function (event) {
    jump();
  });
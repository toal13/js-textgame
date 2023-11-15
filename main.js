// DOMContentLoaded 
window.addEventListener("DOMContentLoaded", main);
  
// main function
function main() {
  renderScene();
}

// Function to render the scene
function renderScene() {
    const text = document.getElementById("text");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const imageContainer = document.getElementById("image-container");

    const scene = scenes[activeSceneIndex];

    imageContainer.style.backgroundImage = `url('${scene.image})`
    text.textContent = scene.text;
    btn1.textContent = scene.button1.text;
    btn2.textContent = scene.button2.text;
 
    btn1.onclick = function () {
        goToNextScene(scene.button1.nextSceneIndex);
      };
      btn2.onclick = function () {
          goToNextScene(scene.button2.nextSceneIndex);
      };
  }

function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;

  // If the game ends, display an alert and interrupt the process.
  if (activeSceneIndex === -1) {
      // alert("Game Over！");
      Swal.fire("Game over!");
      return;
  }

  renderScene();
}
// シーンの定義
const scenes = [
    {
      image: "https://1.bp.blogspot.com/-83pWE4JxQxM/ViiOd_7nGTI/AAAAAAAADUg/yCJ8iAB-gMY/s1600/postapoc5.jpg",
      text: "ある日、冒険者のあなたは森の中で目立つ建物を見つけました。",
      button1: { text: "建物に入る", nextSceneIndex: 1 },
      button2: { text: "建物を無視して進む", nextSceneIndex: 2 }
    },
    {
    image: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "建物の中には古代の書物がたくさんあります",
      button1: { text: "書物を読む", nextSceneIndex: 3 },
      button2: { text: "建物を出る", nextSceneIndex: 4 }
    },
    {
      image: "",
      text: "建物の中には何もありませんでした。森に戻ります。",
      button1: { text: "次へ", nextSceneIndex: -1 },
      button2: { text: "最初に戻る", nextSceneIndex: 0 }
    },
    {
       image: "",
       text: "書物には古代の魔法の儀式が書かれています。あなたはそれを試してみます。。",
       button1: { text: "儀式を試す", nextSceneIndex: 5 },
       button2: { text: "建物を出る", nextSceneIndex: 4 }
    },
    {
       image: "",
      text: "あなたは儀式を試し、不思議な力を手に入れました。冒険は続きます。",
      button1: { text: "最初に戻る", nextSceneIndex: 0 },
      button2: { text: "終了", nextSceneIndex: -1 } // -1は終了を表す
    }
  ];
  
  let activeSceneIndex = 0;
  
  // DOMContentLoaded イベントが発火したら main 関数を実行
  window.addEventListener("DOMContentLoaded", main);
  
  // メイン関数
  function main() {
    renderScene();
  }
  
  // シーンをレンダリングする関数
  function renderScene() {
      const text = document.getElementById("text");
      const btn1 = document.getElementById("btn-1");
      const btn2 = document.getElementById("btn-2");
    　const imageContainer = document.getElementById("image-container");
      
      const scene = scenes[activeSceneIndex];

    //   document.body.style.backgroundImage = `url('${scene.background}')`;
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

    // ゲーム終了の場合はアラートを表示して処理を中断
    if (activeSceneIndex === -1) {
        alert("ゲーム終了！");
        return;
    }

    renderScene();
}

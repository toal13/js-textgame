 /** 
 * Gets the active scene index. If not stored in local storage, defaults to 0.
 * @type {number}
 */
 let activeSceneIndex = localStorage.getItem("activeSceneIndex") || 0;


/** 
 * Definition of a scene
 * @typedef {Object} Scene
 * @property {string} image - URL of the scene's background image
 * @property {string} text - Description text of the scene
 * @property {Object} button1 - Object representing the first button
 * @property {string} button1.text - Display text of the first button
 * @property {number} button1.nextSceneIndex - Index of the next scene when the first button is clicked
 * @property {Object} button2 - Object representing the second button
 * @property {string} button2.text - Display text of the second button
 * @property {number} button2.nextSceneIndex - Index of the next scene when the second button is clicked
 */

/** 
 * Array of scenes
 * @type {Scene[]}
 */
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
       button1: { text: "儀式を試す", nextSceneIndex: 4 },
       button2: { text: "建物を出る", nextSceneIndex: 4 }
    },
    {
       image: "",
      text: "あなたは儀式を試し、不思議な力を手に入れました。冒険は続きます。",
      button1: { text: "最初に戻る", nextSceneIndex: 0 },
      button2: { text: "終了", nextSceneIndex: -1 } // -1 is the end of the game
    }
  ];


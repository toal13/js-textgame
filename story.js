 /** 
 * Gets the active scene index. If not stored in local storage, defaults to 0.
 * @type {number}
 */
  let activeSceneIndex = localStorage.getItem("activeSceneIndex") || 0;
  // let activeSceneIndex = 0;

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
      image: "https://images.unsplash.com/photo-1545460463-afdcfb3a3e53?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The vacation you've been waiting for is about to begin. After a long flight, we arrived at a small airport on a southern island. Head into town to find a hotel",
      button1: { text: "Bus", nextSceneIndex: 1},
      button2: { text: "Taxi", nextSceneIndex: 4}
    },
    {
    image: "https://images.unsplash.com/photo-1656486579907-43cca750cb61?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "While you were on the bus, the bus broke down.",
      button1: { text: "Waiting for the bus to be repaired", nextSceneIndex: 3 },
      button2: { text: "Hitchhike", nextSceneIndex: 2 }
    },
    {
      image: "https://images.unsplash.com/photo-1582038715054-adba011b2da2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The person who gave me a ride was very kind. So the driver suggested",
      button1: { text: "Have the driver take you to town to find a hotel", nextSceneIndex: 6 },
      button2: { text: "Would you like to come to my house for dinner?", nextSceneIndex: 5 }
    },
    {
       image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       text: "While we were waiting for the bus to be repaired, a herd of tigers came from the mountains.",
       button1: { text: "Start over", nextSceneIndex: 0 },
       button2: { text: "Start over", nextSceneIndex: 0 },
       hideButton2: true
    },
    {
       image: "https://images.unsplash.com/photo-1694070781623-629e71966431?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A stone fell from the mountain onto the only road on the island.",
      button1: { text: "Start over", nextSceneIndex: 0 },
      button2: { text: "The end", nextSceneIndex: -1 },
    },
    {
      image: "https://images.unsplash.com/photo-1641116694964-58f5e37e25c9?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     text: "The driver was actually the owner of the island. They let us stay at a hotel with a spectacular view, and during our stay, they took us on a tour of the island by helicopter and boat. It was like a dream.",
     button1: { text: "Start over", nextSceneIndex: 0 },
     button2: { text: "The end", nextSceneIndex: -1 },
     hideButton2: true
   },
   {
    image: "https://images.unsplash.com/photo-1682686581295-7364cabf5511?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   text: "We managed to find a hotel and enjoyed our vacation by eating at local restaurants, scuba diving, and hiking.",
   button1: { text: "Start over", nextSceneIndex: 0 },
   button2: { text: "The end", nextSceneIndex: -1 },
   hideButton2: true
 }

  ];


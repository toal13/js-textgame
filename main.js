const storyData = [
    {
      
      text: "ある日、冒険者のあなたは森の中で目立つ建物を見つけました。",
      choices: [
        { text: "建物に入る", nextStory: 1 },
        { text: "建物を無視して進む", nextStory: 2 }
      ]
    },
    {
      choices: [
        { text: "書物を読む", nextStory: 3 },
        { text: "建物を出る", nextStory: 4 }
      ]
    },
    {
      text: "建物の中には何もありませんでした。森に戻ります。",
      choices: [
        { text: "もう一度進む", nextStory: 2 }
      ]
    },
    {
      text: "書物には古代の魔法の儀式が書かれています。あなたはそれを試してみます。",
      choices: [
        { text: "儀式を試す", nextStory: 5 },
        { text: "建物を出る", nextStory: 4 }
      ]
    },
    {
      text: "あなたは儀式を試し、不思議な力を手に入れました。冒険は続きます。",
      choices: [
        { text: "続ける", nextStory: 0 }
      ]
    }
  ];

let currentIndex = 0;
const image = document.getElementById('images');
const storyText = document.getElementById('story-text');
const choice1Button = document.getElementById('choice-1');
const choice2Button = document.getElementById('choice-2');

function makeChoice(choiceIndex) {
    const nextIndex = storyData[currentIndex].choices[choiceIndex - 1].index;
    
    if (nextIndex !== undefined) {
        currentIndex = nextIndex;
        updateStory();
    } else {
        alert("End of the story!");
    }
}

function updateStory() {
    const currentStory = storyData[currentIndex];
    storyText.textContent = currentStory.text;
    // image.backgroundImage = currentStory.image;
    
    if (currentStory.choices) {
        choice1Button.textContent = currentStory.choices[0].text;
        choice2Button.textContent = currentStory.choices[1].text;
    } else {
        // Hide choice buttons at the end of the story
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
    }
}

updateStory();
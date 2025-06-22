function showFeeling(feeling) {
  const content = {
    happy: {
      msg: "Aww! You're happy? That makes me so happy too 💖 Keep smiling my sunshine!",
      img: "https://i.imgur.com/ZgGvJtY.png"
    },
    sad: {
      msg: "It's okay to feel sad sometimes. I’m always here for you 💗",
      img: "https://i.imgur.com/3vKiFPL.png"
    },
    angry: {
      msg: "Take a deep breath baby 😮‍💨 You're stronger than any storm 💪❤️",
      img: "https://i.imgur.com/Kv5nyQl.png"
    },
    loved: {
      msg: "You are so deeply loved. Always. Forever. By me 💞",
      img: "https://i.imgur.com/uE5VLCp.png"
    },
    bored: {
      msg: "Let’s dream up something fun! 🐣 I’m just a text away 💬",
      img: "https://i.imgur.com/jjZ2MkT.png"
    }
  };

  const feelingArea = document.getElementById("feelingContent");
  feelingArea.innerHTML = `
    <p style="font-size:1.2em">${content[feeling].msg}</p>
    <img src="${content[feeling].img}" alt="${feeling}" />
  `;
}

function saveDiary() {
  const diaryText = document.getElementById("diary").value;
  if (diaryText.trim() === "") {
    alert("Write something first! ✨");
    return;
  }

  localStorage.setItem("diaryEntry", diaryText);
  document.getElementById("saveMessage").innerText = "Saved 💌";
}

window.onload = function () {
  const saved = localStorage.getItem("diaryEntry");
  if (saved) {
    document.getElementById("diary").value = saved;
    document.getElementById("saveMessage").innerText = "Your saved letter is here 💕";
  }
};

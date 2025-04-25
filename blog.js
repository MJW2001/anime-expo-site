const comments = [
    {
      name: "SakuraFan92",
      content: "I’m so hyped for the cosplay contest this year! Last year’s was amazing 😍",
      likes: 2,
      shares: 1
    },
    {
      name: "Otaku_Boston",
      content: "Finally an anime event in Boston worth going to! Can’t wait to bring my friends.",
      likes: 5,
      shares: 0
    },
    {
      name: "MechaKid88",
      content: "I already booked my hotel. Guest lineup looks 🔥🔥🔥",
      likes: 3,
      shares: 2
    }
  ];
  
  const section = document.getElementById("comment-section");
  
  comments.forEach((comment, index) => {
    const div = document.createElement("div");
    div.classList.add("comment-box");
  
    const name = document.createElement("strong");
    name.textContent = comment.name;
    div.appendChild(name);
  
    const p = document.createElement("p");
    p.textContent = comment.content;
    div.appendChild(p);
  
    // Like Button
    const likeBtn = document.createElement("button");
    likeBtn.textContent = `👍 Like (${comment.likes})`;
    likeBtn.onclick = () => {
      comment.likes++;
      likeBtn.textContent = `👍 Like (${comment.likes})`;
    };
    likeBtn.className = "like-btn";
    div.appendChild(likeBtn);
  
    // Share Button
    const shareBtn = document.createElement("button");
    shareBtn.textContent = `🔁 Share (${comment.shares})`;
    shareBtn.onclick = () => {
      comment.shares++;
      shareBtn.textContent = `🔁 Share (${comment.shares})`;
      alert("You shared this comment!");
    };
    shareBtn.className = "share-btn";
    div.appendChild(shareBtn);
  
    section.appendChild(div);
  });
  
// Predefined responses to user stories
const responses = [
    "Haha, classic! We've all been there. 🤣",
    "That one deserves an award! 🏆",
    "Next time, just write 'I tried my best' 😂",
    "Sounds like you had a *memorable* exam experience! 😅",
    "Oops! Well, at least you survived! 😆"
  ];
  
  // Get elements
  const failForm = document.getElementById("failForm");
  const userFail = document.getElementById("userFail");
  const failList = document.getElementById("failList");
  
  // Handle form submission
  failForm.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload
    
    // Get the user's story
    const failText = userFail.value;
  
    // Clear the input field
    userFail.value = "";
  
    // Create a new fail item
    const failItem = document.createElement("div");
    failItem.className = "fail-item";
  
    // Set the content of the fail item
    failItem.innerHTML = `
      <p><strong>Your Story:</strong> ${failText}</p>
      <p><strong>Response:</strong> ${getRandomResponse()}</p>
      <button class="like-btn">👍 Like</button>
      <span class="likes">0</span> Likes
    `;
  
    // Add the new fail item to the list
    failList.prepend(failItem);  // Add to the top
  });
  
  // Get a random response
  function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Handle like toggle
  failList.addEventListener("click", function(event) {
    const target = event.target;
  
    if (target.classList.contains("like-btn")) {
      const likesSpan = target.nextElementSibling; // The span with the likes count
      const currentLikes = parseInt(likesSpan.textContent);
  
      // Toggle the like
      if (target.classList.contains("liked")) {
        // Remove the like
        target.classList.remove("liked");
        likesSpan.textContent = currentLikes - 1;
      } else {
        // Add the like
        target.classList.add("liked");
        likesSpan.textContent = currentLikes + 1;
      }
    }
  });
  
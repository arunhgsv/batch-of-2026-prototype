const loader = document.getElementById("loader");
const video = document.getElementById("bgVideo");
const textContainer = document.querySelector(".text-container");

// Show video and text when ready
video.addEventListener("canplaythrough", () => {
  video.style.opacity = 1;
  textContainer.style.display = "block";

  // After total animation (12s text + 2s glitch), redirect to home.html
  setTimeout(() => {
    // Trigger pixel-sort glitch effect
    document.body.classList.add('glitch');

    // Wait 2s for glitch to play, then redirect
    setTimeout(() => {
      window.location.href = "Untitled-1.html";
    }, 2000);
  }, 13000); // 6s + 6s + 1s buffer
});

// Save article content before deletion
const meteredContent = document.querySelector(".meteredContent");
const deletedContent = document.querySelectorAll(".StoryBodyCompanionColumn");

setTimeout(() => {
  // Remove blocking modals and enable scrolling
  const modal = document.getElementById("gateway-content");
  const hero = document.querySelector(".css-gx5sib");
  const mainContent = document.body.querySelector(".css-mcm29f");
  const siteContent = document.getElementById("site-content");

  modal.remove();
  hero.style.background = "none";
  mainContent.style.position = "static";
  siteContent.style.position = "static";

  // Replace deleted content
  for (let i = 0; i < deletedContent.length; i++) {
    meteredContent.appendChild(deletedContent[i]);
  }
}, 2000);

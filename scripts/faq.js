// Get all elements with the class accordion
let faq = document.getElementsByClassName("accordion");
let i;
// set the first accordion as active by default
let currentActive = faq[0]; 

// Add "active" class and show panel for first accordion on page load
currentActive.classList.add("active");
let panel = currentActive.nextElementSibling;
panel.style.display = "block";

// Loop to change states of FAQ
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    // Check if clicked accordion is already active
    if (currentActive === this && currentActive.classList.contains("active")) {
      // If yes, remove the active class and hide the panel
      currentActive.classList.remove("active");
      let panel = currentActive.nextElementSibling;
      panel.style.display = "none";
      currentActive = null;
    } else {
      // If not, remove active class from current active accordion and show the panel
      if (currentActive !== null) {
        currentActive.classList.remove("active");
        let currentPanel = currentActive.nextElementSibling;
        currentPanel.style.display = "none";
      }
      this.classList.add("active");
      let panel = this.nextElementSibling;
      panel.style.display = "block";
      currentActive = this;
    }
  });
}



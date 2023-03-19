// FOR ACTIVE WINDOW
// Get all the links in the navbar
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Add an event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    this.classList.add("active");
  });
});

// FOR BUTTON
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
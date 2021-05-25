const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

const linkHome = document.getElementById("link-home");
const linkMembers = document.getElementById("link-members");
const home = document.getElementById("home");
const members = document.getElementById("medlemmer");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})

linkHome.addEventListener("click", () => {
    home.scrollIntoView({behavior: "smooth"});
})

linkMembers.addEventListener("click", () => {
    members.scrollIntoView({behavior: "smooth"});
})





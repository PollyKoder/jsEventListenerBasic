//collecting the html elements to make function events
const buttonToggle = document.querySelector(".toggle");

const buttonMenu = document.querySelector(".dropDown");

//function to toggle the themes
function themeToggle() {
    const bodyTheme = document.querySelector(".themeOne");
    bodyTheme.classList.toggle(".themeTwo");
}

buttonToggle.addEventListener("click", themeToggle);

console.log(themeToggle);

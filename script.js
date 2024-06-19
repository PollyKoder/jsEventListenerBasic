//collecting the html elements to make function events
const buttonToggle = document.querySelector(".toggle");
const colorTheme = document.getElementById("themeChange");
const buttonMenu = document.querySelector(".dropDown");


//function to toggle the themes and replacing button
// function themeToggle() {
// }
colorTheme.addEventListener("click", () => {
    const bodyTheme = document.querySelector(".themeOne");
    bodyTheme.classList.toggle("themeTwo");
});

buttonMenu.addEventListener("click", () => {
    const display = document.querySelector(".hidden");
    display.classList.toggle("showMenu");
})






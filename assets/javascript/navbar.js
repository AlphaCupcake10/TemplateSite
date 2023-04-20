document.addEventListener("scroll",onScroll);
let navbar = document.getElementsByClassName("navbar")[0];

function onScroll(event)
{
    let scroll = document.documentElement.scrollTop;
    closeHamburgerMenu();
    if(scroll == 0)
    {
        navbar.classList.add("top");
    }
    else
    {
        navbar.classList.remove("top");
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    toggleHamburgerMenu();
    navbar.classList.remove("top");
})
function toggleHamburgerMenu()
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeHamburgerMenu()
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
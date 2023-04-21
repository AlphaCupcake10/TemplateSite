let root = document.querySelector(":root");

function toggleTheme()
{
    let val = root.getAttribute("data-theme");
    if(val == "light")darkTheme();
    if(val == "dark")lightTheme();
}
function lightTheme()
{
    root.setAttribute("data-theme","light");
}
function darkTheme()
{
    root.setAttribute("data-theme","dark");
}

function toggleAccent()
{
    let val = root.getAttribute("data-accent");
    if(val == "solid")useGradient();
    if(val == "gradient")useSolid();
}
function useGradient()
{
    root.setAttribute("data-accent","gradient");
}

function useSolid()
{
    root.setAttribute("data-accent","solid");
}

darkTheme();
useSolid();
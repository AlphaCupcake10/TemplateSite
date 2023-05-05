let colabCards = document.querySelector("#colabs").querySelector(".cards-container");
console.log(colabCards);

let colabs = 
[
    {
        img:"https://hackdefine2022.vercel.app/assets/img/sponsors/Moralis.png",
        href:"https://moralis.io/"
    },
    {
        img:"https://hackdefine2022.vercel.app/assets/img/sponsors/BiggBrains.png",
        href:"https://biggbrains.com/"
    },
]

generateColabs();
function generateColabs()
{
    for(let index = 0 ; index < colabs.length ; index++)
    {
        let card = document.createElement("a");
        card.href = colabs[index].href;
        card.classList.add("card");

        card.innerHTML = `<div><img src="${colabs[index].img}"></div>`

        colabCards.appendChild(card);
    }
}
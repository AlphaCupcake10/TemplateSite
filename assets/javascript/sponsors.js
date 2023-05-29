let colabSection = document.querySelector("#colabs");
let colabs = 
[
    {
        title:"O(1) SPONSORS",
        data:[
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/Moralis.png",
                href:"https://moralis.io/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/BiggBrains.png",
                href:"https://biggbrains.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/Devfolio.png",
                href:"https://devfolio.co/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/polygon.png",
                href:"https://polygon.technology/"
            },
        ],
    },
    {
        title:"O(logn) Tier",
        data:[
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/tezos.png",
                href:"https://tezos.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/celo.png",
                href:"https://celo.org/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/filecoin.png",
                href:"https://filecoin.io/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/foss.png",
                href:"https://fossunited.org/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/codingMinutes.png",
                href:"https://www.codingminutes.com/"
            }
        ],
    },
    {
        title:"O(n) Tier",
        data:[
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/digitalOcean.svg",
                href:"https://www.digitalocean.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/echo3D.png",
                href:"https://www.echo3d.co/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/voiceflow.png",
                href:"https://www.voiceflow.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/alanai.png",
                href:"https://alan.app/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/Rosenfeld-logo.png",
                href:"http://rosenfeldmedia.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/gfg.jpg",
                href:"https://www.geeksforgeeks.org/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/taskade.jpg",
                href:"https://www.taskade.com/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/littleTravels.png",
                href:"http://instagram.com/little_travels_meerut"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/wolfram.png",
                href:"https://www.wolfram.com/language/"
            },
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/InterviewBuddy.png",
                href:"https://interviewbuddy.in/"
            }
        ],
    },
    {
        title:"Schwags Partner",
        data:[
            {   img:"https://hackdefine2022.vercel.app/assets/img/sponsors/atsign.png",
                href:"https://atsign.com/"
            },
        ],
    },
    {
        title:"Certificate Partner",
        data:[
            {
                img:"https://hackdefine2022.vercel.app/assets/img/sponsors/GMC%20LogoS.png",
                href:"http://givemycertificate.com/"
            }
        ]

    }
]
generateColabs();
function generateColabs()
{
    for(let tier = 0 ; tier < colabs.length ; tier ++)
    {
        let tierTitie = document.createElement("h2");
        tierTitie.innerHTML = colabs[tier].title;
        colabSection.appendChild(tierTitie);
        
        let container = document.createElement("div");
        container.className = "cards-container";

        for(let index = 0 ; index < colabs[tier].data.length ; index++)
        {
            let card = document.createElement("a");
            card.href = colabs[tier].data[index].href;
            card.classList.add("card");

            card.innerHTML = `<div><img src="${colabs[tier].data[index].img}"></div>`

            container.appendChild(card);
        }

        colabSection.appendChild(container);
        colabSection.appendChild(document.createElement("br"));
        colabSection.appendChild(document.createElement("br"));
        colabSection.appendChild(document.createElement("br"));
    }
}
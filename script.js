dishDesci = [
    {
        name:"Pasta with Pesto",
        desc:"The pasta is al dente and has a green color from the pesto. The pesto is made with basil, pine nuts, Parmesan cheese, and olive oil. ",
    },

    {
        name:"Risotto with saffron and peas",
        desc:"The risotto is creamy and has a bright yellow color from the saffron. The peas add a touch of sweetness and texture.",
    },

    {
        name:"Caprese salad ",
        desc:"salad with cherry tomatoes, mozzarella, and basil. The cherry tomatoes are sweet and juicy, the mozzarella is creamy and soft, and the basil adds a fresh, peppery flavor.",
    },

    {
        name:"Stuffed eggplant with marinara sauce.",
        desc:"The eggplant is stuffed with a mixture of breadcrumbs, Parmesan cheese, and herbs. The marinara sauce is tangy and flavorful.",
    },

    {
        name:"Meatball appetizer",
        desc:"The meatballs are small and tender, and they are served with a marinara sauce",
    },

    {
        name:"Seafood salad with shrimp and scallops",
        desc:"The seafood is fresh and has a light, briny flavor. The salad is dressed with a simple vinaigrette.",
    },
];

let currentslide = 0;
let angle = 0;


function slider(action){
    if(action === -1){
        currentslide-=1
        currentslide = Math.abs(currentslide)%6;
        angle+=60 
    }
    else{
        currentslide+=1
        currentslide = currentslide%6;
        angle-=60
    }
    document.querySelector('.tableimg').style.transform = `rotate(${angle}deg)`;
    document.querySelector('.dishName').innerHTML = dishDesci[currentslide].name;
    document.querySelector('.desc').innerHTML = dishDesci[currentslide].desc;

}



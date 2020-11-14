const api = "https://api.edamam.com/search?q=pork&app_id=2005ea1f&app_key=4872069fde431e4e4d9a39b8007f9f11"

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {   
        console.log(data);
        for(let i = 0; i < data.hits.length; i++){
            const porkpick = document.getElementById("porkpick");
        const porkbox= document.createElement("div")
        porkbox.classList.add("porkbox");
        const recipetitle = document.createElement("h1");
        recipetitle.classList.add("recipetitle");
        recipetitle.innerHTML = data.hits[i].recipe.label;
        const image = document.createElement("img");
        image.src = data.hits[i].recipe.image;
        const button = document.createElement("button");
        button.classList.add("btn-ingridients");
        button.innerHTML = "ingridients";
        

        porkbox.appendChild(recipetitle);
        porkbox.appendChild(image);
        porkbox.appendChild(button);
        porkpick.appendChild(porkbox)
        }
    });
const api = "https://api.edamam.com/search?q=vegetable&app_id=2005ea1f&app_key=4872069fde431e4e4d9a39b8007f9f11"

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {   
        console.log(data);
        for(let i = 0; i < data.hits.length; i++){
            const vegetablepick = document.getElementById("vegetablepick");
        const vegetablebox = document.createElement("div")
        vegetablebox.classList.add("vegetablebox");
        const recipetitle = document.createElement("h1");
        recipetitle.classList.add("recipetitle");
        recipetitle.innerHTML = data.hits[i].recipe.label;
        const image = document.createElement("img");
        image.src = data.hits[i].recipe.image;
        const button = document.createElement("button");
        button.classList.add("btn-ingridients");
        button.innerHTML = "ingridients";
        

        vegetablebox.appendChild(recipetitle);
        vegetablebox.appendChild(image);
        vegetablebox.appendChild(button);
        vegetablepick.appendChild(vegetablebox)
        }
    });
const api = "https://api.edamam.com/search?q=beef&app_id=dc23e345&app_key=6160f374044377808e3ffa929a43ffeb"

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {   
        console.log(data);
        for(let i = 0; i < data.hits.length; i++){
            const beefpick = document.getElementById("beefpick");
        const beefbox= document.createElement("div")
        beefbox.classList.add("beefbox");
        const recipetitle = document.createElement("h1");
        recipetitle.classList.add("recipetitle");
        recipetitle.innerHTML = data.hits[i].recipe.label;
        const image = document.createElement("img");
        image.src = data.hits[i].recipe.image;
        const popup = document.createElement("button");
        popup.classList.add("popup");
        popup.innerHTML = "ingredients";
        const popuptext= document.createElement("span");
        popuptext.classList.add("popuptext");
        const ingredienthero2 =document.createElement("div");
        ingredienthero2.classList.add("ingredienthero2");
        /*const listofingre=document.createElement("li");
        listofingre.classList.add("listofingre");
        listofingre.innerHTML = data.hits[i].recipe.ingredientLines;*/

        

        beefbox.appendChild(recipetitle);
        beefbox.appendChild(image);
        beefbox.appendChild(popup);
        beefbox.appendChild(span);
        beefbox.appendChild(popuptext);
        beefbox.appendChild(ingredienthero2);
        beefbox.appendChild(listofingre);
        beefpick.appendChild(beefbox);

        }
    });

    function myFunction() {
        const popup = document.getElementsByClassName("btn-ingridients");
        popup.classList.toggle("show");
      }
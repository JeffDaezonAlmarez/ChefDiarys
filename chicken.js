const api = "https://api.edamam.com/search?q=chicken&app_id=dc23e345&app_key=6160f374044377808e3ffa929a43ffeb"

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {   
        console.log(data);
        for(let i = 0; i < data.hits.length; i++){
            const chickenpick = document.getElementById("chickenpick");
        const chickenbox = document.createElement("div")
        chickenbox.classList.add("chickenbox");
        const recipetitle = document.createElement("h1");
        recipetitle.classList.add("recipetitle");
        recipetitle.innerHTML = data.hits[i].recipe.label;
        const image = document.createElement("img");
        image.src = data.hits[i].recipe.image;
        const button = document.createElement("button");
        button.classList.add("btn-ingridients");
        button.innerHTML = "ingredients";
        
        chickenbox.appendChild(recipetitle);
        chickenbox.appendChild(image);
        chickenbox.appendChild(button);
        chickenpick.appendChild(chickenbox)
        }
    });

        // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
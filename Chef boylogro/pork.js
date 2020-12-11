const api =
  "https://api.edamam.com/search?q=pork&app_id=dc23e345&app_key=6160f374044377808e3ffa929a43ffeb";

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const porkpick = document.getElementById("porkpick");
      const porkbox = document.createElement("div");
      porkbox.classList.add("porkbox");
      const recipetitle = document.createElement("h1");
      recipetitle.classList.add("recipetitle");
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement("img");
      image.src = data.hits[i].recipe.image;
      const button = document.createElement("button");
      button.classList.add("btn-ingridients");
      button.innerHTML = "ingredients";
      const modal = document.createElement("div");
      modal.classList.add("modalmain");
      const close = document.createElement("span");
      close.classList.add("close");
      close.innerHTML = "&times;";
      const popUp = document.createElement("div");
      popUp.classList.add("popUp");
      const ingredienthero1 = document.createElement("div");
      ingredienthero1.classList.add("ingredienthero1");
      const ingredientTitle = document.createElement("h1");
      ingredientTitle.classList.add("ingredientTitle");
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement("img");
      ingreImage.src = data.hits[i].recipe.image;
      const rateme = document.createElement("h4");
      rateme.classList.add("rateme");
      rateme.innerHTML = "Rate Me :)";
      const starwidget = document.createElement("div");
      starwidget.classList.add("starwidget");

      const star5 = document.createElement("input");
      star5.setAttribute("type", "radio");
      star5.classList.add("star5input");
      const label5 = document.createElement("LABEL");
      label5.classList.add("fas");
      label5.classList.add("fa-star");
      label5.classList.add("star5");

      const star4 = document.createElement("input");
      star4.setAttribute("type", "radio");
      star4.classList.add("star4");
      const label4 = document.createElement("LABEL");
      label4.classList.add("fas");
      label4.classList.add("fa-star");

      const star3 = document.createElement("input");
      star3.setAttribute("type", "radio");
      star3.classList.add("star3");
      const label3 = document.createElement("LABEL");
      label3.classList.add("fas");
      label3.classList.add("fa-star");

      const star2 = document.createElement("input");
      star2.setAttribute("type", "radio");
      star2.classList.add("star2");
      const label2 = document.createElement("LABEL");
      label2.classList.add("fas");
      label2.classList.add("fa-star");

      const star1 = document.createElement("input");
      star1.setAttribute("type", "radio");
      star1.classList.add("star1");
      const label1 = document.createElement("LABEL");
      label1.classList.add("fas");
      label1.classList.add("fa-star");

      const ingredienthero2 = document.createElement("div");
      ingredienthero2.classList.add("ingredienthero2");
      const ingreH1 = document.createElement("h1");
      ingreH1.classList.add("ingreH1");
      ingreH1.innerHTML = "Ingredients";
      const unL = document.createElement("ul");

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement("LI");
        list.classList.add("list");
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener("click", function () {
        modal.style.display = "block";
      });
      close.addEventListener("click", function () {
        modal.style.display = "none";
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);
      ingredienthero1.appendChild(rateme);
      ingredienthero1.appendChild(starwidget);
      starwidget.appendChild(star5);
      starwidget.appendChild(label5);
      starwidget.appendChild(star4);
      starwidget.appendChild(label4);
      starwidget.appendChild(star3);
      starwidget.appendChild(label3);
      starwidget.appendChild(star2);
      starwidget.appendChild(label2);
      starwidget.appendChild(star1);
      starwidget.appendChild(label1);

      porkbox.appendChild(recipetitle);
      porkbox.appendChild(image);
      porkbox.appendChild(button);
      porkpick.appendChild(porkbox);
      porkpick.appendChild(modal);
    }
  });

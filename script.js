let getNegara = document.querySelector(".columns");

fetch("https://restcountries.eu/rest/v2/regionalbloc/asean")
  .then((response) => {
    return response.json();
  })

  .then((negara) => {
    negara.forEach((negara) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <img src="${negara.flag}" alt="">
            <div class="container">
              <h2 class="name">${negara.name}</h2>
              <p>${negara.altSpellings}</p>
            </div>`;
      getNegara.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("Error Guys");
  });

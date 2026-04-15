let carrello = [];
const library = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("errore: il server non risponde.");
        throw new error(response.status);
      }
    })
    .then((response) => {
      console.log(response);
      const row = document.getElementById("row");
      let item = 0;
      response.forEach((element, i) => {
        const card = document.createElement("div");
        card.classList.add("card", "col-3", "h-6", "m-3", `itemN${item}`);
        card.innerHTML = `<img src=${element.img} class="card-img-top " alt="Copertina del libro">
  <div class="card-body d-flex flex-wrap align-items-center">
    <h5 class="card-title text-center">${element.title}</h5>
    <div class="d-flex justify-content-between w-100 flex-wrap">
    <p class="card-text">${element.price}€</p>
    <a onclick="remove(event)" class="btn btn-danger">Remove</a>
     <a onclick="nelCarrello(event)" class="btn btn-primary mt-2 w-100">Add to chart</a> </div>
  </div>`;
        row.appendChild(card);
        item += 1;
      });
    })
    .catch(console.log("errore: il server non è raggiungibile."));
};
library();

let conteggioString = document.querySelector("header p");
const nelCarrello = (e) => {
  const card = e.target.closest(".card").className;
  let conteggioParse = parseInt(conteggioString.innerText);
  conteggioParse += 1;
  conteggioString.innerText = conteggioParse;
  console.log(conteggioString);
};

const remove = (e) => {
  console.log("hai cliccato su ", e.target);
  const card = e.target.closest(".card");
  card.remove();
  alert("libro scartato!");
};

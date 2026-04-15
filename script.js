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
      response.forEach((element, i) => {
        const card = document.createElement("div");
        card.classList.add("card", "col-3", "h-5", "m-3");
        card.innerHTML = `<img src=${element.img} class="card-img-top" alt="Copertina del libro">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.price}</p>
    <a onclick="remove(event)" class="btn btn-primary">Remove</a>
  </div>`;
        row.appendChild(card);
      });
    })
    .catch(console.log("errore: il server non è raggiungibile."));
};
library();

const remove = (e) => {
  console.log("hai cliccato su ", e.target);
  const card = e.target.closest(".card");
  card.remove();
  alert("libro scartato!");
};

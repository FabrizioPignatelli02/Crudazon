const loadProductButton = document.getElementById("loadProductButton");

const loadProductForm = document.getElementById("loadProductForm");

const URL = "https://striveschool-api.herokuapp.com/api/product/";

const container = document.getElementsByClassName("container")[0];
console.log(container);

const alertContainer = document.createElement("div");
alertContainer.classList.add("container");
alertContainer.classList.add("d-flex");
alertContainer.classList.add("justify-content-center");

container.appendChild(alertContainer);

loadProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productObj = {
    name: document.getElementById("nameProduct").value,
    description: document.getElementById("descriptionProduct").value,
    brand: document.getElementById("brandProduct").value,
    imageUrl: document.getElementById("imageProduct").value,
    price: document.getElementById("priceProduct").value,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(productObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(() => {
      alertContainer.innerHTML = `<div class="alert alert-success w-75 mt-5" role="alert">
        Prodotto caricato con successo
      </div>`;

      document.getElementById("nameProduct").value = "";
      document.getElementById("descriptionProduct").value = "";
      document.getElementById("brandProduct").value = "";
      document.getElementById("imageProduct").value = "";
      document.getElementById("priceProduct").value = "";
    });
});

const resetButtonForm = document.getElementById("resetButtonForm");

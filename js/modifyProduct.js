const params = new URLSearchParams(window.location.search);

const prodId = params.get("prodId");

const newURL = "https://striveschool-api.herokuapp.com/api/product/" + prodId;

const modifyProductButton = document.getElementById("modifyProductButton");

window.onload = () => {
  if (prodId) {
    fetch(newURL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((prodObj) => {
        const { name, description, brand, imageUrl, price } = prodObj;

        document.getElementById("nameProduct").value = name;
        document.getElementById("descriptionProduct").value = description;
        document.getElementById("brandProduct").value = brand;
        document.getElementById("imageProduct").value = imageUrl;
        document.getElementById("priceProduct").value = price;
      });
  }
};

const container = document.getElementsByClassName("container")[0];
console.log(container);

const alertContainer = document.createElement("div");
alertContainer.classList.add("container");
alertContainer.classList.add("d-flex");
alertContainer.classList.add("justify-content-center");

container.appendChild(alertContainer);

const loadProductForm = document.getElementById("loadProductForm");

loadProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modifyProduct = {
    name: document.getElementById("nameProduct").value,
    description: document.getElementById("descriptionProduct").value,
    brand: document.getElementById("brandProduct").value,
    imageUrl: document.getElementById("imageProduct").value,
    price: document.getElementById("priceProduct").value,
  };

  fetch(newURL, {
    method: "PUT",
    body: JSON.stringify(modifyProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(() => {
      alertContainer.innerHTML = `<div class="alert alert-success w-75 mt-5" role="alert">
        Prodotto modificato con successo
      </div>`;
    });
});

const deleteProductButton = document.getElementById("deleteProductButton");

deleteProductButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(newURL, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(() => {
      alertContainer.innerHTML = `<div class="alert alert-danger w-75 mt-5" role="alert">
    Prodotto cancellato con successo
  </div>`;

      document.getElementById("nameProduct").value = "";
      document.getElementById("descriptionProduct").value = "";
      document.getElementById("brandProduct").value = "";
      document.getElementById("imageProduct").value = "";
      document.getElementById("priceProduct").value = "";
    });
});

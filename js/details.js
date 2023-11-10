const params = new URLSearchParams(window.location.search);
const prodId = params.get("prodId");
console.log(prodId);

const newURL = "https://striveschool-api.herokuapp.com/api/product/" + prodId;

window.onload = () => {
  const container = document.getElementById("container");

  fetch(newURL, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((prod) => {
      const row = document.createElement("div");
      row.classList.add("row");
      const divImage = document.createElement("div");
      divImage.classList.add("col-6");
      const divInfo = document.createElement("div");
      divInfo.classList.add("col-6");

      const modifyProdButton = document.createElement("a");
      modifyProdButton.classList.add("fs-3");
      modifyProdButton.classList.add("btn");
      modifyProdButton.classList.add("btn-success");
      modifyProdButton.innerText = "✏️";
      modifyProdButton.href = `./modifyProduct.html?prodId=${prodId}`;

      const imageProduct = document.createElement("img");
      imageProduct.classList.add("w-100");
      imageProduct.classList.add("imageDetail");
      imageProduct.src = prod.imageUrl;

      const titleCard = document.createElement("h2");
      titleCard.innerText = prod.name;

      const descriptionCard = document.createElement("h5");
      descriptionCard.innerText = prod.description;

      const priceCard = document.createElement("h3");
      priceCard.innerText = prod.price + "€";

      divImage.appendChild(imageProduct);
      divInfo.appendChild(titleCard);
      divInfo.appendChild(descriptionCard);
      divInfo.appendChild(priceCard);
      divInfo.appendChild(modifyProdButton);

      row.appendChild(divImage);
      row.appendChild(divInfo);

      container.appendChild(row);
    });
};

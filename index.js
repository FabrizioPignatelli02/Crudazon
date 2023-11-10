const container = document.getElementById("container");

const URL = "https://striveschool-api.herokuapp.com/api/product/";

fetch(URL, {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTU4ZDI1NGU4ODAwMTgzZjE4NmMiLCJpYXQiOjE2OTk2MDM4NTQsImV4cCI6MTcwMDgxMzQ1NH0.voYIB8BUS-aIn_0J_TrrOROZE6qNXWZlJ2RcOo_yIX4",
    "Content-Type": "application/json",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((productObj) => {
    if (Array.isArray(productObj)) {
      productObj.forEach((prod) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("my-4");
        divCard.classList.add("mx-4");

        const imageProduct = document.createElement("img");
        imageProduct.classList.add("card-img-top");
        imageProduct.src = prod.imageUrl;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const titleCard = document.createElement("h5");
        titleCard.classList.add("card-title");
        titleCard.innerText = prod.name;

        const descriptionCard = document.createElement("p");
        descriptionCard.classList.add("card-text");
        descriptionCard.classList.add("lessWord");
        descriptionCard.innerText = prod.description;

        const priceCard = document.createElement("h3");
        priceCard.innerText = prod.price + "€";

        const moreDetailsButton = document.createElement("a");
        moreDetailsButton.classList.add("btn");
        moreDetailsButton.classList.add("btn-primary");
        moreDetailsButton.innerText = "Dettagli";
        moreDetailsButton.href = `./details.html?prodId=${prod._id}`;

        const buttonPriceDiv = document.createElement("div");
        buttonPriceDiv.classList.add("mx-auto");

        cardBody.appendChild(titleCard);
        cardBody.appendChild(descriptionCard);
        cardBody.appendChild(buttonPriceDiv);
        buttonPriceDiv.appendChild(priceCard);
        buttonPriceDiv.appendChild(moreDetailsButton);

        divCard.appendChild(imageProduct);
        divCard.appendChild(cardBody);

        container.appendChild(divCard);
      });
    }
  });

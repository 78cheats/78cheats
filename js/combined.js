document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".catalog-content__block__item");
  
    productItems.forEach(function (item) {
      const detailButton = item.querySelector(".product-btn");

      if(detailButton){
        detailButton.addEventListener("click", function () {
          const cardImage = item.querySelector(".card-img").getAttribute("src");
          const cardTitle = item.querySelector(".card-title").textContent;
          const cardTime = item.querySelector(".card-time").textContent;
          const cardPrice = item.querySelector(".card-price").textContent;
          const cardDescription = item.getAttribute("data-description");
          const cardWin = item.getAttribute("data-win");
          const cardCpu = item.getAttribute("data-cpu");



          localStorage.setItem("cardImage", cardImage);
          localStorage.setItem("cardTitle", cardTitle);
          localStorage.setItem("cardTime", cardTime);
          localStorage.setItem("cardPrice", cardPrice);
          localStorage.setItem("cardDescription", cardDescription);
          localStorage.setItem("cardWin", cardWin);
          localStorage.setItem("cardCpu", cardCpu);

          window.location.href = "product.html";
        });

      }
    });
  
    const cardImage = localStorage.getItem("cardImage");
    const cardTitle = localStorage.getItem("cardTitle");
    const cardTime = localStorage.getItem("cardTime");
    const cardPrice = localStorage.getItem("cardPrice");
    const cardDescription = localStorage.getItem("cardDescription");
    const cardWin = localStorage.getItem("cardWin");
    const cardCpu = localStorage.getItem("cardCpu");
  



    const cardImageElement = document.getElementById("card-image");
    const cardTitleElement = document.getElementById("card-title");
    const cardTimeElement = document.getElementById("card-time");
    const cardDescriptionElement = document.getElementById("card-description");
    const cardPriceElement = document.getElementById("card-price");
    const cardWinElement = document.getElementById("card-win");
    const cardCpuElement = document.getElementById("card-cpu");
  
    if (cardImageElement) {
      cardImageElement.setAttribute("src", cardImage);
    }
    if (cardTitleElement) {
      cardTitleElement.textContent = cardTitle;
    }
    if (cardTimeElement) {
      cardTimeElement.textContent = cardTime;
    }
    if (cardDescriptionElement) {
      cardDescriptionElement.textContent = cardDescription;
    }
    if (cardPriceElement) {
      cardPriceElement.textContent = cardPrice;
    }
    if(cardWinElement) {
      cardWinElement.textContent = cardWin;
    }
    if(cardCpuElement){
      cardCpuElement.textContent = cardCpu;
    }
  });

  /* -------------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    // ... ваш существующий код ...
  
    const backButton = document.getElementById("back-button");
    if (backButton) {
      backButton.addEventListener("click", function (event) {
        event.preventDefault();
        history.back();
      });
    }
  });
  
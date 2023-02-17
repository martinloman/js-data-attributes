// .querySelectorAll() hämtar alla element som matchar css-selektorn man anger som argument.
const buyButtons = document.querySelectorAll(".buy")

// loopar igenom alla knappar och lägger på en eventlyssnare för klickevent.
buyButtons.forEach(function (button) {
  // Man kan komma åt data-attribut på ett element med egenskapen .dataset
  // Notera att bindestreck ersätts av camelCase. data-product-id har blivit dataset.productId.

  console.log(
    "Lägger till eventlyssnare på knapp med data-product-id=",
    button.dataset.productId
  )
  button.addEventListener("click", function (event) {
    // event.target innehåller den knapp som klickats på
    console.log(
      `Den klickade produkten har id = ${event.target.dataset.productId}`
    )
  })
})

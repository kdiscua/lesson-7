function handlerSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-form");
  let cityElement = document.querySelector("#city");
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlerSearchSubmit);

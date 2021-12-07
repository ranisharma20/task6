var btnTranslate = document.querySelector("#btn-translate");
var txtElement = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
  return serverUrl + "?text=" + text;
}
function errorHandler(error) {
  console.log("Error occured: ", error);
  alert("Something wrong with server! Try again after some time");
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  const textInput = txtElement.value;
  fetch(constructURL(textInput))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
});
btnTranslate.addEventListener("click", clickHandler);


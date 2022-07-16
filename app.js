const inputText = document.querySelector("#input-txt");
const translateBtn = document.querySelector("#btn-translate");
const output = document.querySelector("#output");
const serverUrl = "https://api.funtranslations.com/translate/pig-latin.json";

function constructTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}
function errorHandler(error){
    console.log("Error Occured",error);
    alert("error Occured");
}
function clickHandler(){
    var input = inputText.value;
    fetch(constructTranslationUrl(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler);
}
translateBtn.addEventListener("click",clickHandler);
// Your JavaScript code goes here
console.log("Hello, this is your script.js file!");
var delayInMilliseconds = 1000; //1 second setTimeout(function() {   //your code to be executed after 1 second }, delayInMilliseconds);
var btn = document.getElementById("button");
btn.addEventListener("click", () => {
    btn.innerHTML = "Oversæt" 
    console.log("test")
})

function change() {
    var btn = document.getElementById("button");
    btn.innerHTML ="traducir"
}


const { Translate } = require('@google-cloud/translate').v2;
/*Change 'path/to/your/keyfile.json' to your actual route to your API key!*/
const translate = new Translate({ keyFilename: 'path/to/your/keyfile.json' });

async function translateText() {
    const text = document.getElementById("container").innerHTML;
    console.log(text)
    const targetLanguage = 'es';

    const [translation] = await translate.translate(text, targetLanguage);
    console.log(`Translated text: ${translation}`);
}

translateText();


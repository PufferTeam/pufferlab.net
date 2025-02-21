var changeModeBT = document.getElementById('changeMode');
var changeLangSL = document.getElementById('changeLang');

var langElements = document.getElementsByClassName("lang");

var mode = localStorage.getItem("savedMode");
if (mode == null) {
    mode = 'mode.light'
}

var lang = localStorage.getItem("savedLang");
if (lang == null) {
    lang = 'en'
}

/*
var request = new XMLHttpRequest();
request.open("GET", "lang.json", false);
request.send(null)
var langFile = JSON.parse(request.responseText);
*/
const langFile =
{
    "en": {
        "main.intro": "Welcome, you are on the PufferLab website!",
        "main.p": "This website is home to multiple web tools, experiments and other useful things you can use.",
        "lang": "Language:",
        "mode.light": "Dark Mode 🌑",
        "mode.dark": "Light Mode ☀️"
    },
    "fr": {
        "main.intro": "Bonjour, vous êtes sur le site de PufferLab!",
        "main.p": "Ce site héberge plusieurs outils, experiences et autres choses utiles que vous pouvez utiliser.",
        "lang": "Langage:",
        "mode.light": "Mode sombre 🌑",
        "mode.dark": "Mode clair ☀️"
    }
}
console.log(langFile)

function getLang(key) {
    let fKey = langFile[lang][key]
    return fKey;
}

function updateLang() {
    changeLangSL.value = lang;

    for (let i = 0; i < langElements.length; i++) {
        let e = langElements[i];
        let r = e.getAttribute("name");
        if(r.startsWith("!")) {
            e.innerHTML = getLang(eval(r.slice(1)))
        } else {
            e.innerHTML = getLang(r)
        }
    }
}
updateLang()

function updateMode() {
    let body = document.getElementById('main');
    if (mode == 'mode.dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    changeModeBT.innerHTML = getLang(mode);
}
updateMode()

function changeLang() {
    lang = changeLangSL.value;
    localStorage.setItem("savedLang", lang)
    updateLang()
}

function changeMode() {
    if (mode == 'mode.dark') {
        mode = 'mode.light';
    } else {
        mode = 'mode.dark'
    }
    localStorage.setItem("savedMode", mode);
    updateMode()
}
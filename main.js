var changeModeBT = document.getElementById('changeMode');
var changeLangSL = document.getElementById('changeLang');

var langElements = document.getElementsByClassName('lang');
var defaultElements = document.getElementsByClassName('default');

for (let i = 0; i < defaultElements.length; i++) {
    defaultElements[i].classList.add('active')
}

let page = 'home';

const validPages = [
    "", "about"
]

var url = window.location.href.split('/');
function readURL() {
    url = window.location.href.split('/');
    page = url[3].slice(1)
    if (page == '') {
        page = 'home'
    }
    changeURL()
    updatePage()
}
readURL()

function updatePage() {
    if (!validPages.includes(page)) {
        page = 'home'
    }
    const pagesToHide = [];
    for (let i = 0; i < validPages.length; i++) {
        if (i != page) {
            pagesToHide.push(validPages[i])
        }
    }

    for (let i = 0; i < pagesToHide.length; i++) {
        let pageID = pagesToHide[i]
        if (pagesToHide[i] == '') {
            pageID = 'home'
        }

        let e = document.getElementById(pageID + 'Page')
        let b = document.getElementById(pageID)
        e.classList.remove('active')
        b.classList.remove('selected')
    }
    let e = document.getElementById(page + 'Page')
    let b = document.getElementById(page)
    e.classList.add('active')
    b.classList.add('selected')
}

function changePage(pg) {
    page = pg
    changeURL()
    updatePage()
}

function changeURL() {
    let pageName = '/?' + page
    if (!validPages.includes(page)) {
        pageName = ''
    }
    let fullURL = url[2];
    let mainURL = 'http://' + fullURL;
    let pageURL = mainURL + pageName;
    window.history.pushState(null, null, pageURL);
}


var mode = localStorage.getItem('savedMode');
if (mode == null) {
    mode = 'mode.light'
}

var lang = localStorage.getItem('savedLang');
if (lang == null) {
    lang = 'en'
}

var request = new XMLHttpRequest();
request.open("GET", "lang.json", false);
request.send(null)
var langFile = JSON.parse(request.responseText);

function getLang(key) {
    let fKey = langFile[lang][key]
    return fKey;
}

function updateLang() {
    changeLangSL.value = lang;

    for (let i = 0; i < langElements.length; i++) {
        let e = langElements[i];
        let r = e.getAttribute('name');
        if (r.startsWith('!')) {
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
    localStorage.setItem('savedLang', lang)
    updateLang()
}

function changeMode() {
    if (mode == 'mode.dark') {
        mode = 'mode.light';
    } else {
        mode = 'mode.dark'
    }
    localStorage.setItem('savedMode', mode);
    updateMode()
}

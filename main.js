var changeModeBT = document.getElementById('changeMode');
var changeLangSL = document.getElementById('changeLang');

var langElements = document.getElementsByClassName('lang');
var defaultElements = document.getElementsByClassName('default');
var navlinkElements = document.getElementsByClassName('navlink');

for (let i = 0; i < defaultElements.length; i++) {
    defaultElements[i].classList.add('active')
}

for (let i = 0; i < navlinkElements.length; i++) {
    let el = navlinkElements[i]
    el.addEventListener("click", function(event){
      event.preventDefault()
    });
}

let page = 'home';

const validPages = [
    "error", "", "home", "about"
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
        page = 'error'
    }
    for (let i = 0; i < validPages.length; i++) {
        let pageID = validPages[i]
        if (pageID != page) {
            if (pageID == '') {
                pageID = 'home'
            }
    
            let e = document.getElementById(pageID + 'Page')
            let b = document.getElementById(pageID)
            e.classList.remove('active')
            b.classList.remove('selected')
        }
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
        pageName = '/?error'
    }
    if(page == 'home') {
        pageName = ''
    }
    let fullURL = url[2];
    let mainURL = url[0] + "//" + fullURL;
    let pageURL = mainURL + pageName;
    window.history.pushState(null, null, pageURL);
}


var mode = localStorage.getItem('savedMode');
if (mode == null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        mode = 'mode.dark'
    } else {
        mode = 'mode.light'
    }
}

var lang = localStorage.getItem('savedLang');
if (lang == null) {
    lang = 'en'
}

var request = new XMLHttpRequest();
request.open("GET", "lang.json", false);
request.send(null)
var langFile = JSON.parse(request.responseText);

var request2 = new XMLHttpRequest();
request2.open("GET", "svg.json", false);
request2.send(null)
var svgFile = JSON.parse(request2.responseText);

const svgStates = ["normal", "hover"];
function getSvg(key) {
    let svgA = ['<div class="svgs option">'];
    for (let i = 0; i < svgStates.length; i++) {
        let st = svgStates[i];
        let sKey = svgFile[st][key];
        if (sKey != undefined) {
            svgA.push(sKey)
        }       
    }
    svgA.push('</div>');
    let svgO = svgA.join('');
    return svgO
}

function getLang(key) {
    let fKey = langFile[lang][key]
    if (fKey == undefined) {
        fKey = langFile['en'][key]
    }
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
    changeModeBT.innerHTML = getSvg(mode);
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

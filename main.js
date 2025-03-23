var changeModeBT = document.getElementById('changeMode');
var changeLangSL = document.getElementById('changeLang');
var toggleMenuBT = document.getElementById('toggleMenu');

var langElements = document.getElementsByClassName('lang');
var svgElements = document.getElementsByClassName('svgl');
var defaultElements = document.getElementsByClassName('default');
var navlinkElements = document.getElementsByClassName('navlink');
let menuPG = document.getElementById('menuPage')

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
            let em = document.getElementById(pageID + 'PageMenu')
            let b = document.getElementById(pageID)
            e.classList.remove('active')
            //em.classList.remove('active')
            b.classList.remove('selected')
        }
    }
    let e = document.getElementById(page + 'Page')
    let em = document.getElementById(page + 'PageMenu')
    let b = document.getElementById(page)
    e.classList.add('active')
    //em.classList.add('active')
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

var menu = 'menu.hide';

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
    let svgA = ['<div class="svgs">'];
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

function updateMenu() {
    if (menu == 'menu.show') {
        menuPG.classList.add('active')
    } else {
        menuPG.classList.remove('active')
    }
    toggleMenuBT.innerHTML = getSvg(menu);
}
updateMenu();

function updateSvg() {
    for (let i = 0; i < svgElements.length; i++) {
        let e = svgElements[i];
        let r = e.getAttribute('name');
        e.innerHTML = getSvg(r);
    }
}
updateSvg()

function updateLang() {
    changeLangSL.value = lang;

    for (let i = 0; i < langElements.length; i++) {
        let e = langElements[i];
        let r = e.getAttribute('name');
        e.innerHTML = getLang(r);
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

function toggleMenu() {
    if (menu == 'menu.hide') {
        menu = 'menu.show';
    } else {
        menu = 'menu.hide'
    }
    updateMenu();
}

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

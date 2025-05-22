import * as tools from "./tools.js";

export var page = "home";

let hiddenPages = [
    "error",
    ""
]

let pages = [
    "home",
    "tools",
    "tools.unit-converter",
    "tools.periodic-table",
    "tools.molecular-calculator",
    "about"
]

export const validPages = [
];

hiddenPages.forEach((e) => { validPages.push(e) })
pages.forEach((e) => { validPages.push(e) })

export function replace(id, value, label, insertOrder) {
    let el = null;
    if (typeof id === 'string' || id instanceof String) {
        el = document.getElementById(id)
    } else {
        el = id
    }
    if (Array.isArray(value)) {
        value = value.join("")
    }
    if (el !== null) {
        if (label == undefined) {
            if (insertOrder !== undefined) {
                el.insertAdjacentHTML(insertOrder, value);
            } else {
                el.innerHTML = value
            }
        } else {
            el.setAttribute(label, value)
        }
    }
}

let subPages = [];
let PageNavContent = [];
let PageMenuContent = [];
for (let i = 0; i < pages.length; i++) {

    let e = pages[i];
    let es = e.split(".");

    if (es[1] == undefined) {
        PageNavContent.push(`<li class="navigator"><a href="?${e}" id="${e}" class="lang navlink" name="${e}" onclick="changePage('${e}')"></a></li>`);
        PageMenuContent.push(`<li class="menu"><a href="?${e}" id="${e}Menu" class="lang menu navlink" name="${e}" onclick="changePage('${e}')"></a></li>`);

        if (subPages.includes(e)) {
            PageMenuContent.push(`<li class="menu"><ul id="${e}PageMenu" class="sub page overlay nav menu set">`)
        }
    }

    let n = i + 1;
    if (n < pages.length - 1) {
        let r = pages[n];
        let rs = r.split(".");
        if (rs[1] != undefined) {
            let rp = r.replace(".", "/");
            PageMenuContent.push(`<li class="menu sub"><a href="?${rp}" id="${r}Menu" class="lang sub menu navlink" name="${r}" onclick="changePage('${r}')"></a></li>`)
            if (pages[n + 1].split(".")[1] == undefined) {
                PageMenuContent.push(`</ul></li>`);
            }
        } else {
            subPages.push(r);
        }
    }
};

replace("PageNav", PageNavContent)
replace("PageMenu", PageMenuContent)

export function capitalize(str) {
    let e = str.split("");
    e[0] = e[0].toUpperCase()
    let r = e.join("")

    return r
}

var changeModeBT = document.getElementById("changeMode");
var changeLangSL = document.getElementById("changeLang");
var toggleMenuBT = document.getElementById("toggleMenu");

var defaultElements = document.getElementsByClassName("default");
for (let i = 0; i < defaultElements.length; i++) {
    defaultElements[i].classList.add("active");
}

var navlinkElements = document.getElementsByClassName("navlink");
for (let i = 0; i < navlinkElements.length; i++) {
    let el = navlinkElements[i];
    el.addEventListener("click", function (event) {
        event.preventDefault();
    });
}

window.addEventListener("popstate", function () {
    readURL();
    updateTitle();
});

var mainURL = window.location.href.split("/").slice(0, 3).join("/");
var url = window.location.href;

function readURL() {
    url = window.location.href;
    page = url.slice(mainURL.length + 2).toLowerCase().replace("/", ".");

    if (page == "") {
        page = "home";
    }
    updatePage();
}
readURL();

export function change(id, add, t) {
    let e = null;
    if (typeof id === 'string' || id instanceof String) {
        e = document.getElementById(id)
    } else {
        e = id
    }
    
    if (e != null) {
        let tag = "active";
        if (t != undefined) {
            tag = t;
        }
        if (add) {
            e.classList.add(tag);
        } else {
            e.classList.remove(tag);
        }
    }
}

function updatePageClass(page, show) {
    change(page + "Page", show);
    let pg = page.split(".");
    let mainPage = page;
    if (pg[1] != undefined) {
        mainPage = pg[0];
    }
    change(mainPage + "PageMenu", show);
    change(mainPage, show, "selected");
    change(page + "Menu", show, "selected");
}

function updatePage() {
    if (!validPages.includes(page)) {
        page = "error";
    }
    for (let i = 0; i < validPages.length; i++) {
        let pageID = validPages[i];
        if (pageID != page && pageID != "") {
            updatePageClass(pageID, false);
        }
    }
    updatePageClass(page, true);
}

function changePage(pg) {
    if (page != pg) {
        page = pg;
        changeURL();
        updatePage();
        updateTitle();
    }
}
window.changePage = changePage;

function changeURL() {
    let pageName = "/?" + page.replace(".", "/");
    if (page == "home") {
        pageName = "";
    }
    let pageURL = mainURL + pageName;
    window.history.pushState({ page: page }, "", pageURL);
}

export var mode = localStorage.getItem("savedMode");
if (mode == null) {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        mode = "mode.dark";
    } else {
        mode = "mode.light";
    }
}

export var lang = localStorage.getItem("savedLang");
if (lang == null) {
    lang = "en";
}

export var menu = "menu.hide";

function sendRequest(name) {
    let request = new XMLHttpRequest();
    request.open("GET", name + ".json", false);
    request.send(null);
    let o = JSON.parse(request.responseText);

    return o;
}

export var langFile = sendRequest("lang");
export var svgFile = sendRequest("svg");

const svgStates = ["normal", "hover"];

function getSvg(key) {
    let svgA = ['<div class="svgs">'];
    for (let i = 0; i < svgStates.length; i++) {
        let st = svgStates[i];
        let sKey = svgFile[st][key];
        if (sKey != undefined) {
            svgA.push(sKey);
        }
    }
    svgA.push("</div>");
    let svgO = svgA.join("");
    return svgO;
}

export function getLang(key) {
    let fKey = langFile[lang][key];
    if (fKey == undefined) {
        fKey = langFile["en"][key];
    }
    if (fKey == undefined) {
        fKey = key
    }
    return fKey;
}

function replaceHTML(e, i, c) {
    if (c == undefined) {
        if (e.innerHTML != i) {
            e.innerHTML = i
        }
    } else {
        e.setAttribute(c, i.toString())
    }
}

export function updateIn(cl) {
    let el = document.getElementsByClassName(cl);
    for (let i = 0; i < el.length; i++) {
        let e = el[i];
        let r = e.getAttribute("name");
        let t = e.tagName
        let re = undefined
        if (t == "OPTGROUP") {
            re = 'label'
        }
        let rs = r.split(":");
        if (cl == "svg") {
            replaceHTML(e, getSvg(r));
        } else {
            replaceHTML(e, getLang(r), re);
            if (rs[1] !== undefined) {
                replaceHTML(e, getLang(rs[0]) + `${rs[1]}`, re);
            }
        }
    }
}

function updateMenu() {
    let el = "menuPage";
    let el2 = "subMenuPage";
    let el3 = "pages";
    let el4 = "navPage";

    let show = false;
    if (menu == "menu.show") {
        show = true;
    }

    change(el, show);
    change(el2, show);
    change(el3, show, "open");
    change(el4, show, "open");
    replaceHTML(toggleMenuBT, getSvg(menu));
}
updateMenu();

function updateTitle() {
    let tl = getLang(page);
    let title = "PufferLab - " + tl;
    document.title = title;
}
updateTitle();

updateIn("svg");

function updateLang() {
    changeLangSL.value = lang;
    updateTitle();
    updateIn("lang");
}
updateLang();

function updateMode() {
    let el = "main";
    if (mode == "mode.dark") {
        change(el, true, "dark");
    } else {
        change(el, false, "dark");
    }
    replaceHTML(changeModeBT, getSvg(mode));
}
updateMode();

function toggleMenu() {
    if (menu == "menu.hide") {
        menu = "menu.show";
    } else {
        menu = "menu.hide";
    }
    updateMenu();
}
window.toggleMenu = toggleMenu;

var width = window.innerWidth;
function changeMenu() {
    if (width > 800) {
        menu = "menu.show";
    } else {
        menu = "menu.hide";
    }
    updateMenu();
}
changeMenu();

function changeLang() {
    if (lang != changeLangSL.value) {
        lang = changeLangSL.value;
        localStorage.setItem("savedLang", lang);
        updateLang();
    }
}
window.changeLang = changeLang;

function changeMode() {
    if (mode == "mode.dark") {
        mode = "mode.light";
    } else {
        mode = "mode.dark";
    }
    localStorage.setItem("savedMode", mode);
    updateMode();
}
window.changeMode = changeMode;

var subOverlay = document.getElementById("subMenuPage");
subOverlay.addEventListener("click", function () {
    if (menu == "menu.show") {
        menu = "menu.hide";
        updateMenu();
    }
});

window.tools = tools;
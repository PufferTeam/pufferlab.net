// Get references to UI elements
var changeModeBT = document.getElementById("changeMode");
var changeLangSL = document.getElementById("changeLang");
var toggleMenuBT = document.getElementById("toggleMenu");

// Activate all elements with the "default" class
var defaultElements = document.getElementsByClassName("default");
for (let i = 0; i < defaultElements.length; i++) {
    defaultElements[i].classList.add("active");
}

// Add click event listeners to all elements with the "navlink" class
var navlinkElements = document.getElementsByClassName("navlink");
for (let i = 0; i < navlinkElements.length; i++) {
    let el = navlinkElements[i];
    el.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation behavior
    });
}

alert(window.innerWidth);

// Handle browser back/forward navigation
window.addEventListener("popstate", function () {
    readURL();
    updateTitle();
});

// Default page
var page = "home";

// List of valid pages
const validPages = ["error", "", "home", "tools", "tools.converter", "about"];

// Base URL of the website
var mainURL = window.location.href.split("/").slice(0, 3).join("/");

// Read and parse the current URL to determine the active page
var url = window.location.href;
function readURL() {
    url = window.location.href;
    page = url
        .slice(mainURL.length + 2)
        .toLowerCase()
        .replace("/", ".");
    if (page == "") {
        page = "home"; // Default to "home" if no page is specified
    }

    updatePage(); // Update the page content
}
readURL(); // Initial call to read the URL

// Add or remove a class from an element
function change(id, add, t) {
    let e = document.getElementById(id);
    if (e != null) {
        let tag = "active";
        if (t != undefined) {
            tag = t; // Use a custom class if provided
        }
        if (add) {
            e.classList.add(tag);
        } else {
            e.classList.remove(tag);
        }
    }
}

// Update the visibility and state of page-related elements
function updatePageClass(page, show) {
    change(page + "Page", show);
    let pg = page.split(".");
    let mainPage = page;
    if (pg[1] != undefined) {
        mainPage = pg[0]; // Handle subpages
    }
    change(mainPage + "PageMenu", show);
    change(mainPage, show, "selected");
    change(page + "Menu", show, "selected");
}

// Update the active page and hide inactive pages
function updatePage() {
    if (!validPages.includes(page)) {
        page = "error"; // Fallback to "error" page if invalid
    }
    for (let i = 0; i < validPages.length; i++) {
        let pageID = validPages[i];
        if (pageID != page && pageID != "") {
            updatePageClass(pageID, false); // Hide inactive pages
        }
    }
    updatePageClass(page, true); // Show the active page
}

// Change the current page and update the URL, content, and title
function changePage(pg) {
    if (page != pg) {
        page = pg;
        changeURL(); // Update the URL
        updatePage(); // Update the page content
        updateTitle(); // Update the page title
    }
}

// Update the browser's URL without reloading the page
function changeURL() {
    let pageName = "/?" + page.replace(".", "/");
    if (page == "home") {
        pageName = ""; // Default to root for "home" page
    }
    let pageURL = mainURL + pageName;
    window.history.pushState({ page: page }, "", pageURL);
}

// Load the saved mode (dark/light) or use the system preference
var mode = localStorage.getItem("savedMode");
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

// Load the saved language or default to English
var lang = localStorage.getItem("savedLang");
if (lang == null) {
    lang = "en";
}

// Default menu state
var menu = "menu.hide";

// Send a synchronous request to load a JSON file
function sendRequest(name) {
    let request = new XMLHttpRequest();
    request.open("GET", name + ".json", false);
    request.send(null);
    let o = JSON.parse(request.responseText);

    return o;
}

// Load language and SVG files
var langFile = sendRequest("lang");
var svgFile = sendRequest("svg");

// States for SVG icons
const svgStates = ["normal", "hover"];

// Get the SVG content for a given key
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

// Get the language string for a given key
function getLang(key) {
    let fKey = langFile[lang][key];
    if (fKey == undefined) {
        fKey = langFile["en"][key]; // Fallback to English if key is missing
    }
    return fKey;
}

// Update elements with a specific class (e.g., SVG or language strings)
function updateIn(cl) {
    let el = document.getElementsByClassName(cl);
    for (let i = 0; i < el.length; i++) {
        let e = el[i];
        let r = e.getAttribute("name");
        if (cl == "svg") {
            e.innerHTML = getSvg(r);
        } else {
            e.innerHTML = getLang(r);
        }
    }
}

// Update the menu visibility
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
    change(el3, show, "open")
    change(el4, show, "open");
    toggleMenuBT.innerHTML = getSvg(menu);
}
updateMenu(); // Initial menu update

// Update the page title
function updateTitle() {
    let tl = getLang(page);
    let title = "PufferLab - " + tl;
    document.title = title;
}
updateTitle(); // Initial title update

// Update all SVG elements
updateIn("svg");

// Update the language selection and related content
function updateLang() {
    changeLangSL.value = lang;
    updateTitle();
    updateIn("lang");
}
updateLang(); // Initial language update

// Update the mode (dark/light) and related UI elements
function updateMode() {
    let el = "main";
    if (mode == "mode.dark") {
        change(el, true, "dark");
    } else {
        change(el, false, "dark");
    }
    changeModeBT.innerHTML = getSvg(mode);
}
updateMode(); // Initial mode update

// Toggle the menu visibility
function toggleMenu() {
    if (menu == "menu.hide") {
        menu = "menu.show";
    } else {
        menu = "menu.hide";
    }
    updateMenu();
}

// Change the language and save it to localStorage
function changeLang() {
    lang = changeLangSL.value;
    localStorage.setItem("savedLang", lang);
    updateLang();
}

// Toggle the mode (dark/light) and save it to localStorage
function changeMode() {
    if (mode == "mode.dark") {
        mode = "mode.light";
    } else {
        mode = "mode.dark";
    }
    localStorage.setItem("savedMode", mode);
    updateMode();
}

// Close the menu when clicking on the submenu overlay
var subOverlay = document.getElementById("subMenuPage");
subOverlay.addEventListener("click", function () {
    if (menu == "menu.show") {
        menu = "menu.hide";
        updateMenu();
    }
});
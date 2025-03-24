var mode = localStorage.getItem('savedMode');
let e = document.getElementById("redirect")
if(mode == 'mode.dark') {
    e.style.backgroundColor = "#0d0d0d";
} else {
    e.style.backgroundColor = "#ffffff";
}

let mainURL = window.location.href.split('/').slice(0, 3).join('/');
let url = window.location.href;
let pageName = url.slice(mainURL.length + 1);

let pageLink = mainURL + '/?' + pageName;

window.location.href = pageLink;
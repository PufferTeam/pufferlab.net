var mode = localStorage.getItem("savedMode");
let e = document.getElementById("main");
if (mode == "mode.dark") {
    e.style.backgroundColor = "#0d0d0d";
} else {
    e.style.backgroundColor = "#ffffff";
}
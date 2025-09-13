import * as main from "/main.js";

let gSH = document.getElementById("PagePickerShow");
let gCV = document.getElementById("PagePickerGradient");
let glCV = document.getElementById("PagePickerGradientLine");
let rgbOU = document.getElementById("PagePicker-Color-Output-RGB");
let hslOU = document.getElementById("PagePicker-Color-Output-HSL");

gCV.height = gCV.offsetHeight;
gCV.width = gCV.offsetWidth;

glCV.height = glCV.offsetHeight;
glCV.width = glCV.offsetWidth;

var color = 0;
let clickedX = 0;
let clickedY = 0;

const gc = gCV.getContext("2d");
const glc = glCV.getContext("2d");

const glImg = glc.createImageData(glCV.width, glCV.height);
const glImgData = glImg.data;

const gImg = gc.createImageData(gCV.width, gCV.height);
const gImgData = gImg.data;

function generate() {
    for (let y = 0; y < glCV.height; y++) {
        let hue = ((y * (360)) / (glCV.height));
        let [r, g, b] = hslToRgb(hue, 1, 0.5);
        for (let x = 0; x < glCV.width; x++) {
            let p = (y * glCV.width + x) * 4;
            glImgData[p] = r;
            glImgData[p + 1] = g;
            glImgData[p + 2] = b;
            glImgData[p + 3] = 255;
        }
    }
    glc.putImageData(glImg, 0, 0);
}
generate();

function generateFromHue() {
    for (let y = 0; y < gCV.height; y++) {
        let lig = (y / (gCV.height - 1));
        for (let x = 0; x < gCV.width; x++) {
            let sat = x / (gCV.width - 1);
            let [r, g, b] = hslToRgb(color, sat, lig);
            let p = (y * gCV.width + x) * 4;
            gImgData[p] = r;
            gImgData[p + 1] = g;
            gImgData[p + 2] = b;
            gImgData[p + 3] = 255;
        }
    }
    gc.putImageData(gImg, 0, 0);

}
generateFromHue(0);

function hslToRgb(h, s, l) {
    let rgb = [0, 0, 0];

    if (0 <= h && h < 360 && 0 <= s && s <= 1 && 0 <= l && l <= 1) {
        let C = (1 - Math.abs(2 * l - 1)) * s;
        let X = C * (1 - Math.abs((h / 60) % 2 - 1))
        let m = l - C / 2;
        let b = Math.floor((h * 6) / 360);
        switch (b) {
            case 0:
                rgb = [C, X, 0];
                break;
            case 1:
                rgb = [X, C, 0];
                break;
            case 2:
                rgb = [0, C, X];
                break;
            case 3:
                rgb = [0, X, C];
                break;
            case 4:
                rgb = [X, 0, C];
                break;
            case 5:
                rgb = [C, 0, X];
                break;
        }
        rgb = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255)]
    }

    return rgb;
}

function getCanvasClick(event, canvas) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = canvas;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;
    return [canvasX - 8, canvasY - 8];
}

glCV.addEventListener('click', function (event) {
    var coords = getCanvasClick(event, glCV);
    color = (((coords[1]) * 360) / (glCV.height));
    generateFromHue();
    updateColorPreview();

});

gCV.addEventListener('click', function (event) {
    var coords = getCanvasClick(event, gCV);

    clickedX = coords[0];
    clickedY = coords[1];

    updateColorPreview();
});

function updateColorPreview() {
    let lig = (clickedY / (gCV.height));
    let sat = clickedX / (gCV.width);
    let colorTxt = `--clbg: hsl(${(color).toFixed(2)}, ${(sat * 100).toFixed(2)}%, ${(lig * 100).toFixed(2)}%);`
    main.replace(gSH, colorTxt, 'style');

    let rgb = hslToRgb(color, sat, lig);
    let colorRGB = `RGB: ${(rgb[0]).toFixed(0)}, ${(rgb[1]).toFixed(0)}, ${(rgb[2]).toFixed(0)}`
    let colorHSL = `HSL: ${(color).toFixed(2)}°, ${(sat * 100).toFixed(2)}%, ${(lig * 100).toFixed(2)}%`
    main.replace(rgbOU, colorRGB);
    main.replace(hslOU, colorHSL);

}
updateColorPreview();
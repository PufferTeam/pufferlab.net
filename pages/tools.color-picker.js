import * as main from "/main.js";

let gCV = document.getElementById("PagePickerGradient");
let glCV = document.getElementById("PagePickerGradientLine");

const hue = 300;

const gc = gCV.getContext("2d");
const glc = glCV.getContext("2d");

const glImg = glc.createImageData(glCV.width, glCV.height);
const glImgData = glImg.data;

function generate() {
    for (let y = 0; y < glCV.height; y++) {
        let hue = ((y * (255 * 6)) / (glCV.height));
        let [r, g, b] = getRGB(hue);
        for (let x = 0; x < glCV.width; x++) {
            let p = (y * glCV.width + x) * 4;
            glImgData[p] = r;
            glImgData[p + 1] = g;
            glImgData[p + 2] = b;
            glImgData[p + 3] = 255;
        }
    }

}
generate();

function getRGB(hue) {
    let a = Math.floor(hue / 255);
    let c = hue % 255;
    let p = a % 2;
    let e = c;
    if(p == 1) {
        e = 255 - c;
    }
    let rgb = [0, 0, 0];
    if(a == 0) {
        rgb = [255, e, 0];
    }
    if(a == 1) {
        rgb = [e, 255, 0];
    }
    if(a == 2) {
        rgb = [0, 255, e];
    }
    if(a == 3) {
        rgb = [0, e, 255];
    }
    if(a == 4) {
        rgb = [e, 0, 255];
    }
    if(a == 5) {
        rgb = [255, 0, e];
    }
    return[rgb[0], rgb[1], rgb[2]]
}
glc.putImageData(glImg, 0, 0);
import * as main from "/main.js";

let gradientCV = document.getElementById("PagePickerGradient");
let gradientLineCV = document.getElementById("PagePickerGradientLine");

const hue = 300;

const gc = gradientCV.getContext("2d");
const glc = gradientLineCV.getContext("2d");

var gradient = gc.createLinearGradient(0, 0, 0, gradientCV.height);
const gradientLine = glc.createLinearGradient(0, 0, 0, gradientLineCV.height);

function updateLineGradient() {
    for(let i = 0; i < 360; i++) {
        let i2 = i / 360;
        let color = `hsl(${i}, 100%, 50%)`
        gradientLine.addColorStop(i2, color);
    }
}
updateLineGradient();

gc.clearRect(0, 0, gradientCV.width, gradientCV.height);

gradient.addColorStop(0, `hsl(${hue}, 50%, 0%)`);
gradient.addColorStop(1, `hsl(${hue}, 50%, 100%)`);

gc.fillStyle = gradient;
gc.fillRect(0, 0, gradientCV.width, gradientCV.height);

gradient = gc.createLinearGradient(0, 0, gradientCV.width, 0);
gradient.addColorStop(0, `hsl(${hue}, 0%, 50%)`);
gradient.addColorStop(0.5, `hsl(${hue}, 50%, 50%)`);
gradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);

gc.fillStyle = gradient;
gc.globalCompositeOperation = "multiply";
gc.fillRect(0, 0, gradientCV.width, gradientCV.height);
gc.globalCompositeOperation = "source-over";

glc.fillStyle = gradientLine;
glc.fillRect(0, 0, gradientLineCV.width, gradientLineCV.height);
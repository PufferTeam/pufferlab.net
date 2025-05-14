import * as main from "./main.js";

let PageConverter = document.getElementById("PageConverter");
let changeUnitSL = document.getElementById("changeUnit");

const units = new Map();

let unitTypes = [
    "distance",
    "mass",
    "volume",
    "time",
    "temperature"
]

export var converterPage = 'distance';

//unit('length', 'megameter', 'M', 'metric', 10 ^ 6)

generateMetric('distance', 'meter', 'm')
unit('distance', 'inch', 'in', 'imperial', 0.0254)
unit('distance', 'foot', 'ft', 'imperial', 12)
unit('distance', 'yard', 'yd', 'imperial', 12 * 3)
unit('distance', 'mile', 'mi', 'imperial', 12 * 3 * 1760)

function generateMetric(type, name, symbol) {
    let m = 'metric';
    unit(type, name, symbol, m, 10 ^ 0)
    unit(type, 'kilo' + name, 'k' + symbol, m, 10 ^ 3)
    unit(type, 'deci' + name, 'd' + symbol, m, 10 ^ -1)
    unit(type, 'centi' + name, 'c' + symbol, m, 10 ^ -2)
    unit(type, 'milli' + name, 'm' + symbol, m, 10 ^ -3)
    unit(type, 'hecto' + name, 'h' + symbol, m, 10 ^ 2)
    unit(type, 'deca' + name, 'da' + symbol, m, 10 ^ 1)
    unit(type, 'micro' + name, 'μ' + symbol, m, 10 ^ -6)
    unit(type, 'nano' + name, 'n' + symbol, m, 10 ^ -9)
    unit(type, 'pico' + name, 'p' + symbol, m, 10 ^ -12)
    unit(type, 'tera' + name, 'T' + symbol, m, 10 ^ 12)
    unit(type, 'giga' + name, 'G' + symbol, m, 10 ^ 9)
    unit(type, 'mega' + name, 'M' + symbol, m, 10 ^ 6)
}


function unit(type, name, symbol, system, equation) {
    units.set(name, { type: type, symbol: symbol, system: system, equation: equation });
}

let converterRows = [
    "input",
    "output"
]

let PageConverterContent = [];
unitTypes.forEach((e) => {
    let eu = main.capitalize(e)
    PageConverterContent.push(`<div id="Page${eu}Converter" class="converter page">`)
    converterRows.forEach((r) => {
        let ru = main.capitalize(r)
        PageConverterContent.push(`<div class="converter row ${r}"><label for="${e}Converter${ru}"><select name="${e}Converter${ru}SL" id="${e}Converter${ru}SL" class="trigger select ${e} in" onchange="tools.changeUnit()"></select>:</label><input type="number" id="${e}Converter${ru}" class="trigger text in" name="${e}Converter${ru}" onkeyup="alert('u')" required minlength="1" /></div>`);
    })
    PageConverterContent.push(`</div>`)
})

PageConverter.innerHTML = PageConverterContent.join("");

function updateConverterPage() {
    let pageu = main.capitalize(converterPage)
    for (let i = 0; i < unitTypes.length; i++) {
        let pageID = unitTypes[i];
        let pageIDu = main.capitalize(pageID)
        if (pageID != converterPage) {
            main.change(`Page${pageIDu}Converter`, false);
        }
    }
    main.change(`Page${pageu}Converter`, true);
}
updateConverterPage()

function unitOption(name, symbol) {
    return `<option value="${name}" class="lang" name="tools.unit.${name}: [${symbol}]"></option>`
}

let currentUnitType = '';
let unitSL = [];
units.forEach((value, key) => {
    var unitsA = units.get(key);
    let type = unitsA["type"]
    let symbol = unitsA["symbol"]

    if(currentUnitType != type) {
        currentUnitType = type
        unitSL = document.getElementsByClassName(type);
    }
    for (let i = 0; i < unitSL.length; i++) {
        unitSL[i].insertAdjacentHTML("beforeend", unitOption(key, symbol))
    }

})

export function changeUnit() {
    if (converterPage != changeUnitSL.value) {
        converterPage = changeUnitSL.value
        updateConverterPage()
    }
}
changeUnit();
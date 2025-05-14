import * as main from "./main.js";

let PageConverter = document.getElementById("PageConverter");
let converterPageSL = document.getElementById("changeUnit");

const units = new Map();

let unitTypes = [
    "distance",
    "mass",
    "volume",
    "time",
    "temperature"
]

export var converterPage = 'distance';

//unit('length', 'megameter', 'M', 'metric', 10e6)

generateMetric('distance', 'meter', 'm')
unit('distance', 'inch', 'in', 'imperial', 1)
unit('distance', 'foot', 'ft', 'imperial', 12)
unit('distance', 'yard', 'yd', 'imperial', (12 * 3))
unit('distance', 'mile', 'mi', 'imperial', (12 * 3 * 1760))

function generateMetric(type, name, symbol) {
    let m = 'metric';
    unit(type, name, symbol, m, 1)
    unit(type, 'kilo' + name, 'k' + symbol, m, 1e3)
    unit(type, 'deci' + name, 'd' + symbol, m, 1e-1)
    unit(type, 'centi' + name, 'c' + symbol, m, 1e-2)
    unit(type, 'milli' + name, 'm' + symbol, m, 1e-3)
    unit(type, 'hecto' + name, 'h' + symbol, m, 1e2)
    unit(type, 'deca' + name, 'da' + symbol, m, 1e1)
    unit(type, 'micro' + name, 'μ' + symbol, m, 1e-6)
    unit(type, 'nano' + name, 'n' + symbol, m, 1e-9)
    unit(type, 'pico' + name, 'p' + symbol, m, 1e-12)
    unit(type, 'tera' + name, 'T' + symbol, m, 1e12)
    unit(type, 'giga' + name, 'G' + symbol, m, 1e9)
    unit(type, 'mega' + name, 'M' + symbol, m, 1e6)
}


function unit(type, name, symbol, system, ratio) {
    units.set(name, { type: type, symbol: symbol, system: system, ratio: ratio });
}

let converterRows = [
    "input",
    "output"
]

function unitOption(name, suffix) {
    return `<option value="${name}" class="lang" name="tools.unit.${name}${suffix}"></option>`
}

let PageConverterContent = [];
unitTypes.forEach((e) => {
    converterPageSL.insertAdjacentHTML("beforeend", unitOption(e, ``));
    let eu = main.capitalize(e)
    PageConverterContent.push(`<div id="Page${eu}Converter" class="converter page">`)
    converterRows.forEach((r) => {
        let ru = main.capitalize(r)
        PageConverterContent.push(`<div class="converter row ${r}"><label for="${e}Converter${ru}"><select name="${e}Converter${ru}SL" id="${e}Converter${ru}SL" class="trigger select ${e} in" onchange="changeUnit('${e}Converter', '${r}', false)"></select>:</label><input type="number" id="${e}Converter${ru}" class="trigger text in" name="${e}Converter${ru}" onkeyup="changeUnit('${e}Converter', '${r}', true)" required minlength="1" /></div>`);
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


let currentUnitType = '';
let unitSL = [];
units.forEach((value, key) => {
    var unitsA = units.get(key);
    let type = unitsA.type;
    let symbol = unitsA.symbol;
    if (currentUnitType != type) {
        currentUnitType = type
        unitSL = document.getElementsByClassName(type);
    }
    for (let i = 0; i < unitSL.length; i++) {
        unitSL[i].insertAdjacentHTML("beforeend", unitOption(key, `: [${symbol}]`))
    }

})

function invertEquation(mainOrder, order, input, equation, inverse) {
    let result = 0;
    let con = false;
    if (order == mainOrder) {
        con = true;
    }
    if (inverse) {
        con = !con
    }
    if (con) {
        result = input * equation
    } else {
        result = input / equation
    }

    return result;
}

function smallerThan(i, s) {
    if (s == undefined) {
        s = 1
    }
    let r = false;
    if (i < s) {
        r = true
    }

    return r
}

convertUnit('kilometer', 'mile', 1);

function convertUnit(unitFrom, unitTo, value) {
    let unitFromMath = Number(units.get(unitFrom).ratio);
    let unitToMath = Number(units.get(unitTo).ratio);

    let unitFromSystem = units.get(unitFrom).system;
    let unitToSystem = units.get(unitTo).system;

    let system = [];
    let unitValue = 1;
    if (unitToSystem != unitFromSystem) {
        system[0] = unitFromSystem
        system[1] = unitToSystem
        system.sort()
    }

    let smaller = smallerThan(unitToMath, unitFromMath)
    let unitConverted = invertEquation(false, smaller, value, unitFromMath, smaller);

    if (system[0] != system[1]) {
        let equation = 1
        if (system[1] == 'metric') {
            equation = 39.3701
        }

        unitConverted = invertEquation(system[0], unitToSystem, unitConverted, equation)
    }
    unitValue = invertEquation(true, smaller, unitConverted, unitToMath, smaller);

    return unitValue;
}

export function changeConverterPage() {
    if (converterPage != converterPageSL.value) {
        converterPage = converterPageSL.value
        updateConverterPage()
    }
}
changeConverterPage();

function changeUnit(id1, type, isText) {
    let id = id1 + main.capitalize(type);
    if (type == 'input') {
        type = 'output'
    } else {
        type = 'input'
    }
    let id2 = id1 + main.capitalize(type);
    let el = document.getElementById(id).value;
    let elsl = document.getElementById(id + "SL").value;
    let elsl2 = document.getElementById(id2 + "SL").value;

    document.getElementById(id2).value = convertUnit(elsl, elsl2, el)
}
window.changeUnit = changeUnit;
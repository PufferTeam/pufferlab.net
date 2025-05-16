import * as main from "./main.js";

let PageConverter = document.getElementById("PageConverter");
let converterPageSL = document.getElementById("changeUnit");

const units = new Map();

let unitTypes = [
    "distance",
    "mass",
    "time",
    "temperature",
    "volume"
]

export var converterPage = 'distance';

generateMetric('distance', 'meter', 'm')
unit('distance', 'inch', 'in', 'imperial', 1)
unit('distance', 'foot', 'ft', 'imperial', 12)
unit('distance', 'yard', 'yd', 'imperial', (12 * 3))
unit('distance', 'mile', 'mi', 'imperial', (12 * 3 * 1760))

generateMetric('mass', 'gram', 'g')

unit('time', 'second', 's', 'time', 1)
unit('time', 'minute', 'min', 'time', 60)
unit('time', 'hour', 'h', 'time', 60 * 60)
unit('time', 'day', 'none', 'time', 60 * 60 * 24)
unit('time', 'week', 'none', 'time', 60 * 60 * 24 * 7)
unit('time', 'month', 'none', 'time', 60 * 60 * 24 * 30)
unit('time', 'year', 'none', 'time', 60 * 60 * 24 * 365)
unit('time', 'millisecond', 'ms', 'time', 1e-3)
unit('time', 'microsecond', 'μs', 'time', 1e-6)
unit('time', 'nanosecond', 'ns', 'time', 1e-9)

unit('temperature', 'celsius', '°C', 'international', 0, true);
unit('temperature', 'kelvin', 'K', 'international', -273.15, true);
unit('temperature', 'fahrenheit', '°F', 'imperial', 1)

function generateMetric(type, name, symbol) {
    let m = 'metric';
    unit(type, name, symbol, m, 1)
    unit(type, 'kilo' + name, 'k' + symbol, m, 1e3)
    unit(type, 'deci' + name, 'd' + symbol, m, 1e-1)
    unit(type, 'centi' + name, 'c' + symbol, m, 1e-2)
    unit(type, 'milli' + name, 'm' + symbol, m, 1e-3)
    unit(type, 'deca' + name, 'da' + symbol, m, 1e1)
    unit(type, 'micro' + name, 'μ' + symbol, m, 1e-6)
    unit(type, 'nano' + name, 'n' + symbol, m, 1e-9)
    unit(type, 'pico' + name, 'p' + symbol, m, 1e-12)
    unit(type, 'hecto' + name, 'h' + symbol, m, 1e2)
    unit(type, 'tera' + name, 'T' + symbol, m, 1e12)
    unit(type, 'giga' + name, 'G' + symbol, m, 1e9)
    unit(type, 'mega' + name, 'M' + symbol, m, 1e6)
}

function unit(type, name, symbol, system, ratio, sign) {
    if (sign == undefined) {
        sign = false
    }
    units.set(name, { type: type, symbol: symbol, system: system, ratio: ratio, sign: sign });
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
        let symbolU = `: [${symbol}]`;
        if (symbol == 'none') {
            symbolU = ''
        }
        unitSL[i].insertAdjacentHTML("beforeend", unitOption(key, symbolU))
    }

})

function invertEquation(order, i, e, inverse, s, opp) {
    let result = 0;
    if (opp) {
        s = !s
    }
    if (inverse) {
        order = !order
    }
    if (order) {
        if (s) {
            result = i + e;
        } else {
            result = i * e;
        }
    } else {
        if (s) {
            result = i - e;
        } else {
            result = i / e;
        }
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

function convertUnit(unitFrom, unitTo, value) {
    value = Number(value);

    let unitFromMap = units.get(unitFrom);
    let unitToMap = units.get(unitTo);

    let unitFromMath = Number(unitFromMap.ratio);
    let unitToMath = Number(unitToMap.ratio);

    let unitFromSystem = unitFromMap.system;
    let unitToSystem = unitToMap.system;

    let unitFromSign = unitFromMap.sign;
    let unitToSign = unitToMap.sign;

    let system = [];
    let unitValue = 1;
    if (unitToSystem != unitFromSystem) {
        system = [unitFromSystem, unitToSystem];
        system.sort()
    }

    let smaller = smallerThan(unitToMath, unitFromMath)
    let unitConverted = invertEquation(!smaller, value, unitFromMath, smaller, unitFromSign, false);

    if (system[0] != system[1]) {
        let equations = [];
        let signs = [false];
        if (system[0] == 'imperial' && system[1] == 'metric') {
            equations = [39.3701];
        }

        if (system[0] == 'imperial' && system[1] == 'international') {
            equations = [9, 5, 32];
            signs = [false, false, true];
        }

        let order = true;
        if (system[0] != unitToSystem) {
            order = !order
            equations = equations.reverse();
            signs = signs.reverse();
        }

        let sign = true;
        for (let i = 0; i < equations.length; i++) {
            let equation = equations[i];

            sign = !sign

            let signOrder = sign;
            if (signs[i]) {
                signOrder = !sign;
            }

            unitConverted = invertEquation(order, unitConverted, equation, sign, sign, signOrder)
        }
    }
    unitValue = invertEquation(smaller, unitConverted, unitToMath, smaller, unitToSign, false);

    return Number(unitValue);
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
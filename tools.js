import * as main from "./main.js";

let PageConverter = document.getElementById("PageConverter");
let converterPageSL = document.getElementById("changeUnit");

const units = new Map();
const unitsConversion = new Map()

let unitTypes = [
    "distance",
    "volume",
    "mass",
    "time",
    "temperature",
    "angle"
]

export var converterPage = sessionStorage.getItem("savedUnitType");
if (converterPage == null) {
    converterPage = "distance";
}

generateMetric('distance', 'meter', 'm')
unit('distance', 'inch', 'in', 'imperial', 1)
unit('distance', 'foot', 'ft', 'imperial', 12)
unit('distance', 'yard', 'yd', 'imperial', 12 * 3)
unit('distance', 'mile', 'mi', 'imperial', 12 * 3 * 1760)

generateMetric('volume', 'liter', 'L')
unit('volume', 'cubic_meter', 'm³', 'metric', 1e3)
unit('volume', 'cubic_decimeter', 'dm³', 'metric', 1)
unit('volume', 'cubic_centimeter', 'cm³', 'metric', 1e-3)
unit('volume', 'cubic_millimeter', 'mm³', 'metric', 1e-6)
unit('volume', 'metric_cup', 'cup', 'metric', 0.25)
unit('volume', 'metric_tablespoon', 'tbsp', 'metric', 0.015)
unit('volume', 'metric_teaspoon', 'tsp', 'metric', 0.005)
let us_gal = 231
unit('volume', 'us_gallon', 'gal (US)', 'imperial', us_gal)
unit('volume', 'us_quart', 'qt (US)', 'imperial', us_gal / 4)
unit('volume', 'us_pint', 'pt (US)', 'imperial', us_gal / 8)
unit('volume', 'us_fluid_ounce', 'fl oz (US)', 'imperial', us_gal / 128)
unit('volume', 'us_dram', 'dr (US)', 'imperial', us_gal / 128 / 8)
unit('volume', 'us_cup', 'cup (US)', 'imperial', us_gal / 16)
unit('volume', 'legal_cup', 'cup (US legal)', 'metric', 0.24)
unit('volume', 'us_tablespoon', 'tbsp (US)', 'imperial', us_gal / 128 / 2)
unit('volume', 'us_teaspoon', 'tsp (US)', 'imperial', us_gal / 128 / 2 / 3)
let imp_gal = 277.41943161904
unit('volume', 'imp_gallon', 'gal (imp)', 'imperial', imp_gal)
unit('volume', 'imp_quart', 'qt (imp)', 'imperial', imp_gal / 4)
unit('volume', 'imp_pint', 'pt (imp)', 'imperial', imp_gal / 8)
unit('volume', 'imp_fluid_ounce', 'fl oz (imp)', 'imperial', imp_gal / 160)
unit('volume', 'imp_dram', 'dr (imp)', 'imperial', imp_gal / 160 / 8)
unit('volume', 'imp_tablespoon', 'tbsp (imp)', 'imperial', imp_gal / 128 / 2)
unit('volume', 'imp_teaspoon', 'tsp (imp)', 'imperial', imp_gal / 128 / 2 / 3)
unit('volume', 'cubic_inch', 'in³', 'imperial', 1)
unit('volume', 'cubic_foot', 'ft³', 'imperial', 12 * 12 * 12)

generateMetric('mass', 'gram', 'g')
unit('mass', 'tonne', 't', 'metric', 1e6)
unit('mass', 'ounce', 'oz', 'imperial', 1)
unit('mass', 'pound', 'lb', 'imperial', 16)
unit('mass', 'stone', 'st', 'imperial', 16 * 14)

unit('time', 'second', 's', '', 1)
unit('time', 'minute', 'min', '', 60)
unit('time', 'hour', 'h', '', 60 * 60)
unit('time', 'day', '', '', 60 * 60 * 24)
unit('time', 'week', '', '', 60 * 60 * 24 * 7)
unit('time', 'month', '', '', 60 * 60 * 24 * 30)
unit('time', 'year', '', '', 60 * 60 * 24 * 365)
unit('time', 'decade', '', '', 60 * 60 * 24 * 365 * 1e1)
unit('time', 'century', '', '', 60 * 60 * 24 * 365 * 1e2)
unit('time', 'millennium', '', '', 60 * 60 * 24 * 365 * 1e3)
unit('time', 'millisecond', 'ms', '', 1e-3)
unit('time', 'microsecond', 'μs', '', 1e-6)
unit('time', 'nanosecond', 'ns', '', 1e-9)

unit('temperature', 'celsius', '°C', 'international', 0, true)
unit('temperature', 'kelvin', 'K', 'international', -273.15, true)
unit('temperature', 'fahrenheit', '°F', 'imperial', -32, true)

unit('angle', 'degree', '°', 'international', Math.PI / 180)
unit('angle', 'radian', 'rad', 'international', 1)
unit('angle', 'gradian', 'gon', 'international', Math.PI / 200)

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

unitConversion('distance', 'imperial', 'metric', 39.3700787402, true)
unitConversion('mass', 'imperial', 'metric', 28.349523125, false)
unitConversion('volume', 'imperial', 'metric', 61.0237440947, true)
unitConversion('temperature', 'imperial', 'international', 9 / 5, true)

function unit(type, name, symbol, system, ratio, sign) {
    if (sign == undefined) {
        sign = false
    }
    units.set(name, { type: type, symbol: symbol, system: system, ratio: ratio, sign: sign });
}

function unitConversion(type, system1, system2, equation, order) {
    unitsConversion.set(type + system1 + system2, { equation: equation, order: order });
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
        PageConverterContent.push(`<div class="converter row ${r}"><label for="${e}Converter${ru}"><select name="${e}Converter${ru}SL" id="${e}Converter${ru}SL" class="trigger select ${e} in" onchange="changeUnit('${e}Converter', '${ru}', false)"></select>:</label><input type="number" id="${e}Converter${ru}" class="trigger text in" name="${e}Converter${ru}" onkeyup="changeUnit('${e}Converter', '${ru}', true)" required minlength="1" /></div>`);
    })
    PageConverterContent.push(`</div>`)
})

PageConverter.innerHTML = PageConverterContent.join("");

function updateConverterPage() {
    converterPageSL.value = converterPage;
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
updateConverterPage();

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
        if (symbol == '') {
            symbolU = ''
        }
        unitSL[i].insertAdjacentHTML("beforeend", unitOption(key, symbolU))
    }

})

function invertEquation(o, i, e, s) {
    let result = 0;
    if (o) {
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

function convertUnit(unitFrom, unitTo, value) {
    value = Number(value);
    let unitFromMap = units.get(unitFrom);
    let unitToMap = units.get(unitTo);
    let unitType = unitFromMap.type;
    let unitValue = 1;

    let unitConverted = invertEquation(true, value, unitFromMap.ratio, unitFromMap.sign);

    if (unitToMap.system != unitFromMap.system) {
        let system = [];
        system = [unitFromMap.system, unitToMap.system];
        system.sort()
        let unitConversionMap = unitsConversion.get(unitType + system[0] + system[1])
        let equation = unitConversionMap.equation;
        let order = unitConversionMap.order;

        if (system[0] != unitToMap.system) {
            order = !order
        }

        unitConverted = invertEquation(order, unitConverted, equation, false)
    }
    unitValue = invertEquation(false, unitConverted, unitToMap.ratio, unitToMap.sign);

    return Number(unitValue);
}

export function changeConverterPage() {
    if (converterPage != converterPageSL.value) {
        converterPage = converterPageSL.value
        sessionStorage.setItem("savedUnitType", converterPage);
        updateConverterPage()
    }
}

function changeUnit(id1, type, isText) {
    let id = id1 + type;
    if (type == 'Input') {
        type = 'Output'
    } else {
        type = 'Input'
    }
    let id2 = id1 + type;
    let el = document.getElementById(id).value;
    let elsl = document.getElementById(id + "SL").value;
    let elsl2 = document.getElementById(id2 + "SL").value;

    let result = convertUnit(elsl, elsl2, el)
    if (el == '') {
        result = ''
    }
    document.getElementById(id2).value = result;
}
window.changeUnit = changeUnit;
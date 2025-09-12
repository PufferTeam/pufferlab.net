import * as main from "/main.js";

let converterPageSL = document.getElementById("changeUnit");

const units = new Map();
const unitsCategories = new Map();
const unitsConversion = new Map()

let unitTypes = [
    "distance",
    "area",
    "volume",
    "mass",
    "time",
    "temperature",
    "angle",
    "data"
]

export var converterPage = sessionStorage.getItem("savedUnitType");
if (converterPage == null) {
    converterPage = "distance";
}

generateMetric('distance', 'meter', 'm', 'metric')
unit('distance', 'inch', 'in', 'imperial', 1, false, 'imperial_us')
unit('distance', 'foot', 'ft', 'imperial', 12, false, 'imperial_us')
unit('distance', 'yard', 'yd', 'imperial', 12 * 3, false, 'imperial_us')
unit('distance', 'mile', 'mi', 'imperial', 12 * 3 * 1760, false, 'imperial_us')
unit('distance', 'nautical_mile', 'nmi', 'metric', 1852, false, 'other')
unit('distance', 'astronomical_unit', 'au', 'metric', 149597870700, false, 'other')
unit('distance', 'light_year', 'ly', 'metric', 9460730472580800, false, 'other')

unit('area', 'square_kilometer', 'km²', 'metric', Math.pow(1e3, 2), false, 'metric_square')
unit('area', 'square_hectometer', 'hm²', 'metric', Math.pow(1e2, 2), false, 'metric_square')
unit('area', 'square_decameter', 'dam²', 'metric', Math.pow(1e1, 2), false, 'metric_square')
unit('area', 'square_meter', 'm²', 'metric', Math.pow(1, 2), false, 'metric_square', true)
unit('area', 'square_decimeter', 'dm²', 'metric', Math.pow(1e-1, 2), false, 'metric_square')
unit('area', 'square_centimeter', 'cm²', 'metric', Math.pow(1e-2, 2), false, 'metric_square')
unit('area', 'square_millimeter', 'mm²', 'metric', Math.pow(1e-3, 2), false, 'metric_square')
unit('area', 'square_inch', 'in²', 'imperial', 1, false, 'imperial_us_square')
unit('area', 'square_foot', 'ft²', 'imperial', Math.pow(12, 2), false, 'imperial_us_square')
unit('area', 'square_yard', 'yd²', 'imperial', Math.pow(12 * 3, 2), false, 'imperial_us_square')
unit('area', 'square_mile', 'mi²', 'imperial', Math.pow(12 * 3 * 1760, 2), false, 'imperial_us_square')
unit('area', 'hectare', 'ha', 'metric', Math.pow(1e2, 2), false, 'other')
unit('area', 'acre', 'ac', 'imperial', Math.pow(12 * 3 * 1760, 2) / 640, false, 'other')

generateMetric('volume', 'liter', 'L', 'metric')
unit('volume', 'cubic_kilometer', 'km³', 'metric', Math.pow(1e4, 3), false, 'metric_cubic')
unit('volume', 'cubic_hectometer', 'hm³', 'metric', Math.pow(1e3, 3), false, 'metric_cubic')
unit('volume', 'cubic_decameter', 'dam³', 'metric', Math.pow(1e2, 3), false, 'metric_cubic')
unit('volume', 'cubic_meter', 'm³', 'metric', Math.pow(1e1, 3), false, 'metric_cubic')
unit('volume', 'cubic_decimeter', 'dm³', 'metric', 1, false, 'metric_cubic')
unit('volume', 'cubic_centimeter', 'cm³', 'metric', Math.pow(1e-1, 3), false, 'metric_cubic')
unit('volume', 'cubic_millimeter', 'mm³', 'metric', Math.pow(1e-2, 3), false, 'metric_cubic')
unit('volume', 'metric_cup', 'cup', 'metric', 0.25, false, 'metric_other')
unit('volume', 'metric_tablespoon', 'tbsp', 'metric', 0.015, false, 'metric_other')
unit('volume', 'metric_teaspoon', 'tsp', 'metric', 0.005, false, 'metric_other')
unit('volume', 'cubic_inch', 'in³', 'imperial', 1, false, 'imperial_us_cubic')
unit('volume', 'cubic_foot', 'ft³', 'imperial', Math.pow(12, 3), false, 'imperial_us_cubic')
unit('volume', 'cubic_yard', 'yd³', 'imperial', Math.pow(12 * 3, 3), false, 'imperial_us_cubic')
unit('volume', 'cubic_mile', 'mi³', 'imperial', Math.pow(12 * 3 * 1760, 3), false, 'imperial_us_cubic')
let us_gal = 231
unit('volume', 'us_gallon', 'gal (US)', 'imperial', us_gal, false, 'us')
unit('volume', 'us_quart', 'qt (US)', 'imperial', us_gal / 4, false, 'us')
unit('volume', 'us_pint', 'pt (US)', 'imperial', us_gal / 8, false, 'us')
unit('volume', 'us_fluid_ounce', 'fl oz (US)', 'imperial', us_gal / 128, false, 'us')
unit('volume', 'us_fluid_dram', 'fl dr (US)', 'imperial', us_gal / 128 / 8, false, 'us')
unit('volume', 'us_cup', 'cup (US)', 'imperial', us_gal / 16, false, 'us')
unit('volume', 'legal_cup', 'cup (US legal)', 'metric', 0.24, false, 'us')
unit('volume', 'us_tablespoon', 'tbsp (US)', 'imperial', us_gal / 128 / 2, false, 'us')
unit('volume', 'us_teaspoon', 'tsp (US)', 'imperial', us_gal / 128 / 2 / 3, false, 'us')
let imp_gal = 277.41943279162
unit('volume', 'imp_gallon', 'gal (imp)', 'imperial', imp_gal, false, 'imperial')
unit('volume', 'imp_quart', 'qt (imp)', 'imperial', imp_gal / 4, false, 'imperial')
unit('volume', 'imp_pint', 'pt (imp)', 'imperial', imp_gal / 8, false, 'imperial')
unit('volume', 'imp_fluid_ounce', 'fl oz (imp)', 'imperial', imp_gal / 160, false, 'imperial')
unit('volume', 'imp_fluid_dram', 'fl dr (imp)', 'imperial', imp_gal / 160 / 8, false, 'imperial')
unit('volume', 'imp_tablespoon', 'tbsp (imp)', 'imperial', imp_gal / 160 / 2, false, 'imperial')
unit('volume', 'imp_teaspoon', 'tsp (imp)', 'imperial', imp_gal / 160 / 2 / 4, false, 'imperial')

generateMetric('mass', 'gram', 'g', 'metric')
unit('mass', 'tonne', 't', 'metric', 1e6, false, 'metric_other')
unit('mass', 'ounce', 'oz', 'imperial', 1, false, 'imperial_us')
unit('mass', 'pound', 'lb', 'imperial', 16, false, 'imperial_us')
unit('mass', 'stone', 'st', 'imperial', 16 * 14, false, 'imperial_us')
unit('mass', 'long_ton', 'LT (UK)', 'imperial', 16 * 2240, false, 'imperial_us_other')
unit('mass', 'short_ton', 'st (US)', 'imperial', 16 * 2000, false, 'imperial_us_other')

unit('time', 'millennium', '', '', 60 * 60 * 24 * 365 * 1e3)
unit('time', 'century', '', '', 60 * 60 * 24 * 365 * 1e2)
unit('time', 'decade', '', '', 60 * 60 * 24 * 365 * 1e1)
unit('time', 'year', '', '', 60 * 60 * 24 * 365)
unit('time', 'month', '', '', 60 * 60 * 24 * 30)
unit('time', 'week', '', '', 60 * 60 * 24 * 7)
unit('time', 'day', '', '', 60 * 60 * 24)
unit('time', 'hour', 'h', '', 60 * 60)
unit('time', 'minute', 'min', '', 60)
unit('time', 'second', 's', '', 1, false, undefined, true)
unit('time', 'millisecond', 'ms', '', 1e-3)
unit('time', 'microsecond', 'μs', '', 1e-6)
unit('time', 'nanosecond', 'ns', '', 1e-9)

unit('temperature', 'celsius', '°C', 'international', 0, true)
unit('temperature', 'kelvin', 'K', 'international', -273.15, true)
unit('temperature', 'fahrenheit', '°F', 'imperial', -32, true)

unit('angle', 'degree', '°', 'international', Math.PI / 180)
unit('angle', 'radian', 'rad', 'international', 1)
unit('angle', 'gradian', 'gon', 'international', Math.PI / 200)

unit('data', 'bit', 'b', 'data', 1 / 8, false, 'default')
unit('data', 'byte', 'B', 'data', 1, false, 'default', true)
unit('data', 'kibibyte', 'KiB', 'data', 1024, false, 'ram')
unit('data', 'mebibyte', 'MiB', 'data', Math.pow(1024, 2), false, 'ram')
unit('data', 'gibibyte', 'GiB', 'data', Math.pow(1024, 3), false, 'ram')
unit('data', 'tebibyte', 'TiB', 'data', Math.pow(1024, 4), false, 'ram')
unit('data', 'pebibyte', 'PiB', 'data', Math.pow(1024, 5), false, 'ram')
unit('data', 'kilobyte', 'KB', 'data', 1000, false, 'metric')
unit('data', 'megabyte', 'MB', 'data', Math.pow(1000, 2), false, 'metric')
unit('data', 'gigabyte', 'GB', 'data', Math.pow(1000, 3), false, 'metric')
unit('data', 'terabyte', 'TB', 'data', Math.pow(1000, 4), false, 'metric')
unit('data', 'petabyte', 'PB', 'data', Math.pow(1000, 5), false, 'metric')

function generateMetric(type, name, symbol, m) {
    unit(type, 'tera' + name, 'T' + symbol, m, 1e12, false, m)
    unit(type, 'giga' + name, 'G' + symbol, m, 1e9, false, m)
    unit(type, 'mega' + name, 'M' + symbol, m, 1e6, false, m)
    unit(type, 'kilo' + name, 'k' + symbol, m, 1e3, false, m)
    unit(type, 'hecto' + name, 'h' + symbol, m, 1e2, false, m)
    unit(type, 'deca' + name, 'da' + symbol, m, 1e1, false, m)
    unit(type, name, symbol, m, 1, false, m, true)
    unit(type, 'deci' + name, 'd' + symbol, m, 1e-1, false, m)
    unit(type, 'centi' + name, 'c' + symbol, m, 1e-2, false, m)
    unit(type, 'milli' + name, 'm' + symbol, m, 1e-3, false, m)
    unit(type, 'micro' + name, 'μ' + symbol, m, 1e-6, false, m)
    unit(type, 'nano' + name, 'n' + symbol, m, 1e-9, false, m)
    unit(type, 'pico' + name, 'p' + symbol, m, 1e-12, false, m)
}

unitCategories('distance', ['metric', 'imperial_us', 'other'])
unitCategories('area', ['metric_square', 'imperial_us_square', 'other'])
unitCategories('volume', ['metric', 'metric_cubic', 'metric_other', 'imperial_us_cubic', 'us', 'imperial'])
unitCategories('mass', ['metric', 'metric_other', 'imperial_us', 'imperial_us_other'])
unitCategories('data', ['default', 'metric', 'ram'])

unitConversion('distance', 'imperial', 'metric', 0.0254, false)
unitConversion('mass', 'imperial', 'metric', 28.349523125, false)
unitConversion('area', 'imperial', 'metric', Math.pow(0.0254, 2), false)
unitConversion('volume', 'imperial', 'metric', Math.pow(0.0254, 3) * 1e3, false)
unitConversion('temperature', 'imperial', 'international', 9 / 5, true)

function unit(type, name, symbol, system, ratio, sign, category, defaultUnit) {
    if (sign == undefined) {
        sign = false
    }
    if (defaultUnit == undefined) {
        defaultUnit = false;
    }
    units.set(name, { type: type, symbol: symbol, system: system, ratio: ratio, sign: sign, category: category, defaultUnit: defaultUnit });
}

function unitCategories(type, categories) {
    unitsCategories.set(type, categories)
}

function unitConversion(type, system1, system2, equation, order) {
    unitsConversion.set(type + system1 + system2, { equation: equation, order: order });
}

let converterRows = [
    "input",
    "output"
]

function unitOption(name, suffix, langsuffix) {
    return `<option value="${name}" class="lang${langsuffix} lang-converter" name="unit.${name}${suffix}"></option>`
}

function unitGroup(name) {
    return `<optgroup class="lang lang-unit converter-select-group-${name}" name="unit.${name}"></optgroup>`
}

let converterPageSLContent = []
unitTypes.forEach((e, i) => {
    converterPageSLContent[i] = unitOption(e, ``, '')
})
main.replace("changeUnit", converterPageSLContent)

let PageConverterContent = [];
converterRows.forEach((r, i) => {
    let ru = main.capitalize(r)
    PageConverterContent[i] = `<div class="converter row ${r}"><label for="Converter-${ru}-Text"><select name="Converter-${ru}-Select" id="Converter-${ru}-Select" class="trigger select converter-select in" onchange="changeUnit('${ru}', false)"></select>:</label><input type="number" id="Converter-${ru}-Text" class="trigger text converter-input in" name="Converter-${ru}-Text" onkeyup="changeUnit('${ru}', true)" required minlength="1" /></div>`
})
main.replace("PageConverter", PageConverterContent)

function updateConverterPage(change) {
    converterPageSL.value = converterPage;

    let category = unitsCategories.get(converterPage);
    let selectBarContent = []
    if (category !== undefined) {
        category.forEach((e, i) => {
            selectBarContent[i] = unitGroup(e)
        })
    } else {
        selectBarContent = []
    }

    let selectBars = document.getElementsByClassName('converter-select')
    for (let i = 0; i < selectBars.length; i++) {
        main.replace(selectBars[i], selectBarContent)
    }

    units.forEach((value, key) => {
        let unitMap = units.get(key)
        if (unitMap.type == converterPage) {
            let selectBarsAdd = selectBars
            if (category !== undefined) {
                selectBarsAdd = document.getElementsByClassName(`converter-select-group-${unitMap.category}`)
            }
            let symbolU = `: [${unitMap.symbol}]`;
            if (unitMap.symbol == '') {
                symbolU = ''
            }

            for (let i = 0; i < selectBarsAdd.length; i++) {
                main.replace(selectBarsAdd[i], unitOption(key, symbolU, ' lang-unit'), undefined, "beforeend")
            }

            if (unitMap.defaultUnit) {
                for (let i = 0; i < selectBars.length; i++) {
                    selectBars[i].value = key
                }
            }
        }
    })

    if (change) {
        main.updateIn('lang-unit')
        let inputBars = document.getElementsByClassName('converter-input')
        for (let i = 0; i < inputBars.length; i++) {
            inputBars[i].value = ''
        }
    }
}
updateConverterPage();

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

    return parseFloat(unitValue.toFixed(15));
}

function changeConverterPage() {
    if (converterPage != converterPageSL.value) {
        converterPage = converterPageSL.value
        sessionStorage.setItem("savedUnitType", converterPage);
        updateConverterPage(true)
    }
}
window.changeConverterPage = changeConverterPage;

let lastUsedText = ''
function changeUnit(type, isText) {
    let pr = "Converter-"
    if (isText) {
        lastUsedText = type;
    }
    if (lastUsedText !== type && lastUsedText !== '') {
        type = lastUsedText
    }

    let id = pr + type;
    if (type == 'Input') {
        type = 'Output'
    } else {
        type = 'Input'
    }
    let id2 = pr + type;
    let el = document.getElementById(id + "-Text").value;
    let elsl = document.getElementById(id + "-Select").value;
    let elsl2 = document.getElementById(id2 + "-Select").value;

    let result = convertUnit(elsl, elsl2, el)
    if (el == '') {
        result = ''
    }
    document.getElementById(id2 + "-Text").value = result;
}
window.changeUnit = changeUnit;

main.updateIn('lang-unit');
main.updateIn('lang-converter');
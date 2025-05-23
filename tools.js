import * as main from "./main.js";

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
    return `<option value="${name}" class="lang${langsuffix}" name="unit.${name}${suffix}"></option>`
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

const elements = new Map();
const elementsTypes = new Map();

element(1, 'H', 'hydrogen', 1.00784, 'non_metal', 1, 1, '1s¹', 2.20, 13.598, 0.00008988, 14.01, 20.28, 14.304, 1400, 'primordial')
element(2, 'He', 'helium', 4.00260, 'noble_gas', 1, 18, '1s²', null, 24.587, 0.0001785, null, 4.22, 5.193, 0.008, 'primordial')
element(3, 'Li', 'lithium', 6.941, 'alkali_metal', 2, 1, '[He] 2s¹', 0.98, 5.392, 0.534, 453.69, 1560, 3.582, 20, 'primordial')
element(4, 'Be', 'beryllium', 9.012183, 'alkaline_earth_metal', 2, 2, '[He] 2s²', 1.57, 9.323, 1.85, 1560, 2742, 1.825, 2.8, 'primordial')
element(5, 'B', 'boron', 10.81, 'metalloid', 2, 13, '[He] 2s² 2p¹', 2.04, 8.298, 2.34, 2349, 4200, 1.026, 10, 'primordial')
element(6, 'C', 'carbon', 12.011, 'non_metal', 2, 14, '[He] 2s² 2p²', 2.55, 11.260, 2.267, 4000, 4300, 0.709, 200, 'primordial')
element(7, 'N', 'nitrogen', 14.007, 'non_metal', 2, 15, '[He] 2s² 2p³', 3.04, 14.534, 0.0012506, 63.15, 77.36, 1.04, 19, 'primordial')
element(8, 'O', 'oxygen', 15.999, 'non_metal', 2, 16, '[He] 2s² 2p⁴', 3.44, 13.618, 0.001429, 54.36, 90.20, 0.918, 461000, 'primordial')
element(9, 'F', 'fluorine', 18.99840316, 'non_metal', 2, 17, '[He] 2s² 2p⁵', 3.98, 17.423, 0.001696, 53.53, 85.03, 0.824, 585, 'primordial')
element(10, 'Ne', 'neon', 20.180, 'noble_gas', 2, 18, '[He] 2s² 2p⁶', null, 21.565, 0.0009002, 24.56, 27.07, 1.03, 0.005, 'primordial')
element(11, 'Na', 'sodium', 22.9897693, 'alkali_metal', 3, 1, '[Ne] 3s¹', 0.93, 5.139, 0.968, 370.87, 1156, 1.228, 23600, 'primordial')
element(12, 'Mg', 'magnesium', 24.305, 'alkaline_earth_metal', 3, 2, '[Ne] 3s²', 1.31, 7.646, 1.738, 923, 1363, 1.023, 23300, 'primordial')
element(13, 'Al', 'aluminum', 26.981538, 'post_transition_metal', 3, 13, '[Ne] 3s² 3p¹', 1.61, 5.986, 2.70, 933.47, 2792, 0.897, 82300, 'primordial')
element(14, 'Si', 'silicon', 28.085, 'metalloid', 3, 14, '[Ne] 3s² 3p²', 1.90, 8.152, 2.3290, 1687, 3538, 0.705, 282000, 'primordial')
element(15, 'P', 'phosphorus', 30.97376200, 'non_metal', 3, 15, '[Ne] 3s² 3p³', 2.19, 10.487, 1.823, 317.30, 550, 0.769, 1050, 'primordial')
element(16, 'S', 'sulfur', 32.07, 'non_metal', 3, 16, '[Ne] 3s² 3p⁴', 2.58, 10.360, 2.07, 388.36, 717.87, 0.71, 350, 'primordial')
element(17, 'Cl', 'chlorine', 35.45, 'non_metal', 3, 17, '[Ne] 3s² 3p⁵', 3.16, 12.968, 0.0032, 171.6, 239.11, 0.479, 145, 'primordial')
element(18, 'Ar', 'argon', 39.95, 'noble_gas', 3, 18, '[Ne] 3s² 3p⁶', null, 15.760, 0.001784, 83.80, 87.30, 0.52, 3.5, 'primordial')
element(19, 'K', 'potassium', 39.0983, 'alkali_metal', 4, 1, '[Ar] 4s¹', 0.82, 4.341, 0.89, 336.53, 1032, 0.757, 20900, 'primordial')
element(20, 'Ca', 'calcium', 40.078, 'alkaline_earth_metal', 4, 2, '[Ar] 4s²', 1.00, 6.113, 1.55, 1115, 1757, 0.647, 41500, 'primordial')
element(21, 'Sc', 'scandium', 44.95591, 'transition_metal', 4, 3, '[Ar] 4s² 3d¹', 1.36, 6.561, 2.985, 1814, 3109, 0.568, 22, 'primordial')
element(22, 'Ti', 'titanium', 47.867, 'transition_metal', 4, 4, '[Ar] 4s² 3d²', 1.54, 6.828, 4.506, 1941, 3560, 0.523, 5650, 'primordial')
element(23, 'V', 'vanadium', 50.9415, 'transition_metal', 4, 5, '[Ar] 4s² 3d³', 1.63, 6.746, 6.11, 2183, 3680, 0.489, 120, 'primordial')
element(24, 'Cr', 'chromium', 51.996, 'transition_metal', 4, 6, '[Ar] 4s¹ 3d⁵', 1.66, 6.767, 7.15, 2180, 2944, 0.449, 102, 'primordial')
element(25, 'Mn', 'manganese', 54.93804, 'transition_metal', 4, 7, '[Ar] 4s² 3d⁵', 1.55, 7.434, 7.21, 1519, 2334, 0.479, 950, 'primordial')
element(26, 'Fe', 'iron', 55.84, 'transition_metal', 4, 8, '[Ar] 4s² 3d⁶', 1.83, 7.902, 7.874, 1811, 3134, 0.449, 56300, 'primordial')
element(27, 'Co', 'cobalt', 58.93319, 'transition_metal', 4, 9, '[Ar] 4s² 3d⁷', 1.88, 7.881, 8.90, 1768, 3200, 0.421, 25, 'primordial')
element(28, 'Ni', 'nickel', 58.693, 'transition_metal', 4, 10, '[Ar] 4s² 3d⁸', 1.91, 7.640, 8.908, 1728, 3186, 0.444, 84, 'primordial')
element(29, 'Cu', 'copper', 63.55, 'transition_metal', 4, 11, '[Ar] 4s¹ 3d¹⁰', 1.90, 7.726, 8.96, 1357.77, 2835, 0.385, 60, 'primordial')
element(30, 'Zn', 'zinc', 65.38, 'transition_metal', 4, 12, '[Ar] 4s² 3d¹⁰', 1.65, 9.394, 7.14, 692.88, 1180, 0.388, 70, 'primordial')
element(31, 'Ga', 'gallium', 69.723, 'post_transition_metal', 4, 13, '[Ar] 4s² 3d¹⁰ 4p¹', 1.81, 5.999, 5.91, 302.9146, 2673, 0.371, 19, 'primordial')
element(32, 'Ge', 'germanium', 72.630, 'metalloid', 4, 14, '[Ar] 4s² 3d¹⁰ 4p²', 2.01, 7.900, 5.323, 1211.40, 3106, 0.32, 1.5, 'primordial')
element(33, 'As', 'arsenic', 74.92159, 'metalloid', 4, 15, '[Ar] 4s² 3d¹⁰ 4p³', 2.18, 9.815, 5.727, 1090, 887, 0.329, 1.8, 'primordial')
element(34, 'Se', 'selenium', 78.971, 'non_metal', 4, 16, '[Ar] 4s² 3d¹⁰ 4p⁴', 2.55, 9.752, 4.81, 453, 958, 0.321, 0.05, 'primordial')
element(35, 'Br', 'bromine', 79.904, 'non_metal', 4, 17, '[Ar] 4s² 3d¹⁰ 4p⁵', 2.96, 11.814, 3.1028, 265.8, 332.0, 0.474, 2.4, 'primordial')
element(36, 'Kr', 'krypton', 83.798, 'noble_gas', 4, 18, '[Ar] 4s² 3d¹⁰ 4p⁶', 3.00, 14.000, 0.003749, 115.79, 119.93, 0.248, 1e-4, 'primordial')
element(37, 'Rb', 'rubidium', 85.468, 'alkali_metal', 5, 1, '[Kr] 5s¹', 0.82, 4.177, 1.532, 312.46, 961, 0.363, 90, 'primordial')
element(38, 'Sr', 'strontium', 87.62, 'alkaline_earth_metal', 5, 2, '[Kr] 5s²', 0.95, 5.695, 2.64, 1050, 1655, 0.301, 370, 'primordial')
element(39, 'Y', 'yttrium', 88.90584, 'transition_metal', 5, 3, '[Kr] 5s² 4d¹', 1.22, 6.217, 4.472, 1799, 3609, 0.298, 33, 'primordial')
element(40, 'Zr', 'zirconium', 91.22, 'transition_metal', 5, 4, '[Kr] 5s² 4d²', 1.33, 6.634, 6.52, 2128, 4682, 0.278, 165, 'primordial')
element(41, 'Nb', 'niobium', 92.90637, 'transition_metal', 5, 5, '[Kr] 5s¹ 4d⁴', 1.6, 6.759, 8.57, 2750, 5017, 0.265, 20, 'primordial')
element(42, 'Mo', 'molybdenum', 95.95, 'transition_metal', 5, 6, '[Kr] 5s¹ 4d⁵', 2.16, 7.092, 10.28, 2896, 4912, 0.251, 1.2, 'primordial')
element(43, 'Tc', 'technetium', 96.90636, 'transition_metal', 5, 7, '[Kr] 5s² 4d⁵', 1.9, 7.28, 11, 2430, 4538, null, 3e-9, 'from_decay')
element(44, 'Ru', 'ruthenium', 101.07, 'transition_metal', 5, 8, '[Kr] 5s¹ 4d⁷', 2.2, 7.361, 12.45, 2607, 4423, 0.238, 0.001, 'primordial')
element(45, 'Rh', 'rhodium', 102.9055, 'transition_metal', 5, 9, '[Kr] 5s¹ 4d⁸', 2.28, 7.459, 12.41, 2237, 3968, 0.243, 0.001, 'primordial')
element(46, 'Pd', 'palladium', 106.42, 'transition_metal', 5, 10, '[Kr] 4d¹⁰', 2.20, 8.337, 12.023, 1828.05, 3236, 0.244, 0.015, 'primordial')
element(47, 'Ag', 'silver', 107.868, 'transition_metal', 5, 11, '[Kr] 5s¹ 4d¹⁰', 1.93, 7.576, 10.49, 1234.93, 2435, 0.235, 0.075, 'primordial')
element(48, 'Cd', 'cadmium', 112.41, 'transition_metal', 5, 12, '[Kr] 5s² 4d¹⁰', 1.69, 8.994, 8.65, 594.22, 1040, 0.232, 0.159, 'primordial')
element(49, 'In', 'indium', 114.818, 'post_transition_metal', 5, 13, '[Kr] 5s² 4d¹⁰ 5p¹', 1.78, 5.786, 7.31, 429.75, 2345, 0.233, 0.25, 'primordial')
element(50, 'Sn', 'tin', 118.71, 'post_transition_metal', 5, 14, '[Kr] 5s² 4d¹⁰ 5p²', 1.96, 7.344, 7.265, 505.08, 2875, 0.228, 2.3, 'primordial')
element(51, 'Sb', 'antimony', 121.76, 'metalloid', 5, 15, '[Kr] 5s² 4d¹⁰ 5p³', 2.05, 8.64, 6.697, 903.78, 1860, 0.207, 0.2, 'primordial')
element(52, 'Te', 'tellurium', 127.60, 'metalloid', 5, 16, '[Kr] 5s² 4d¹⁰ 5p⁴', 2.1, 9.010, 6.24, 722.66, 1261, 0.202, 0.001, 'primordial')
element(53, 'I', 'iodine', 126.9045, 'non_metal', 5, 17, '[Kr] 5s² 4d¹⁰ 5p⁵', 2.66, 10.451, 4.933, 386.85, 457.4, 0.214, 0.45, 'primordial')
element(54, 'Xe', 'xenon', 131.29, 'noble_gas', 5, 18, '[Kr] 5s² 4d¹⁰ 5p⁶', 2.60, 12.130, 0.005894, 161.4, 165.03, 0.158, 3e-5, 'primordial')
element(55, 'Cs', 'cesium', 132.9054520, 'alkali_metal', 6, 1, '[Xe] 6s¹', 0.79, 3.894, 1.93, 301.59, 944, 0.242, 3, 'primordial')
element(56, 'Ba', 'barium', 137.33, 'alkaline_earth_metal', 6, 2, '[Xe] 6s²', 0.89, 5.212, 3.51, 1000, 2170, 0.204, 425, 'primordial')
element(57, 'La', 'lanthanum', 138.9055, 'lanthanide', 8, 4, '[Xe] 6s² 5d¹', 1.10, 5.577, 6.162, 1193, 3737, 0.195, 39, 'primordial')
element(58, 'Ce', 'cerium', 140.116, 'lanthanide', 8, 5, '[Xe] 6s² 4f¹ 5d¹', 1.12, 5.539, 6.770, 1068, 3716, 0.192, 66.5, 'primordial')
element(59, 'Pr', 'praseodymium', 140.90766, 'lanthanide', 8, 6, '[Xe] 6s² 4f³', 1.13, 5.464, 6.77, 1208, 3793, 0.193, 9.2, 'primordial')
element(60, 'Nd', 'neodymium', 144.24, 'lanthanide', 8, 7, '[Xe] 6s² 4f⁴', 1.14, 5.525, 7.01, 1297, 3347, 0.19, 41.5, 'primordial')
element(61, 'Pm', 'promethium', 144.91276, 'lanthanide', 8, 8, '[Xe] 6s² 4f⁵', 1.13, 5.55, 7.26, 1315, 3273, null, 2e-19, 'from_decay')
element(62, 'Sm', 'samarium', 150.4, 'lanthanide', 8, 9, '[Xe] 6s² 4f⁶', 1.17, 5.644, 7.52, 1345, 2067, 0.197, 7.05, 'primordial')
element(63, 'Eu', 'europium', 151.964, 'lanthanide', 8, 10, '[Xe] 6s² 4f⁷', 1.20, 5.670, 5.244, 1099, 1802, 0.182, 2, 'primordial')
element(64, 'Gd', 'gadolinium', 157.25, 'lanthanide', 8, 11, '[Xe] 6s² 4f⁷ 5d¹', 1.20, 6.150, 7.90, 1585, 3546, 0.236, 6.2, 'primordial')
element(65, 'Tb', 'terbium', 158.92535, 'lanthanide', 8, 12, '[Xe] 6s² 4f⁹', 1.20, 5.864, 8.23, 1629, 3503, 0.182, 1.2, 'primordial')
element(66, 'Dy', 'dysprosium', 162.500, 'lanthanide', 8, 13, '[Xe] 6s² 4f¹⁰', 1.22, 5.939, 8.540, 1680, 2840, 0.17, 5.2, 'primordial')
element(67, 'Ho', 'holmium', 164.93033, 'lanthanide', 8, 14, '[Xe] 6s² 4f¹¹', 1.23, 6.022, 8.79, 1734, 2993, 0.165, 1.3, 'primordial')
element(68, 'Er', 'erbium', 167.26, 'lanthanide', 8, 15, '[Xe] 6s² 4f¹²', 1.24, 6.108, 9.066, 1802, 3141, 0.168, 3.5, 'primordial')
element(69, 'Tm', 'thulium', 168.93422, 'lanthanide', 8, 16, '[Xe] 6s² 4f¹³', 1.25, 6.184, 9.32, 1818, 2223, 0.16, 0.52, 'primordial')
element(70, 'Yb', 'ytterbium', 173.05, 'lanthanide', 8, 17, '[Xe] 6s² 4f¹⁴', 1.1, 6.254, 6.90, 1097, 1469, 0.155, 3.2, 'primordial')
element(71, 'Lu', 'lutetium', 174.9667, 'lanthanide', 8, 18, '[Xe] 6s² 4f¹⁴ 5d¹', 1.27, 5.426, 9.841, 1925, 3675, 0.154, 0.8, 'primordial')
element(72, 'Hf', 'hafnium', 178.49, 'transition_metal', 6, 4, '[Xe] 6s² 4f¹⁴ 5d²', 1.3, 6.825, 13.31, 2506, 4876, 0.144, 3, 'primordial')
element(73, 'Ta', 'tantalum', 180.9479, 'transition_metal', 6, 5, '[Xe] 6s² 4f¹⁴ 5d³', 1.5, 7.89, 16.69, 3290, 5731, 0.14, 2, 'primordial')
element(74, 'W', 'tungsten', 183.84, 'transition_metal', 6, 6, '[Xe] 6s² 4f¹⁴ 5d⁴', 2.36, 7.98, 19.25, 3695, 6203, 0.132, 1.3, 'primordial')
element(75, 'Re', 'rhenium', 186.207, 'transition_metal', 6, 7, '[Xe] 6s² 4f¹⁴ 5d⁵', 1.9, 7.88, 21.02, 3459, 5869, 0.137, 7e-4, 'primordial')
element(76, 'Os', 'osmium', 190.23, 'transition_metal', 6, 8, '[Xe] 6s² 4f¹⁴ 5d⁶', 2.2, 8.7, 22.59, 3306, 5285, 0.13, 0.002, 'primordial')
element(77, 'Ir', 'iridium', 192.22, 'transition_metal', 6, 9, '[Xe] 6s² 4f¹⁴ 5d⁷', 2.20, 9.1, 22.56, 2719, 4701, 0.131, 0.001, 'primordial')
element(78, 'Pt', 'platinum', 195.08, 'transition_metal', 6, 10, '[Xe] 6s² 4f¹⁴ 5d⁹', 2.28, 9, 21.45, 2041.4, 4098, 0.133, 0.005, 'primordial')
element(79, 'Au', 'gold', 196.96657, 'transition_metal', 6, 11, '[Xe] 6s¹ 4f¹⁴ 5d¹⁰', 2.54, 9.226, 19.3, 1337.33, 3129, 0.129, 0.004, 'primordial')
element(80, 'Hg', 'mercury', 200.59, 'transition_metal', 6, 12, '[Xe] 6s² 4f¹⁴ 5d¹⁰', 2.00, 10.438, 13.534, 234.43, 629.88, 0.14, 0.085, 'primordial')
element(81, 'Tl', 'thallium', 204.383, 'post_transition_metal', 6, 13, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p¹', 1.62, 6.108, 11.85, 577, 1746, 0.129, 0.85, 'primordial')
element(82, 'Pb', 'lead', 207.2, 'post_transition_metal', 6, 14, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²', 2.33, 7.417, 11.34, 600.61, 2022, 0.129, 14, 'primordial')
element(83, 'Bi', 'bismuth', 208.98040, 'post_transition_metal', 6, 15, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p³', 2.02, 7.289, 9.78, 544.7, 1837, 0.122, 0.009, 'primordial')
element(84, 'Po', 'polonium', 208.98243, 'post_transition_metal', 6, 16, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁴', 2.0, 8.417, 9.196, 527, 1235, null, 2e-10, 'from_decay')
element(85, 'At', 'astatine', 209.98715, 'post_transition_metal', 6, 17, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁵', 2.2, 9.5, 8.93, 575, 610, null, 3e-20, 'from_decay')
element(86, 'Rn', 'radon', 222.01758, 'noble_gas', 6, 18, '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶', 2.2, 10.745, 0.00973, 202, 211.3, 0.094, 4e-13, 'from_decay')
element(87, 'Fr', 'francium', 223.01973, 'alkali_metal', 7, 1, '[Rn] 7s¹', 0.7, 3.9, 2.48, 281, 890, null, 1e-18, 'from_decay')
element(88, 'Ra', 'radium', 226.02541, 'alkaline_earth_metal', 7, 2, '[Rn] 7s²', 0.9, 5.279, 5.5, 973, 2010, 0.094, 9e-7, 'from_decay')
element(89, 'Ac', 'actinium', 227.02775, 'actinide', 9, 4, '[Rn] 7s² 6d¹', 1.1, 5.17, 10, 1323, 3471, 0.12, 5.5e-10, 'from_decay')
element(90, 'Th', 'thorium', 232.038, 'actinide', 9, 5, '[Rn] 7s² 6d²', 1.3, 6.08, 11.7, 2115, 5061, 0.113, 9.6, 'primordial')
element(91, 'Pa', 'protactinium', 231.03588, 'actinide', 9, 6, '[Rn] 7s² 5f² 6d¹', 1.5, 5.89, 15.37, 1841, 4300, null, 1.4e-6, 'from_decay')
element(92, 'U', 'uranium', 238.0289, 'actinide', 9, 7, '[Rn] 7s² 5f³ 6d¹', 1.38, 6.194, 19.1, 1405.3, 4404, 0.116, 2.7, 'primordial')
element(93, 'Np', 'neptunium', 237.048172, 'actinide', 9, 8, '[Rn] 7s² 5f⁴ 6d¹', 1.36, 6.266, 20.45, 917, 4273, null, 3e-12, 'from_decay')
element(94, 'Pu', 'plutonium', 244.06420, 'actinide', 9, 9, '[Rn] 7s² 5f⁶', 1.28, 6.06, 19.85, 912.5, 3501, null, 3e-11, 'from_decay')
element(95, 'Am', 'americium', 243.061380, 'actinide', 9, 10, '[Rn] 7s² 5f⁷', 1.13, 5.993, 12, 1449, 2880, null, null, 'synthetic')
element(96, 'Cm', 'curium', 247.07035, 'actinide', 9, 11, '[Rn] 7s² 5f⁸', 1.28, 6.02, 13.51, 1613, 3383, null, null, 'synthetic')
element(97, 'Bk', 'berkelium', 247.07031, 'actinide', 9, 12, '[Rn] 7s² 5f⁹', 1.3, 6.23, 14.78, 1259, 2900, null, null, 'synthetic')
element(98, 'Cf', 'californium', 251.07959, 'actinide', 9, 13, '[Rn] 7s² 5f¹⁰', 1.3, 6.30, 15.1, 1173, 1743, null, null, 'synthetic')
element(99, 'Es', 'einsteinium', 252.0830, 'actinide', 9, 14, '[Rn] 7s² 5f¹¹', 1.3, 6.42, 8.84, 1133, 1269, null, null, 'synthetic')
element(100, 'Fm', 'fermium', 257.09511, 'actinide', 9, 15, '[Rn] 7s² 5f¹²', 1.3, 6.50, 9.7, 1125, null, null, null, 'synthetic')
element(101, 'Md', 'mendelevium', 258.09843, 'actinide', 9, 16, '[Rn] 7s² 5f¹³', 1.3, 6.58, 10.3, 1100, null, null, null, 'synthetic')
element(102, 'No', 'nobelium', 259.10100, 'actinide', 9, 17, '[Rn] 7s² 5f¹⁴', 1.3, 6.65, 9.9, 1100, null, null, null, 'synthetic')
element(103, 'Lr', 'lawrencium', 266.120, 'actinide', 9, 18, '[Rn] 7s² 5f¹⁴ 7p¹', 1.3, null, 14.4, 1900, null, null, null, 'synthetic')
element(104, 'Rf', 'rutherfordium', 267.122, 'transition_metal', 7, 4, '[Rn] 7s² 5f¹⁴ 6d²', null, null, 17, 2400, 5800, null, null, 'synthetic')
element(105, 'Db', 'dubnium', 268.126, 'transition_metal', 7, 5, '[Rn] 7s² 5f¹⁴ 6d³', null, null, 21.6, null, null, null, null, 'synthetic')
element(106, 'Sg', 'seaborgium', 269.128, 'transition_metal', 7, 6, '[Rn] 7s² 5f¹⁴ 6d⁴', null, null, 23.5, null, null, null, null, 'synthetic')
element(107, 'Bh', 'bohrium', 270.133, 'transition_metal', 7, 7, '[Rn] 7s² 5f¹⁴ 6d⁵', null, null, 26.5, null, null, null, null, 'synthetic')
element(108, 'Hs', 'hassium', 269.1336, 'transition_metal', 7, 8, '[Rn] 7s² 5f¹⁴ 6d⁶', null, null, 28, null, null, null, null, 'synthetic')
element(109, 'Mt', 'meitnerium', 277.154, 'unknown', 7, 9, '[Rn] 7s² 5f¹⁴ 6d⁷', null, null, 27.5, null, null, null, null, 'synthetic')
element(110, 'Ds', 'darmstadtium', 282.166, 'unknown', 7, 10, '[Rn] 7s² 5f¹⁴ 6d⁸', null, null, 26.5, null, null, null, null, 'synthetic')
element(111, 'Rg', 'roentgenium', 282.169, 'unknown', 7, 11, '[Rn] 7s² 5f¹⁴ 6d⁹', null, null, 23, null, null, null, null, 'synthetic')
element(112, 'Cn', 'copernicium', 286.179, 'unknown', 7, 12, '[Rn] 7s² 5f¹⁴ 6d¹⁰', null, null, 14.0, 283, 340, null, null, 'synthetic')
element(113, 'Nh', 'nihonium', 286.182, 'unknown', 7, 13, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p¹', null, null, 16, 700, 1400, null, null, 'synthetic')
element(114, 'Fl', 'flerovium', 290.192, 'unknown', 7, 14, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p²', null, null, 11.4, 284, null, null, null, 'synthetic')
element(115, 'Mc', 'moscovium', 290.196, 'unknown', 7, 15, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p³', null, null, 13.5, 700, 1400, null, null, 'synthetic')
element(116, 'Lv', 'livermorium', 293.205, 'unknown', 7, 16, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁴', null, null, 12.9, 700, 1100, null, null, 'synthetic')
element(117, 'Ts', 'tennessine', 294.211, 'unknown', 7, 17, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁵', null, null, 7.2, 700, 883, null, null, 'synthetic')
element(118, 'Og', 'oganesson', 295.216, 'unknown', 7, 18, '[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁶', null, null, 7, 325, 450, null, null, 'synthetic')

elementType('atomic_mass', 100, 300, 0, 'u')
elementType('density', 200, 28, 0, 'g/cm³')
elementType('config', 160, 14, 1, '')
elementType('heat_capacity', 50, 1.5, 0, 'J/g ⋅ K')
elementType('melting', 0, 4000, 0, 'K')
elementType('boiling', 0, 6000, 0, 'K')
elementType('electronegativity', 185, 4, 1, '')
elementType('ionization', 251, 24, 4, 'eV')
elementType('abundance', null, null, null, 'mg/kg')

function element(atomic_number, symbol, name, atomic_mass, type, period, group, config, electronegativity, ionization, density, melting, boiling, heat_capacity, abundance, origin) {
    elements.set(symbol, { atomic_number: atomic_number, name: name, atomic_mass: atomic_mass, type: type, period: period, group: group, config: config, electronegativity: electronegativity, ionization: ionization, density: density, melting: melting, boiling: boiling, heat_capacity: heat_capacity, abundance: abundance, origin: origin });
}

function elementType(type, hue, h_value, l_value, unit) {
    elementsTypes.set(type, { hue: hue, h_value: h_value, l_value: l_value, unit: unit })
}

let periodicPeriod = 9;
let periodicGroup = 18;

let PagePeriodicContent = [];
for (let i = 0; i <= periodicPeriod; i++) {
    PagePeriodicContent.push(`<ul id="PeriodicColumn-${i}" class="periodic periodic-column set">`)
    for (let j = 0; j <= periodicGroup; j++) {
        PagePeriodicContent.push(`<li id="Periodic-Period${i}-Group${j}" class="periodic periodic-square period-${i} group-${j}"></li>`)
    }
    PagePeriodicContent.push(`</ul>`)
}
main.replace("PagePeriodic", PagePeriodicContent)

for (let i = 1; i <= periodicPeriod - 2; i++) {
    main.replace(`Periodic-Period${i}-Group0`, `<small class="period-number">${i}</small>`)
}

for (let i = 1; i <= periodicGroup; i++) {
    main.replace(`Periodic-Period0-Group${i}`, `<small class="group-number">${i}</small>`)
}

function getConfigType(elementMapGroup, elementMapPeriod) {
    let configType = ''
    if (elementMapPeriod <= 7) {
        if (elementMapGroup <= 2 || elementMapPeriod == 1) {
            configType = 's'
        } else if (elementMapGroup <= 12) {
            configType = 'd'
        } else if (elementMapGroup >= 13) {
            configType = 'p'
        }
    } else if (elementMapPeriod >= 8) {
        if (elementMapGroup == 18) {
            configType = 'd'
        } else {
            configType = 'f'
        }
    }

    return configType;
}

let unicodeNum = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹']
function getNumberFromExp(exp) {
    let exps = exp.split("")
    let number = []
    exps.forEach((e, i) => {
        unicodeNum.forEach((y, u) => {
            if(y == e) {
                number.push(u)
            }
        }) 
    })
    let output = number.join("")

    return output
}

elements.forEach((value, key) => {
    let elementMap = elements.get(key);
    let periodSquareID = `Periodic-Period${elementMap.period}-Group${elementMap.group}`

    main.change(periodSquareID, true, 'chemical-element')
    main.change(periodSquareID, true, `element-${elementMap.atomic_number}`)
    main.change(periodSquareID, true, `${elementMap.type}`)
    main.change(periodSquareID, true, `${getConfigType(elementMap.group, elementMap.period)}-block`)

    let periodSquareContent = `<small class="element-atomic-number">${elementMap.atomic_number}</small><b class="element-symbol">${key}</b><abbr class="lang element-name" name="element.${elementMap.name}"></abbr><small id="Periodic-Element${elementMap.atomic_number}-Data" class="element-atomic-mass"></small>`
    main.replace(periodSquareID, periodSquareContent)

    let periodSquare = document.getElementById(periodSquareID);
    periodSquare.onclick = function () { changeElementPage(key); };
})

let PagePeriodicInfoContent = `<div id="Periodic-Info-ElementSquare" class="periodic-square display-square chemical-element"></div><ul id="Periodic-Info-ElementTable" class="periodic table-container"></ul>`;
main.replace("PagePeriodicInfo", PagePeriodicInfoContent)

let elementInfoRows = [
    "atomic_number",
    "symbol",
    "name",
    "atomic_mass",
    "group",
    "block",
    "config",
    "density",
    "melting",
    "boiling",
    "heat_capacity",
    "electronegativity",
    "ionization",
    "abundance"
]

let PeriodicInfoElementTableRows = []
elementInfoRows.forEach((e, i) => {
    PeriodicInfoElementTableRows[i] = `<li id="Periodic-Info-${e}" class="table-row"><small class="lang table-el" name="element.${e}"></small><small id="Periodic-Info-${e}-Data" class="table-el-desc"></small></li>`
})
main.replace("Periodic-Info-ElementTable", PeriodicInfoElementTableRows)

let lastElementDisplay = ''
let lastType = 'non_metal'
let lastConfigType = 's-block'
let currentElementDisplayed = 'He'
function updateElementPage(name, display) {
    let squareName = "Periodic-Info-ElementSquare"
    let elementMap = elements.get(name);
    let elementType = elementMap.type;
    let elementConfig = getConfigType(elementMap.group, elementMap.period) + '-block';
    let displayActive = false
    if (display) {
        if (lastElementDisplay !== name) {
            let content = `<small class="element-atomic-number element-info">${elementMap.atomic_number}</small><b class="element-symbol element-info">${name}</b><abbr class="lang lang-element element-name element-info" name="element.${elementMap.name}"></abbr><small id="Periodic-Element-Data-Info" class="element-atomic-mass element-info"></small>`
            main.replace(squareName, content)
            main.replace(`Periodic-Element-Data-Info`, getElementData(name))
            elementInfoRows.forEach((e) => {
                let elementTypeMap = elementsTypes.get(e)
                let elementUnit = ''
                if (elementTypeMap != undefined) {
                    elementUnit = ' ' + elementTypeMap.unit
                }
                let elementTypeData = getElementData(name, e)
                let hideRow = false
                if (elementTypeData != null) {
                    let elementTypeDataLang = getElementData(name, e, true)
                    let attr = undefined
                    let pr_attr = ''
                    if (elementTypeDataLang) {
                        attr = 'name'
                        pr_attr = 'element.'
                        main.change(`Periodic-Info-${e}-Data`, true, 'lang')
                        main.change(`Periodic-Info-${e}-Data`, true, 'lang-element')
                    }
                    main.replace(`Periodic-Info-${e}-Data`, pr_attr + elementTypeData + elementUnit, attr)
                } else {
                    hideRow = true
                }
                main.change(`Periodic-Info-${e}`, hideRow, 'hidden')
            })

            replaceColor(name, squareName)
            currentElementDisplayed = name
            main.updateIn('lang-element');
            lastElementDisplay = name
        }
        if (lastType !== elementType) {
            main.change(squareName, false, lastType)
            lastType = elementType
        }
        if (lastConfigType !== elementConfig) {
            main.change(squareName, false, lastConfigType)
            lastConfigType = elementConfig
        }
        main.change(squareName, true, elementType)
        main.change(squareName, true, elementConfig)
        displayActive = true
    }
    main.change("PagePeriodicInfoContainer", displayActive)
}

let currentElement = ''
let lastElement = ''
function changeElementPage(name) {
    let elementMap = elements.get(name);
    let periodSquareID = `Periodic-Period${elementMap.period}-Group${elementMap.group}`
    let display = undefined;
    if (name !== lastElement && lastElement !== '') {
        let elementMap0 = elements.get(lastElement);
        let periodSquareID0 = `Periodic-Period${elementMap0.period}-Group${elementMap0.group}`
        display = false
        main.change(periodSquareID0, false, 'element-selected')
    }
    let select = undefined;
    if (currentElement == name) {
        select = false
        display = false
        currentElement = ''
    } else {
        select = true
        display = true
        lastElement = name
        currentElement = name;
    }
    main.change(periodSquareID, select, 'element-selected')

    updateElementPage(name, display)
}

window.changeElementPage = changeElementPage;

let periodicStates = [
    "group",
    "block",
    "atomic_mass",
    "config",
    'density',
    "electronegativity",
    "ionization",
    'heat_capacity',
    'melting',
    'boiling'
]

let periodicPageSL = document.getElementById("changePeriodicType");

let periodicStatesContent = []
periodicStates.forEach((e, i) => {
    periodicStatesContent[i] = `<option value="${e}" class="lang lang-periodic" name="element.${e}"></option>`
})
main.replace("changePeriodicType", periodicStatesContent)

export var periodicPage = sessionStorage.getItem("savedPeriodicType");
if (periodicPage == null) {
    periodicPage = "group";
}

let lastPage = 'group'
let lastPeriodicPage2 = 'group'
function updatePeriodicPage() {
    periodicPageSL.value = periodicPage;

    if (lastPage !== periodicPage) {
        main.change("PagePeriodic", false, lastPage)
        lastPage = periodicPage;
    }
    if (lastPeriodicPage2 !== periodicPage) {
        main.change("PagePeriodicInfo", false, lastPeriodicPage2)
        lastPeriodicPage2 = periodicPage
    }
    main.change("PagePeriodic", true, periodicPage)
    main.change("PagePeriodicInfo", true, periodicPage)

    elements.forEach((value, key) => {
        let elementMap = elements.get(key);
        main.replace(`Periodic-Element${elementMap.atomic_number}-Data`, getElementData(key))
    })
    main.replace(`Periodic-Element-Data-Info`, getElementData(currentElementDisplayed))

    replaceColorStyle()
}
updatePeriodicPage()

function getElementData(key, element, l) {
    let elementMap = elements.get(key)
    let data = ''
    let output = data;
    if (l) {
        output = false;
        if (element == 'group' || element == 'block' || element == 'name') {
            output = true
        }
    } else {
        if (element == undefined) {
            data = elementMap[periodicPage]
            if (periodicPage == 'group') {
                data = elementMap.atomic_mass
            } else if (periodicPage == 'block' || periodicPage == 'config') {
                data = elementMap.config
                if (elementMap.period >= 2) {
                    data = elementMap.config.slice(4)
                }
            }
        } else {
            data = elementMap[element]
            if (element == 'group') {
                data = elementMap.type
            } else if (element == 'block') {
                data = getConfigType(elementMap.group, elementMap.period)
            } else if (element == 'symbol') {
                data = key
            }
        }
        output = data
    }

    return output
}

function replaceColor(key, square) {
    let theme = localStorage.getItem("savedMode");
    let data = getElementData(key);
    let color = getElementColor(theme, data);
    main.replace(square, color, 'style')

    let addClass = getElementColor(theme, data, true);
    main.change(square, addClass, 'opposite');
}

function replaceColorStyle() {
    elements.forEach((value, key) => {
        let elementMap = elements.get(key);
        replaceColor(key, `Periodic-Period${elementMap.period}-Group${elementMap.group}`)
    })
    replaceColor(currentElementDisplayed, `Periodic-Info-ElementSquare`);
}
window.replaceColorStyle = replaceColorStyle;

function getElementColor(theme, value, l) {
    let elementCMap = elementsTypes.get(periodicPage)
    let color = '';
    let textColor = false
    let concap = 35;
    if (elementCMap !== undefined) {
        if (elementCMap.h_value !== undefined) {
            if(typeof value === 'string' || value instanceof String) {
                let valueS = value.split(" ")
                let valueA = valueS[valueS.length - 1].split("")
                let valueT = []
                valueA.forEach((e) => {
                    if (unicodeNum.includes(e)) {
                        valueT.push(e)
                    }
                })
                value = getNumberFromExp(valueT.join(""))
            }
            let calc = (100 * value - elementCMap.l_value) / elementCMap.h_value - elementCMap.l_value;
            let calc2 = calc
            if (theme == 'mode.light') {
                calc2 = 100 - calc
                if (calc2 < concap) {
                    textColor = true
                }
            } else {
                if (calc2 > 100 - concap) {
                    textColor = true
                }
            }
            color = `--elbg: hsl(${elementCMap.hue}, ${calc}%, ${calc2}%);`
        }
    }
    let output = color;
    if (l) {
        output = textColor
    }
    return output
}

function changePeriodicPage() {
    if (periodicPage != periodicPageSL.value) {
        periodicPage = periodicPageSL.value
        sessionStorage.setItem("savedPeriodicType", periodicPage);
        updatePeriodicPage()
    }
}

window.changePeriodicPage = changePeriodicPage;
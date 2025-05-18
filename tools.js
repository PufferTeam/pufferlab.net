import * as main from "./main.js";

let PageConverter = document.getElementById("PageConverter");
let converterPageSL = document.getElementById("changeUnit");

const units = new Map();
const unitsCategories = new Map();
const unitsConversion = new Map()

let unitTypes = [
    "distance",
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

generateMetric('distance', 'meter', 'm')
unit('distance', 'inch', 'in', 'imperial', 1, false, 'imperial_us')
unit('distance', 'foot', 'ft', 'imperial', 12, false, 'imperial_us')
unit('distance', 'yard', 'yd', 'imperial', 12 * 3, false, 'imperial_us')
unit('distance', 'mile', 'mi', 'imperial', 12 * 3 * 1760, false, 'imperial_us')
unit('distance', 'nautical_mile', 'nmi', 'imperial', 1852, false, 'other')
unit('distance', 'astronomical_unit', 'au', 'metric', 149597870700, false, 'other')
unit('distance', 'light_year', 'ly', 'metric', 9460730472580800, false, 'other')

generateMetric('volume', 'liter', 'L')
unit('volume', 'cubic_meter', 'm³', 'metric', 1e3, false, 'metric')
unit('volume', 'cubic_decimeter', 'dm³', 'metric', 1, false, 'metric')
unit('volume', 'cubic_centimeter', 'cm³', 'metric', 1e-3, false, 'metric')
unit('volume', 'cubic_millimeter', 'mm³', 'metric', 1e-6, false, 'metric')
unit('volume', 'metric_cup', 'cup', 'metric', 0.25, false, 'metric')
unit('volume', 'metric_tablespoon', 'tbsp', 'metric', 0.015, false, 'metric')
unit('volume', 'metric_teaspoon', 'tsp', 'metric', 0.005, false, 'metric')
unit('volume', 'cubic_inch', 'in³', 'imperial', 1, false, 'imperial_us')
unit('volume', 'cubic_foot', 'ft³', 'imperial', 12 * 12 * 12, false, 'imperial_us')
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

generateMetric('mass', 'gram', 'g')
unit('mass', 'tonne', 't', 'metric', 1e6, false, 'metric')
unit('mass', 'ounce', 'oz', 'imperial', 1, false, 'imperial_us')
unit('mass', 'pound', 'lb', 'imperial', 16, false, 'imperial_us')
unit('mass', 'stone', 'st', 'imperial', 16 * 14, false, 'imperial')
unit('mass', 'long_ton', 'LT (UK)', 'imperial', 16 * 2240, false, 'imperial')
unit('mass', 'short_ton', 'st (US)', 'imperial', 16 * 2000, false, 'us')

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

unit('data', 'bit', 'b', 'data', 1 / 8)
unit('data', 'byte', 'B', 'data', 1)
unit('data', 'kibibyte', 'KiB', 'data', 1024)
unit('data', 'mebibyte', 'MiB', 'data', Math.pow(1024, 2))
unit('data', 'gibibyte', 'GiB', 'data', Math.pow(1024, 3))
unit('data', 'tebibyte', 'TiB', 'data', Math.pow(1024, 4))
unit('data', 'pebibyte', 'PiB', 'data', Math.pow(1024, 5))
unit('data', 'kilobyte', 'KB', 'data', 1000)
unit('data', 'megabyte', 'MB', 'data', Math.pow(1000, 2))
unit('data', 'gigabyte', 'GB', 'data', Math.pow(1000, 3))
unit('data', 'terabyte', 'TB', 'data', Math.pow(1000, 4))
unit('data', 'petabyte', 'PB', 'data', Math.pow(1000, 5))

function generateMetric(type, name, symbol) {
    let m = 'metric';
    unit(type, name, symbol, m, 1, false, m)
    unit(type, 'kilo' + name, 'k' + symbol, m, 1e3, false, m)
    unit(type, 'deci' + name, 'd' + symbol, m, 1e-1, false, m)
    unit(type, 'centi' + name, 'c' + symbol, m, 1e-2, false, m)
    unit(type, 'milli' + name, 'm' + symbol, m, 1e-3, false, m)
    unit(type, 'deca' + name, 'da' + symbol, m, 1e1, false, m)
    unit(type, 'micro' + name, 'μ' + symbol, m, 1e-6, false, m)
    unit(type, 'nano' + name, 'n' + symbol, m, 1e-9, false, m)
    unit(type, 'pico' + name, 'p' + symbol, m, 1e-12, false, m)
    unit(type, 'hecto' + name, 'h' + symbol, m, 1e2, false, m)
    unit(type, 'tera' + name, 'T' + symbol, m, 1e12, false, m)
    unit(type, 'giga' + name, 'G' + symbol, m, 1e9, false, m)
    unit(type, 'mega' + name, 'M' + symbol, m, 1e6, false, m)
}

unitCategories('distance', ['metric', 'imperial_us', 'other'])
unitCategories('volume', ['metric', 'imperial_us', 'us', 'imperial'])
unitCategories('mass', ['metric', 'imperial_us', 'us', 'imperial'])

unitConversion('distance', 'imperial', 'metric', 0.0254, false)
unitConversion('mass', 'imperial', 'metric', 28.349523125, false)
unitConversion('volume', 'imperial', 'metric', 61.0237440947, true)
unitConversion('temperature', 'imperial', 'international', 9 / 5, true)

function unit(type, name, symbol, system, ratio, sign, category) {
    if (sign == undefined) {
        sign = false
    }
    units.set(name, { type: type, symbol: symbol, system: system, ratio: ratio, sign: sign, category: category });
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

function unitOption(name, suffix) {
    return `<option value="${name}" class="lang" name="tools.unit.${name}${suffix}"></option>`
}

function unitGroup(type, name) {
    return `<optgroup class="lang ${type}-${name}" name="tools.unit.${name}"></optgroup>`
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

unitsCategories.forEach((value, key) => {
    let categoryMap = unitsCategories.get(key)
    let unitSL0 = document.getElementsByClassName(key);
    for (let i = 0; i < unitSL0.length; i++) {
        for (let j = 0; j < categoryMap.length; j++) {
            unitSL0[i].insertAdjacentHTML("beforeend", unitGroup(key, categoryMap[j]))
        }
    }
})

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

let unitSL = [];
units.forEach((value, key) => {
    var unitsA = units.get(key);
    let type = unitsA.type;
    let categoryI = unitsA.category;
    let symbol = unitsA.symbol;
    if (categoryI == undefined) {
        unitSL = document.getElementsByClassName(type);
    } else {
        unitSL = document.getElementsByClassName(type + '-' + categoryI);
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

    return parseFloat(unitValue.toFixed(10));
}

function changeConverterPage() {
    if (converterPage != converterPageSL.value) {
        converterPage = converterPageSL.value
        sessionStorage.setItem("savedUnitType", converterPage);
        updateConverterPage()
    }
}
window.changeConverterPage = changeConverterPage;

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

let elements = new Map();

element(1, 'hydrogen', 'H', 1.0080, 'non_metal', 1, 1)
element(2, 'helium', 'He', 4.00260, 'noble_gas', 1, 18)
element(3, 'lithium', 'Li', 7.0, 'alkali_metal', 2, 1)
element(4, 'beryllium', 'Be', 9.012183, 'alkaline_earth_metal', 2, 2)
element(5, 'boron', 'B', 10.81, 'metalloid', 2, 13)
element(6, 'carbon', 'C', 12.011, 'non_metal', 2, 14)
element(7, 'nitrogen', 'N', 14.007, 'non_metal', 2, 15)
element(8, 'oxygen', 'O', 15.999, 'non_metal', 2, 16)
element(9, 'fluorine', 'F', 18.99840316, 'halogen', 2, 17)
element(10, 'neon', 'Ne', 20.180, 'noble_gas', 2, 18)
element(11, 'sodium', 'Na', 22.9897693, 'alkali_metal', 3, 1)
element(12, 'magnesium', 'Mg', 24.305, 'alkaline_earth_metal', 3, 2)
element(13, 'aluminum', 'Al', 26.981538, 'post_transition_metal', 3, 13)
element(14, 'silicon', 'Si', 28.085, 'metalloid', 3, 14)
element(15, 'phosphorus', 'P', 30.97376200, 'non_metal', 3, 15)
element(16, 'sulfur', 'S', 32.07, 'non_metal', 3, 16)
element(17, 'chlorine', 'Cl', 35.45, 'halogen', 3, 17)
element(18, 'argon', 'Ar', 39.9, 'noble_gas', 3, 18)
element(19, 'potassium', 'K', 39.0983, 'alkali_metal', 4, 1)
element(20, 'calcium', 'Ca', 40.08, 'alkaline_earth_metal', 4, 2)
element(21, 'scandium', 'Sc', 44.95591, 'transition_metal', 4, 3)
element(22, 'titanium', 'Ti', 47.867, 'transition_metal', 4, 4)
element(23, 'vanadium', 'V', 50.9415, 'transition_metal', 4, 5)
element(24, 'chromium', 'Cr', 51.996, 'transition_metal', 4, 6)
element(25, 'manganese', 'Mn', 54.93804, 'transition_metal', 4, 7)
element(26, 'iron', 'Fe', 55.84, 'transition_metal', 4, 8)
element(27, 'cobalt', 'Co', 58.93319, 'transition_metal', 4, 9)
element(28, 'nickel', 'Ni', 58.693, 'transition_metal', 4, 10)
element(29, 'copper', 'Cu', 63.55, 'transition_metal', 4, 11)
element(30, 'zinc', 'Zn', 65.4, 'post_transition_metal', 4, 12)
element(31, 'gallium', 'Ga', 69.723, 'post_transition_metal', 4, 13)
element(32, 'germanium', 'Ge', 72.63, 'metalloid', 4, 14)
element(33, 'arsenic', 'As', 74.92159, 'metalloid', 4, 15)
element(34, 'selenium', 'Se', 78.97, 'non_metal', 4, 16)
element(35, 'bromine', 'Br', 79.90, 'halogen', 4, 17)
element(36, 'krypton', 'Kr', 83.80, 'noble_gas', 4, 18)
element(37, 'rubidium', 'Rb', 85.468, 'alkali_metal', 5, 1)
element(38, 'strontium', 'Sr', 87.62, 'alkaline_earth_metal', 5, 2)
element(39, 'yttrium', 'Y', 88.90584, 'transition_metal', 5, 3)
element(40, 'zirconium', 'Zr', 91.22, 'transition_metal', 5, 4)
element(41, 'niobium', 'Nb', 92.90637, 'transition_metal', 5, 5)
element(42, 'molybdenum', 'Mo', 95.95, 'transition_metal', 5, 6)
element(43, 'technetium', 'Tc', 96.90636, 'transition_metal', 5, 7)
element(44, 'ruthenium', 'Ru', 101.1, 'transition_metal', 5, 8)
element(45, 'rhodium', 'Rh', 102.9055, 'transition_metal', 5, 9)
element(46, 'palladium', 'Pd', 106.42, 'transition_metal', 5, 10)
element(47, 'silver', 'Ag', 107.868, 'transition_metal', 5, 11)
element(48, 'cadmium', 'Cd', 112.41, 'transition_metal', 5, 12)
element(49, 'indium', 'In', 114.818, 'post_transition_metal', 5, 13)
element(50, 'tin', 'Sn', 118.71, 'post_transition_metal', 5, 14)
element(51, 'antimony', 'Sb', 121.760, 'metalloid', 5, 15)
element(52, 'tellurium', 'Te', 127.6, 'metalloid', 5, 16)
element(53, 'iodine', 'I', 126.9045, 'halogen', 5, 17)
element(54, 'xenon', 'Xe', 131.29, 'noble_gas', 5, 18)
element(55, 'cesium', 'Cs', 132.9054520, 'alkali_metal', 6, 1)
element(56, 'barium', 'Ba', 137.33, 'alkaline_earth_metal', 6, 2)
element(57, 'lanthanum', 'La', 138.9055, 'lanthanide', 6, 3)
element(58, 'cerium', 'Ce', 140.116, 'lanthanide', 8, 4)
element(59, 'praseodymium', 'Pr', 140.90766, 'lanthanide', 8, 5)
element(60, 'neodymium', 'Nd', 144.24, 'lanthanide', 8, 6)
element(61, 'promethium', 'Pm', 144.91276, 'lanthanide', 8, 7)
element(62, 'samarium', 'Sm', 150.4, 'lanthanide', 8, 8)
element(63, 'europium', 'Eu', 151.964, 'lanthanide', 8, 9)
element(64, 'gadolinium', 'Gd', 157.25, 'lanthanide', 8, 10)
element(65, 'terbium', 'Tb', 158.92535, 'lanthanide', 8, 11)
element(66, 'dysprosium', 'Dy', 162.500, 'lanthanide', 8, 12)
element(67, 'holmium', 'Ho', 164.93033, 'lanthanide', 8, 13)
element(68, 'erbium', 'Er', 167.26, 'lanthanide', 8, 14)
element(69, 'thulium', 'Tm', 168.93422, 'lanthanide', 8, 15)
element(70, 'ytterbium', 'Yb', 173.05, 'lanthanide', 8, 16)
element(71, 'lutetium', 'Lu', 174.9667, 'lanthanide', 8, 17)
element(72, 'hafnium', 'Hf', 178.49, 'transition_metal', 6, 4)
element(73, 'tantalum', 'Ta', 180.9479, 'transition_metal', 6, 5)
element(74, 'tungsten', 'W', 183.84, 'transition_metal', 6, 6)
element(75, 'rhenium', 'Re', 186.207, 'transition_metal', 6, 7)
element(76, 'osmium', 'Os', 190.2, 'transition_metal', 6, 8)
element(77, 'iridium', 'Ir', 192.22, 'transition_metal', 6, 9)
element(78, 'platinum', 'Pt', 195.08, 'transition_metal', 6, 10)
element(79, 'gold', 'Au', 196.96657, 'transition_metal', 6, 11)
element(80, 'mercury', 'Hg', 200.59, 'transition_metal', 6, 12)
element(81, 'thallium', 'Tl', 204.383, 'post_transition_metal', 6, 13)
element(82, 'lead', 'Pb', 207, 'post_transition_metal', 6, 14)
element(83, 'bismuth', 'Bi', 208.98040, 'post_transition_metal', 6, 15)
element(84, 'polonium', 'Po', 208.98243, 'post_transition_metal', 6, 16)
element(85, 'astatine', 'At', 209.98715, 'halogen', 6, 17)
element(86, 'radon', 'Rn', 222.01758, 'noble_gas', 6, 18)
element(87, 'francium', 'Fr', 223.01973, 'alkali_metal', 7, 1)
element(88, 'radium', 'Ra', 226.02541, 'alkaline_earth_metal', 7, 2)
element(89, 'actinium', 'Ac', 227.02775, 'actinide', 7, 3)
element(90, 'thorium', 'Th', 232.038, 'actinide', 9, 4)
element(91, 'protactinium', 'Pa', 231.03588, 'actinide', 9, 5)
element(92, 'uranium', 'U', 238.0289, 'actinide', 9, 6)
element(93, 'neptunium', 'Np', 237.048172, 'actinide', 9, 7)
element(94, 'plutonium', 'Pu', 244.06420, 'actinide', 9, 8)
element(95, 'americium', 'Am', 243.061380, 'actinide', 9, 9)
element(96, 'curium', 'Cm', 247.07035, 'actinide', 9, 10)
element(97, 'berkelium', 'Bk', 247.07031, 'actinide', 9, 11)
element(98, 'californium', 'Cf', 251.07959, 'actinide', 9, 12)
element(99, 'einsteinium', 'Es', 252.0830, 'actinide', 9, 13)
element(100, 'fermium', 'Fm', 257.09511, 'actinide', 9, 14)
element(101, 'mendelevium', 'Md', 258.09843, 'actinide', 9, 15)
element(102, 'nobelium', 'No', 259.10100, 'actinide', 9, 16)
element(103, 'lawrencium', 'Lr', 266.120, 'actinide', 9, 17)
element(104, 'rutherfordium', 'Rf', 267.122, 'transition_metal', 7, 4)
element(105, 'dubnium', 'Db', 268.126, 'transition_metal', 7, 5)
element(106, 'seaborgium', 'Sg', 269.128, 'transition_metal', 7, 6)
element(107, 'bohrium', 'Bh', 270.133, 'transition_metal', 7, 7)
element(108, 'hassium', 'Hs', 269.1336, 'transition_metal', 7, 8)
element(109, 'meitnerium', 'Mt', 277.154, 'unknown', 7, 9)
element(110, 'darmstadtium', 'Ds', 282.166, 'unknown', 7, 10)
element(111, 'roentgenium', 'Rg', 282.169, 'unknown', 7, 11)
element(112, 'copernicium', 'Cn', 286.179, 'unknown', 7, 12)
element(113, 'nihonium', 'Nh', 286.182, 'unknown', 7, 13)
element(114, 'flerovium', 'Fl', 290.192, 'unknown', 7, 14)
element(115, 'moscovium', 'Mc', 290.196, 'unknown', 7, 15)
element(116, 'livermorium', 'Lv', 293.205, 'unknown', 7, 16)
element(117, 'tennessine', 'Ts', 294.211, 'unknown', 7, 17)
element(118, 'oganesson', 'Og', 295.216, 'unknown', 7, 18)

function element(atomic_number, name, symbol, atomic_mass, type, period, family) {
    elements.set(atomic_number, { name: name, symbol: symbol, atomic_mass: atomic_mass, type: type, period: period, family: family });
}

elements.forEach((value, key) => {

})
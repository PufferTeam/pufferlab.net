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
        PageConverterContent.push(`<div class="converter row ${r}"><label for="${e}Converter${ru}"><select name="${e}Converter${ru}SL" id="${e}Converter${ru}SL" class="trigger select ${e} in" onchange="changeUnit('${e}Converter', '${ru}')"></select>:</label><input type="number" id="${e}Converter${ru}" class="trigger text in" name="${e}Converter${ru}" onkeyup="changeUnit('${e}Converter', '${ru}')" required minlength="1" /></div>`);
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

function changeUnit(id1, type) {
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

let PagePeriodic = document.getElementById("PagePeriodic");

const elements = new Map();

element(1, 'H', 'hydrogen', 1.0080, 'non_metal', 1, 1)
element(2, 'He', 'helium', 4.00260, 'noble_gas', 1, 18)
element(3, 'Li', 'lithium', 7.0, 'alkali_metal', 2, 1)
element(4, 'Be', 'beryllium', 9.012183, 'alkaline_earth_metal', 2, 2)
element(5, 'B', 'boron', 10.81, 'metalloid', 2, 13)
element(6, 'C', 'carbon', 12.011, 'non_metal', 2, 14)
element(7, 'N', 'nitrogen', 14.007, 'non_metal', 2, 15)
element(8, 'O', 'oxygen', 15.999, 'non_metal', 2, 16)
element(9, 'F', 'fluorine', 18.99840316, 'non_metal', 2, 17)
element(10, 'Ne', 'neon', 20.180, 'noble_gas', 2, 18)
element(11, 'Na', 'sodium', 22.9897693, 'alkali_metal', 3, 1)
element(12, 'Mg', 'magnesium', 24.305, 'alkaline_earth_metal', 3, 2)
element(13, 'Al', 'aluminum', 26.981538, 'post_transition_metal', 3, 13)
element(14, 'Si', 'silicon', 28.085, 'metalloid', 3, 14)
element(15, 'P', 'phosphorus', 30.97376200, 'non_metal', 3, 15)
element(16, 'S', 'sulfur', 32.07, 'non_metal', 3, 16)
element(17, 'Cl', 'chlorine', 35.45, 'non_metal', 3, 17)
element(18, 'Ar', 'argon', 39.9, 'noble_gas', 3, 18)
element(19, 'K', 'potassium', 39.0983, 'alkali_metal', 4, 1)
element(20, 'Ca', 'calcium', 40.08, 'alkaline_earth_metal', 4, 2)
element(21, 'Sc', 'scandium', 44.95591, 'transition_metal', 4, 3)
element(22, 'Ti', 'titanium', 47.867, 'transition_metal', 4, 4)
element(23, 'V', 'vanadium', 50.9415, 'transition_metal', 4, 5)
element(24, 'Cr', 'chromium', 51.996, 'transition_metal', 4, 6)
element(25, 'Mn', 'manganese', 54.93804, 'transition_metal', 4, 7)
element(26, 'Fe', 'iron', 55.84, 'transition_metal', 4, 8)
element(27, 'Co', 'cobalt', 58.93319, 'transition_metal', 4, 9)
element(28, 'Ni', 'nickel', 58.693, 'transition_metal', 4, 10)
element(29, 'Cu', 'copper', 63.55, 'transition_metal', 4, 11)
element(30, 'Zn', 'zinc', 65.4, 'post_transition_metal', 4, 12)
element(31, 'Ga', 'gallium', 69.723, 'post_transition_metal', 4, 13)
element(32, 'Ge', 'germanium', 72.63, 'metalloid', 4, 14)
element(33, 'As', 'arsenic', 74.92159, 'metalloid', 4, 15)
element(34, 'Se', 'selenium', 78.97, 'non_metal', 4, 16)
element(35, 'Br', 'bromine', 79.90, 'non_metal', 4, 17)
element(36, 'Kr', 'krypton', 83.80, 'noble_gas', 4, 18)
element(37, 'Rb', 'rubidium', 85.468, 'alkali_metal', 5, 1)
element(38, 'Sr', 'strontium', 87.62, 'alkaline_earth_metal', 5, 2)
element(39, 'Y', 'yttrium', 88.90584, 'transition_metal', 5, 3)
element(40, 'Zr', 'zirconium', 91.22, 'transition_metal', 5, 4)
element(41, 'Nb', 'niobium', 92.90637, 'transition_metal', 5, 5)
element(42, 'Mo', 'molybdenum', 95.95, 'transition_metal', 5, 6)
element(43, 'Tc', 'technetium', 96.90636, 'transition_metal', 5, 7)
element(44, 'Ru', 'ruthenium', 101.1, 'transition_metal', 5, 8)
element(45, 'Rh', 'rhodium', 102.9055, 'transition_metal', 5, 9)
element(46, 'Pd', 'palladium', 106.42, 'transition_metal', 5, 10)
element(47, 'Ag', 'silver', 107.868, 'transition_metal', 5, 11)
element(48, 'Cd', 'cadmium', 112.41, 'transition_metal', 5, 12)
element(49, 'In', 'indium', 114.818, 'post_transition_metal', 5, 13)
element(50, 'Sn', 'tin', 118.71, 'post_transition_metal', 5, 14)
element(51, 'Sb', 'antimony', 121.760, 'metalloid', 5, 15)
element(52, 'Te', 'tellurium', 127.6, 'metalloid', 5, 16)
element(53, 'I', 'iodine', 126.9045, 'non_metal', 5, 17)
element(54, 'Xe', 'xenon', 131.29, 'noble_gas', 5, 18)
element(55, 'Cs', 'cesium', 132.9054520, 'alkali_metal', 6, 1)
element(56, 'Ba', 'barium', 137.33, 'alkaline_earth_metal', 6, 2)
element(57, 'La', 'lanthanum', 138.9055, 'lanthanide', 8, 4)
element(58, 'Ce', 'cerium', 140.116, 'lanthanide', 8, 5)
element(59, 'Pr', 'praseodymium', 140.90766, 'lanthanide', 8, 6)
element(60, 'Nd', 'neodymium', 144.24, 'lanthanide', 8, 7)
element(61, 'Pm', 'promethium', 144.91276, 'lanthanide', 8, 8)
element(62, 'Sm', 'samarium', 150.4, 'lanthanide', 8, 9)
element(63, 'Eu', 'europium', 151.964, 'lanthanide', 8, 10)
element(64, 'Gd', 'gadolinium', 157.25, 'lanthanide', 8, 11)
element(65, 'Tb', 'terbium', 158.92535, 'lanthanide', 8, 12)
element(66, 'Dy', 'dysprosium', 162.500, 'lanthanide', 8, 13)
element(67, 'Ho', 'holmium', 164.93033, 'lanthanide', 8, 14)
element(68, 'Er', 'erbium', 167.26, 'lanthanide', 8, 15)
element(69, 'Tm', 'thulium', 168.93422, 'lanthanide', 8, 16)
element(70, 'Yb', 'ytterbium', 173.05, 'lanthanide', 8, 17)
element(71, 'Lu', 'lutetium', 174.9667, 'lanthanide', 8, 18)
element(72, 'Hf', 'hafnium', 178.49, 'transition_metal', 6, 4)
element(73, 'Ta', 'tantalum', 180.9479, 'transition_metal', 6, 5)
element(74, 'W', 'tungsten', 183.84, 'transition_metal', 6, 6)
element(75, 'Re', 'rhenium', 186.207, 'transition_metal', 6, 7)
element(76, 'Os', 'osmium', 190.2, 'transition_metal', 6, 8)
element(77, 'Ir', 'iridium', 192.22, 'transition_metal', 6, 9)
element(78, 'Pt', 'platinum', 195.08, 'transition_metal', 6, 10)
element(79, 'Au', 'gold', 196.96657, 'transition_metal', 6, 11)
element(80, 'Hg', 'mercury', 200.59, 'transition_metal', 6, 12)
element(81, 'Tl', 'thallium', 204.383, 'post_transition_metal', 6, 13)
element(82, 'Pb', 'lead', 207, 'post_transition_metal', 6, 14)
element(83, 'Bi', 'bismuth', 208.98040, 'post_transition_metal', 6, 15)
element(84, 'Po', 'polonium', 208.98243, 'post_transition_metal', 6, 16)
element(85, 'At', 'astatine', 209.98715, 'post_transition_metal', 6, 17)
element(86, 'Rn', 'radon', 222.01758, 'noble_gas', 6, 18)
element(87, 'Fr', 'francium', 223.01973, 'alkali_metal', 7, 1)
element(88, 'Ra', 'radium', 226.02541, 'alkaline_earth_metal', 7, 2)
element(89, 'Ac', 'actinium', 227.02775, 'actinide', 9, 4)
element(90, 'Th', 'thorium', 232.038, 'actinide', 9, 5)
element(91, 'Pa', 'protactinium', 231.03588, 'actinide', 9, 6)
element(92, 'U', 'uranium', 238.0289, 'actinide', 9, 7)
element(93, 'Np', 'neptunium', 237.048172, 'actinide', 9, 8)
element(94, 'Pu', 'plutonium', 244.06420, 'actinide', 9, 9)
element(95, 'Am', 'americium', 243.061380, 'actinide', 9, 10)
element(96, 'Cm', 'curium', 247.07035, 'actinide', 9, 11)
element(97, 'Bk', 'berkelium', 247.07031, 'actinide', 9, 12)
element(98, 'Cf', 'californium', 251.07959, 'actinide', 9, 13)
element(99, 'Es', 'einsteinium', 252.0830, 'actinide', 9, 14)
element(100, 'Fm', 'fermium', 257.09511, 'actinide', 9, 15)
element(101, 'Md', 'mendelevium', 258.09843, 'actinide', 9, 16)
element(102, 'No', 'nobelium', 259.10100, 'actinide', 9, 17)
element(103, 'Lr', 'lawrencium', 266.120, 'actinide', 9, 18)
element(104, 'Rf', 'rutherfordium', 267.122, 'transition_metal', 7, 4)
element(105, 'Db', 'dubnium', 268.126, 'transition_metal', 7, 5)
element(106, 'Sg', 'seaborgium', 269.128, 'transition_metal', 7, 6)
element(107, 'Bh', 'bohrium', 270.133, 'transition_metal', 7, 7)
element(108, 'Hs', 'hassium', 269.1336, 'transition_metal', 7, 8)
element(109, 'Mt', 'meitnerium', 277.154, 'unknown', 7, 9)
element(110, 'Ds', 'darmstadtium', 282.166, 'unknown', 7, 10)
element(111, 'Rg', 'roentgenium', 282.169, 'unknown', 7, 11)
element(112, 'Cn', 'copernicium', 286.179, 'unknown', 7, 12)
element(113, 'Nh', 'nihonium', 286.182, 'unknown', 7, 13)
element(114, 'Fl', 'flerovium', 290.192, 'unknown', 7, 14)
element(115, 'Mc', 'moscovium', 290.196, 'unknown', 7, 15)
element(116, 'Lv', 'livermorium', 293.205, 'unknown', 7, 16)
element(117, 'Ts', 'tennessine', 294.211, 'unknown', 7, 17)
element(118, 'Og', 'oganesson', 295.216, 'unknown', 7, 18)

let periodicPeriod = 9;
let periodicGroup = 18;

function element(atomic_number, symbol, name, atomic_mass, type, period, group) {
    elements.set(symbol, { atomic_number: atomic_number, name: name, atomic_mass: atomic_mass, type: type, period: period, group: group });
}

let PagePeriodicContent = [];
for (let i = 0; i < periodicPeriod + 1; i++) {
    PagePeriodicContent.push(`<ul id="PeriodicColumn-${i}" class="periodic periodic-column set">`)
    for (let j = 0; j < periodicGroup + 1; j++) {
        PagePeriodicContent.push(`<li id="Periodic-Period${i}-Group${j}" class="periodic periodic-square period-${i} group-${j}"></li>`)
    }
    PagePeriodicContent.push(`</ul>`)
}

PagePeriodic.innerHTML = PagePeriodicContent.join("");

for (let i = 1; i < periodicPeriod - 1; i++) {
    let periodicPeriodSquare = document.getElementById(`Periodic-Period${i}-Group0`)
    periodicPeriodSquare.innerHTML = `<small class="period-number">${i}</small>`
}

for (let i = 1; i < periodicGroup + 1; i++) {
    let periodicGroupSquare = document.getElementById(`Periodic-Period0-Group${i}`)
    periodicGroupSquare.innerHTML = `<small class="group-number">${i}</small>`
}

elements.forEach((value, key) => {
    let elementMap = elements.get(key);
    let periodSquareID = `Periodic-Period${elementMap.period}-Group${elementMap.group}`
    let periodSquare = document.getElementById(periodSquareID);

    main.change(periodSquareID, true, 'chemical-element')
    main.change(periodSquareID, true, `element-${elementMap.atomic_number}`)
    main.change(periodSquareID, true, `${elementMap.type}`)

    let periodSquareContent = `<small class="element-atomic-number">${elementMap.atomic_number}</small><b class="element-symbol">${key}</b><abbr class="lang element-name" name="tools.element.${elementMap.name}"></abbr><small class="element-atomic-mass">${elementMap.atomic_mass}</small>`
    periodSquare.innerHTML = periodSquareContent

    periodSquare.onclick = function () { changeElementPage(key); };
})

let currentElement = ''
let lastElement = ''
function changeElementPage(name) {
    let elementMap = elements.get(name);
    let periodSquareID = `Periodic-Period${elementMap.period}-Group${elementMap.group}`
    if(name !== lastElement && lastElement !== '') {
        let elementMap0 = elements.get(lastElement);
        let periodSquareID0 = `Periodic-Period${elementMap0.period}-Group${elementMap0.group}`
        main.change(periodSquareID0, false, 'element-selected')
    }
    let select = undefined;
    if (currentElement == name) {
        select = false
        currentElement = ''
    } else {
        select = true
        lastElement = name
        currentElement = name;
    }
    main.change(periodSquareID, select, 'element-selected')
}

window.changeElementPage = changeElementPage;
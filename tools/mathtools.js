import * as math from '../utils/math.js';

// GCD by using common divisors for multiple numbers
export function gcdDivisors(...numbers) {
    let steps = "";
    const divisors = numbers.map(math.divisors);
    steps += `${divisors.map((d, i) => `Divisors of ${numbers[i]}: ${d.join(", ")}`).join("\n")}\n`;    
    const commonDivisors = numbers
        .map(math.divisors)
        .reduce((common, current) => common.filter(divisor => current.includes(divisor)), math.divisors(numbers[0]));
    steps += `Common divisors: ${commonDivisors.join(", ")}\n`;
    steps += `gcd(${numbers.join(", ")}) = ${Math.max(...commonDivisors)}`;
    return steps;
}

// GCD by using Euclidean division for multiple numbers
export function gcdEuclidean(...numbers) {
    let steps = "";
    const sortedNumbers = [...numbers].sort((a, b) => b - a);

    function gcd(a, b) {
        while (b !== 0) {
            const remainder = a % b;
            steps += `    ${a} = ${b} * ${Math.floor(a / b)} + ${remainder}\n`;
            a = b;
            b = remainder;
        }
        return a;
    }

    let result = sortedNumbers[0];
    for (let i = 1; i < sortedNumbers.length; i++) {
        steps += `Calculating gcd(${result}, ${sortedNumbers[i]})\n`;
        const previousResult = result;
        result = gcd(result, sortedNumbers[i]);
        steps += `gcd(${previousResult}, ${sortedNumbers[i]}) = ${result}\n`;
    }

    steps += `gcd(${numbers.join(", ")}) = ${result}`;
    return steps;
}

// GCD by using prime factorization for multiple numbers
export function gcdPrimeFactorization(...numbers) {
    let steps = "";
    const primeFactors = numbers.map(math.primeFactors);
    steps += `${primeFactors.map((f, i) => `Prime factors of ${numbers[i]}: ${f.length > 0 ? f.join(", ") : "None"}`).join("\n")}\n`;
    const commonFactors = primeFactors.reduce((common, current) => common.filter(factor => current.includes(factor)), primeFactors[0]);
    steps += `Common factors: ${commonFactors.length > 0 ? commonFactors.join(", ") : "None"}\n`;
    const gcd = commonFactors.length > 0 ? commonFactors.reduce((acc, factor) => acc * factor, 1) : 1;
    steps += `product(Common factors): ${gcd}\n`;
    steps += `gcd(${numbers.join(", ")}) = ${gcd}`;
    return steps;
}

// GCD by using LCM for multiple numbers
export function gcdLCM(...numbers) {
    let steps = "";

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const previousResult = result;
        const currentLCM = math.lcm(result, numbers[i]);
        result = (result * numbers[i]) / currentLCM;
        steps += `gcd(${previousResult}, ${numbers[i]}) = (${previousResult} * ${numbers[i]}) / lcm(${previousResult}, ${numbers[i]}) = ${result}\n`;
    }

    steps += `gcd(${numbers.join(", ")}) = ${result}`;
    return steps;
}

// LCM by using common multiples for multiple numbers
export function lcmCommonMultiples(...numbers) {
    let steps = "";

    function findCommonMultiple(a, b) {
        let multipleA = a, multipleB = b;
        steps += `Calculating lcm(${a}, ${b})\n`;
        while (multipleA !== multipleB) {
            if (multipleA < multipleB) {
                const increment = Math.ceil((multipleB - multipleA) / a); // Calculate how many times to increment a to reach or exceed b
                multipleA += increment * a;
                steps += `    Incrementing ${increment} times multiple of ${a} : ${multipleA}\n`;
            } else {
                const increment = Math.ceil((multipleA - multipleB) / b);
                multipleB += increment * b;
                steps += `    Incrementing ${increment} times multiple of ${b} : ${multipleB}\n`;
            }
        }
        return multipleA;
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const previousResult = result;
        result = findCommonMultiple(result, numbers[i]);
        steps += `lcm(${previousResult}, ${numbers[i]}) = ${result}\n`;
    }

    steps += `lcm(${numbers.join(", ")}) = ${result}`;
    return steps;
}

// LCM by using prime factorization for multiple numbers
export function lcmPrimeFactorization(...numbers) {
    let steps = "";

    const primeFactorsWithExponents = numbers.map(math.primeFactorsExponents);
    steps += `${numbers.map((num, i) => `Prime factors of ${num}: ${Object.entries(primeFactorsWithExponents[i]).map(([factor, power]) => `${factor}^${power}`).join(", ") || "None"}`).join("\n")}\n`;
    const allFactors = new Set(numbers.flatMap(num => Object.keys(math.primeFactorsExponents(num)).map(Number)));
    steps += `Unique prime factors: ${[...allFactors].join(", ")}\n`;
    const factorPowers = {};
    for (const factor of allFactors) {
        factorPowers[factor] = Math.max(...primeFactorsWithExponents.map(factors => factors[factor] || 0));
    }
    steps += `Highest powers of each factor: ${Object.entries(factorPowers).map(([factor, power]) => `${factor}^${power}`).join(", ")}\n`;
    const lcm = Object.entries(factorPowers).reduce((product, [factor, power]) => product * Math.pow(factor, power), 1);
    steps += `lcm(${numbers.join(", ")}) = ${lcm}`;
    return steps;
}

// LCM by using GCD for multiple numbers
export function lcmGCD(...numbers) {
    let steps = "";

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const previousResult = result;
        const currentGCD = math.gcd(result, numbers[i]);
        result = (result * numbers[i]) / currentGCD;
        steps += `lcm(${previousResult}, ${numbers[i]}) = (${previousResult} * ${numbers[i]}) / gcd(${previousResult}, ${numbers[i]}) = ${result}\n`;
    }

    steps += `lcm(${numbers.join(", ")}) = ${result}`;
    return steps;
}
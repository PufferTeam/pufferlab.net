// Divisors of a number
export function divisors(n) {
    const result = [1, n];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }
    return result.sort((a, b) => a - b);
}

// Prime factorization of a number
export function primeFactors(n) {
    const result = [];
    let d = 2;
    while (n >= 2) {
        if (n % d === 0) {
            result.push(d);
            n /= d;
        } else {
            d++;
        }
    }
    return result;
}

// Prime factorization of a number with exponents
export function primeFactorsExponents(n) {
    const factors = primeFactors(n);
    const result = {};
    for (const factor of factors) {
        result[factor] = (result[factor] || 0) + 1;
    }
    return result;
}

// GCD of two numbers using Euclidean algorithm
export function gcdTwoNumbers(a, b) {
    if (b === 0) return a;
    return gcdTwoNumbers(b, a % b);
}

// GCD of numbers using Euclidean algorithm
export function gcd(...numbers) {
    if (numbers.length === 0) return undefined;
    return numbers.reduce((acc, num) => gcdTwoNumbers(acc, num));
}

// LCM of two numbers using GCD
export function lcmTwoNumbers(a, b) {
    return (a * b) / gcdTwoNumbers(a, b);
}

// LCM of numbers using GCD
export function lcm(...numbers) {
    if (numbers.length === 0) return undefined;
    return numbers.reduce((acc, num) => lcmTwoNumbers(acc, num));
}

// Prime number check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Prime number generation using Sieve of Eratosthenes
function sieveOfEratosthenes(n) {
    const primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false; // 0 and 1 are not prime numbers
    for (let p = 2; p * p <= n; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= n; i += p) {
                primes[i] = false;
            }
        }
    }
    return primes.map((isPrime, index) => (isPrime ? index : null)).filter(Boolean);
}

// Fibonacci sequence generation
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Factorial calculation
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
//1

function random(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// Пример 
console.log(random(1, 10)); 

//2

function pd() {
  let a = [1, 1, 1];
  let i = 3;
  
  return function() {
    let next = a[i - 2] + a[i - 3];
    a.push(next);
    i++;
    return next;
  }
}

// Пример 
let nextPadovan = pd();
console.log(nextPd()); 
console.log(nextPd());
console.log(nextPd()); 

//3

function isPrime(n) {
  if (n < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  
  return true;
}

function* prime() {
  let num = 2;
  
  while (true) {
    if (isPrime(num)) yield num;
    num++;
  }
}

// Пример 
let nextPrime = prime();
console.log(nextPrime.next().value); 
console.log(nextPrime.next().value); 
console.log(nextPrime.next().value);

//4

function countLetters(str) {
  let map = new Map();
  
  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  
  return map;
}

// Пример
console.log(countLetters("hello"));

//5

function getPrime(n) {
  let num = BigInt(2);
  let count = 0;
  
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  
  return num - BigInt(1);
}

// Пример 
console.log(getPrime(100)); 
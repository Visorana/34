function canIterate(obj) {
  return obj !== null && typeof obj[Symbol.iterator] === 'function';
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));

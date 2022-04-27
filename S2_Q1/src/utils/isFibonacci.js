function isSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

const isFibonacci = (num) => {
  if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
    return true;
  } else {
    return false;
  }
};

export default isFibonacci;

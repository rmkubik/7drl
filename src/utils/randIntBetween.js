function intBetweenInclusive(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

export default intBetweenInclusive;

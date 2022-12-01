function fib(x) {
  const sequence = [0, 1];
  for (let i = 2; i < x; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

function fibRecur(x, seq = [0, 1]) {
  return seq.length >= x
    ? seq
    : fibRecur(x, [...seq, seq[seq.length - 2] + seq[seq.length - 1]]);
}

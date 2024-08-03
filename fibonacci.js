function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}

function fibsRec(n) {
  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    const prev = fibsRec(n - 1);
    return prev.concat(prev.at(-1) + prev.at(-2));
  }
}

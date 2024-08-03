function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const part = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, part));
    const right = mergeSort(array.slice(part));
    const result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);
  }
}

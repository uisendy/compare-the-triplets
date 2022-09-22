function compareTriplets(a, b) {
  let aSum = 0;
  let bSum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aSum = aSum + 1;
    } else if (a[i] < b[i]) {
      bSum = bSum + 1;
    }
  }
}

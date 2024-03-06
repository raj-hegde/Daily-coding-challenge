const bin = (n) => Number(n).toString(2);

function count() {
  let cnt = bin(0);
  let res = 0;
  for (let i = 0; i < cnt.length; i++) {
    if (cnt.charAt(i) === "1") {
      res += 1;
    }
  }
  return res === 0 ? "1 not found" : res;
}

console.log(count());

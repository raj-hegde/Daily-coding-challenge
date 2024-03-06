// Not my solution, but I solved it but it was too long should not have deleted it!!
function merge(word1, word2) {
  let result = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
}

const case1_1 = "abc";
const case1_2 = "pqr";

const case2_1 = "ab";
const case2_2 = "pqrs";

const case3_1 = "abcd";
const case3_2 = "pq";

console.log(merge(case1_1, case1_2));
console.log(merge(case2_1, case2_2));
console.log(merge(case3_1, case3_2));

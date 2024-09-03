function countLetterA(str) {
  const count = (str.match(/a/gi) || []).length;
  return count;
}

const text = "raposa";
const count = countLetterA(text);
console.log(`A letra 'a' aparece ${count} vezes na string.`);

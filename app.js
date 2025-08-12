// let numbers = [3, 7, 8, ""];
// function sumOfArray(numbers) {
//   if (!Array.isArray(numbers)) {
//     return `ínvalid`;
//   }
//   for (let item of numbers) {
//     if (typeof item !== " ") {
//       return "invalid";
//     }
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(sumOfArray(numbers));

// function countVowel(string) {
//   if (typeof string !== "string") {
//     return `invalid`;
//   }
//   let count = 0;
//   for (let item of string) {
//     if (
//       item.toLowerCase() === "a" ||
//       item.toLowerCase() === "e" ||
//       item.toLowerCase() === "i" ||
//       item.toLowerCase() === "o" ||
//       item.toLowerCase() === "u"
//     ) {
//       count++
//     }
//   }
//   return count
// }
// console.log(countVowel(324));

// function cashOut(amount) {
//   if (typeof amount !== "number") {
//     return "Invalid ammount";
//   }
//   let charge = amount * 0.0175;
//   return `cashout charge for ${amount} is ${Math.floor(charge)} taka`;
// }
// console.log(cashOut(3000));

// function validContact(number) {
//   if (number.length !== 11) return false;
//   if (!number.startsWith("01")) return false;
//   if (number.includes(" ")) return false;
//   if (typeof number !== "string") return false;
//   return true;
// }
// console.log(validContact('01819234567'))
// console.log(validContact('01712345678'))

// let marks = [60, 70, 80, 40, 30];
// function willSuccess(marks) {
//   if (!Array.isArray(marks)) {
//     return `invalid`;
//   }
//   let marksOver50count = 0;
//   let marksBelow50count = 0;
//   for (let mark of marks) {
//     if (mark > 50) {
//       marksOver50count++;
//     } else {
//       marksBelow50count++;
//     }
//   }
//   if (marksOver50count > marksBelow50count) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(willSuccess(marks));


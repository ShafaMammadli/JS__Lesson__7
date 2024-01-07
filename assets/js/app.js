// ! Home tasks

// !String (metodlardan istifadeye icaze var)
//? 5.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen cumledeki sozlerden (reqemler arraya elave olunmamalidir) ibaret array qaytarmalidir
 */

// function str_words(sentences) {
//     let words = sentences.split(' ');
//     let result = words.filter( word => !/\d/.test(word));

//     return result;
// }

// let sentences = "Example string methods";
// let result = str_words(sentences);
// console.log(result);

//? 6.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen metnde en cox istifade olunan sozu qaytarmalidir
 */

//! Array basic (metod istifadəsi olmadan)
/* 1.
 * verilmiş ixtiyari n ədədli massivdə max elementi təyin edən funksiya yazın
 */

// const numbers = [11, 12, 21, 78, 54, 24, 81];
// const maxValue = Math.max(...numbers);

// console.log(` Maximum value is ${maxValue}`);

/* 2.
 * verilmiş ixtiyari n ədədli massivdə min elementi təyin edən funksiya yazın
 */

// const numbers = [10, 20, 23, 5, 40, 54, 80];
// const minValue = Math.min(...numbers);

// console.log(`Minimum value is ${minValue}`);

/* 4.
 * verilmiş ixtiyari n ədədli massivi maksimumdan minimuma doğru sıralayan funksiya yazın
 */

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const numbers = [5, 2, 8, 1, 3];
// const sortedNumbers = sortArray(numbers);
// console.log(sortedNumbers);


/* 5.
 * verilmiş ixtiyari n ədədli massivi minimumdan maksimuma doğru sıralayan funksiya yazın
 */

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const numbers = [5, 2, 8, 1, 3];
// const sortedNumbers = sortArray(numbers);
// console.log(sortedNumbers);

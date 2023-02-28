/* 
------JAVASCRIPT OBJECTS------------

*/


// let person1 = {
//     firstName: 'JON',
// };

// function some(arg,lastName){
//     arg.lastName = lastName;
// }


// some(person1, '2Bital');
// console.log(person1);



// -------------TASKS--------------------
// 1)
// function OddOrEven(number){
//     if (number%2 === 0 ){
//         console.log("ლუწია");
//     }else{
//         console.log("კენტია");
//     }
// }

// OddOrEven(8);


// 2)

// const array = [1,2,3,4,5,6,7,-2,-5,3];
// let sum = 0;
// for (let i = 0 ; i < array.length; i++){
//     if(array[i]>0){
//          sum += array[i];
//     }
//     console.log(sum);
// }


// 3)

// function positiveToNegative(number){
//    return number -= 2*number;
// }

// console.log(positiveToNegative(8.3));


// 4) 


// function nameReverse(name){
//   let nameSplit =  name.split("");
//   let nameReverse =  nameSplit.reverse();
//   let nameJoin =  nameReverse.join("");
//     return nameJoin;
// }

// console.log(nameReverse("Friadtsa"));

// function reverseString(str){
//     let newString = "";
//     for (let i = str.length -1 ; i >= 0 ; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// console.log(reverseString('Friadtsa'));

// 5)
// function trueOrFalse(arg){
//     if(arg === true){
//         console.log("Yes");
//     }else if(arg === false){
//        console.log("No");
//     }
// }
// 
// trueOrFalse(5%2===1);

// 6)

// function viceVersa(num){
//     return -num;
// }

// console.log(viceVersa(-2));              

// 7)

// function numberToString(num){
//     return num.toString();
// }

// console.log(numberToString(12));
// console.log(12);

// 8)

// function killFirstAndLast(str){
//     let array = str.split("");
//     let killFirst = array.shift();
//     let killLast = array.pop();
//     let deadWord = array.join("");
//     return deadWord;
// }

// console.log(killFirstAndLast("Riodejaneiro"));


// let name = 'Rio'
// let array = name.split("");
// let deadName = array.pop();
// console.log(array);


// 9)

// function oddOrEven(str){
//     let strArray = str.split("");
//     if (strArray.length % 2 !== 0){
//     let strArrayOdd = strArray[Math.round((strArray.length-1)/2)];
//     return strArrayOdd;
// }
//     else if(strArray.length % 2 == 0){
//         let strArrayEven1 = strArray[Math.floor((strArray.length - 1)/2)];
//         let strArrayEven2 = strArray[Math.floor((strArray.length + 1)/2)];
//         let strArrayEven = strArrayEven1+strArrayEven2;
//         return strArrayEven;
//     }
    
// }

// console.log(oddOrEven("ჰიპოპოტომონსტროსესკიფითალოფობია"));



// let word = "kenti";
// let wordArray = word.split("");
// let logMiddleLetter = wordArray[Math.round((wordArray.length-1)/2)];
// console.log(logMiddleLetter);

// let array = ["item" , "item2"  , "item3" , "item4" , "item5"];

// let logMiddle = array[Math.round((array.length-1)/2)];
// console.log(logMiddle);


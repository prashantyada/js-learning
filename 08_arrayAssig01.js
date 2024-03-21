var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(`==== Original Array ===== `);
console.log(arrayString);

console.log(`------------------------------------------------- Step 1 --------------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log("First element: Banana" );
console.log("Last element: Water Melon");

console.log(`---------------------------------------------------Step 2 -------------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
arrayString.unshift(`papaya`);
console.log(arrayString);

console.log(`------------------------------------------------------ Step 3 ----------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
const deleteElements = arrayString.splice(3,1);
console.log(deleteElements);
console.log(arrayString);

console.log(`---------------------------------------------------- Step 4 ------------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
const deleteElement = arrayString.splice(6,1,`Pineapple`);
console.log(arrayString);

console.log(`------------------------------------------------- Step 5 ---------------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
arrayString.push(`Dragon Fruit`);
console.log(arrayString);

console.log(`----------------------------------------------------- Step 6 -----------------------------------------------------`);
var fruit_seasonal = ['banana', 'orange', 'apple','mango', 'waterMelon']
console.log(fruit_seasonal)
fruit_seasonal[1] = 'Kiwi';
console.log(fruit_seasonal)


console.log(`-----------------------------------------------------------Step 7 -----------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
arrayString.shift();
console.log(arrayString);

console.log(`--------------------------------------------------------  Step 8  --------------------------------------------------`);
var arrayString = [`Banana`,`Orange`,`Apple`,`Mango`,`Water Melon`];
console.log(arrayString);
const deleteElemen = arrayString.splice(0, 2);
console.log(arrayString);
// file path: index.js

// импортируйте все полифилы из папки polyfills
// импортируйте ф-ции sum и mult под такими же именами, а так же ф-цию calc под именем calcExpression из файла calculator/index.js
// импортируйте ф-цию fetchUser из profile/gateway.js под таким же именем
// импортируйте ф-цию printProfile из profile/index.js под таким же именем

// impor {} from './polyfills.js'
import calcExpression, { sum, mult } from "./calculator/index.js";
import  fetchUser  from "./profile/gateway.js";
import { printProfile } from "./profile/index.js";

const calcResult = calcExpression("1 + 2");
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser("facebook");
printProfile({ name: "Tom", from: "The World" });

// убедитесь, скрипт выполнился без ошибок
console.log(calcResult);
console.log(sumResult);
console.log(multResult);
console.log(userDataPromise);
console.log(printProfile({ name: "Tom", from: "The World" }));
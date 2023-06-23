//js підключається скриптом у html файлі в кінці body.
//Виглядає це так: <script src="./script.js"></script>, де script.js це назва файлу.
//Після підключення краще перевірити чи працює сторінка
//Примітивні типи даних - імутабельні типи даних:
//Number, String, Boolean, Underfind, Null

//Корисні ресурси для вивчення JS - MDN, Javascript.info, freecodecamp.

//Конкатенація це лише додавання. Якщо хочемо зробити математичні дії, то треба привести рядок до Number.


// console.log('hello world');
// const a = 5;
// let a = 10;
// a = 7;
// console.log(a)

// Example 1 математичні оператори

// const apples = 35;
// const grapes = 147;
// const total = apples + grapes;
// const difference = grapes - apples;

// console.log(total);
// console.log(difference);

// Example 2 комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=

// let students = 100;
// // students = students + 50; або
// students += 50;
// console.log(students)

// Example 3 приорітет операторів
// Розбери приорітет операторів в інструкції привласнення значення змінної result

// const result = 108 + 223 - 2 * 5; або
// const result = (108 + 223 - 2) * 5;
// console.log (result)

// Example 4 клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value.
// Використовуй методи Math.floor(), Math.ceil(), та Math.round().Перевір що буде в консолі при значеннях 27,3 та 27,9.

// const value = 27.3;

// console.log(Math.ceil(value)); //Округлить завжди в сторону більшого значення
// console.log(Math.floor(value)); //Округлить завжди в сторону меншого значення
// console.log(Math.round(value)); //Округлить завжди по математичним правилам

// Example 5 Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A has B boots in stock, де А, В змінні вставлені в рядок.

// const nameCompany = 'Armany';
// const summerShoes = 150;
// const winterShoes = 50;
// const message = `${nameCompany} has ${summerShoes + winterShoes} boots in stock`;

// console.log(message)

// Example 6 Методи рядків та чейнінг

// Напиши скріпт, який розраховує індекс маси тіла людини.Для цього необхідно розділити
// вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа а у вигляді рядків(спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7.

// Індекс маси тіла потрібно округлити до однієї цифри після коми.

// let weight = '88,3';
// let height = '1.75';

// // weight = weight.replace(',', '.');
// // weight = Number(weight)

// // або

// weight = Number(weight.replace(',', '.'));

// // height = +height //це також спосіб приведення до числа за домомогою унарного плюса. Але краще явним методом

// height = Number(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));


// console.log(typeof bmi)

// Example 7 Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //true
// console.log(10 >= '7');//true приведення до типу
// console.log('2' > '12');//true зрівнюється по табличці юнікоду посимвольно. unicode-table.com
// console.log('2' < '12');//false
// console.log('4' == 4);//true приведення до типів при не строгому порівнянні
// console.log('6' === 6);// false при строгому порівнянні не відбувається приведення до типів
// console.log('false' === false);//false
// console.log(1 == true);//true бо при приведенні до number true => 1, false => 0
// console.log(1 === true);//false
// console.log('0' == false);//true
// console.log('0' === false);//false
// console.log('Papaya' < 'papaya');//true порівнюється посимвольно та по табличці юнікоду
// console.log('Papaya' === 'papaya');//false порівнюється посимвольно та по табличці юнікоду
// console.log(undefined == null);//true 0 0 приведення до типів при не строгому порівнянні
// console.log(undefined === null);//false при строгому порівнянні не відбувається приведення до типів


// // Example 8 Логічні оператори
// //Яким буде значення виразу
// //&& Повертає перший false або останній true
// console.log(true && 3);//3
// console.log(false && 3);//false
// console.log(true && 4 && 'kiwi');//kiwi (тыльки пустий рядок даэ значення false)
// console.log(true && 0 && 'kiwi');//0

// //  || ці риски, логічний оператор АБО, ставляться з кодом ALT + 124
// // він повертає перше значення, яке приводиться до true або останній false
// console.log(true || 3);//true
// console.log(3 || true || 4);// 3
// console.log('mom' || false || 7);// mom
// console.log(null || 2 || undefined);//2
// console.log((1 && null && 2) > 0);//спочатку приводимо те що в скобках, там повернеться null, бо це перший false в операторі &&
//                                   //значення null це 0. 0>0 - false
// console.log(null || (2 && 3) || 4);//3
// // 1. null => false;
// // 2. || (АБО) повертає перший true
// // 3. (2 && 3) => логічний оператор 'і' повертає останній true, в данному випадку 3
// // 4. 3 || 4 => логічний оператор 'або' повертає перший true, тобто 3 в данному випадку


// Example 9 Значення за замовчуванням та оператор нульвого злиття(??)

//  || АБО він працює на 6 значень які повертають false
// 1 undefined => false
// 2 null      => false
// 3 0         => false
// 4 NaN       => false
// 5 ''       => false
// 6 false     => false


// ?? він працює на 2 значення null undefined

// const incomingValue = 5;
// // const result = incomingValue + Number('11')// 16
// let test = 0;
// console.log(test);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// const value = test ?? 'some value';
// console.log(value);
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value);

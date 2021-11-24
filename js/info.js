

//         ||    -    или 
//         &&    -    и

// ПЕРЕМЕННЫЕ  ======

let city = "Cherkasy";   // СТРОКА
const country = "Ukraine";  // СТРОКА
let population = 279074;    // ЧИСЛО
let stadionDnepr = true;   // BOOLEAN






// for  ==================

for (let i = 10; i <= 50; i++) {
  console.log(i)
};



// if /  else if / else  ======

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
  console.log("randomNumber больше 20, и меньше 50");
}





// switch case  ======

const randomNumber2 = Math.floor(Math.random() * 100);

switch (true) {
  case randomNumber2 < 20:
    console.log("randomNumber2 меньше 20");
    break;
  case randomNumber2 > 50:
    console.log("randomNumber2 больше 50");
    break;
  default:
    console.log("randomNumber2 больше 20, и меньше 50");
}



// Обьект  ======

let aboutMyself = {
  name: 'Vlad',
  surname: 'Taran',
  age: 24,
  pet: true,
};

console.log(aboutMyself);



// Массив =====

const array = [
  'я в Симбирск,',
  'в трактире.',
  'с утра',
  'В ту же ночь',
  'Я остановился',
  'для закупки', 
  'что и было поручено Савельичу.',
  'приехал,',
  'где должен был',
  'нужных вещей',
  'отправился по лавкам',
  'пробыть сутки',
  'Савельич'
];

const order = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10]
const result = order.map((i) => array[i]).join(' ');
console.log(result);



// КОНКАТЕНАЦИЯ 

let userName = 'Moates',
country = 'OAE'; 
console.log(`Hi, I'm ${userName} and I'm from ${country}`)



// Задача 

const colors = ['green', 'blue', 'red', 'black', 'white'];
const results = [337, 438, 434, 543, 712];
const answers = [true, false, false, true, false, true];
const objects = [
  {
    user : 'Tomas',
    id : 11
  },
  {
    user : 'Mary',
    id : 10
  },
  { user : 'Taras',
    id : 10
  }
];

console.log(objects[3]);



// Задача 

let time = 2,
  speedOfFirst = 95,
  speedOfSecond = 114;
let result = (speedOfSecond + speedOfFirst) * time;
console.log(result);



// Задача

let num = 0;
while (num <= 67) {
  num++;

  if(num > 20 && num%2) {
    console.log(num);
  }
};



// Задача 

let car = {
  color: 'red',
  audio: { 
    brand: 'Sony',
    speakers: 12
  },
  speed: 220,
  cost: 123498
}

if (car.cost > 200000) {
  console.log('автомобиль дорогой')
} else if (car.cost == 12345){
  console.log('автомобиль средней ценновой категории')
}  else if (car.cost > 10000) {
  console.log('автомобиль не дорогой')
} else {
  console.log('дешевый')
}
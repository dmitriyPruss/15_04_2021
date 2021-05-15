const sparrow = {
    name: 'Jack',
    age: 1,
    fly() {
        console.log(this.name +' I can fly!');
    },
    rename(newName) {
        this.name = newName;
    },
};

sparrow.fly();
console.log('sparrow :>> ', sparrow);
sparrow.rename('Jack 2');
console.log('sparrow :>> ', sparrow);
sparrow.rename('Jack 3');
console.log('sparrow :>> ', sparrow);

const sparrowChild = {
    name: 'JJ',
    age: 1,
};

sparrowChild.mother = 'Sparrow mother';
sparrowChild.fly = sparrow.fly;
sparrowChild.fly();
console.log('sparrowChild :>> ', sparrowChild);

function Monkey(name1) {
    this.name = name1;
};

const monkey1 = new Monkey('King Kong');
const monkey2 = new Monkey('King Kong J');


// typi znacheniya i ssilochniye tipi
const h = 1;
const r = 1;

const o1 = {};
const o2 = {};

const o3 = o2;


console.log('isAdult(19) :>> ', isAdult(19));
console.log('isAdult(9) :>> ', isAdult(9));
function isAdult(age) {
    return age >= 18;
};

// ? :
const a = 2;
const b = 3;

let maxValue = null;

maxValue = a > b ? a : b;
console.log('maxValue :>> ', maxValue);

function isAdult2(age) {
    return age >= 18 ? true :false;
};

// switch case

const point = 10;

switch (point) {
    case 12:
        console.log('Pupil got 5+');
        break;
    case 11:
        console.log('Pupil got 5');
        break;
    case 10: 
        console.log('Pupil got 5-');
        break;
    default:
        console.log("pupil got less than 5");
};

switch (point >= 10) {
    case true:
        console.log('Pupil got 5+');
        break;
    case false:
        console.log('Pupil got 5');
        break;
    default:
        console.log("pupil got less than 5");
};

// templateLiterals

const a2 = 7;
const b2 = 78;

const sum = a2 + b2;
console.log(`${a2} + ${b2} = ${sum}`);

const firstName = 'Vas';
const lastName = 'Alexer';

console.log(`Fullname is ${firstName} ${lastName}`);

for(let i = 0; i <=2; i++) {
    
};

const PASSWORD = '123';
const TRY_LIMIT = 3;

let currentTry = 1;
let isPasswordCorrect = false;

do {
    isPasswordCorrect = prompt('Input password') === PASSWORD;
    if (isPasswordCorrect) {
        break;
    };
} while (++currentTry <= TRY_LIMIT);

console.log((`Password is ${isPasswordCorrect ? 'correct' : 
'not correct'}`));

  


let storeName = "Maga";

let storeDescription = {
    budget: 10000,
    employees: ["Владик", "Всадик", "Энергос"],
    products: {
        "Burn": 100,
        "Eon": 69,
    },
    open: true
};

// ДЗ Циклы
for(let i = 5; i <= 10; i++){
    console.log(i);
}

for(let i = 20; i >= 10; i--){
    if(i == 13){
        break;
    }
    console.log(i);
}

for(let i = 2; i < 11; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

let i = 2;
while(i <= 16){
    if(i % 2 === 0){
        i++;
        continue;
    }
    else{
        console.log(i)
        i++;
    }
}

const arr = [];

for(let i = 0; i <= 5; i++){
    arr[i] = i + 5; 
}

console.log(arr)

const result = [];

for(let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}

console.log(result)

const arrSecond= [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i < arrSecond.length; i++){
    if (typeof(arrSecond[i]) === 'number'){
        arrSecond[i] = arrSecond[i] * 2;
    }
    if (typeof(arrSecond[i]) === 'string'){
        arrSecond[i] = arrSecond[i] + ' - done';
    }
}

console.log(arrSecond)

function thirdTask(){
    const data = [5, 10, 'Shoping', 20, 'Homework'];
    const result = [];
    for(let i = 0; i < data.length; i++){
        result[i] = data[data.length - i - 1];
    }

    console.log(result)
}

thirdTask();

// Дз по функциям

function sayHi(name){
    return `Hi ${name}!`;
}

console.log(sayHi("Кирилл"));

function createArray(number){
    const arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    return arr
}

console.log(createArray(8));

function getMathResult(baseNumber, countNumber){
    if (countNumber < 0 || countNumber === 0 || typeof(countNumber) != 'number'){
        return baseNumber
    }
    else{
        let resultStr = `${baseNumber}`;
        for(let i = 1; i < countNumber; i++){
            resultStr += `---${baseNumber * (i + 1)}` 
        }
        return resultStr;
    }
}

console.log(getMathResult(20,-5))


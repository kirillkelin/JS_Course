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

// Дз на функции(продвинутые)

function calculateVolumeAndArea(lengthSquare){
    if (lengthSquare < 0 || typeof(lengthSquare) !== 'number' || lengthSquare % 1 != 0){
        return 'При вычислении произошла ошибка';
    }
    
    let volume = 0;
        area = 0;
    
    volume = lengthSquare * lengthSquare * lengthSquare;
    area = 6 * (lengthSquare * lengthSquare);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5))

function getCoupeNumber(seatNumber){
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || seatNumber % 1 !== 0){
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (seatNumber > 36 || seatNumber === 0){
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(24))

function getTimeFrom(time){
    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)){
        return 'Ошибка, проверьте данные';
    }

    hour = Math.floor(time / 60)

    if (hour === 0){
        return `Это ${hour} часов и ${time % 60} минут`
    }
    else{
        return `Это ${hour} часа и ${time % 60} минут`
    }

}

console.log(getTimeFrom(10))

function findMaxNumber(numberOne, numberSecond, numberThird, numberFourth){
    if (typeof(numberOne) !== 'number' || typeof(numberSecond) !== 'number' || typeof(numberThird) !== 'number' || typeof(numberFourth) !== 'number'){
        return 0;
    } else {
        return Math.max(numberOne, numberSecond, numberThird, numberFourth);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11))
console.log(findMaxNumber(1, 5, '6', '10')) 

// Задачи на работу с объектами

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        let strLangs = `${obj['skills']['languages'][0]} ${obj['skills']['languages'][1]}`;
        strLangs = strLangs.toUpperCase();
        return `Мне ${obj['age']} и я владею языками: ${strLangs}`;
    }
};

function showExperience(obj){
    return obj['skills']['exp'];
}

function showProgrammingLangs(obj){
    const {js, php, ruby} = obj['skills']['programmingLangs'];
    let result = "";
    if(js !== null){
        result +=`Язык js изучен на ${js}\n`;
    }
    if(php !== null){
        result += `Язык php изучен на ${php}\n`;
    }
    if(ruby !== null){
        result += `Язык ruby изучен на ${ruby}\n`;
    }
    return result;
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family){
    if(family.length === 0){
        return 'Семья пуста'
    }
    let familyStr ='Семья состоит из: ';
    family.forEach(member => {
        familyStr += `${member} `;
    });

    return familyStr;
}

console.log(showFamily(family))


// Задачи на работу с массивами

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach((item, index) => {
        if (item != missingCurr){
            str += `${item}\n`;
        }
    })
    
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))

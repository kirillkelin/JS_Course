let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let answerFirst = prompt("Один из последних просмотренных фильмов?", '').trim();
        let answerSecond = prompt("На сколько оцените его?", '');
        
        if (answerFirst != null && answerSecond != null && answerFirst != '' && answerSecond != '' && answerFirst.length < 50){
            personalMovieDB.movies[answerFirst] = answerSecond;
        }
        else{
            i--;
        }
    } 
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотено довольно мало фильмов");
    } else if (personalMovieDB.coomnt >= 10 && personalMovieDB.count < 30){
        console.log("Вы классичсекий зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка!");
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
 
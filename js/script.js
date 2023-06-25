let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answerFirst = prompt("Один из последних просмотренных фильмов?", '');
let answerSecond = prompt("На сколько оцените его?", '');

personalMovieDB.movies[answerFirst] = answerSecond;

console.log(personalMovieDB);
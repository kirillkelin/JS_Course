let result = '';
const n = 4;

//    *
//   * *
//  * * *
// * * * *

for(let i = 1; i <= n; i++){
    for(let j = n; j > i; j--){
        result += ' ';
    }
    for(let f = 0; f < i; f++){
        result += ' *';
    }
    result += '\n';
}
console.log(result);
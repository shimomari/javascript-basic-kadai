//変数numに0~100までの整数を代入する
let num = Math.floor(Math.random() * 101);

//変数を2乗する処理を行う
const squared = (num) =>{
    return num * num;
}
//処理の結果を出力する
console.log(squared(num));

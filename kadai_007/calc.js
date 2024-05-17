
//ランダムな数字が入力される
//let num = Math.floor(Math.random() *  101 );
//数字を特定してみる
let num = 15


//値が3の倍数であるが５の倍数でないとき
if(num % 3 === 0 && num % 5 != 0){
    console.log('3の倍数です');
}
//値が５の倍数の時
else if(num % 5 === 0  && num % 3 != 0){
    console.log('5の倍数です');

}

//値が３の倍数かつ５の倍数の時
else if(num % 3  === 0  &&  num % 5 === 0){
    console.log('3と5の倍数です');

}
else{
    console.log(num);
}
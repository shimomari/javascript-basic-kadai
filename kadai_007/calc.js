
//ランダムな数字が入力される
//let num = Math.floor(Math.random() *  101 );
//上記の式でも条件分岐できていると思います。違うところを
let num = 25


//値が3の倍数であるが５の倍数でないとき
if(num % 3 === 0 && num % 5 != 0){
    console.log('3の倍数です');
}
//値が５の倍数の時
if(num % 5 === 0  && num % 3 != 0){
    console.log('5の倍数です');

}

//値が３の倍数かつ５の倍数の時
 if(num % 3  === 0  &&  num % 5 === 0){
    console.log('3と5の倍数です');

}
else{
    console.log(num);
}
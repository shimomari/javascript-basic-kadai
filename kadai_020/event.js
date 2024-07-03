//HTML要素を取得する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

//ボタンを押したときに「ボタンをクリックしました」と表示する
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
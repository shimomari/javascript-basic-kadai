//textとbtnを宣言する
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//ボタンのクリックイベントリスナーを追加
 btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    },2000);
 });


const text = document.getElementById('text');
const btn = document.getElementById('btn');

console.log('ボタンをクリックしてください');


btn.addEventListener('click',()=> {
    
setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('ボタンをクリックしました');
}, 2000);
});


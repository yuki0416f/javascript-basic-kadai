
console.log('ボタンをクリックしてください');

const btn = document.getElementById('btn');
btn.addEventListener('click',()=> {
    
setTimeout(() => {
    document.getElementById('text').textContent = 'ボタンをクリックしました';
    console.log('ボタンをクリックしました');
}, 2000);
});


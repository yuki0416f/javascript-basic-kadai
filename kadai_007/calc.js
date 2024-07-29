
let num = 15; 

// 変数numの値が3と5の倍数なら、3と5の倍数です
if(num % 15 === 0) {
    console.log('3と5の倍数です');
}

// 変数numの値が3の倍数なら、３の倍数です
else if(num % 3 === 0) {
    console.log('3の倍数です');
}
// 変数numの値が5の倍数なら、5の倍数です
else if(num % 5 === 0) {
    console.log('5の倍数です');
}
else{
    console.log(num);
}


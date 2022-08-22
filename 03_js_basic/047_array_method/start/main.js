const arry = [10, 20, 30, 40];
const newArry = [];

// for文
for(let i = 0; i < arry.length; i++){
    const val = arry[i] *2;
    if(val > 50){
        newArry.push(arry[i]*2);
    }
}
console.log(newArry);

// map関数(引数:配列ポインタ、キー番号、配列自体)
const newArry2 = arry.map((val,i,arry) => val*2);
console.log(newArry2);

// filter関数(条件一致の値のみ配列に追加する)
const newArry3 = newArry2.filter((val) => val > 50);
console.log(newArry3);

//mapとfilterをチェーンでつなげる
const newArry4 = arry.map((val,i,arry) => val*2).filter((val) => val > 50);
console.log(newArry4);


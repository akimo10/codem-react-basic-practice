//DOM,ノード,Elementなどなどと呼ばれる
const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
console.dir(btnEl);

//イベントハンドラーやアクションと呼ばれる
btnEl.addEventListener('click', (event) => {
    console.dir(event.target.textContent);
    console.log('heellloooo!!');
})
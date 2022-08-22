// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

// 論理積 (&&) について
const resultA = "" && "foo";//falsyな値を格納する。
const resultB = 2 && 1 && 0 && 3;//falsyな値を格納する。
const resultC = "foo" && 4;//全てTrueの場合、最後の値を格納する。

// console.log(resultA);
// console.log(resultB);
// console.log(resultC);

// 理論和 (||) について
const resultD = "" || "foo";//truthyな値を格納する。
const resultE = 0 || 2 || 0 ;//truthyな値を格納する。
const resultF = "foo" || 4;//全てtruthyの場合は、最初の値を格納する。

console.log(resultD);
console.log(resultE);
console.log(resultF);

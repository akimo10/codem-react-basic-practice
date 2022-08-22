function fn(number) {
  return number * 2;
}

//アロー関数
const fnArrow = (number) => {
  return number * 2;
}
console.log(fnArrow(2));

//省略形(返却値が1行の場合)
const fnArrow2 = number => number * 2;
console.log(fnArrow2(2));

//オブジェクトの返却
const fnArrowObj = (number) => (
  {result: number*2}
);
console.log(fnArrowObj(5))

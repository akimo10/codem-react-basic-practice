// コールバック関数
function print(callback) {
  const result = callback(2);
  console.log(result);
}

function fn(number) {
  return number * 2;
}

//debuggerすごい！
debugger;
print(fn);
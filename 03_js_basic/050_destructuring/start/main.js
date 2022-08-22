const arry = ["配列1", "配列2", "配列3"];
console.log(arry[0]);
console.log(arry[2]);

//上記配列を分割代入する場合
const [a,b,c] = ["配列1", "配列2", "配列3"];
console.log('分割代入：'+a);
console.log('分割代入：'+c);

const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(obj.x);
console.log(obj.y);

//上記オブジェクトを分割代入する場合
const {x,z} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log('分割代入：'+x);
console.log('分割代入：'+z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = (arry) => {
  console.log("分割代入：---配列---");
  console.log(`分割代入：country: ${arry[0]}`);
  console.log(`分割代入：state: ${arry[1]}`);
  console.log(`分割代入：city: ${arry[2]}`);
};

//上記関数を利用する分割代入
const fnArr2 = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnArr2(arr);


const fnObj = (objAddr) => {
  console.log("---オブジェクト---");
  console.log(`country: ${objAddr.country}`);
  console.log(`state: ${objAddr.state}`);
  console.log(`city: ${objAddr.city}`);
};

//上記関数を利用する分割代入
const fnObj2 = ({country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnObj(objAddress);

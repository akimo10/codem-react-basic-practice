const Example = () => {

  const val1 = 2, val2 = 3;
  const add = (val1, val2) => {
    return val1 + val2;
  }
  //純粋関数ではない場合、、、
  let result;
  const add2 = (val1) => {
    //関数外の変数resultに影響を及ぼしている
    result = val1 + val2;

    //関数外の値を利用している。。。
    return val1 + val2;

  }

  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <div>純粋関数{add(val1,val2)}</div>
    </>
  );
};

export default Example;

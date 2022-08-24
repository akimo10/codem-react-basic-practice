const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました');
  }
  const clickHandler2 = () => {
    alert('ボタンがクリックされました');
  }
  
  return (
    <>
    <button onClick={clickHandler}>クリックしてね</button>
    <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;

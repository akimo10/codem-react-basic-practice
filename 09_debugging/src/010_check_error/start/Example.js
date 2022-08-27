import { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  console.log('rerander')

  const countUp = () => {
    setCount((prevstate) => {
      const newState = {...prevstate};
      newState.val += 1;
      return newState;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;

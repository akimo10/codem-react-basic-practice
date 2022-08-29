import { useState, useReducer } from "react"
const Example = () => {

  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {

    switch(action.type) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
      default:
        return prev;
    }
    // if(action === "+"){
    //   return ++prev;
    // }else if(action === "-"){
    //   return --prev;
    // }
  }, 0)

  const countUp = () => {
    setState(prev => ++prev);
  }

  const rcountUp = () => {
    dispatch({type:"+"});
  }
  const rcountDown = () => {
    dispatch({type:"-"});
  }


  
  return (
    <>
      <div>
        <h2>State</h2>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h2>Reducer</h2>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;

import { useReducer } from "react";
import { Input } from "./conponents/Input";
import { Result } from "./conponents/Result";
import { Select } from "./conponents/Select";
import { CalcProvider } from './context/CalcContext'


const Example = () => {

  // const calculate = (e) => {
  //   dispatch({type: e.target.value});
  // };
  // const numChangeHandler = (e) => {
  //   dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  // };
  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>      
    //   <Input name="b" />      
    //   <Select />
    //   <Result />      
    // </CalcProvider>
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;

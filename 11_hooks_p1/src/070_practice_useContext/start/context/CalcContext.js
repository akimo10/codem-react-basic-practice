import { createContext,useContext, useReducer } from 'react';

const CalcCotext = createContext();
const CalcDispatchCotext = createContext();

const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };

const CalcProvider = ({children}) => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CalcCotext.Provider value={state}>
            <CalcDispatchCotext.Provider value={dispatch}>
                {children}
            </CalcDispatchCotext.Provider>
        </CalcCotext.Provider>
    );
}

const useCalc = () => useContext(CalcCotext);
const useCalcDispatch = () => useContext(CalcDispatchCotext);

export {CalcProvider, useCalc, useCalcDispatch}
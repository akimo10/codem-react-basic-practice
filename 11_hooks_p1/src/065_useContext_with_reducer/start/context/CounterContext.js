import { createContext, useReducer, useContext } from "react";

const CounterContext = createContext();
const CounterDispatchContext = createContext();

export const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer((prev, { type, step }) => {
        switch (type) {
          case "+":
            return prev + step;
          case "-":
            return prev - step;
          default:
            throw new Error('不明なactionです。')
        }
      }, 0);
    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext value={dispatch}>
                {children}
            </CounterDispatchContext>
        </CounterContext.Provider>
    );
}

export const useCounter = () => {
    return useContext(CounterContext);
}
export const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);   
}
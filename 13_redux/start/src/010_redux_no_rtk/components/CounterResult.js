import { useSelector } from "react-redux";
import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  // const state = useCounter();
  const count = useSelector(state => state.counter.count);
  return <h3>{count}</h3>;
};

export default CounterResult;
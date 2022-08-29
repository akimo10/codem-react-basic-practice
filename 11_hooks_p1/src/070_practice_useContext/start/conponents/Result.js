import { useCalc } from "../context/CalcContext";

export const Result = () => {
    const state = useCalc();
    return (
        <h3>結果：{state.result}</h3>
    );
}
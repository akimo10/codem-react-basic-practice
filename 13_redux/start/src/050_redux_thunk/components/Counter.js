import { add, minus, addAsync } from "../store/modules/counter"

import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreater={add}/>
            <CounterButton step={2} calcType="-" actionCreater={minus}/>
            <CounterButton step={2} calcType="+(非同期)" actionCreater={addAsync}/>
        </>
    )
}
export default Counter;
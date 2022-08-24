import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        //実際にcountが変更されるのは再レンダリングの時である。
        // setCount(count + 1);
        setCount(prevstate => prevstate + 1);
        console.log(count)
    }

    const countDown = () => {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <>
            <p>現在のカウント数：{count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;

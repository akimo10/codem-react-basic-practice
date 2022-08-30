import {produce} from "immer";

const state = {
    name:"tom",
    hobbies: ["tennis", "footBall"]
}

produce(state, draft => {
    console.log(draft);
})
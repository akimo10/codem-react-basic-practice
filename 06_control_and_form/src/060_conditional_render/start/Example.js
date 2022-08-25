import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            //??(null型演算子、null・undefinedの場合に右辺の値を代入する)
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          // .map((animal) => (
          //   <li key={animal}>{animal}</li>
          // ))}
          .map((animal) => {
            //三項演算子での条件分岐
            // return <li key={animal}>{
            //   animal + (animal === "Dog" 
            //   ? "★"
            //   : "")
            //   }</li> ;

            //&&条件(真偽値は画面に表示されないための書き方)
            return <li key={animal}>{animal ?? 'null,undefinedでした'}{
              animal === "Dog" && "★"
            }</li> ;


            //if文での条件分岐
            // if(animal === 'Dog'){
            //   return <li key={animal}>{animal}★</li>
            // }else {
            //   return <li key={animal}>{animal}</li>
            // }
          })}
      </ul>
    </>
  );
};

export default Example;

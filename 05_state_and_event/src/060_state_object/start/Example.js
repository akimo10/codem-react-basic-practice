import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({name: e.target.value, age: person.age});
  }

  const changeAge = (e) => {
    setPerson({name: person.name, age: e.target.value});
  }
  return (
    <>
      <h3>{`Name:${person.name}`}</h3>
      <h3>{`Age:${person.age}`}</h3>

      <input type="text" onChange={changeName} value={person.name} />
      <input type="text" onChange={changeAge} value={person.age} />

    </>
  );
};

export default Example;

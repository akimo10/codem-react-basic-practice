import { useState, lazy } from "react";
// import ComponentA from "./components/ComponentA";

const LazyComponentA = lazy(() => import("./components/ComponentA"));

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      {compA && <LazyComponentA />}
    </>
  );
};

export default Example;

import React, { useState } from "react";
import { useRef } from "react";
// import mercury from "./assets/planet-mercury.svg";

function App() {
  const inputVal = useRef();
  const [data, setData] = useState(null);
  const gravitationalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
  };

  const calc = () => {
    const yerdagiOgirLik = +inputVal.current.value;

    const newObject = {};
    for (const property in gravitationalAccelerations) {
      const result = (
        (yerdagiOgirLik / 9.81) *
        gravitationalAccelerations[property]
      ).toFixed(2);

      newObject[property] = parseFloat(result);
    }
    const array = Object.entries(newObject).map(([planet, gravity]) => ({
      planet,
      gravity,
    }));
    setData(array);
    return array;
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
    calc();
  };

  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-center mt-28">
        <form className="flex gap-3 " onSubmit={handeleSubmit}>
          <input
            ref={inputVal}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <button className="btn btn-outline btn-accent">Accent</button>
        </form>
      </div>
      <ul className="flex items-center flex-wrap max-w-[500px] gap-4 mx-auto mt-8">
        {data &&
          data.map((item, index) => {
            return (
              <li key={item.planet} className="bg-[#172B5D] w-full max-w-28 flex items-center flex-col p-2">
                <img src={`./planet-${index + 1}.svg`} alt={item.planet} />
                <h1>{item.planet}</h1>
                <p>{item.gravity}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

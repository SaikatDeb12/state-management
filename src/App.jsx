import { createContext, useContext, useState } from "react";
import "./App.css";

//defining the content globally
const BulbContext = createContext();

const App = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      {/* Wrapping it within the context provider */}
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        <Light />
      </BulbContext.Provider>
    </div>
  );
};

const Light = () => {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
};

const LightBulb = () => {
  //using it making a useContext
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn}</div>;
};

const LightSwitch = () => {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  return (
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
      <br />
      <button onClick={() => setBulbOn(!bulbOn)}>Toggle the button</button>
    </div>
  );
};

export default App;

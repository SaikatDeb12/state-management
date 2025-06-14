import { useState } from "react";
import "./App.css";

const App = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
};

const Light = ({ bulbOn, setBulbOn }) => {
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
};

const LightBulb = ({ bulbOn }) => {
  return <div>{bulbOn}</div>;
};

const LightSwitch = ({ bulbOn, setBulbOn }) => {
  return (
    <div>
      <button>Toggle the button</button>
      {bulbOn}
    </div>
  );
};

export default App;

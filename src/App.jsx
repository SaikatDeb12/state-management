import "./App.css";

const App = () => {
  return (
    <div>
      <LightBulb />
    </div>
  );
};

const LightBulb = () => {
  return (
    <div>
      <BulbState />
      <ToggleBuldState />
    </div>
  );
};

const BulbState = () => {
  return <div></div>;
};

const ToggleBuldState = () => {
  return (
    <div>
      <button>Toggle the button</button>
    </div>
  );
};

export default App;

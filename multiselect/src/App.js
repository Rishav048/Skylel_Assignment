import "./App.css";
import MultiSelect from "./Components/MultiSelect";

const PreSelectCountry = ["Australia", "Malaysia"];

function App() {
  return (
    <div className="App">
      <h1 className="heading">Search For Your Country...!</h1>
      <MultiSelect val={PreSelectCountry} readOnly={false} />
    </div>
  );
}

export default App;

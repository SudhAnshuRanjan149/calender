import "./App.css";
import Calender from "./CalenderUI/Calender";

function App() {
  return (
    <>
      <div className="App">
        <input type="date" />
        <hr />
        <div >
          <Calender />
        </div>
      </div>
    </>
  );
}

export default App;

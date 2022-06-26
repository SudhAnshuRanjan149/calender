import { useState, useEffect } from "react";
import "./App.css";
import Calender from "./CalenderUI/Calender";

function App() {
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");

  useEffect(() => {
    console.log("start date: " + startdate);
    console.log("end date: " + enddate);
  }, [startdate, enddate]);

  return (
    <>
      <Calender sd={setStartdate} ed={setEnddate}/>
    </>
  );
}

export default App;

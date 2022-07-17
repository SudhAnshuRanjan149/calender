import { useState, useEffect } from "react";
import "./App.css";

import DateRangeSelector from "date-range-selector-for-react";

// import DateRangeSelector from './CalenderUI/Calender';

function App() {
  let st = "1june 2022";
  let en = "1july 2022";

  const [startdate, setStartdate] = useState(st);
  const [enddate, setEnddate] = useState(en);
  const [showCalendar, setShowCalendar] = useState(true);

  useEffect(() => {
    console.log("start date: " + startdate);
    console.log("end date: " + enddate);
  }, [startdate, enddate]);

  useEffect(() => {
    console.log("showCalendar --> ", showCalendar);
  }, [showCalendar]);

  const reset = () => {
    setStartdate(st);
    setEnddate(en);
    window.location.reload();
  };

  return (
    <>
	<div className="appContainer">
	<button onClick={() => setShowCalendar(!showCalendar)}>Toogle</button>

      <DateRangeSelector
        sd={setStartdate}
        ed={setEnddate}
        // startYear={2010}
        // endYear={2030}
        // styleBigContainer={{}}
        // startDate={startdate}
        // endDate={enddate}
        showCalendar={showCalendar}
        showIcon={false}
        showDateRangeBox={false}
        // styleDateRangeBox={{}}
        // calHeaderBodyElement={<button onClick={reset}>Reset-date</button>}
      />
	  </div>
      
    </>
  );
}

export default App;

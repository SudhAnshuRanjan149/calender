import React, { useState, useEffect, useRef } from "react";
import Year from "./DDMMYY/Year";
import Month from "./DDMMYY/Month";
import Day from "./DDMMYY/Day";
import { dayList } from "./Data/dataList";
import { findDateArray } from "./Logic/findDateArray";

import CreateADivOfMonths from "./Logic/CreateADivOfMonths";
import { GetMonthDistanceFromStart } from "./Logic/GetMonthDistanceFromStart";

const Calender = () => {
  var today = new Date();
  console.log(
    today.getDate() + " " + (today.getMonth() + 1) + " " + today.getFullYear()
  );

  today = {
    date: parseInt(today.getDate()),
    month: parseInt(today.getMonth() + 1),
    year: parseInt(today.getFullYear()),
  };


  let startYear = 1996;
  let endYear = 2025;

  const Elem = [];

  let k = 0;

  for (let i = 1; i <= (endYear - startYear) * 12 + 12; i++) {
    Elem.push("Elem-" + i);
  }

  const [selectedDate, setSelectedDate] = useState(today.date);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [dateArray, setDateArray] = useState([]);

  const nextYear = () => {
    if (selectedYear == endYear) return;
    setSelectedYear(parseInt(selectedYear) + 1);
  };
  const nextMonth = () => {
    if (selectedMonth == 12) {
      if (selectedYear == endYear) return;
      setSelectedMonth(1);
      setSelectedYear(parseInt(selectedYear) + 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) + 1);
    }
  };
  const prevYear = () => {
    if (selectedYear == startYear) return;
    setSelectedYear(parseInt(selectedYear) - 1);
  };
  const prevMonth = () => {
    if (selectedMonth == 1) {
      if (selectedYear == startYear) return;
      setSelectedMonth(12);
      setSelectedYear(parseInt(selectedYear) - 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) - 1);
    }
  };

  useEffect(() => {
    let darr = findDateArray(selectedYear, selectedMonth);
    setDateArray(darr);
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    let darr = findDateArray(selectedYear, selectedMonth);

    setDateArray(darr);
  }, []);

  return (
    <>
      <div className="calender-container">
        <div className="calender-header">calender</div>
        <div className="common calender-year-month-container">
          <a onClick={prevYear} className="arrow-btn">
            &#10094;
          </a>
          <div onClick={prevMonth} className="arrow-btn">
            &#x3c;
          </div>

          <Month
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
          <Year
            startYear={startYear}
            endYear={endYear}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <div onClick={nextMonth} className="arrow-btn">
            &#x3e;
          </div>
          <a onClick={nextYear} className="arrow-btn">
            &#10095;
          </a>
        </div>
        <div className="common calender-days-container">
          {dayList.map((day) => {
            return <Day key={day} day={day} />;
          })}
        </div>
        <div className="common calender-dates-container" key={++k}>
          <div className="dates-container" key={++k}>
            {dateArray.map((month) => {
              let emparr = [];

              for (let i = 1; i < month.startDay; i++) {
                emparr.push("");
              }

              if (dateArray[0].month == selectedMonth) {
                return (
                  <CreateADivOfMonths
                    monthid={month.month}
                    arr={month.dates}
                    emparr={emparr}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;

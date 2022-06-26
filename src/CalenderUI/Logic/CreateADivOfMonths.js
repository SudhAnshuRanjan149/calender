import React from "react";
import Date from "../DDMMYY/Date";
import "./../Calender.css";
import { fillArray } from "./fillArray";
import { monthdaycombinations } from "../Data/dataList";

const CreateADivOfMonths = ({ arr, emparr, monthid }) => {
  let l = (arr.length + emparr.length) % 7;
  let len = 0;
  if (l > 0) {
    len = 7 - l;
  }

  let post = fillArray(1, len);

  let monthdata = monthdaycombinations.filter((data) => {
    if (monthid == 1) {
      return data.monthid == 12;
    }
    return data.monthid == parseInt(monthid) - 1;
  });

  let mday = monthdata[0].monthdays;

  let pre = [];
  for (let s of emparr) {
    pre.unshift(mday);
    mday--;
  }

  return (
    <>
      <div className="month-div" key={monthid}>
        {pre.map((d) => {
          return <Date clas="pre inactive" key={d} date={d} />;
        })}
        {arr.map((d) => {
          return <Date clas="active" key={d} date={d} />;
        })}
        {post.map((d, i) => {
          return <Date clas="post inactive" key={i} date={d} />;
        })}
      </div>
    </>
  );
};

export default CreateADivOfMonths;

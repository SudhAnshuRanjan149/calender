import React from 'react';
import './../Calender.css';

const Date = ({date,clas}) => {
	let cl =  "date " + {clas};
  return (
	<div  className={`date ${clas}`} >{date}</div>
  )
}

export default Date;
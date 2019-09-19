import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => {
    const dateFormat = "mmmm yyyy";

    console.log(format, addMonths, subMonths);

    const nextMonth = () => {
      setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));
    };

    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{format(currentDate, dateFormat)}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {};

  const cells = () => {};

  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
}

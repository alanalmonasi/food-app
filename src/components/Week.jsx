import { useState } from "react";
import { Day } from "./Day";

export const Week = () => {
  const [days, setDays] = useState([
    { name: "Dom", date: "28", selected: true },
    { name: "Lun", date: "29", selected: false },
    { name: "Mar", date: "30", selected: false },
    { name: "Mie", date: "01", selected: false },
    { name: "Jue", date: "02", selected: false },
    { name: "Vie", date: "03", selected: false },
    { name: "Sab", date: "04", selected: false },
  ]);

  const handleSetDay = (name, selected) => {
    const week = days.map((day) => ({
      ...day,
      selected: name === day.name ? !selected : false,
    }));
    setDays(week);
  };

  return (
    <>
      {days.map((day) => (
        <Day
          name={day.name}
          selected={day.selected}
          date={day.date}
          onSetDay={handleSetDay}
          key={day.name}
        />
      ))}
    </>
  );
};

import { Chip } from "@mui/material";

export const Day = ({ name, selected, date, onSetDay }) => {
  return (
    <div>
      <div className="day">{name}</div>
      <div className="chip">
        <Chip
          color="warning"
          size="small"
          variant={selected ? "outlined" : ""}
          label={date}
          onClick={() => onSetDay(name, selected)}
        />
      </div>
    </div>
  );
};

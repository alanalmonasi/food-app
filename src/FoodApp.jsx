import { LocationBar } from "./components/LocationBar";
import { MainMenu } from "./components/MainMenu";
import { Week } from "./components/Week";

export const FoodApp = () => {
  return (
    <>
      <div className="top-content">
        <LocationBar />
        <div className="calendar">
          <Week />
        </div>
      </div>
      <div className="content">
        <MainMenu />
      </div>
    </>
  );
};

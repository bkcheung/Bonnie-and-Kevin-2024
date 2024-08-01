import cx from "classnames";
import seats from "./seats";
import { useState } from "react";

interface seatProps {
  isActive: boolean;
}
function Seating({ isActive }: seatProps) {
  const [guestName, setName] = useState<string>("");

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div
      className={cx(
        "flex flex-col items-center text-center p-10 bg-sky bg-cover h-lvh",
        !isActive && "hidden",
      )}
    >
      <h3 className="pt-20 pb-5">Seating</h3>
      <h2>Seating Chart can also be found near the reception tent entrance</h2>
      <div>
        <h2>Please enter your name:</h2>
        <input placeholder="Name" onChange={nameChange}></input>
        {seats[guestName.toLowerCase()] !== undefined && (
          <div className="pt-10 whitespace-break-spaces">
            {`Welcome ${guestName}!\nYou are seated at Table ${seats[guestName]}`}
          </div>
        )}
        <img src="seating.png" className="my-10"></img>
      </div>
    </div>
  );
}
export default Seating;

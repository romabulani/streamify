import React from "react";
import { formatCount } from "../utils/display";
interface ChangeType {
  value: number;
  change: number;
}
const Change = ({ value, change }: ChangeType) => {
  return (
    <div className="flex justify-between">
      <p className="text-lg">${formatCount(value)}</p>
      <p className={`${change > 0 ? "text-green-600" : "text-red-600"}`}>
        {`${Math.abs(change)}%${change > 0 ? "↑" : "↓"}`}
      </p>
    </div>
  );
};

export default Change;

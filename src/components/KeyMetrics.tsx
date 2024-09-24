import React from "react";
import { convertCamelCaseToLabel } from "../utils/display";
import Change from "../atoms/Change";

interface Metric {
  value: number;
  change: number;
}
const KeyMetrics = ({
  metrics,
}: {
  metrics: Record<string, string | Metric>;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center flex-wrap gap-2">
        {Object.keys(metrics).map((key, index) => (
          <div
            className={`flex flex-col px-2 py-4 rounded-lg mx-2 min-w-32  items-stretch ${
              index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
            }`}
            key={key}
          >
            <span className="text-sm pb-2">{convertCamelCaseToLabel(key)}</span>
            {typeof metrics[key] === "string" ? (
              <span>{metrics[key] as string}</span>
            ) : (
              <Change
                value={(metrics[key] as Metric).value}
                change={(metrics[key] as Metric).change}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;

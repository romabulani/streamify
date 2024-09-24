import React from "react";
import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { userGrowth } from "../data/data";
import {
  convertCamelCaseToLabel,
  convertDateToShortFormat,
  formatCount,
} from "../utils/display";
import useScreenSize from "../hooks/useScreenSize";
import { DARK_BLUE, DARK_PURPLE } from "../constants/chartColors";

const UserChart = ({ data }: { data: typeof userGrowth }) => {
  const screenSize = useScreenSize();
  const renderColorfulLegendText = (value: string, entry: any) => {
    const { color } = entry;
    return <span style={{ color }}>{convertCamelCaseToLabel(value)}</span>;
  };
  return (
    <>
      <div className="flex bg-slate-50 rounded-lg p-4 w-screen md:w-[700px] justify-between items-center flex-col-reverse md:flex-row gap-8">
        <ResponsiveContainer
          width={"100%"}
          aspect={screenSize === "small" ? 1 : 2}
        >
          <LineChart
            width={800}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              axisLine={false}
              tickSize={0}
              dataKey="month"
              tickFormatter={(value, index) => {
                if (index % 2 === 0) {
                  return convertDateToShortFormat(value);
                }
                return "";
              }}
              className="text-sm"
            />
            <YAxis
              tickSize={0}
              tickFormatter={(value) => formatCount(value)}
              className="text-sm"
              axisLine={false}
            />
            <Tooltip
              wrapperClassName="bg-white rounded-xl border px-2 py-1 shadow-md text-xs"
              formatter={(value, entry) => [
                formatCount(value),
                convertCamelCaseToLabel(entry as string),
              ]}
              labelFormatter={(value: string) =>
                convertDateToShortFormat(value)
              }
            />
            <Legend formatter={renderColorfulLegendText} />
            <Line type="monotone" dataKey="totalUsers" stroke={DARK_BLUE} />
            <Line type="monotone" dataKey="activeUsers" stroke={DARK_PURPLE} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default UserChart;

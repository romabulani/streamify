import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { topSongs } from "../data/data";
import useScreenSize from "../hooks/useScreenSize";
import { convertCamelCaseToLabel, formatCount } from "../utils/display";
import { DARK_PURPLE } from "../constants/chartColors";

const SongsChart = ({ data }: { data: typeof topSongs }) => {
  const screenSize = useScreenSize();
  const RoundedTopBar = (props: React.SVGAttributes<SVGRectElement>) => {
    const { x, y, width, height, fill } = props;

    return (
      <>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={10}
          ry={10}
        />
        <rect
          x={x}
          y={(y as number) + 10}
          width={width}
          height={(height as number) - 10}
          fill={fill}
        />
      </>
    );
  };

  return (
    <div className="flex bg-slate-50 rounded-lg p-4 w-screen md:w-[700px] justify-between items-center flex-col-reverse md:flex-row gap-8">
      <ResponsiveContainer
        width={"100%"}
        aspect={screenSize === "small" ? 1 : 2}
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="songName"
            className="text-sm"
            axisLine={false}
            tickSize={0}
          />
          <YAxis
            tickFormatter={(value) => formatCount(value)}
            className="text-sm"
            axisLine={false}
            tickSize={0}
          />
          <Tooltip
            wrapperClassName="bg-white rounded-xl border px-2 py-1 shadow-md text-xs"
            formatter={(value, entry) => [
              formatCount(value),
              convertCamelCaseToLabel(entry as string),
            ]}
          />
          <Bar
            dataKey="streams"
            fill={DARK_PURPLE}
            barSize={30}
            style={{ borderRadius: "20px" }}
            className="!hover:bg-slate-50 !rounded-lg"
            shape={<RoundedTopBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SongsChart;

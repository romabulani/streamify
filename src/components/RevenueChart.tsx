import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { revenueSources } from "../data/data";
import useScreenSize from "../hooks/useScreenSize";
import { DARK_BLUE, DARK_PURPLE } from "../constants/chartColors";
import Change from "../atoms/Change";

const RevenueChart = ({ data }: { data: typeof revenueSources }) => {
  const COLORS = [DARK_BLUE, DARK_PURPLE];

  const screenSize = useScreenSize();
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex bg-slate-50 rounded-lg p-4 w-screen md:w-[700px] justify-between items-center flex-col-reverse md:flex-row gap-8">
      <ResponsiveContainer
        width={"100%"}
        aspect={screenSize === "small" ? 1 : 2}
      >
        <PieChart
          width={600}
          height={600}
          margin={{ top: 5, right: 30, left: 20, bottom: 10 }}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex md:flex-col gap-7">
        {revenueSources.map((revenueSource, index) => (
          <div
            className={`flex flex-col px-2 py-4 rounded-lg mx-2 min-w-32 shadow-sm items-stretch ${
              index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
            }`}
            key={revenueSource.name}
          >
            <span className="text-sm pb-2">{revenueSource.name}</span>
            <Change value={revenueSource.value} change={revenueSource.change} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;

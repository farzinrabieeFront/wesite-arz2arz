import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ApexCharts = ({ up }) => {
  const data = [
    {
      name: "Page A",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 100,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 80,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 100,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 80,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 150,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 90,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page H",
      uv: 110,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          stroke={up ? "#00C56E" : "#FF305B"}
          fill={up ? "#00C56E" : "#ff9ebc"}
          className="redChart"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ApexCharts;

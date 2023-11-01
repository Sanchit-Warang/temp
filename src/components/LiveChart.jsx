import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
} from "recharts";

function LiveChart({ data, color }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{}} className="custom-tooltip">
          <p style={{ color: `${color}` }}>{`${payload[0].payload.value}`}</p>
        </div>
      );
    }

    return null;
  };

  const data1 = [
    { name: "A", value: data[0] },
    { name: "B", value: data[1] },
    { name: "C", value: data[2] },
    { name: "D", value: data[3] },
    { name: "E", value: data[4] },
  ];

  return (
    <>
      <LineChart width={200} height={50} data={data1}>
        <Tooltip wrapperStyle={{}} content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke = {color}
          strokeWidth={1}
        />
      </LineChart>
      {/* <LineChart 
      width={200}
      height={200}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" />
      <YAxis /> */}
      {/* <Tooltip /> */}
      {/* <Legend />  */}
      {/* <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8}}
        style={{color:"black"}}/>
 </LineChart>  */}
    </>
  );
}
export default LiveChart;

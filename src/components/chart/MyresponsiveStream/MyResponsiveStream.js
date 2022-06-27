import React from "react";
import { ResponsiveStream } from "@nivo/stream";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
// let data = [
//   {
//     id: "japan",
//     color: "#26AB6D",
//     data: [
//       {
//         x: "plane",
//         y: 245,
//       },
//       {
//         x: "helicopter",
//         y: 253,
//       },
//       {
//         x: "boat",
//         y: 108,
//       },
//       {
//         x: "train",
//         y: 252,
//       },
//       {
//         x: "subway",
//         y: 266,
//       },
//       {
//         x: "bus",
//         y: 7,
//       },
//       {
//         x: "car",
//         y: 242,
//       },
//       {
//         x: "moto",
//         y: 96,
//       },
//     ],
//   },
// ];
const MyResponsiveStream = ({ data }) => {
  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        lineWidth={1}
        enablePoints={false}
        pointSize={10}
        // pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        colors={{ datum: "color" }}
        // colors={
        //   " linear-gradient(180deg, rgba(38, 171, 109, 0.1) 0%, rgba(38, 171, 109, 0) 100%)"
        // }
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.1}
        useMesh={true}
        defs={[
          {
            id: "gradientC",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#26AB6D", opacity: 1 },
              { offset: 100, color: "#26AB6D", opacity: 0 },
            ],
            gradientTransform: "rotate(180deg)",
          },
        ]}
        legends={[]}
        fill={[{ match: "*", id: "gradientC" }]}
      />
    </>
  );
};

export default MyResponsiveStream;

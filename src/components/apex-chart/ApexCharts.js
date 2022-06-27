import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import Chart from "react-apexcharts";
import Styles from "./Apex.module.scss";
const ApexCharts = ({ up, data, height }) => {
  const [dataChart, setDataChart] = useState({});
  useEffect(() => {
    setDataChart({
      options: {
        chart: {
          id: "basic-bar",
          type: "area",
          toolbar: {
            show: false,
          },
        },

        fill: {
          colors: up
            ? ["#00C56E", "#00C56E", "#00C56E"]
            : ["#F44336", "#E91E63", "#9C27B0"],
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: up
            ? ["#00C56E", "#00C56E", "#00C56E"]
            : ["#F44336", "#E91E63", "#9C27B0"],
          width: 1,
          dashArray: 0,
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: true,
        },
      },
      series: [
        {
          name: "series-1",
          data,
        },
      ],
    });
  }, [up, data]);
  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <div
              // style={{
              //   position: "absolute",
              //   bottom: "-31px",
              //   left: "-12px",
              //   right: "-10px",
              // }}
              className={`${Styles.posApex}`}
              // style={{
              //   position: "absolute",
              //   bottom: "13%",
              //   left: "-12px",
              //   right: "-10px",
              // }}
            >
              <Chart
                options={dataChart?.options}
                series={dataChart?.series}
                type="area"
                width="100%"
                height={height}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApexCharts;

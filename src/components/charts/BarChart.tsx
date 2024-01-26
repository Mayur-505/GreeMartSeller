import { useRef } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import ReactDOM from "react-dom";

const BarChart = (props) => {
  const LALA = useRef();
  return (
    <div>
      <Bar
        options={{
          tooltips: {
            callbacks: {
              label: function (tooltipItems, data) {
                return tooltipItems.yLabel.toString() + "k";
              },
            },
            enabled: true,

            custom: (tooltipModel) => {
              // hide the tooltip
            },
          },

          legend: {
            display: false,
          },
          scales: {
            barPercentage: 0.2,
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontSize: 17,
                },
                barThickness: 50, // number (pixels) or 'flex'
                maxBarThickness: 14, // number (pixels)
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  stepSize: 100,
                  beginAtZero: true,
                  fontSize: 19,
                  callback: function (value, index, values) {
                    return value + "k";
                  },
                },
                barPercentage: 1.0,
                categoryPercentage: 1.0,
              },
            ],
          },
          title: {
            display: props.display,
            text: props.title,
          },
          borderRadius: "10px",
        }}
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              backgroundColor: [
                "#FFF0D7",
                "#FFF0EB",
                "#E3F3D9",
                "#FFF0D7",
                "#17AEC933",
                "#FFF0D7",
                "#FFF0EB",
                "#5BB3EDB2",
                "#FFF0EB",
                "#FFF0D7",
                "#E3F3D9",
                "#FFF0D7",
              ],
              hoverBackgroundColor: "#325AE7",
              barPercentage: 0.1,
              borderColor: "red",
              categorySpacing: 2,
              data: [
                130, 200, 290, 220, 390, 350, 415, 500, 480, 250, 390, 360,
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;

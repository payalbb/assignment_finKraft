import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const Chart = () => {
  const [data, setData] = useState({
    labels: [
      "CRS SpX-25",
      "LARES 2 & Cubesats",
      "Wise One Looks Ahead (NROL-162)",
      "TROPICS Flight 1",
      "Starlink Group 3-1",
      "Starlink Group 4-21",
      "DS-EO, NeuSAR, SCOOB-I & POEM",
      "SES-22",
      "CAPSTONE",
      "Measat-3d & GSAT-24"
    ],
    datasets: [
      {
        label: "successfull",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
     ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://www.ag-grid.com/example-assets/space-mission-data.json";
      //    const labelSet = []
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          for (const val of res) {
            dataSet1.push(val.price);
          }
          setData({
            labels: [
                "CRS SpX-25",
                "LARES 2 & Cubesats",
                "Wise One Looks Ahead (NROL-162)",
                "TROPICS Flight 1",
                "Starlink Group 3-1",
                "Starlink Group 4-21",
                "DS-EO, NeuSAR, SCOOB-I & POEM",
                "SES-22",
                "CAPSTONE",
                "Measat-3d & GSAT-24"
            ],
            datasets: [
              {
                label: "Price",
                data: dataSet1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(99, 132, 0.5)",
              },
            ],
          });
          
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "50%", height: "50%" }}>
    
      <Bar data={data} options={options} />
    </div>
  );
};
export default Chart;

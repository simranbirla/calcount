import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ consumed, total }) => {
  const data = {
    labels: ["Consumed Calories(kcal)", "Remaining Calories(kcal)"],
    datasets: [
      {
        label: "Consumption of calories",
        data: [consumed, total - consumed],
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;

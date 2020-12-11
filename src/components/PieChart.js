import React from "react";
import Pie from "react-chartjs-2";

const PieChart = ({ carbs, protiens, fats, other }) => {
  const data = {
    labels: ["Protein(kcal)", "Carbs(kcal)", "fats(kcal)", "other(kcal)"],
    datasets: [
      {
        label: "Consumption of calories",
        data: [protiens, carbs, fats, other],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(25, 206, 66, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 206, 66, 1)",
        ],
        borderWidth: 1,
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

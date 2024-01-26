import { Doughnut } from "react-chartjs-2";

const PieChart = (props: { data: Number[]; color: string[] }) => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: props.data,
        backgroundColor: props.color,
        borderWidth: 0,
        wight: "100%",
      },
    ],
  };
  return <Doughnut legend={false} data={data} />;
};

export default PieChart;

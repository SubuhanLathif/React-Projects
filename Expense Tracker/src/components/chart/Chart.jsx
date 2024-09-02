import ReactApexChart from "react-apexcharts"

const options = {
    labels: ["Balance","Expense", "Income"],
    colors: ["#4e73df","#bb2d3b", "#1cc88a"], // Corrected from color to colors
    chart: {
      width: "100%"
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    hover: {
      mode: null,
    },
    plotOptions: {
      pie: { 
        expandOnClick: false,
        pie: { 
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
    },
    fill: {
      colors: ["#4e73df","#bb2d3b", "#1cc88a"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        backgroundColor: "#000",
      },
    },
  };
  
  export default options;
  

export const Chart = ({expense = 100, income = 100, balance = 100}) => {
  return (
    <ReactApexChart
    options={options}
    series={[balance,expense,income]} //static data
    type="pie"
    width={"100%"}
    height={"100%"}
    />
  )
}

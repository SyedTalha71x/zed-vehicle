import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const series = [29.4, 30.1, 40.5]; // Desktop, Mobile, Tablet

    const options = {
        chart: {
            type: "donut",
        },
        labels: ["Desktop", "Mobile", "Tablet"],
        colors: ["#A3BCFF", "#FFA84B", "#A7D2FF"],
        tooltip: {
            y: {
                formatter: (val) => `${val.toFixed(1)}k`,
            },
        },
        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 5,
            colors: ["#fff"], // white spacing
        },
        fill: {
            type: "solid",
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    size: "80%",
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280,
                    },
                },
            },
        ],
    };

    return (
        <div className="max-w-xs mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={280}
            />
        </div>
    );
};

export default PieChart;

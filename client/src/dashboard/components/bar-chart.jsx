import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
    const [state] = useState({
        series: [
            {
                name: "Users",
                data: [1200, 800, 600],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 250,
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: "60%",
                    borderRadius: 6,
                    borderRadiusApplication: "end",
                },
            },
            colors: ["#91D0FF", "#FDB0AC"],
            xaxis: {
                categories: ["Vietnam", "United States", "Indonesia"],
                labels: {
                    show: false,
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: "12px",
                        colors: "#666",
                    },
                },
            },
            grid: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            dataLabels: {
                enabled: false,
            },
        },
    });

    return (
        <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={200}
        />
    );
};

export default BarChart;

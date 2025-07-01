import ApexCharts from "react-apexcharts";

const ProductChart = () => {
    const options = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%",
                borderRadius: 7,
                borderRadiusApplication: "end",
            },
        },
        colors: ["#97ADFF", "#FFC879"], 
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            labels: {
                style: {
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => val.toLocaleString(),
            },
        },
        tooltip: {
            y: {
                formatter: (val) => val.toLocaleString(),
            },
        },
        legend: {
            show: false,
        },
        grid: {
            strokeDashArray: 1,
        },
    };

    const series = [
        {
            name: "Completed",
            data: [
                14000, 24000, 12000, 16000, 10000, 36000, 18000, 28000, 12000,
                10000, 18000, 22000,
            ],
        },
        {
            name: "Reject",
            data: [
                18000, 10000, 14000, 8000, 28000, 22000, 12000, 16000, 30000,
                34000, 24000, 14000,
            ],
        },
    ];

    return (
        <ApexCharts options={options} series={series} type="bar" height={400} />
    );
};

export default ProductChart;

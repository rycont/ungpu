// 멜론 차트 API 파싱
function parseChart(chart) {
    let data = {};
    let title = chart.title;
    let subTitle = chart.subTitle;
    let xAxis = chart.xAxis;
    let yAxis = chart.yAxis;
    let series = chart.series;

    data.title = title;
    data.subTitle = subTitle;
    data.xAxis = xAxis;
    data.yAxis = yAxis;
    data.series = series;

    return data;
}
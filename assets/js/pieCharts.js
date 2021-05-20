var xValues = ["cases", "recovereds", "deaths"];
var yValues = [55, 49, 44];
var barColors = [
  "#ffa25f",
  "#db884d",
  "#c1845a"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Information about corona virus"
    }
  }
});
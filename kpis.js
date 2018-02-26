const CHART = document.getElementById('lineChart')

let lineChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "KPIs",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      lineTension: 0.1,
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  }
})

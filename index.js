/*=========================================
User Acquisition
===========================================*/
const acquisition = document.getElementById('acquisition');

const acChart = new Chart(acquisition, {
   // The type of chart we want to create
   type: 'line',

   // The data for our dataset
   data: {
      labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
      datasets: [
         {
            label: "Referral",
            backgroundColor: 'rgb(76, 132, 255)',
            borderColor: 'rgba(76, 132, 255,0)',
            data: [78, 88, 68, 74, 50, 55, 25],
            lineTension: 0.3,
            pointBackgroundColor: 'rgba(76, 132, 255,0)',
            pointHoverBackgroundColor: 'rgba(76, 132, 255,1)',
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
         },
         {
            label: "Direct",
            backgroundColor: 'rgb(254, 196, 0)',
            borderColor: 'rgba(254, 196, 0,0)',
            data: [88, 108, 78, 95, 65, 73, 42],
            lineTension: 0.3,
            pointBackgroundColor: 'rgba(254, 196, 0,0)',
            pointHoverBackgroundColor: 'rgba(254, 196, 0,1)',
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
         },
         {
            label: "Social",
            backgroundColor: 'rgb(41, 204, 151)',
            borderColor: 'rgba(41, 204, 151,0)',
            data: [103, 125, 95, 110, 79, 92, 58],
            lineTension: 0.3,
            pointBackgroundColor: 'rgba(41, 204, 151,0)',
            pointHoverBackgroundColor: 'rgba(41, 204, 151,1)',
            pointHoverRadius: 3,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
         }
      ]
   },

   // Configuration options go here
   options: {
      legend: {
         display: false
      },

      scales: {
         xAxes: [{
            gridLines: {
               display: false
            }
         }],
         yAxes: [{
            gridLines: {
               display: true
            },
            ticks: {
               beginAtZero: true,
            },
         }]
      },
      tooltips: {
      }
   }
});
document.getElementById('customLegend').innerHTML = acChart.generateLegend();
/*=========================================
Analytic activity Chart
===========================================*/
var activity = document.getElementById('activity');

var chart = new Chart(activity, {
   // The type of chart we want to create
   type: 'line',

   // The data for our dataset
   data: {
      labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
      datasets: [
         {
            label: "",
            backgroundColor: 'transparent',
            borderColor: 'rgb(82, 136, 255)',
            data: [0, 65, 52, 115, 98, 165, 125],
            lineTension: 0,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBackgroundColor: 'rgba(255,255,255,0.6)',
            pointHoverRadius: 8,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
         },
         {
            label: "",
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 199, 15)',
            data: [45, 38, 100, 87, 152, 187, 85],
            lineTension: 0,
            borderDash: [10, 5],
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: 'rgba(255,255,255,0.6)',
            pointHoverRadius: 8,
            pointHitRadius: 30,
            pointBorderWidth: .3,
            pointStyle: 'rectRounded'
         }
      ]
   },

   // Configuration options go here
   options: {
      legend: {
         display: false
      },
      scales: {
         xAxes: [{
            gridLines: {
               display: false
            }
         }],
         yAxes: [{
            gridLines: {
               display: true
            },
            ticks: {

            },
         }]
      },
      tooltips: {
      }
   }
});
/*=========================================
Line Chart
===========================================*/
var ctx = document.getElementById('linechart');

var chart = new Chart(ctx, {
   // The type of chart we want to create
   type: 'line',

   // The data for our dataset
   data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
         {
            label: "",
            backgroundColor: 'transparent',
            borderColor: 'rgb(82, 136, 255)',
            data: [2000, 11000, 10000, 14000, 11000, 17000, 14500, 18000, 12000, 23000, 17000, 23000],
            lineTension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBackgroundColor: 'rgba(255,255,255,0.6)',
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
         }
      ]
   },

   // Configuration options go here
   options: {
      legend: {
         display: false
      },
      scales: {
         xAxes: [{
            gridLines: {
               display: false
            }
         }],
         yAxes: [{
            gridLines: {
               display: true
            },
            ticks: {
               callback: function (value) {
                  var ranges = [
                     { divider: 1e6, suffix: 'M' },
                     { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                     for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                           return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                     }
                     return n;
                  }
                  return '$' + formatNumber(value);
               }
            },
         }]
      },
      tooltips: {
         callbacks: {
            title: function (tooltipItem, data) {
               console.log(data);
               console.log(tooltipItem);
               return data['labels'][tooltipItem[0]['index']];
            },
            label: function (tooltipItem, data) {
               return '$' + data['datasets'][0]['data'][tooltipItem['index']];
            },
         },
         backgroundColor: '#606060',
         titleFontSize: 14,
         titleFontColor: '#ffffff',
         bodyFontColor: '#ffffff',
         bodyFontSize: 18,
         displayColors: false
      }
   }
});

/*=========================================
Bar Chart
===========================================*/
var barX = document.getElementById("barChart").getContext('2d');

var myChart = new Chart(barX, {
   type: 'bar',
   data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
         label: '',
         data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
         backgroundColor: '#4c84ff',
      }]
   },
   options: {
      legend: {
         display: false
      },
      scales: {
         xAxes: [{
            gridLines: {
               drawBorder: false,
               display: false
            },
            ticks: {
               display: false, // hide main x-axis line
               beginAtZero: true
            },
            barPercentage: 1.8,
            categoryPercentage: 0.2
         }],
         yAxes: [{
            gridLines: {
               drawBorder: false, // hide main y-axis line
               display: false
            },
            ticks: {
               display: false,
               beginAtZero: true
            },
         }]
      },
      tooltips: {
         enabled: false
      }
   }
});

/*=========================================
Doughnut Chart
===========================================*/
var doughnut = document.getElementById("doChart");
var myDoughnutChart = new Chart(doughnut, {
   type: 'doughnut',
   data: {
      labels: ["completed", "unpaid", "pending", "canceled"],
      datasets: [{
         label: ["completed", "unpaid", "pending", "canceled"],
         data: [4100, 2500, 1800, 2300],
         backgroundColor: ['#4c84ff', '#29cc97', '#8061ef', '#fec402'],
         // borderColor: ['#4c84ff','#29cc97','#8061ef','#fec402']
         hoverBorderColor: ["#4c84ff", "#29cc97", "#8061ef", "#fec402"]
      }]
   },
   options: {
      legend: {
         display: false
      },
      cutoutPercentage: 80,
      tooltips: {
         callbacks: {
            title: function (tooltipItem, data) {
               console.log(data);
               console.log(tooltipItem);
               return 'Order ' + data['labels'][tooltipItem[0]['index']];
            },
            label: function (tooltipItem, data) {
               return data['datasets'][0]['data'][tooltipItem['index']];
            },

            afterLabel: function (tooltipItem, data) {
               // var dataset = data['datasets'][0];
               // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
               // return '(' + percent + '%)';
            }
         },
         backgroundColor: '#ffffff',
         titleFontSize: 14,
         titleFontColor: '#8a909d',
         bodyFontColor: '#1b223c',
         bodyFontSize: 18,
         displayColors: false
      }
   }
});
// google.load("visualization", "1", {packages:["gauge"]});
// google.setOnLoadCallback(drawChart);
// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Ruby on Rails', 80],
//     ['JavaScript, JQuery, Ajax', 55],
//     ['HTML, CSS3', 68],
//     ['Git', 80]
//   ]);

//   var options = {
//     redFrom: 90, redTo: 100,
//     yellowFrom:75, yellowTo: 90,
//     minorTicks: 5
//   };

//   var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

//   chart.draw(data, options);

//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 13000);
//   setInterval(function() {
//     data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 5000);
//   setInterval(function() {
//     data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
//     chart.draw(data, options);
//   }, 26000);
//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 13000);
// }
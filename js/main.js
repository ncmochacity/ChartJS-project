
var data = [
    {
        value: 30,
        color:"#c4c3d0"
    },
    {
        value : 50,
        color : "#ddadaf"
    },
    {
        value : 100,
        color : "#add8e6"
    },
    {
        value : 40,
        color : "#c4aead"
    },
    {
        value : 120,
        color : "#4D5360"
    }

]


new Chart(document.getElementById("hours").getContext("2d")).Doughnut(data);

var linedata = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "#c4c3d0",
            strokeColor : "#bebebe",
            pointColor : "#c4c3d0",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "#aec6cf",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
    ]
}


new Chart(document.getElementById("shipments").getContext("2d")).Line(linedata);

var data = {
    labels : ["Helpful","Friendly","Kind","Rude","Slow","Frustrating"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "#637b85",
            pointColor : "#dbba34",
            pointStrokeColor : "#637b85",
            data : [65,59,90,81,30,56]
        }
    ]
}
new Chart(document.getElementById("departments").getContext("2d")).Radar(data);
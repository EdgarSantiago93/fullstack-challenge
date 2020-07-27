import Swal from "sweetalert2";

const blu ='rgba(46, 88, 255, 1)';

export const noLinesLine={
    title: {
        display: true,
        text: 'Population by year'
    },
    legend: {
        display:false,
    },
    scales: {
        yAxes: [
            {

                ticks: {
                    callback: function(value, index, values) {
                        return value/1000000 +' Mil.';
                    },
                    fontSize: 10,
                    padding: 0,
                    fontColor: '#000'
                },
                gridLines: {
                    display:false,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    fontSize: 15,
                    padding: 0,
                    fontColor: '#000',
                    fontStyle: "bold",
                },
                gridLines: {
                    display:false,
                },
            },
        ],
    },
}



export const noLinesBar={
    title: {
        display: true,
        text: 'Growth by year'
    },
    legend: {
        display:false,
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    callback: function(value, index, values) {
                        return value +'%';
                    },
                    fontSize: 10,
                    padding: 0,
                    fontColor: '#000'
                },
                gridLines: {
                    display:false,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
                ticks: {
                    fontSize: 15,
                    padding: 0,
                    fontColor: '#000',
                    fontStyle: "bold",
                },
                gridLines: {
                    display:false,
                },
            },
        ],
    },
}

export const getBarChartData = (data)=>{
    const years = data.map((y)=>{return y.Year})
    const growthByYears= years.map((y)=>{
        const el = data.find(obj => {
            return obj.Year === y
        })
        return el.GrowthRate*100;
    });

    const maxValue =Math.max(...growthByYears);
    const backBars =[];
    for(var i = 0; i < years.length; i++) {
        backBars.push(maxValue);
    }
    return{
        labels: years.sort(),
        datasets: [{
            label: 'Growth',
            fill: true,
            lineTension: 0.1,
            backgroundColor: blu,
            borderColor: blu,
            data:growthByYears.reverse(),
            pointBorderColor:blu,
            pointBackgroundColor: blu,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: blu,
            pointHoverBorderColor: blu,
            pointRadius: 1,
            pointHitRadius: 100,
        },
            {data:backBars}
        ],
    };
}



export const getLineChartData=(data)=>{

    const years = data.map((y)=>{return y.Year})
    const dataByYears= years.map((y)=>{
        const el = data.find(obj => {
            return obj.Year === y
        })
        return el.TotalPopulation
    });

   return {
        labels: years.sort(),
        datasets: [{
            label: 'Population',
            fill: true,
            lineTension: 0.1,
            backgroundColor: '#f6f6f7',
            borderColor: blu,
            data:dataByYears.sort(),
            pointBorderColor:blu,
            pointBackgroundColor: blu,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: blu,
            pointHoverBorderColor: blu,
            pointRadius: 1,
            pointHitRadius: 100,
        }],
    };
}

export const generalError =()=>{
    Swal.fire({
        title: 'Error',
        text: 'Please try again later',
        icon: 'error',
        confirmButtonColor:'#2e58ff',
        confirmButtonText: 'Ok'
    })
}
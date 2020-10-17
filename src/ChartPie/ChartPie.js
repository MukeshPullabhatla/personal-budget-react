import React, { useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

function ChartPie(){
    var dataSource={
        datasets: [
            {
                data: [],
                backgroundColor:[
                    'Blue',
                    'Red',
                    'Yellow',
                    'green',
                    'orange',
                    'black',
                    'purple',
                    'grey',
                    'white'
                ]
            }
        ],
        labels: []
    };

    function createChart(){
        var ctx=document.getElementById("myChart").getContext("2d");
        var pieChart=new ChartPie(ctx,{
            type:"pie",
            data:dataSource
        });
    };

    useEffect(()=>{
        axios.get('http://localhost:3001/budget')
        .then(function(res){
            for(var i=0;i<res.data.myBudget.length;i++){
                dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                dataSource.labels[i]=res.data.myBudget[i].title;
            }
            createChart();
        })
    })
    return(
        <div> </div>
        );   
}

export default ChartPie;
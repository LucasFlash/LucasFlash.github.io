


let Array1 = [
    {id:1, name:"Lucas Flash", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Dinamarca"},
    {id:2, name:"MARTIN", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Polonia", p6:"Empate", gol:7, gd:"Francia"},
    {id:3, name:"MicaREyTurienzo", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:4, gd:"Francia"},
    {id:4, name:"Luciano Mussetta", p1:"Argentina", p2:"Mexico", p3:"Empate", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:5, gd:"Francia"},
    {id:5, name:"Valerio", p1:"Argentina", p2:"Mexico", p3:"Arabia Saudi", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Tunez"},
    {id:6, name:"Brian Nunz", p1:"Argentina", p2:"Polonia", p3:"Empate", p4:"Argentina", p5:"Argentina", p6:"Arabia Saudi", gol:5, gd:"Australia"},
    {id:7, name:"Reymon", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Arabia Saudi", gol:2, gd:"Francia"},

];

let Array1x = [
    {id:1, name:"Lucas Flash", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:2, name:"MARTIN", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:3, name:"MicaREyTurienzo", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:4, name:"Luciano Mussetta", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:5, name:"Valerio", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:6, name:"Brian Nunz", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},
    {id:7, name:"Reymon", p1:"?", p2:"?", p3:"?", p4:"?", p5:"?", p6:"?", gol:"?", gd:"?", pts:"0"},

]


lag = {id:0, name:"Prueba", p1:"Arabia Saudi", p2:"Empate", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Empate", gol:0, gd:"Francia"}


const bb=2211183700
const bc=2611180000
const bd=3011193000


console.log(Array1x)

const imagen1 = new Image();
imagen1.src = "./img/lo1.png"; 
const imagen2 = new Image();
imagen2.src = "./img/lo2.png"; 
const imagen3 = new Image();
imagen3.src = "./img/lo3.png"; 
const imagen4 = new Image();
imagen4.src = "./img/lo4.png"; 
const imagen5 = new Image();
imagen5.src = "./img/lo5.png"; 
const imagen6 = new Image();
imagen6.src = "./img/lo6.png"; 
const imagen7 = new Image();
imagen7.src = "./img/los.png"; 
const lor= 2211200000;


let c = new Date();console.log(c);
let cod = c.getDate()*100000000 + (1+c.getMonth())*1000000 + c.getHours()*10000 + c.getMinutes()*100 + c.getSeconds(); 
console.log(cod)

if (cod <= bb) {

//Build Tabulator
let table = new Tabulator("#tablap", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:Array1x, //load data into table
    columns:[
        {title:"Usuario", field:"name", sorter:"string", width:200},
        {title:imagen1, field:"p1",  sorter:"string"},
        {title:imagen2, field:"p2",  sorter:"string"},
        {title:imagen3, field:"p3",  sorter:"string"},
        {title:imagen4, field:"p4",  sorter:"string"},
        {title:imagen5, field:"p5",  sorter:"string"},
        {title:imagen6, field:"p6",  sorter:"string"},
        
        {title:"Goles", field:"gol", sorter:"number"},
        {title:imagen7, field:"gd",  sorter:"string"},

        {title:"Puntos", field:"pts", sorter:"number"},


    ],
});

}




if (cod > bb & cod < bc) {

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p1"]; 
    g1 = lag["p1"];
    h1h=Array1x[index];
    pts0=h1h["pts"];
    if (d1 == g1) { 
        h1h["p1"]=1; 
        h1h["pts"]=parseInt(pts0)+1;
    }
}

for (let index = 0; index < Array1.length; index++) {
    c1 = Array1[index];  
    d1 = c1["p2"]; 
    g1 = lag["p2"];
    h1h=Array1x[index];
    pts0=h1h["pts"];
    if (d1 == g1) { 
        h1h["p2"]=1; 
        h1h["pts"]=parseInt(pts0)+1;
    }
}

//Build Tabulator
let table = new Tabulator("#tablap", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:Array1x, //load data into table
    columns:[
        {title:"Usuario", field:"name", sorter:"string", width:200},
        {title:imagen1, field:"p1",   formatter:"tickCross", sorter:"boolean"},
        {title:imagen2, field:"p2",   formatter:"tickCross", sorter:"boolean"},
        {title:imagen3, field:"p3",  sorter:"string"},
        {title:imagen4, field:"p4",  sorter:"string"},
        {title:imagen5, field:"p5",  sorter:"string"},
        {title:imagen6, field:"p6",  sorter:"string"},
        
        {title:"Goles", field:"gol", sorter:"number"},
        {title:imagen7, field:"gd",  sorter:"string"},

        {title:"Puntos", field:"pts", sorter:"number"},


    ],
});

}



if (cod > bc & cod < bd) {

    for (let index = 0; index < Array1.length; index++) {
        c1 = Array1[index];  
        d1 = c1["p1"]; 
        g1 = lag["p1"];
        h1h=Array1x[index];
        pts0=h1h["pts"];
        if (d1 == g1) { 
            h1h["p1"]=1; 
            h1h["pts"]=parseInt(pts0)+1;
        }
    }
    
    for (let index = 0; index < Array1.length; index++) {
        c1 = Array1[index];  
        d1 = c1["p2"]; 
        g1 = lag["p2"];
        h1h=Array1x[index];
        pts0=h1h["pts"];
        if (d1 == g1) { 
            h1h["p2"]=1;
            h1h["pts"]=parseInt(pts0)+1; 
        }
    }

    for (let index = 0; index < Array1.length; index++) {
        c1 = Array1[index];  
        d1 = c1["p3"]; 
        g1 = lag["p3"];
        h1h=Array1x[index];
        pts0=h1h["pts"];
        if (d1 == g1) { 
            h1h["p3"]=1; 
            h1h["pts"]=parseInt(pts0)+1;
        }
    }
    
    for (let index = 0; index < Array1.length; index++) {
        c1 = Array1[index];  
        d1 = c1["p4"]; 
        g1 = lag["p4"];
        h1h=Array1x[index];
        pts0=h1h["pts"];
        if (d1 == g1) { 
            h1h["p4"]=1; 
            h1h["pts"]=parseInt(pts0)+1;
        }
    }
    
    //Build Tabulator
    let table = new Tabulator("#tablap", {
        height:"311px",
        layout:"fitColumns",
        reactiveData:true, //turn on data reactivity
        data:Array1x, //load data into table
        columns:[
            {title:"Usuario", field:"name", sorter:"string", width:200},
            {title:imagen1, field:"p1",   formatter:"tickCross", sorter:"boolean"},
            {title:imagen2, field:"p2",   formatter:"tickCross", sorter:"boolean"},
            {title:imagen3, field:"p3",   formatter:"tickCross", sorter:"boolean"},
            {title:imagen4, field:"p4",   formatter:"tickCross", sorter:"boolean"},
            {title:imagen5, field:"p5",  sorter:"string"},
            {title:imagen6, field:"p6",  sorter:"string"},
            
            {title:"Goles", field:"gol", sorter:"number"},
            {title:imagen7, field:"gd",  sorter:"string"},
    
            {title:"Puntos", field:"pts", sorter:"number"},
    
    
        ],
    });
    
    }



    if (cod > bd) {

        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p1"]; 
            g1 = lag["p1"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p1"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }
        
        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p2"]; 
            g1 = lag["p2"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p2"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }
    
        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p3"]; 
            g1 = lag["p3"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p3"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }
        
        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p4"]; 
            g1 = lag["p4"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p4"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }

        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p5"]; 
            g1 = lag["p5"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p5"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }
        
        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["p6"]; 
            g1 = lag["p6"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["p6"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }

        for (let index = 0; index < Array1.length; index++) {
            c1 = Array1[index];  
            d1 = c1["gd"]; 
            g1 = lag["gd"];
            h1h=Array1x[index];
            pts0=h1h["pts"];
            if (d1 == g1) { 
                h1h["gd"]=1; 
                h1h["pts"]=parseInt(pts0)+1;
            }
        }

        
        //Build Tabulator
        let table = new Tabulator("#tablap", {
            height:"311px",
            layout:"fitColumns",
            reactiveData:true, //turn on data reactivity
            data:Array1x, //load data into table
            columns:[
                {title:"Usuario", field:"name", sorter:"string", width:200},
                {title:imagen1, field:"p1",   formatter:"tickCross", sorter:"boolean"},
                {title:imagen2, field:"p2",   formatter:"tickCross", sorter:"boolean"},
                {title:imagen3, field:"p3",   formatter:"tickCross", sorter:"boolean"},
                {title:imagen4, field:"p4",   formatter:"tickCross", sorter:"boolean"},
                {title:imagen5, field:"p5",   formatter:"tickCross", sorter:"boolean"},
                {title:imagen6, field:"p6",   formatter:"tickCross", sorter:"boolean"},
                
                {title:"Goles", field:"gol", sorter:"number"},
                {title:imagen7, field:"gd",   formatter:"tickCross", sorter:"boolean"},
        
                {title:"Puntos", field:"pts", sorter:"number"},
        
        
            ],
        });
        
        }












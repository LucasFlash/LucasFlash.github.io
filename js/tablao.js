

let Array1 = [
    {id:1, name:"Lucas Flash", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Dinamarca"},
    {id:2, name:"MARTIN", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Polonia", p6:"Empate", gol:7, gd:"Francia"},
    {id:3, name:"MicaREyTurienzo", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:4, gd:"Francia"},
    {id:4, name:"Luciano Mussetta", p1:"Argentina", p2:"Mexico", p3:"Empate", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:5, gd:"Francia"},
    {id:5, name:"Valerio", p1:"Argentina", p2:"Mexico", p3:"Arabia Saudi", p4:"Argentina", p5:"Argentina", p6:"Mexico", gol:6, gd:"Tunez"},
    {id:6, name:"Brian Nunz", p1:"Argentina", p2:"Polonia", p3:"Empate", p4:"Argentina", p5:"Argentina", p6:"Arabia Saudi", gol:5, gd:"Australia"},
    {id:7, name:"Reymon", p1:"Argentina", p2:"Mexico", p3:"Polonia", p4:"Argentina", p5:"Argentina", p6:"Arabia Saudi", gol:2, gd:"Francia"},

];




console.log(Array1)

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


//Build Tabulator
var table = new Tabulator("#tablao", {
    height:"311px",
    layout:"fitColumns",
    reactiveData:true, //turn on data reactivity
    data:Array1, //load data into table
    columns:[
        {title:"Id", field:"id", sorter:"number", width:60},
        {title:"Usuario", field:"name", sorter:"string", width:200},



        {title:imagen1, field:"p1", sorter:"string"},
        {title:imagen2, field:"p2", sorter:"string"},
        {title:imagen3, field:"p3",  sorter:"string"},
        {title:imagen4, field:"p4",  sorter:"string"},
        {title:imagen5, field:"p5",  sorter:"string"},
        {title:imagen6, field:"p6",  sorter:"string"},
        
        {title:"Goles", field:"gol", sorter:"number"},
        {title:imagen7, field:"gd",  sorter:"string"},


    ],
});


let a;
let d1; let d2;
let c = new Date();console.log(c);
let cod = c.getDate()*100000000 + (1+c.getMonth())*1000000 + c.getHours()*10000 + c.getMinutes()*100 + c.getSeconds(); 
console.log(cod)
console.log(a)
if (cod < 411220000) { a=0 }
 else { if (cod < 411222500) { a=1 }  
  else { if (cod < 411224500) { a=2 } 
  else { if (cod < 411230000) { a=3 } 
  else { if (cod < 411233000) { a=4 } 
  else { if (cod < 411234500) { a=5 } 
  else { if (cod < 511060000) { a=6 } 
  else { if (cod < 411070000) { a=7 } 
  else { if (cod < 411073000) { a=0 } 
  else { if (cod < 411080000) { a=1 } 
  else { if (cod < 411083000) { a=2 } 
  else { if (cod < 411090000) { a=9 } 
  else { if (cod < 411093000) { a=5 } 
  else { if (cod < 411103000) { a=8 } }}}}}}}}}}}}}


let nombre = ["F. Armani", "L. Messi", "L. Paredes", "N. Tagliafico", "G. Montiel", "R. De Paul", "A. Di Maria", "G. Lo Celso", "E. Martinez", "N. Otamendi"];
let years = ["36", "35", "28", "30", "25", "28", "34", "26", "30", "34"];
let pais = ["Argentina", "Francia", "Italia", "Francia", "España", "España", "Italia", "ESpaña", "Inglaterra", "Portugal"];
let num = ["1", "10", "5", "3", "4", "7", "11", "20", "23", "19"]; //Tu array de provincias
let y= nombre[a];





    let btnp0 = document.querySelector('#btnp0')
    btnp0.addEventListener('click', () => {
    let anio = document.getElementById('anio')
    anio.innerHTML=years[a];
    d1=1;
    })
    let btnp1 = document.querySelector('#btnp1')
    btnp1.addEventListener('click', () => {
        if (d1>0){
    let paises = document.getElementById('pais')
    paises.innerHTML=pais[a];
    d2=1;
    }
    else { alert("NO HAGAS TRAMPA")}
    })
    let btnp2 = document.querySelector('#btnp2')
    btnp2.addEventListener('click', () => {
        if (d2>0){
    let nums = document.getElementById('num')
    nums.innerHTML=num[a];
    }
    else { alert("NO HAGAS TRAMPA")}
    })


function cargar() {
    var select = document.getElementById("nombre"); //Seleccionamos el select
    for(var i=0; i < nombre.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = nombre[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select

    }

}
cargar();


let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => {

    let nomb = document.getElementById('nombre');
    console.log(nomb.value)
 
    if (nomb.value == y ){

        alert("Muy bien capo !!!!!")  }
        else{
            alert("Perdiste pibe")
        }
})



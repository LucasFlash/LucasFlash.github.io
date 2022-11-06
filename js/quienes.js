

let a;
let d1; let d2;
let c = new Date();console.log(c);
let cod = c.getHours()*10000 + c.getMinutes()*100 + c.getSeconds(); 
console.log(cod)
console.log(a)
if (cod < 50000) { a=1 }
 else { if (cod < 60000) { a=3 }  
  else { if (cod < 70000) { a=0 } 
  else { if (cod < 80000) { a=5 } 
  else { if (cod < 90000) { a=9 } 
  else { if (cod < 100000) { a=4 } 
  else { if (cod < 110000) { a=2 } 
  else { if (cod < 120000) { a=7 } 
  else { if (cod < 130000) { a=0 } 
  else { if (cod < 140000) { a=4 } 
  else { if (cod < 150000) { a=8 } 
  else { if (cod < 160000) { a=3 } 
  else { if (cod < 170000) { a=1 } 
  else { if (cod < 180000) { a=8 } 
  else { if (cod < 190000) { a=0 } 
  else { if (cod < 200000) { a=7 }
  else { if (cod < 210000) { a=2 } 
  else { if (cod < 220000) { a=9 } 
  else { if (cod < 230000) { a=5 } 
  else { if (cod < 235959) { a=8 } }}}}}}}}}}}}}}}}}}}

console.log(a)
let nombre = ["F. Armani", "L. Messi", "L. Paredes", "N. Tagliafico", "G. Montiel", "R. De Paul", "A. Di Maria", "G. Lo Celso", "E. Martinez", "N. Otamendi"];
let years = ["36", "35", "28", "30", "25", "28", "34", "26", "30", "34"];
let pais = ["Argentina", "Francia", "Italia", "Francia", "España", "España", "Italia", "ESpaña", "Inglaterra", "Portugal"];
let num = ["1", "10", "5", "3", "4", "7", "11", "20", "23", "19"]; //Tu array de provincias
let img = ["https://www.pesmaster.com/pes-2020/graphics/players/player_111194730_l.png",
"https://futhead.cursecdn.com/static/img/fm/18/wcplayers/158023_AS.png",
"https://www.pesmaster.com/pes-2021/graphics/players/player_138457388_l.png",
"https://www.pesmaster.com/pes-2021-mobile/graphics/players/138453628_l.png",
"https://www.pesmaster.com/pes-2020/graphics/players/player_43102136_l.png",
"https://www.pesmaster.com/pes-2021-mobile/graphics/players/138472273_l.png",
"https://futhead.cursecdn.com/static/img/fm/18/wcplayers/183898_AS.png",
"https://futhead.cursecdn.com/static/img/fm/18/wcplayers/226226_AS.png",
"https://www.pesmaster.com/pes-2021/graphics/players/player_68258516_l.png",
"https://www.pesmaster.com/pes-2021/graphics/players/player_138452757_l.png"]
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
    else {  Swal.fire(
        'NO HAGAS TRAMPA',
        'PRIMERO PEDIME LAS OTRAS PISTAS',
        'SUERTE'
      )}
    })
    let btnp2 = document.querySelector('#btnp2')
    btnp2.addEventListener('click', () => {
        if (d2>0){
    let nums = document.getElementById('num')
    nums.innerHTML=num[a];
    }
    else { Swal.fire(
        'NO HAGAS TRAMPA',
        'PRIMERO PEDIME LAS OTRAS PISTAS',
        'SUERTE'
      )}
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

lo = img[a]

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => {

    let nomb = document.getElementById('nombre');
    console.log(nomb.value)
 
    if (nomb.value == y ){

        Swal.fire({
            title: 'EL JUGADOR ES',
            text: y,
            imageUrl: lo,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "GANASTE",
          }) 
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'PERDISTE',
                text: 'PEDI PISTAS',
                footer: 'INTENTÁ OTRA VEZ'
              })
        }
})



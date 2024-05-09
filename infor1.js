
let y=0; 
let person = prompt("Please enter your name");
let b = person;

let pp1=[
   ["¿En que año fue la Revolucion de Mayo?", "1810", "1916", "1853", 1],
   ["Cual de estos no fue presidente?", "Bilardo", "Menem", "Peron", 1],
   ["¿En que año fue la Independencia Argentina?", "1810", "1820", "1816", 3],
   ["Cual de estos si fue presidente?", "Lavagna", "Frondizzi", "Belgrano", 2],
   ["¿Quien cruzó los Andes?", "Guemes", "Belgrano", "San Martin", 3],
   ["¿En que ciudad se firmo la Independencia Argentina?", "Buenos Aires", "San Miguel Tucuman", "Salta", 2],
   ["Cual de estos no fue presidente?", "Peron", "Manzur", "Alfonsin", 2],
   ["¿En que ciudad se creo la bandera argentina?", "Rosario", "La Plata", "Cordoba", 1],
   ["¿En que año fue la guerra de Malvinas?", "1982", "1994", "2020", 1],
   ["¿Quien creo la bandera argentina?", "Belgrano", "San Martin", "Moreno", 1],
   ["Cual de estos si fue presidente?", "Mendoza", "Delgado", "Fernandez", 3],
   ["Cual de estas batallas ganó San Martin?", "Caseros", "San Lorenzo", "Malvinas", 2],
   ["Cual de estos no fue presidente?", "Bilardo", "Menem", "Peron", 1],
   ["¿En que año fue la Independencia Argentina?", "1810", "1820", "1816", 3],
   ["Cual de estos si fue presidente?", "Lavagna", "Frondizzi", "Belgrano", 2]
];

let pp2=[
    ["¿Cual de estos animales no hay en Argentina", "Leones", "Pinguinos", "Carpinchos", 1],
    ["Cual de estos es un Parque Nacional argentino?", "Los Glaciares", "Niagara", "San Pablo", 1],
    ["¿Cual de estos elementos abunda en Argentina?", "Diamantes", "Litio", "Tulipan", 2],
    ["Cuantos premios Nobel tiene Argentina?", "2", "5", "7", 2],
    ["¿Cual es alimentos produce Argentina en grandes cantidades?", "Soja", "Tulipanes", "Palta", 1],
    ["¿Cual de estos animales no hay en Argentina", "1810", "1916", "1853", 1],
    ["Cual de estos es un Parque Nacional argentino?", "Bilardo", "Menem", "Peron", 1],
    ["¿Cual de estos elementos abunda en Argentina?", "1810", "1820", "1816", 3],
    ["Cual de estos es un volcan de Argentina?", "Lavagna", "Frondizzi", "Belgrano", 2],
    ["¿Cual es alimentos no produce Argentina?", "Guemes", "Belgrano", "San Martin", 3],
    ["¿Cual de estos animales no hay en Argentina", "1810", "1916", "1853", 1],
    ["Cual de estos es un Parque Nacional argentino?", "Bilardo", "Menem", "Peron", 1],
    ["¿Cual de estos elementos abunda en Argentina?", "1810", "1820", "1816", 3],
    ["Cual de estos no es un volcan Argentina?", "Lavagna", "Frondizzi", "Belgrano", 2],
    ["¿Cual es alimentos no produce Argentina?", "Guemes", "Belgrano", "San Martin", 3],
 ];

let boton1 = document.querySelector('#boton1')
boton1.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 
    zz.innerHTML= `<div align="center"> Pregunta: <br>` + pp1[y][0] + `</div>`;
    zzx.innerHTML= `<div align="center"> Opciones: <br>` + pp1[y][1] +  ` // ` + pp1[y][2] + ` // ` + pp1[y][3] + `</div>`;
      y = y + 1;   b = b + 1; console.log(b);
});

let boton2 = document.querySelector('#boton2')
boton2.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 
    zz.innerHTML= `<div align="center"> Pregunta: <br>` + pp2[y][0] + `</div>`;
    zzx.innerHTML= `<div align="center"> Opciones: <br>` + pp2[y][1] +
     ` // ` + pp2[y][2] + ` // ` + pp2[y][3] + `</div>`;
      y = y + 1;   
});


let ba = document.querySelector('#ba')
ba.addEventListener('click', () => { 
    if (y>0){x0=pp1[y-1][4];
        if(x0!=1){
    let zzq = document.getElementById("zzq"); 
    zzq.innerHTML= y + ` Incorrecto `;
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' })} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        })}   
}});

let bb = document.querySelector('#bb')
bb.addEventListener('click', () => { 
    if (y>0){x0=pp1[y-1][4];
        if(x0!=2){
    let zzq = document.getElementById("zzq"); 
    zzq.innerHTML= y + ` Incorrecto `;
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' })} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        })}   
}});

let bc = document.querySelector('#bc')
bc.addEventListener('click', () => { 
    if (y>0){x0=pp1[y-1][4];
        if(x0!=3){
    let zzq = document.getElementById("zzq"); 
    zzq.innerHTML= y + ` Incorrecto `;
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' })} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        })}   
}});

let y=0; let dd=[];
let person = prompt("Please enter your name");
let b = parseInt(person);
for (let i = 0; i < b; i++) {dd[i]= prompt("Please enter your name");}
 let c = 0; let d=0; dd0= [0, 0, 0, 0, 0];

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
   ["Cual de estos si fue presidente?", "Lavagna", "Frondizzi", "Belgrano", 2],
   ["¿En que año fue la Revolucion de Mayo?", "1810", "1916", "1853", 1],
   ["Cual de estos no fue presidente?", "Bilardo", "Menem", "Peron", 1],
   ["¿En que año fue la Independencia Argentina?", "1810", "1820", "1816", 3],
   ["Cual de estos si fue presidente?", "Lavagna", "Frondizzi", "Belgrano", 2],
   ["¿Quien cruzó los Andes?", "Guemes", "Belgrano", "San Martin", 3],
];

let pp2=[
    ["¿Cual de estos animales no hay en Argentina", "Leones", "Pinguinos", "Carpinchos", 1],
    ["Cual de estos es un Parque Nacional argentino?", "Los Glaciares", "Niagara", "San Pablo", 1],
    ["¿Cual de estos elementos abunda en Argentina?", "Diamantes", "Litio", "Tulipan", 2],
    ["Cuantos premios Nobel tiene Argentina?", "2", "5", "7", 2],
    ["¿Cual de estos alimentos produce Argentina en grandes cantidades?", "Soja", "Tulipanes", "Palta", 1],
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
    ["¿Cual de estos animales no hay en Argentina", "Leones", "Pinguinos", "Carpinchos", 1],
    ["Cual de estos es un Parque Nacional argentino?", "Los Glaciares", "Niagara", "San Pablo", 1],
    ["¿Cual de estos elementos abunda en Argentina?", "Diamantes", "Litio", "Tulipan", 2],
    ["Cuantos premios Nobel tiene Argentina?", "2", "5", "7", 2],
    ["¿Cual de estos alimentos produce Argentina en grandes cantidades?", "Soja", "Tulipanes", "Palta", 1],
 ];

let boton1 = document.querySelector('#boton1')
boton1.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

      if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
      if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
       if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
      if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
      zz.innerHTML= `<div align="center"><p style="font-size: 20px;"> <b>`+dd[d]+`</b> <br>` + pp1[y][0] + `</p></div>`;console.log(d);
      zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp1[y][1] +  `</b> // B)<b>` + pp1[y][2] + `</b> // C)<b>` + pp1[y][3] + `</b></p></div>`;
});

let boton2 = document.querySelector('#boton2')
boton2.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`</b> <br>` + pp2[y][0] + `</p></div>`;console.log(d);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp2[y][1] +  `</b> // B)<b>` + pp2[y][2] + `</b> // C)<b>` + pp2[y][3] + `</b></p></div>`;
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
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;
    }   
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
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
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
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{zzq.innerHTML= y + ` Correcto `;
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
}});
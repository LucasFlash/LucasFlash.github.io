
let y=0; let dd=[]; let e=0;
let person = prompt("Please enter your name");
let b = parseInt(person); let x1=0;let x2=0;let x3=0;let x4=0;
for (let i = 0; i < b; i++) {dd[i]= prompt("Please enter your name");}
 let c = 0; let d=0; dd0= [0, 0, 0, 0, 0];
m =dd.length; console.log(m); let mar=[];


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
    ["¿Cual de estos escritores no es argentino?", "Borges", "Cortazar", "Saramago", 3],
    ["Cual de estas peliculas gano un Oscar?", "El secreto de sus ojos", "San Martin", "Nueve Reinas", 1],
    ["¿Cual de estos no es un cantante de rock nacional?", "Spinetta", "Calamaro", "Pintos", 3],
    ["Cuantos premios Oscars tiene Argentina?", "2", "5", "7", 1],
    ["¿Cual de estos cuentos escribio Cortazar?", "Rayuela", "Los 7 Locos", "Martin Fierro", 1],
    ["¿Quien escribio el -Martin Fierro-?", "J. Hernandez", "J. L. Borges", "J. Cortazar", 1],
    ["Cual de estas peliculas no es argentina?", "Nueve Reinas", "Ciudad de Dios", "Tango Feroz", 2],
    ["¿Cual de estos era un grupo solamente de mujeres?", "Pimpinela", "Mambru", "Bandana", 3],
    ["¿Cual de estos cantantes no nacio en Rosario?", "F. Paez", "J. C. Baglietto", "C. Garcia", 3],
    ["¿Cual de estos no era un grupo de cumbia villera?", "Trapo Sucio", "Damas Gratis", "Meta Guacha", 1],
    ["Cuantos premios Nobel tiene Argentina?", "2", "5", "7", 1],
    ["Cual de estos es el teatro mas grande?", "El Circulo", "El Colon", "El San Martin", 2],
    ["Cual es la musica tradicional de Santiago del Estero?", "Zamba", "Chacarera", "Carnavalito", 2],
 ];

 let pp3=[
    ["¿En que año gano su primer mundial Argentina?", "1978", "1986", "1990", 1],
    ["Cual de estos deportes practican -Los Pumas-?", "Volley", "Rugby", "Polo", 2],
    ["¿Cual de estos fue un tenista argentino?", "Vilas", "Nadal", "Rios", 1],
    ["Como se llama el equipo femenino de Hockey sobre cesped?", "Las Pumas", "Las Leonas", "Las Tigresas", 2],
    ["¿Que deporte practica -Paula Pareto-?", "Kendo", "Karate", "Judo", 3],
    ["¿Cual de estos clubes tiene mas copas libertadores?", "Boca Juniors", "River Plate", "Independiente", 3],
    ["¿Cual de estos clubes no es de Rosario?", "Central Cordoba", "Defensores del Norte", "Tiro Federal", 2],
    ["¿Cual de estos no fue un boxeador argentino?", "Bonavena", "Monzon", "Cargil", 3]];
    let pp4=[
        ["¿Cual de estos animales no hay en Argentina", "Leones", "Pinguinos", "Carpinchos", 1],
        ["Cual de estos es un Parque Nacional argentino?", "Los Glaciares", "Niagara", "San Pablo", 1],
        ["¿Cual de estos elementos abunda en Argentina?", "Diamantes", "Litio", "Tulipan", 2],
        ["Cuantos premios Nobel tiene Argentina?", "2", "5", "7", 2],
        ["¿Cual de estos alimentos produce Argentina en grandes cantidades?", "Soja", "Tulipanes", "Palta", 1]];

let boton1 = document.querySelector('#boton1')
boton1.addEventListener('click', () => { e=1;x1=x1+1;
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

      if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
      if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
       if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
      if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
      zz.innerHTML= `<div align="center"><p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> ` + pp1[x1][0] + `</p></div>`;console.log(d);console.log(" .. "+x1);
      zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp1[x1][1] +  `</b> // B)<b>` + pp1[x1][2] + `</b> // C)<b>` + pp1[x1][3] + `</b></p></div>`;
});

let boton2 = document.querySelector('#boton2')
boton2.addEventListener('click', () => { e=2;x2=x2+1;
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> ` + pp2[x2][0] + `</p></div>`;console.log(d);console.log(" .. "+x2);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp2[x2][1] +  `</b> // B)<b>` + pp2[x2][2] + `</b> // C)<b>` + pp2[x2][3] + `</b></p></div>`;
});

let boton3 = document.querySelector('#boton3')
boton3.addEventListener('click', () => { e=3;x3=x3+1;
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> ` + pp3[x3][0] + `</p></div>`;console.log(d);console.log(" .. "+x3);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp3[x3][1] +  `</b> // B)<b>` + pp3[x3][2] + `</b> // C)<b>` + pp3[x3][3] + `</b></p></div>`;
});

let boton4 = document.querySelector('#boton4')
boton4.addEventListener('click', () => { e=4;x4=x4+1;
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 

    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> ` + pp4[x4][0] + `</p></div>`;console.log(d);console.log(" .. "+x4);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br>A)<b>` + pp4[x4][1] +  `</b> // B)<b>` + pp4[x4][2] + `</b> // C)<b>` + pp4[x4][3] + `</b></p></div>`;
});

let ba = document.querySelector('#ba')
ba.addEventListener('click', () => { 
    if (e==1){z=x1; x0=pp1[z][4];};if (e==2){z=x2; x0=pp2[z][4];};if (e==3){z=x3; x0=pp3[z][4];};if (e==4){z=x4; x0=pp4[z][4];};
    if (y>0){console.log(e + "eee" + x0);
        if(x0!=1){
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
}});

let bb = document.querySelector('#bb')
bb.addEventListener('click', () => { 
    if (e==1){z=x1; x0=pp1[z][4];};if (e==2){z=x2; x0=pp2[z][4];};if (e==3){z=x3; x0=pp3[z][4];};if (e==4){z=x4; x0=pp4[z][4];};
    if (y>0){console.log(e + "eee" + x0);
        if(x0!=2){
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
}});

let bc = document.querySelector('#bc')
bc.addEventListener('click', () => { 
    if (e==1){z=x1; x0=pp1[z][4];};if (e==2){z=x2; x0=pp2[z][4];};if (e==3){z=x3; x0=pp3[z][4];};if (e==4){z=x4; x0=pp4[z][4];};
    if (y>0){console.log(e + "eee" + x0);
        if(x0!=3){
    Swal.fire({
        title: "INCORRECTO BOLUDO",
        text: '',
        icon: 'error',
        confirmButtonText: 'OK' }); dd0[d] = dd0[d] -50;} 
        else{
        Swal.fire({
            title: "CORRECTO GENIO",
            text: '',
            icon: 'success',
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
}});

let boton5 = document.querySelector('#boton5')
boton5.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 
    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> BONUS </p></div>`;console.log(d);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br><b> + 100 </b></p></div>`;
    if (y>0){console.log(e + "eee" + x0);
        if(y>1){
        Swal.fire({
            title: "BONUS",
            imageUrl: "b1.png",
            imageWidth: 250,
            imageHeight: 100,
            imageAlt: "Custom image",
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] + 100;}   
}});

let boton7 = document.querySelector('#boton7')
boton7.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 
    if(y==0){d=0}; if(y==1){d=1};if(y==2){d=2};if(y==3){d=3};
    if (y>=b & y<2*b) {d=y-b}; if (y>=2*b & y<3*b) {d=y-2*b}; if (y>=3*b & y<4*b) {d=y-3*b};
    if (y>=4*b & y<5*b) {d=y-4*b}; if (y>=5*b & y<6*b) {d=y-5*b};  if (y>=6*b & y<7*b) {d=y-6*b};
   if (y>=7*b & y<8*b) {d=y-7*b}; console.log("pregunta= " + y + "jugador " + d);y = y + 1;console.log(dd0);
   zz.innerHTML= `<div align="center"> <p style="font-size: 20px;"> <b>`+dd[d]+`:_ </b> BANCARROTA </p></div>`;console.log(d);
   zzx.innerHTML= `<div align="center"> <p style="font-size: 22px;"><br><b> - 100 </b></p></div>`;
    if (y>0){console.log(e + "eee" + x0);
        if(y>1){
        Swal.fire({
            title: "BANCARROTA",
            imageUrl: "b2.png",
            imageWidth: 250,
            imageHeight: 100,
            imageAlt: "Custom image",
            confirmButtonText: 'OK' 
        }); dd0[d] = dd0[d] - 100;}   
}});



let boton6 = document.querySelector('#boton6')
boton6.addEventListener('click', () => { 
    for (var i = 0; i < m; i++) {
        mar[i] = {name: dd[i], age: dd0[i]}; };
        console.log(mar);
        
        mar.sort((a, b) => b.age - a.age);
        
        console.log(mar);
    Swal.fire(
        "<p>El ganador es <br> <b>" + mar[0]["name"] + "</b> ; "+ mar[0]["age"] +" pts</p><br>"+
        "<p>El segundo puesto es <br> " + mar[1]["name"] + " ; "+ mar[1]["age"] +" pts</p>")
});
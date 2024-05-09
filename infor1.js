
let y=0;


let pp1=[
   ["¿En que año fue la Revolucion de Mayo?", "1810", "1916", "1853", 2],
   ["Cual de estos no fue presidente?"],
   ["¿En que año fue la Independencia Argentina?", "Brasil", "Francia", "Hungria", 1],
   ["Cual de estos si fue presidente?"],
   ["¿Quien cruzó los Andes?"],
   ["¿En que ciudad se firmo la Independencia Argentina?"],
   ["Cual de estos no fue presidente?"],
   ["¿En que ciudad se creo la bandera argentina?"],
   ["¿En que año fue la guerra de Malvinas?"],
   ["¿Quien creo la bandera argentina?"],
   ["Cual de estos si fue presidente?"],
   ["Cual de estas batallas ganó San Martin?"]
];



let boton1 = document.querySelector('#boton1')
boton1.addEventListener('click', () => { 
    let zz = document.getElementById("zz"); 
    let zzx = document.getElementById("zzx"); 
    zz.innerHTML= `<div align="center"> Pregunta: <br>` + pp1[y][0] + `</div>`;
    zzx.innerHTML= `<div align="center"> Opciones: <br>` + pp1[y][1] + ` // ` + pp1[y][2] + ` // ` + pp1[y][3] + `</div>`;
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
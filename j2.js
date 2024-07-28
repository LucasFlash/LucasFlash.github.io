
//FUNCIONES-->

//funcion suma de un lista. SUMA DE LOS ELEMNTOS DE UNA LISTA
function Suma(dg,n){let t=0;for (let j = 0; j < n; j++) {t=t+dg[j]}; return t;};

///funcion frecuencia de ciertos elementos en una lista. B1 ES EL VECTOR BASE, B2 ES EL QUE ANALIZO.
//ARROJA CADA VALOR DE B1 CON SU FRECUENCIA.
function frecx(b1, b2){
    let nb1= b1.length; let nb2= b2.length; let jar=[]; 
    for (let j = 0; j < nb1; j++) {jar[j]=[b1[j],0];}
    for (let j = 0; j < nb1; j++) {k=b1[j]; 
        for (let i = 0; i < nb2; i++) { if(b2[i]==k){jar[j][1]=jar[j][1]+1;}}}; return jar;};
   
   //FUncion para saber dhont. n= numero de escaños, d1 es 
   function dhont(m, d1) {    
   let pp=d1.length; np=m*(pp-1); let k=[{c:"ll", d:0}]; 
   for (let j = 0; j < pp; j++) { 
       l2=d1[j][1];l1=d1[j][0];
   for (let i = 0; i < m-1; i++) {
       k.push({c: l1, d: l2/(i+1)}); }};
     let co1 = k.slice();let co2 = k.slice(); let co3 = k.slice();
     co1.sort((a, b) => a.d - b.d);co2.sort((a, b) => b.d - a.d); co3.sort((a, b) => b.d - a.d);
   console.log(k);console.log("////");console.log(co1);console.log("////");console.log(co2);console.log("////");
   let cor=co3.splice(0,m); console.log(cor); let jor= []; for (let j = 0; j < m; j++)
        {jor[j]=cor[j]["c"];} console.log(jor); return jor;};
 //////////////

let c=0;let pp=["P. Conservador", "P. Popular", "P. Izquierda"];let pr=["Queens", "Brooklyn", "West"];
let d=pr.length; let n=pp.length;let lum=0;
let cs = ['A.P. Conservador', 'A.P. Popular', 'A.P. Izquierda',
    'B.P. Conservador', 'B.P. Popular', 'B.P. Izquierda', 'C.P. Conservador', 'C.P. Popular', 'C.P. Izquierda'];
  
    for (let j = 0; j < n*d; j++) {
        if (!localStorage.getItem(cs[j])) {
            localStorage.setItem((cs[j]), 0)}}

let votar = document.querySelector('#votar');
votar.addEventListener('click', () => {
    const candidatoSeleccionado = document.querySelector('input[name="candidate"]:checked');
    if (candidatoSeleccionado) {
        const candidato = candidatoSeleccionado.value;
        let votos = localStorage.getItem(candidato);
        votos = parseInt(votos) + 5;
        localStorage.setItem(candidato, votos);
        location.replace('index.html');
        alert('¡Voto registrado con éxito!');
    } else {
        alert('Por favor, seleccione un candidato.');
    }
});



    let m1 = document.querySelector('#m1');
    m1.addEventListener('click', () => { if(lum>0){Swal.fire({html: " VOTACION CERRADA "  });} 
    else{ window.location.href = 'port.html'; };});
    let m2 = document.querySelector('#m2');
    m2.addEventListener('click', () => { if(lum>0){Swal.fire({html: " VOTACION CERRADA "  });} 
    else{ window.location.href = 'port2.html'; };});
    let m3 = document.querySelector('#m3');
    m3.addEventListener('click', () => { if(lum>0){Swal.fire({html: " VOTACION CERRADA "  });} 
    else{ window.location.href = 'port3.html'; };});


//MIDE TAMAÑO LOCALSTORATE
function getLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += (localStorage[key].length + key.length) * 2; // clave + valor en bytes
        }
    } return total; }
function formatSizeUnits(bytes) {
    if (bytes >= 1048576) {
        return (bytes / 1048576).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
        return (bytes / 1024).toFixed(2) + ' KB';
    } else {
        return bytes + ' bytes';
    } }
let usedSpace = getLocalStorageSize(); console.log('Used space: ' + formatSizeUnits(usedSpace));/////


///Total de votos
let par=[];for (let j = 0; j < (n*d); j++) { par[j]=parseInt(localStorage.getItem(cs[j])) };
let tot=Suma(par,9);console.log(tot);console.log(par);
///

//cada fila de tt es la region y cada celda es el valor de cada partido
//ver catidad de votos por region. bOTON dISTRITO
let t0=[0, 0, 0];let tt=[t0, t0, t0]; let t_0=[0, 0, 0];let tp=[0, 0, 0];
let r1= document.querySelector('#r1');
r1.addEventListener('click', () => { 
    for (let j = 0; j < 3; j++) { t1=parseInt(localStorage.getItem(cs[j]));tt[0][j]=t1; tp[0]=tp[0]+t1;};
    for (let j = 3; j < 6; j++) { t2=parseInt(localStorage.getItem(cs[j]));tt[1][j-3]=t2; tp[1]=tp[1]+t2;};
    for (let j = 6; j < 9; j++) { t3=parseInt(localStorage.getItem(cs[j]));tt[2][j-6]=t3; tp[2]=tp[2]+t3;};
     Swal.fire({
html: " TOTAL: "+ (tp[0]+tp[1]+tp[2]) +`<br> - - - `+`<br> Queens: `+ tp[0]+`<br>Brooklyn: `+ tp[1]+`<br>West: `+ tp[2]+`<br>` });
t0=[0, 0, 0];tt=[t0, t0, t0]; t_0=[0, 0, 0];tp=[0, 0, 0];});
////

//BOTON PARA CERRAR VOTACION Y NO PODER INGRESAR A PESTAÑAS DE DISTRICTO
let r2= document.querySelector('#r2'); 
r2.addEventListener('click', () => { 
    let pass = prompt("Please enter your password" );
        if (pass == "1234") { lum=lum+1;Swal.fire({ html: " VOTACION CERRADA "})} 
         else{ Swal.fire({ html: " INCORRECTO, VOTACION SIGUE ABIERTA"})}});
////

/// ver toda la tabla de valores . tabla doble: partidos/votos
let r3 = document.querySelector('#r3');
r3.addEventListener('click', () => { 
    let pass = prompt("Please enter your password" ); 
    if (pass==1234) {
    for (let j = 0; j < 3; j++) { t1=parseInt(localStorage.getItem(cs[j]));tt[0][j]=t1; t_0[0]=t_0[0]+t1;};
    for (let j = 3; j < 6; j++) { t2=parseInt(localStorage.getItem(cs[j]));tt[1][j-3]=t2; t_0[1]=t_0[1]+t2;};
    for (let j = 6; j < 9; j++) { t3=parseInt(localStorage.getItem(cs[j]));tt[2][j-6]=t3; t_0[2]=t_0[2]+t3;};
    for (let j = 0; j < 3; j++) {
k1=parseInt(localStorage.getItem(cs[j]));k2=parseInt(localStorage.getItem(cs[3+j]));k3=parseInt(localStorage.getItem(cs[6+j]));
e0.innerHTML += pp[j] + "<br>";et.innerHTML += k1+k2+k3 + " -- <b>"+ Number((100*(k1+k2+k3)/tot).toFixed(2)) + " %</b><br>";
e1.innerHTML += k1 + " -- <b>"+ Number((100*k1/t_0[0]).toFixed(2)) + " %</b><br>";
e2.innerHTML += k2 + " -- <b>"+ Number((100*k2/t_0[1]).toFixed(2)) + " %</b><br>";
e3.innerHTML += k3 + " -- <b>"+ Number((100*k3/t_0[2]).toFixed(2)) + " %</b><br>";
} } else{ alert("ERROR")} }); 





let r41 = document.querySelector('#r41');
r41.addEventListener('click', () => { 
    let car=[[0,0],[0,0],[0,0]]; for (let j = 0; j < 3; j++) {car[j][0]= pp[j];car[j][1]= par[j];};let dar=car.slice();
     let rar1 = dhont(5, car); console.log(rar1);  let yt=frecx(pp,rar1); console.log(yt);for (let j = 0; j < 3; j++) {
     e1.innerHTML += pp[j] + " --> <b>"+ yt[j][1] +"</b><br>";};
 });

 let r42 = document.querySelector('#r42');
 r42.addEventListener('click', () => { 
     let car=[[0,0],[0,0],[0,0]]; for (let j = 0; j < 3; j++) {car[j][0]= pp[j];car[j][1]= par[j+3];};let dar=car.slice();
      let rar1 = dhont(10, car); console.log(rar1);  let yt=frecx(pp,rar1); console.log(yt);for (let j = 0; j < 3; j++) {
      e2.innerHTML += pp[j] + " --> <b>"+ yt[j][1] +"</b><br>";};
  });

  let r43 = document.querySelector('#r43');
  r43.addEventListener('click', () => { 
      let car=[[0,0],[0,0],[0,0]]; for (let j = 0; j < 3; j++) {car[j][0]=pp[j];car[j][1]= par[j+6];};let dar=car.slice();
       let rar1 = dhont(12, car); console.log(rar1);  let yt=frecx(pp,rar1); console.log(yt);for (let j = 0; j < 3; j++) {
       e3.innerHTML += pp[j] + " --> <b>"+ yt[j][1] +"</b><br>";};
   });


   
  let r5 = document.getElementById('r5')
  r5.addEventListener('click', () => {  
    let pass = prompt("Please enter your password" ); 
    if (pass==1234) {
    localStorage.clear();
    alert('LocalStorage ha sido vaciado');} else{ alert("ERROR")} });


console.log("000000");
 
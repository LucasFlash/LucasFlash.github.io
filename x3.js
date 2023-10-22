

let c;let t;

function Sal(a){ m = a.length;
let a1 = a.slice(); a1.sort((a, b) => b.c - a.c); let yy=[0, 0, 0];
if (a1[0]["n"]=='jxc'){yy[0]=2};if (a1[0]["n"]=='uxp'){yy[1]=2};if (a1[0]["n"]=='lla'){yy[2]=2};
if (a1[1]["n"]=='jxc'){yy[0]=1};if (a1[1]["n"]=='uxp'){yy[1]=1};if (a1[1]["n"]=='lla'){yy[2]=1};
 return yy;
}

function Cal(a,b){
  t = [
    { n: 'lla', c: 0 },{ n: 'jxc', c: 0 },
    { n: 'uxp', c: 0 },{ n: 'fit', c: 0 },
    { n: 'hnp', c: 0 },{ n: 'o1', c: 0 },
    { n: 'o2', c: 0 } ]; m = t.length;
  
  let a1 = a.slice(); c=a1;  let d; for (let j = 0; j < b; j++) { for (let i = 0; i < m; i++) {
  d = {n: c[i]["n"], c : c[i]["c"]/(j+2)};
c = c.concat(d);
}};let g = c.slice(); 
g.sort((a, b) => b.c - a.c); gg = g.slice(0,b);

for (let j = 0; j < m; j++) { d=a[j]["n"]; for (let i = 0; i < b; i++) { if(d==gg[i]["n"]){t[j]["c"]=t[j]["c"]+1} }};
return t;
};


let dr = [35, 12, 2, 3, 3, 9, 4, 4,
  3, 3, 2, 3, 5, 4, 2, 3,
  4, 3, 2, 2, 10, 4, 3, 5 ];;let tot=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(dr.length);
let divlux = document.getElementById("divlux");
fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => { 
                    let {id, nombre, ctd, d1, d2, d3} = nm; if(nm["id"]>0){ let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ];
                    gh1 = Cal(gh,dr[h1]);console.log(gh1);
                    tot[0]=tot[0]+gh1[0]["c"];tot[1]=tot[1]+gh1[1]["c"];tot[2]=tot[2]+gh1[2]["c"];
                    tot[3]=tot[3]+gh1[3]["c"];tot[4]=tot[4]+gh1[4]["c"];tot[5]=tot[5]+gh1[5]["c"];};
},

                    )})     .catch((error) => {  console.log(error)})
;
fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, n, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ]; let hgh = 0;
                    if(h1==-2){gh1 = [
                        { n: 'lla', c: 'LLA' },{ n: 'jxc', c: 'JXC' },
                        { n: 'uxp', c: 'UXP' },{ n: 'fit', c: 'FIT' },
                        { n: 'hnp', c: 'HNP' },{ n: 'o1', c: 'OTS' },
                        { n: 'TOTAL', c: 'TOTAL' } ]; };
                        if(h1==-1){gh1 = [
                            { n: 'lla', c: tot[0] },{ n: 'jxc', c: tot[1] },
                            { n: 'uxp', c: tot[2] },{ n: 'fit', c: tot[3] },
                            { n: 'hnp', c: tot[4] },{ n: 'o1', c: tot[5] },
                            { n: 'o2', c: tot[6] } ];
                             hgh=gh1[0]["c"] +gh1[1]["c"] +gh1[2]["c"] +gh1[3]["c"] +gh1[4]["c"] +gh1[5]["c"] ;};
                            if(h1>-1){gh1 = Cal(gh,dr[h1]); 
                                hgh=gh1[0]["c"] +gh1[1]["c"] +gh1[2]["c"] +gh1[3]["c"] +gh1[4]["c"] +gh1[5]["c"] ;}
                    
                    divlux.innerHTML += `
                    <table>
                                        <tbody>
                                       <tr>
                                         <th style="width: 10%;">${n}</th>
                                         <td>`+gh1[0]["c"] +`</td><td>`+gh1[1]["c"]+`</td><td>`+gh1[2]["c"]+
                                         `</td><td>`+gh1[3]["c"] +`</td><td>`+gh1[4]["c"]+`</td><td>`+gh1[5]["c"]+
                                         `</td></tr><br>
                                     </tbody></table>`} )}
                                     )    .catch((error) => {  console.log(error)})
;
const imagen1 = new Image();imagen1.src = "./img/lo1.png"; const imagen2 = new Image();imagen2.src = "./img/lo2.png"; 
const imagen3 = new Image();imagen3.src = "./img/lo3.png"; const imagen4 = new Image();imagen4.src = "./img/lo4.png"; 
const imagen5 = new Image();imagen5.src = "./img/lo5.png"; 

let tt=100/23269294; let p=[6895941, 914812, 6719042, 7352244, 642773];
 let pc=[(tt*p[0]).toFixed(2), (tt*p[1]).toFixed(2), (tt*p[2]).toFixed(2), (tt*p[3]).toFixed(2), (tt*p[4]).toFixed(2)];
 let g=[6895941, 914812, 6719042, 7352244, 642773];
 let gc=[6895941, 914812, 6719042, 7352244, 642773];
let Array1x = [
    

    {id:132, name:"Juntos x el Cambio", n:"Patricia Bullrich", p:p[0], pc:pc[0], img: imagen1.src = "./img/lo132.png", g:g[0], gc:[0]},
    {id:133, name:"Hacemos x Nuestro País", n:"Juan Schiaretti", p:p[1], pc:pc[1], img: imagen2.src = "./img/lo133.png", g:g[0], gc:[0]},
    {id:134, name:"Unión x la Patria",  n:"Sergio Massa",p:p[2], pc:pc[2], img: imagen1.src = "./img/lo134.png", g:g[0], gc:[0]},
    {id:135, name:"La Libertad Avanza", n:"Javier Milei", p:p[3], pc:pc[3], img: imagen2.src = "./img/lo135.png", g:g[0], gc:[0]},
    {id:136, name:"Fte de Izquierda y Trabajadores", n:"Myriam Bregman", p:p[4], pc:pc[4], img: imagen1.src = "./img/lo136.png", g:g[0], gc:[0]},
];
var table = new Tabulator("#example-table", {
    layout:"fitDataTable",
    height:"355",
    resizableColumnFit:true,
    data:Array1x,
    columns:[
        {title:".", field:"img", width:"70", formatter:"image", resizable:true},
        {title:"Partido", field:"name",width:"90", formatter:"textarea", resizable:true},
        {title:"Candidato", field:"n",width:"75", formatter:"textarea", resizable:true},
        {title:"V. PASO", field:"p", formatter:"textarea",resizable:true},
        {title:" % ", field:"pc",resizable:true},
        {title:"V. GRALES", field:"p", formatter:"textarea",resizable:true},
        {title:" % ", field:"pc",resizable:true},

    ],
});            
t0=[0, 0, 0];
fetch('../json/list1.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, n, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ]; 

                            if(h1>-1){gh1 = Sal(gh); 
                                t0[0]=t0[0]+gh1[0]; t0[1]=t0[1]+gh1[1]; t0[2]=t0[2]+gh1[2];
                                }
                            })}
                                     )    .catch((error) => {  console.log(error)})

let divlax = document.getElementById("divlax");
fetch('../json/list1.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, n, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ]; 
                    if(h1==-2){gh1 = [".JXC.", ".UXP.", ".LLA."]; };
                        if(h1==-1){gh1 = [t0[0], t0[1], t0[2] ];};
                            if(h1>-1){gh1 = Sal(gh); 
                                }
                    
                    divlax.innerHTML += `
                    <table>
                                        <tbody>
                                       <tr>
                                         <th style="width: 10%;">${n}</th>
                                         <td>`+gh1[0] +`</td><td>`+gh1[1]+`</td><td>`+gh1[2]+
                                         `</td></tr><br>
                                     </tbody></table>`} )}
                                     )    .catch((error) => {  console.log(error)})
                        


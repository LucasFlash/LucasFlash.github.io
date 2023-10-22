

let c;let t;

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
                    let {id, nombre, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ];
                    gh1 = Cal(gh,dr[h1]);console.log(gh1);
                    tot[0]=tot[0]+gh1[0]["c"];tot[1]=tot[1]+gh1[1]["c"];tot[2]=tot[2]+gh1[2]["c"];
                    tot[3]=tot[3]+gh1[3]["c"];tot[4]=tot[4]+gh1[4]["c"];tot[5]=tot[5]+gh1[5]["c"];
                  if(h1>22){ divlux.innerHTML += `
                  <table>
                  <tbody>
                  <tr>
                  <th style="width: 10%;">PARTIDO</th>
                  <td>LLA</td><td>JXC</td><td>UXP</td>
                  <td>FIT</td><td>HNP</td><td>Otros</td><td>Otos</td></tr><br>
                 <tr>
                   <th style="width: 10%;">TOTAL</th>
                   <td>`+tot[0] +`</td><td>`+tot[1]+`</td><td>`+tot[2]+
                   `</td><td>`+tot[3] +`</td><td>`+tot[4]+`</td><td>`+tot[5]+
                   `</td><td>`+tot[6] +`</td></tr><br>
               </tbody></table>`} },

                    )})     .catch((error) => {  console.log(error)})
;
fetch('../json/list.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, n, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'lla', c: nm["lla"] },{ n: 'jxc', c: nm["jxc"] },{ n: 'uxp', c: nm["uxp"] },
                    { n: 'fit', c: nm["fit"] },{ n: 'hnp', c: nm["hnp"] },{ n: 'o1', c: nm["o2"] },
                    { n: 'o2', c: nm["o2"] } ];
                    gh1 = Cal(gh,dr[h1]);
                    let hgh=gh1[0]["c"] +gh1[1]["c"] +gh1[2]["c"] +gh1[3]["c"] +gh1[4]["c"] +gh1[5]["c"] +gh1[6]["c"];
                    divlux.innerHTML += `
                    <table>
                                        <tbody>
                                       <tr>
                                         <th style="width: 10%;">${n}</th>
                                         <td>`+gh1[0]["c"] +`</td><td>`+gh1[1]["c"]+`</td><td>`+gh1[2]["c"]+
                                         `</td><td>`+gh1[3]["c"] +`</td><td>`+gh1[4]["c"]+`</td><td>`+gh1[5]["c"]+
                                         `</td><td>`+gh1[6]["c"] +`</td> </tr><br>
                                     </tbody></table>`} )}
                                     )    .catch((error) => {  console.log(error)})
                    


                        


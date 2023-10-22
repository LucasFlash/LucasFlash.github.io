


let c;let t;


function Cal(a,b){
  t = [
    { n: 'd1', c: 0 },{ n: 'd2', c: 0 },
    { n: 'd3', c: 0 },{ n: 'd4', c: 0 },
    { n: 'd5', c: 0 },{ n: 'd6', c: 0 } ];
  
  let a1 = a.slice(); c=a1;  let d; for (let j = 0; j < b; j++) { for (let i = 0; i < 6; i++) {
  d = {n: c[i]["n"], c : c[i]["c"]/(j+2)};
c = c.concat(d);
}};let g = c.slice(); 
g.sort((a, b) => b.c - a.c); gg = g.slice(0,b);

for (let j = 0; j < 6; j++) { d=a[j]["n"]; for (let i = 0; i < b; i++) { if(d==gg[i]["n"]){t[j]["c"]=t[j]["c"]+1} }};
return t;
};

let dr = [22, 50, 50, 3, 3, 9, 4, 4,
3, 3, 2, 3, 5, 4, 2, 3,
4, 3, 2, 2, 10, 4, 3, 5 ];let tot=[0, 0, 0, 0, 0, 0];
console.log(dr.length);
let divlux = document.getElementById("divlux");
fetch('../json/list1.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'd1', c: nm["d1"] },{ n: 'd2', c: nm["d2"] },{ n: 'd3', c: nm["d3"] },
                    { n: 'd4', c: nm["d4"] },{ n: 'd5', c: nm["d5"] },{ n: 'd6', c: nm["d6"] } ];
                    gh1 = Cal(gh,dr[h1]);console.log(gh1);
                    tot[0]=tot[0]+gh1[0]["c"];tot[1]=tot[1]+gh1[1]["c"];tot[2]=tot[2]+gh1[2]["c"];tot[3]=tot[3]+gh1[1]["c"];
                    tot[4]=tot[4]+gh1[4]["c"];tot[5]=tot[5]+gh1[5]["c"];
                  if(h1>1){ divlux.innerHTML += `
                  <table>
                  <tbody>
                 <tr>
                   <th>TOTAL</th>
                   <td>`+tot[0] +`</td><td>`+tot[1]+`</td><td>`+tot[2]+
                   `</td><td>`+tot[3] +`</td><td>`+tot[4]+`</td><td>`+tot[5]+
                   `</td> </tr><br>
               </tbody></table>`} },

                    )})     .catch((error) => {  console.log(error)})
;
fetch('../json/list1.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((nm) => {
                    let {id, nombre, ctd, d1, d2, d3} = nm; let h1=nm["id"]-1;  
                    let ff = nm["ctd"]; let gh=[ { n: 'd1', c: nm["d1"] },{ n: 'd2', c: nm["d2"] },{ n: 'd3', c: nm["d3"] },
                    { n: 'd4', c: nm["d4"] },{ n: 'd5', c: nm["d5"] },{ n: 'd6', c: nm["d6"] } ];
                    gh1 = Cal(gh,dr[h1]);
                    divlux.innerHTML += `
                    <table>
                                        <tbody>
                                       <tr>
                                         <th>${nombre}</th>
                                         <td>`+gh1[0]["c"] +`</td><td>`+gh1[1]["c"]+`</td><td>`+gh1[2]["c"]+
                                         `</td><td>`+gh1[3]["c"] +`</td><td>`+gh1[4]["c"]+`</td><td>`+gh1[5]["c"]+
                                         ` </tr><br>
                                     </tbody></table>`} )}
                                     )    .catch((error) => {  console.log(error)})
                    


                        


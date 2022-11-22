
let grup = [
    {i1:"Qatar", i2:"Ecuador", i3:"Senegal", i4:"Paises Bajos"},
    {i1:"Inglaterra", i2:"Iran", i3:"USA", i4:"Gales"},
    {i1:"Argentina", i2:"Arabia Saudi", i3:"Mexico", i4:"Polonia"},
    {i1:"Dinamarca", i2:"Tunez", i3:"Francia", i4:"Australia"},
    {i1:"Alemania", i2:"Japon", i3:"España", i4:"Costa Rica"},
    {i1:"Marruecos", i2:"Croacia", i3:"Belgica", i4:"Canada"},
    {i1:"Suiza", i2:"Camerun", i3:"Brasil", i4:"Serbia"},
    {i1:"Uruguay", i2:"Corea del Sur", i3:"Portugal", i4:"Ghana"},

]

let A = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let B = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let C = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let D = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let E = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let F = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let G = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];
let H = [2, 1, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0];



let CA1 = [0, 0, 0, 0, 0, 0, 0];
let CA2 = [0, 0, 0, 0, 0, 0, 0];
let CA3 = [0, 0, 0, 0, 0, 0, 0];
let CA4 = [0, 0, 0, 0, 0, 0, 0];

    c1 = grup[0];  
    pa1 = c1["i1"]; 
    pa2 = c1["i2"];
    pa3 = c1["i3"];
    pa4 = c1["i4"];
    

    let res0 = document.getElementById('res0')
    res0.innerHTML=
    pa1+" "+A[0]+" vs "+pa2+" "+A[1]+" /// "+
    pa3+" "+A[2]+" vs "+pa4+" "+A[3]+" /// "+
    pa1+" "+A[4]+" vs "+pa3+" "+A[5]+" /// "+
    pa2+" "+A[6]+" vs "+pa4+" "+A[7]+" /// "+
    pa1+" "+A[8]+" vs "+pa4+" "+A[9]+" /// "+
    pa2+" "+A[10]+" vs "+pa3+" "+A[11]
    ;
   
    if (parseInt(A[0])>parseInt(A[1])) {CA1[0]=CA1[0]+1; CA2[1]=CA2[1]+1}
    else { if (parseInt(A[0])<parseInt(A[1])) {CA2[0]=CA2[0]+1; CA1[1]=CA1[1]+1}
    else { CA2[0]=CA2[0]+1 } }
   
    let t1 = document.getElementById('t1')
    t1.innerHTML=
    CA1;



    c1 = grup[1];  
    pa1 = c1["i1"]; 
    pa2 = c1["i2"];
    pa3 = c1["i3"];
    pa4 = c1["i4"];
    
  
    let res1 = document.getElementById('res1')
    res1.innerHTML=
    pa1+" "+B[0]+" vs "+pa2+" "+B[1]+" /// "+
    pa3+" "+B[2]+" vs "+pa4+" "+B[3]+" /// "+
    pa1+" "+B[4]+" vs "+pa3+" "+B[5]+" /// "+
    pa2+" "+B[6]+" vs "+pa4+" "+B[7]+" /// "+
    pa1+" "+B[8]+" vs "+pa4+" "+B[9]+" /// "+
    pa2+" "+B[10]+" vs "+pa3+" "+B[11]
    ;
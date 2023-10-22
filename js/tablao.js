




var table = new Tabulator("#example-table", {
    layout:"fitColumns",
    columns:[
        {title:"Name", field:"name", width:100}, //column has a fixed width of 100px;
        {title:"Age", field:"age", widthGrow:1}, //column will be allocated 1/5 of the remaining space
        {title:"Color", field:"color", widthGrow:3}, //column will be allocated 3/5 of the remaining space
        {title:"location", field:"location"}, // column has a default widthGrow of 1 and will be allocated 1/5 of the remaining space
    ]
});
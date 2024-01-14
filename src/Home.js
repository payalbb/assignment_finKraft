import React from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 

function Home() {
  const columnDefs= [
    { headerName: "mission", field: "mission" },
    { headerName: "company", field: "company",}, 
    {headerName: "location",field: "location",},
    { headerName: "date", field: "date" },
    { headerName: "time", field: "time" },
    { headerName: "rocket", field: "rocket",}, 
    {headerName: "price",field: "price",},
    { headerName: "successful", field: "successful" },
    ]
  const rowData= []

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("https://www.ag-grid.com/example-assets/space-mission-data.json").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Mission Details</h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
 
}

export default Home;
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let contador_1=0;
let contador_2=0;
let contador_3=0;
let contador_4=0;
let contador_5=0;
let contador_6=0;

setInterval(Counter_React,1000);

function Counter_React(){
    
            contador_1++;
        if(contador_1>9){
            contador_2++;
            contador_1=0;
        
        }else if(contador_2>9){
            contador_3++;
            contador_2=0;
        }else if(contador_3>9){
            contador_4++;
            contador_3=0;
    
        }else if(contador_4>9){
            contador_5++;
            contador_4=0;
    
        }else if(contador_5>9){
            contador_6++;
            contador_5=0;
        }
        //render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home contador_1={contador_1} contador_2={contador_2} contador_3={contador_3} contador_4={contador_4} contador_5={contador_5} contador_6={contador_6}/>)}


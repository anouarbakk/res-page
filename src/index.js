import './styles.css';
import { home } from "./home.js";
import { about } from "./about.js";
import { contact } from './contact.js';
let b1=document.getElementById('button1');
    b1.innerText="Home";
    let b2=document.getElementById('button2');
    b2.innerText="About";
    let b3=document.getElementById('button3');
    b3.innerText="Contact us";
    let content=document.getElementById("content");
    b1.addEventListener('click',()=>{
        content.innerHTML="";
        home();
    });
    b2.addEventListener('click',()=>{
        content.innerHTML="";
        about();
    });
    b3.addEventListener('click',()=>{
        content.innerHTML="";
        contact();
    });
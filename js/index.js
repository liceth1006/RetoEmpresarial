import careers from "./careers.js";
import hamburgerMenu from "./menu_hamburguer.js";
import slider from "./slider.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
  hamburgerMenu(".panel-btn",".navbar",".nav-item a");
  slider();
  careers();  
});

import header from '../components/navbar.js'

let header_div=document.getElementById("ps_header");
header_div.innerHTML=header();

import {footer} from '../components/footer.js';

let footer_div=document.getElementById("ps_footer");
footer_div.innerHTML=footer();

// Import navbar popup

import {popup_display} from "../components/navbar.js";
let popup=document.getElementById("ps_popup");
popup.innerHTML=popup_display();


let pickup=document.getElementsByClassName("ps_nav-bottom")[0];
// console.log(pickup);
pickup.addEventListener("click",function(){
    
    popup.style.display="block";
})

let span = document.getElementsByClassName("close")[0]
span.addEventListener("click",function(){
    popup.style.display="none";
})

// let display = document.getElementById("ps_footer")
// display.innerHTML = footer()

const append_data=async()=>{
  let data_ls_cart=JSON.parse(localStorage.getItem("pc_prod"))||[]

let div=document.getElementById("pc_added_product");
div.innerHTML=null;
    data_ls_cart.forEach((el,index)=>{
  
    let pc_div=document.createElement("div")
 let img=document.createElement("img");
    img.src=el.img;
    img.id="pc_img_cartpage"
    let p_title=document.createElement("p")
    p_title.innerText=el.title;
    let p_cal=document.createElement("p")
    p_cal.innerText=`Calories:${el.cal}`
    let p_price=document.createElement("p")
    p_price.innerText=`Price:${ el.price}`;
    let btn=document.createElement("button")
    btn.innerText="REMOVE"
    btn.id="pc_btn_cart"
    btn.addEventListener("click",function(){

      remove(index)
        
     
    })
    pc_div.append(img,p_title,p_cal,p_price,btn)
  div.append(pc_div)
    })
      
    
    }
    
    
    
    append_data()

function remove(index){
        let data=JSON.parse(localStorage.getItem("pc_prod"))||[]
        let newData=data.filter(function (el,i){
                return i !== index;
        }) 
        localStorage.setItem("pc_prod",JSON.stringify(newData));
        append_data();
      }
// let count=0;

// function count(){
//       document.getElementById("pc_plus")
//       count++
//       document.getElementById("pc_quantity").innerText=count;
// }
//       // // console.log("fun check")
//       //      }
//       //      function mydel(event){
//       //       event.target.parentNode.remove()
//       //       count--
           
//       //       document.querySelector("#total-employee").innerText=count
           
//       //      }


    
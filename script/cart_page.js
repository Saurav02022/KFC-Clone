


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
        // event.target.parentNode.remove();
        // data_ls_cart.splice(i,1)
        // localStorage.setItem("pc_prod",JSON.stringify(data_ls_cart))
     
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




//     let data_ls_cart_2=JSON.parse(localStorage.getItem("pc_prod_"))||[]
// const append_data_2=async(data_ls_cart_2)=>{
//     data_ls_cart.forEach((el,i)=>{
//     let div=document.getElementById("pc_added_product_2");
//     div.innerHTML=null;
    
//  let img=document.createElement("img");
//     img.src=el.img;
//     img.id="pc_img_cartpage"
//     let p_title=document.createElement("p")
//     p_title.innerText=el.title;
//     let p_cal=document.createElement("p")
//     p_cal.innerText=`Calories:${el.cal}`
//     let p_price=document.createElement("p")
//     p_price.innerText=`Price:${ el.price}`;
//     let btn=document.createElement("button")
//     btn.innerText="REMOVE"
//     btn.id="pc_btn_cart"
//     btn.addEventListener("click",function(){
//         // event.target.parentNode.remove();
//         // data_ls_cart.splice(i,1)
//         localStorage.setItem("pc_prod_2",JSON.stringify(data_ls_cart_2))
     
//     })
//   div.append(img,p_title,p_cal,p_price,btn)
//     })
      
    
//     }
    
    
    
//     append_data(data_ls_cart_2)


    // let remove=document.createElement("button")
    // remove.innerText="Remove Item"
    // remove.style.width="100px"
    // remove.style.height="25px"
    // remove.style.marginTop="20px"
    // remove.style.borderRadius = "10px";
    // remove.style.borderColor="gray"
    // remove.style.margin="auto"
    // remove.addEventListener("click",function(){
    //   event.target.parentNode.remove();
    //   orders.splice(i,1)
    //   localStorage.setItem("cart-items",JSON.stringify(orders))
    // })

   
          
  

    // function remove(index){
    //     let data=JSON.parse(localStorage.getItem("pc_prod"))||[]
    //     let newData=data.filter(function (el,i){
    //             return i !== index;
    //     }) 
    //     localStorage.setItem("pc_prod",JSON.stringify(newData));
    //     append_data();
    //   }
      


    //   let btn=document.createElement("button")
    //        btn.innerText='Remove' 
    //        btn.addEventListener("click",function(){
    //         remove(index)
    
    //        })
    //         div.append(img,c,p,g,s,btn)
    //         container.append(div)
            
    //     })
    // }
    // append()

    
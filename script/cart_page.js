




let data=JSON.parse(localStorage.getItem("pc_prod"))||[]
const append_data=async(data)=>{
    data.forEach((el)=>{
    let div=document.getElementById("pc_added_product");
    
 let img=document.createElement("img");
    img.src=el.img;
    img.id="pc_img_cartpage"
    let p_title=document.createElement("p")
    p_title.innerText=el.title;
    let p_cal=document.createElement("p")
    p_cal.innerText=`Calories:${el.cal}`
    let p_price=document.createElement("p")
    p_price.innerText=`Price:${ el.price}`;
  
  div.append(img,p_title,p_cal,p_price)
    })
      
    
    }
    append_data(data)
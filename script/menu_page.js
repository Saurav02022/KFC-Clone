let features=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandtendersmeal?q=75",
    title:"Touchdown Tenders & Sandwiches Meal",
    cal: "4700-7430",
    price:"1200"
},
// {
//     img:"https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandsidesmeal?q=75",
//     title:"Sandwiche Tailgate Bundle",
//     cal:"3000-4230",
//     price:"700" 
// },
// {
//     img:"https://digitaleat.kfc.com/menus/image/bare/kfc-2DTCombo?q=75",
//     title:"2 pc. Drum & Thigh Combo",
//     cal:"550-1100",
//     price:"500" 
// },
]


let data_ls=JSON.parse(localStorage.getItem("pc_prod"))||[]
let pc_product_div=document.getElementById ("pc_product");
let display=(data,display_data)=>{
    display_data.innerHTML=null;
    data.forEach(el => {
      let div=  document.createElement("div");
    
      div.id="pc_div"
      div.addEventListener("click",function(){
          data_ls.push(el)
          localStorage.setItem("pc_prod",JSON.stringify(data_ls))
      })
      let img=document.createElement("img");
      img.src=el.img;
      img.id="pc_img"
      let p_title=document.createElement("p")
      p_title.innerText=el.title;
      let p_cal=document.createElement("p")
      p_cal.innerText=`Calories:${el.cal}`
      let p_price=document.createElement("p")
      p_price.innerText=`Price:${ el.price}`;
    let btn=document.createElement("button")
    btn.innerText="ADD"
      div.append(img,p_title,p_cal,p_price,btn)
    display_data.append(div)
    });
    
}
display(features,pc_product_div)
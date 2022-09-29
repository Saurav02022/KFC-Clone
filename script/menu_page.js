let data_ls_2=JSON.parse(localStorage.getItem("pc_prod_2"))||[]

let data_ls_3=JSON.parse(localStorage.getItem("pc_prod"))||[]

let data_ls_bucket=JSON.parse(localStorage.getItem("pc_prod"))||[]

let data_ls_bucket_2=JSON.parse(localStorage.getItem("pc_prod_bucket_2"))||[]

let data_ls_bucket_3=JSON.parse(localStorage.getItem("pc_prod"))||[]

let display=(data,display_data)=>{

    display_data.innerHTML=null;

    data.forEach(el => {

      let div=  document.createElement("div");
      div.id="pc_div"

      let h1=document.createElement("h1")
      h1.innerText="features"
      h1.id="pc_h1"

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
    btn.id="pc_btn"
    btn.addEventListener("click",function(){
        data_ls.push(el)
        localStorage.setItem("pc_prod",JSON.stringify(data_ls))
    })
    
      div.append(h1,img,p_title,p_cal,p_price,btn)
    display_data.append(div)
    });
    
}

//for secnd and third product

let display_two=(data_two,display)=>{

    data_two.forEach(el => {
      let div_two=  document.createElement("div");
    
      div_two.id="pc_div_2"
     
      let image=document.createElement("img");
      image.src=el.img;
      console.log(image)
      image.id="pcimg"
      let title=document.createElement("p")
      title.innerText=el.title;
      console.log(title)
      let cal=document.createElement("p")
      cal.innerText=`Calories:${el.cal}`
      console.log(cal)
      let price=document.createElement("p")
      price.innerText=`Price:${ el.price}`;
      console.log(price)
    let btn_2=document.createElement("button")
    btn_2.innerText="ADD"
    btn_2.id="pc_btn_2"
    btn_2.addEventListener("click",function(){
        data_ls_2.push(el)
        localStorage.setItem("pc_prod_2",JSON.stringify(data_ls_2))
    })
    console.log(btn_2)
    div_two.append(image,title,cal,price,btn_2)
    console.log(div_two)
     display.append(div_two)
     console.log(display)
    });
    
}

let features=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandtendersmeal?q=75",
    title:"Touchdown Tenders & Sandwiches Meal",
    cal: "4700-7430",
    price:"1200"
}];

let pc_product_div=document.getElementById ("pc_product");

display(features,pc_product_div)

let features_2=[ {
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandsidesmeal?q=75",
    title:"Sandwiches Tailgate Bundle",
    cal:"3000-4230",
    price:"700" 
},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-2DTCombo?q=75",
    title:"2 pc. Drum & Thigh Combo",
    cal:"550-1100",
    price:"500" 
},
];

let pc_product_div_2=document.getElementById ("pc_product_2");

display_two(features_2,pc_product_div_2)

let features_3=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-2pcBigBox?q=75",
   title:"2 pc. Drum & Thigh Big Box",
    cal:550-1400,
    price:1000,

},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-MacCheeseBowl?q=75",
   title:"Mac & Cheese Bowl",
    cal:580-700,
    price:900,

},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-MacCheeseBowlSideDrink?q=75",
   title:"Mac & Cheese Bowl Combo",
    cal:980-1400,
    price:1100,

}
]

let pc_product_div_3=document.getElementById ("pc_product_3");

display_two(features_3,pc_product_div_3)

let bucket=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-8pcBucketMealStandard?q=75",
    title:"8pc. Meal",
    cal:2380-4400,
    price:2100,
}]

let pc_product_div_bucket=document.getElementById ("pc_product_bucket");

display(bucket,pc_product_div_bucket)

let bucket_2=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-12pcBucketMealStandard?q=75",
    title:"12pc Meal (Variety)",
    cal:"3400-7230",
    price:"3000" 
},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-12pcBucketMealDark?q=75",
    title:"12pc Meal (Drum & Thigh",
    cal:"3550-6800",
    price:"3500" 
},

]

let pc_product_div_bucket_2=document.getElementById ("pc_product_bucket_2");

display_two(bucket_2,pc_product_div_bucket_2)

let bucket_3=[{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-16pcBucketMealStandard?q=75",
   title:"16pc Meal (Variety",
    cal:550-1400,
    price:1000,

},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-8pcFamilyFillUpDark?q=75",
   title:"8pc. Fill Up",
    cal:3480-4400,
    price:1000,

},
{
    img:"https://digitaleat.kfc.com/menus/image/bare/kfc-8pcFamilyFillUpStandard?q=75",
   title:"8pc. Fill Up",
    cal:3480-4400,
    price:2100,


}]

let pc_product_div_bucket_3=document.getElementById ("pc_product_bucket_3");

display_two(bucket_3,pc_product_div_bucket_3)



let data_ls=JSON.parse(localStorage.getItem("pc_prod"))||[]











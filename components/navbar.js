function header(){
    return `<div class="ps_top">
        <img src="https://i.ibb.co/XVhZh7M/nav.png" alt="lines">
    </div>
    <div id="ps_navbar">
        <div class="ps_box1">
            <a href="index.html"><img class="ps_img_logo" src="https://i.ibb.co/kGXHQ82/nav1.png" alt="KFC Logo"></a>
            <a href="">Menu</a>
            <a href="">Careers</a>
            <a href="">About</a>
            <a href="">Find a KFC®</a>
        </div>
        <div class="ps_box2">
            <a href="" id="ps_btn_property"><button id="ps_btn-class">Start Order</button></a>
            <a href="" id="ps_account_id"><i class="fas fa-user-circle fa-2x icon-border fas_size"></i></a>
            <a href="" id="ps_cart_id"> <i class="fas fa-shopping-bag fa-2x "></i></a>              
        </div>
    </div>
    <div class="ps_nav-bottom">
        <div class="ps_location"><i class="fas fa-map-marker-alt"></i></div>
        <div class="ps_para">Start an Order for Pickup or Delivery</div>
        <!-- <a href=""><i class="fas fa-caret-down"></i></a>  -->
    </div>
`
}


export default header;

const popup_display=()=>{
    return `<div id="ps_topbar">START YOUR ORDER
    <span class="close">&times;</span>
</div>
<h2>LET'S GET STARTED. WOULD YOU LIKE PICKUP OR DELIVERY?</h2>
<p>Menu availability and pricing may vary between order types.</p>
<div id="ps_order">
    <div id="ps_pickup">
        <img src="https://i.ibb.co/xzwZ8RP/bag.jpg" alt=""><br>
        <button>QUICK PICK-UP</button>
    </div>
    <div id="ps_or">or</div>
    <div id="ps_delivery">
        <img src="https://i.ibb.co/QkhkQ72/delivery-vehicle.jpg " alt=""><br>
        <button>DELIVERY</button>
    </div>
</div>`
}
export {popup_display};
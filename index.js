//------------------------------------
//creating portfolio tabbed component
//============================================

const p_btns =document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elem=document.querySelectorAll(".img-overlay");


p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked = e.target;
    p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    //to find the num in data attr
    const btn_num= p_btn_clicked.dataset.btnNum;
    
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((curElem)=> curElem.classList.add("p-image-not-active"))

    img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));
   
})



//------------------------------------
//creating responsive navbar tabbed component
//============================================
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerELem = document.querySelector(".header");


mobile_nav.addEventListener("click",()=>{
    headerELem.classList.toggle('active');
})



//------------------------------------
//creating sticky navbar tabbed component
//============================================
const heroSection= document.querySelector(".section-hero")
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    !ent.isIntersecting
    ?document.body.classList.add("sticky")
    :document.body.classList.remove("sticky")

},{
    root:null,
    threshold:0,
})

observer.observe(heroSection);



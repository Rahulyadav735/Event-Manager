let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
}

var swiper = new Swiper(".home-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
    ,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    }
  });
var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      700:{
        slidesPerView:2,
      },
      1050:{
        slidesPerView:3,
      },
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    }
  });

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active'); 
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  btn.onclick =() =>{
    let color = btn.style.backgroundColor;
    document.querySelector(':root').style.setProperty('--main-color',color);
  }
  console.log('hello');
});

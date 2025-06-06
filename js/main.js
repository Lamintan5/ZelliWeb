// Scroll Animation
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var headerContainers = document.querySelectorAll(".dropdown__container");
    header.classList.toggle("sticky", window.scrollY > 0);

    headerContainers.forEach(function(headerContainer) {
        headerContainer.classList.toggle("sticky", window.scrollY > 0);
    });
    
});

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");



const appearOptions = {
    rootMargin: "0px 0px -250px 0px",
    threshold: 0,
};

const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
}); 

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

window.addEventListener('scroll', reveal);
        function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
  dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
      dropdownButton.addEventListener('click', () =>{
         const showDropdown = document.querySelector('.show-dropdown')
         toggleItem(item)
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 const toggleItem = (item) =>{
     const dropdownContainer = item.querySelector('.dropdown__container')
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 const removeStyle = () =>{
     if(mediaQuery.matches){
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)


 document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-content");
    const leftButton = document.querySelector(".button--skoll.left");
    const rightButton = document.querySelector(".button--skoll.right");

    const scrollAmount = 320; // Amount to scroll (equal to card width + gap)

    rightButton.addEventListener("click", () => {
        cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftButton.addEventListener("click", () => {
        cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        toTop.style.display = "block";
    }else {
        toTop.style.display = "none";
    }
})

const toggleBtn = document.querySelector('.nav4');
const Navlinks = document.querySelector('.nav2');

toggleBtn.addEventListener("click", function (){
    if(Navlinks.classList.contains("active")){
        Navlinks.classList.remove("active");
    }else{
        Navlinks.classList.add("active")
    }

})
// close navigation links on scroll
window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        Navlinks.classList.remove("active");
    }
})
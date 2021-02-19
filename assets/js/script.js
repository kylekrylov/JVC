const accordion = document.getElementsByClassName('item-benefits-list');
for (i = 0 ; i<accordion.length; i++){
   accordion[i].addEventListener('click',function(){
      this.classList.toggle('active')
   })
};
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
window.onscroll = function() {
   let scrollElem = document.getElementById("scrollToTop");
   if (window.scrollY > document.documentElement.clientHeight) {
      scrollElem.style.opacity = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
};
let timeOut;
function goUp() {
   let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',10);
   } else clearTimeout(timeOut);
};

// function changeImage(image){
//    document.querySelector('.block-jvc__main-img').src = image;
// }

const images = document.querySelectorAll('.block-jvc__main-img');
images.forEach( ( image ) => {
  function changeImage( newImage ){
    image.src = newImage;
   }
});
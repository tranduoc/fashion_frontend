const lightBoxContainer_po=document.querySelector(".lightbox");
const lightboxImage_po =document.querySelector(".lightbox-img");
const counter_po=document.querySelector(".lightbox-counter");
const prevButton_po=document.querySelector(".fa-angle-left");
const nextButton_po=document.querySelector(".fa-angle-right");
const lightboxText_po=document.querySelector(".lightbox-text");
const portfolioItems_po=document.querySelector(".portfolio-items").children;
let index_po;
let imgSrc;
lightBoxContainer_po.addEventListener("click",function(){
  if(event.target!=lightboxImage_po && event.target!==prevButton_po && event.target!==nextButton_po){
    lightBox();
  }
})
for(let i =0; i<portfolioItems_po.length;i++) {
  portfolioItems_po[i].querySelector(".overlay_po").addEventListener("click",function(){
    index_po=i;
    changeImage();
    lightBox();
  })
}

function next_po() {
  if(index_po==portfolioItems_po.length-1){
    index_po=0;
  }else {
    index_po++;

  }
  changeImage();

}


function prev_po() {
  if(index_po==0) {
    index_po=portfolioItems_po.length-1;

  }else {
    index_po--;

  }
  changeImage();
}



function lightBox() {
  lightBoxContainer_po.classList.toggle("open");
}
function changeImage() {
  imgSrc=portfolioItems_po[index_po].querySelector("img").getAttribute("src");
  lightboxImage_po.src=imgSrc;
  counter_po.innerHTML=(index_po+1)+" of "+portfolioItems_po.length;
  lightboxText_po.innerHTML=portfolioItems_po[index_po].querySelector("h3").innerHTML;
}
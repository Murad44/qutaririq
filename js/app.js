var img=[
    "image/slider1.jpg",
    "image/slider2.jpg",
    "image/slider3.jpg",
    // "image/4.jpg",
]
var sliderImg=document.querySelector(".slider img")
sliderImg.src=img[0]
var nextbtn=document.querySelector(".next")
var prevbtn=document.querySelector(".prev")
var c=0;
nextbtn.onclick=function(){
    mySlider(c+1)
}
prevbtn.onclick=function(){
    mySlider(c-1)
}
function mySlider(a){
    c=(a+img.length)%img.length
    sliderImg.src=img[c]
}

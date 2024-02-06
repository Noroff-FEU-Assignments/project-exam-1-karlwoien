/* Carousel for both home and about page
Inspired by Medium: https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3*/



// Slideshow functionality

export function slideshow () {
    const previous = document.querySelector(".left-btn")
    const next = document.querySelector(".right-btn")
    const list = document.querySelector(".carousel-items")
    const itemWidth = 400
    const padding = 10
    
    previous.addEventListener("click",()=>{
      list.scrollLeft -= (itemWidth + padding)
    })
    next.addEventListener("click",()=>{
      list.scrollLeft += (itemWidth + padding)
    })
    
}


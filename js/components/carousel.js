/* Carousel for both home and about page
Inspired by Medium: https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3*/



// Slideshow functionality

export function slideshow () {
    const previous = document.getElementById('left-btn')
    const next = document.getElementById('right-btn')
    const list = document.getElementById('carousel-items')
    const itemWidth = 400
    const padding = 10
    
    previous.addEventListener('click',()=>{
      list.scrollLeft -= (itemWidth + padding)
    })
    next.addEventListener('click',()=>{
      list.scrollLeft += (itemWidth + padding)
    })
    
}


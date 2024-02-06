/* Carousel for both home and about page*/



// JS functionality


export function slideshow () {
    const previous = document.getElementById('left-btn');
    const next = document.getElementById('right-btn');
    const list = document.getElementById('carousel-items');
    
    let itemWidth = 0;

    const items = list.querySelectorAll(".carousel-items");
    items.forEach (item => {
        itemWidth += item.offsetWidth;
    })

    previous.addEventListener('click', ()=> {
        list.scrollLeft -= itemWidth;
    })

    next.addEventListener ('click', ()=> {
        console.log ("new button works")
        list.scrollLeft += itemWidth;
    })
}
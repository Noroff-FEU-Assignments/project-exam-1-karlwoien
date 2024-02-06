import { getPosts } from "../api/getPosts.js";
import { slideshow } from "../components/carousel.js";


// Create carousel card for blog posts
async function carouselCard (postData) {
 
    postData.forEach (function (postData){
    const card = document.createElement ("a");
    card.href = '/blog/blog-post/?id=' + postData.id;

    const img = document.createElement ("img");
    img.src = postData._embedded["wp:featuredmedia"][0].source_url;
    card.append(img);

    const title = document.createElement("h3")
    title.textContent = postData.title.rendered;
    card.append (title);

    const date = document.createElement ("p")
    date.textContent = "Posted: " + postData.date;
    card.append (date);

    document.querySelector(".carousel-items").append(card);
    })
}

// Get latest blog posts

async function getLatestPosts () {

   try {
       const card = await getPosts();
       carouselCard(card);
   } catch (error) {
       console.log("Something wrong with carousel")
   }
}

// Render Carousel to page
export async function carousel () {
    getLatestPosts();
    slideshow();
}


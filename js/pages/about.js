import { getPosts } from "../api/getPosts.js";


// Create carousel card for blog posts
async function carouselCard (postData) {
 
    const card = document.createElement ("a");
    card.href = '/blog/blog-post/?id=' + postData.id;

    const img = document.createElement ("img");
    img.classList.add("blog-grid-posts");
    if (
         postData._embedded &&
         postData._embedded["wp:featuredmedia"] &&
         postData._embedded["wp:featuredmedia"][0]
    ) {
         img.src = postData._embedded["wp:featuredmedia"][0].source_url;
    } else {
      console.log("The blog post need an image");
    }
    card.append(img);

    const title = document.createElement("h3")
    title.textContent = postData.title.rendered;
    card.append (title);

    document.querySelector(".carousel-items").append(card);

}


async function renderPosts (posts) {
   posts.forEach(carouselCard);
}


// Get latest blog posts

async function getLatestPosts () {

   try {
       const card = await getPosts();
       const threePosts = card.slice (0,3);
       renderPosts(threePosts);
       
   } catch (error) {
       console.log("Something wrong with carousel")
   }
}

// Render Carousel to page
export async function carousel () {
    getLatestPosts();
}






import { getPosts } from "../api/getPosts.js";

let totalPosts = 0;
const postPerPage = 9;


// Create card for blog posts
async function createPostCard (postData) {

    const card = document.createElement ("a");
    card.href = '/blog/blog-post/?id=' + postData.id;

    const img = document.createElement ("img");
    img.src = postData._embedded["wp:featuredmedia"][0].source_url;
    card.append(img);

    

    const title = document.createElement("h3")
    title.textContent = postData.title.rendered;
    card.append (title);

    document.querySelector(".blog-grid-posts").append(card);

}

// Render posts - with some suggestions from ChatGPT
async function renderPosts (posts) {
   const postsToRender = posts.slice(totalPosts, totalPosts + postPerPage)
   postsToRender.forEach(createPostCard);
   totalPosts += postsToRender.length;
   };




//Load all the posts from server
async function loadPosts () {
   const loader = document.querySelector(".loader")
   try {
      const posts = await getPosts();
      loader.classList.remove("loader");
      renderPosts(posts);
   } catch (error) {
      console.log("404 - not found");
   }
}

// Render blog page
   
export async function blogPage () {
   loadPosts();
}



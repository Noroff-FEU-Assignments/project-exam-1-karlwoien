import { getPosts } from "../api/getPosts.js";

async function createPostCard (postData) {

   /*const card = document.createElement("div"); MAYBE A WRAPPER HERE?*/

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

    document.querySelector(".blog-grid-posts").append(card);

}

async function renderPosts (posts) {
   posts.forEach(createPostCard);
   };

async function loadPosts () {
   try {
      const card = await getPosts();
      renderPosts(card)
   } catch (error) {
      console.log("There has been an Error, you suck at coding");
   }
}


   

export async function blogPage () {
   loadPosts();
}

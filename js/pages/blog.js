import { getPosts } from "../api/getPosts.js";

export function renderPost (postData) {
    const postElement = document.createElement ("a");
    //postElement.href = "/blog/blog-post/index.html/?id=" + postData.id;

    const img = document.createElement ("img");
    img.src = postData.featured_media[0].source_url;
    postElement.append(img);

    const postTitle = document.createElement("h3")
    postTitle.innerText = postData.name;
    postElement.append (postTitle);

    document.querySelector(".blog-grid-posts").append(postElement);

}

export function renderPosts () {
try {
   const posts = await fetch(getPosts);
   if (!response.ok) {
    throw new Error ("404 - there has been a big mistake")
   }
   return posts.json();
}
}

export async function blogPosts () {
   const getResults = await renderPost();
   renderPost(getResults);
}

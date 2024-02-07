import { getPosts } from "../api/getPosts.js";

let totalPosts = 0;
const postPerPage = 9;

// Create card for blog posts
async function createPostCard(postData) {
    const card = document.createElement("a");
    card.href = '/blog/blog-post/?id=' + postData.id;

    const img = document.createElement("img");
    img.src = postData._embedded["wp:featuredmedia"][0].source_url;
    card.append(img);

    const title = document.createElement("h3")
    title.textContent = postData.title.rendered;
    card.append(title);

    document.querySelector(".blog-grid-posts").append(card);
}

// Render posts, with some help from chatGPT to figure out how to solve view more etc.
async function renderPosts(posts) {
    // Clear existing posts
    document.querySelector(".blog-grid-posts").innerHTML = '';

    // Slice the posts based on totalPosts and postPerPage
    const postsToRender = posts.slice(0, totalPosts + postPerPage);

    // Render the sliced posts
    postsToRender.forEach(createPostCard);

    // Add an event listener to the "view more" button
   document.getElementById('view-more-btn').addEventListener('click', async () => {
   // Increment totalPosts by 9
   totalPosts += 9;
   // Render posts with the updated totalPosts
   await renderPosts(posts);
   });

    // Check if there are more posts to load
    if (totalPosts >= posts.length) {
        // Hide the "view more" button if there are no more posts
        document.getElementById('view-more-btn').style.display = 'none';
    }

}

// Load all the posts from server
async function loadPosts() {
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
export async function blogPage() {
    loadPosts();
}

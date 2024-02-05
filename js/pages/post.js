import { getPost } from "../api/getPosts.js";

// Create content for specific post

async function specificPost (postData) {
    const intro = document.createElement("div");

    const header = document.createElement ("h1")
    intro.textContent = postData.title.rendered;
    intro.append(header);

    document.querySelector(".blog-post-intro").append(intro);

}

// Render post

/*async function renderPost (post) {
    post(specificPost);
}*/

// Load specific post

async function loadPost () {
    try {
        const string = document.location.search;
        const params = new URLSearchParams(string);
        const url = new URL (params);
        const id = params.searchParams.get ("id");

        const post = await getPost(id);
        specificPost(post);
        
    } catch (error) {
        console.log("hm.. something went wrong here")
    }
}

export async function postPage() {
    loadPost();
}
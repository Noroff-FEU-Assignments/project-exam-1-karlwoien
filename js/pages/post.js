import { getPost } from "../api/getPosts.js";

// Create content for specific post

function specificPost (postData) {

    const title = document.createElement ("h1")
    title.innerText = postData.title.rendered;

    document.querySelector(".blog-post-intro").append(title);

}


// Render post to page

export async function postPage () {
    try {
        const string = window.location.search;
        const url = new URLSearchParams(string);
        const id = url.get("id")

        const post = await getPost (id);
        specificPost(post);
        
    } catch (error) {
        console.log("something wrong with postPage")
    }
}

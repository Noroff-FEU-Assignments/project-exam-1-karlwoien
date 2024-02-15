import { urlPosts } from "./url.js";
import { urlPost } from "./url.js";

// Get all the blog posts

export async function getPosts() {
    const response = await fetch(urlPosts);
    const posts = await response.json();

    if (!response.ok) {
        throw new Error ("Due to a technical issue on our end we weren't abel to retrieve the list of posts. If the issue keeps happening, please contact us")
    }
    return posts;
};

//Get a single blog post by id

export async function getPost (id) {
    const response = await fetch(urlPost + id);
    const post = await response.json();
    if (!response.ok) {
        throw new Error ("Due to a technical issue on our end we were unable to access post with the id: " + id + " If the issue keeps happening, please contact us")
    }
    return post;
};
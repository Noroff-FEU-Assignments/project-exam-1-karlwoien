import { apiUrl } from "./url.js";

// Get all the blog posts

export async function getPosts () {
    const response = await fetch (apiUrl);
    const posts = await response.json ();
    if (!response.ok) {
        throw new Error ("404 - something went wrong");
    }
    return posts;
}


//Get a single blog post by id

export async function getPost () {

}
import { urlPosts } from "./url.js";
import { urlPost } from "./url.js";

// Get all the blog posts

export async function getPosts() {
    const response = await fetch(urlPosts);

    if (response.ok) {
        return await response.json();
    }
    throw new Error ("Need to add som error handling here")
}

//Get a single blog post by id

export async function getPost (id) {

    try {
        const response = await fetch(urlPost);

        if (!response.ok) {
            throw new Error ("Need to add som error handling here")
        }
        const post =  await response.json();
        return post;
        
    } catch (error) {
        console.log("Error with get posts");
    }
}
import { urlPosts } from "./url.js";

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
    const response = await fetch(urlPosts + id);

    if (response.ok) {
        return await response.json();
    }
    throw new Error ("Need to add som error handling here")
}
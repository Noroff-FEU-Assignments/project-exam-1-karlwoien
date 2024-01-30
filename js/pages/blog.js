import { getPosts } from "../api/getPosts.js";

export function renderPosts (postData) {
    const postElement = document.createElement ("a");
    postElement.href = "post?id=" + postData.id;

    const img = document.createElement ("img");
    img.src =

}
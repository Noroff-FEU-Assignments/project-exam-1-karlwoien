import { getPost } from "../api/getPosts.js";

// Create content for specific post

function specificPost (postData) {

    const title = document.createElement ("h1")
    title.innerText = postData.title.rendered;

    document.querySelector(".blog-post-intro").append(title);

}


// Get post from server

async function loadPost (id) {
    try {
        let post = await getPost (id);
        specificPost(post);   
    } catch (error) {
        console.log("Error with loadPost")
    }
}


// Get post from server

export function postPage () {
    const string = window.location.search;
    const url = new URLSearchParams (string);
    const idPost = url.get("id");
    if (idPost) {
        loadPost(idPost);
    } else {
        console.log ("We go an error")
    }
}



/*async function renderPost (post) {
    post(specificPost);
}*/

// Load specific post

/*async function loadPost () {
    try {
        const post = await getPost(id);
        renderPost(post);
        
    } catch (error) {
        console.log("hm.. something went wrong here")
    }
}

export async function postPage() {
    loadPost();
}*/
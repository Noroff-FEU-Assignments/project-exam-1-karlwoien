import { getPost } from "../api/getPosts.js";

// Create intro content for specific post

function introPost (postData) {

    const title = document.createElement ("h1")
    title.innerText = postData.title.rendered;

    const author = document.createElement ("p")
    author.innerHTML = '<p>By | Posted:</p> ';
    title.append(author);

    document.querySelector(".blog-post-intro").append(title);
  

}

// Create main content for specific post

function mainPost (postData) {

    const container = document.createElement("div");
    container.classList.add("blog-post-main");

    const img = document.createElement ("img");
    if (
        postData._embedded &&
        postData._embedded["wp:featuredmedia"] &&
        postData._embedded["wp:featuredmedia"][0]
    ) {
        img.src = postData._embedded["wp:featuredmedia"][0].source_url;
    } else {
        console.log("Image is a problem")
    }

    const text = document.createElement("div");
    text.innerHTML = postData.content.rendered;
    container.append(text);

    document.querySelector(".blog-post-content").append(container);
}

// Create aside content for specific post

function asidePost (postData) {
    const container = document.createElement("div");
    container.classList.add("blog-post-aside")

    const test = document.createElement("p")
    test.innerText = "Bullets"
    container.append(test);


    document.querySelector(".blog-post-content").append(container);
}


// Render post to page

export async function postPage () {
    const loader = document.querySelector(".loader")
    try {
        const string = window.location.search;
        const url = new URLSearchParams(string);
        const id = url.get("id")

        const post = await getPost (id);
        loader.classList.remove("loader");
        introPost(post);
        mainPost(post);
        asidePost(post);
        
    } catch (error) {
        console.log("something wrong with postPage")
    }
}

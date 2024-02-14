import { getPost } from "../api/getPosts.js";
import { changeTitle } from "../components/changeTitle.js";
import { imageModal } from "../components/modal.js";

// Create intro content for specific post

function introPost (postData) {

    const title = document.createElement ("h1")
    title.innerText = postData.title.rendered;

    const info = document.createElement ("p")
    info.innerHTML = "By: Admin | Posted: " + postData.date + " | Readtime: 2 minutes";
    title.append(info);

    document.querySelector(".blog-post-intro").append(title);
}

// Create main content for specific post

function mainPost (postData) {

    const container = document.createElement("div");
    container.classList.add("blog-post-main");

    const text = document.createElement("div");
    text.innerHTML = postData.content.rendered;
    container.append(text);

    document.querySelector(".blog-post-content").append(container);
}

// Create ad content for specific post

function postAd () {
    const container = document.createElement("div");
    container.classList.add("blog-post-ad");

    const adHeading = document.createElement("h2");
    adHeading.innerText = "Pre-order our Cookbook!";
    container.append(adHeading);

    const adText = document.createElement ("p");
    adText.innerHTML = "Yes, you heard that right! Tasty vibes are soon coming out with our very own cookbook. If you wanna be the first to get it, just enter your e-mail below, and we will send you more information about the book, when its coming out, and give you a personal discount code."
    container.append(adText);

    /*const inputEmail = document.createElement ("input")
    inputEmail.type("email");
    container.append(inputEmail);*/

    const adImage = document.createElement ("img");
    adImage.src = "/assets/images/studio-media-9DaOYUYnOls-unsplash.jpg";
    container.append(adImage);

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
        changeTitle(post.title.rendered);
        loader.classList.remove("loader");
        introPost(post);
        mainPost(post);
        postAd();
        imageModal();
    } catch (error) {
        console.log("something wrong with postPage")
    }
}

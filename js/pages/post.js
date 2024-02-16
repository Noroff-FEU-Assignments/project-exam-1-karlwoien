import { getPost } from "../api/getPosts.js";
import { changeTitle } from "../components/changeTitle.js";
import { imageModal } from "../components/modal.js";

// Create intro content for specific post (content from WP)

function introPost (postData) {

    const title = document.createElement ("h1")
    title.innerText = postData.title.rendered;

    const info = document.createElement ("p")
    const fullDate = postData.date;
    const formattedDate = fullDate.split("T")[0];
    info.innerHTML = "By: Admin | Posted: " + formattedDate + " | Read time: 2 minutes";
    title.append(info);

    document.querySelector(".blog-post-intro").append(title);
}

// Create main content for specific post (content from WP)

function mainPost (postData) {

    const container = document.createElement("div");
    container.classList.add("blog-post-main");

    const text = document.createElement("div");
    text.innerHTML = postData.content.rendered;
    container.append(text);

    document.querySelector(".blog-post-content").append(container);
}

// Create ad content that is placed on the side (not WP content)

function postAd () {
    const container = document.createElement("div");
    container.classList.add("blog-post-ad");

    const adContent = document.createElement ("div");
    adContent.classList.add("ad-content");
    container.append(adContent);

    const adHeading = document.createElement("h2");
    adHeading.innerText = "Pre-order our Cookbook!";
    adContent.append(adHeading);

    const adText = document.createElement ("p");
    adText.innerHTML = "Yes, you heard that right! Tasty vibes are soon coming out with our very own cookbook. If you wanna be the first to get it, just enter your e-mail at the bottom of the page, and we will send you more information about the book, when its coming out, and give you a personal discount code as well!"
    adContent.append(adText);


    const adImage = document.createElement ("img");
    adImage.src = "/assets/images/studio-media-9DaOYUYnOls-unsplash.jpg";
    adImage.alt = "Four books laying on top of each other showcasing the new cookbook from Tasty Vibes"
    adContent.append(adImage);

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
        alert (error.message);
    }
}

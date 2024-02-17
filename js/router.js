// Function to only run certain JS on certain pages

import { blogPage } from "./pages/blog.js";
import { postPage } from "./pages/post.js";
import { carousel } from "./pages/home.js";
import { contactPage } from "./pages/contact.js";

export function router () {
    switch(window.location.pathname) {
        case "/":
        case "/index.html":
            carousel();
            break;
        case "/about":
        case "/about/":
        case "/about/index.html":
            carousel();
            break;
        case "/contact":
        case "/contact/":
        case "/contact/index.html":
            contactPage();
            break;
        case "/blog":
        case "/blog/":
        case "/blog/index.html":
            blogPage();
            break;
        case "/blog/blog-post":
        case "/blog/blog-post/":
        case "/blog/blog-post/index.html":
            postPage();
            break;
        default:
            console.log("404 - not found")
    }
}
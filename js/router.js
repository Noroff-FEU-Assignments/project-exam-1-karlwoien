// Function to only run certain JS on certain pages

// Home: Latest blog carousel
// Blog: All blog posts 
// Blog post: blog post data specific
// Contact: Forum submission listener

import { blogPage } from "./pages/blog.js";
import { postPage } from "./pages/post.js";
import { carousel } from "./pages/home.js";

export function router () {
    switch(window.location.pathname) {
        case "/":
        case "/index.html":
            console.log("Home page");
            carousel();
            break;
        case "/about":
        case "about/":
        case "/about/index.html":
            console.log("About page");
            carousel();
            break;
        case "/contact":
        case "/contact/":
        case "/contact/index.html":
            console.log("contact page");
            break;
        case "/blog":
        case "/blog/":
        case "/blog/index.html":
            console.log("blog page");
            blogPage();
            break;
        case "/blog/blog-post":
        case "/blog/blog-post/":
        case "/blog/blog-post/index.html":
            console.log("blog-post page");
            postPage();
            break;
        default:
            console.log("404 - not found")
    }
}
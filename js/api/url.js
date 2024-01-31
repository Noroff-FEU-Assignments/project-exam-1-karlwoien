// Base URL for wordpress site

const host = "https://karlwoien.com";
const endpoint = "/wp-json/wp/v2/posts?_embed";

export const urlPosts = new URL (endpoint, host);

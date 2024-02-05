// Base URL for wordpress site

const host = "https://karlwoien.com";
const endpointPosts = "/wp-json/wp/v2/posts?_embed";
const endpointPost = "/wp-json/wp/v2/posts/";

export const urlPosts = host + endpointPosts;

export const urlPost = host + endpointPost;

// Base URL for wordpress site

const host = "https://karlwoien.com";
const endpointPosts = "/wp-json/wp/v2/posts?_embed";
const endpointPost = '/wp-json/wp/v2/posts/${id}?_embed';

export const urlPosts = new URL (endpointPosts, host);

export const urlPost = new URL (endpointPost, host);

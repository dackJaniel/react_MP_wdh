import axios from "axios";

export function getPosts() {
    return axios.get("http://localhost:5000/posts");
}
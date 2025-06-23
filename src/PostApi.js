const BASE_URL = "https://rxlahlpuscpdneaxdrrk.functions.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`, { headers, method: 'GET' });
  if (!res.ok) throw new Error("Failed to load posts");
  return await res.json();
}

async function fetchPostById(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, { headers, method: 'GET' });
  if (!res.ok) throw new Error("Failed to load a post");
  const data = await res.json();
  return data[7-id]; //특정 post만 가져오고 싶은데 저 url로 request 하니까 ${id} 붙이나 안붙이나 똑같은 배열 retrun하네여
}

async function fetchComments(postId) {
  const res = await fetch(`${BASE_URL}/comments/${postId}`, { headers, method: 'GET' });
  if (!res.ok) throw new Error("Failed to load comments");
  return await res.json();
}

async function postComment(postId, text) {
  const res = await fetch(`${BASE_URL}/comments/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ post_id:postId, content:text }),
  });
  if (!res.ok){
    const errText = await res.text();
    console.error("POST 실패:", res.status, errText);
    throw new Error("Failed to write comment");
  }
  return await res.json();
}

async function deleteComment(postId,commentId) {
  const res = await fetch(`${BASE_URL}/comments/${postId}?comment_id=${commentId}`, {
    method: 'DELETE',
    headers,
  });
  if (!res.ok) throw new Error("Failed to delete comment");
}

const PostApi = {
  fetchPosts,
  fetchPostById,
  fetchComments,
  postComment,
  deleteComment,
}; 
export default PostApi;
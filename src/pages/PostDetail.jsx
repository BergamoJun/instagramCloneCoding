import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostApi from '../postApi.js';
import '../style.css';
import Comment from '../components/Comment.jsx';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const loadComments = async () => {
    const data = await PostApi.fetchComments(id);
    console.log(data);
    setComments(data);
  };

  useEffect(() => {
    const load = async () => {
      const postData = await PostApi.fetchPostById(id);
      console.log("받아온 detailed post 내용:",postData);
      setPost(postData);
      await loadComments();
    };
    load();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    await PostApi.postComment(id, newComment);
    setNewComment('');
    await loadComments();
  };

  const handleDelete = async (postId,commentId) => {
    await PostApi.deleteComment(postId,commentId);
    await loadComments();
  };

  if (!post) return <div className="loading">로딩 중...</div>;

  return (
    <div className="post-detail">
      <img src={post.image_url} alt={post.title} className="detail-image"/>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h5>댓글: {comments.length}개</h5>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input type="text" value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="댓글 작성"/>
        <button type="submit">게시</button>
      </form>
      <ul className="comment-list">
        {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onDelete={handleDelete} />
    ))
    }
      </ul>
    </div>
  );
};

export default PostDetail;
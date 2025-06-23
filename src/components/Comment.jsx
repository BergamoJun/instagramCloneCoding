import React from 'react';
import '../style.css';

const Comment = ({ comment, onDelete }) => {
  return (
    <li className="comment-item">
      <span className="comment-nickname">익명</span>
      <span className="comment-text">{comment.content}</span>
      <button className="comment-delete" onClick={() => onDelete(comment.post_id,comment.id)}>
        삭제
      </button>
    </li>
  );
};

export default Comment;
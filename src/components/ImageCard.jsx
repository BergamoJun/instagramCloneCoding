import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const ImageCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3 className="card-title">{post.title}</h3>
      <img src={post.image} alt={post.title} className="card-image"/>
    </div>
  );
};

export default ImageCard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import PostApi from '../postApi';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    PostApi.fetchPosts().then(data=>{
      console.log("받은데이터: ", data);
      setPosts(data);
      setLoading(false);
    })
      .catch(err => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <div className="feed-container">
      <div className="top">
      <img className="top-logo" src='/assets/insta.png' alt='-'/>
        <div className='top-txt'>
          <h2>LikeLion_13th_FE</h2>
          <p className='introduce'>멋쟁이사자처럼 13기 파이팅입니다.</p>
          <p className="feed-cnt">게시물: {posts.length}개</p>
        </div>
      </div>

      <div className="grid">
        {posts.map(post => (
          <div
            key={post.id}
            className="card"
            onClick={() => navigate(`/post/${post.id}`)}>
            <img src={post.image_url} alt="can't load image" className="card-image"/>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-time">{post.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
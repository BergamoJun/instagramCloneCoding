import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed.jsx';
import PostDetail from './pages/PostDetail.jsx';
import NotFound from './pages/NotFound.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/post/:id" element={<PostDetail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
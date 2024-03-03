// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Style.css';

// // const PostList = () => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:8000/api/posts/')
// //       .then(response => setPosts(response.data))
// //       .catch(error => console.error('Error fetching data: ', error));
// //   }, []);

// //   const handleLike = (postId) => {
// //     axios.patch(`http://localhost:8000/api/posts/${postId}/`, { likes: posts.find(post => post.id === postId).likes + 1 })
// //       .then(response => setPosts(posts.map(post => post.id === postId ? response.data : post)))
// //       .catch(error => console.error('Error updating like: ', error));
// //   };

// //   return (
// //     <div className='PostLikes'>
// //       <h1>Post List</h1>
// //       {posts.map(post => (
// //         <div className='mypost' key={post.id}>
// //           <p className='Post'>{post.content}</p>
// //           <p>Likes: <span>{post.likes}</span></p>
// //           <button onClick={() => handleLike(post.id)}>Like</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PostList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './Style.css';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   const fetchMoreData = () => {
//     axios.get(`http://localhost:8000/api/posts/?page=${page + 1}`)
//       .then(response => {
//         if (response.data.length === 0) {
//           setHasMore(false);
//         } else {
//           setPosts([...posts, ...response.data]);
//           setPage(page + 1);
//         }
//       })
//       .catch(error => console.error('Error fetching more data: ', error));
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/posts/')
//       .then(response => setPosts(response.data))
//       .catch(error => console.error('Error fetching data: ', error));
//   }, []);

//   const handleLike = (postId) => {
//     axios.patch(`http://localhost:8000/api/posts/${postId}/`, { likes: posts.find(post => post.id === postId).likes + 1 })
//       .then(response => setPosts(posts.map(post => post.id === postId ? response.data : post)))
//       .catch(error => console.error('Error updating like: ', error));
//   };

//   return (
//     <div className='PostLikes'>
//       <h1>Post List</h1>
//       <InfiniteScroll
//         dataLength={posts.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//       >
//         {posts.map(post => (
//           <div className='mypost' key={post.id}>
//             <p>{post.content}</p>
//             <p>Likes: {post.likes}</p>
//             <button onClick={() => handleLike(post.id)}>Like</button>
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default PostList;


// PostList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
// import './Style.css'

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    axios.get(`http://localhost:8000/api/posts/?page=${page}`)
      .then(response => {
        if (response.data.results.length === 0) {
          setHasMore(false);
        } else {
          setPosts([...posts, ...response.data.results]);
          setPage(page + 1);
        }
      })
      .catch(error => console.error('Error fetching more data: ', error));
  };

  useEffect(() => {
    fetchMoreData();
  }, []); // Initial load


  const mystyle ={
    width:'400px',
    border: 'none',
    cursor:'pointer'

  }
    const handleLike = (postId) => {
    axios.patch(`http://localhost:8000/api/posts/${postId}/`, { likes: posts.find(post => post.id === postId).likes + 1 })
      .then(response => setPosts(posts.map(post => post.id === postId ? response.data : post)))
      .catch(error => console.error('Error updating like: ', error));
  };





  // handle unlie function
  const handleUnLike = (postId) => {
    axios.patch(`http://localhost:8000/api/posts/${postId}/`, { likes: posts.find(post => post.id === postId).likes - 1 })
      .then(response => setPosts(posts.map(post => post.id === postId ? response.data : post)))
      .catch(error => console.error('Error updating like: ', error));
  };

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:8000/myapp/api/posts/${postId}/delete/`)
        .then(response => {
            console.log('Post deleted successfully');
            // You can add additional logic, such as redirecting to another page or updating state
        })
        .catch(error => {
            console.error('Error deleting post:', error);
        });
};


const deletePost = (postId) => {
  axios.delete(`http://localhost:8000/api/posts/${postId}/`)
      .then(() => {
          setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => console.error('Error deleting post: ', error));
};









  // delete post 
//   const handleDelete = async () => {
//     try {
//         await axios.delete(`http://localhost:8000/myapp/api/posts/${postId}/delete/`);
//         console.log('Post deleted successfully');
//         // You can add additional logic, such as redirecting to another page or updating state
//     } catch (error) {
//         console.error('Error deleting post:', error);
//     }
// };

  return (
    <div className='container'>
      <h1>Post List</h1>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {posts.map(post => (
          <div key={post.id}>
            <p>{post.content}</p>
            
           <div className='myimage'>
           {post.image && (
            <img style={mystyle} src={post.image} alt={`Post ${post.id}`} />)}
           </div>
           <div>{post.post_date}</div>
            <p>Likes: {post.likes}</p>
          {/* <img style={mystyle} src="http://127.0.0.1:8000/media/post_images/symbol_N9ICSxK.jpg"></img> */}
            
            {/* Your like button and other post details */}
            <br></br>
            <button onClick={() => handleLike(post.id)}>Like</button>
            <button onClick={() => handleUnLike(post.id)}>unLike</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;


// PostList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/posts/')
//       .then(response => setPosts(response.data))
//       .catch(error => console.error('Error fetching data: ', error));
//   }, []);

//   return (
//     <div>
//       <h1>Post List</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <p>{post.content}</p>
//           {post.image && (
//             <img src={`http://localhost:8000${post.image}`} alt={`Post ${post.id}`} />
//           )}
//           {/* Additional post details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;


// // PostForm.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const PostForm = () => {
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/api/posts/', { content });
//       console.log('Post added successfully:', response.data);
//       // You may want to update the state or trigger a reload of the posts list after successful submission.
//     } catch (error) {
//       console.error('Error adding post:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Content:
//         <textarea value={content} onChange={(e) => setContent(e.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PostForm;


import React, { useState } from 'react';
import axios from 'axios';
import './form.css'

const PostForm = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('content', content);
      formData.append('image', image);

      await axios.post('http://localhost:8000/api/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success, maybe redirect or update state
    } catch (error) {
      console.error('Error adding post:', error);
      // Handle error, show message or update state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// function App(){



//   return(
//     <div className='App-home'>
//       <h1>Hello React! </h1>
//       <button>Click me</button>
//     </div>

//   )
// }
// export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div className="App">
//       <h1>Like System</h1>
//       <p>{likes} {likes === 1 ? 'like' : 'likes'}</p>
//       <button onClick={handleLike}>Like</button>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './components/Style.css'
import Header from './components/New';

function App() {
  return (
    <div className="App">
      <Header/>
      <PostForm/>
      <PostList />
    </div>
  );
}

export default App;


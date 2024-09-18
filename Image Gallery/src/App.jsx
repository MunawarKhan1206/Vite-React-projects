// // import React from 'react';
// import Gallery from './Gallery1';

// function App() {
//   return (
//     <div className="App">
//       <Gallery />
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(() => {
    // API call for fetching images 
    axios.get('https://picsum.photos/v2/list')
      .then(function (response) {
        // handle success
        updatePhotoGalleryArray(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <div className="w-100 text-light">Image Gallery</div>
      </nav>
      <div className="row">
        {
          photoGalleryArray.map((photoGalleryArrayItem, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-4 col-sm-12 p-1">
                <img src={photoGalleryArrayItem.download_url}
                  alt={`image_${photoGalleryArrayItem.id}`}
                  height="300"
                  width="400"
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
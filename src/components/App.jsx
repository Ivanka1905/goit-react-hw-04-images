import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGalery from './ImageGallery';

const App = () => {
  const [pictureName, setPictureName] = useState('');
  const [page, setPage] = useState(1);
  // state = {
  //   pictureName: '',
  // };

  const handleFormSubmit = pictureName => {
    setPictureName(pictureName);
    setPage(1);
  };

  // render() {
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGalery pictureName={pictureName} pageStart={page} />
    </div>
  );
  // }
};




// class App extends Component {
//   state = {
//     pictureName: '',
//   };

//   handleFormSubmit = pictureName => {
//     this.setState({ pictureName });
//   };

//   render() {
//     return (
//       <div>
//         <ToastContainer autoClose={2000} />
//         <Searchbar handleFormSubmit={this.handleFormSubmit} />
//         <ImageGalery pictureName={this.state.pictureName} />
//       </div>
//     );
//   }
// }

export default App;

import "./App.css";
import UploadingImage from "./Components/UploadingImage";
import { useState } from "react";
import UploadingVideo from "./Components/UploadingVideo";

function App() {
  const [addImage, setAddImage] = useState(0);
  const [addVideo, setAddVideo] = useState(0);

  const handleAdd = (setAdd, addImageOrVideo) => {
    setAdd(addImageOrVideo + 1);
  };

  const getAddedImages = () => {
    let addedImages = [];
    for (let i = 0; i < addImage; i++) {
      addedImages.push(<UploadingImage key={i} />);
    }
    return addedImages;
  };

  const getAddedVideos = () => {
    let addedImages = [];
    for (let i = 0; i < addVideo; i++) {
      addedImages.push(<UploadingVideo key={i} />);
    }
    return addedImages;
  };

  return (
    <div className="App">
      <UploadingImage />
      {getAddedImages(addImage)}
      <button
        class="btn btn-success"
        onClick={() => handleAdd(setAddImage, addImage)}
        id="add_image"
      >
        Add More Image
      </button>
      <UploadingVideo />
      {getAddedVideos(addVideo)}
      <button
        class="btn btn-success"
        onClick={() => handleAdd(setAddVideo, addVideo)}
        id="add_video"
      >
        Add More Video
      </button>
      <div className="clearAndMerge">
        <button class="btn btn-danger" id="clearAll">
          Clear All
        </button>
        <button class="btn btn-success" id="mergeAll">
          Merge All
        </button>
        <div className="video_prev_merge"></div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import UploadingImage from "./Components/UploadingImage";
import { useState } from "react";
import UploadingVideo from "./Components/UploadingVideo";
import axios from "axios";

function App() {
  const [addImage, setAddImage] = useState(0);
  const [addVideo, setAddVideo] = useState(0);
  const [video, setVideo] = useState({
    status: "ok",
    file_path:
      "https://th.bing.com/th/id/OIP.tT6tBsjQq6RzVEjT-nHiXgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.35&pid=1.7",
  });

  const mergeAllVideo = () => {
    const formData = new FormData();
    for (let i = 0; i < video.length; i++) {
      formData.append("video_file_path_list", video[i]);
      axios
        .post(
          "https://video-editor-api.herokuapp.com/merge_all_video",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              console.log(
                `Progress is ${
                  Math.round(progressEvent.loaded / progressEvent.total) * 100
                }%`
              );
            },
          }
        )
        .then((res) => {
          console.log("API Response", res.data);
        });
    }
  };

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
      addedImages.push(
        <UploadingVideo key={i} video={video} setVideo={setVideo} />
      );
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
      <UploadingVideo video={video} setVideo={setVideo} />
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
        <button class="btn btn-success" id="mergeAll" onClick={mergeAllVideo}>
          Merge All
        </button>
        <div className="video_prev_merge"></div>
      </div>
    </div>
  );
}

export default App;

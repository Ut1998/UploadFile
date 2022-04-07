import React, { useRef, useState } from "react";
import {
  handleCreateAudio,
  handleMergeImageAudio,
  selectedFileHandler,
} from "../helpers";

const UploadingImage = () => {
  const hiddenImageInput = useRef(null);
  const hiddenTextInput = useRef(null);
  const [file, setFile] = useState("");
  const [audio, setAudio] = useState("");
  const [image, setImage] = useState({
    status: "ok",
    file_path:
      "https://th.bing.com/th/id/OIP.tT6tBsjQq6RzVEjT-nHiXgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.35&pid=1.7",
  });

  console.log(image);

  const handleUploadFile = (hiddenFileUpload) => {
    hiddenFileUpload.current.click();
  };

  return (
    <>
      <div className="image_box">
        <div className="image_prev">
          <img src={image.file_path} alt="" id="img" />
        </div>
        {/* <div>
          <img src="" alt="" id="img" />
        </div> */}
        <div className="middle_div">
          <button
            id="img_upl"
            onClick={() => handleUploadFile(hiddenImageInput)}
            class="btn btn-primary"
          >
            Upload Image
          </button>
          <input
            type="file"
            ref={hiddenImageInput}
            accept="image/*"
            onChange={(event) => selectedFileHandler(event, setImage)}
            style={{ display: "none" }}
          />
          &nbsp; &nbsp;
          <button
            id="text_upl"
            onClick={() => handleUploadFile(hiddenTextInput)}
            class="btn btn-primary"
          >
            Upload Transcript
          </button>
          <input
            type="file"
            ref={hiddenTextInput}
            accept="text/*"
            onChange={(event) => selectedFileHandler(event, setFile)}
            style={{ display: "none" }}
          />
          &nbsp; &nbsp;
          <button
            onClick={() => handleCreateAudio(file, setAudio)}
            class="btn btn-primary"
            id="create_aud"
          >
            Create Audio
          </button>
          &nbsp; &nbsp;
          <button
            onClick={() => handleMergeImageAudio(image, audio)}
            class="btn btn-primary"
            id="merge"
          >
            Merge Image and Audio
          </button>
        </div>
        <div className="video_prev"></div>
      </div>
    </>
  );
};

export default UploadingImage;

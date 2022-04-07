import React, { useRef, useState } from "react";
import {
  handleCreateAudio,
  handleMergeVideoAudio,
  selectedFileHandler,
} from "../helpers";

const UploadingVideo = (props) => {
  const hiddenVideoInput = useRef(null);
  const hiddenTextInput = useRef(null);
  const [file, setFile] = useState("");
  const [audio, setAudio] = useState("");

  const handleUploadFile = (hiddenFileUpload) => {
    hiddenFileUpload.current.click();
  };

  return (
    <>
      <div className="image_box">
        <div className="image_prev">
          <img src={props.video.file_path} alt="" id="img" />
        </div>
        <div className="middle_div">
          <button
            id="img_upl"
            onClick={() => handleUploadFile(hiddenVideoInput)}
            class="btn btn-primary"
          >
            Upload Video
          </button>
          <input
            type="file"
            ref={hiddenVideoInput}
            accept="video/*"
            onChange={(event) => selectedFileHandler(event, props.setVideo)}
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
            onClick={() => handleMergeVideoAudio(props.video, audio)}
            class="btn btn-primary"
            id="merge"
          >
            Merge video and Audio
          </button>
        </div>
        <div className="video_prev"></div>
      </div>
    </>
  );
};

export default UploadingVideo;

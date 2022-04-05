import React, { useRef, useState } from "react";
import axios from "axios";

const UploadingImage = () => {
  const hiddenFileInput = useRef(null);

  const selectedFileHandler = (event) => {
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append("image", files, files.name);
    axios
      .post("https://video-editor-api.herokuapp.com/upload_file", formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            `Progress is ${
              Math.round(progressEvent.loaded / progressEvent.total) * 100
            }%`
          );
        },
      })
      .then((res) => console.log("API Response", res));
  };

  const handleUploadFile = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image_box">
      <div className="image_prev"></div>
      <button onClick={handleUploadFile}>Upload File</button>
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/png, image/jpg"
        onChange={selectedFileHandler}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadingImage;

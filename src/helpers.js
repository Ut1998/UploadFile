import axios from "axios";

export const selectedFileHandler = (event, setState) => {
  const files = event.target.files[0];
  const formData = new FormData();
  formData.append("my_file", files, files.name);
  console.log(formData.getAll("my_file"));
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
    .then((res) => {
      console.log("API Response", res.data);
      return setState({
        status: res.data.status,
        file_path:
          "https://video-editor-api.herokuapp.com/" + res.data.file_path,
        file_path_pass: res.data.file_path,
      });
    });
};

export const handleCreateAudio = (file, setAudio) => {
  const formData = new FormData();
  if (file.status === "ok") {
    formData.append("file_path", file.file_path_pass);
    axios
      .post(
        "https://video-editor-api.herokuapp.com/text_file_to_audio",
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
        return setAudio(res.data);
      });
  } else {
    console.log("Error! Upload the text file");
  }
};

export const handleMergeImageAudio = (image, audio) => {
  const formData = new FormData();
  if (image.status === "ok" && audio.status === "ok") {
    formData.append("image_file_path", image.file_path_pass);
    formData.append("audio_file_path", audio.file_path_pass);
    axios
      .post(
        "https://video-editor-api.herokuapp.com/merge_image_and_audio",
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
  } else {
    console.log("!Error, Please upload image and audio");
  }
};

export const handleMergeVideoAudio = (video, audio) => {
  const formData = new FormData();
  if (video.status === "ok" && audio.status === "ok") {
    formData.append("video_file_path", video.file_path);
    formData.append("audio_file_path", audio.file_path);
    axios
      .post(
        "https://video-editor-api.herokuapp.com/merge_video_and_audio",
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
  } else {
    console.log("!Error, Please upload image and audio");
  }
};

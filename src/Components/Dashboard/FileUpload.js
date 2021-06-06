import { useState } from "react";
import ProgressBar from "./ProgressBar";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  function fileHandler(event) {
    let selected = event.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);

      setError("");
    } else {
      event.target.value = "";
      setFile(null);
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }

  return (
    <div className="file-wrapper">
      <input type="file" onChange={fileHandler} className="file" />
      {error && alert("Error! only JPG or PNG Files allowed")}
      {file && alert("File started uploading...")}{" "}
      {file && <ProgressBar file={file} setFile={setFile} />}{" "}
    </div>
  );
}
export default FileUpload;

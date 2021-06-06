import React, { useState} from "react";
import Logout from "../Logout";
import Profile from "./profile";
import Title from "./Title";
import FileUpload from "./FileUpload";
import ShowImage from "./ShowImage";
import Modal from "./Modal";
import Share from "./Share";
import Info from "./Info";

function Dashboard() {
 
  const [getimage, setSelectedImage] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [Date, setDate] = useState(null);
  const [Infoclicked, setInfoClicked] = useState(null);
  const [Id, setId] = useState(null);
  return (
    <>
     <Logout />
      <Profile />
      <Title />
      <FileUpload />
      <ShowImage
        setSelectedImage={setSelectedImage}
        setDate={setDate}
        setId={setId}
      />
      {getimage && (
        <Modal
          getimage={getimage}
          setSelectedImage={setSelectedImage}
          setClicked={setClicked}
          setInfoClicked={setInfoClicked}
          setDate={setDate}
          setId={setId}
          Id={Id}
        />
      )}

      {clicked && (
        <Share setClicked={setClicked} getimage={getimage} Date={Date} />
      )}
      {Infoclicked && <Info Date={Date} />}
    </>
  );
}
export default Dashboard;

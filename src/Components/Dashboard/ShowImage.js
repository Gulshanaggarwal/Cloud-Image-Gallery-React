import React from "react";
import useFirestore from "../../hooks/useFirestore";

function ShowImage(props) {
  const { docs } = useFirestore("my-gallery");

  return (
    <div className="image-show-comp">
      {" "}
      {docs.map((item) => {
        return (
          <div
            className="image-wrapper"
            key={item.id}
            onClick={() => {
              props.setSelectedImage(item.url);
              var date = new Date(null);
              date.setSeconds(item.createdAt.seconds); // specify value for SECONDS here
              var result = [date.toDateString(), date.toLocaleTimeString()];
              props.setDate(result);

              props.setId(item.id);

            }}
          >
            <img src={item.url} alt=""/>{" "}
          </div>
        );
      })}
    </div>
  );
}
export default ShowImage;

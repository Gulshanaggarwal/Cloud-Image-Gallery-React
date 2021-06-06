import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { projectFirestore } from "../../firebase/config";

function Modal(props) {
  const { docs } = useFirestore("my-gallery");
  let date,result;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target.classList.contains("modal-backdrop")) {
          props.setSelectedImage(null);
          props.setClicked(null);
          props.setInfoClicked(null);
        }
      }}
    >
      <i
        className="fa fa-angle-left"
        aria-hidden="true"
        onClick={() => {
          props.setInfoClicked(null);
          docs.forEach((item, index, arr) => {
            if (item.url === props.getimage) {
              if (index - 1 < 0) {
                props.setSelectedImage(arr[arr.length - 1].url);
                date = new Date(null);
                date.setSeconds(arr[arr.length - 1].createdAt.seconds); // specify value for SECONDS here
                result = [date.toDateString(), date.toLocaleTimeString()];
                props.setDate(result);
                props.setId(arr[arr.length - 1].id);
              } else {
                props.setSelectedImage(arr[index - 1].url);
               date = new Date(null);
                date.setSeconds(arr[index - 1].createdAt.seconds); // specify value for SECONDS here
                result = [date.toDateString(), date.toLocaleTimeString()];
                props.setDate(result);
                props.setId(arr[index - 1].id);
              }
            }
          });
          props.setInfoClicked(null);
        }}
      ></i>
      <div className="image-container">
        <img src={props.getimage} alt="anything" />
        <div className="functionality-container">
          <div className="functionality-icons">
            <a download href={props.getimage}>
              <i className="fa fa-download" aria-hidden="true">
                {" "}
              </i>
            </a>
            <i
              className="fa fa-info-circle"
              aria-hidden="true"
              onClick={() => props.setInfoClicked(true)}
            >
              {" "}
            </i>
            <i
              className="fa fa-share-alt"
              aria-hidden="true"
              onClick={() => {
                props.setClicked(true);
                props.setInfoClicked(null);
              }}
            >
              {" "}
            </i>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => {
                props.setSelectedImage(null);
                props.setClicked(null);
                props.setInfoClicked(null);
                projectFirestore
                  .collection("my-gallery")
                  .doc(props.Id)
                  .delete()
                  .then(() => {
                   alert("Document deleted successfully!")
                  })
                  .catch((error) => {
                    alert("error! Try again");
                  });
                
              }}
            >
              {" "}
            </i>
          </div>
        </div>
      </div>
      <i
        className="fa fa-angle-right"
        aria-hidden="true"
        onClick={() => {
          docs.forEach((item, index, arr) => {
            if (item.url === props.getimage) {
              if (index === arr.length - 1) {
                props.setSelectedImage(arr[0].url);

                date = new Date(null);
                date.setSeconds(arr[0].createdAt.seconds);
                result = [date.toDateString(), date.toLocaleTimeString()];
                props.setDate(result);
                props.setId(arr[0].id);
              } else {
                props.setSelectedImage(arr[index + 1].url);

                date = new Date(null);
                date.setSeconds(arr[index + 1].createdAt.seconds);
                result = [date.toDateString(), date.toLocaleTimeString()];
                props.setDate(result);
                props.setId(arr[index + 1].id);
              }
            }
          });
          props.setInfoClicked(null);
        }}
      >
        {" "}
      </i>
    </div>
  );
}
export default Modal;

import React from 'react'

function Info(props){
    return(
        <div className="info-container">
            <p>Uploaded on: {props.Date[0]} </p>
            <p>Time: {props.Date[1]}</p>
        </div>
    )
}
export default Info
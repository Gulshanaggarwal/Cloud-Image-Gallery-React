import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage'

function ProgressBar(props){
    const {url,progress}=useStorage(props.file);
    useEffect(()=>{
        if(url){
            props.setFile(null);
        }
    },[url])
    return(
        <div className="progress-bar" style={{width:progress+'%'}}></div>
    )
}
export default ProgressBar

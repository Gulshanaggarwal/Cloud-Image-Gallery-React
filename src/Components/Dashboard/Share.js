import React, { useState } from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon, WhatsappIcon, WhatsappShareButton, TelegramShareButton, TelegramIcon } from "react-share"

function Share(props) {
    const [copyStatus,setCopyStatus]=useState('Copy Link!')
    function handleCopy(event){
        event.preventDefault();

        var input = document.body.appendChild(document.createElement('input'));
        input.value = event.target.parentNode.href;
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

        setCopyStatus('Copied!')
    }
    return (
        <div className="share-backdrop">
            <div className="share-wrapper">
                <i className="fa fa-times" aria-hidden="true" onClick={() => props.setClicked(null)}></i>
                <h2>Start sharing with your favourite Community 🤩🤩</h2>
                <div className="icon-wrapper">
                    <FacebookShareButton url={props.getimage}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>

                    <TwitterShareButton url={props.getimage}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>

                    <LinkedinShareButton url={props.getimage}>
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>

                    <WhatsappShareButton url={props.getimage}>
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>

                    <TelegramShareButton url={props.getimage}>
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                </div>
                <div className="copy-paste-wrapper">
                    <h3>OR</h3>
                    <a href={props.getimage} onClick={handleCopy}> <i className="fa fa-link" aria-hidden="true"></i> </a>
                    <h3>{copyStatus}</h3>
                </div>
            </div>
        </div>

    )
}
export default Share;
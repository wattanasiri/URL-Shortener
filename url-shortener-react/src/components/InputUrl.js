import { useState } from "react"
import axios from "axios"
import CopyToClipboard from "react-copy-to-clipboard";
import QrCode from "qrcode"
import "./InputUrl.css"

import { MdQrCode2 } from "react-icons/md"
import { CgSoftwareDownload } from 'react-icons/cg'

const InputUrl = ({ setInputValue, inputValue, refreshData, setRefreshData }) => {

    const [full, setFull] = useState("");
    const [shortenLink, setShortenLink] = useState("");
    const [qrcode, setQrcode] = useState("");

    const isValidURL = (string) => {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };

    const shortenClick = () => {
        setInputValue(full);
        setFull("");
        if(isValidURL(full)){
            axios.post("http://localhost:5000/shortUrl", { full })
            .then(function(res){
                console.log(res)
                setShortenLink("http://localhost:5000/" + res.data.short)
                setRefreshData(!refreshData)
            })
            .catch(function(err){
                console.log(err)
            })
        } else {
            alert("The URL is not valid.")
        }
    }

    const generateQrCode = () => {
        const url = shortenLink
        console.log(url)
        QrCode.toDataURL(url, (err, url) => {
            console.log(url)
            if (err) {
                console.log(err)
            } else {
                console.log(url);
                setQrcode(url)
            }
        })
    }

    return (
        <div className="input-container">
            <div>
                <h3>Paste a link to shorten</h3>
                <input
                className="input-box"
                type="text"
                placeholder="https://example.com"
                value={full}
                onChange={e => setFull(e.target.value)}  
                />
                <button className="button-shorten" onClick={shortenClick}>Shorten</button>
            </div>
            <div className="result">
                <p><a href={shortenLink} rel="noopener noreferrer" target="_blank">{shortenLink}</a></p>
                <CopyToClipboard
                    text={shortenLink}
                >
                <button className="copy">Copy to Clipboard</button>
                </CopyToClipboard>
                <button onClick={generateQrCode} id="qr"><MdQrCode2 size={20} />&nbsp;Generate</button>
            </div>
            <div className="qrcode">
                {qrcode && <>
                    <div className="qrcode-image"><img alt={shortenLink} src={qrcode} /></div>
                    <div className="qrcode-download"><a href={qrcode} download="qrcode.png"><CgSoftwareDownload size={20} />&nbsp;Download</a></div>
                </>}
            </div>
        </div>                   
    )
}

export default InputUrl
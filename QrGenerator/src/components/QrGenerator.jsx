//body styling code is wrriten in index.css

import { useState } from "react"

export const QrGenerator = () =>{
    const [img,setImg] = useState('');
    const [loading,setLoading]  = useState(false);
    const [qrcode, setQrcode] = useState('');
    const [imgSize, setImgSize] = useState('');
    const currentYear = new Date().getFullYear();
    
    async function generateQR() {
        if(qrcode == ""){
        alert("Input Field is Empty...");
        }
        else {
            if(imgSize =="") {
            setImgSize(150);
            }
            setLoading(true);
            try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}x${imgSize}&data=${encodeURIComponent(qrcode)}`;
            setImg(url);
            } catch (error) {
            console.error(error);
            }
            finally{
            setLoading(false);
            }
        }
    }

    function downloadQR(){
        if(img == ""){
        alert("Sorry! No QR Code Found...");
        }
        else {
        fetch(img)
        .then((response)=> response.blob())
        .then((blob) =>{
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = "qrcode.png";
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        })
        .catch((error) => {
        console.error("Error downloading QR Code", error);
        });
    }
    }
    return (
        <>
        <div className="form rounded-0 p-md-5 p-sm-4 p-3 col-md-5 col-sm-8 col-12">
            {loading &&  <p>Please Wait...</p>}
            {img && <img src={img} alt="barcode-img" className="w-25 d-block m-auto p-1 mb-5"/>}
            <div className="d-grid mb-3">
                <label htmlFor="urlField" className="mb-1">Website URL<sup style={{color: "red"}}>*</sup></label>
                <input type="text" value={qrcode} className="form-control rounded-0"  id="urlField" onChange={(e) =>setQrcode(e.target.value)}/>
            </div>
            <div className="d-grid mb-3">
                <label htmlFor="imgSizeField" className="mb-1">QR Code Size</label>
                <input type="number" value={imgSize} className="form-control rounded-0"  id="imgSizeField"  onChange={(e) => setImgSize(e.target.value)}/>
                <small className="text-muted text-capitalize">eg : 150 ( Min Size 150 )</small>
            </div>
            <div className="d-flex justify-content-center gap-3 mb-3 mb-lg-5">
                <button className="btn btn-sm rounded-0 btn-primary py-2 w-100" disabled={loading} onClick={generateQR}>Generate QR</button>
                <button className="btn btn-sm rounded-0 btn-success py-2 w-100" onClick={downloadQR}>Dowload QR</button>
            </div>
            <div className="text-center">
            <span className="text-grey" style={{fontSize:"0.8rem"}}>© {currentYear} <a href="https://subuhanbca.netlify.app" target="_blank">Subuhanbca</a></span>
            </div>
    </div>
    
    </>
    )
}
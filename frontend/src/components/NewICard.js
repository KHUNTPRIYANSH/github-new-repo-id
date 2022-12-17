import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import QRCode from 'react-qr-code';
import Barcode from './Barcode';
import Tilt from "react-parallax-tilt";

function NewICard() {
    // const printRef = React.useRef();
    // const printDocument = async () => {
    //     const element = printRef.current;
    //     const canvas = await html2canvas(element);
    //     const data = canvas.toDataURL('image/png');

    //     const pdf = new jsPDF();
    //     const imgProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight =
    //         (imgProperties.height * pdfWidth) / imgProperties.width;

    //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('print.pdf');
    // };
    const printDocument = async () => {
        htmlToImage.toPng(document.getElementById('myPage'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                const pdf = new jsPDF();
                pdf.addImage(dataUrl, 'PNG', 0, 0);
                pdf.save("download.pdf");
            });
    }
    const data = "virengiri goswami"
    return (



        <div style={{ display: "flex", gap: "30px", width: "100vw", margin: "30px 0", alignItems: "center", flexDirection: "column" }}>

            <div className="ID-card" id='myPage'>
                <div className="id-top">
                    <div className="logo">
                        <img
                            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
                            alt=""
                        />
                    </div>
                    <div className="id-title">
                        <h1>Government of India</h1>
                        <h2>Sports, Youth Cultural Activities Department</h2>
                        <h3>Navratri Mahotsav (Rajkot) - 2022 ID-Card</h3>
                    </div>
                </div>
                <div className="id-info">
                    <div className="left" >
                        <img
                            src={"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}
                            alt=""
                            className="id-dp"
                        />
                        <Barcode value={data} />

                    </div>
                    <div className="right">
                        <div className="id-field">
                            <label htmlFor="name">Name : </label>
                            <div className="val">virengiri goswami</div>
                        </div>
                        <div className="id-field">
                            <label htmlFor="id">ID : </label>
                            <div className="val">7004</div>
                        </div>
                        <div className="id-field">
                            <label htmlFor="gname">Group Name : </label>
                            <div className="val">stack hackers</div>
                        </div>
                        <div className="id-field">
                            <label htmlFor="dance-form">Dance Form :</label>
                            <div className="val">flock dance</div>
                        </div>

                        <div className="id-field">
                            <label htmlFor="theme">Theme : </label>
                            <div className="val">7</div>
                        </div>
                        <div className="id-field">
                            <label htmlFor="email">Email : </label>
                            <div className="val">v@gmail.com</div>
                        </div>
                        <div className="id-field">
                            <label htmlFor="date">Date Of issue :</label>
                            <div className="val">10/5/22</div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={printDocument} className="btns">
                Print
            </button>
        </div>
    )
}

export default NewICard

import React, {Component} from 'react';
import "./CertificateMain.scss"
import {Link} from "react-router-dom";


class CertificateMain extends Component {
    render() {
        return (
            <>
                <section name="main" className={"container"}>
            <div className={"mainCertificate"}>

            </div>



                </section>
                <div className={"nav"}>    <button ><Link  to={"/"}>Home</Link></button></div>
            </>
        )
    }
}


export default CertificateMain;
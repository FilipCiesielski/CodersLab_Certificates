import React, {Component} from 'react';
import "./CertificatePortfolioLab.scss"
import {Link} from "react-router-dom";


class CertificatePortfolioLab extends Component {
    render() {
        return (
            <>
                <section name="portfolio" className={"container"}>
            <div className={"certificatePortfolioLab"}>

            </div>



                </section>
                <div className={"nav"}>    <button ><Link  to={"/"}>Home</Link></button></div>
            </>
        )
    }
}


export default CertificatePortfolioLab;
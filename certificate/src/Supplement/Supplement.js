import React, {Component} from 'react';
import "./Supplement.scss"
import {HashRouter, Link} from "react-router-dom";


class Supplement extends Component {
    render() {
        return (
            <>
                <div className={"nav"}>    <button ><Link activeClass="active" to={"main"}>Dyplom Javascript:React</Link></button></div>
                <section name="supplement" className={"container"}>

                    <div className={"sup1"}>

                    </div>
                    <div className={"sup2"}>

                    </div>
                    <div className={"buttonPrev"}>
                    </div>





                </section>

                <div className={"nav"}>    <button ><Link to={"/"}>Home</Link></button></div>
            </>
        )
    }
}


export default Supplement;
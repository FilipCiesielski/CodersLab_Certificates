import React, {Component} from 'react';
import "./Home.scss"
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
       <>
                     <div className={"logo"}></div>
           <section className={"container"}>
               <button ><Link  to={"main"}>Dyplom Javascript:React</Link></button>
               <button ><Link  to={"supplement"}>Suplement<br/>do dyplomu</Link></button>
               <button><Link to={"portfolio"}>Suplement <br/>do dyplomu<br/>Portfolio Lab</Link></button>



           </section>


            </>
        )
    }
}


export default Home;
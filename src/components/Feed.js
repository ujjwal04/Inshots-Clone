import React, {Component} from "react";
import News from "./News";
import {Navbar} from "react-bootstrap"


class Feed extends Component {

    render() {
        // fire.add({
        //     text: "hii"
        // });

        const style = {
            boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
        }

        return (
            <div>
            <Navbar fixed="top" bg="light" expand="lg" style={style} className="text-center">
                <div style={{width:"100%"}}>
                <h4 className="text-center">Inshorts</h4>
                </div>
            </Navbar>
            <div>
            
            <br/>
            <br/>
            <div className="container mt-5" style={{zIndex:-1}}>
                <News/>
            </div>
            </div>
            </div>
        );
    }
}

export default Feed;
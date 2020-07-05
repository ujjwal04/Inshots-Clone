import React, {Component} from "react";
import fire from "./Firebase/firebase";

class News extends Component {
    constructor() {
        super();
        this.state = {
            newsArr:[]
        }
    }
    componentDidMount() {
        fire.firestore().collection("news").get()
        .then(snapshot => {
            const newsArr = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                newsArr.push(data);
            })
            this.setState({newsArr})
        })
        .catch( console.log("Error"));
    }

    render() {
        this.state.newsArr.sort(function(a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateB - dateA;
        });
        const rows = this.state.newsArr.map((el,index) => {
            const date = new Date(el.date);
            console.log(date);
            return (
                <div className="row justify-content-center mt-4" style={{boxShadow:"0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",minHeight:"284px",borderRadius:"3px",padding:"8px"}} key={index}>
                <div className="col-md-4 col-sm-12" style={{minHeight:"200px",backgroundImage:`url(${el.image})`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:"3px"}}>
                </div>
                <div className="col-md-8 col-sm-12" style={{minHeight:"200px"}}>
                    <h4 className="mt-1" style={{fontFamily: "'Roboto',sans-serif",
            color:"#44444d !important",
            fontWeight: "light"}}>{el.headline}</h4>
            <span><b>short</b> by {el.author} {el.date.substring(0,24)}</span>
                    <p className="text-justify mt-1">
                        {el.content}
                    </p>
                </div>
                
            </div>
            );
        })


        return (
        <div className="container">
            {rows}
        </div>
        );
    }
}

export default News;
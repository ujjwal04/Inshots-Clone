import React,{Component} from "react";
import fire from "./Firebase/firebase";
import {Button,Modal} from 'react-bootstrap';

class Admin extends Component {
    constructor() {
        super();

        const today_date = new Date().toString();

        this.state = {
            email:"",
            password:"",
            isLoggedIn: false,
            showModal:false,
            author:"",
            headline:"",
            content:"",
            image:"",
            date: today_date
        }

        this.signout = this.signOut.bind(this);
        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    }

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
	}

    handleInput = (input) => {
        this.setState({ [input.target.name]: input.target.value });
    };

    formHandle(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user) => this.setState({isLoggedIn:true}))
        .catch(err => alert("Invalid credentials"));
    }

    uploadNews(event) {
        event.preventDefault();
        fire.firestore().collection("news").add({
            author:this.state.author,
            headline:this.state.headline,
            date:this.state.date,
            content: this.state.content,
            image:this.state.image
        })
        .then(() => {
            this.handleClose();
            alert("News Uploaded");
        });
    }

    signOut() {
        fire.auth().signOut()
        .then(o => this.setState({isLoggedIn:false}));
    }




    render() {
        return (
            this.state.isLoggedIn===false?
            <div className="container" style={{height:"100vh"}}>
                <div className="row h-100 justify-content-center align-items-center">
                    <form style={{border:"0.5px solid gray",padding:"20px"}} onSubmit={(event) => this.formHandle(event)}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => this.handleInput(event)} placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" onChange={(event) => this.handleInput(event)} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            :
            <div className="container text-center py-auto" style={{height:"100vh"}}>
                <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                <Button variant="primary" onClick={() => this.handleShow()}>
					Upload News
                </Button>
                <br/>
                <br/>
                <button className="btn btn-danger" onClick = {() => this.signOut()}>Logout</button>
                </div>
                

                

				<Modal show={this.state.showModal} onHide={() => this.handleClose()}>
					<Modal.Header closeButton>
						<Modal.Title>Add New Article</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                           <form style={{padding:"20px"}} onSubmit={(event) => this.uploadNews(event)}>
                     <div className="form-group">
                     <label htmlFor="author">Author Name</label>
                     <input required type="text" className="form-control" name="author" id="author" aria-describedby="emailHelp" onChange={(event) => this.handleInput(event)} placeholder="Author Name"/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="headline">Headline</label>
                         <input required type="text" className="form-control" name="headline" onChange={(event) => this.handleInput(event)} id="exampleInputPassword1" placeholder="Headline"/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="content">Content</label>
                         <input required type="text" className="form-control" name="content" onChange={(event) => this.handleInput(event)} id="exampleInputPassword1" placeholder="Content"/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="image">Image</label>
                         <input required type="text" className="form-control" name="image" onChange={(event) => this.handleInput(event)} id="exampleInputPassword1" placeholder="Enter URL"/>
                     </div>

                     <button type="submit" className="btn btn-primary">Submit</button>
                     </form>
                    </Modal.Body>
				</Modal>
            </div>
        )
    }
}

export default Admin;
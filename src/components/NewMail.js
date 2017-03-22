import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';

class NewMail extends Component {
    constructor(props){
        super(props);
        this.state={
            to:"",
            subject:"",
            content:"",
            from:""
        }
    }

    onToChange(event){
        this.setState({
            to:event.target.value,
            from:this.props.params.username
        })
    }

    onSubjectChange(event){
        this.setState({
            subject:event.target.value
        })
    }

    onContentChange(event){
        this.setState({
            content:event.target.value
        })
    }

    sendMail(){
        let {to,subject,content,from}=this.state;
        this.props.actions.sendMail(to,subject,content,from);   
        browserHistory.push('/inbox');
    }

    render () {
        return (
            <div>
                <form>
                    <FormGroup>
                        <ControlLabel>To</ControlLabel>
                        <FormControl type="text" placeholder="to" onChange={(event)=>this.onToChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Subject</ControlLabel>
                        <FormControl type="text" placeholder="subject" onChange={(event)=>this.onSubjectChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="content" onChange={(event)=>this.onContentChange(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="primary" active onClick={()=>this.sendMail()}>Send</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default NewMail
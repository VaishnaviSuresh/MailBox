import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Button,Row,Col} from 'react-bootstrap';

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
        browserHistory.push('/mailbox/'+this.props.params.username+'/inbox');
    }

    render () {
        return (
            <div>
                <Row>
                    <Col md={10} sm={12} xs={12} mdOffset={1}>
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
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NewMail
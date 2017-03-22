import React, { Component } from 'react';
import {ListGroup,ListGroupItem,ControlLabel} from 'react-bootstrap';

class Outbox extends Component {
    constructor(props){
        super(props);
    }

    render () {
        var message=null;
        if(this.props.message!=null){
            message=this.props.message.map((msg,i)=>  
                <ListGroupItem key={i}>
                    <div><ControlLabel>To : {msg.to}</ControlLabel></div>
                    <div><ControlLabel>Subject : {msg.subject}</ControlLabel></div>
                    <div><ControlLabel>Content : {msg.content}</ControlLabel></div>
                </ListGroupItem>
            );
        }
        return (
            <div>
                <ListGroup>
                    {message}
                </ListGroup>
            </div>
        )
    }
}

export default Outbox
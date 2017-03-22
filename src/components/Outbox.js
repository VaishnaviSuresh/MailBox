import React, { Component } from 'react';
import {ListGroup,ListGroupItem,ControlLabel,Row,Col} from 'react-bootstrap';

class Outbox extends Component {
    constructor(props){
        super(props);
    }

    render () {
        let outbox=this.props.message.filter((ob)=>
            this.props.params.username==ob.from
        )
        let message=null;
        if(this.props.message!=null){
            message=outbox.map((msg,i)=>  
                <ListGroupItem key={i}>
                    <Row >
                        <Col md={1}>
                            {msg.to}
                        </Col>
                        <Col md={1}>
                            {msg.subject}
                        </Col>
                        <Col md={1}>
                            {msg.content}
                        </Col>
                    </Row>
                </ListGroupItem>
            );
        }
        return (
            <div>
                <Row>
                    <Col md={10} sm={12} xs={12} mdOffset={1} smOffset={1}>
                        <ListGroup>
                            {message}
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Outbox
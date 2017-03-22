import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Label, Row, Col, ControlLabel } from 'react-bootstrap';

class Inbox extends Component {
    render() {
        let inbox = this.props.message.filter((ib) =>
            this.props.params.username == ib.to
        )
        let message = null;
        if (this.props.message != null) {
            message = inbox.map((msg, i) =>
                <ListGroupItem key={i}>
                    <Row >
                        <Col md={1}>
                            {msg.from}
                        </Col>
                        <Col md={1}>
                            {msg.subject}
                        </Col>
                        <Col md={10}>
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

export default Inbox
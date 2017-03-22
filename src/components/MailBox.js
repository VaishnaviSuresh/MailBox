import React, { Component } from 'react'
import {Link} from 'react-router';
import {Nav,NavItem,Navbar} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class MailBox extends Component {
    constructor(props){
        super(props);
    }

    handleSelect(selectedKey){
        browserHistory.push('/mailbox/'+this.props.params.username+'/'+selectedKey);
        console.log(this.props.params.username);
    }

    handleSignout(selectedKey){
        browserHistory.push('/'+selectedKey);
    }

    render () {
        let name=this.props.login.filter((uname)=>
            this.props.params.username==uname.username
        )[0].name;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Welcome     {name}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="pills" onSelect={(selectedKey)=>this.handleSelect(selectedKey)}>
                            <NavItem eventKey="inbox">Inbox</NavItem>
                            <NavItem eventKey="newmail">NewMail</NavItem>
                            <NavItem eventKey="outbox">Outbox</NavItem>
                        </Nav>
                        <Nav pullRight bsStyle="pills" onSelect={(selectedKey)=>this.handleSignout(selectedKey)}>
                            <NavItem eventKey="">SignOut</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    {React.cloneElement(this.props.children.props.children,this.props)} 
                </div>
            </div>
        )
    }
}

export default MailBox
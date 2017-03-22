import React, { Component } from 'react'
import {Form,ControlLabel,FormControl,Button,FormGroup,Col,Row,Modal,ModalHeader,ModalBody,ModalFooter,ModalTitle,Checkbox} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",
            password:"",
            openModal:false
        }
    }

    onUsernameChange(event){
        this.setState({
            userName:event.target.value
        })
    }

    onPasswordChange(event){
        this.setState({
            password:event.target.value
        })
    }

    login(){
        let {userName,password}=this.state;
        for(let i=0;i<this.props.login.length;i++)
        {
            if((this.props.login[i].username===userName)&&(this.props.login[i].password===password))
            {
                console.log("mail");
                browserHistory.push('/mailbox/'+userName);
                break;
            }
        }
        console.log("login");
    }

    showModal(){
        this.setState({
            openModal:true
        })
    }

    onNewUserNameChange(event){
        this.setState({
            newUserName:event.target.value
        })
    }

    onNewEmailChange(event){
        this.setState({
            newEmail:event.target.value
        })
    }

    onNewPasswordChange(event){
        this.setState({
            newPassword:event.target.value
        })
    }

    onNewRePasswordChange(event){
        this.setState({
            newRePass:event.target.value
        })
    }

    onSignUp(){
        let {newUserName,newEmail,newPassword,newRePass}=this.state;
        if(newPassword==newRePass){
            this.props.actions.login(newUserName,newEmail,newPassword);
            this.setState({
                openModal:false
            })
        }
    }

    render () {
        return (
            <div>
                <Row>
                    <Col md={8} sm={6} xs={12}>
                        <h1>Welcome to MailBox</h1>
                        <p>If you are new user please signup to continue....</p>
                        <Button bsStyle="primary" active onClick={()=>this.showModal()}>Sign-Up</Button>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Form>
                            <FormGroup>
                                <ControlLabel>UserName</ControlLabel>
                                <FormControl type="text" onChange={(event)=>this.onUsernameChange(event)}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" onChange={(event)=>this.onPasswordChange(event)}/>
                            </FormGroup>
                            <FormGroup>
                                <Button bsStyle="primary" active onClick={()=>this.login()}>Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Modal show={this.state.openModal}>
                        <ModalHeader>
                            <ModalTitle>Create new account</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <ControlLabel>UserName</ControlLabel>
                                    <FormControl type="text" onChange={(event)=>this.onNewUserNameChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>E-Mail ID</ControlLabel>
                                    <FormControl type="email" onChange={(event)=>this.onNewEmailChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password" onChange={(event)=>this.onNewPasswordChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Re-enter Password</ControlLabel>
                                    <FormControl type="password" onChange={(event)=>this.onNewRePasswordChange(event)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Checkbox>I Agree to the Terms &amp; Conditions</Checkbox>
                                </FormGroup>
                                <FormGroup>
                                    <Button bsStyle="primary" onClick={()=>this.onSignUp()}>Sign-Up</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </Row>
            </div>
        )
    }
}

export default Login
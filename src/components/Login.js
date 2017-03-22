import React, { Component } from 'react'
import {Form,ControlLabel,FormControl,Button,FormGroup,Col,Row,Modal,ModalHeader,ModalBody,ModalFooter,ModalTitle,Checkbox,Alert} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"548835",
            password:"vaishu",
            openModal:false,
            showAlert:false
        }
    }

    onUsernameChange(event){
        this.setState({
            userName:event.target.value,
            showAlert:false
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
                browserHistory.push('/mailbox/'+userName);
                break;
            }
        }
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

    onNewNameChange(event){
        this.setState({
            newName:event.target.value
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
        let {newUserName,newName,newPassword,newRePass}=this.state;
        let extuser=this.props.login.filter((user)=>
            user.username==newUserName
        )
        if((extuser.length===0)&&(newPassword==newRePass)){
            this.props.actions.signup(newUserName,newName,newPassword);
            this.setState({
                openModal:false
            })
        }
        else{
            this.setState({
                showAlert:true
            })
        }
    }

    render () {
        let showAlert=null;
        if(this.state.showAlert){
            showAlert=<Alert bsStyle="danger">Username already exists.Please give new username</Alert>
        }
        return (
            <div>
                <Row>
                    <Col md={6} sm={6} xs={12} mdOffset={1} smOffset={1}>
                        <h1>Welcome to MailBox</h1>
                        <p>If you are new user please signup to continue....</p>
                        <Button bsStyle="primary" active onClick={()=>this.showModal()}>Sign-Up</Button>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Form>
                            <FormGroup>
                                <ControlLabel>UserName</ControlLabel>
                                <FormControl type="text" onChange={(event)=>this.onUsernameChange(event)} value={this.state.userName}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" onChange={(event)=>this.onPasswordChange(event)} value={this.state.password}/>
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
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl type="email" onChange={(event)=>this.onNewNameChange(event)}/>
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
                                {showAlert}
                            </Form>
                        </ModalBody>
                    </Modal>
                </Row>
            </div>
        )
    }
}

export default Login
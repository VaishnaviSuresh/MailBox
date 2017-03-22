import React, { Component } from 'react'

class Inbox extends Component {
    render () {
        let msg=[],name="";
        name=this.props.login.filter((uname)=>
            this.props.params.username==uname.username
        )[0].name;
        msg=this.props.message.filter((m)=>
            m.to==this.props.params.username
        )
        console.log(msg,name);
        return (
            <div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Inbox
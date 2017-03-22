import React, { Component } from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    (state) => ({
        message:state.reducer.message,
        login:state.reducer.login
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions,dispatch)
    })
)


class App extends Component {
    constructor(props){
        super(props);   
    }
    
    componentDidMount(){
        this.props.actions.fetchData();
    }

    render () {
        return (
            <div>
                {React.cloneElement(this.props.children,this.props)} 
            </div>
        )
    }
}

export default App;
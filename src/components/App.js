import React, { Component } from 'react'

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
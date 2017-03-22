import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';

function mapStateToProps(state) {
    return {
        message:state.reducer.message,
        login:state.reducer.login
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export const AppModule= connect(mapStateToProps,mapDispatchToProps)(App)
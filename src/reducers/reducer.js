
let  initialState= {
    message:[],
    login:[],
    err:""
};


export default function reducer(state=initialState,action){
    switch(action.type){
        case 'SEND_MAIL':
            var data={to:action.to,subject:action.subject,content:action.content,from:action.from};
            return(Object.assign({},state,{message:[...state.message,data]}));
    
        case 'LOGIN':
            var user={username:action.username,name:action.name,password:action.password}
            return (Object.assign({},state,{login:[...state.login,user]}));

        case 'FETCH_DATA_SUCCESS':
            return(Object.assign({},state,{message:action.data.message,login:action.data.login}));
            
        case 'FETCH_DATA_FAILIURE':
            return(Object.assign({},state,{err:action.err}))

        default:
            return state;
    }
}
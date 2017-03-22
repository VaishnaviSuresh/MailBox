 import fetch from 'isomorphic-fetch';
 
 
 export function sendMail(to,subject,content,from){
     return{
         type:'SEND_MAIL',
         to,
         subject,
         content,
         from
     }
 }

 export function signup(username,name,password){
     return{
         type:'SIGN_UP',
         username,
         name,
         password
     }
 }

export function fetchDataRequest(){
    return{
        type:'FETCH_DATA_REQUEST'
    }
}

export function fetchDataSuccess(data){
    return{
        type:'FETCH_DATA_SUCCESS',
        data

    }
}

export function fetchDataFailiure(err){
    return{
        type:'FETCH_DATA_FAILIURE',
        err
    }
}

// export const fetchData = () => dispatch =>{
//     dispatch(fetchDataRequest);
//     return fetch("./data/data.json")
//             .then(response => response.json())
//             .then(json => dispatch(fetchDataSuccess(json)))
//             .catch(err => dispatch(fetchDataFailiure(err)));
// }

export function fetchData () { 
    return function (dispatch) {
        dispatch(fetchDataRequest);
        return fetch("./data/data.json")
                .then(response => response.json())
                .then(json => dispatch(fetchDataSuccess(json)))
                .catch(err => dispatch(fetchDataFailiure(err)));
    }
}


 
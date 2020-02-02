import axios from 'axios';
import {getSessionStorage} from "./util";
let tokenObject = getSessionStorage('commentingIEToken');
let commentToken = tokenObject ? JSON.parse(tokenObject)['token']:'';

let headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Access-Control-Allow-Origin':'*'
};
let authorizationHeader = {
    'Access-Control-Allow-Headers': 'Authorization',
    "Authorization":  `Berer ${commentToken}`
};

export function getRequest(url,notAddAuthorization) {
    headers = notAddAuthorization ? headers : {...headers,...authorizationHeader};
    return axios.get(url,{headers});
}

export function postRequest(url,data,notAddAuthorization) {
     headers = notAddAuthorization ? headers : {...headers,...authorizationHeader};
    return axios.post(url,data,{headers});
}
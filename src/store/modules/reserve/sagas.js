import {call,put,all, takeLatest} from 'redux-saga/effects'
import { AdRequest } from './actions';
import api from "../../../services/api";

function* addToReserve({id}){
    const response = yield call(api.get,`trips/${id}`)

    yield put(AdRequest(response.data))
} 

export default all({
    
})
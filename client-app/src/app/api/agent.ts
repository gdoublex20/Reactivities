import axios, { AxiosResponse } from 'axios';
import { Activity } from './../models/Activity';

const sleep = (delay: number) => {
    return new Promise((resolve) =>{
        setTimeout(resolve, delay)
    })
}

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

axios.defaults.baseURL = 'http://localhost:5000/api'
//se le agrega la T para hacer todo esto un tipo de respuesta generica, para saber exactamente el tipo de respuesta que estamos obteniendolo
const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
    get: <T> (url:string) => axios.get <T> (url).then(responseBody), 
    post: <T> (url:string, body: {}) => axios.post <T> (url, body).then(responseBody), 
    put: <T> (url:string, body: {}) => axios.put <T> (url, body).then(responseBody), 
    delete: <T> (url:string) => axios.delete <T> (url).then(responseBody), 
}

const Activities = {
    list:() => request.get<Activity[]>('/activities'),
    details: (id:string) => request.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => request.post<void>('/activities', activity),
    update: (activity: Activity) => request.put<void>(`/activities/${activity.id}`, activity),
    delete: (id:string) => request.delete<void>(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent;
import axios from "axios";

const BASE_API = 'https://live.mocat.amifactory.network/api/v1'


export function getMovies (page: number):Promise<any> {
    return axios.get(`${BASE_API}/movies/?page=${page}`)
}

export function getGenres():Promise<any> {
    return axios.get(`${BASE_API}/genres`)
}


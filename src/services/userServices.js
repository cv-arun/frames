import axios from "axios";
import { baseUrl } from "./axios";

const BASE_URL = `${baseUrl}/user`

export const signup = async (payload) => {
    try {
        let data = await axios.post(`${BASE_URL}/register`, payload);
        return data
    } catch (error) {
        console.log(error)
    }
}
export const login = async (payload) => {

    let data = await axios.post(`${BASE_URL}/login`, payload);
    return data?.data

}
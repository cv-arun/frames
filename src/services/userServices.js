import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/user'

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
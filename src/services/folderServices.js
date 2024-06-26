import axios from "axios";
import { baseUrl } from "./axios";
const BASE_URL = `${baseUrl}/folder`

export const newFolder = async (payload) => {
    try {
        let token = JSON.parse(localStorage.getItem('auth'))
        await axios.post(`${BASE_URL}/new-folder`, payload, {  headers: { authorization: `bearer ${token}` } })
        return true
    } catch {
        return false
    }
}

export const getFolderById = async (payload) => {

        let rootfolder = false
        if (!payload) {
            rootfolder = true
        }
        let token = JSON.parse(localStorage.getItem('auth'))
        let data = await axios.get(`${BASE_URL}/folders/${payload}/${rootfolder}`, { headers: { authorization: `bearer ${token}` } });
        return data?.data
  
}
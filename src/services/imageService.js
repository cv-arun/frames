import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/folder'

export const uploadImage = async (payload) => {
    try {
        let token = JSON.parse(localStorage.getItem('auth'))
        let data = await axios.post(`${BASE_URL}/upload-image`, payload,{  headers: { authorization: `bearer ${token}` } });
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getImages = async (folderId) => {
    try {
        let token = JSON.parse(localStorage.getItem('auth'))
        let data = await axios.get(`${BASE_URL}/images/${folderId}`,{  headers: { authorization: `bearer ${token}` } });
        return data.data
    } catch (error) {
        console.log(error)
    }
}
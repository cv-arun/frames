import axios from "axios";

export const newFolder = async (payload) => {
    try {

        await axios.post('http://localhost:4000/api/folder/new-folder', payload)
        return true
    } catch {
        return false
    }
}

export const getFolderById = async (payload) => {
    let data = await axios.get(`http://localhost:4000/api/folder/folders/${payload}`);
    return data?.data
}
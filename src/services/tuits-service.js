import axios from 'axios';
//const API_BASE = 'https://tuiter-node-server-app-vin.herokuapp.com/api';
const API_BASE = 'http://localhost:4000/api';
const TUITS_API = `${API_BASE}/tuits`;



export const findTuits = async () => {
    console.log(TUITS_API)
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const updateTuit = async (tuit) => {
    await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}

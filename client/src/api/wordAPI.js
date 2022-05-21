import axios from 'axios';

export const createSession =async (name) => {
    try {

        const res = await axios.post('/session', {name});
        return res.data;

    } catch (err) {
        console.log(err);
    }
}

export const addAttempt = async (res, session) => {
    try {

        const response = await axios.post('/session/add_attempt', {res});
        return response.data;

    } catch (err) {

        console.log(err);
    }
}
import axios from 'axios';

const usersInstance = axios.create({
    baseURL: 'https://6464ead4228bd07b353ce783.mockapi.io/'
});

export const getUsers = async () => {
    try {
        const response =  await usersInstance.get('users');
        return response.data;
    } catch (error) {
        console.error(error);
    };
};
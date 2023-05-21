import axios from 'axios';

const usersInstance = axios.create({
    baseURL: 'https://646a6b965a6ce7a8a21ab6d1.mockapi.io'
});

export const getUsers = async () => {
    try {
        console.log("WTF");
        const response =  await usersInstance.get('users');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};
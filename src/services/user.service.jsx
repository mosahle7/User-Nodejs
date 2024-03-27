import React from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:4000';


export const createUser = async(payload) => {
    const createUserUrl =`${apiUrl}/v1/user`;

    const {data: apiResponse} = await axios.post(
        `${createUserUrl}`, 
        payload
        );

        return apiResponse;
    }

export const retrieveUser = async(userId) => {
    const retrieveUserUrl = `${apiUrl}/v1/user/${userId}`;

    const {data: apiResponse} = await axios.get(
        `${retrieveUserUrl}`
    );

    return apiResponse;
}

export const usersList = async() => {
    const getAllUsersUrl = `${apiUrl}/v1/user`;

    const {data: apiResponse} = await axios.get(
        getAllUsersUrl
    );
    return apiResponse;
}

export const editUser = async(userId,payload) => {
    const editUserUrl = `${apiUrl}/v1/user/${userId}`;

    const {data:apiResponse} = await axios.put(
        `${editUserUrl}`,
        payload
    );

    return apiResponse;
}

export const deleteUser = async(userId) => {
    const deleteUserUrl = `${apiUrl}/v1/user/${userId}`;

    const {data:apiResponse} = await axios.delete(
        deleteUserUrl
    );

    return apiResponse;
}



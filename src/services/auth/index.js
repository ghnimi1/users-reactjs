import { getCommentsUrl, getPostsUrl, getUsersUrl } from '../urls/index';
import { authInstance } from '../tools/index';


export async function getUsers() {
    try {
        const response = await authInstance.get(
            getUsersUrl(),
            {},
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

}

export async function getPosts() {
    try {
        const response = await authInstance.get(
            getPostsUrl(),
            {},
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

}


export async function getComments(id) {
    try {
        const response = await authInstance.get(
            getCommentsUrl(id),
            {},
            {}
        )
        console.log('res', response);
        return response
    } catch (error) {
        console.log('error', error);
        return error
    }

}
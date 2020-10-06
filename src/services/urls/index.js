
export function getUsersUrl(){
    return '/users'
}
export function getPostsUrl(){
    return '/posts'
}

export function getCommentsUrl (id) {
    return `/posts/${id}/comments`
}
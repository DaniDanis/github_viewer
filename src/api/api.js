export const api = {
    searchUsers(searchString){
        return fetch(`https://api.github.com/search/users?q=${searchString}`).then(result => result.json())
    }
}

export const api = {
    async searchUsers(searchString){
        const result = await fetch(`https://api.github.com/search/users?q=${searchString}`)
        return result.json()
    },
    async searchRepos(username, page){
        if (!page) {
            page = 1
        }
        const result = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`)
        return result.json()
    }      
}

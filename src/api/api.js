export const api = {
    async searchUsers(searchString){
        const result = await fetch(`https://api.github.com/search/users?q=${searchString}`)
        return result.json()
    }
}

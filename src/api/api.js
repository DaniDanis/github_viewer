async function fetch_all_pages(url){
    let vaiIndo = true
    let result = []
    let page = 1
    while(vaiIndo) {
        const response = await fetch(`${url}?page=${page}`)
        const tempItems = await response.json()
        if (tempItems.length > 0) {
            result = result.concat(tempItems)
            page++
        } else {
            break
        }
    }
    return result
}

export const api = {
    async searchUsers(searchString){
        const url = `https://api.github.com/search/users?q=${searchString}`
        const result = await fetch(url)
        return result.json()
    },
    async searchRepos(username, page){
        if (!page) {
            page = 1
        }
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    }      
}

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
    async searchRepos(username){
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    },
    async listIssues(owner, name, page){
        const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`
        const data = await fetch(url)
        return await data.json()
    },
    async callContents(owner, repoName, dir){
        const url = `https://api.github.com/repos/${owner}/${repoName}/contents/${dir}`
        const data = await fetch(url)
        return await data.json()
    }    
}

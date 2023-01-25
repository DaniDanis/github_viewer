function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000)
    })
}


export const api = {
    async searchUsers(){
        const result = {items: [
                         {login: 'joao'},
                         {login: 'jose'}
                        ]
        }
        return later(result)
    },
    async searchRepos(){
        const result = [
            {name: 'django', owner: 'joao'},
            {name: 'vuejs', owner: 'jose'}
        ]
        return later(result)
    }
}
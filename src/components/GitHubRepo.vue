<template>
    <div>
        <v-autocomplete
            v-model="user"
            :items="userList"
            :loading="userLoading"
            :search-input.sync="userSearch"
            item-text="login"
        />
    </div>
</template>
  
<script>
import {debounceDecorator} from '@/helpers/debouncer.js' 
import {api} from '@/api/api.js'
 
    export default {  
        data: () => ({
            user: null,
            userList: [],
            userLoading: false,
            userSearch: null,
        }),
        methods: {            
            procuraUsuariosGithub: debounceDecorator(async function () { // atenção não use o arrow function, quebra o decorator por algum motivo.
                this.userLoading = true
                const data = await api.searchUsers(this.userSearch)
                this.userList = data.items
                this.userLoading = false
            }, 500),
        },
        watch: {
            userSearch () {
                this.procuraUsuariosGithub()
            }
        }
    }
</script>
  
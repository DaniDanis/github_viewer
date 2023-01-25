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
    export default {  
        data: () => ({
            user: null,
            userList: [],
            userLoading: false,
            userSearch: null,
        }),
        methods: {            
            procuraUsuariosGithub: debounceDecorator(function () { // atenção não use o arrow function, quebra o decorator por algum motivo.
                this.userLoading = true
                setTimeout(() => {
                    this.userList = [
                        {login: "João"},
                        {login: "José"}
                    ]
                    this.userLoading = false
                }, 1000)
            }, 500)
        },
        watch: {
            userSearch () {
                this.procuraUsuariosGithub()
            }
        }
    }
</script>
  
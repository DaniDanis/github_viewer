<template>
    <div>
        <v-row class="text-center">
        <v-col cols="6">
            <v-autocomplete
                v-model="user"
                :items="userList"
                :loading="userLoading"
                :search-input.sync="userSearch"
                item-text="login"
            />
        </v-col>
        <v-col cols="6">
            <v-select
                v-model="repo"
                :items="repoList"
                :loading="repoLoading"
                item-text="name"
                label="'Selecione o repositorio'"
                return-object
                single-line
            >
            </v-select>
        </v-col>
      </v-row>
    </div>
</template>
  
<script>
import {debounceDecorator} from '@/helpers/debouncer.js' 
import {api} from '~api'
 
    export default {  
        data: () => ({
            user: null,
            userSearch: null,
            userList: [],
            repoList: [],
            repo: null,
            userLoading: false,
            repoLoading: false,
        }),
        methods: {            
            procuraUsuariosGithub: debounceDecorator(async function () { // atenção não use o arrow function, quebra o decorator por algum motivo.
                this.userLoading = true
                const data = await api.searchUsers(this.userSearch)
                this.userList = data.items
                this.userLoading = false
            }, 500),
            async listaRepositorios(){
                this.repoLoading = true
                const data = await api.searchRepos(this.user)
                this.repoList = data
                this.repoLoading = false
            }
        },
        watch: {
            userSearch () {
                this.procuraUsuariosGithub()
            },
            user(){
                this.listaRepositorios()
            },
            repo(){
                console.log(this.repo)
            }
        }
    }
</script>
  
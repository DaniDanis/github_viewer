<script src="https://kit.fontawesome.com/1ba32175c2.js" crossorigin="anonymous"></script>
<template>
    <div>
        <p>{{ dir }}</p>
        <v-btn v-if="dir.length > 0" @click="turnBack">VOLTA</v-btn>
        <div v-for="content in contentTree" :key="content.name">
            <a v-if="content.type == 'dir'" @click="changeDir(content.name)" width="150px"><v-icon color="primary">mdi-folder-open</v-icon>{{ content.name }}</a>
            <div v-else-if="content.name.includes('.py')"><v-icon>mdi-language-python</v-icon>{{ content.name }}</div>
            <div v-else-if="content.name.includes('.md')"><v-icon>mdi-language-markdown</v-icon>{{ content.name }}</div>
            <div v-else-if="content.name.includes('.git')"><v-icon>mdi-git</v-icon>{{ content.name }}</div>
            <div v-else-if="content.name.includes('.eslint')"><v-icon>mdi-eslint</v-icon>{{ content.name }}</div>
            <div v-else-if="content.name.includes('.json')"><v-icon>mdi-code-json</v-icon>{{  content.name }}</div>
            <div v-else-if="content.name.includes('.js')"><v-icon>mdi-language-javascript</v-icon>{{  content.name }}</div>
            <div v-else-if="content.name.includes('.vue')"><v-icon>mdi-vuejs</v-icon>{{  content.name }}</div>
            <div v-else-if="content.name.includes('.html')"><v-icon>mdi-language-html5</v-icon>{{  content.name }}</div>
            <div v-else>{{ content.name }}</div>
        </div>
    </div>
</template>
  
<script>
import {api} from '~api'
 
    export default {  
        props: [
            'repo'
        ],
        data: () => ({
            owner: '',
            repoName: '',
            contentTree: [],
            dir: ''
        }),
        methods: {
            async callContents() {
                this.loading = true
                const contents = await api.callContents(this.owner, this.repoName, this.dir)
                this.contentTree = contents
                this.loading = false
            },
            async changeDir(dir) {
                if (this.dir.length > 0){
                    this.dir += ('/' + dir)
                } else {
                    this.dir = dir
                }
                this.callContents()
            },
            async turnBack() {
                const index = this.dir.lastIndexOf('/')
                if (index === -1){
                    this.dir = ''
                } else {
                    this.dir = this.dir.slice(0, index) 
                }
                this.callContents()
            }
        },
        watch: {
            repo(){
                this.dir = ''
                if (this.repo.name) {
                    this.owner = this.repo.owner.login,
                    this.repoName = this.repo.name
                    this.callContents()
            }
        }
    }
    }
</script>
  
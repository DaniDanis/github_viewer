<script src="https://kit.fontawesome.com/1ba32175c2.js" crossorigin="anonymous"></script>
<template>
    <div>
        <p>{{ dir }}</p>
        <v-btn v-if="dir.length > 0" @click="turnBack">VOLTA</v-btn>
        <div v-for="content in contentTree" :key="content.name">
            <font-awesome-icon icon="folder" />
            <a v-if="content.type == 'dir'" @click="changeDir(content.name)" width="150px">{{ content.name }}</a>
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
  
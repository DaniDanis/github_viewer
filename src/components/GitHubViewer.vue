<template>
  <v-container>
      <GitHubRepo @repoSelected="onRepoSelected" @userSelected="saveUser"/>
      <GitHubIssues :repo="repo" v-if="false"/>
      <GitHubRepoContent :repo="repo" :user="user"/>      
    </v-container>
  </template>
  
  <script>
  import GitHubRepo from './GitHubRepo.vue'
  import GitHubIssues from './GitHubIssues.vue'
  import GitHubRepoContent from './GitHubRepoContent.vue'
    export default { 
        components: {
            GitHubRepo,
            GitHubIssues,
            GitHubRepoContent
        },
        data: () => ({
          repo: null,
          user: null
        }),
        methods: {
          onRepoSelected(repo) {
            this.repo = repo
          },
          saveUser(user) {
            this.user = user
          }
        }
    }
  </script>
  
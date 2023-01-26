<template>
  <v-container>
      <GitHubRepo @repoSelected="onRepoSelected"/>
      <GitHubIssues :repo="repo" v-if="false"/>
      <GitHubRepoContent :repo="repo"/>      
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
          repo: null
        }),
        methods: {
          onRepoSelected(repo) {
            this.repo = repo
          }
        }
    }
  </script>
  
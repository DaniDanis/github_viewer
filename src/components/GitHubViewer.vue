<template>
  <v-container>
      <GitHubRepo @repoSelected="onRepoSelected"/>
      <GitHubIssues :repo="repo"/>
    </v-container>
  </template>
  
  <script>
  import GitHubRepo from './GitHubRepo.vue'
  import GitHubIssues from './GitHubIssues.vue'
    export default { 
        components: {
            GitHubRepo,
            GitHubIssues
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
  
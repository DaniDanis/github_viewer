<template>
    <div>
        <v-row>
            <v-col col="12">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Number</th>
                                <th class="text-left">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="issue in issues" :key="issue.id">
                                <td>{{ issue.number }}</td>
                                <td>{{ issue.title }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
                <v-btn color="primary" v-if="temMais" @click="listIssues">MAIS</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {api} from '~api'

    export default {
        data: () => ({
            issues: [],
            loading: false,
            nextPage: 1,
            temMais: false
        }),
        props: [
            'repo'
        ],
        watch: {
            repo(){
                this.issues = []
                this.nextPage = 1
                this.temMais = false
                if (this.repo) {
                    this.listIssues()
                }
            }
        },
        methods: {
            async listIssues() {
                this.loading = true
                const maisIssues = await api.listIssues(this.repo.owner.login, this.repo.name, this.nextPage)
                this.temMais = (maisIssues.length === 30)
                this.issues = this.issues.concat(maisIssues)
                this.nextPage++
                this.loading = false
            },
        }
    }

</script>
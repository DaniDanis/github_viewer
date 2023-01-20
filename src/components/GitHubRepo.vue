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
    export default { 

        data: () => ({
            user: null,
            userList: {},
            loading: false,
            userSearch: null,
        }),
        watch: {
            userSearch () {
                this.userLoading = true
                setTimeout(() => {
                    this.userList = [
                        {login: "João"},
                        {login: "José"}
                    ]
                }, 1000).then(this.userLoading = false)
            }
        }
    }
</script>
  
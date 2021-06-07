<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="text-start">
            <h1> <strong>{{ user.name }}</strong> </h1>
                <p class="mb-1">Email: <strong>{{ user.email }}</strong></p>
                <p>Registered: <strong>{{ user.created_at | formatDate }}</strong></p>
        </div>
    </div>
</template>

<script>
import Auth from '../services/Auth'

export default {
    name: 'user',

    data() {
        return {
            user: {}
        }
    },

    beforeRouteEnter(to, from, next) {
        next(async vm => {
            try {
                vm.user = await Auth.getUser();
            } catch(e) {
                console.log(e);
            }
        })
    },

    filters: {
        formatDate(date) {
            const newDate = new Date(date);
            return newDate.toLocaleDateString('en-GB');
        }
    }
}
</script>

<style>

</style>
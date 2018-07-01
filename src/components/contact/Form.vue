<template>
<form @submit.prevent="submit">
    <input v-model="name"
        type="text" class="input" placeholder="Contact Name" required="true">

    <button type="submit" class="btn">{{submitButtonText}}</button>
</form>
</template>

<script>
export default {
    name: 'Form',

    props: {
        submitButtonText: String
    },

    data () {
        return {
            name: ""
        }
    },

    methods: {
        submit() {
            this.$emit('submit', this.$data);
        }
    },
}
</script>

<style scoped>

</style>
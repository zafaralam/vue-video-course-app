<template>
    <div>
        <h1>Show Contact</h1>
        {{userId}}
        <!-- <Form submitButtonText="TEXT" @submit="submit" /> -->
    </div>
</template>

<script>
import Form from "@/components/contact/Form"

export default {
    name: 'Show',

    components: {
        Form
    },

    data() {
        return {
            userId: this.$route.params.id
        };
    },

    methods: {
        submit(data) {
            console.log(data);
        }
    },

    watch: {
        $route: function() {
            this.userId = this.$route.params.id;
        }
    }
}
</script>

<style scoped>

</style>
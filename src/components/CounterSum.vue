<template>
    <div>
        <hr>
        <div>
            总数为： {{sentCountSum}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sentCountSum'],
        data() {
            return {
                // totalCount: ''
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
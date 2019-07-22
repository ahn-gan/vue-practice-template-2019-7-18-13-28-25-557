<template>
    <div>
        <hr>
        <div>
            总数为： {{sum}}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            sum () {
                return this.$store.state.counterSum;
            }
        }
    }
</script>

<style scoped>

</style>
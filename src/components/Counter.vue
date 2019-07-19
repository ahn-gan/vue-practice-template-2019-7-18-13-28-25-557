<template>
    <div>
        <span class="count-margin">
            <BUTTON type="button" @click="addCount">+</BUTTON>
        </span>
        <span class="count-margin">
            {{count}}
        </span>
        <span>
            <button type="button" @click="reduceCount">-</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data() {
            return {
                count: 0,
                subSum: 0
            }
        },
        methods: {
            addCount() {
                this.count++;
                this.subSum += 1;
                this.$emit('childEvent', 1);
            },
            reduceCount() {
                this.count--;
                this.subSum -= 1;
                this.$emit('childEvent', -1);

            }
        },
        beforeDestroy() {
            this.$emit('destroySub', this.subSum);
        }
    }
</script>

<style scoped>

    .count-margin {
        margin-right: 40px;
    }

</style>
<template>
    <div>
        <div>
            <input type="number" v-model.number="inputCount">
        </div>
        <hr>
        <div>
            这里输入Counter个数： {{inputCount}}
        </div>
        <hr size="3">
        <counter v-for="(item, index) in inputCount" :key="index" class="counter-margin" @childEvent="getSubCount" @destroySub="destroySubSum"></counter>
        <counter-sum :sentCountSum="countSum"></counter-sum>
    </div>
</template>

<script>
    import Counter from './Counter';
    import CounterSum from './CounterSum';

    export default {
        components: {CounterSum, Counter},
        comments: {
            Counter, CounterSum
        },
        data() {
            return {
                countSum: 0,
                inputCount: ''
            }
        },
        methods: {
            getSubCount(subCount) {
                this.countSum += subCount;
            },
            destroySubSum(subSum) {
                this.countSum -= subSum;
            }
        },
        watch: {
            inputCount: function (newVal) {
                if (newVal === '') {
                    this.countSum = 0;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .counter-margin {
        margin-bottom: 30px;
    }

</style>

<template>
    <div ref="img" class="img">

    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.imgec();
    },
    methods: {
        imgec() {
            let mychart = echarts.init(this.$refs.img);
            let option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [15, 20, 25, 30, 25, 23, 20],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            mychart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
.img {
    width: 750px;
    height: 400px;
}
</style>
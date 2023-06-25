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
                title: {
                    text: '薪资结构'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['语文老师', '数学老师', '物理老师', '英语老师', '化学老师']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1年', '2-3年', '3-5年', '6-8年', '8-10年', '10-12年', '12以上']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '语文老师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [3000, 5000, 6000, 7000, 10000, 12000, 15000]
                    },
                    {
                        name: '数学老师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [4000, 4000, 6000, 8000, 10000, 11000, 12000]
                    },
                    {
                        name: '物理老师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [5000, 6000, 7000, 8000, 9000, 12000, 16000]
                    },
                    {
                        name: '英语老师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [2000, 3000, 4000, 4500, 5000, 6000, 7000]
                    },
                    {
                        name: '化学老师',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [4000, 5000, 6000, 8000, 10000, 13000, 16000]
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
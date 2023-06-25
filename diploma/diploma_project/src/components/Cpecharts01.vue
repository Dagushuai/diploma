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
                    data: ['web前端', '全栈', 'java工程师', '框架师', '项目经理']
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
                        name: 'web前端',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [6000, 10000, 12000, 15000, 20000, 22000, 25000]
                    },
                    {
                        name: '全栈',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [7000, 11000, 15000, 18000, 21000, 23000, 27000]
                    },
                    {
                        name: 'java工程师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [6500, 10000, 13000, 17000, 19000, 23000, 26000]
                    },
                    {
                        name: '框架师',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [10000, 15000, 18000, 20000, 23000, 26000, 32000]
                    },
                    {
                        name: '项目经理',
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
                        data: [8000, 10000, 15000, 18000, 20000, 23000, 26000]
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
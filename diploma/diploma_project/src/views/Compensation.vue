<template>
    <div class="body">
        <Topnav></Topnav>
        <div class="contain main">
            <div class="left">
                <!-- 左边的内容 -->
                <Leftnav></Leftnav>
            </div>
            <!-- 右边的内容 -->
            <div class="right">
                <el-tabs type="border-card" class="demo-tabs">
                    <el-tab-pane>
                        <template #label>
                            <span class="custom-tabs-label">
                                <span>计算机专业</span>
                            </span>

                        </template>
                        <!-- 每个分类下面的内容 -->

                        <div class="contentbox">
                          
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span>第一点</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img">
                                    <Cpecharts01></Cpecharts01>
                                </div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>分析：
                                    <br>最近几年虽然有很多其他专业的网计算机专业靠拢但是我们依旧还没有达到一个饱和的状态，行情依旧比较良好。<br>
                                    建议：<br>
                                    
                                    把自己的专业学扎实学精。
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="师范专业">
                        <div>
                            <div class="contentbox">
                            
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span>第一点</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img">
                                    <Cpecharts02></Cpecharts02>
                                </div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>分析：
                                    <br>要想当好一个老师那么首先一定要给同学们做好一个代表，让同学们从心底里接受你，打成一片，
                                    这是一个老师应该有的一个素养。<br>
                                    建议：<br>
                                    让每个同学都能意识到你在乎他，你关注他。好好鼓励每一个同学，成绩不能说明一切，每一个孩子都有着他自己的闪光点。
                                </div>
                            </div>
                        </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="医学专业">
                        <div>
                            <div class="contentbox">
                           
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span>第一点</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img">
                                    <Cpecharts03></Cpecharts03>
                                </div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>分析：
                                    <br>医学专业需要做的就是把前期的困难一一克服，万事开头难<br>
                                    建议：<br>
                                    前期需要耐得住性子，不要太急功近利，要把技术学好，和患者好好地沟通。
                                </div>
                            </div>
                        </div>
                        </div>
                    </el-tab-pane>

                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Leftnav from '../components/Leftnav.vue';
import Cpecharts01 from '../components/Cpecharts01.vue';
import Cpecharts02 from '../components/Cpecharts02.vue';
import Cpecharts03 from '../components/Cpecharts03.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        Topnav,
        Leftnav,
        Cpecharts01,
        Cpecharts02,
        Cpecharts03
    }
}
</script>

<style lang="scss" scoped>
.body {
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
}

.contain {
    width: 1200px;
    margin: 0 auto;
}


.main {
    overflow: hidden;
    // clear: both;
    margin-top: 20px;
    // background-color: rgb(245, 245, 245);

    .left {
        float: left;
        width: 200px;
        // height: 500px;
    }

    .right {
        margin: 0 20px;
        width: 800px;
        // height: 500px;
        float: left;

        .contentbox {
            margin-top: 20px;
            position: relative;

            .right-nav {
                position: fixed;
                top: 150px;
                right: 10%;
                width: 100px;
                height: 200px;
                background-color: aqua;

            }

            .content0 {
                margin: 20px 0;
                font-size: 12px;
                color: rgba(186, 141, 232, 0.8);
            }

            .title0 {
                float: left;
                margin-right: 5px;
            }

            .img {
                margin: 20px 0;
            }
        }

    }
}
</style>
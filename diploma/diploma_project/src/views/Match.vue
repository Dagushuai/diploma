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
                            <!-- 右边的导航栏 -->
                            <div class="right-nav">
                                <div><a href="#tip01">往年上岸率</a></div>
                                <div><a href="#tip02">专业对口情况</a></div>
                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip01">往年上岸率</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img">
                                    <Imgecharts01></Imgecharts01>
                                </div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>总体分析：这几年的上岸率成下滑路线。随着这几年考生的不断增多，独木桥也是越来越窄，上岸率总体来说有些下滑。
                                    建议:除了考研，也得为自己准备其他的方向，也得为自己的就业做好打算。
                                </div>
                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip02">就业后的专业对口情况</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img">
                                    <Imgecharts02></Imgecharts02>
                                </div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>总体分析：毕业后的专业对口占大多数，只有极少数同学毕业后干上了不相关的专业。
                                    建议:好好学好自己的专业，把它变成自己的长处。毕业后才好找的自己心仪，喜欢的工作。
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="师范专业">
                        <div>
                            <div class="contentbox">
                                <!-- 右边的导航栏 -->
                                <div class="right-nav">
                                    <div><a href="#tip03">往年上岸率</a></div>
                                    <div><a href="#tip04">专业对口情况</a></div>
                                </div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span id="tip03">往年上岸率</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">
                                    <!-- 数据可视化的图片 -->
                                    <div class="img">
                                        <Imgecharts03></Imgecharts03>
                                    </div>
                                    <div class="iconfont icon-shuji title0"></div>
                                    <span class="content0">分析及建议</span>
                                    <div>总体分析：这几年的上岸率成下滑路线。随着这几年考生的不断增多，独木桥也是越来越窄，上岸率总体来说有些下滑。
                                        建议:除了考研，也得为自己准备其他的方向，也得为自己的就业做好打算。
                                    </div>
                                </div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span id="tip04">就业后的专业对口情况</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">
                                    <!-- 数据可视化的图片 -->
                                    <div class="img">
                                        <Imgecharts04></Imgecharts04>
                                    </div>
                                    <div class="iconfont icon-shuji title0"></div>
                                    <span class="content0">分析及建议</span>
                                    <div>总体分析：毕业后的专业对口占大多数，只有极少数同学毕业后干上了不相关的专业。
                                        建议:好好学好自己的专业，把它变成自己的长处。毕业后才好找的自己心仪，喜欢的工作。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="医学专业">
                        <div>
                            <div class="contentbox">
                                <!-- 右边的导航栏 -->
                                <div class="right-nav">
                                    <div><a href="#tip05">往年上岸率</a></div>
                                    <div><a href="#tip06">专业对口情况</a></div>
                                </div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span id="tip05">往年上岸率</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">
                                    <!-- 数据可视化的图片 -->
                                    <div class="img">
                                        <Imgecharts05></Imgecharts05>
                                    </div>
                                    <div class="iconfont icon-shuji title0"></div>
                                    <span class="content0">分析及建议</span>
                                    <div>总体分析：近几年的考研情况相对平稳没有太大改动。
                                        建议:可以参考往几年的考研情况。
                                    </div>
                                </div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span id="tip06">就业后的专业对口情况</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">
                                    <!-- 数据可视化的图片 -->
                                    <div class="img">
                                        <Imgecharts06></Imgecharts06>
                                    </div>
                                    <div class="iconfont icon-shuji title0"></div>
                                    <span class="content0">分析及建议</span>
                                    <div>总体分析：绝大多数毕业后都是专业对口情况。
                                        建议:实践工作一定要到位。
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
import Imgecharts01 from '../components/Imgecharts01.vue';
import Imgecharts02 from '../components/Imgecharts02.vue';
import Imgecharts03 from '../components/Imgecharts03.vue';
import Imgecharts04 from '../components/Imgecharts04.vue';
import Imgecharts05 from '../components/Imgecharts05.vue';
import Imgecharts06 from '../components/Imgecharts06.vue';
export default {
    data() {
        return {

        }
    },

    components: {
        Topnav,
        Leftnav,
        Imgecharts01,
        Imgecharts02,
        Imgecharts03,
        Imgecharts04,
        Imgecharts05,
        Imgecharts06,
    },

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
        height: 500px;
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
                background-color: rgba(186, 141, 232, 0.1);
                font-size: 12px;

                >div {
                    height: 20px;
                    line-height: 20px;

                }

            }

            .content0 {
                font-size: 12px;
                color: rgba(186, 141, 232, 0.8);
                margin-top: 20px;
            }

            .title0 {
                float: left;
                margin-right: 5px;
            }

            .img {

                // background-color: aqua;
                margin: 20px 0;
            }
        }

    }
}
</style>
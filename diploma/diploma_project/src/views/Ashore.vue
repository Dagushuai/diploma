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
                            <div class="right-nav"></div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span>第一点</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                <!-- 数据可视化的图片 -->
                                <div class="img"></div>
                                <div class="iconfont icon-shuji title0"></div>
                                <span class="content0">分析及建议</span>
                                <div>上岸统计</div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="师范专业">
                        <div>
                            <div class="contentbox">
                                <!-- 右边的导航栏 -->
                                <div class="right-nav"></div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span>第一点</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="医学专业">
                        <div>
                            <div class="contentbox">
                                <!-- 右边的导航栏 -->
                                <div class="right-nav">123</div>
                                <!-- 标题部分 -->
                                <div class="content0">
                                    <div class="iconfont icon-yuechi title0"></div>
                                    <span>第一点</span>
                                </div>
                                <!-- 内容部分 -->
                                <div class="content1">

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
export default {
    data() {
        return {

        }
    },
    components: {
        Topnav,
        Leftnav
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
                font-size: 12px;
                color: rgba(186, 141, 232, 0.8);
            }

            .title0 {
                float: left;
                margin-right: 5px;
            }

            .img {
                width: 750px;
                height: 400px;
                background-color: aqua;
                margin: 20px 0;
            }
        }

    }
}
</style>
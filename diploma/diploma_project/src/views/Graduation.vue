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
                                <span>建议</span>
                            </span>

                        </template>
                        <!-- 每个分类下面的内容 -->

                        <div class="contentbox">
                            <!-- 右边的导航栏 -->
                            <div class="right-nav">
                                <div>目录</div>
                                <div><a href="#tip1">第二学时</a></div>
                                <div><a href="#tip2">定位</a></div>
                                <div><a href="#tip3">留后路</a></div>
                                <div><a href="#tip4">和辅导员的关系</a></div>
                                <div><a href="#tip5">挂科</a></div>
                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip1">学分和第二课堂的学时以及绩点问题</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                这三者的达成条件你必须满足才可以毕业。学分来自我们学习的课程，完成课程获得学分。期末成绩决定这门课程你获得的绩点，绩点最后是有最低要求的所以别想着及格就好。
                                第二课堂的学时主要来自于社团以及一些学校组织的活动。建议大一的时候去把这个部分完成。
                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip2">一定要认清自己的定位</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                (这个部分主要从就业的角度去分析)首先对自己进行一个客观分析，1.我有什么是可以给别人产生价值的？一定要具体！2.我的文凭会给我优势吗？
                                如果说你想不出来或者说是没有那正好说明咋们的可塑造性强，那么在大学的4年或者5年时间里请你们每天坚持去锻炼出一项能产生价值的技能
                                而且是超越很多的人。这样对你的就业会很有帮助。

                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip3">一定要给自己留一条后路</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                惊喜和意外谁也不知道哪个会先来，所以不要再一棵树上吊死。多给自己一些选择的机会，不要不撞南墙不回头。别到最后一无所有、空悲喜。

                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip4">和辅导员处理好关系</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                辅导员会陪伴我们整个大学生活，我们遇到不清楚的事情拿不准的事情都可以去咨询我们的辅导员。辅导员在整个大学期间都会给我们一些不错的建议。
                                和辅导员处理好关系只有好处没有坏处，不要一时的冲动造成无法改变的结果。

                            </div>
                            <!-- 标题部分 -->
                            <div class="content0">
                                <div class="iconfont icon-yuechi title0"></div>
                                <span id="tip5">挂科问题</span>
                            </div>
                            <!-- 内容部分 -->
                            <div class="content1">
                                能不要挂科就不要挂科，挂科是一件非常麻烦的事情，特别是自己的专业课挂科会非常的痛苦。挂科不仅会影响
                                后面的毕业就业，而且一旦挂科当学期的评优奖学金直接没有了。所以在大学里面一定要避免挂科，在后面就业的时候
                                挂科也会有一些影响但是你只要说自己没挂过就好。

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
        height: 500px;
    }

    .right {
        margin: 0 20px;
        width: 800px;
        float: left;

        .contentbox {
            margin-top: 20px;
            position: relative;

            .right-nav {
                position: fixed;
                top: 150px;
                right: 10%;
                width: 100px;
                // height: 200px;
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
            }
            .content1{
                margin: 20px 0 ;
            }

            .title0 {
                float: left;
                margin-right: 5px;

            }
        }

    }
}
</style>
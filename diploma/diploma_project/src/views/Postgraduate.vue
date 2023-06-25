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
                <div class="contentbox">
                    <!-- 右边的导航栏 -->
                    <div class="right-nav">
                        <div><a href="#tip1">什么是保研</a></div>
                        <div><a href="#tip2">保研的类别</a></div>
                        <div><a href="#tip3">申请保研条件</a></div>
                        <div><a href="#tip4">保研生的类别</a></div>
                        <div><a href="#tip5">期末成绩</a></div>
                    </div>
                    <!-- 标题部分 -->
                    <div class="content0">
                        <div class="iconfont icon-yuechi title0"></div>
                        <span id="tip1">什么是保研？</span>
                    </div>
                    <!-- 内容部分 -->
                    <div class="content1">
                        百度百科解释：保研（全称：推荐优秀应届本科毕业生免试攻读硕士学位研究生），
                        顾名思义，就是被保送者不经过笔试等初试一些程序，通过一个考评形式鉴定学生的学习成绩、综合素质等，在一个允许的范围内，直接由学校保送读研究生。
                        保研也就是我们所说的推免，直白的话来讲就是：拥有一个免试资格。值得注意的是：
                        学校只能给你一个免试的资格，并不能保证你能去哪个学校，这就与后面要讲的夏令营、预推免、九推相关了。

                    </div>
                    <!-- 标题部分 -->
                    <div class="content0">
                        <div class="iconfont icon-yuechi title0"></div>
                        <span id="tip2">保研的类别</span>
                    </div>
                    <!-- 内容部分 -->
                    <div class="content1">
                        在我看来保研可以分为以下三种：
                        通过综合成绩评定获得的推免生资格：大部分推免生使用的方式，采用学习成绩与科研成绩占比排名，根据推免生名额划定是否具有推免生资格
                        戴帽推免：获得某些重大比赛的一等奖，如：“互联网+”大学生创新创业大赛、全国大学生数学建模竞赛，等.
                        (注：不同学校可能有所不同，可以参考你们学校往年的推免综合成绩计分细则 )
                        直推：获得另一些重大比赛的一等奖，如：“物联网”竞赛的一等奖，等
                        支教保研：参与某些支教计划，然后保留学籍，等支教完成之后回来读研究生
                        行政保研：担任学校的某些学生组织的管理者

                    </div>
                    <!-- 标题部分 -->
                    <div class="content0">
                        <div class="iconfont icon-yuechi title0"></div>
                        <span id="tip3">申请的条件</span>
                    </div>
                    <!-- 内容部分 -->
                    <div class="content1">
                        据我所知的能够申请保研的学生必须具有以下条件：

                        CET6：425分以上，或者托福、雅思到达某个分数
                        本科期间没有挂科记录
                        修完本专业所要求的公必、专必、专选、公选所对应的学分
                        (根据学校不同，可能允许1~2分的学分未修，具体情况以你们学校为准)
                        如果没有以上条件，应该是没有资格申请保研的。

                    </div>
                    <!-- 标题部分 -->
                    <div class="content0">
                        <div class="iconfont icon-yuechi title0"></div>
                        <span id="tip4">保研生的类别</span>
                    </div>
                    <!-- 内容部分 -->
                    <div class="content1">
                        保研成为研究生一般有三种类型：

                        学硕：三年研究生生活，主要搞学术研究，需要发表论文毕业
                        直博：五年博士生活(不延毕的话)，毕业后直接博士学位
                        专硕：两年研究生活，主要搞工程项目，也有部分学校的专硕也搞科研，但是较少
                    </div>
                    <!-- 标题部分 -->
                    <div class="content0">
                        <div class="iconfont icon-yuechi title0"></div>
                        <span id="tip5">期末成绩</span>
                    </div>
                    <!-- 内容部分 -->
                    <div class="content1">
                        争取每学期的期末成绩都要进入年级前10的位置，但是一般来说挺难的。如果说硬成绩排不了的话可以通过加分的形式去弥补，
                        并且！很多加分其实很容易的但是新生们都不知道所以在这里列举主要以部分加分项：
                        <br>班级干部、室长会加分
                        <br>获奖(校级、院级 校级>院级的) 这个部分就要关注辅导员在群里的消息还有就是社团的相关消息
                        <br>每年各种的国家级比赛 这个是高加分项 时间基本上是固定的 一般都是做一个项目或者有一些好的想法。注意通知时间就好
                    </div>
                </div>
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
        // height: 500px;
        float: left;
        background-color: #fff;

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

            .content1 {
                margin: 20px 0;
            }

            .title0 {
                float: left;
                margin-right: 5px;

            }
        }


    }
}
</style>
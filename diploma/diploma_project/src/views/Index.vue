<template>
    <div>
        <!-- 侧边导航 -->
        <div class="right-nav">
            <div><a href="#hot">热评</a></div>
            <div><a href="#tip">排行</a></div>
            <div><a href="#must">必看</a></div>
            <div><a href="#top">回到顶部</a></div>
        </div>
        <!-- 导航 -->
        <Topnav></Topnav>
        <!-- 上背景 -->
        <div class="indexbac contain"></div>
        <!-- 热门榜 -->
        <div class="hot contain">
            <div class="top">
                <!-- 字体图标 -->
                <div class="iconfont icon-huore1-copy"></div>
                <div id="hot">热门榜</div>
            </div>
            <div class="bottom ">
                <div v-for="(item, index) in hotbox" :key="index">
                    <div class="top">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="left">{{ item.content }}</div>
                    <div class="right" @click="gotoexp">
                        <div class="right0">立即</div>
                        <div class="right1">前往</div>
                    </div>
                </div>

            </div>

        </div>
        <!-- 排行榜 -->
        <div class="hot contain">
            <div class="top">
                <!-- 字体图标 -->
                <div class="iconfont icon-paihangbang-"></div>
                <div id="tip">排行榜</div>
            </div>
            <div class="bottom ">
                <div v-for="(item, index) in clubs" :key="index">
                    <div class="top">
                        <img :src="item.imgsrc" alt="">
                    </div>
                    <div class="left">{{ item.introduction }}</div>
                    <div class="right" @click="gotoclub(item.id)">
                        <div class="right0">了解</div>
                        <div class="right1">详情</div>
                    </div>
                </div>

            </div>

        </div>
        <!-- 必看专区 -->
        <div class="hot contain">
            <div class="top">
                <!-- 字体图标 -->
                <div class="iconfont icon-yuechi1"></div>
                <div id="must">必看专区</div>
            </div>
            <div class="must">
                <div>
                    <div class="top">
                        <img src="../img/020.jpg" alt="">
                    </div>
                    <div class="bottom">
                        <router-link to="/graduationindex/campusadvise">校园建议</router-link>
                    </div>

                </div>
                <div>
                    <div class="top">
                        <img src="../img/021.jpg" alt="">
                    </div>
                    <div class="bottom">
                        <router-link to="/graduationindex/graduation">毕业须知</router-link>
                    </div>
                </div>
                <div>
                    <div class="top">
                        <img src="../img/022.jpg" alt="">
                    </div>
                    <div class="bottom">
                        <router-link to="/graduationindex/postgraduate">保研建议</router-link>
                    </div>
                </div>
                <div>
                    <div class="top">
                        <img src="../img/023.jpg" alt="">
                    </div>
                    <div class="bottom">
                        <router-link to="/exp">经验之谈</router-link>
                    </div>
                </div>
            </div>

        </div>
        <!-- 底部介绍 -->
        <Bottomcdt></Bottomcdt>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Bottomcdt from '../components/Bottomcdt.vue';
import { getclubmsgthree, hottop } from '../utils/02.api';
export default {
    data() {
        return {
            clubs: [],
            hotbox: []
        }
    },
    components: {
        Topnav,
        Bottomcdt
    },
    mounted() {
        console.log(document.cookie);
        this.getclubmsgthree();
        this.gethottop()
    },
    methods: {
        getclubmsgthree() {
            getclubmsgthree().then(res => {
                console.log(res.data);
                this.clubs = res.data;
            }).catch(e => {
                console.log(e)
            })
        },
        gotoclub(id: any) {
            this.$router.push(`/club?id=${id}`)
        },
        gotoexp() {
            this.$router.push('/exp')
        },
        // 得到前三的works
        gethottop() {
            hottop().then(res => {
                this.hotbox = res.data;
                console.log('这个是hotbox', this.hotbox);
            }).catch(e => {
                console.log(e);
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.contain {
    width: 1200px;
    margin: 0 auto;
}

.right-nav {
    position: fixed;
    right: 0;
    top: 50%;
    font-size: 12px;


    >div {
        text-align: center;
        width: 70px;
        height: 70px;
        line-height: 70px;
        background-color: rgba(186, 141, 232, 0.8);
        transition: all 1s linear;


        >a {
            display: block;
            width: 100%;
            height: 100%;
            color: #fff;
        }
    }

    >div:hover {
        transform: scale(1.1);
        transition: all 1s linear;
    }
}

.indexbac {
    height: 450px;
    width: 1200px;
    background-image: url('../img/024.jpeg');
    background-repeat: no-repeat;
   background-size: cover;
}

.hot {
    height: 400px;
    background-color: rgba(222, 209, 236, 0.5);

    .top {
        height: 70px;
        background-color: rgb(218, 245, 253);

        >div {
            float: left;
            height: 70px;
            line-height: 70px;
        }

        >:first-child {
            font-size: 50px;
        }

        >:last-child {
            font-size: 24px;
            font-weight: 600;
            color: rgba(186, 141, 232, 0.8);
        }
    }

    .bottom {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 330px;

        >div {
            width: 350px;
            height: 280px;
            background-color: #fff;

            .top {
                height: 180px;
                // background-color: purple;

                img {
                    width: 350px;
                    height: 180px;
                }
            }

            .left {
                float: left;
                width: 200px;
                height: 80px;
                // background-color: aqua;
                margin: 10px;
                overflow: hidden;
                font-size: 12px;
            }

            .right {
                position: relative;
                float: right;
                width: 100px;
                height: 80px;
                margin-top: 10px;
                background-color: rgba(127,255,212);
                font-size: 12px;
                text-align: center;

                .right0{
                    position: absolute;
                    bottom: 15px;
                    left: 37px;
                    height: 40px;

                }
                .right1{
                    position: absolute;
                   left: 37px;
                   bottom: 0px;
                    height: 40px;
                }
            }
            .right:hover{
                cursor: pointer;

            }
        }
    }
}

.must {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 330px;

    >div {
        height: 200px;
        width: 200px;
        // background-color: #fff;s

        .top {
            height: 150px;

            img {
                width: 200px;
                height: 150px;
            }

            // background-color: aqua;
            // background-image: url('../img/020.jpg')
        }

        .bottom {
            height: 50px;
            background-color: aquamarine;


        }
    }
}
</style>
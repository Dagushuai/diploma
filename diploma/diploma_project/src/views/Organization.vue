<template>
    <div>
        <Topnav></Topnav>
        <div v-for="(item, index) in clubs" :key="index" class="contentbox contain">
            <div class="rightnav">
                <div v-for="(item, index) in clubs" :key="index"><a
                        :href="`#` + JSON.parse(JSON.stringify(clubs))[index].name">{{
                            JSON.parse(JSON.stringify(clubs))[index].name }}</a></div>
            </div>
            <div class="main">
                <div class="left">
                    <img :src="JSON.parse(JSON.stringify(clubs))[index].imgsrc" alt="">
                </div>
                <div class="right">
                    <h3 class="title" :id="JSON.parse(JSON.stringify(clubs))[index].name">{{
                        JSON.parse(JSON.stringify(clubs))[index].name }}</h3>
                    <!-- <div class="heart"></div> -->
                    <div class="conduction">{{ JSON.parse(JSON.stringify(clubs))[index].introduction }}</div>
                    <div class="knowmore"><router-link
                            :to="{ path: '/club', query: { id: JSON.parse(JSON.stringify(clubs))[index].id } }">了解更多</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import { getmsg } from '../utils/02.api';
export default {
    data() {
        return {
            clubs: <any>[],
            // trueclubs:JSON.parse(JSON.stringify(this.clubs)) 
        }
    },
    components: {
        Topnav
    },
    mounted() {
        this.getmsg0();
        this.getclubs();

    },
    methods: {
        getmsg0() {
            getmsg().then(res => {
                // 获取所有社团的信息
                let data = res.data;
                console.log(data);
                this.clubs = data;
                console.log(this.clubs);



            })
        },
        getclubs() {
            console.log(JSON.parse(JSON.stringify(this.clubs)));
        }

    }
}
</script>

<style lang="scss" scoped>
.contain {
    width: 1200px;
    margin: 0 auto;
}

.contentbox {
    background-color: #fff;

    .rightnav {
        position: fixed;
        right: 10%;
        top: 150px;
        width: 100px;

        background-color: rgb(199, 163, 236);

        >div {
            margin: 10px 0;
            font-size: 12px;

            >a {
                color: #fff;
            }
        }
    }

    .main {
        display: flex;
        width: 800px;
        // height: 350px;
        margin: 20px auto;
        background-color: rgb(223, 211, 237);

        .left {
            width: 500px;
            height: 310px;
            margin: 20px 0;
            // background-color: antiquewhite;

            >img {
                width: 500px;
                height: 310px;

            }
        }

        .right {
            position: relative;
            flex-grow: 1;
            background-color: rgb(223, 211, 237);

            .title {
                position: absolute;
                top: 20px;
                left: 20px;
            }

            .heart {
                position: absolute;
                right: 20px;
                top: 20px;
                width: 25px;
                height: 25px;
                background-color: aqua;
            }

            .conduction {
                position: absolute;
                top: 60px;
                left: 20px;
                width: 250px;
                height: 170px;
                // background-color: aquamarine;
                overflow: hidden;
                /* 2.用省略号来代替超出文本 */
                text-overflow: ellipsis;
                /* 3.设置盒子属性为-webkit-box  必须的 */
                display: -webkit-box;
                /* 4.-webkit-line-clamp 设置为2，表示超出2行的部分显示省略号，如果设置为3，那么就是超出3行部分显示省略号 */
                -webkit-line-clamp: 8;
                /* 5.字面意思：单词破坏：破坏英文单词的整体性，在英文单词还没有在一行完全展示时就换行  即一个单词可能会被分成两行展示 */
                word-break: break-all;
                /* 6.盒子实现多行显示的必要条件，文字是垂直展示，即文字是多行展示的情况下使用 */
                -webkit-box-orient: vertical;

            }

            .knowmore {
                position: absolute;
                left: 20px;
                bottom: 20px;
                width: 250px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                background-color: rgb(199, 163, 236);

                >a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                }
            }

            .knowmore:hover {
                background-color: rgb(202, 172, 237);

            }
        }
    }
}
</style>
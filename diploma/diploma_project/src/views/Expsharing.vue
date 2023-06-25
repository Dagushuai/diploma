<template>
    <div>
        <Topnav></Topnav>
        <!-- 搜索框一栏 -->
        <div class="contain searchbox">
            <div class="search">
                <input type="text" class="textser" v-model="searchmsg">
                <div class="search0" @click="getsearchmsg">搜索</div>
            </div>
            <div class="publish" @click="publish">发布</div>
            <div style="clear: both;"></div>
        </div>
        <!-- 左侧导航栏 -->
        <div class="leftnav">
            <div @click="getallmsg">全部</div>
            <div @click="getworkstypemsg('毕业/就业')">毕业/就业</div>
            <div @click="getworkstypemsg('社团/学生会')">社团</div>
            <div @click="getworkstypemsg('日常生活')">日常生活</div>
        </div>
        <!-- 主要内容部分 -->
        <div class="main contain">
            <!-- 排行前三的盒子 -->
            <div class="topbox">
                <div class="bottomcontent" v-for="(item, index) in hotbox" :key="index">
                    <h3>前三</h3>
                    <div class="content">{{ item.content }}</div>
                    <div class="img"><img :src="`${item.url}`" alt=""></div>
                    <div class="good">
                        <div id="date">{{ item.time }}</div>
                        <div :class="[item.goodworkid ? `icon-dianzan1` : `icon-dianzan`, `iconfont`, `dianzan`]"
                            @click="dianzan(item.worksid, index)">
                            <!-- {{ index }} -->
                        </div>
                        <div :class="[item.collectionworkid ? `icon-jiaxingshoucangtianchong` : `icon-shoucang`, `dianzan`, `iconfont`]"
                            @click="shoucang(item.worksid, index)">
                            <!-- {{ index }} -->
                        </div>
                    </div>
                    <div class="comment">
                        <!-- 评论 -->
                    </div>
                </div>
            </div>

            <!-- 后面的盒子 -->
            <div class="bottombox">
                <div class="bottomcontent" v-for="(item, index) in works" :key="index">
                    <h3>title</h3>
                    <div class="content">{{ item.content }}</div>
                    <div class="img"><img :src="`${item.url}`" alt=""></div>
                    <div class="good">
                        <div id="date">{{ item.time }}</div>
                        <div :class="[item.goodworkid ? `icon-dianzan1` : `icon-dianzan`, `iconfont`, `dianzan`]"
                            @click="dianzan(item.worksid, index)">
                            <!-- {{ index }} -->
                        </div>
                        <div :class="[item.collectionworkid ? `icon-jiaxingshoucangtianchong` : `icon-shoucang`, `dianzan`, `iconfont`]"
                            @click="shoucang(item.worksid, index)">
                            <!-- {{ index }} -->
                        </div>
                    </div>
                    <div class="comment">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import { getallmsg, hottop, good, collection, getidbycookie, getworkstypemsg, getsearchmsg } from '../utils/02.api';
export default {
    data() {
        return {
            works: [],
            hotbox: [],
            userid: '',
            goodcolor: 0,
            discl: '',
            searchmsg: ''
        }
    },
    components: {
        Topnav
    },
    mounted() {
        // this.getallmsg();
        this.getidbycookie();
        // this.gethottop();


        // this.dianzan(item.id,index)
    },
    methods: {
        publish() {
            // 确认是否登陆过 cookie来确认
            console.log(document.cookie, '这个是exp界面');
            let no = document.cookie;

            if (no == null) {
                this.$router.push('/login')
            } else {
                this.$router.push('/publish')
            }
        },
        // 得到所有的works
        // getallmsg() {
        //     getallmsg().then(res => {
        //         console.log(res.data);
        //         this.works = res.data;
        //         console.log(this.works);
        //         // this.works = JSON.parse(JSON.stringify(this.works));
        //         // console.log(this.works);
        //     }).catch(e => {
        //         console.log(e);
        //     })
        // },
        getidbycookie() {
            getidbycookie(document.cookie).then(res => {
                this.userid = res.data;
                console.log('这个是userid', JSON.parse(JSON.stringify(this.userid))[0].id);

                hottop(JSON.parse(JSON.stringify(this.userid))[0].id).then(res => {
                    this.hotbox = res.data;
                    console.log('这个是hotbox', this.hotbox);
                }).catch(e => {
                    console.log(e);
                })

                getallmsg(JSON.parse(JSON.stringify(this.userid))[0].id).then(res => {
                    console.log(res.data);
                    this.works = res.data;
                    console.log('这个是所有的works',this.works);
                    // this.works = JSON.parse(JSON.stringify(this.works));
                    // console.log(this.works);
                }).catch(e => {
                    console.log(e);
                })
            }).catch(e => {
                console.log(e);
            })

            // 得到前三的works
            // gethottop() {
            // console.log('这个是userid===', this.userid)

            // },
        },


        dianzan(workid: any, index: any) {
            console.log('这个是workid', workid)
            good(JSON.parse(JSON.stringify(this.userid))[0].id, workid).then(res => {
                console.log('这个是点赞返回结果', res.data);
                let data = res.data;
                if (data.length == 1) {
                    // 这个时候进行的删除点赞操作
                    // console.log(this.hotbox[index].content)
                    this.works[index].goodworkid = null;
                    this.hotbox[index].goodworkid = null;
                  
                }
                else {
                    //这个时候进行点赞操作
                    this.works[index].goodworkid = 1;
                    this.hotbox[index].goodworkid = 1;
                  
                    
                }

            }).catch(e => {
                console.log(e);
            })
        },
        // 根据workstype获取不同的works
        getworkstypemsg(type: string) {
            getworkstypemsg(type).then(res => {
                console.log(res.data);
                this.works = res.data;
            }).catch(e => {
                console.log(e)
            })
        },
        // 根据搜索的内容获取works
        getsearchmsg() {
            getsearchmsg(this.searchmsg).then(res => {
                console.log(res.data)
                this.works = res.data;
            }).catch(e => {
                console.log(e)
            })
        },
        shoucang(workid: any, index: any) {
            console.log('这个是workid', workid)
            collection(JSON.parse(JSON.stringify(this.userid))[0].id, workid).then(res => {
                console.log('这个是收藏返回结果', res.data);
                let data = res.data;
                if (data.length == 1) {
                    // 这个时候进行的删除点赞操作
                    // console.log(this.hotbox[index].userid)
                    this.hotbox[index].collectionworkid = null;
                    this.works[index].collectionworkid = null;

                }
                else {
                    //这个时候进行点赞操作
                    this.hotbox[index].collectionworkid = 1;
                    this.works[index].collectionworkid = 1;
                }

            }).catch(e => {
                console.log(e);
            })
        }
        // gettime(t:any){
        //     let time = new Date(t).toJSON();
        //     t = new Date(+new Date(time) + 8 * 3600 * 1000).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
        //     return t;
        // }
        // getCookieByKey(key:any) {
        //     let cookie = document.cookie;
        //     let list = cookie.split(';');
        //     for (let i = 0; i < list.length; i++) {
        //         let c = list[i].trim();
        //         let index = c.indexOf(key);
        //         if (index == 0) {
        //             let v = c.substring(key.length + 1, c.length);
        //             return v;
        //         }
        //     }
        //     return null;
        // }
    }
}
</script>

<style lang="scss" scoped>
.dianzan {
    font-size: 25px;
}

.contain {
    width: 1200px;
    margin: 0 auto;
}

.searchbox {
    clear: both;

    .search {
        float: left;
        width: 1050px;
        height: 50px;
        background-color: antiquewhite;
        text-align: center;

        .textser {
            float: left;
            width: 948px;
            height: 48px;
            border: 1px solid rgba(0, 0, 0, .06);
            border-radius: 2px 0 0 2px;
            background: #f5f6f7;
            font-size: 14px;
            text-indent: 20px;
        }

        .textser:hover {
            border-color: rgba(186, 141, 232, 0.8);
        }

        .search0 {
            float: left;
            width: 100px;
            height: 50px;
            background-color: rgba(186, 141, 232, 0.8);
            line-height: 50px;
            cursor: pointer;
        }


    }

    .publish {
        float: right;
        width: 140px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: aqua;

    }


}

.leftnav {
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
        color: #fff;
    }

    >div:hover {
        transform: scale(1.1);
        transition: all 1s linear;
        cursor: pointer;
    }
}

.main {
    .topbox {
        margin: 50px 0;

        .top3 {
            height: 200px;
            background-color: bisque;
        }
    }

    // .bottombox {
    .bottomcontent {
        .content {
            height: 100px;
            background-color: rgb(218,245,253);
        }

        .img {
            height: 400px;
            background-color: rgb(236,230,243);
            // background-color: aqua;
            >img {
                height: 400px;
            }
        }

        .good {
            overflow: hidden;
            background-color: rgb(233,233,233);
            #date {
                float: left;
                width: 100px;
                height: 50px;
                margin: 0;
            }
        }

        .good>div {
            float: right;
            margin-left: 20px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            // background-color: red;
        }
    }
}

// }
</style>